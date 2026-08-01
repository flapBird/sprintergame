import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";

const [emailUser, emailDomain] = siteConfig.contact.email.split("@");

export const metadata = buildMetadata({
  title: "Contact",
  description: "Contact SprinterGame.xyz to report a game issue, broken page, attribution concern, or other site feedback.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-dark mb-4">
        Contact Us
      </h1>
      <p className="text-text-dark/70 leading-relaxed mb-8">
        Found a game issue, broken page, or attribution problem? Send us the details by email.
      </p>

      {/* Email contact — will be replaced with a form later */}
      <div className="bg-surface rounded-xl p-6 border border-gray-100">
        <p className="text-sm text-text-dark/50 mb-1">Email us at:</p>
        <a
          href={`mailto:${emailUser}%40${emailDomain}`}
          className="text-primary font-medium text-lg hover:underline"
        >
          {emailUser}<span>@</span>{emailDomain}
        </a>
      </div>

      <p className="mt-6 text-sm leading-6 text-text-dark/65">
        For game-related issues, include your browser, operating system, and a short description of what happened.
      </p>
    </div>
  );
}
