import GameEmbed from "./GameEmbed";

export default function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 px-4">
      <div className="relative z-10 max-w-4xl mx-auto">
        <GameEmbed />
      </div>
    </section>
  );
}
