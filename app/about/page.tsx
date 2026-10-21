import AdsterraNative from "@/components/AdsterraNative";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";

export const metadata = buildMetadata({
  title: "About Sprinter Game",
  description: "Learn about Sprinter, the 100-meter browser racing game created by Gamedesign.jp, and how this site keeps it playable with Ruffle.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-dark mb-8">
        About Sprinter Game
      </h1>
      <div className="space-y-10 text-text-dark/75 leading-8">
        <div>
          <h2 className="font-heading font-bold text-xl text-text-dark mb-3">The Story Behind Sprinter Game</h2>
          <p className="mb-4">
            Sprinter was created in 2006 by Gamedesign.jp. The game reduces a 100-meter race to two controls: the Left
            Arrow and Right Arrow keys. Alternating them moves the runner, while a missed sequence can break the rhythm
            and cost time.
          </p>
          <p className="mb-4">
            Races become harder as the opponents get faster. That gradual increase in difficulty is what gives the
            game staying power: the controls never change, but the timing has to become cleaner.
          </p>
          <p>
            Gamedesign.jp describes Sprinter as a 100-meter sprint simulation controlled with the arrow keys.
          </p>
        </div>

        <AdsterraNative />

        <div>
          <h2 className="font-heading font-bold text-xl text-text-dark mb-3">About This Site</h2>
          <p>
            SprinterGame.xyz is an independent fan site for playing and learning about Sprinter. It provides the game,
            a concise control guide, and troubleshooting information in one place.
          </p>
          <p className="mt-3">
            Modern browsers no longer run Flash directly, so the game is played through Ruffle, an open-source Flash
            emulator. Sprinter and its original assets remain the work of Gamedesign.jp.
          </p>
        </div>
      </div>
    </div>
  );
}
