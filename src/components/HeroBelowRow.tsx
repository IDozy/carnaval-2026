"use client";

import Link from "next/link";
import AdSenseUnit from "@/src/components/AdSenseUnit";

const RECO = [
    { slug: "copla-1", tag: "🔥 Picardía", text: "Dicen que soy travieso… si te canto una coplita…" },
    { slug: "copla-2", tag: "🎭 Comparsa", text: "En Cajamarca yo canto… que el carnaval cuando llega…" },
    { slug: "copla-3", tag: "🌳 Yunza", text: "Baila, canta y no te asombres… que en febrero todo cambia…" },
];

export default function HeroBelowRow() {
    return (
        <section className="relative -mt-6 pb-10 overflow-hidden">
            {/* Fondo con imagen suave */}

            <div className="absolute inset-0 -z-10  from-amber-50 via-red-50 to-purple-50" />

            <div className="container">
                <div className="grid gap-4 grid-cols-1 lg:grid-cols-[1.4fr_.6fr] ">
                    {/* Recomendadas */}
                    <div className="card p-5 bg-white/75 ">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <div className="badge">⭐ Recomendadas de hoy</div>
                                <div className="mt-2 text-sm font-extrabold text-zinc-900">Para empezar a cantar</div>
                                <div className="text-sm text-zinc-700">Coplas cortitas (click para ver detalle).</div>
                            </div>
                            <div className="text-2xl">🎶</div>
                        </div>

                        <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                            {RECO.map((c) => (
                                <Link
                                    key={c.slug}
                                    href={`/c/${c.slug}`}
                                    className="rounded-2xl border border-zinc-200 bg-white/85 p-3  transition hover:bg-white"
                                >
                                    <div className="text-xs font-semibold text-zinc-700">{c.tag}</div>
                                    <div className="mt-1 line-clamp-2 text-sm font-semibold text-zinc-900">{c.text}</div>
                                </Link>
                            ))}
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                            <Link href="/explorar" className="text-sm font-medium text-zinc-800 hover:underline">
                                Ver más →
                            </Link>
                            <Link href="/ranking" className="text-sm font-medium text-zinc-800 hover:underline">
                                Ranking →
                            </Link>
                        </div>
                    </div>

                    {/* Anuncio pequeño */}
                    <div className="card p-5 bg-white/75 ">
                        <div className="flex items-center justify-between">
                            <span className="badge">Publicidad</span>
                            <span className="text-xs font-semibold text-zinc-500">Ad</span>
                        </div>

                        {/* Placeholder elegante + espacio fijo */}
                        <div className="mt-3 flex min-h-[250px] items-center justify-center overflow-hidden rounded-2xl border border-dashed border-zinc-300 bg-white/70">
                            <AdSenseUnit slot="1234567890" />
                        </div>

                        <div className="mt-2 text-center text-xs text-zinc-500">
                            Anuncio pequeño (tipo display).
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
