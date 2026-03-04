---
title: What is Ark?
description: What the Ark protocol is and why it matters.
image: https://www.arke.cash/assets/images/ark-preview.jpg
---

Arké is built on a protocol called Ark. This page explains what that means and why it matters.

---

## The short version

Ark is a way to send bitcoin instantly, cheaply, and without giving anyone else control of your funds. You don't need to set anything up. You don't need to manage channels or liquidity. You just send.

It sits between the bitcoin main chain and the Lightning Network — faster and cheaper than on-chain, simpler than Lightning, and just as self-custodial as either.

---

## The problem it solves

Sending bitcoin on-chain is slow and can be expensive. A transaction takes ten minutes to an hour to confirm, and fees rise when the network is busy.

Lightning solves the speed problem but introduces new complexity. To use Lightning properly, you need to open payment channels, manage inbound and outbound liquidity, and keep a node online. Most people don't do this — so most Lightning users end up using custodial apps instead, handing control of their funds to a third party.

Ark solves both problems at once. Fast payments. Low fees. No channels to manage. No custody.

---

## How it works

When you use Arké, your bitcoin is held in a structure called a virtual UTXO — a cryptographic claim on real bitcoin, held off the main chain but always redeemable on it.

An Ark server coordinates payments between users. Crucially, it never holds your funds. It can't freeze your account, block a payment, or disappear with your bitcoin. If the server goes offline, you can always withdraw your funds directly to the bitcoin main chain using your own keys.

Payments settle in seconds. Fees are a fraction of on-chain costs. And you remain in control throughout.

Lightning works alongside Ark, not instead of it. The Ark server acts as a Lightning gateway, so you can pay any Lightning invoice — a coffee shop, a friend on a different wallet, any service that accepts Lightning — directly from Arké. To the recipient, it's a Lightning payment. To you, it's just a payment.

---

## What Ark isn't

Ark is not a custodial service. The server coordinates — it does not hold.

Ark is not a sidechain or a rollup. It doesn't introduce a new token, a new consensus mechanism, or new trust assumptions. It's built entirely on bitcoin.

Ark is not finished. The protocol is young and actively developed. Arké runs on signet — a bitcoin test network — while the protocol matures. Mainnet comes when it's ready.

---

## Who built it

Ark was invented in 2023 by Burak, a bitcoin developer. The protocol is open source and being developed by two independent teams: [Ark Labs](https://arklabs.xyz) and [Second](https://second.tech). Arké is built on Second's implementation, which focuses on bitcoin payments.

---

## Learn more

- [Ark protocol overview](https://ark-protocol.org)
- [Second](https://second.tech) — the team behind Arké's Ark implementation
- [Bitcoin Design Guide](https://bitcoin.design/guide/) — the UX standards Arké is built to