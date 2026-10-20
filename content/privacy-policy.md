---
title: Privacy Policy
description: How Arké handles your information.
image: https://www.arke.cash/assets/images/privacy-policy-preview.jpg
---

# Privacy Policy

**Last Updated: October 20, 2026**

## Introduction

This Privacy Policy describes how Arké ("we," "our," or "the App") handles information when you use our self-custodial Bitcoin wallet application. Arké is developed by GBKS limited.

We built this app with privacy as a core principle. We don't have accounts, analytics, or tracking, and we never have access to your keys or funds. We operate one server. It hosts an optional notification relay, which handles the minimum data needed to tell your phone when a payment arrives, and a file of bitcoin exchange rates that the App downloads. Both are described below.

## Information We Do Not Collect

We do not collect, track, or have access to:

- Your name, email address, or contact information
- Your Bitcoin addresses, wallet balances, or transaction history
- Your private keys or recovery phrases
- Your location
- Advertising IDs
- Usage analytics or behavioral data

## How Your Data Is Stored

Arké is a self-custodial wallet. Your wallet data stays on your device and within your personal Apple account:

**On-Device Storage**
- Your wallet data is stored locally on your device
- Private keys are secured using Apple's Keychain Services, which provides hardware-backed encryption

**iCloud (If Enabled)**
- If you have iCloud enabled, encrypted wallet data may be backed up to your personal iCloud account
- This backup is tied to your Apple ID and protected by your iCloud security settings
- We have no access to your iCloud account or any data stored within it
- You can disable iCloud backup for this app in your device settings

## Payment Notifications

Notifications are off by default. If you turn them on, the App registers with a notification relay that we operate. The relay watches for incoming activity on your behalf and sends a push notification to your device through Apple.

**What the relay stores while notifications are on**
- A mailbox ID, which is a pseudonymous identifier tied to your wallet
- A mailbox authorization token, which lets the relay read your wallet's Ark mailbox (the channel through which the Ark server delivers incoming payments and related messages). Tokens are valid for 30 days and can't be revoked early
- Your device's Apple push notification token and the App's bundle ID
- Which Ark server your wallet uses
- Timestamps, including the time of your wallet's most recent notification event, the relay's read position in your mailbox, and a record of notifications already sent

**What the relay reads**

To build a notification, the relay reads incoming mailbox messages. These include incoming payments and their amounts, whether an outgoing Lightning payment succeeded, and round activity. The relay does not store message contents per user. It adds amounts and message counts to anonymous totals across all users.

**Logs**

Logs never contain your authorization token, full mailbox ID, or full device token. They use only the first 8 characters of your mailbox ID and the last 8 characters of your device token.

- **Event log:** kept for 30 days. After that, only anonymous hourly counts remain.
- **System logs:** the relay and our web server write operational logs to the server's system journal, kept for up to 14 days.
- **IP addresses:** held briefly in memory for rate limiting. They are written to disk only when a request is rejected (stored in the event log for 30 days) or fails (which can appear in the web server's error log). Our web server keeps no access logs.

**What the relay can't do**

The relay never holds your keys and cannot move your funds. It can only read the notifications in your mailbox.

**Turning it off**

Turning off notifications in the App deletes your registration from the relay. Registrations are also deleted when Apple reports that the App was uninstalled, and automatically 30 days after their authorization token expires, for example if you stop using the App.

## Third-Party Services

**Apple Platform Services**

The App uses Apple's platform services (Keychain, iCloud, and Apple Push Notification service) for storage and notifications. Notifications pass through Apple's servers. Visible notifications include the payment amount (for example, "Received ₿12,000"), which may appear on your lock screen. Apple's handling of this data is governed by [Apple's Privacy Policy](https://www.apple.com/privacy/).

**Second's Ark Server**

Payments from your payments balance go through an Ark server operated by TwoND, Inc., doing business as Second. To process those payments, Second's server receives your IP address, payment amounts and timing, and the data needed to co-sign and route each payment. It does not receive your name or any account information, because the App has no accounts. If notifications are on, our relay also connects to Second's server on your behalf to read your mailbox. Second's handling of this data is governed by its own terms and policies, available at [second.tech](https://second.tech/terms).

**Exchange Rates**

The App downloads current bitcoin exchange rates from our server so it can show amounts in your local currency. The request contains no wallet data. Like any web request, it reveals your IP address to our server. We don't keep access logs, so it isn't stored unless the request fails.

**Hosting**

The notification relay runs on servers provided by Hetzner Online GmbH in the EU, which processes data on our behalf.

**No Analytics or Tracking**

We do not integrate any third-party analytics, crash reporting, advertising, or tracking services.

## Bitcoin Network

When you send or receive Bitcoin on-chain, transaction information is broadcast to the decentralized Bitcoin network and recorded on a public blockchain. This is inherent to how Bitcoin works and is not within our control.

## Legal Basis and Your Rights

We process notification relay data only to provide the notifications you turned on (performance of a contract). You can stop this processing at any time by turning off notifications.

If you are in the EU or UK, you have the right to access, correct, or delete personal data we hold about you, to object to its processing, and to lodge a complaint with a data protection authority. Because the relay only knows your pseudonymous mailbox ID, we may need you to provide it from the App to act on a request.

## Your Responsibilities

As a self-custodial wallet, you are solely responsible for:

- Securing your device and Apple ID
- Safeguarding your recovery phrase
- Managing your iCloud and Keychain security settings
- Maintaining backups of your wallet

If you lose access to your device, your recovery phrase, and your backups, we cannot help you recover your funds.

## Children's Privacy

The App is not intended for use by children under 17 years of age. We do not knowingly collect any information from children.

## Changes to This Policy

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy within the App and updating the "Last Updated" date.

## Contact Us

If you have questions about this Privacy Policy, please contact us at:

knueffelbund@gmail.com

---

## Summary

**What we collect:** Nothing, unless you turn on notifications. (Fetching exchange rates shows your IP address to our server, but we don't log it.) If you do turn on notifications, our relay stores a pseudonymous mailbox ID, an access token for your mailbox, and your device's push token, and it reads incoming payment notifications to alert you.

**What we store:** Your wallet data stays on your device and, optionally, in your personal iCloud account. The relay keeps registration data while notifications are on, deletes it when you turn them off or stop using the App, and keeps logs for no more than 30 days.

**Who we share data with:** Apple delivers notifications, including payment amounts. Hetzner hosts the relay. Second runs the Ark server your payments go through.
