import { buildMetadata, buildVideoGameJsonLd } from "@/lib/seo";
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
        {/* What is Sprinter? */}
        <section className="space-y-12">
          <div>
            <h2 className="font-heading font-bold text-2xl text-text-dark mb-3">
              What is Sprinter?
            </h2>
            <p className="text-text-dark/70 leading-relaxed mb-4">
              Sprinter is a classic 100-meter dash racing game that first appeared back in 2006 and has stood the test of time.
              Created by Japanese indie developer Gamedesign.jp, this deceptively simple Flash-era gem has captivated millions
              of players with its addictive, rhythm-driven gameplay. Don't let the straightforward premise fool you — behind those
              stick-figure sprinters lies one of the most satisfying runner games ever made.
            </p>
            <p className="text-text-dark/70 leading-relaxed mb-4">
              At its core, Sprinter is a game about momentum. You line up on the track alongside seven other runners, the starting
              gun fires, and from that moment everything depends on how fast and how steadily you can pump those arrow keys.
              Each race is a 100-meter sprint — short, intense, and over in about 10 to 15 seconds. Win, and you advance to
              the next heat with faster opponents. Lose, and you try again. It's the kind of game you sit down to play for five
              minutes and suddenly realize an hour has slipped by.
            </p>
            {/* Image placeholder: game screenshot / track scene */}
            <div className="my-6 rounded-lg bg-surface border border-gray-200 aspect-video flex items-center justify-center">
              <p className="text-text-dark/30 text-sm font-medium">[Image: Sprinter game screenshot — runners on the track]</p>
            </div>
            <p className="text-text-dark/70 leading-relaxed">
              What makes Sprinter special isn't complexity — it's feel. The way your character builds speed as you find the right
              tapping rhythm, the split-second decisions when your timing slips, the genuine rush of surging past an opponent at
              the last moment. Each level introduces a new track, new competitors, and its own funky background track that somehow
              makes you tap faster. No installs, no sign-ups, no tutorials — just you, the starting blocks, and 100 meters of pure
              sprinting action.
            </p>
          </div>

          {/* How to Play */}
          <div>
            <h2 className="font-heading font-bold text-2xl text-text-dark mb-3">
              How to Play Sprinter
            </h2>
            <p className="text-text-dark/70 leading-relaxed mb-4">
              The controls couldn't be simpler: tap your keyboard's <strong>Left Arrow (←)</strong> and <strong>Right Arrow (→)</strong>{' '}
              alternately, as fast and as evenly as you can. Think of it like drumming on your desk — left, right, left, right — the
              faster and more consistent your rhythm, the faster your sprinter tears down the track.
            </p>
            {/* Image placeholder: controls diagram */}
            <div className="my-6 rounded-lg bg-surface border border-gray-200 aspect-[3/1] flex items-center justify-center">
              <p className="text-text-dark/30 text-sm font-medium">[Image: Keyboard diagram showing Left Arrow and Right Arrow keys]</p>
            </div>
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
              start sprinting. Whether you're on a quick break or settling in for a longer session, Sprinter delivers instant,
              frictionless fun.
            </p>
          </div>

          {/* What Makes It Great */}
          <div>
            <h2 className="font-heading font-bold text-2xl text-text-dark mb-3">
              What Makes Sprinter So Addictive
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
                  Released in 2006 and still going strong with a 8.9/10 community rating, Sprinter proves that great game design
                  doesn't age. It's as fun today as it was the day it launched — a true classic of the casual gaming world.
                </p>
              </div>
            </div>
            {/* Image placeholder: game feature showcase */}
            <div className="rounded-lg bg-surface border border-gray-200 aspect-[2/1] flex items-center justify-center">
              <p className="text-text-dark/30 text-sm font-medium">[Image: Sprinter gameplay collage — multiple race levels]</p>
            </div>
          </div>
        </section>

        {/* Bottom banner ad */}
        <AdSlot type="banner" className="my-8" />
      </SidebarLayout>
    </>
  );
}
