# AlgoNex — Multi-page split + mobile polish

## Goal
Move FAQ, Rules and Prizes off the home page onto their own pages. Prizes also keeps a teaser on home. Make every section render cleanly on mobile (360px+).

## New pages
- **`/rules`** — full Rules section (8 accordion cards) moves here, with its own SEO title/description.
- **`/faq`** — full FAQ section moves here, own SEO meta.
- **`/prizes`** — new aggressive standalone page: giant prize pool hero (₹1.5 Lakh+ counter), podium-style 1st/2nd/3rd cards, special awards strip, judging criteria recap, register CTA. Own SEO meta.

## Home page changes
- Remove Rules and FAQ sections.
- Replace full Prizes board with a **teaser**: prize pool amount + 3 place amounts in a compact strip + "See full prizes →" link to `/prizes`.
- Keep: Hero, Ticker, Stats, About, Why Participate, Tracks, Timeline, Evaluation, Register CTA, Mentors, University, Club, Contact, Footer.

## Navigation
- NAV in `event-config.ts` switches from hash ids to route paths: Home `/`, Rules `/rules`, Prizes `/prizes`, FAQ `/faq`; home-only sections (About, Tracks, Timeline, Contact) link as `/#about` etc.
- Navbar uses TanStack `Link` so active page highlights red; mobile menu updated the same way.
- Footer links updated to the new paths.
- Theme (dark/light) state moves to `__root.tsx` so it persists across pages.

## Mobile polish (all pages)
- Check 360px / 390px: no horizontal overflow, giant ghost texts clamped, hero title scales, tracks scroll-showcase works on touch, timeline zig-zag stacks cleanly, pinned cards grid to 1 column, tap targets ≥44px.

## Verification
- Typecheck + Playwright at 360/390/768/1280 on all 4 routes, dark + light.
