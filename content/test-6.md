---
title: Arké Test Guide
description: Help us make Arké the best bitcoin wallet possible.
---

# Test 6: Manage your balance

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

---

[→ Test 7: Refresh your payments balance](/test-7)