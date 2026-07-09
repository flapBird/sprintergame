import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";

export const metadata = buildMetadata({ title: "About Sprinter Game", path: "/about" });

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-dark mb-8">
        About Sprinter Game
      </h1>
      <div className="space-y-8 text-text-dark/80 leading-relaxed">
        <div>
          <h2 className="font-heading font-bold text-xl text-text-dark mb-3">The Story Behind Sprinter Game</h2>
          <p className="mb-4">
            Sprinter Game was created in 2006 by Gamedesign.jp, a Japanese indie game studio known for crafting clever,
            minimalist games that pack surprising depth into simple mechanics. During the golden age of Flash gaming,
            Sprinter Game stood out as one of those rare titles that anyone could pick up in seconds but few could truly
            master. It became a favorite on school computer labs, office break rooms, and anywhere with a browser and
            a keyboard.
          </p>
          <p className="mb-4">
            The game's premise is beautifully simple: a 100-meter dash where you alternate pressing the left and right
            arrow keys to build momentum. But beneath that simplicity is a finely-tuned rhythm game — one that rewards
            consistency over brute force and calm over panic. Each of the game's levels features its own funky
            background track, a signature Gamedesign.jp touch that gives every race its own personality.
          </p>
          <p>
            Nearly two decades after its original release, Sprinter Game continues to find new audiences. It has been
            preserved through the Ruffle Flash emulator, maintaining a strong community rating of 8.9 out of 10.
            Great game design doesn't age — a tight, well-crafted
            experience is timeless.
          </p>
        </div>

        <div>
          <h2 className="font-heading font-bold text-xl text-text-dark mb-3">About This Site</h2>
          <p>
            SprinterGame.xyz is a dedicated fan site built to make Sprinter Game accessible to everyone, instantly and for
            free. No downloads, no accounts, no ads getting in the way — just the game, right in your browser. We
            believe the best games deserve to be easy to find and even easier to play.
          </p>
          <p className="mt-3">
            The game is powered by Ruffle, the open-source Flash emulator that keeps classic web games alive for
            modern browsers. All credit for the game itself goes to
            Gamedesign.jp — we're just here to help you find it and play it without friction.
          </p>
        </div>
      </div>
    </div>
  );
}
