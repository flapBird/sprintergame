import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";

export const metadata = buildMetadata({
  title: "About SprinterGame.xyz – The 2006 Flash Classic",
  description:
    "SprinterGame.xyz is an independent fan site for Sprinter, the 2006 100-meter Flash game by Gamedesign.jp. Learn how the site runs it with Ruffle.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <h1 className="mb-8 font-heading text-3xl font-extrabold text-text-dark sm:text-4xl">
        About SprinterGame.xyz
      </h1>

      <div className="space-y-10 leading-8 text-text-dark/75">
        <p className="text-[1.05rem]">
          SprinterGame.xyz is an independent fan site for <strong className="text-text-dark">Sprinter</strong>, the
          100-meter browser racing game created by Gamedesign.jp in 2006. The site is not affiliated with the original
          developer. It exists for one reason: to keep a small, well-designed Flash-era game playable and understandable
          on today’s browsers.
        </p>

        <section>
          <h2 className="mb-3 font-heading text-xl font-bold text-text-dark">The game: two keys, twelve races</h2>
          <p className="mb-4">
            Sprinter reduces a 100-meter sprint to two controls. When the race begins, you alternate the Left Arrow and
            Right Arrow keys to build speed. Pressing the same key twice, or hitting both at once, breaks the rhythm and
            makes the runner stumble. There is no boost button, no inventory, and no tutorial beyond that.
          </p>
          <p className="mb-4">
            The simplicity is the point. Early opponents are forgiving, so a new player can win by moving quickly. Later
            races demand an even cadence and a clean reaction to the starting signal. Across twelve levels, the game
            slowly turns a two-key pattern into a test of concentration.
          </p>
          <p>
            Gamedesign.jp describes the original as a 100-meter sprint simulation controlled with the arrow keys. Its
            runner animation, short race length, and immediate restart button are why people still look it up nearly two
            decades later.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-heading text-xl font-bold text-text-dark">Why this site exists</h2>
          <p className="mb-4">
            Adobe stopped supporting Flash at the end of 2020, and browsers removed the plugin soon after. Many old game
            pages disappeared, stopped working, or turned into download traps with misleading buttons. Someone searching
            for Sprinter today deserves a page that simply loads the game, explains the controls, and does not pretend
            there is an installer to download.
          </p>
          <p>
            That is the entire scope of this site: a playable copy, a short control guide, honest troubleshooting, and a
            clear note about who made the game. There is no account system, no game library, and no attempt to pass the
            original work off as our own.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-heading text-xl font-bold text-text-dark">How the game runs today</h2>
          <p className="mb-4">
            Modern browsers cannot run SWF files natively, so the game is played through{" "}
            <strong className="text-text-dark">Ruffle</strong>, an open-source Flash emulator written in Rust and
            compiled to WebAssembly. Ruffle interprets the original file in the browser. Nothing is installed on your
            device, and no plugin is required.
          </p>
          <p>
            The game file is loaded from a public CDN, while Ruffle itself is loaded from a separate host. The original
            code, artwork, and sound remain the work of Gamedesign.jp; this site only provides a way to run that file and
            content around it. We do not alter the gameplay or claim ownership of the assets.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-heading text-xl font-bold text-text-dark">Maintenance and testing</h2>
          <p className="mb-4">
            The site is built for current versions of Chrome, Edge, Firefox, and Safari on desktop. Phones and tablets
            get on-screen Left and Right buttons, though a physical keyboard remains the most accurate way to play. If
            the game area stays blank, the troubleshooting notes on the{" "}
            <Link href="/#how-to-play" className="font-semibold text-primary underline underline-offset-2">
              how-to-play section
            </Link>{" "}
            cover the usual causes: keyboard focus, disabled JavaScript, or a network that blocks the game hosts.
          </p>
          <p>
            Hosting and domain costs are covered by advertising. Ads are kept outside the game itself, and the game area
            never opens pop-ups. If an ad interferes with the page, please report it to the address below.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-heading text-xl font-bold text-text-dark">Copyright and contact</h2>
          <p className="mb-4">
            Sprinter and all related artwork are the property of Gamedesign.jp. SprinterGame.xyz is an unofficial fan
            project and is not endorsed by the original developer. If you are the rights holder and want a change to how
            the game is presented here, contact us and we will respond.
          </p>
          <p>
            Questions, corrections, and takedown requests can be sent to{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="font-semibold text-primary underline underline-offset-2"
            >
              {siteConfig.contact.email}
            </a>
            . You can also read the{" "}
            <Link href="/privacy" className="font-semibold text-primary underline underline-offset-2">
              privacy policy
            </Link>{" "}
            to see what data the site and its advertising partners collect.
          </p>
        </section>

        <p className="border-t border-black/[0.07] pt-6 text-sm text-text-dark/55">
          Last reviewed: October 22, 2026.{" "}
          <Link href="/" className="font-semibold text-primary underline underline-offset-2">
            Back to the game
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
