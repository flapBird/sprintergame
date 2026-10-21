import Link from "next/link";
import Hero from "@/components/Hero";
import SidebarLayout from "@/components/SidebarLayout";
import SchemaMarkup from "@/components/SchemaMarkup";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";

export const metadata = buildMetadata({
  title: "Sprinter Game Unblocked – What It Means and How to Play",
  description:
    "Looking for Sprinter Game unblocked? Learn what “unblocked” really means, why the game may not load at school or work, and how to play it legitimately.",
  path: "/sprinter-game-unblocked",
});

const faqs = [
  {
    question: "Is Sprinter Game unblocked?",
    answer:
      "There is no single yes or no answer. SprinterGame.xyz is a normal public website that needs no login, but whether it opens depends on the network you are using. Schools and workplaces can block any game site, and this site does not offer a proxy, mirror, or other way around those filters.",
  },
  {
    question: "Can I play Sprinter Game on a school Chromebook?",
    answer:
      "That depends on how the Chromebook is managed. If your school allows the site, the game runs in Chrome like any other web page. If the device or network blocks it, the restriction is set by your school and should be respected. Playing on a personal device is the reliable option.",
  },
  {
    question: "What should I do if the game is blocked on my network?",
    answer:
      "Check whether the page itself loads or only the game area stays blank. If the whole site is blocked, the filter is doing its job and there is no legitimate workaround from our side. If the page loads but the game does not, try a current version of Chrome, Edge, Firefox, or Safari and make sure JavaScript is enabled.",
  },
  {
    question: "Do I need Flash to play Sprinter Game?",
    answer:
      "No. Adobe Flash is no longer supported in browsers. This site runs the original game through Ruffle, an open-source Flash emulator, so you do not need to install a plugin or download anything.",
  },
  {
    question: "Does Sprinter Game work on a phone or tablet?",
    answer:
      "The game is built around two keyboard keys, so a physical keyboard gives the best experience. This site adds on-screen Left and Right buttons for touch devices, but the timing is easier to control with a real keyboard.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Sprinter Game",
          item: `${siteConfig.domain}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Sprinter Game Unblocked",
          item: `${siteConfig.domain}/sprinter-game-unblocked`,
        },
      ],
    },
  ],
};

export default function SprinterGameUnblockedPage() {
  return (
    <>
      <SchemaMarkup jsonLd={faqJsonLd} />
      <Hero />

      <SidebarLayout>
        <article className="space-y-14">
          <header>
            <nav aria-label="Breadcrumb" className="mb-5 text-sm text-text-dark/55">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="rounded font-medium hover:text-primary">
                    Sprinter Game
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="font-semibold text-text-dark/75">Unblocked</li>
              </ol>
            </nav>

            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-primary sm:text-sm">
              Access guide
            </p>
            <h1 className="font-heading text-4xl font-black tracking-[-0.035em] text-text-dark sm:text-5xl">
              Sprinter Game Unblocked
            </h1>
            <p className="mt-5 text-[1.02rem] leading-8 text-text-dark/75">
              If you searched for “Sprinter Game unblocked”, the honest answer comes first: SprinterGame.xyz is an
              ordinary public website. It does not provide a proxy, VPN, mirror, or any other tool for getting around a
              school or workplace filter. What this page can do is explain what “unblocked” usually means for this game,
              why it may fail to load, and how to play it where access is allowed.
            </p>
          </header>

          <section aria-labelledby="what-unblocked-means">
            <h2
              id="what-unblocked-means"
              className="font-heading text-2xl font-black tracking-tight text-text-dark sm:text-3xl"
            >
              What “unblocked” means for Sprinter Game
            </h2>
            <div className="mt-4 space-y-4 text-[1.02rem] leading-8 text-text-dark/75">
              <p>
                “Unblocked games” is a label used by many game portals for any browser game that can be opened without
                an install or an account. The label is a description, not a guarantee. It does not change the rules on a
                school or company network, and it does not make a site immune to filtering.
              </p>
              <p>
                Sprinter itself is a small 100-meter racing game created by Gamedesign.jp in 2006. It was built in Flash,
                which modern browsers no longer run. This site plays the original file through Ruffle, an open-source
                Flash emulator, so the game can load in a current browser without a plugin.
              </p>
            </div>
          </section>

          <section aria-labelledby="why-not-loading">
            <h2
              id="why-not-loading"
              className="font-heading text-2xl font-black tracking-tight text-text-dark sm:text-3xl"
            >
              Why the game may not load
            </h2>
            <p className="mt-4 text-[1.02rem] leading-8 text-text-dark/75">
              When someone says Sprinter Game is blocked, one of three things is usually happening:
            </p>
            <ul className="mt-5 space-y-4">
              <li className="rounded-2xl border border-black/[0.06] bg-surface p-5">
                <h3 className="font-heading text-lg font-extrabold text-text-dark">The network blocks the site</h3>
                <p className="mt-2 text-sm leading-7 text-text-dark/70">
                  A school, employer, or public Wi-Fi provider can block a domain before any part of the page appears. If
                  that is the case, the block is a deliberate policy decision by the network administrator.
                </p>
              </li>
              <li className="rounded-2xl border border-black/[0.06] bg-surface p-5">
                <h3 className="font-heading text-lg font-extrabold text-text-dark">The browser cannot run the emulator</h3>
                <p className="mt-2 text-sm leading-7 text-text-dark/70">
                  Ruffle needs JavaScript and WebAssembly. Very old browsers, script blockers, or locked-down browser
                  settings can stop the game from starting even when the page itself loads.
                </p>
              </li>
              <li className="rounded-2xl border border-black/[0.06] bg-surface p-5">
                <h3 className="font-heading text-lg font-extrabold text-text-dark">The keyboard cannot reach the game</h3>
                <p className="mt-2 text-sm leading-7 text-text-dark/70">
                  A blank or frozen game is sometimes just a focus problem. Click once inside the game area before using
                  the arrow keys, and make sure a physical keyboard is connected on a tablet or Chromebook.
                </p>
              </li>
            </ul>
          </section>

          <section aria-labelledby="school-chromebook">
            <h2
              id="school-chromebook"
              className="font-heading text-2xl font-black tracking-tight text-text-dark sm:text-3xl"
            >
              Playing on a school Chromebook
            </h2>
            <div className="mt-4 space-y-4 text-[1.02rem] leading-8 text-text-dark/75">
              <p>
                A school Chromebook is usually managed by the school district. That means the device may block game
                domains, restrict what can be installed, or enforce rules that follow the device onto any network. If
                Sprinter Game will not open there, the limitation is part of the school’s setup, and this site cannot
                and will not offer a way around it.
              </p>
              <p>
                If the game is allowed, it runs in Chrome with no installation. The original controls are the Left and
                Right Arrow keys; on a touchscreen, use the buttons below the game instead. The page is best played on a
                personal computer or a personal phone where you control the settings.
              </p>
            </div>
          </section>

          <section aria-labelledby="how-to-play-unblocked">
            <h2
              id="how-to-play-unblocked"
              className="font-heading text-2xl font-black tracking-tight text-text-dark sm:text-3xl"
            >
              How to play once the game loads
            </h2>
            <ol className="mt-5 grid gap-4 sm:grid-cols-3">
              <li className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-sm">
                <span className="font-heading text-sm font-black text-primary">01</span>
                <h3 className="mt-3 font-heading text-lg font-extrabold text-text-dark">Start the game</h3>
                <p className="mt-2 text-sm leading-6 text-text-dark/70">
                  Press Play Now, then click inside the game area so it receives keyboard input.
                </p>
              </li>
              <li className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-sm">
                <span className="font-heading text-sm font-black text-primary">02</span>
                <h3 className="mt-3 font-heading text-lg font-extrabold text-text-dark">Alternate the arrows</h3>
                <p className="mt-2 text-sm leading-6 text-text-dark/70">
                  Press Left and Right in turn. Pressing one key repeatedly, or both at once, will not build speed.
                </p>
              </li>
              <li className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-sm">
                <span className="font-heading text-sm font-black text-primary">03</span>
                <h3 className="mt-3 font-heading text-lg font-extrabold text-text-dark">Hold the rhythm</h3>
                <p className="mt-2 text-sm leading-6 text-text-dark/70">
                  An even cadence beats frantic mashing. Keep the pattern steady through the finish line.
                </p>
              </li>
            </ol>
            <p className="mt-5 text-[1.02rem] leading-8 text-text-dark/75">
              For a fuller explanation, see the{" "}
              <Link href="/#how-to-play" className="font-semibold text-primary underline underline-offset-2">
                Sprinter Game controls guide
              </Link>{" "}
              on the homepage.
            </p>
          </section>

          <section aria-labelledby="free-and-safe">
            <h2
              id="free-and-safe"
              className="font-heading text-2xl font-black tracking-tight text-text-dark sm:text-3xl"
            >
              Is it free, and what should I know?
            </h2>
            <div className="mt-4 space-y-4 text-[1.02rem] leading-8 text-text-dark/75">
              <p>
                Sprinter Game is free to play here. There is no account, no download, and no plugin. The game file is
                loaded from a public CDN and rendered locally by Ruffle, and the site shows advertising to cover hosting
                costs.
              </p>
              <p>
                The game and its artwork belong to Gamedesign.jp. SprinterGame.xyz is an independent fan site and is not
                affiliated with the original developer. If you enjoy the game, the original release is still the best
                reference for how it was meant to look and feel.
              </p>
            </div>
          </section>

          <section id="faq" aria-labelledby="faq-title" className="scroll-mt-24">
            <h2
              id="faq-title"
              className="font-heading text-2xl font-black tracking-tight text-text-dark sm:text-3xl"
            >
              Sprinter Game unblocked FAQ
            </h2>
            <div className="mt-6 space-y-3">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-black/[0.06] bg-surface px-5 py-4 open:bg-white open:shadow-sm"
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading font-extrabold text-text-dark">
                    <span>{faq.question}</span>
                    <span aria-hidden="true" className="text-xl text-primary transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-text-dark/70">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <footer className="border-t border-black/[0.07] pt-8">
            <p className="text-[1.02rem] leading-8 text-text-dark/75">
              Ready to race?{" "}
              <Link href="/#play" className="font-semibold text-primary underline underline-offset-2">
                Play Sprinter Game
              </Link>{" "}
              on the homepage, or read{" "}
              <Link href="/about" className="font-semibold text-primary underline underline-offset-2">
                about this site and how the game is maintained
              </Link>
              .
            </p>
          </footer>
        </article>
      </SidebarLayout>
    </>
  );
}
