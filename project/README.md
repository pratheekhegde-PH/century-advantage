# Century Advantage Design System

A design system for **Century Advantage** — the premium rental & resale brokerage arm of Century Real Estate (Bengaluru, India). Backed by a 50-year legacy in shaping the Bengaluru skyline, Century Advantage connects high-intent buyers and tenants to curated, verified residences in landmark Bengaluru projects (Hebbal, Whitefield, Thanisandra, Jakkur).

The brand position is *understated luxury*: a humanist, considered, hospitality-grade voice for a market often dominated by listings-portal noise. The mark itself is a custom stylised wordmark — a sharp geometric **A** opening "dvantage" in a thin sans, paired with a confident bold **Century** in black.

The tagline (used liberally in marketing): **Connect. Curate. Care. Close. Continue.**

---

## Sources reviewed

| Source | Format | Path / Link |
|---|---|---|
| Brand ID guide | PDF (image-only, 8 pages) | `uploads/Century_Advantage_Brand ID.pdf` |
| Logo lockups | PNG, 6 colour variants | `uploads/CENTURY_ADVANTAGE-0[1-6].png` → `assets/logo/` |
| Master AI artwork | Adobe Illustrator | `uploads/CENTURY_ADVANTAGE.ai` (read-only — no AI extractor available) |
| Brand typography | TTF / OTF | `uploads/Avenir-*.ttf`, `uploads/stolzl_*.otf` → `fonts/` |
| Implementation codebase | HTML / CSS / vanilla JS | mounted folder `Assets/` (single-page app `index.html`, `styles.css`, `js/pages/*`) |

> The Brand ID PDF is a scanned/flattened deck — text extraction returned empty pages and full raster rendering timed out. Colour and type tokens here were sampled directly from the **logo PNGs** (true brand colours) and the **font files** (typography). The codebase's `styles.css` was used to understand interaction patterns, **not** as a colour source — its champagne-gold / royal-purple palette is a stylistic interpretation that drifted from the brand mark. This design system restores the actual brand identity.

---

## Index

| Folder / file | What it is |
|---|---|
| `README.md` | This file — brand context, voice, foundations, iconography |
| `SKILL.md` | Cross-compatible skill manifest for Claude Code |
| `colors_and_type.css` | Single CSS source of truth — fonts, tokens, semantic classes |
| `fonts/` | Stolzl (display) + Avenir (body) — full weight families |
| `assets/logo/` | Six official logo lockups (Ember / Legacy / Ink × on-light / on-dark) |
| `assets/icons/` | Lucide icon set (linked from CDN; usage rules in ICONOGRAPHY below) |
| `assets/imagery/` | Placeholder photography references and patterns |
| `preview/` | Design-system cards rendered to the Design System tab |
| `ui_kits/website/` | Marketing site UI kit — hero, listing card, filter bar, footer, AI console |
| `ui_kits/agent-portal/` | Internal agent admin / lead-management portal kit |

---

## Brand snapshot

- **Company:** Century Advantage by Century Real Estate Holdings Pvt. Ltd.
- **Sector:** Premium residential brokerage — rental + resale
- **Geography:** Bengaluru (HQ: Century Towers, Kasturba Road)
- **Audience:** HNI buyers / NRIs, premium-segment tenants, owners of Century-built or comparable inventory
- **Tagline:** Connect. Curate. Care. Close. Continue.
- **Trust pillars:** 50-year legacy · Verified listings · 90-day closure mandate
- **Promise:** Curated inventory inside Century-built and adjacent landmark projects, with a single accountable advisor end-to-end.

---

## Content fundamentals

The Century Advantage voice is **considered, hospitality-grade, plural-first**. It reads more like a private bank or a concierge than a property portal.

### Tone

