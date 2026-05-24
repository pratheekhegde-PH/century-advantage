---
name: century-advantage-design
description: Use this skill to generate well-branded interfaces and assets for Century Advantage (the premium rental & resale brokerage by Century Real Estate, Bengaluru), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files. Key files:

- `README.md` — brand context, voice, visual foundations, iconography
- `colors_and_type.css` — single source of truth for tokens (link this from any HTML you produce)
- `fonts/` — Stolzl (display) + Avenir (body) — full weight families
- `assets/logo/` — six logo lockups
- `preview/` — atomic design-system cards (one concept per file)
- `ui_kits/website/` — high-fidelity marketing-site recreation: header, hero, property cards, listings, detail, lead form, AI console, footer
- `ui_kits/website/site.css` — additional component CSS that builds on the tokens

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy assets out of this skill folder and create static HTML files for the user to view. Always link `colors_and_type.css` rather than re-declaring tokens.

If working on production code, copy assets and read the rules here to become an expert in designing with this brand. Match Stolzl + Avenir typography exactly.

**The four brand colours** (use the named tokens, not raw hex):
- **Legacy** `#6440A2` — primary surface. Heroes, full-bleed sections, footer, the purple lockup.
- **Ember** `#F9685B` — coral-orange accent. The `/A` mnemonic. CTAs and key highlights only.
- **Heritage** `#FCFFC8` — soft yellow. Warmth bands, optimistic supporting panels.
- **Mist** `#A1D2F2` — sky blue. Breathing-space bands, calm supporting element.

Combination rules: Legacy + white is the chassis. Heritage and Mist are atmospheric bands, never small panels. Ember is the spark — only on CTAs, eyebrows, the A-mnemonic, and section underlines. Type on Heritage/Mist is `--ca-legacy-ink`, not black. Never drop Ember onto Heritage (poor contrast). The codebase's gold + royal-purple are an older drift — ignore them.

Voice rules in short:
- First-person plural ("we"), service-oriented, considered. Never breezy.
- Title Case headlines and CTAs; sentence case body.
- No emoji. No "amazing / hot / must-see" language.
- Indian numerals (Lakh, Crore). Rupee prefix, no space.
- "Connect. Curate. Care. Close. Continue." — the five-C tagline, always Stolzl Medium, coral or purple.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions (audience, surface, fidelity, single page vs flow, real or placeholder imagery, which lockup variant), and act as an expert designer who outputs HTML artifacts *or* production code, depending on the need.
