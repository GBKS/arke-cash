---
title: What is Ark?
description: What the Ark protocol is and why it matters.
image: https://www.arke.cash/assets/images/ark-preview.jpg
---

Arké is built on a protocol called Ark. This page explains what that means and why it matters.

---

## The short version

Ark lets you send bitcoin instantly and cheaply without handing control of your funds to anyone. There are no channels to open and no liquidity to manage. You just send.

It sits between the bitcoin main chain and the Lightning Network. It's faster and cheaper than on-chain, simpler than Lightning, and just as self-custodial as either.

---

## The problem it solves

Sending bitcoin on-chain is slow and can be expensive. A transaction takes anywhere from ten minutes to an hour to confirm, and fees go up when the network is busy.

Lightning fixed the speed problem but added a new kind of complexity. To use it properly, you open payment channels, manage inbound and outbound liquidity, and keep a node online. Most people don't, so most Lightning users end up on custodial apps that hold their funds for them.

Ark takes care of both problems. Payments are fast and fees are low, and you still hold your own keys.

---

## How it works

When you use Arké, your bitcoin lives in something called a virtual UTXO, or VTXO. It's a claim on real bitcoin that sits off the main chain but can always be redeemed on it.

An Ark server coordinates payments between users, but it never holds your funds. It can't freeze your account or run off with your bitcoin. If the server goes offline, you can still withdraw to the bitcoin main chain with your own keys.

Payments settle in seconds and cost a fraction of an on-chain fee.

Lightning works alongside Ark. The Ark server doubles as a Lightning gateway, so you can pay any Lightning invoice from Arké: a coffee shop, a friend on another wallet, any service that accepts Lightning. The recipient sees a Lightning payment. You just see a payment.

---

## What Ark isn't

Ark is not a custodial service. The server coordinates payments. It doesn't hold anyone's money.

Ark is not a sidechain or a rollup. There's no new token and no new consensus mechanism. It's built entirely on bitcoin.

Ark is not finished. The protocol is young and still changing, which is a big part of why Arké is labeled experimental. Arké runs on bitcoin mainnet, so start with small amounts.

---

## Who built it

Ark was first described in 2023 by Burak, a bitcoin developer. It's an open protocol design rather than a fixed specification, and teams build their own implementations of it.

Arké uses [Bark](https://docs.second.tech), the implementation by [Second](https://second.tech), through Second's SDK. Second also runs the Ark server that Arké connects to by default. A few community-run servers exist too. You can see them all, with their uptime and fees, at [servers.arke.cash](https://servers.arke.cash).

---

## Learn more

- [Ark protocol overview](https://ark-protocol.org)
- [Second](https://second.tech), the team behind Bark
- [Ark(é) Servers](https://servers.arke.cash), public Ark servers and their uptime
- [Bitcoin Design Guide](https://bitcoin.design/guide/), the UX practices Arké is built on