- **Warm but composed.** Confidence without bravado. Never breezy, never punchy.
- **Service-oriented.** The brand speaks *for* the client, not *at* them. "We curate. We verify. We close." — the client is implied as the beneficiary.
- **Specific over superlative.** Names projects, neighbourhoods, square-footage, possession dates. Avoids "amazing", "incredible", "ultimate".
- **Quiet luxury.** Words like *curated, bespoke, verified, exquisite, mandate, advisor, portfolio, residence* recur. Words like *deal, hot, must-see, snap up* never appear.

### Voice mechanics

- **Person:** Primarily first-person plural ("we", "our advisors"). Direct second-person ("you", "your") used in CTAs and forms. Avoid first-person singular.
- **Casing:** Title Case for headlines, section labels, and CTAs. Sentence case for body and helper text. ALL CAPS is reserved for the tracked-out eyebrow label only.
- **Punctuation:** En-dashes for ranges (₹30,000 – ₹50,000). Comma-separated Indian numerals (₹1,25,000). Oxford comma optional, used when it improves clarity.
- **Numerals:** Always Indian numbering — Lakh, Crore. Currency symbol prefixed with no space: `₹45,000/month`. Square footage written `1,840 sq.ft.` (lowercase, period after sq).
- **Property naming:** Always full project name in Title Case ("Century Ethos Penthouse", "Hebbal 3 BHK Apartment"). Locality as standalone clause ("in Hebbal", "on Bellary Road").

### Vocabulary

| Use | Avoid |
|---|---|
| Residence, property, asset, home | Pad, crib, place |
| Advisor, relationship manager | Agent, broker (internal-only term) |
| Curated inventory, verified listing | Deal, listing (uncurated implication) |
| Mandate, exclusivity period | Contract, agreement |
| Site visit, walkthrough | Showing, viewing |
| Possession, ready-to-move | Move-in date, available now |
| Owner, principal | Landlord, seller |
| Resident, tenant | Renter |
| Connect, curate, care, close, continue | The five-C mantra — used in headlines and footer |
| Bengaluru | Bangalore (use the contemporary spelling) |

### Emoji

**Never.** Not in product copy, not in marketing, not in the AI agent console. The brand's seriousness is part of the value proposition. Status and rating use small Stolzl-set numerals or Legacy/Ember icons instead. icons instead.

### Example copy snippets (from the live site)

- **Hero:** "Find Your Perfect Home or Sell Smarter." (Section subtitle: "Premium Rental & Resale Hub")
- **Lead-form title:** "Schedule a Site Visit" → never "Book Now" / "Get a Tour".
- **Trust pill:** "50 Years Legacy" / "Verified Listings" / "90-Day Mandate"
- **Footer tagline:** "Connect. Curate. Care. Close. Continue."
- **Footer descriptor:** "Century Advantage is a premium real estate brokerage, resale, and rental intake service backed by Century Real Estate's 50-year legacy of shaping the Bengaluru skyline."
- **AI console intro:** "Greetings! I am the Century Advantage AI Assistant. I manage lead intakes, routing, and automated matches." — formal opener, no contractions, capitalised "I am".

---

## Visual foundations

### Colour — the four named brand colours

The brand is built on **four named colours**, taken directly from the official Brand ID:

| Name | Hex | Role |
|---|---|---|
| **Legacy** | `#6440A2` | **Primary purple.** Dominant brand surface — heroes, full-bleed sections, footer, the purple lockup of the wordmark. |
| **Ember** | `#F9685B` | **Coral-orange accent.** The `/A` mnemonic. CTAs and key highlights. Eyebrows. Section underlines. |
| **Heritage** | `#FCFFC8` | **Soft yellow.** Warmth + optimism. Featured-tile prices, owner-promise bands, table panels, AI bubbles on dark. |
| **Mist** | `#A1D2F2` | **Sky blue.** Breathing space + supporting element. Facility chips, calm "next-step" bands, info status. |

Plus **Ink** `#1A1A1A` ("Century" wordmark + primary text) and **Paper** `#FFFFFF`.

#### Rules of combination

