import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site.config";

const navigation = [
  { href: "/#play", label: "Play" },
  { href: "/#how-to-play", label: "How to play" },
  { href: "/#faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-[#fffbf7]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-2.5 rounded-md">
          <Image src="/favicon.svg" alt="" aria-hidden="true" width={32} height={32} className="h-8 w-8" />
          <span className="font-heading text-lg font-extrabold tracking-tight text-text-dark transition-colors group-hover:text-primary">
            {siteConfig.siteName}
          </span>
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-1 sm:gap-2">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-sm font-semibold text-text-dark/70 transition-colors hover:bg-white hover:text-text-dark ${
                item.label === "How to play" ? "hidden sm:inline-flex" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
