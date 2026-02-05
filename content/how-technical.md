---
title: How Arké works, technically
description: UTXO-sharing for off-chain bitcoin payments and such.
---

_As with anything Arké right now, this text is not final and will be improved._

Arké is an iOS wallet implementing the Ark protocol, a UTXO-sharing scheme for off-chain bitcoin payments. It provides instant, cheap transactions with non-custodial guarantees and unilateral exit to the base layer.

This page covers the architecture, trust assumptions, and tradeoffs. For protocol-level detail, see the [Ark documentation](https://docs.second.tech/ark-protocol/intro/).

---

## The Ark protocol in brief

Ark is a Layer 2 protocol where an Ark server facilitates off-chain payments by coordinating shared UTXOs called Virtual Transaction Outputs (VTXOs).

**Key properties:**

- **Non-custodial.** Users hold keys to VTXOs and can unilaterally exit to on-chain bitcoin at any time.
- **Instant finality.** Payments between Ark users settle in seconds without on-chain confirmation.
- **Recipient privacy.** The Ark server cannot link senders to receivers in most payment flows.
- **No inbound liquidity.** Unlike Lightning, recipients don't need channel capacity to receive.

---

## Architecture

![Architecture diagram](/assets/images/diagram-1.png){.diagram}

---

## VTXOs and rounds

Users don't hold on-chain UTXOs directly. Instead, they hold VTXOs—off-chain outputs nested within shared transaction trees.

**Round lifecycle:**

1. Ark server announces a new round (every few seconds)
2. Users register VTXOs they want to spend, receiving blinded credentials
3. Users redeem credentials to register new output VTXOs (unlinkable to inputs)
4. Ark server constructs a transaction tree and publishes the root on-chain
5. Users verify their VTXOs exist in the tree and store the relevant branch

The on-chain footprint is a single transaction per round, regardless of participant count.

---

## Trust model

**What the Ark server can do:**

- Refuse to include you in rounds (censorship)
- Go offline, preventing new Ark transactions

**What the Ark server cannot do:**

- Steal your bitcoin (you hold the keys)
- Prevent you from exiting to on-chain bitcoin (unilateral exit)
- Link your sends to your receives (blinded credentials)
- See your wallet balance (no account model)

**The key guarantee:** If the Ark server misbehaves or disappears, users can broadcast pre-signed transactions to claim their bitcoin on-chain. This is the unilateral exit—trustless, though it requires waiting for a timelock.

---

## Unilateral exit

Every VTXO includes a pre-signed exit path that lets the owner claim funds on-chain without Ark server cooperation.

![Unilateral exit diagram](/assets/images/diagram-2.png){.diagram}

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
User provides a bitcoin address. Once confirmed on-chain, the Ark server "lifts" the UTXO into a VTXO in the next round. The user then has an instantly-spendable Ark balance.

**From Lightning:**
Ark server operates a Lightning node and can receive on behalf of users, converting inbound Lightning payments to VTXOs.

---

## Privacy characteristics

| Property | Status |
|----------|--------|
| Sender-receiver unlinkability (within Ark) | Yes, via blinded credentials |
| Amount privacy | Partial—amounts visible to Ark server during round |
| On-chain footprint | Minimal—shared UTXO, no direct user visibility |
| Metadata to Ark server | IP address, timing (mitigated via Tor support) |

Arké is not a mixer or tumbler. Privacy comes from the protocol's structure, not from deliberate obfuscation.

---

## Key management

**Derivation:** BIP-84 (native SegWit) with standard derivation paths.

**Storage:** Keys are stored in iOS encrypted Keychain. VTXO data is stored in the users iCloud account.

**Backup:** Standard 12-word BIP-39 mnemonic. Currently VTXOs are not restored from the mnemonic.

---

## Current limitations

**Alpha software.** Arké is in early development. Expect bugs.

**Signet only.** Current release operates on Bitcoin Signet, not mainnet.

**Single Ark server.** The network currently has one Ark server (operated by [Second]). Ark server federation and multiple competing Ark servers are roadmap items.

**VTXO expiry.** VTXOs have a validity window. If not refreshed (by transacting or explicit refresh), they must be exited on-chain before expiry. The wallet currently requires users to manually refresh.

---

## Comparison to Lightning

| Dimension | Ark | Lightning |
|-----------|-----|-----------|
| Inbound liquidity required | No | Yes |
| Channel management | None | Required |
| Payment routing | Single hop (via Ark server) | Multi-hop |
| Instant finality | Yes | Yes |
| On-chain footprint | One tx per round | Channel open/close |
| Unilateral exit | Yes (timelock) | Yes (force close) |
| Maturity | Early | Mature |

Ark and Lightning are complementary.

---

## Resources

- [Ark protocol intro](https://docs.second.tech/ark-protocol/intro/)
- [Arké GitHub repository](https://github.com/gbks/arke)
- [Second (Ark developers)](https://second.tech/)