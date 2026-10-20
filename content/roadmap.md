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

**Current progress:**
- [Discord](https://discord.gg/THhNW5H26H)
- [GBKS' blog](https://gbks.substack.com)
- [Bitcoin Design Guide](https://bitcoin.design/guide/)

---

## 01 — Foundations
*Private beta on signet. First users. First feedback.*

**↳ Complete**

This phase was about learning over shipping. Every conversation with a tester was worth more than any analytics tool. The goal was to understand where the mental model breaks — and whether the bold visual direction earned its place from the very first impression.

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

---

## 02 — Trusted Beta
*Broader testing. First non-technical users. Honest onboarding.*

**↳ Complete**

This happened differently than planned, but the core goal was met: real users, real friction points, real feedback. Instead of structured TestFlight cohorts, Arké went on a four-conference road show. Direct user testing at BTC Prague, in-person demos, payments tested at food stands and beer taps. The result was better than cohort testing would have provided — organic, high-bandwidth feedback from people actually trying to use it.

Key findings from this phase:
- Video intros work (people actually watch them)
- The tilt-to-share feature is a genuine delightful surprise
- Visual design is an immediate differentiator
- Users appreciate the lack of technical jargon
- App startup smoothness, payment speed, and error handling are the real friction points
- The ecosystem genuinely embraces Bark and Ark — there's real momentum and serious builders betting on the protocol
- Bitcoin payments infrastructure has matured significantly, but the demand side remains unclear: who will make payments, for which use cases, in which geographies? No one had convincing answers

The reference implementation value became legible: real users hitting real friction points, documented publicly, feeding back into design and the Bitcoin Design Guide.

---

## 03 — Reliability & Stability
*Real money, real scale. Getting the fundamentals solid.*

**↳ In progress**

Bark launched on mainnet June 9th. Arké is open on TestFlight with no waitlist. Real bitcoin, still experimental.

This phase is about proving the foundation can hold. Payment speed needs to reach ~2 seconds consistently. App startup needs to be instant. Error messages need to be honest and reassuring. Edge cases that only appear under real conditions need systematic attention.

**Prioritise**
- Payment speed — getting closer to 2 seconds as the ideal
- App startup smoothness and responsiveness
- Error message clarity and reassurance ("something went wrong" UX)
- Multi-device handling and migration flows
- Unilateral exit reliability and clarity
- Payment metadata handling (descriptions, contact info, etc.)
- Watching for the edge cases that real usage reveals
- Documentation of decisions back to the ecosystem

**Avoid**
- Adding features while stability is still being established
- Pretending issues don't exist
- Dismissing user reports, even when funds are provably safe

*The question: Can someone with real bitcoin feel confident and not terrified?*

Recent announcements:
- [Bark now on bitcoin mainnet](https://blog.second.tech/bark-now-on-bitcoin-mainnet/) (Second)
- [Introducing Noah and Arké: Two new Bark-based wallets](https://blog.second.tech/introducing-noah-and-arke/) (Second)
- [Down: Mid-roadshow update](https://gbks.substack.com/p/down) (GBKS)
- [Toot: Arké on mainnet, conference tour reflections](https://gbks.substack.com/p/toot) (GBKS)

---

## 04 — Polish & Deepening
*Reference implementation becomes tangibly better. Ecosystem grows with Bark.*

**↳ Next phase**

With the foundation solid, invest in the details that make the product genuinely delightful for long-term use. This is also when the ecosystem around Bark is maturing, bringing new possibilities (BOLT-12, BIP-353, etc.)

Initial response has been positive. But it's only been days, and summer typically brings lower activity. This phase watches for sustained demand while deepening the product itself — better design, better reliability, better feature depth.

**Prioritise**
- Design refinement — visual polish, micro-interactions, consistency
- Fiat value display (price, estimated cost in local currency)
- Accessibility improvements — screen readers, color contrast, haptic feedback
- Localization as adoption patterns emerge (which languages first?)
- Video explanations for complex features (unilateral exit, Ark fundamentals, etc.)
- Active participation in Bitcoin Design Guide — Arké as a living case study
- Integration of new Bark features as they ship (BOLT-12, BIP-353, etc.)
- Being known as the reference wallet: documentation, architecture clarity, code quality

**Avoid**
- Feature additions that pull focus from the core experience
- Building things that sound good without data first
- Localization without usage patterns to guide priorities
- Designing Plus around assumptions rather than asking users

*The question: Can Ark deliver a bitcoin payments experience that users love — without needing to know or care about Ark?*

---

## 05 — Product & Expansion *(if the demand is there)*
*Desktop, Plus features, and dedicated stewardship.*

**↳ Conditional**

This phase becomes relevant only if sustained demand materializes over time. Initial response has been encouraging, but it's far too early to call. Users may stay and ask for more, or activity may settle into a steady state. Either way, this phase determines what happens next. A decision on Arké's direction comes at the end of 2026.

Most likely (if demand is real): Arké becomes a long-term product with a Plus subscription. Desktop may follow (as companion or primary platform, depending on signal). But shape is determined by what users actually ask for, not assumptions.

Worst case: Arké remains a maintained open-source project, a reference implementation, a contribution to the ecosystem. That outcome is not a failure.

**Prioritise (if proceeding)**
- Understanding use cases from real patterns (who sends? how often? for what?)
- Desktop implementation (if there's genuine demand; iOS remains core)
- Plus feature identification from usage patterns, not guessing:
  - Custom themes and visual personalization
  - Enhanced payment metadata like images and data export
  - Fiat value display and currency preferences
  - BIP-353 Human Readable addresses
- A pricing model that feels fair and doesn't compromise self-custody
- Making Plus aspirational — something users grow into, not a gate they resent
- Team structure that sustains the project long-term

**Avoid**
- Paywalling anything that affects trust or self-custody fundamentals
- Building desktop without sustained demand
- Letting commercial pressure erode the reference implementation
- Guessing what power users need — listen and ask first

*The question: Would a power user pay for this even if the free tier were good enough?*

---

## What stays constant

Regardless of which path the project takes:

- **iOS primary, native desktop conditional.** iOS is the core creative and technical constraint. The architecture is designed for cross-platform potential, but native desktop (macOS/Linux) would only be pursued if genuine demand warrants the UI work — and never at the expense of iOS quality.
- **Bitcoin only.** No other assets. No compromises on self-custody.
- **Open source.** The reference implementation value only exists if others can read, learn from, and build on it.
- **Dependent on Bark.** Arké's success is tied to Bark's maturity and ongoing development by Second. If the protocol doesn't mature as needed, neither can Arké.
- **Honest about where we are.** This document will be updated as things change. When a phase is complete, it will say so. When plans change, they will change here first.

---

## If it ends

Worth naming directly: Arké is currently one person. The Ark protocol is young and may not mature as needed. Regulations in key markets could shift against self-custody wallets. The ecosystem might move in a different direction entirely. The project could simply stop.

If it does: the code stays on GitHub. Your recovery phrase works in any compatible wallet. Your bitcoin is unaffected.

Arké is built so that its failure mode is clean — it stops, not catastrophically. The open-source nature means the work remains available for whoever wants to continue it. That's a deliberate property of how this was built, not a fallback.