/**
 * Site configuration — the single source of truth for the entire game site.
 * When creating a new game site, only edit this file and replace images in /public.
 *
 * SENSITIVE VALUES (gaId, adsenseClientId) are read from environment variables:
 *   NEXT_PUBLIC_GA_ID              — Google Analytics measurement ID (e.g. G-XXXXXXXX)
 *   NEXT_PUBLIC_ADSENSE_CLIENT_ID  — Google AdSense publisher ID  (e.g. ca-pub-XXXXX)
 *
 * Set them in .env.local (not tracked by git) or in your deployment dashboard.
 *
 * Because these are NEXT_PUBLIC_* variables, they are inlined at build time
 * and visible in client-side JS — this is by design for GA + AdSense scripts
 * that must run in the browser. Never put API secrets or server-side keys here.
 */

const gaId = process.env.NEXT_PUBLIC_GA_ID || "";
const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "";
export const siteConfig = {
  /** Display name shown in header, footer, and browser title. */
  siteName: "Sprinter Game",

  /** Canonical domain, no trailing slash. Used for sitemap, OG URLs, etc. */
  domain: "https://sprintergame.xyz",

  seo: {
    /** Homepage <title>. Used as-is on the homepage. */
    title: "Play Sprinter Game Online Free | Sprinter Game",

    /**
     * Homepage meta description, keep under 160 characters.
     * Describe what the game is and that it's free to play online.
     */
    description: "Sprinter Game is a classic 100-meter dash racing game. Alternate arrow keys to gain momentum and sprint past opponents. Play free online — no download needed.",

    /** Comma-separated keywords for the homepage. */
    keywords: ["sprinter game", "sprinter game online", "100m sprint game", "running race game", "flash running game", "sprint game free", "track and field game", "crazygames sprinter", "sprinter 100m"],

    /** Social sharing image, 1200x630px. Replace /public/og-image.png. */
    ogImage: "/og-image.png",

    /** Twitter/X handle, can be left empty. */
    twitterHandle: "",
  },

  game: {
    /** Name of the game, shown in Hero, JSON-LD, etc. */
    name: "Sprinter Game",

    /** Genre(s) for JSON-LD VideoGame.genre. e.g. ["Sports", "Basketball"]. */
    genre: ["Sports", "Running", "Arcade"],

    /** iframe embed URL — must be manually replaced with the real embeddable URL. */
    embedUrl: "/game/sprinter.swf",

    /** Aspect ratio of the embedded game, used to prevent CLS. */
    aspectRatio: "16 / 9",

    /** Cover image shown on the idle/launch screen. Replace /public/cover.jpg. */
    coverImage: "/sprintergame-cover.jpeg",

    /** Age rating for the game. */
    ageRating: "Everyone",

    /** Attribution displayed below the game and in the footer. */
    sourceAttribution: "Game by Gamedesign.jp",
  },

  theme: {
    /**
     * Track & field inspired color palette — athletic, energetic, clean.
     */
    primary: "#DC2F2F",
    secondary: "#1B6B93",
    background: "#FFFBF7",
    surface: "#F3EFE9",
    textDark: "#292524",
    fontHeading: "'Nunito', sans-serif",
    fontBody: "'Quicksand', sans-serif",
  },

  contact: {
    /** Contact email shown on /contact and in legal pages. */
    email: "hello@sprintergame.xyz",
  },

  legal: {
    /** Last updated date for Privacy / Terms pages. */
    lastUpdated: "2026-07-09",
  },

  ads: {
    /** Google AdSense publisher client ID, e.g. "ca-pub-4183802444188513". */
    clientId: adsenseClientId,
    /**
     * Automatically enabled when NEXT_PUBLIC_ADSENSE_CLIENT_ID is set.
     * When true, the AdSense script loads globally, and ad slots appear.
     */
    enabled: !!adsenseClientId,
  },

  analytics: {
    /** Google Analytics 4 measurement ID, e.g. G-XXXXXXXX. Leave empty to skip GA. */
    gaId,
    /** Google Search Console verification code. Leave empty to skip. */
    gscVerification: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