- **Legacy is the chassis.** When in doubt, the section bg is white or Legacy. Heritage and Mist are *atmospheric* backgrounds — full-bleed bands between Legacy/white sections, never small panels.
- **Ember is the spark.** Only on the things that *must* be clicked, looked at, or remembered. Eyebrows. Primary CTAs. The `/A` mnemonic. A coral underline below section titles. Used sparingly.
- **Heritage and Mist never appear together in the same panel**, but they *do* appear next to each other (a Heritage band followed by a Mist band, or Heritage + Mist radial gradients in the hero atmosphere).
- **Type on Heritage/Mist is `--ca-legacy-ink` (#2A1A4D)**, never pure black — keeps the warm/cool relationship intact.
- **Don't drop Ember onto Heritage.** The contrast is poor and it dilutes the accent. Ember sits on white, on Legacy, or on imagery.

Neutrals are a warm-cool blended grey scale (`--ca-n-50` → `--ca-n-900`). See `colors_and_type.css` for the full token set.

> **Codebase deviation flag.** The mounted `Assets/styles.css` uses a champagne gold (`#8E6F3E`) and a different royal purple (`#6D28D9`). Those are an older interpretation. This system follows the official Brand ID's four named colours.

### Type

- **Display: Stolzl** — geometric humanist sans. Used for the wordmark, headlines, eyebrows, labels, buttons, nav. Weight 500 (Medium) is the workhorse; 300 (Light) for very large display; 700 (Bold) for emphasis only. Set tight (`letter-spacing: -0.005em` to `-0.02em`).
- **Body: Avenir** — humanist sans. Used for paragraph text, helper, form values. Weight 400 (Regular) default, 350 (Book) for long-form, 600 (Heavy) for inline emphasis.
- **Hierarchy is signalled by weight + size, never by colour.** Ember and Legacy are *never* used for body text — only the mnemonic-A, eyebrows, links, CTAs, and brand-surface section headings.
- **Tracking:** Eyebrows + labels are uppercase, tracked `0.18em` and `0.06em` respectively. Body and headlines are set near-zero or slightly tight. Stolzl is *never* set wide.

### Spacing & layout

- **4px base unit.** Tokens go `4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96`.
- **Generous whitespace.** Sections breathe at 64–96px vertical padding. Cards have 24–32px interior padding. The brand never feels cramped.
- **Asymmetric grids** preferred over even thirds — e.g. `1.2fr 1fr` hero, `1.8fr 1.2fr` detail. Gives the brand a magazine cadence.
- **Fixed header (`80px`) with backdrop-blur**, lightweight bottom hairline. No top shadow.

### Imagery

- **Warm, golden-hour photography.** Architectural interiors and Bengaluru skyline shots. Slight warm cast (not cool), shallow depth of field, natural light. Never staged stock photography of people pointing at laptops.
- **Full-bleed in heroes**, soft inset frame (10px radius, 1px hairline border) for cards. A subtle 8s `transform: scale(1.06)` on hover for hero media.
- **No filter, no grain, no duotone.** Imagery is treated as-shot.
- **Aspect ratios:** hero 3:4 portrait or 16:10 landscape; card 4:3; thumbnail 1:1.

### Backgrounds

- **Default: solid `--bg-1` (white) or `--bg-2` (warm off-white).**
- **Hero accent:** soft radial gradients — Heritage (yellow) at one corner, Mist (blue) at the opposite corner, both at ~40–60% opacity. Atmospheric, not a gradient "effect." The hero glows from two corners.
- **No repeating patterns, no textures, no noise, no AI-slop holographic gradients.** The brand earns weight from typography and photography, not from background treatments.

### Cards

- **Surface:** `--bg-1` white on `--bg-2` page, or `--bg-2` on `--bg-1`.
- **Border:** `1px solid var(--border-1)` (warm hairline).
- **Radius:** `--r-lg` (10px) for content cards; `--r-md` (6px) for tight UI cards; `--r-sm` (4px) for buttons/inputs.
- **Shadow:** `--shadow-2` at rest, `--shadow-3` on hover. Soft, warm-tinted, no halo.
- **Hover:** `translateY(-4px)` + border colour to `--ca-legacy` + shadow lifts to `--shadow-3`. Duration `--dur-base` (220ms) with `--ease-standard`.

### Borders & dividers

- All hairlines are `1px solid var(--border-1)`. No double borders, no dashed unless conveying placeholder/drop state.
- **Section accent rule:** an `::after` 2px-tall, 24–40px-wide Ember underline sits 6–10px below section titles. Recurs throughout the system — a visible signature.
- **No coloured left-borders** on cards.

### Buttons

| Variant | Use | Resting | Hover | Pressed |
|---|---|---|---|---|
| Primary | Lead-generating CTAs | Ember fill, white text | Ember-deep + `translateY(-1px)` + shadow-2 | Ember-deep, `translateY(0)`, no shadow |
| Secondary | Subordinate actions | Transparent, Ember text, Ember 1px border | Ember-soft fill | Ember-soft fill, no transform |
| Tertiary | Inline / dense | Text only, Legacy, no border | Underline emerges; colour to Ember | Ember-deep |
| Legacy | Alternate emphasis on light surfaces; *primary* on Heritage/Mist bands | Legacy fill, white text | Legacy-deep | Legacy-deep |
| Ghost dark | On Legacy / dark surfaces | Transparent, white 1px border, white text | rgba(white, 0.12) fill | — |

- **Radius:** `--r-sm` (4px) — never pill, never sharp square.
- **Padding:** `12px 24px` default; `8px 16px` compact.
- **Label:** Stolzl Medium, tracked `0.06em`, **Title Case** (never SCREAMING UPPERCASE).
- **No icon-only primary buttons** without a label adjacent — always pair.

### Hover & press states

- **Hover (links / icons):** colour shifts from `--fg-2` to `--ca-legacy`; for already-Ember elements, shift to Ember-deep.
- **Hover (cards):** translateY(-4px), shadow lift, Legacy-coloured border.
- **Press:** elements settle (`translateY(0)`), shadow reduces, fill darkens by one step (Ember → Ember-deep; Legacy → Legacy-deep).
- **Focus:** `box-shadow: 0 0 0 3px rgba(249, 104, 91, 0.22)` — never the default browser ring.

### Animation

- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` (standard) for everything by default. Entrance uses `cubic-bezier(0, 0, 0.2, 1)`. No spring, no bounce — the brand never bounces.
- **Duration:** `140ms` (micro), `220ms` (standard), `420ms` (meaningful transitions, e.g. drawer open). Anything longer than 500ms is suspicious.
- **Page transitions:** simple opacity fade (`220ms`) on view swaps, no slide.
- **Hero media:** an 8s slow `scale(1.06)` on container hover — the only "long" animation in the system. Conveys cinematic dwell.
- **No parallax, no scroll-triggered text reveals.**

### Transparency & blur

- The fixed header uses `backdrop-filter: blur(12px)` over an 85% white surface. This is the **only** routine use of backdrop-blur in the system.
- Modal overlays use a solid `rgba(26, 26, 26, 0.5)` scrim, no blur.
- Don't use translucent surfaces over photography unless overlaying a captioned media tile (`linear-gradient(to top, rgba(255,255,255,0.95), transparent 60%)`).

### Corner radii

| Token | px | Use |
|---|---|---|
| `--r-xs` | 2 | Tiny chips, tag-strip |
| `--r-sm` | 4 | Buttons, inputs, small tags |
| `--r-md` | 6 | Dense UI cards, table containers |
| `--r-lg` | 10 | Content cards, image frames |
| `--r-xl` | 16 | Hero panels, modal sheets |
| `--r-pill` | 999 | Status pills, facility chips |

The system is **mostly 4–10px**. Avoid bubbly 16–24px radii on standard cards — it cheapens the brand. Pills are used sparingly, only for filter chips and facility tags.

### Layout rules

- **Fixed elements:** the 80px header is always fixed; the AI agent bubble + WhatsApp FAB sit at `bottom: 24px` on the right; no other elements are fixed on scroll.
- **Max content width:** 1280px for marketing, 1100–1200px for app surfaces.
- **Page side gutters:** `4%` of viewport on marketing; `24–32px` on app.
- **Sticky elements:** lead-capture sidebar uses `position: sticky; top: 100px` inside its column.

### Imagery colour vibe

Warm, photo-real, hospitality-grade. Bengaluru-specific where possible (rooftop pools, Hebbal flyover skyline, monsoon greenery). Avoid: cool grey corporate interiors, drone-grid aerials, US suburban single-family homes, stock-of-stocks brokerage handshakes.

---

## Iconography

Century Advantage **does not ship a custom icon set**. The native implementation in `Assets/` uses inline SVGs that match **Lucide** (Feather's successor) — stroke-based, 24×24 viewBox, 2px stroke, rounded caps and joins. Examples found in the codebase: pin/map-marker, phone, mail, search, check-circle, message-square, send, hamburger.

**This design system standardises on Lucide.** Loaded via the official CDN:

```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="map-pin"></i>
<script>lucide.createIcons();</script>
```

### Rules

- **Stroke weight:** `2px` default. Never `1.5px` — looks weak against Stolzl. Never `2.5px+` — fights the wordmark.
- **Size:** 14, 16, 18, 20, 24 px. Match the cap-height of the adjacent text or use 1.25× for emphasis.
- **Colour:** inherits `currentColor`. Icons are **never multi-coloured** and **never filled** (except the WhatsApp glyph, which is an exception — it's the official WhatsApp asset).
- **Pairing with text:** 8px gap (`gap: 8px`) when inline with a label; vertical-align centre via flex.
- **Solo icons:** require `aria-label`; sit on a 32 or 40px square hit target.

### Emoji

**Never.** See Content Fundamentals.

### Unicode

Rupee sign `₹` is the only currency mark, always prefix, no space. Bullet points use `•` (Avenir-rendered, not a custom dot). En-dash `–` for ranges, em-dash `—` for parenthetical breaks.

### The Mnemonic Mark

The geometric "A" inside the wordmark is the **mnemonic** — usable in isolation as a favicon or social avatar. It's the only piece of the system that may appear at very small sizes (16×16, 32×32). When used solo, prefer the Ember version on white, Legacy version on Heritage/Mist, white version on Legacy. Files: see `assets/logo/`. When used solo, prefer the coral version on light, white version on dark. Files: see `assets/logo/`.

---

## How to use this system

1. **Read this README** for context.
2. **Link `colors_and_type.css`** from any new HTML — it loads the fonts and the full token set.
3. **Copy assets from `assets/`** into your output folder; never reference them by absolute project path in deliverables.
4. **Browse `preview/` and `ui_kits/`** for ready-made component patterns. Copy markup, don't reinvent.
5. **When in doubt, lean Legacy + Ember.** Legacy as the section / surface colour; Ember as the accent and the CTA. Bring Heritage and Mist in as full-bleed *bands* between Legacy and white sections — not as panel colour inside a regular page.

---

## Open questions / caveats

- **Brand ID PDF was not parseable** — text extraction returned empty pages, full image rendering timed out. Tokens here are sampled from the **logo PNGs** and **font files** directly. If a written brand guide exists in the PDF, please flag any discrepancies.
- **No imagery library was provided.** Stock placeholders from Unsplash are referenced in the codebase; the system uses warm architectural placeholders for now. If Century has a photo library, please attach.
- **The codebase's gold + royal-purple palette diverges from the official Brand ID.** This system follows the brand guide's four named colours (Legacy / Ember / Heritage / Mist), not the codebase.
- **Stolzl is a paid commercial font** (Florian Schick foundry). Files are present in `fonts/`; licensing for redistribution / web embedding is assumed to be in place — please confirm.
