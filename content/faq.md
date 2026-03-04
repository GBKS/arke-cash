---
title: FAQ
description: Where Arké is, and is going.
---

### Is my bitcoin safe?

Your bitcoin is controlled by your private key, which lives on your device and nowhere else. The Ark server coordinates payments but never holds your funds. If Arké disappeared tomorrow, your bitcoin would still be yours — recoverable with your seed phrase in any compatible wallet.

The honest caveat: Ark is a young protocol and Arké is in early development. Don't put more in than you'd be comfortable testing with.

---

### What happens if Arké shuts down?

Your bitcoin is still yours. You can recover it using your seed phrase and any standard bitcoin wallet. You can also withdraw directly to the bitcoin main chain at any time, without needing Arké or the Ark server to cooperate.

This is the whole point of self-custody. We've designed it so you're never dependent on us.

---

### What happens if the Ark server goes offline?

If the server is temporarily offline, you can't make new payments — but your funds are safe. If it goes offline permanently, you can withdraw your bitcoin directly to an on-chain address using your seed phrase. The timelock on your funds gives you a window to do this; Arké will warn you if that window is approaching.

---

### Is this the same as Lightning?

No, but they work together. Ark is a different protocol — you don't need to open channels or manage liquidity. The Ark server acts as a Lightning gateway, so you can pay any Lightning invoice from Arké directly. To you, it's one wallet. To the network, it's two protocols cooperating.

---

### Can I receive from a regular bitcoin wallet?

Yes. Arké has an on-chain address you can share with anyone. Funds sent there are swept into your Ark balance automatically.

---

### Do I need to verify my identity?

No. No KYC. No email address. No phone number. No photo of your passport. You download the app, write down your seed phrase, and you're done.

---

### Is this legal?

Using a self-custody bitcoin wallet is legal in most jurisdictions. You are responsible for understanding the tax and regulatory obligations that apply to you where you live. Arké doesn't provide legal or financial advice.

---

### Why is it iOS only?

Because doing one thing well is better than doing two things adequately. The Apple platform has a design culture and technical environment that suits what Arké is trying to be. Android may come later, if there's demand and capacity. For now: iPhone.

---

### What is signet?

Signet is a bitcoin test network. It uses test bitcoin with no real value, which lets developers build and test wallets without risking real funds. Arké is currently on signet while the Ark protocol matures. Mainnet comes when it's ready. You'll know.

---

### How do I join the beta?

Arké is in private TestFlight beta. Join the waitlist on the [home page](/) and you'll be invited when space opens up.

---

### Where is the source code?

[https://github.com/gbks/arke](https://github.com/gbks/arke)

Everything is open source. Read it, fork it, contribute to it.

---

### I have a question that isn't here.

Find us on GitHub or reach out at the address on the site. We read everything.