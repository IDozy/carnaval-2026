"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  strength?: number; // 0.12–0.20 recomendado
};

export default function ParallaxBackground({
  src,
  strength = 0.18,
}: Props) {
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    let raf = 0;
    const MAX_OFFSET = 120; // límite de movimiento (px)

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const raw = window.scrollY * strength;
        const y = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, raw));
        el.style.transform = `translate3d(-50%, ${y}px, 0)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [strength]);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* Imagen SIEMPRE más grande que el viewport */}
      <div
        ref={imgRef}
        className="
          absolute left-1/2 top-[-50%]
          h-[200vh] w-full
          bg-cover bg-center
          will-change-transform
        "
        style={{ backgroundImage: `url(${src})` }}
      />

      {/* Overlay ligero para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/40" />
    </div>
  );
}
