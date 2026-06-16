---
title: How Arké works, technically
description: Architecture, trust model, key management, and tradeoffs for the Ark protocol implementation in Arké.
image: https://www.arke.cash/assets/images/how-technical-preview.jpg
---

Arké is an iOS wallet implementing the Ark protocol, a UTXO-sharing scheme for off-chain bitcoin payments. It provides instant, low-fee transactions with non-custodial guarantees and unilateral exit to the base layer.

This page covers the architecture, trust assumptions, and tradeoffs. For the plain-language version, see [How Arké works](/how). For protocol-level detail, see the [Ark documentation](https://docs.second.tech/ark-protocol/intro/). If you prefer a video intro, here's [a good one](https://www.youtube.com/watch?v=WvwmLv0SgAc).

---

## The Ark protocol in brief

Ark is a Layer 2 protocol where an Ark server facilitates off-chain payments by coordinating shared UTXOs called Virtual Transaction Outputs (VTXOs).

**Key properties:**

- **Non-custodial.** Users hold keys to VTXOs and can unilaterally exit to on-chain bitcoin at any time.
- **Instant finality.** Out-of-round (OOR) payments settle in seconds without on-chain confirmation. Hard finality is achieved when the receiver's spend VTXO is upgraded to a refresh VTXO in the next round.
- **Sender-receiver unlinkability.** In round-based payments, the Ark server cannot link senders to receivers via blinded credentials. OOR payments are co-signed by the server — see Privacy characteristics.
- **No inbound liquidity.** Unlike Lightning, recipients don't need channel capacity to receive.
- **Lightning interoperability.** The Ark server operates a Lightning gateway, enabling payments to and from the broader Lightning ecosystem.

---

## Architecture

The diagram below shows how Arké's components relate: the user's device, Second's Ark server, the Lightning network, and the bitcoin base layer.

![Architecture diagram](/assets/images/diagram-1.png){.diagram}

---

## VTXOs and rounds

Users don't hold on-chain UTXOs directly. Instead, they hold VTXOs—off-chain outputs nested within shared transaction trees.

**Round lifecycle:**

1. Ark server announces a new round (approximately once per hour)
2. Users register VTXOs they want to spend, receiving blinded credentials
3. Users redeem credentials to register new output VTXOs (unlinkable to inputs)
4. Ark server constructs a transaction tree and publishes the root on-chain
5. Users verify their VTXOs exist in the tree and store the relevant branch

The on-chain footprint is a single transaction per round, regardless of participant count.

The branch data stored in step 5 is what the wallet data backup contains. Because this data is derived from round participation rather than the mnemonic, full recovery currently requires both the mnemonic and the wallet data file — see Key management.

VTXOs have a 28-day validity window. The app automatically requests a delegated refresh during the last 2 days of the lifecycle — a fee-free window — and schedules local reminders to ensure the next refresh cycle is triggered. The server executes the refresh on the user's behalf without requiring them to transact. See Current limitations for detail.

**Out-of-round (OOR) payments**

OOR payments are the primary payment primitive in Bark — they enable instant transfers without waiting for the next round.

When Alice pays Bob, Alice and the Ark server co-sign a spend VTXO: a new off-chain transaction that extends Alice's existing position in the transaction tree. Bob receives it immediately. Two finality stages apply:

- **Soft finality** — immediate. Bob holds a signed spend VTXO. The only risk is collusion between Alice and the Ark server to double-spend the source VTXO. Either party alone cannot steal funds.
- **Hard finality** — achieved when Bob participates in the next round, upgrading the spend VTXO to a refresh VTXO with a full on-chain anchor and standard unilateral exit guarantees.

OOR payments have zero on-chain footprint and zero fee. Rounds exist to periodically harden the trust model, extend VTXO lifetimes, and provide on-chain anchoring.

**Lightning payments** are routed through the Ark server's Lightning gateway via an OOR payment. The sender's VTXO is spent instantly; the server bridges the payment out over Lightning. The receiver gets a Lightning payment, not a VTXO.

---

## Trust model

**What the Ark server can do:**

- Refuse to include you in rounds (censorship — currently limited to one operator, Second; see Current limitations)
- Go offline, preventing new Ark transactions

**What the Ark server cannot do:**

- Steal your bitcoin (you hold the keys)
- Prevent you from exiting to on-chain bitcoin (unilateral exit)
- Link your sends to your receives by identity in round-based payments (blinded credentials — though VTXO amounts are visible during rounds and IP/timing are exposed; OOR payments are co-signed by the server; see Privacy characteristics)
- Correlate VTXOs into a persistent balance for a known identity (no account model)

**The key guarantee:** If the Ark server misbehaves or disappears, users can broadcast pre-signed transactions to claim their bitcoin on-chain. This is the unilateral exit—trustless, though it requires waiting for a timelock.

---

## Unilateral exit

Every VTXO includes a pre-signed exit path that lets the owner claim funds on-chain without Ark server cooperation. The diagram below shows the transaction structure that makes this possible.

![Unilateral exit diagram](/assets/images/diagram-2.png){.diagram}

**Tradeoffs:**

- Exit requires one or more on-chain transactions (fees apply)
- Timelock delay before funds are spendable
- If many users exit simultaneously, on-chain fees may spike

This is the escape hatch, not the normal path. Under normal operation, users stay in the Ark and transact instantly.

---

## Receiving bitcoin

**From another Arké user:**
Instant, via OOR payment. The sender and Ark server co-sign a spend VTXO for the receiver. Soft finality is immediate; hard finality is achieved when the receiver's VTXO is upgraded in the next round. No on-chain transaction.

**From on-chain / other wallets:**
User provides a bitcoin address. Once confirmed on-chain, the UTXO appears in the savings balance. The user can then manually board it into the Ark — the server lifts the UTXO into a VTXO in the next round, converting it to a payments balance. Boarding costs a fee and is not automatic.

**From Lightning:**
The Ark server's Lightning node receives on behalf of users, converting inbound Lightning payments to VTXOs.

---

## Sending bitcoin

**To another Arké user:**
Via OOR payment. Sender and Ark server co-sign a spend VTXO for the receiver. Instant soft finality; hard finality at the receiver's next round. No on-chain transaction.

**Over Lightning:**
Via OOR payment to the Ark server's Lightning gateway, which routes the payment over Lightning. Instant from the sender's perspective. This is the most common payment flow.

**To an on-chain address:**
Cooperative exit facilitated by the Ark server via a round. Results in an on-chain transaction; fees apply. If the server is unavailable, unilateral exit is the fallback — see Unilateral exit.

---

## Privacy characteristics

| Property | Status |
|----------|--------|
| Sender-receiver unlinkability (round-based) | Yes, via blinded credentials |
| Sender-receiver unlinkability (OOR) | Partial — server co-signs each payment and sees details |
| Amount privacy | Partial—amounts visible to Ark server during rounds and OOR payments |
| On-chain footprint | Minimal—shared UTXO, no direct user visibility |
| Metadata to Ark server | IP address, timing |
| Lightning payment privacy | Server acts as routing node; payment details visible to server |

Arké is not a mixer or tumbler. Privacy comes from the protocol's structure, not from deliberate obfuscation.

---

## Key management

**Derivation:** BIP-86 (Taproot, P2TR) with standard derivation paths.

**Storage:** The mnemonic and derived keys are stored in the iOS encrypted Keychain. VTXO branch data is stored as a `.sqlite` file in the user's iCloud account. iCloud storage is end-to-end encrypted when the user enables Advanced Data Protection in iOS settings.

**Backup:** Standard 12-word BIP-39 mnemonic for key material. VTXO positions are derived from round participation, not from the seed — the branch data required to reconstruct them isn't derivable from the mnemonic alone. Full recovery therefore currently requires both the mnemonic and the `.sqlite` wallet data file. This is a Bark protocol limitation; full mnemonic recovery is planned in a future Bark release.

---

## Current limitations

**Early release.** Arké is distributed via TestFlight and under active development. Stability and performance are the current focus; rough edges remain.

**Signet available.** Mainnet is the default. A signet option is available on the intro screen for developer testing.

**Single Ark server.** The network currently has one Ark server (operated by [Second](https://second.tech)). Ark server federation and multiple competing Ark servers are roadmap items. Server code is [open-source](https://gitlab.com/ark-bitcoin/bark).

**VTXO expiry.** VTXOs have a 28-day validity window. The app handles refresh automatically: it detects when VTXOs enter the last 2 days of their lifecycle (a fee-free refresh window), requests a delegated refresh from the Ark server, and schedules local reminders to trigger the next cycle. The server executes the refresh without requiring user action. Opening the app occasionally is sufficient to keep this cycle running. If a VTXO reaches expiry without being refreshed, the user can exit to on-chain (cooperative exit via round, or unilateral exit if the server is unavailable).

---

## Comparison to Lightning

| Dimension | Ark | Lightning |
|-----------|-----|-----------|
| Inbound liquidity required | No | Yes |
| Channel management | None | Required |
| Payment routing | Single hop to Ark server; Lightning multi-hop beyond the gateway | Multi-hop |
| Instant finality | Yes (via OOR; hard finality at next round) | Yes |
| On-chain footprint | One tx per round | Channel open/close |
| Unilateral exit | Yes (timelock) | Yes (force close) |
| Maturity | Early | Mature |

Ark and Lightning are complementary — and used together in Arké. The Ark server's Lightning gateway means most payments travel over Lightning, with Ark providing the self-custodial, liquidity-free on-ramp.

---

## Resources

- [Ark protocol intro](https://docs.second.tech/ark-protocol/intro/)
- [Arké GitHub repository](https://github.com/gbks/arke)
- [Second (Ark developers)](https://second.tech/)
- [Bark server (open-source)](https://gitlab.com/ark-bitcoin/bark)