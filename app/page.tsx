import { buildMetadata, buildVideoGameJsonLd } from "@/lib/seo";
import Image from "next/image";
import Hero from "@/components/Hero";
import SidebarLayout from "@/components/SidebarLayout";
import SchemaMarkup from "@/components/SchemaMarkup";
import AdSlot from "@/components/AdSlot";

export const metadata = buildMetadata({ path: "/" });

export default function HomePage() {
  return (
    <>
      <SchemaMarkup jsonLd={buildVideoGameJsonLd()} />
      <Hero />
      <SidebarLayout>
        {/* What is Sprinter Game? */}
        <section className="space-y-12">
          <div>
            <h2 className="font-heading font-bold text-2xl text-text-dark mb-3">
              What is Sprinter Game?
            </h2>
            <p className="text-text-dark/70 leading-relaxed mb-4">
              Sprinter Game is a classic 100-meter dash racing game that first appeared back in 2006 and has stood the test of time.
              Created by Japanese indie developer Gamedesign.jp, this deceptively simple Flash-era gem has captivated millions
              of players with its addictive, rhythm-driven gameplay. Don't let the straightforward premise fool you — behind those
              stick-figure sprinters lies one of the most satisfying runner games ever made.
            </p>
            <p className="text-text-dark/70 leading-relaxed mb-4">
              At its core, Sprinter Game is all about momentum. You line up on the track alongside seven other runners, the starting
              gun fires, and from that moment everything depends on how fast and how steadily you can pump those arrow keys.
              Each race is a 100-meter sprint — short, intense, and over in about 10 to 15 seconds. Win, and you advance to
              the next heat with faster opponents. Lose, and you try again. It's the kind of game you sit down to play for five
              minutes and suddenly realize an hour has slipped by.
            </p>
            {/* Game screenshot image */}
            <Image
              src="/sprintergame-dedc-1.png"
              alt="Sprinter game screenshot — runners racing on the track"
              width={800}
              height={450}
              className="my-6 rounded-lg w-full h-auto"
            />
            <p className="text-text-dark/70 leading-relaxed">
              What makes Sprinter Game special isn't complexity — it's feel. The way your character builds speed as you find the right
              tapping rhythm, the split-second decisions when your timing slips, the genuine rush of surging past an opponent at
              the last moment. Each level introduces a new track, new competitors, and its own funky background track that somehow
              makes you tap faster. No installs, no sign-ups, no tutorials — just you, the starting blocks, and 100 meters of pure
              sprinting action.
            </p>
          </div>

          {/* How to Play */}
          <div>
            <h2 className="font-heading font-bold text-2xl text-text-dark mb-3">
              How to Play Sprinter Game
            </h2>
            <p className="text-text-dark/70 leading-relaxed mb-4">
              The controls couldn't be simpler: tap your keyboard's <strong>Left Arrow (←)</strong> and <strong>Right Arrow (→)</strong>{' '}
              alternately, as fast and as evenly as you can. Think of it like drumming on your desk — left, right, left, right — the
              faster and more consistent your rhythm, the faster your sprinter tears down the track.
            </p>
            {/* Keyboard controls image */}
            <Image
              src="/sprinter-keyboard.svg"
              alt="Keyboard diagram showing Left Arrow and Right Arrow keys"
              width={800}
              height={267}
              className="my-6 rounded-lg w-full h-auto"
            />
            <p className="text-text-dark/70 leading-relaxed mb-4">
              A few things to keep in mind as you step onto the track:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-text-dark/70 leading-relaxed mb-4">
              <li><strong>Find your groove.</strong> The key to winning isn't just raw speed — it's consistency. If you get too excited
                and lose your rhythm, your sprinter will stumble and lose precious momentum. Stay calm and find a pace you can sustain.</li>
              <li><strong>React fast at the start.</strong> The race begins the moment the starting signal appears. Hesitate and you'll
                already be playing catch-up from lane one.</li>
              <li><strong>Opponents get tougher.</strong> Every race you win pushes you into a more competitive heat. By the later levels,
                you'll be facing sprinters who barely leave any room for error.</li>
              <li><strong>Click the game screen first.</strong> If the arrow keys don't seem to respond when the race starts, click
                anywhere on the game area with your mouse — this ensures the game window has keyboard focus.</li>
            </ul>
            <p className="text-text-dark/70 leading-relaxed">
              The game runs entirely in your browser — no downloads, no installations, no accounts required. Just open the page and
              start sprinting. Whether you're on a quick break or settling in for a longer session, Sprinter Game delivers instant,
              frictionless fun.
            </p>
          </div>

          {/* What Makes It Great */}
          <div>
            <h2 className="font-heading font-bold text-2xl text-text-dark mb-3">
              What Makes Sprinter Game So Addictive
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="bg-surface rounded-lg p-5">
                <h3 className="font-heading font-bold text-lg text-text-dark mb-2">Instantly Gratifying</h3>
                <p className="text-text-dark/70 text-sm leading-relaxed">
                  Each race lasts about 10–15 seconds. You win or you lose, and you're immediately back in for another go.
                  It's the perfect pick-up-and-play game — no loading screens, no cutscenes, just pure sprinting.
                </p>
              </div>
              <div className="bg-surface rounded-lg p-5">
                <h3 className="font-heading font-bold text-lg text-text-dark mb-2">Surprising Depth</h3>
                <p className="text-text-dark/70 text-sm leading-relaxed">
                  Beyond the simple controls lies a rhythm game in disguise. Mastering the tempo, recovering from stumbles, and
                  finding the optimal tapping cadence are skills that develop over dozens of races.
                </p>
              </div>
              <div className="bg-surface rounded-lg p-5">
                <h3 className="font-heading font-bold text-lg text-text-dark mb-2">Unforgettable Soundtrack</h3>
                <p className="text-text-dark/70 text-sm leading-relaxed">
                  Every level has its own funky, upbeat theme tune — a charming touch from Gamedesign.jp that gives each race
                  its own personality. The music is so catchy you might find yourself humming it long after you've stopped playing.
                </p>
              </div>
              <div className="bg-surface rounded-lg p-5">
                <h3 className="font-heading font-bold text-lg text-text-dark mb-2">Timeless Appeal</h3>
                <p className="text-text-dark/70 text-sm leading-relaxed">
                  Released in 2006 and still going strong with a 8.9/10 community rating, Sprinter Game proves that great game design
                  doesn't age. It's as fun today as it was the day it launched — a true classic of the casual gaming world.
                </p>
              </div>
            </div>
            {/* Gameplay collage image */}
            <Image
              src="/sprinter-collage.svg"
              alt="Sprinter gameplay collage — multiple race levels"
              width={800}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </section>

          {/* Frequently Asked Questions */}
          <div className="mt-14">
            <h2 className="font-heading font-bold text-2xl text-text-dark mb-3">
              FAQ
            </h2>
            <div className="space-y-4">
              <details className="group bg-surface rounded-xl p-4 cursor-pointer open:pb-4">
                <summary className="font-heading font-semibold text-text-dark list-none flex items-center justify-between gap-2">
                  <span>What is Sprinter Game and how do I play it?</span>
                  <svg className="w-5 h-5 text-text-dark/50 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <p className="mt-3 text-text-dark/70 leading-relaxed text-sm">
                  Sprinter Game is a 100-meter dash racing game originally released in 2006 by Gamedesign.jp. To play, simply tap your keyboard's Left Arrow (←) and Right Arrow (→) keys alternately — as fast and as evenly as you can. The better your rhythm, the faster your runner sprints down the track. Win races to advance through 12 increasingly difficult levels.
                </p>
              </details>

              <details className="group bg-surface rounded-xl p-4 cursor-pointer open:pb-4">
                <summary className="font-heading font-semibold text-text-dark list-none flex items-center justify-between gap-2">
                  <span>How do I control my runner? The arrow keys aren't working!</span>
                  <svg className="w-5 h-5 text-text-dark/50 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <p className="mt-3 text-text-dark/70 leading-relaxed text-sm">
                  First, click anywhere on the game area with your mouse — the Flash game needs keyboard focus to register your inputs. Once the game has focus, alternate tapping the Left (←) and Right (→) arrow keys. If you still have trouble, try clicking the game screen again or reloading the page.
                </p>
              </details>

              <details className="group bg-surface rounded-xl p-4 cursor-pointer open:pb-4">
                <summary className="font-heading font-semibold text-text-dark list-none flex items-center justify-between gap-2">
                  <span>Can I play Sprinter Game on my phone or tablet?</span>
                  <svg className="w-5 h-5 text-text-dark/50 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <p className="mt-3 text-text-dark/70 leading-relaxed text-sm">
                  Sprinter Game was designed for keyboard play, so it works best on a desktop or laptop computer. On mobile devices, the arrow key controls don't translate well to touch input. For the best experience, play on a device with a physical keyboard.
                </p>
              </details>

              <details className="group bg-surface rounded-xl p-4 cursor-pointer open:pb-4">
                <summary className="font-heading font-semibold text-text-dark list-none flex items-center justify-between gap-2">
                  <span>How many levels does Sprinter Game have?</span>
                  <svg className="w-5 h-5 text-text-dark/50 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <p className="mt-3 text-text-dark/70 leading-relaxed text-sm">
                  Sprinter Game has 12 levels in total. Each level features a different track with a unique background color and its own funky soundtrack. As you advance, the opponents get faster and more competitive, leaving less room for error. The game is short enough to finish in one sitting, but challenging enough to keep you coming back for more attempts.
                </p>
              </details>

              <details className="group bg-surface rounded-xl p-4 cursor-pointer open:pb-4">
                <summary className="font-heading font-semibold text-text-dark list-none flex items-center justify-between gap-2">
                  <span>Why does my runner stumble or slow down during the race?</span>
                  <svg className="w-5 h-5 text-text-dark/50 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <p className="mt-3 text-text-dark/70 leading-relaxed text-sm">
                  Your runner stumbles when you lose the alternating rhythm — for example, pressing the same key twice in a row, or tapping unevenly. The game rewards consistent, even-paced tapping rather than frantic button mashing. If you stumble, don't panic: recover your rhythm and you'll regain speed. Staying calm under pressure is a key part of mastering Sprinter Game.
                </p>
              </details>

              <details className="group bg-surface rounded-xl p-4 cursor-pointer open:pb-4">
                <summary className="font-heading font-semibold text-text-dark list-none flex items-center justify-between gap-2">
                  <span>Do I need to download anything to play Sprinter Game?</span>
                  <svg className="w-5 h-5 text-text-dark/50 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <p className="mt-3 text-text-dark/70 leading-relaxed text-sm">
                  No downloads or installations are required. The game runs entirely in your browser using Ruffle, a modern Flash emulator. No account, no sign-up, no plugins — just open the page and start playing. It works on all modern browsers including Chrome, Firefox, Safari, and Edge.
                </p>
              </details>

              <details className="group bg-surface rounded-xl p-4 cursor-pointer open:pb-4">
                <summary className="font-heading font-semibold text-text-dark list-none flex items-center justify-between gap-2">
                  <span>Can I save my progress in Sprinter Game?</span>
                  <svg className="w-5 h-5 text-text-dark/50 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <p className="mt-3 text-text-dark/70 leading-relaxed text-sm">
                  Sprinter Game uses the classic Flash save system (SharedObject), which may or may not persist in the Ruffle emulator depending on your browser settings. Progress saving is not guaranteed. But since each race is only about 10-15 seconds long, you can easily jump back to any level with a bit of practice.
                </p>
              </details>

              <details className="group bg-surface rounded-xl p-4 cursor-pointer open:pb-4">
                <summary className="font-heading font-semibold text-text-dark list-none flex items-center justify-between gap-2">
                  <span>Why does the game look different from when it was on Flash?</span>
                  <svg className="w-5 h-5 text-text-dark/50 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <p className="mt-3 text-text-dark/70 leading-relaxed text-sm">
                  Sprinter Game was originally built in Adobe Flash, which is no longer supported by modern browsers. We use Ruffle — an open-source Flash emulator — to run the game. Ruffle does an excellent job preserving the original experience, but you may notice very subtle differences in rendering, sound timing, or performance compared to the original Flash Player. The core gameplay, however, is exactly the same.
                </p>
              </details>
            </div>
          </div>


                {/* Bottom banner ad */}
        <AdSlot type="banner" className="my-8" />
      </SidebarLayout>
    </>
  );
}
