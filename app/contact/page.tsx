import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";

export const metadata = buildMetadata({ title: "Contact", path: "/contact" });

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-dark mb-4">
        Contact Us
      </h1>
      <p className="text-text-dark/70 leading-relaxed mb-8">
        Have questions about Sprinter Game, found a bug, or want to get in touch? Drop us a line — we read every message.
      </p>

      {/* Email contact — will be replaced with a form later */}
      <div className="bg-surface rounded-xl p-6 border border-gray-100">
        <p className="text-sm text-text-dark/50 mb-1">Email us at:</p>
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="text-primary font-medium text-lg hover:underline"
        >
          {siteConfig.contact.email}
        </a>
      </div>

      <p className="mt-6 text-sm text-text-dark/40">
        We typically respond within 24 hours. For game-related issues, please include your browser and operating system details.
      </p>
    </div>
  );
}
