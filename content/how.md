---
title: How Arké works
description: A bitcoin wallet focused on instant, low-fee payments.
image: https://www.arke.cash/assets/images/how-preview.jpg
---

Arké is a bitcoin wallet. You hold your own bitcoin and can send it to anyone in seconds. There's no account to freeze, and nobody at Arké sees what you do with it.

That's the short version. The rest of this page explains how it works.

---

## Your bitcoin is yours

When you set up Arké, the app creates a private key, a secret code that controls your bitcoin. The key lives in your iPhone's Keychain and syncs through iCloud Keychain, which is end-to-end encrypted. Apple can't read it, and neither can we.

Most apps that deal with money work differently. A bank or an exchange holds your funds and promises to give them back when you ask. With Arké there's no one to ask. You have the bitcoin, and you move it when you want.

**What this means for you:**
- Nobody can freeze your savings balance (your on-chain bitcoin)
- If Arké disappeared tomorrow, your bitcoin wouldn't

---

## Payments are instant

A regular bitcoin transaction can take ten minutes to an hour to confirm. Payments from your payments balance arrive in seconds.

That balance runs on Ark, a bitcoin protocol for fast off-chain payments. Arké uses Second's implementation, called Bark, and connects to an Ark server that [Second](https://second.tech) operates. Think of it as a fast lane for everyday spending, with bitcoin underneath.

The payments balance is self-custodial too. You hold the keys, not Second. Behind the scenes the app keeps your balance refreshed, which works as long as you open the app now and then.

**What this means for you:**
- Pay for coffee or send money to a friend without waiting
- Best for everyday spending, not long-term savings
- For long-term holdings, use your savings balance

---

## Privacy is the default

**The app tracks your activity. The people behind it don't.**

Your transaction history lives in the app so you can see it. That's what a wallet is for. But there's no analytics, no session tracking, and nothing phoning home. The Arké project has no idea when you open the app, who you pay, or how much you hold.

Some activity is visible to others, though, and it's worth knowing where:

**Bitcoin network:** On-chain transactions are recorded on bitcoin's public ledger, where anyone can see the addresses and amounts, though not your name. That comes with bitcoin itself. Arké doesn't run a server that touches your on-chain activity.

**Payments balance:** Payments go through Second's Ark server. It sees the payments it helps make: amounts, timing, and your IP address. It doesn't know who you are, since there's no sign-up and no account, but it could link some of your payments to each other. That's far less than a bank or a payment app knows about you, and none of it is published.

**Notifications:** If you turn on notifications, a relay we run watches for incoming payments and sends an alert to your phone through Apple. To write "Received ₿12,000", it has to read the amount. It knows your wallet only by a random ID, doesn't store individual payments, and keeps only anonymous totals. Alerts can show amounts on your lock screen. You can turn notifications off at any time.

**What this means for you:**
- No one at Arké knows who you are or what you do with your money
- There's no personal data for us to sell, leak, or hand over
- Second's server sees some payment details, but not your identity

---

## Recovery works

Phones break, get lost, and go swimming. Your bitcoin doesn't have to go with them.

For most situations, like a new phone, a reinstall, or a second device, iCloud handles recovery for you. Your bitcoin, contacts, notes, and payment history come back the way you left them. (Your key is always end-to-end encrypted. The rest of your wallet data is end-to-end encrypted in iCloud if you turn on Advanced Data Protection in iOS settings.)

If you want a way back that doesn't depend on iCloud, set up a manual backup in settings. You'll write down your recovery phrase and save a wallet data file. Together, they restore your bitcoin and payment history. Contacts, notes, and tags can be saved to a separate file from the same screen.

The recovery phrase alone works as an emergency option. It gets your bitcoin back, but not your payment history.

**What this means for you:**
- New phone or reinstall: sign in to iCloud and you're back
- Your wallet follows your iCloud account across devices
- For a backup outside iCloud, use Manual backup in settings

---

## How a payment actually happens

1. You tap a contact or scan a QR code
2. The Ark server routes the payment, usually over the Lightning Network
3. Done

Most payments go to a Lightning address or invoice. The Ark server acts as the bridge, so your payments balance can reach anyone on Lightning: other wallets, shops, services. Payments between two Ark wallets work the same way, minus the Lightning hop.

On-chain payments from your savings balance skip the server and go straight to the bitcoin network.

The whole thing takes a few seconds. If you want to know what's happening underneath, it's <NuxtLink to="/how-technical">described here</NuxtLink>.

---

## What Arké doesn't do

**We don't hold your bitcoin.** We can't move it, freeze it, or recover it for you. Nobody can touch your savings balance. Your payments balance is yours as well: you hold the keys, not us and not Second.

**We don't track you.** No analytics, no session data, nothing tied to your identity. The privacy section above covers what others can see.

**We don't ask who you are.** No KYC, no photo of your passport, no waiting for approval.

**We can't reverse payments.** Once a payment is sent, on-chain or over Lightning, it's final. Double-check who you're paying.

---

## Questions you might have

**What if I forget my recovery phrase?**
If iCloud is set up, you won't need it to restore on a new phone or after a reinstall. The phrase matters when you recover without iCloud. Write it down during manual backup in settings and keep it somewhere safe.

**Can I receive bitcoin from a regular wallet?**
Yes. On-chain payments land in your savings balance, and Lightning payments land in your payments balance. You can move on-chain funds into your payments balance yourself, for a small fee.

**What happens if Arké shuts down?**
Your bitcoin is still yours. Any standard bitcoin wallet can restore your savings balance from your recovery phrase. For your payments balance, you can withdraw it to the main chain without Second's help (a fee applies), or restore it in another Bark-based wallet. The recovery phrase alone works there as an emergency option, but a proper restore should include your wallet data backup too. We designed it so you never depend on us.

**What happens if I don't use my payments balance for a while?**
The app takes care of it. It refreshes your payments balance in the background and schedules reminders to keep that going. Opening the app every so often is enough. You don't need to make payments to keep the balance active. But if you don't open Arké for about a month, part of your payments balance can expire, and Second's server is allowed to claim it. For money you won't touch for a while, use your savings balance.

**Is this legal?**
Using a self-custody bitcoin wallet is legal in most countries. You're responsible for any taxes on the transactions you make.
