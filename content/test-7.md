---
title: Arké Test Guide
description: Help us make Arké the best bitcoin wallet possible.
image: https://www.arke.cash/assets/images/test-preview.jpg
---

# Test 7: Refresh your payments balance

As mentioned above, the **Payments** balance needs to be regularly refreshed, for the benefit of instant, low-fee transactions.

In our test setup (using the signet network), a refresh is needed every 24 hours. Once Arké (and the Ark protocol) are live, this will be increased to a month.

Arké will automatically detect when a refresh is needed and start one, close to the end of the refresh window when they are free (check the Fee Schedule in settings for details).

::screenshots
---
images: ["activity-refresh", "refresh-1", "refresh-2"]
alts: ["", ""]
captions: ["", "", "", ""]
---
::

##### 7.1: Look out for a refresh indicator

The balance card on the **Activity** screen will show an indicator if it's the time to refresh is coming up.

##### 7.2: Navigate to the refresh options

When the time is right, navigate to your balance details and tap the **Refresh** button. Or wait and let Arké start one automatically.

##### 7.3: Start the refresh

Start the refresh process in the modal. While this happens, some or all of your funds may be locked. This process should not take too long.

---

[→ Test 8: Recover your payments balance](/test-8)