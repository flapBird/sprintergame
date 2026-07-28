import GameEmbed from "./GameEmbed";

export default function Hero() {
  return (
    <section
      id="play"
      aria-label="Play Sprinter Game"
      className="hero-gradient relative overflow-hidden px-4 pb-9 pt-6 sm:pb-12 sm:pt-8"
    >
      <div className="relative z-10 mx-auto max-w-5xl">
        <GameEmbed />
        <p className="mt-4 text-center text-sm leading-6 text-text-dark/55 sm:hidden">
          Sprinter works best with a physical keyboard. On a phone or tablet, connect a keyboard before starting.
        </p>
      </div>
    </section>
  );
}
