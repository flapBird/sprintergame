# Sprinter Game

**https://sprintergame.xyz/** — Play the classic 100-meter dash game free in your browser.

Sprinter is a cult Flash game from 2006 by the Japanese indie studio Gamedesign.jp. This site preserves it and makes it playable instantly in any modern browser using the [Ruffle](https://ruffle.rs/) Flash emulator. No downloads, no sign-ups, no plugins required.

---

## About the game

You and seven opponents line up on a track. The starting signal fires, and from that moment everything depends on how fast and how steadily you tap the `←` and `→` arrow keys — alternating rhythmically to build sprinting momentum.

Each race lasts 10–15 seconds. Win and you advance to the next heat with harder opponents and a new funky soundtrack. Lose and you try again. There are 12 levels to conquer, and the same simple controls that make it easy to pick up also hide a rhythm game that rewards consistency over brute speed.

The game was originally released as an Adobe Flash `.swf` file and is preserved here through the open-source Ruffle emulator, which renders the original ActionScript content natively in the browser without any legacy plugins.

---

## Tech stack

| Layer           | Choice                                          |
| --------------- | ----------------------------------------------- |
| Framework       | [Next.js](https://nextjs.org/) 14 (App Router)  |
| Language        | TypeScript                                      |
| Styling         | [Tailwind CSS](https://tailwindcss.com/) 3       |
| Flash Emulation | [Ruffle](https://ruffle.rs/) — CDN + fallback    |
| Fonts           | Google Fonts (Nunito / Quicksand)                |

---

## Project structure

```
app/
  page.tsx          Homepage — game embed, game description, how to play, FAQ
  about/page.tsx    About the game and this site
  contact/page.tsx  Contact form (email)
  privacy/page.tsx  Privacy policy
  terms/page.tsx    Terms & conditions
  layout.tsx        Root layout — header, footer, analytics, AdSense
  robots.ts         robots.txt generator
  sitemap.ts        sitemap.xml generator

components/
  GameEmbed.tsx     Ruffle Flash player wrapper with play overlay,
                    like/dislike, reload, and fullscreen controls
  Hero.tsx          Hero section wrapping GameEmbed
  SidebarLayout.tsx Content card container below the game
  Header.tsx        Sticky top nav bar
  Footer.tsx        Site-wide footer with legal links
  SchemaMarkup.tsx  JSON-LD structured data injection
  AdSlot.tsx        Ad slot placeholder (opt-in)
  LegalPage.tsx     Reusable privacy / terms layout

lib/
  site.config.ts    Central site configuration — content, theme, game info
  seo.ts            Metadata builder and JSON-LD helpers

public/
  sprintergame-cover.jpeg   Launch screen cover
  sprinter-collage.svg      Gameplay features illustration
  sprinter-keyboard.svg     Keyboard controls diagram
  favicon.ico / .svg / .png Site icons
  og-image.png              Social sharing image
  ads.txt                   Google AdSense declaration
```

---

## Getting started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# -> http://localhost:3000

# Production build
npm run build
npm start
```

### Environment variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

| Variable                      | Purpose                       |
| ----------------------------- | ----------------------------- |
| `NEXT_PUBLIC_GA_ID`           | Google Analytics 4 measurement ID |
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID` | Google AdSense publisher ID     |

Both are optional — leave them empty to skip the corresponding scripts.

---

## How the game embedding works

The original Sprinter game is an SWF file hosted externally. The site proxies it through Next.js rewrites (`next.config.js`) so that Ruffle loads it from the same origin, avoiding cross-origin restrictions:

```
/game/sprinter.swf → https://f.kbhgames.com/2018/08/sprinter.swf
```

Ruffle is loaded on-demand from the unpkg CDN. When a visitor clicks the Play button on the cover overlay, Ruffle initializes and renders the SWF in a canvas element sized to fill the game container at 16:9 aspect ratio.

The toolbar below the game provides:
- **Like / Dislike** — simple feedback buttons
- **Reload** — destroy and re-initialize the Ruffle player
- **Fullscreen** — expand the game wrapper to fill the entire screen

---

## Color theme

The site uses a warm athletic palette inspired by track-and-field aesthetics:

| Token      | Value     | Usage                              |
| ---------- | --------- | ---------------------------------- |
| `primary`  | `#DC2F2F` | Buttons, accents, hero gradient    |
| `secondary`| `#1B6B93` | Supporting accents                 |
| `background`| `#FFFBF7`| Page background                    |
| `surface`  | `#F3EFE9` | Cards, feature boxes               |
| `text-dark`| `#292524` | Body text and headings             |

---

## Deployment

The site is built for [Vercel](https://vercel.com/) with zero additional configuration — just connect the repository and set the environment variables in the Vercel dashboard.

The domain `sprintergame.xyz` is configured as the production domain. All routes are statically generated at build time.

---

## Credits

- **Game**: Sprinter by [Gamedesign.jp](https://www.gamedesign.jp/) (2006)
- **Flash preservation**: [Ruffle](https://ruffle.rs/) open-source emulator
- **Site**: Built by Codex
