"use client";

import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site.config";

export default function CanonicalLink() {
  const pathname = usePathname();
  const canonicalPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");

  return <link rel="canonical" href={`${siteConfig.domain}${canonicalPath}`} />;
}
