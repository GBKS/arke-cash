---
title: FAQ
description: Answers to common questions about Arké.
image: https://www.arke.cash/assets/images/faq-preview.jpg
---

*Last updated: October 20, 2026*

### Is my bitcoin safe?

Your bitcoin is controlled by your private key, which is stored encrypted on your iPhone and in your iCloud Keychain. We never see it. The Ark server coordinates payments but never holds your funds. If Arké disappeared tomorrow, your bitcoin would still be yours.

The honest caveat: Arké is experimental, and Ark is a young protocol. Don't put in more than you'd be comfortable testing with.

---

### What does "experimental" mean?

The Ark protocol is new, and the app is still coming together. Your bitcoin is self-custodial and you can always get it back, but expect rough edges, features that change, and the odd bug. Use amounts you're okay testing with, and tell us what breaks.

There's no set date for dropping the label. Bitcoin software is getting a lot of scrutiny right now, and we want Arké to hold up to it before we call it anything more.

---

### What's next for Arké?

We'll decide on Arké's direction at the end of 2026 and share it here. Either way, your bitcoin stays yours. You can always withdraw it to the bitcoin main chain without needing us.

---

### How do I get Arké?

Arké is available on [TestFlight](https://testflight.apple.com/join/UWBs893c), open to anyone with an iPhone. No waitlist.

---

### How do I back up my wallet?

If you use iCloud, Arké backs up automatically and restores on a new phone when you sign in.

For a backup that doesn't depend on iCloud, go to Manual backup in settings. You'll write down your recovery phrase and save a wallet data file. Together, they restore your bitcoin and your payment history. Contacts, notes, and tags can be saved to a separate file from the same screen.

The recovery phrase on its own is an emergency option. It can get your bitcoin back, but your history won't come with it.

---

### Who can see my payments?

We don't keep track. Arké has no analytics and no accounts, and we don't know who you are. If you turn on notifications, our relay reads incoming payment amounts to alert you, but it only knows your wallet by a random ID and doesn't store individual payments.

Others can see a bit, depending on how you pay. On-chain payments are on bitcoin's public ledger, like any bitcoin transaction. Payments from your payments balance go through Second's Ark server, which sees amounts, timing, and your IP address, but not your name. Nobody publishes your activity, and nobody can tie it to you through an account. [How Arké works](/how) has the details.

---

### What happens if Arké shuts down?

Your bitcoin is still yours. Any standard bitcoin wallet can restore your savings balance from your recovery phrase. Your payments balance can be withdrawn to the bitcoin main chain at any time, without Arké or the Ark server having to cooperate.

That's the whole point of self-custody. We designed it so you never depend on us.

---

### What happens if the Ark server goes offline?

If it's down for a while, you can't make new payments, but your funds are safe. If it goes away for good, Arké can still withdraw your bitcoin to the main chain on its own. This is called a unilateral exit. It has to happen before your payments balance expires, so don't wait too long. Arké tells you when a refresh is due, which is a good sign the clock is running.

---

### Is this the same as Lightning?

No, but the two work together. Ark is a different protocol that doesn't need channels or liquidity management. The Ark server also acts as a Lightning gateway, so you can pay any Lightning invoice straight from Arké. To you, it's one wallet.

---

### Can I receive from a regular bitcoin wallet?

Yes. Arké has an on-chain address you can share with anyone. Bitcoin sent there lands in your savings balance. You can move it into your payments balance whenever you like, for a small fee.

---

### Do I need to verify my identity?

No. No KYC, no email address, no phone number, no passport photo. You download the app, write down your recovery phrase, and you're set.

---

### Is this legal?

Using a self-custody bitcoin wallet is legal in most countries. You're responsible for understanding the tax and regulatory rules where you live. Arké doesn't provide legal or financial advice.

---

### Why is it iOS only?

We'd rather do one platform well than two halfway. Apple's design culture and technical environment suit what Arké is trying to be. Android might come later if there's demand and capacity. For now, it's iPhone only.

---

### What is signet?

Signet is a bitcoin test network. It uses test bitcoin with no real value, so developers can build and test wallets without risking real funds. Arké runs on mainnet by default. Developers can switch to signet on the intro screen.

---

### Where is the source code?

On GitHub: [github.com/gbks/arke](https://github.com/gbks/arke)

Everything is open source. Read it, fork it, or contribute.

---

### I have a question that isn't here.

Ask us on [Discord](https://discord.gg/THhNW5H26H) or open an issue on [GitHub](https://github.com/gbks/arke). We read everything.
