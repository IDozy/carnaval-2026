"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type Props = {
  slot: string;
  variant?: "top" | "inline" | "side";
  label?: string;
};

export default function AdSenseCard({
  slot,
  variant = "inline",
  label = "Publicidad",
}: Props) {
  const pathname = usePathname();

  useEffect(() => {
    try {
      // @ts-expect-error
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, [pathname]);

  const sizes =
    variant === "top"
      ? "max-w-[820px]" // tipo banner
      : variant === "side"
      ? "max-w-[340px]" // tipo 300x250
      : "max-w-[520px]"; // inline pequeño

  return (
    <div className="container my-8">
      <div className={`mx-auto ${sizes}`}>
        <div className="card p-4">
          <div className="flex items-center justify-between">
            <span className="badge">{label}</span>
            <span className="text-xs font-semibold text-zinc-500">Ad</span>
          </div>

          <div className="mt-3 overflow-hidden rounded-2xl border border-zinc-200 bg-white">
            <ins
              className="adsbygoogle block"
              style={{ display: "block" }}
              data-ad-client="ca-pub-XXXX"   // <-- TU ca-pub
              data-ad-slot={slot}            // <-- TU slot
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
