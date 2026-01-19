"use client";

import Link from "next/link";

const SPONSORED = [
  {
    slug: "copla-1",
    text: "En Cajamarca yo canto...\nque el carnaval cuando llega\nme alegra el corazón.",
    sponsor: "Bar El Carnaval",
    sponsorUrl: "https://facebook.com",
    tag: "🎭 Comparsa",
  },
  {
    slug: "copla-2",
    text: "Dicen que soy travieso...\nsi te canto una coplita\nte la canto con sazón.",
    sponsor: "Peña Don José",
    sponsorUrl: "https://instagram.com",
    tag: "🔥 Picardía",
  },
  {
    slug: "copla-3",
    text: "Baila, canta y no te asombres...\nque en febrero todo cambia\ny se alegran los corazones.",
    sponsor: "Eventos Yunza 2026",
    sponsorUrl: "#",
    tag: "🌳 Yunza",
  },
];

export default function CoplaFeature() {
  return (
    <section className="container pb-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-zinc-900">Coplas recomendadas</h2>
          <p className="mt-1 text-sm text-zinc-700">
            Selección especial para disfrutar el carnaval.
          </p>
        </div>

        <Link href="/anunciate" className="text-sm font-medium text-zinc-800 hover:underline">
          ¿Quieres aparecer aquí? →
        </Link>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        {SPONSORED.map((c) => (
          <Link
            key={c.slug}
            href={`/c/${c.slug}`}
            className="card relative p-5 transition hover:bg-zinc-50"
          >
            <div className="flex items-center justify-between">
              <span className="badge">⭐ Copla patrocinada</span>
              <span className="text-xs font-semibold text-zinc-600">{c.tag}</span>
            </div>

            <p className="mt-4 whitespace-pre-line text-[15px] leading-relaxed text-zinc-900">
              {c.text}
            </p>

            <div className="mt-5 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault(); // evita navegar a /c/...
                  e.stopPropagation();
                  if (c.sponsorUrl && c.sponsorUrl !== "#") {
                    window.open(c.sponsorUrl, "_blank", "noopener,noreferrer");
                  }
                }}
                className="text-sm font-semibold text-zinc-700 hover:underline"
                aria-label={`Abrir patrocinador ${c.sponsor}`}
              >
                Patrocinado por {c.sponsor}
              </button>

              <span className="text-sm font-medium text-zinc-700">Ver copla →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
