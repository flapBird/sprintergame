"use client";

import { useEffect } from "react";

const AD_SCRIPT_SRC = "https://bauval.org/21/129b24b31a4f18da044cca6cad201648";
const AD_CONTAINER_ID = "container-129b24b31a4f18da044cca6cad201648";

interface AdsterraNativeProps {
  className?: string;
}

export default function AdsterraNative({ className = "" }: AdsterraNativeProps) {
  // Adsterra fills the container with this fixed id, so use one instance per page.
  // Injecting via effect (instead of next/script) makes it re-run on client-side navigation.
  useEffect(() => {
    const script = document.createElement("script");
    script.src = AD_SCRIPT_SRC;
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div
      className={`mx-auto w-full max-w-[728px] ${className}`.trim()}
      role="complementary"
      aria-label="Advertisement"
    >
      <div id={AD_CONTAINER_ID} />
    </div>
  );
}
