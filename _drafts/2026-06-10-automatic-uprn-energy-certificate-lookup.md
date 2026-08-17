---
title: "Introducing automatic UPRN energy-certificate lookup"
tab_title: "Introducing automatic UPRN energy-certificate lookup · Housing Direct"
description: "Listing a property now pulls its EPC straight from the government register, so the rating, expiry date and floor area fill themselves in. Here's how it works and where it doesn't."
card_excerpt: "List faster: we now pull your EPC straight from the government register."
category: Product
image: /assets/img/hp_7.jpg
image_alt: "A row of brick terraced houses"
---
Typing your EPC rating into a form is a small annoyance. Doing it for forty properties, then discovering three of them expired last year, is a rather larger one. From today, listing a property on Housing Direct fills that section in for you.
{: .lead-in}

## What changed

When you add a property, we now match the address to its **Unique Property Reference Number** and look the EPC up directly against the government's Energy Performance of Buildings register.

What comes back and populates automatically:

- Current energy rating and score
- Certificate lodgement date and expiry
- Total floor area
- Property type and construction age band
- The certificate's recommended improvements

You confirm it looks right, and move on. No PDF hunting, no re-keying, no transposed digits.

## Why the UPRN, rather than the address

Addresses are unreliable as identifiers. "Flat 2, 14 Chapel Street" and "14a Chapel Street" might be the same home or two different ones, and every system in the chain spells things slightly differently. That ambiguity is where matching quietly breaks, particularly for flats in a converted building.

A UPRN is Ordnance Survey's unique identifier for every addressable location in Great Britain, released as open data in July 2020. It is machine-readable, it does not depend on spelling, and it distinguishes separate flats in the same block without guesswork.

MHCLG has been publishing UPRNs alongside EPC data for some years now, which is what makes this lookup possible in the first place. Ordnance Survey made the point at the time that linking the two lets a register check automatically whether a property has an EPC, rather than relying on tenants, landlords or homeowners to report it.

> The address is what you write on an envelope. The UPRN is what a computer should be matching on.

## Where it doesn't work

Being straight about the edges, because an automated field that is silently wrong is worse than an empty one.

- **Scotland has a separate register.** The MHCLG register covers England, Wales and Northern Ireland. Scottish properties still need the details entering manually.
- **Not every EPC has an assessor-supplied UPRN.** The register records whether a UPRN came from the energy assessor or was matched by address afterwards. Address-matched records are usually right, but not guaranteed.
- **New certificates take a short while to appear.** If your EPC was lodged in the last few days, the register may not have it yet. Enter it manually and it will reconcile later.
- **No EPC on record means no EPC found.** The lookup reports what the register holds. If nothing comes back, that is worth knowing in itself.

Whatever the lookup returns, you can always override it. The register is the source of truth for what was lodged, not for what is true today about a property you have since improved.

## The part that matters more than the time saved

Once we know a certificate's real expiry date rather than one typed from memory, we can act on it. Expiry dates feed straight into the compliance tracking that already runs on gas, electrical and insurance: reminders before anything lapses, and listings suspending automatically if one does. A Local Authority never sees stock that has quietly fallen out of compliance.

That matters more each year. The minimum standard for private rented homes rises to the equivalent of **EPC C by 1 October 2030**, and phase two of the Renters' Rights Act brings the PRS Database from late 2026, where landlords will register property information along with gas, electrical and EPC records.

Knowing today which of your properties sit at D or below, and when each certificate runs out, turns a 2030 problem into a scheduling exercise. We are working on portfolio-level views of exactly that.

## Available now

The lookup runs automatically on new listings for landlords and agents. Existing listings will be matched and backfilled over the coming weeks, and we will flag anything the register disagrees with rather than overwriting what you have entered.

[List a property](/for-landlords/), or if you manage stock for other landlords, [see the agent view](/for-agents/).
