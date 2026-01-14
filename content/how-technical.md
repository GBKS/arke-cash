---
title: The Mountains Website
description: A website about the most iconic mountains in the world.
---

Arké is an iOS wallet implementing the Ark protocol, a UTXO-sharing scheme for off-chain bitcoin payments. It provides instant, cheap transactions with non-custodial guarantees and unilateral exit to the base layer.

This page covers the architecture, trust assumptions, and tradeoffs. For protocol-level detail, see the [Ark documentation](https://docs.second.tech/ark-protocol/intro/).

---

## The Ark protocol in brief

Ark is a Layer 2 protocol where an Ark Service Provider (ASP) facilitates off-chain payments by coordinating shared UTXOs called Virtual Transaction Outputs (VTXOs).

**Key properties:**

- **Non-custodial.** Users hold keys to VTXOs and can unilaterally exit to on-chain bitcoin at any time.
- **Instant finality.** Payments between Ark users settle in seconds without on-chain confirmation.
- **Recipient privacy.** The ASP cannot link senders to receivers in most payment flows.
- **No inbound liquidity.** Unlike Lightning, recipients don't need channel capacity to receive.

---

## Architecture

```
┌─────────────────────────────────────────────┐
│                   User                      │
│  ┌─────────────────────────────────────┐    │
│  │           Arké iOS App              │    │
│  │  ┌─────────┐  ┌─────────────────┐   │    │
│  │  │ Key     │  │ VTXO            │   │    │
│  │  │ Storage │  │ Management      │   │    │
│  │  └─────────┘  └─────────────────┘   │    │
│  └─────────────────────────────────────┘    │
└─────────────────────────────────────────────┘
                      │
                      │ Blinded credentials
                      │ Round participation
                      ▼
┌─────────────────────────────────────────────┐
│          Ark Service Provider (ASP)         │
│  ┌──────────────┐  ┌───────────────────┐    │
│  │ Round        │  │ VTXO              │    │
│  │ Coordinator  │  │ Tree Construction │    │
│  └──────────────┘  └───────────────────┘    │
└─────────────────────────────────────────────┘
                      │
                      │ On-chain settlement
                      ▼
┌─────────────────────────────────────────────┐
│              Bitcoin Base Layer             │
└─────────────────────────────────────────────┘
```

---

## VTXOs and rounds

Users don't hold on-chain UTXOs directly. Instead, they hold VTXOs—off-chain outputs nested within shared transaction trees.

**Round lifecycle:**

1. ASP announces a new round (every few seconds)
2. Users register VTXOs they want to spend, receiving blinded credentials
3. Users redeem credentials to register new output VTXOs (unlinkable to inputs)
4. ASP constructs a transaction tree and publishes the root on-chain
5. Users verify their VTXOs exist in the tree and store the relevant branch

The on-chain footprint is a single transaction per round, regardless of participant count.

---

## Trust model

**What the ASP can do:**

- Refuse to include you in rounds (censorship)
- Go offline, preventing new Ark transactions

**What the ASP cannot do:**

- Steal your bitcoin (you hold the keys)
- Prevent you from exiting to on-chain bitcoin (unilateral exit)
- Link your sends to your receives (blinded credentials)
- See your wallet balance (no account model)

**The key guarantee:** If the ASP misbehaves or disappears, users can broadcast pre-signed transactions to claim their bitcoin on-chain. This is the unilateral exit—trustless, though it requires waiting for a timelock (currently configured at [X] blocks).

---

## Unilateral exit

Every VTXO includes a pre-signed exit path that lets the owner claim funds on-chain without ASP cooperation.

```
VTXO (off-chain)
    │
    │ User signs exit transaction
    ▼
On-chain UTXO (after timelock)
```

**Tradeoffs:**

- Exit requires an on-chain transaction (fees apply)
- Timelock delay before funds are spendable
- If many users exit simultaneously, on-chain fees may spike

This is the escape hatch, not the normal path. Under normal operation, users stay in the Ark and transact instantly.

---

## Receiving bitcoin

**From another Arké user:**
Instant. Sender's VTXO is spent, receiver gets a new VTXO in the same round. No on-chain transaction.

**From on-chain / other wallets:**
User provides a bitcoin address. Once confirmed on-chain, the ASP "lifts" the UTXO into a VTXO in the next round. The user then has an instantly-spendable Ark balance.

**From Lightning (planned):**
ASP operates a Lightning node and can receive on behalf of users, converting inbound Lightning payments to VTXOs.

---

## Privacy characteristics

| Property | Status |
|----------|--------|
| Sender-receiver unlinkability (within Ark) | Yes, via blinded credentials |
| Amount privacy | Partial—amounts visible to ASP during round |
| On-chain footprint | Minimal—shared UTXO, no direct user visibility |
| Metadata to ASP | IP address, timing (mitigated via Tor support) |

Arké is not a mixer or tumbler. Privacy comes from the protocol's structure, not from deliberate obfuscation.

---

## Key management

**Derivation:** BIP-84 (native SegWit) with standard derivation paths.

**Storage:** Keys stored in iOS Secure Enclave where available, falling back to encrypted Keychain.

**Backup:** Standard 12-word BIP-39 mnemonic. Recovery restores both on-chain UTXOs and VTXO claims (via ASP query or on-chain scanning for exits).

---

## Current limitations

**Alpha software.** Arké is in early development. Expect bugs. Don't use funds you can't afford to lose.

**Signet only.** Current release operates on Bitcoin Signet, not mainnet.

**Single ASP.** The network currently has one ASP (operated by [entity]). ASP federation and multiple competing ASPs are roadmap items.

**VTXO expiry.** VTXOs have a validity window. If not refreshed (by transacting or explicit refresh), they must be exited on-chain before expiry. The wallet handles this automatically but users should understand the mechanic.

**No Lightning send (yet).** Receiving from Lightning is planned. Sending to Lightning invoices is a later roadmap item.

---

## Comparison to Lightning

| Dimension | Ark | Lightning |
|-----------|-----|-----------|
| Inbound liquidity required | No | Yes |
| Channel management | None | Required |
| Payment routing | Single hop (via ASP) | Multi-hop |
| Instant finality | Yes | Yes |
| On-chain footprint | One tx per round | Channel open/close |
| Unilateral exit | Yes (timelock) | Yes (force close) |
| Maturity | Early | Mature |

Ark and Lightning are complementary. Arké may support Lightning interoperability in the future.

---

## Resources

- [Ark protocol intro](https://docs.second.tech/ark-protocol/intro/)
- [Arké GitHub repository](https://github.com/gbks/arke)
- [Second (Ark developers)](https://second.tech/)