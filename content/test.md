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

1. [Test 1: Create your wallet](#test-1-create-your-wallet)
2. [Test 2: Get your first test bitcoin](#test-2-get-your-first-test-bitcoin)
3. [Test 3: Make your first payments](#test-3-make-your-first-payments)
4. [Test 4: Send and receive with others](#test-4-send-and-receive-with-others)
5. [Test 5: Tag your transactions](#test-5-tag-your-transactions)
6. [Test 6: Manage your balance](#test-6-manage-your-balance)
7. [Test 7: Refresh your payments balance](#test-7-refresh-your-payments-balance)
8. [Test 8: Recover your payments balance](#test-8-recover-your-payments-balance)
9. [Test 9: Recover your wallet](#test-9-recover-your-wallet)
10. [Test 10: Go wild](#test-10-go-wild)

<section>

## Test 1: Create your wallet

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

A short video will play explaining how Arké works. This gives you a quick overview of the wallet's key features. Let us know how you like this format, using AI-generated avatars.

##### 1.3: Create your wallet

After the video, you'll see the wallet creation screen. This process starts automatically and just takes a few seconds.

In the background, the cryprographic keys for your wallet are generated, and a connection to the server is established.

##### 1.4: Arrive at your wallet

Once setup is complete, you'll land on the **Activity** view. This is your wallet's home screen where you'll see your blanace and future transactions. Your wallet is empty still, but feel free to explore to become familiar with where things are.

</section>
<section>

## Test 2: Get your first test bitcoin

Arké runs on a test network called signet, which uses test bitcoin that have no value. It's specifically for testing. Let's get some of those worthless test bitcoin into your wallet.

::screenshots
---
images: ["send", "contacts", "contact-faucetto", "activity-faucetto"]
alts: ["", ""]
captions: ["Navigate to \"Send\". Then tap the contacts icon on the left, right above the tabs.", "Tap \"Faucetto Signetto\".", "Tap the \"Request\" button.", "You should receive test bitcoin within a few minutes."]
---
::

##### 2.1: Navigate to "Send"

Contacts are accessible via the **Send** view. The button currently shows an avatar of a dog. Once you create more contacts and add their images, this button will update accordingly.

##### 2.2: Find Faucetto Signetto

Open Arké and navigate to your contacts. You'll see a default contact called **Faucetto Signetto**. This is your test bitcoin source.

##### 2.3: Request test bitcoin

Open the Faucetto Signetto contact and tap **Ask for test bitcoin** to ask for test bitcoin. They will automatically send a small amount to your wallet.

There's a delay before you can request again. You are welcome to make multiple requests if you need them for testing, but please don't drain all of Faucetto's hard-earned test bitcoin.

##### 2.4: Wait for confirmation

Return to the **Activity** view and wait for the transaction to arrive. You can pull down to refresh. This should take just a few minutes. You'll see your payments balance update once it arrives.

If this does not work, then we probably ran out of test bitcoin. [Join us on Discord](https://discord.gg/THhNW5H26H), we'll make sure to help you there. 

At this early stage, things might also break for other reasons. If they do, please let us know and we'll try to fix them right away.

</section>
<section>

## Test 3: Make your first payments

Now let's practice sending bitcoin in two different ways.

##### 3.1: Send bitcoin back to Faucetto Signetto

Practice sending by returning some test bitcoin to Faucetto Signetto. Open the contact and tap **Send**, then choose an amount. This helps recycle test funds for other testers.

::screenshots
---
images: ["contacts", "send-3", "send-4"]
alts: ["", ""]
captions: ["Navigate to your contact list again. Tap the paper airplane on \"Faucetto Signetto\".", "Enter an amount, like \"500\", and tap \"Send\".", "That's it."]
---
::

<!---
##### 3.3: Pay a lightning invoice

Visit the [BTCPay Signet Demo Store](https://signet.demo.btcpayserver.org){target=_blank} and make a small purchase. This tests Arké's ability to pay standard lightning invoices.
-->

##### 3.3: Buy a treat for Byte

Visit this [test pet store](https://signet.2nd.dev/store){target=_blank} and buy some virtual treats for Byte, the mascot of the Second team.

Here we test making a payment over the lightning network.

::screenshots
---
images: ["byte-store", "byte-store-invoice", "send-paste", byte-store-payment]
alts: ["", ""]
captions: ["Visit the Byte Store (link above).", "Tap \"Buy now\" on the \"Kibbles 'n Bits\" and the copy icon button on the bottom right.", "On the \"Send\" screen, tap the paste button on the right, above the tabs.", "Tap \"Send\" to pay the invoice."]
---
::

</section>
<section>

## Test 4: Send and receive with others

Now let's exchange bitcoin with other testers. You'll need to join the [Discord channel](https://discord.gg/THhNW5H26H) for this.

::screenshots
---
images: ["receive-1", "receive-2", "create-contact"]
alts: ["", "", ""]
captions: ["Navigate to the \"Receive\" tab.", "Tap the toggle at the top to see your addresses directly. Copy your \"Payments address\".", ""]
---
::

##### 4.1: Share your address on Discord

Navigate to the **Receive** tab. You will see your addresses in the form of a QR code here, for easy sharing on-the-go.

##### 4.2 Copy your address

The toggle at the top of the **Receive** tab switches between the QR code (great for scanning with a camera) and the direct display of your addresses (great for sharing in text form). You can also tap the **Receive** tab again to switch between the views.

Now copy your **Payments address**. Head over to [Discord](https://discord.gg/THhNW5H26H), share this address, and ask someone to send you some test bitcoin.

##### 4.3: Create a contact for your testing partner

Once you have received a payment from someone, create a contact for them. This helps you keep your activity list organized.

If an incoming payment matches an address from someone in your contacts, they will be auto-assigned.

Now send them some bitcoin back to return the favour.

</section>
<section>

## Test 5: Tag your transactions

Once you have made a few transactions, you may want to organize them. Try the following tag and contact features.

::screenshots
---
images: ["activity-faucetto-assigned", "tags", "activity-tag-filter"]
alts: ["", ""]
captions: ["The transaction you received from Faucetto Signetto.", "Tap the tag icon at the top of the Activity view to see and manage your tags.", "Tap a tag to see all transactions with that tag assigned.", "Tap the \"Request\" button.", "You should receive test bitcoin within a few minutes."]
---
::

##### 5.1: Tag a transaction

Find your initial deposit from Faucetto Signetto. Tap it to see details and assign a tag of your choice to it. Feel free to create a new tag if you'd like.

##### 5.2: View your tag overview

At the top of the **Activity** view, you can access your full list of tags. They help you stay organized and see how you spend your bitcoin.

Notice the **Balance** tag. It's a special tag that will be automatically applied to activity related to balance maintenance.

##### 5.3: Filter by tag

Tapping a tag lets you filter your activity list by that tag.

</section>
<section>

## Test 6: Manage your balance

Arké uses two balances: **Savings** (Bitcoin network) and **Payments** (Ark protocol). You can move bitcoin between these balances as needed.

Practically speaking, **Payments** is almost instant with low transaction fees, at the cost of maintenance fees. **Savings** is slower and has higher transaction fees, but no maintenance fees. 

To see how the two balances work together, send a portion of your payments balance to your savings balance.

Technically speaking, this transfers bitcoin from the second-layer Ark network to the bitcoin network. Doing this securely takes a bit of time and involves a fee.

::screenshots
---
images: ["balance", "offboard-1", "offboard-3", "fee-summary"]
alts: ["", "", "", "", ""]
captions: ["Tap the balance card on the activity screen to see your balance breakdown. Tap the circular button with the arrow pointing down.", "Now you're about to start a transfer. Enter an amount, like 5,000.", "The transfer is going to take some time until it completes, that's normal.", "Find the fee summary in settings to see a breakdown of the fees you paid so far."]
---
::

##### 6.1: Move some funds to savings

On the **Send** view, tap the balance card to see a breakdown of your bitcoin are distributed across the two balances. The two circular buttons in the center let you initiate transfers between them.

Tap the arrow pointing down.

##### 6.2: Start the transfer

Enter an amount, like 5,000, and start the transfer. 

##### 6.3: Wait

Because this process involves two networks, it is going to take a little. You can see the progress status on the respective entry in your activity list. Feel free to close this modal.

##### 6.4: Review the fee summary

You may have noticed different types of fees already:
- The payments balance requires monthly maintenance (via a refresh)
- Balance transfers require a fee
- Payments have varying fees, based on how the bitcoin are being sent (on the technical side)

</section>
<section>

## Test 7: Refresh your payments balance

As mentioned above, the **Payments** balance needs to be regularly refreshed, for the benefit of instant, low-fee transactions.

::screenshots
---
images: ["activity-refresh", "refresh-1", "refresh-2"]
alts: ["", ""]
captions: ["", "", "", ""]
---
::

##### 7.1: Look out for a refresh indicator

The balance card on the **Activity* screen will show an indicator if it's the time to refresh is coming up.

##### 7.2: Navigate to the refresh options

When the time is right, navigate to your balance details and tap the **Refresh** button.

##### 7.3: Start the refresh

Start the refresh process in the modal. While this happens, some or all of your funds may be locked. This process should not take too long.

If this fails, please try again. At this early test, things can be a little shaky at times.

</section>
<section>

## Test 8: Recover your payments balance

Your payments balance, and payment with that balance, are facilitated by a third-party Ark server. The can never take your bitcoin, but they could potentially refuse payments, or shut down. Not to worry, there is a process for recovering your payments balance without the server.

Note that this takes some time and also involves a fee. It is meant for emergency situations.

::screenshots
---
images: ["recovery-1", "recovery-2", "recovery-3"]
alts: ["", "", ""]
captions: ["", "", ""]
---
::

##### 8.1: Recover your payments balance

In **Settings*, navigate to "Recover your payments balance". You'll see a quick summary of how this process works. Fees can be on the high side, so you may want to avoid testing with very small amounts.

##### 8.2: Follow the progress

A recovery can take a day or more. Three are multiple steps involved. You'll find a special entry in your **Activity* with the latest status.

##### 8.3: Confirm the withdrawal

The latest step involves withdrawing the bitcoin from your payments balance to your savings balance. This step requires an additional confirmation from you at the moment (this may change).

</section>
<section>

## Test 9: Recover your wallet

Now let's wipe the wallet from this device and recover it with your recovery phrase.

::screenshots
---
images: ["recovery-phrase", "delete-wallet", "delete-wallet-locally", "cover", "import-wallet"]
alts: ["", ""]
captions: ["Find your recovery phrase in \"Settings\". Is is required for recovery.", "Find delete options in \"Settings\" and choose \"Delete from this device\".", "Confirm deletion.", "On the cover screen, select \"Import wallet\".", "Enter your recovery phrase and continue."]
---
::

##### 9.1: Copy your recovery phrase

Navigate to **Settings** from the **Activity** screen, and then to **Recovery phrase**. Scratch off the texture to see your recovery phrase and then write it down somewhere.

##### 9.2: Find wallet deletion options

Again in **Settings**, navigate to **Delete wallet**. There are two options. Here we try the first one, to delete the wallet just from this device.

The second option, **Delete Permanently** is irreversible. You only want to do this when you have cleared out the balance and want to give up this wallet altogether. Let's keep this for another day.

##### 9.3: Confirm deletion

Again, make sure you have backed up your recovery phrase. Also note that the backup is dependend on iCloud. If you have not been signed in to iCloud in all this testing, the recovery may fail because the data will not be available.

##### 9.4: Start the import 

After deletion, you will find yourself back on the cover screen. Tap the **Import wallet** option.

##### 9.5: Complete the import

Enter our recovery phrase and continue. You should now find yourself back in your wallet, with your full balance, activity, contacts, etc.

Let us know if any of this did not work. It is essential that wallet recovery works.

</section>
<section>

## Test 10: Go wild

Now it's up to you to really work Arké. Try weird things, bend it, break it, and share your experience in [Discord](https://discord.gg/THhNW5H26H).

If you've made it this far, we'd like to thank you for chipping in and helping out. We sincerely appreciate it.

</section>
<section>

## Known issues

The following features are incomplete or not working in this build:

- **Onchain transactions don't appear in activity**: Deposits and onchain sends won't show in your transaction history yet. Your balance will update correctly, but the individual transactions aren't listed.
- **Some fees may be 0**: Some fees are simpley not implemented or finalized yet.
- **No choice of Ark server:** Eventually, we want you to be able to choose between different servers. At this early stage, there simply aren't any other ones than the signet one by Second.

---

## Share your feedback

Found a bug? Have a suggestion? We'd love to hear from you.

- Report issues directly in TestFlight
- Discuss on [Discord](https://discord.gg/THhNW5H26H)
- Note anything confusing, slow, broken, or unexpected
- Share whacky (or non-whacky) ideas for improvement

Thank you for testing Arké.

</section>