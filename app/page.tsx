import Image from "next/image";
import Link from "next/link";
import AdsterraNative from "@/components/AdsterraNative";
import Hero from "@/components/Hero";
import SidebarLayout from "@/components/SidebarLayout";
import SchemaMarkup from "@/components/SchemaMarkup";
import { buildMetadata, buildVideoGameJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({ path: "/" });

const playSteps = [
  {
    number: "01",
    title: "Click the game",
    text: "Start the game, then click inside the play area so it can receive keyboard input.",
  },
  {
    number: "02",
    title: "Wait for the signal",
    text: "Watch the starter. A clean reaction gives you a better chance in the opening meters.",
  },
  {
    number: "03",
    title: "Alternate the arrows",
    text: "Press Left and Right in sequence, or tap the on-screen buttons on a touch device. A steady rhythm beats random mashing.",
  },
];

const raceFeatures = [
  {
    title: "Quick races",
    text: "A 100-meter race takes only a few seconds, so a retry never feels like a chore.",
  },
  {
    title: "Tougher opponents",
    text: "Every win moves you to a faster field where missed inputs are harder to recover from.",
  },
  {
    title: "A rhythm to learn",
    text: "The controls are simple, but keeping an even left-right cadence takes practice.",
  },
];

export default function HomePage() {
  return (
    <>
      <SchemaMarkup jsonLd={buildVideoGameJsonLd()} />
      <Hero />

      <SidebarLayout>
        <div className="space-y-16 sm:space-y-20">
          <header className="border-b border-black/[0.07] pb-12 text-center sm:pb-16">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-primary sm:text-sm">
              The classic 100-meter dash
            </p>
            <h1 className="font-heading text-4xl font-black tracking-[-0.035em] text-text-dark sm:text-5xl">
              Play Sprinter Game Online
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-text-dark/70 sm:text-lg">
              Alternate the left and right arrow keys, keep your rhythm, and race to the finish. SprinterGame.xyz lets
              you play the 2006 Gamedesign.jp classic free in your browser, with no download or account.
            </p>
          </header>

          <section aria-labelledby="about-sprinter">
            <p className="mb-2 text-sm font-extrabold uppercase tracking-[0.16em] text-secondary">
              A Flash-era track classic
            </p>
            <h2 id="about-sprinter" className="font-heading text-3xl font-black tracking-tight text-text-dark sm:text-4xl">
              About Sprinter Game
            </h2>
            <div className="mt-5 space-y-4 text-[1.02rem] leading-8 text-text-dark/75">
              <p>
                Sprinter is a 100-meter racing game created by Gamedesign.jp. It first appeared in 2006, when browser games were
                built in Flash, and it still works because the whole idea is
                easy to understand: run faster by alternating the left and right arrow keys.
              </p>
              <p>
                The interesting part is the timing. Pressing quickly helps, but pressing the same key twice or losing your cadence can
                make the runner stumble. Each win leads to a harder race, so the game gradually turns two simple controls into a real
                test of concentration.
              </p>
            </div>

            <figure className="mt-8 overflow-hidden rounded-2xl border border-black/[0.07] bg-white p-2 shadow-sm">
              <Image
                src="/sprintergame-dedc-1.png"
                alt="Runners competing in a 100-meter race in Sprinter Game"
                width={1772}
                height={990}
                sizes="(max-width: 832px) 94vw, 800px"
                className="h-auto w-full rounded-xl"
              />
              <figcaption className="px-3 pb-2 pt-3 text-sm leading-6 text-text-dark/60">
                Find an even left-right rhythm and keep it through the finish.
              </figcaption>
            </figure>
          </section>

          <section id="how-to-play" aria-labelledby="how-to-play-title" className="scroll-mt-24">
            <p className="mb-2 text-sm font-extrabold uppercase tracking-[0.16em] text-primary">
              Controls
            </p>
            <h2 id="how-to-play-title" className="font-heading text-3xl font-black tracking-tight text-text-dark sm:text-4xl">
              How to Play Sprinter Game
            </h2>
            <p className="mt-4 max-w-2xl text-[1.02rem] leading-8 text-text-dark/75">
              You only need two keys. The sequence below is enough to start racing, even if you have never played before.
            </p>

            <ol className="mt-8 grid gap-4 sm:grid-cols-3">
              {playSteps.map((step) => (
                <li key={step.number} className="rounded-2xl border border-black/[0.06] bg-surface p-5">
                  <span className="font-heading text-sm font-black text-primary">{step.number}</span>
                  <h3 className="mt-3 font-heading text-lg font-extrabold text-text-dark">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-text-dark/70">{step.text}</p>
                </li>
              ))}
            </ol>

            <Image
              src="/sprinter-keyboard.svg"
              alt="Keyboard diagram highlighting the Left Arrow and Right Arrow keys"
              width={800}
              height={267}
              className="mt-8 h-auto w-full rounded-2xl border border-black/[0.06] bg-white"
            />

            <div className="mt-6 rounded-2xl border-l-4 border-secondary bg-secondary/[0.07] px-5 py-4">
              <p className="font-heading font-extrabold text-text-dark">If the arrow keys scroll the page</p>
              <p className="mt-1 text-sm leading-6 text-text-dark/70">
                Click once inside the game screen, then try the arrow keys again. The game needs keyboard focus before it can read
                your inputs.
              </p>
            </div>
          </section>

          <AdsterraNative />

          <section aria-labelledby="what-to-expect">
            <p className="mb-2 text-sm font-extrabold uppercase tracking-[0.16em] text-secondary">
              What to expect
            </p>
            <h2 id="what-to-expect" className="font-heading text-3xl font-black tracking-tight text-text-dark sm:text-4xl">
              Simple controls, close finishes
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {raceFeatures.map((feature) => (
                <article key={feature.title} className="rounded-2xl border border-black/[0.07] bg-white p-5 shadow-sm">
                  <h3 className="font-heading text-lg font-extrabold text-text-dark">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-text-dark/70">{feature.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="faq" aria-labelledby="faq-title" className="scroll-mt-24">
            <p className="mb-2 text-sm font-extrabold uppercase tracking-[0.16em] text-primary">
              Common questions
            </p>
            <h2 id="faq-title" className="font-heading text-3xl font-black tracking-tight text-text-dark sm:text-4xl">
              Sprinter Game FAQ
            </h2>
            <div className="mt-7 space-y-3">
              <details className="group rounded-2xl border border-black/[0.06] bg-surface px-5 py-4 open:bg-white open:shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading font-extrabold text-text-dark">
                  <span>What is Sprinter Game?</span>
                  <span aria-hidden="true" className="text-xl text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-text-dark/70">
                  Sprinter is a browser-based 100-meter racing game by Gamedesign.jp. You control the runner by alternating the Left
                  and Right Arrow keys and advance by winning each race.
                </p>
              </details>

              <details className="group rounded-2xl border border-black/[0.06] bg-surface px-5 py-4 open:bg-white open:shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading font-extrabold text-text-dark">
                  <span>Why are the arrow keys not working?</span>
                  <span aria-hidden="true" className="text-xl text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-text-dark/70">
                  Click inside the game first. This gives the game keyboard focus. Then alternate the Left and Right Arrow keys rather
                  than pressing both at the same time.
                </p>
              </details>

              <details className="group rounded-2xl border border-black/[0.06] bg-surface px-5 py-4 open:bg-white open:shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading font-extrabold text-text-dark">
                  <span>Can I play on a phone or tablet?</span>
                  <span aria-hidden="true" className="text-xl text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-text-dark/70">
                  The original game uses physical arrow keys, so a desktop or laptop gives the best timing. On a phone or
                  tablet, this site adds on-screen Left and Right buttons below the game; tap them alternately in the same
                  rhythm you would use on a keyboard.
                </p>
              </details>

              <details className="group rounded-2xl border border-black/[0.06] bg-surface px-5 py-4 open:bg-white open:shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading font-extrabold text-text-dark">
                  <span>How many levels are there?</span>
                  <span aria-hidden="true" className="text-xl text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-text-dark/70">
                  Sprinter Game has 12 levels. The opponents become faster as you progress, and later races leave less room for a
                  missed input or slow start.
                </p>
              </details>

              <details className="group rounded-2xl border border-black/[0.06] bg-surface px-5 py-4 open:bg-white open:shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading font-extrabold text-text-dark">
                  <span>Do I need to download Flash?</span>
                  <span aria-hidden="true" className="text-xl text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-text-dark/70">
                  No. The game runs in the browser through Ruffle, a Flash emulator. There is no account, browser plugin, or separate
                  installation.
                </p>
              </details>

              <details className="group rounded-2xl border border-black/[0.06] bg-surface px-5 py-4 open:bg-white open:shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading font-extrabold text-text-dark">
                  <span>Can I play Sprinter Game at school or work?</span>
                  <span aria-hidden="true" className="text-xl text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-text-dark/70">
                  That depends on the network you are using. Many schools and workplaces block game sites, and we cannot
                  promise a way around those restrictions. If the page loads but the game does not, our{" "}
                  <Link href="/sprinter-game-unblocked" className="font-semibold text-primary underline underline-offset-2">
                    Sprinter Game unblocked guide
                  </Link>{" "}
                  explains the likely causes and the honest options available.
                </p>
              </details>

              <details className="group rounded-2xl border border-black/[0.06] bg-surface px-5 py-4 open:bg-white open:shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading font-extrabold text-text-dark">
                  <span>Why does my runner stumble?</span>
                  <span aria-hidden="true" className="text-xl text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-text-dark/70">
                  A stumble usually means the left-right sequence was broken or the timing became uneven. Slow down briefly, recover
                  the alternating pattern, and then build speed again.
                </p>
              </details>
            </div>
          </section>

          <section aria-labelledby="about-site" className="border-t border-black/[0.07] pt-12">
            <p className="mb-2 text-sm font-extrabold uppercase tracking-[0.16em] text-secondary">
              Who runs this page
            </p>
            <h2 id="about-site" className="font-heading text-3xl font-black tracking-tight text-text-dark sm:text-4xl">
              About SprinterGame.xyz
            </h2>
            <div className="mt-5 space-y-4 text-[1.02rem] leading-8 text-text-dark/75">
              <p>
                SprinterGame.xyz is an independent fan site built around one game. It is not affiliated with
                Gamedesign.jp, and the game and its artwork remain their work. The site exists to keep this small
                Flash-era classic easy to find, easy to start, and easy to understand on a modern browser.
              </p>
              <p>
                You can read more{" "}
                <Link href="/about" className="font-semibold text-primary underline underline-offset-2">
                  about this site and how the game is maintained
                </Link>
                , or see the{" "}
                <Link href="/sprinter-game-unblocked" className="font-semibold text-primary underline underline-offset-2">
                  Sprinter Game unblocked guide
                </Link>{" "}
                if the game will not load on your school or work network.
              </p>
            </div>
          </section>
        </div>
      </SidebarLayout>
    </>
  );
}
