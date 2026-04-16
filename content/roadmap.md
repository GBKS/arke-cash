---
title: Roadmap
description: Where Arké is, and is going.
image: https://www.arke.cash/assets/images/roadmap-preview.jpg
---

*We build carefully. Here's where we are and where we're going. No dates. No promises. Just direction.*

---

## What this project is

Arké is an iOS bitcoin wallet built on the Ark protocol. It has four goals, in order of certainty.

**Demonstrate what's possible.** The [Bitcoin Design Guide](https://bitcoin.design/guide/) describes best practices for wallet UX. Arké implements them — seriously, completely, and with a visual direction that proves design ambition and [bitcoin principles](https://bitcoin.design/guide/getting-started/principles/) are not in conflict. If other builders see it and raise their own bar, that's a win.

**Accelerate Ark.** Arké serves as a reference wallet for the Ark ecosystem (specifically, the [implementation by Second](https://second.tech/)). A well-built, open-source iOS implementation helps the protocol reach users faster and gives other developers something concrete to learn from and build on.

**Expand the creative Overton window.** Most bitcoin wallets look like fintech utilities. Arké doesn't. The creative direction is intentional and open-source — a demonstration that bitcoin software can be genuinely unique and beautiful.

**Become a long-term product, if the demand is there.** If users show up and want to stay, Arké will grow into a dedicated wallet with a team, a user community, and a business model. If not, it remains a maintained open-source project. Both outcomes are valid. The project will not pretend otherwise.

---

## 01 — Foundations
*Private beta on signet. First users. First feedback.*

**↳ Where we are now**

Learning, not shipping. Every conversation with a tester is worth more than any analytics tool. The goal is to understand where the mental model breaks — and whether the bold visual direction earns its place from the very first impression.

This phase is also the beginning of the Bitcoin Design Guide implementation work: documenting decisions, noting where the guide needs refinement, and building in the open.

**Prioritise**
- Building the technical foundation as the Ark implementation becomes ready for mainnet
- End-to-end wallet flows on signet, including Lightning via the Ark gateway
- Qualitative feedback on both UX and brand — does the visual direction feel right or alienating?
- Every point of confusion documented — potential contributions back to the Bitcoin Design Guide
- Public build notes: the ecosystem should be able to follow along

**Avoid**
- Adding features before core flows are solid
- Expanding the TestFlight group too fast
- Treating brand feedback as secondary to functional feedback — they're equally important here

*The question: Does the core idea land without explanation — and does the product feel like it belongs?*

Find the latest updates here:
- [Discord](https://discord.gg/THhNW5H26H)
- [GBKS' blog](https://gbks.substack.com)
- [Second community thread](https://community.second.tech/t/arke-macos-prototype/156/32)

---

## 02 — Trusted Beta
*Broader testing. First non-technical users. Honest onboarding.*

**↳ Coming next**

Deliberately introduce testers who are not bitcoin developers. Technical users fill in gaps with their own knowledge. Civilians won't — and civilians are who this is ultimately for.

This is also when Arké's value as a reference implementation becomes legible to the wider ecosystem. Real users hitting real friction points is exactly the kind of evidence that improves both the app and the guide.

**Prioritise**
- Onboarding flow — can someone who uses Venmo understand what they're doing?
- The "explain Ark in zero words" design challenge
- TestFlight cohort diversity: people who have never self-custodied bitcoin
- App Store compliance research — start early, not at submission
- Whether the brand attracts or intimidates a non-technical iPhone user
- Sharing findings publicly: write-ups, design decisions, guide contributions

**Avoid**
- Feature parity anxiety with existing wallets
- Building in silence — the reference wallet value compounds with visibility

*The question: What is the single most confusing moment in the first five minutes?*

---

## 03 — Mainnet
*First real money. Small, careful, honest.*

**↳ Protocol-dependent**

Real money changes everything. Users who were relaxed on signet will be anxious with sats on the line. This is a trust design problem as much as a technical one — and the solutions are worth documenting carefully for the ecosystem.

**Prioritise**
- Conservative onboarding — small amounts first, clear communication
- Visible, honest status: is the network healthy? When is the next settlement?
- Personal support at this scale — a direct channel is a feature
- Edge cases that only appear with real economic stakes
- Open-sourcing the hard decisions: what broke, what worked, what the guide got right or wrong

**Avoid**
- Press coverage or product launches — too early
- Ignoring any user report of funds confusion, even if funds are safe

*The question: What does the "something went wrong" experience feel like? Terrifying, or reassuring?*

---

## 04 — Community
*Credibility within bitcoin. The project earns its reputation.*

**↳ Early growth**

Growth at this stage comes from credibility, not spend. The bitcoin and Ark ecosystems are the primary audience — developers, designers, and advocates who will judge the work honestly and share it if it deserves it.

This is also when demand signal becomes readable. Are users showing up and staying? Are they telling others? The answers determine how much of the roadmap beyond this point becomes relevant.

**Prioritise**
- Design polish — this is the moment to invest fully
- The 30-second demo that raises the bar visibly
- Active participation in Bitcoin Design Guide development — Arké as a living case study
- Being known as the iOS Ark reference wallet
- Watching for the demand signal: retention, word of mouth, unsolicited requests for features

**Avoid**
- Treating commercial goals as settled before the signal is clear
- Feature bloat that compromises the reference implementation clarity
- Silence — publish decisions, ship notes, be visible

*The question: Is anyone showing up who wasn't invited?*

---

## 05 — Product *(if the demand is there)*
*A dedicated wallet with a team, a user base, and a business model.*

**↳ Conditional**

If meaningful demand materialises — users staying, growing, asking for more — Arké becomes a long-term product. The shape of that product will follow what users actually need, but the most likely direction is a Pro subscription for heavy users: people running payroll through it, paying contractors, sending regularly at volume.

If the demand isn't there, Arké remains exactly what it already is: a maintained open-source project, a reference implementation, a contribution to the ecosystem. That outcome is not a failure.

**Prioritise (if proceeding)**
- Identifying the Pro feature set from real usage patterns, not assumptions
- Recurring payments and batch sending as likely anchors
- A pricing model that feels fair and doesn't compromise the free experience
- Making Pro aspirational — something users grow into, not a gate they resent
- A team structure that can sustain the project long-term

**Avoid**
- Premature commitment to a commercial model before demand is confirmed
- Paywalling anything that affects trust or self-custody fundamentals
- Letting commercial pressure erode the open-source reference implementation

*The question: Would a power user pay for this even if the free tier were good enough?*

---

## What stays constant

Regardless of which path the project takes:

- **iOS only.** The Apple platform is the creative and technical constraint that makes the work coherent.
- **Bitcoin only.** No other assets. No compromises on self-custody.
- **Open source.** The reference implementation value only exists if others can read, learn from, and build on it.
- **Honest about where we are.** This document will be updated as things change. When a phase is complete, it will say so. When plans change, they will change here first.

---

## If it ends

Worth naming directly: Arké is currently one person. The Ark protocol is young and may not mature as needed. Regulations in key markets could shift against self-custody wallets. The ecosystem might move in a different direction entirely. The project could simply stop.

If it does: the code stays on GitHub. Your recovery phrase works in any compatible wallet. Your bitcoin is unaffected.

Arké is built so that its failure mode is clean — it stops, not catastrophically. The open-source nature means the work remains available for whoever wants to continue it. That's a deliberate property of how this was built, not a fallback.