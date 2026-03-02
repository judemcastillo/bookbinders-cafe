# Bookbinder's Cafe

A warm, brand-first coffee shop website built for the frontend assignment using Next.js, TypeScript, and Tailwind CSS.

## Brand concept and personality

- **Business type:** Cafe
- **Name:** Bookbinder's Cafe
- **Neighborhood:** Bellview Row, Portland
- **Personality:** Warm, literary, handcrafted, and neighborhood-focused
- **Menu style:** Comfort-forward cafe menu with artisan coffee and pastries

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Setup instructions

```bash
npm install
npm run dev
```

Open `http://localhost:3000`

Production build:

```bash
npm run build
npm run start
```

## Design decisions

- **Color system:** A 5-color warm palette (`--caramel`, `--olive`, `--rust`, `--paper`, `--cream`) to keep the visual language inviting and consistent.
- **Typography:** Serif heading stack for personality and hospitality tone, with a clean sans-serif body stack for readability.
- **Layout intent:**
  - Home: hero + story snippet + featured items + visible hours + location/map.
  - Menu: category-based structure with aligned prices and optional dietary tags.
  - About: human brand story, values, and team cards.
  - Contact: clear address/phone/email, readable opening hours, map embed, optional enquiry form.
- **Motion:** Subtle rise animation and hover-lift on menu cards only.

## Assignment criteria mapping

- Required pages: `Home`, `Menu`, `About`, `Contact` are implemented.
- Home includes: hero, about snippet, featured items, opening hours, address/phone/map.
- Menu includes: categories, item name/description/price, optional dietary tags (`V`, `VE`, `GF`).
- About includes: founder story, values (max 3), team section with photo placeholders.
- Contact includes: formatted contact details, readable hours, map embed, optional enquiry form.
- Responsive behavior:
  - Mobile `<768px`: single-column menu and stacked sections.
  - Tablet `768-1279px`: two-column menu layout.
  - Desktop `>=1280px`: full-width layout with split content sections.

## Assumptions

- “Reservation CTA” requirement is interpreted as CTA to menu or contact/find-us section since backend reservation flow is explicitly out of scope.
- Image placeholders are used instead of external photo assets to keep the submission self-contained.

## Known limitations

- Enquiry form is UI-only (no backend submission).
- Map uses an iframe embed and is treated as a location placeholder.
