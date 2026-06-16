---
title: How Arké works
description: A bitcoin wallet focused on instant, low-fee payments.
image: https://www.arke.cash/assets/images/how-preview.jpg
---

Arké is a bitcoin wallet. You hold your own bitcoin. You can send it to anyone, in seconds. No one can stop you, freeze your account, or track what you do.

That's it. The rest of this page explains how.

---

## Your bitcoin is yours

When you set up Arké, the app creates a private key — a secret code that controls your bitcoin. This key is encrypted and stored on your device's Keychain, backed up to iCloud using end-to-end encryption. Only your device can unlock it.

This is different from most apps that hold money. When you use a bank or an exchange, they hold your funds and promise to give them back when you ask. With Arké, there's no one to ask. You have the bitcoin. You move it when you want.

**What this means for you:**
- Your savings balance (your onchain bitcoin) can't be frozen by anyone
- If Arké disappeared tomorrow, your bitcoin wouldn't

---

## Payments are instant

Traditional bitcoin payments can take ten minutes to an hour to confirm. With your payments balance, they arrive in seconds.

We use a protocol called Ark, run by [Second](https://second.tech), that lets you transact off the main bitcoin network while keeping your keys. Think of it as a fast lane for everyday spending, built on bitcoin underneath.

Your payments balance is self-custodial — you hold the keys, not Second. The app automatically manages VTXO refreshes in the background, so your balance stays current as long as you open the app occasionally.

**What this means for you:**
- Pay for coffee or send money to a friend — no waiting
- Best for regular, everyday spending rather than long-term holding
- For long-term holdings, use your savings balance

---

## Privacy is default

**The app tracks your activity. The people behind it don't.**

Your transaction history lives in the app so you can see it — that's the point of a wallet. But there's no analytics tool, no session tracking, nothing phoning home. The Arké project has no idea when you open the app, who you pay, or how much you hold.

Three things are worth understanding:

**Bitcoin network:** Onchain transactions are recorded on a public ledger. Arké runs no server that touches your onchain activity — what's visible there is a function of bitcoin itself, not us.

**Payments balance:** Payments route through Second's server. It can see that activity is happening, but the Ark protocol limits what it can know about amounts and participants.

**Notifications:** When a payment arrives, a small relay sends your device a push notification. It can tell that activity occurred. Aggregate lifetime stats for the relay are stored — no individual records.

**What this means for you:**
- No one at Arké knows who you are or what you do with your money
- Nothing personal to sell, leak, or hand over
- What's visible on bitcoin is determined by the network itself, not by us

---

## Recovery works

Your phone can break, get lost, or go swimming. Your bitcoin doesn't have to.

For most situations — a new phone, a reinstall, a second device — iCloud handles recovery automatically. Your bitcoin, contacts, notes, and payment history come back exactly as you left them.

For a full recovery without iCloud, you need two things: your recovery phrase and a wallet data backup. Either alone isn't enough. Both can be set up through Manual backup in settings.

**What this means for you:**
- New phone or reinstall — sign in to iCloud and you're back
- Your wallet follows your iCloud account across devices
- For a recovery path that doesn't depend on iCloud, set up a manual backup in settings

---

## How a payment actually happens

1. You tap a contact or scan a QR code
2. The Ark server routes the payment — usually over the lightning network
3. Done

Most payments go to a lightning address or invoice. The Ark server acts as the bridge, so your payments balance connects to the entire lightning ecosystem — other wallets, merchants, anyone who accepts lightning. Ark-to-Ark payments work the same way, just without the lightning hop.

Onchain payments from your savings balance skip the server entirely and go straight to the bitcoin network.

The whole thing takes a few seconds. If you want to understand what's happening underneath, it's <NuxtLink to="/how-technical">described here</NuxtLink>.

---

## What Arké doesn't do

**We don't hold your bitcoin.** We can't move it, freeze it, or recover it for you. For your savings balance, no one can. For your payments balance, you hold the keys — not us, not Second.

**We don't track you.** No analytics, no session data, nothing tied to your identity. The privacy section above has the full picture.

**We don't require identity verification.** No KYC, no photo of your passport, no waiting for approval.

**We can't reverse payments.** Once sent, a payment is final — whether onchain or over lightning. Send to the right person.

---

## Questions you might have

**What if I forget my recovery phrase?**
For most situations, iCloud has you covered — you won't need the phrase to recover on a new phone or after a reinstall. The phrase becomes essential only for a full manual recovery without iCloud, and even then you'll also need your wallet data backup. Set both up through Manual backup in settings.

**Can I receive bitcoin from a regular wallet?**
Yes. Onchain payments land in your savings balance; lightning payments land in your payments balance.

**What happens if Arké shuts down?**
Your bitcoin is still yours. Your savings balance can be recovered with any standard bitcoin wallet using your recovery phrase. Your payments balance can be recovered with any Ark-compatible wallet using both your phrase and your wallet data backup — or you can withdraw directly to your savings balance without Second's involvement, though a fee applies. We've designed it so you're never dependent on us.

**What happens if I don't use my payments balance for a while?**
The app manages this automatically. It refreshes your payments balance in the background and schedules reminders to keep the cycle running. Opening the app occasionally is enough — you don't need to transact regularly to keep your balance active.

**Is this legal?**
Using a self-custody bitcoin wallet is legal in most jurisdictions. You're responsible for any tax obligations on transactions you make.
