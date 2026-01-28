---
title: Arké Test Guide
description: Help us make Arké the best bitcoin wallet possible.
---

# Test 9: Recover your wallet

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

---

That's it for all the tests we have. Feel free to poke around the app, bend things, break things, and let us know what you think.

[→ Test guide intro](/test)