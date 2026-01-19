"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type Props = {
  slot: string;              // data-ad-slot (número)
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  style?: React.CSSProperties;
};

export default function AdSenseUnit({
  slot,
  format = "auto",
  style = { display: "block" },
}: Props) {
  const pathname = usePathname();

  useEffect(() => {
    // Re-intenta renderizar el ad cuando cambias de ruta (App Router)
    try {
      // @ts-expect-error adsbygoogle is injected by AdSense script
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, [pathname]);

  return (
    <ins
      className="adsbygoogle"
      style={style}
      data-ad-client="ca-pub-XXXX"  // tu publisher id
      data-ad-slot={slot}          // tu ad unit slot
      data-ad-format={format}      // "auto" recomendado para responsive :contentReference[oaicite:1]{index=1}
      data-full-width-responsive="true"
    />
  );
}
