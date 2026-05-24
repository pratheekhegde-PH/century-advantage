# Century Advantage — Website UI Kit

A high-fidelity recreation of the marketing-site experience from the provided codebase (`Assets/`), rebuilt against the **restored brand palette** (coral primary, purple alternate, Stolzl + Avenir).

This is the **single product surface** evidenced in the supplied codebase: a public marketing + listings + lead-capture site with a persistent AI agent console.

## What's here

- `index.html` — interactive click-through prototype. Loads React + Babel, mounts the components, lets you navigate Home → Listings → Detail → Lead form. The AI console can be toggled.
- `Header.jsx` — fixed glass header, nav, primary CTAs, mobile hamburger.
- `HomeHero.jsx` — luxury hero with trust badges + featured media tile.
- `PropertyCard.jsx` — the core listing tile, used across Home and Listings.
- `FilterBar.jsx` — listings filter shelf.
- `Listings.jsx` — listings grid + pagination.
- `PropertyDetail.jsx` — detail page with gallery, specs, amenities, and sticky lead form.
- `LeadForm.jsx` — the right-column lead-capture card (also used as standalone).
- `AIConsole.jsx` — floating bubble + right drawer with chat + automation tabs.
- `Footer.jsx` — 4-column footer with five-C tagline.
- `mocks.js` — fake property listings used across all surfaces.

## Component philosophy

- **Cosmetic-only.** Components do not implement real backend wiring; filters mutate local state, the AI chat is scripted, lead-form submits no-op.
- **Pixel-fidelity to the codebase's structure**, restyled to use the *correct* brand tokens from `colors_and_type.css`.
- **Click-through prototype**, not a Storybook. `index.html` looks like a real visit to the live site.

## Known divergences from the source codebase

| Source uses | UI kit uses | Why |
|---|---|---|
| Gold `#8E6F3E` accent | Coral `#F06860` | Brand logos use coral, not gold (codebase drift) |
| Royal purple `#6D28D9` | Logo purple `#684898` | Matched to logo lockup |
| Mixed gold + purple accents | Coral OR purple per surface | Brand guideline: never mix accents in one field of view |
| Champagne text glow | Soft warm shadows | Toned-down luxury, not blingy |

The original `Assets/styles.css` lives in the mounted folder for reference.
