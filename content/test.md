---
title: Arké Test Guide
description: Help us make Arké the best bitcoin wallet possible.
---

Welcome to the Arké TestFlight beta. This guide walks you through the app's features in a logical sequence, helping you experience the full functionality while providing valuable feedback.

## Join the community

Before you start, [join us on Discord](https://discord.gg/THhNW5H26H). It's where testers share feedback, ask questions, and find partners for send/receive testing. You'll need a testing partner later in this guide, and it's helpful to have the community available if you get stuck.

<a href="https://discord.gg/THhNW5H26H" class="prominent-button" target="_blank">Join us on Discord</a>

---

## What you'll need

- Arké installed via TestFlight
- About 20 minutes for solo testing
- A testing partner for send/receive features (you'll find one on Discord)

---

## Table of contents

1. [Phase 1: Create your wallet](#phase-1-create-your-wallet)
2. [Phase 2: Get your first test bitcoin](#phase-2-get-your-first-test-bitcoin)
3. [Phase 3: Practice sending and receiving](#phase-3-practice-sending-and-receiving)
4. [Phase 4: Organize your wallet](#phase-4-organize-your-wallet)
5. [Phase 5: Send and receive with others](#phase-5-send-and-receive-with-others)
6. [Phase 6: Manage your balance](#phase-6-manage-your-balance)
7. [Phase 7: Recovery features](#phase-7-recovery-features)
8. [Phase 8: Advanced testing](#phase-8-advanced-testing)

<section>

## Phase 1: Create your wallet

When you first open Arké, you'll go through a simple setup process.

::screenshots
---
images: ["cover", "intro-video", "create-wallet", "activity-empty"]
alts: ["", "", "", ""]
captions: ["When you first launch Arké, you'll land on this cover screen. Tap \"Create Wallet\".", "Now you'll see an intro video that guides you through the main features.", "And here your wallet is created.", "Now you are ready to go."]
---
::

##### 1.1: Start wallet creation

On the app cover screen, tap **Create wallet** to begin.

##### 1.2: Watch the introduction

A short video will play explaining how Arké works. This gives you a quick overview of the wallet's key features.

##### 1.3: Complete wallet setup

After the video, you'll see the wallet creation screen. Follow the prompts to complete the setup.

##### 1.4: Arrive at your wallet

Once setup is complete, you'll land on the **activity view**. This is your wallet's home screen where you'll see all your transactions.

</section>
<section>

## Phase 2: Get your first test bitcoin

Arké runs on a test network called signet, which uses test bitcoin that have no value. It's specifically for testing. Let's get some of those worthless test bitcoin into your wallet.

::screenshots
---
images: ["send", "contacts", "contact-faucetto", "activity-faucetto"]
alts: ["", ""]
captions: ["Navigate to \"Send\". Then tap the contacts icon on the left, right above the tabs.", "Tap \"Faucetto Signetto\".", "Tap the \"Request\" button.", "You should receive test bitcoin within a few minutes."]
---
::

##### 2.1: Find Faucetto Signetto

Open Arké and navigate to your contacts. You'll see a default contact called **Faucetto Signetto**—this is your test bitcoin source.

##### 2.2: Request test bitcoin

Open the Faucetto Signetto contact and tap **Request bitcoin** to ask for test bitcoin. They will automatically send a small amount to your wallet.

##### 2.3: Wait for confirmation

Return to your wallet and wait for the transaction to arrive. This should take just a few minutes. You'll see your payments balance update once it arrives.

If this does not work, then we probably ran out of test bitcoin. [Join us on Discord](https://discord.gg/THhNW5H26H), we'll make sure to help you there.

</section>
<section>

## Phase 3: Make your first payments

Now let's practice sending bitcoin in two different ways.

::screenshots
---
images: ["send-1", "send-2", "send-3", "send-4"]
alts: ["", ""]
captions: ["Navigate to \"Send\". Then tap the contacts icon on the left, right above the tabs.", "Find \"Faucetto Signetto\" and tap the paper airplane button to the right of the name.", "On the send form, enter an amount and tap \"Send\".", "That's it."]
---
::

##### 3.1: Send bitcoin back to Faucetto Signetto

Practice sending by returning some test bitcoin to Faucetto Signetto. Open the contact and tap **Send**, then choose an amount. This helps recycle test funds for other testers.

<!---
##### 3.3: Pay a lightning invoice

Visit the [BTCPay Signet Demo Store](https://signet.demo.btcpayserver.org){target=_blank} and make a small purchase. This tests Arké's ability to pay standard lightning invoices.
-->

##### 3.3: Buy a treat for Byte

Visit this [test pet store](https://signet.2nd.dev/store){target=_blank} and buy some virtual treats for Byte, the mascot of the Second team.

</section>
<section>

## Phase 4: Send and receive with others

This phase requires interacting with external services or other testers.

::screenshots
---
images: ["receive-1", "receive-2", "placeholder", "placeholder"]
alts: ["", ""]
captions: ["", "", "", ""]
---
::

##### 4.1: Exchange payments with a partner

Head to the [Arké channel on Discord](https://discord.gg/THhNW5H26H) and find another tester to exchange payments with. Share your payments address with them and ask them to send you bitcoin. Do the same for others.

##### 4.2: Create a contact for your testing partner

Create a new contact in Arké for your testing partner. You can link it to someone in your phone's contact book if they're there, or create a standalone contact.

##### 4.3: Explore contacts

Notice that your transaction from Faucetto Signetto is already attributed to this contact. Browse your contacts to see how Arké organizes people you've transacted with.

</section>
<section>

## Phase 5: Tag your transactions

Once you have made a few transactions, you may want to organize them. Try the following tag and contact features.

::screenshots
---
images: ["placeholder", "tags", "activity-tag-filter"]
alts: ["", ""]
captions: ["The transaction you received from Faucetto Signetto.", "Tap the tag icon at the top of the Activity view to see and manage your tags.", "Tap a tag to see all transactions with that tag assigned.", "Tap the \"Request\" button.", "You should receive test bitcoin within a few minutes."]
---
::

##### 5.1: Tag a transaction

Find your initial deposit from Faucetto Signetto. Create a new tag like "Testing" to categorize it.

##### 5.2: View your tag overview

Tags help you stay organized and see how you spend your bitcoin.

</section>
<section>

## Phase 6: Manage your balance

Arké uses two balances: **savings** (Bitcoin network) and **payments** (Ark protocol). You can move bitcoin between these balances as needed.

::screenshots
---
images: ["balance", "offboard-1", "offboard-2", "offboard-3", "fee-summary"]
alts: ["", "", "", "", ""]
captions: ["Tap the balance card on the activity screen to see your balance breakdown.", "Now tap the circular button with the arrow pointing down.", "Enter an amount to transfer, anything over 1,000 should work great.", "The transfer is going to take some time until it completes, that's normal.", "Find the fee summary in settings to see a breakdown of the fees you paid so far."]
---
::

##### 6.1: Move some funds to savings

Arké uses two balances: **savings** (onchain bitcoin) and **payments** (Ark protocol). To see how they work together, send a portion of your payments balance to your savings balance.

##### 6.1: Refresh your payments balance

Tap **Refresh** on your payments balance. This extends the time window for your payment balance funds. There is a refresh fee involved. In return, your payments are almost instant with very low fees.

##### 6.2: Review the fee summary

You may have noticed different types of fees already:
- The payments balance requires monthly maintenance
- Balance transfers require a fee
- Payments have varying fees, based on how the bitcoin are being sent (on the technical side)

</section>
<section>

## Phase 7: Recovery features

Ark payments can be refreshed or recovered to onchain if needed. These features ensure you always maintain custody.

##### 7.1: Recover your payments balance

If you want to test the recovery mechanism, initiate a **unilateral exit**. This moves your Ark funds back to onchain outside the normal Ark flow. Note: this takes longer and costs more in fees. It's a safety feature, not the typical way to move funds.

::screenshots
---
images: ["recovery-1", "recovery-2", "recovery-3", "recovery-4"]
alts: ["", ""]
captions: ["", "", "", ""]
---
::

##### 7.2: Delete and re-import your wallet

::screenshots
---
images: ["recovery-phrase", "delete-wallet", "cover", "placeholder"]
alts: ["", ""]
captions: ["Write down your recovery phrase. Is is required for re-import.", "Delete the wallet from this device.", "On the cover screen, select wallet import.", ""]
---
::

</section>
<section>

## Phase 8: Advanced testing

##### 8.1: Try different payment types

With your partner, try the following:

- **Receive on Ark**: Share your Ark address and have them send you a payment
- **Send on Ark**: Send a payment to their Ark address
- **Lightning invoices**: Generate a lightning invoice in Arké and have them pay it
- **BOLT12 offers**: If available, test paying a BOLT12 offer
- **BIP 353 Human bitcoin address**: If available, try using this address type

::screenshots
---
images: ["placeholder", "placeholder", "placeholder", "placeholder"]
alts: ["", ""]
captions: ["", "", "", ""]
---
::

</section>
<section>

## Known issues

The following features are incomplete or not working in this build:

- **Onchain transactions don't appear in activity**: Deposits and onchain sends won't show in your transaction history yet. Your balance will update correctly, but the individual transactions aren't listed.
- **Server fees are set to 0**: The fee summary won't show realistic server fees during this testing phase.

---

## Share your feedback

Found a bug? Have a suggestion? We'd love to hear from you.

- Report issues directly in TestFlight
- Discuss on [Discord](https://discord.gg/THhNW5H26H)
- Note anything confusing, slow, or unexpected

Thank you for testing Arké.

</section>