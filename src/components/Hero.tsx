import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative">
            {/* Imagen de fondo */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/img/hero-cajamarca.jpg"
                    alt="Carnaval Cajamarca"
                    fill
                    priority
                    className="object-cover"
                />
                {/* overlay más nítido + contraste */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/35 to-white/90" />
            </div>

            <div className="container py-14">
                <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr] lg:items-stretch">
                    {/* caja principal */}
                    <div className="card p-6">

                        <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-900 md:text-5xl">
                            El carnaval se canta.
                            <span className="block text-zinc-700">
                                Guarda coplas, crea cancioneros y comparte.
                            </span>
                        </h1>

                        <p className="mt-4 text-sm text-zinc-700">
                            Explora temáticas, arma tu cancionero y comparte links bonitos para WhatsApp/Facebook.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                            <Link href="/explorar" className="btn btn-primary">
                                Explorar coplas
                            </Link>
                            <Link href="/nuevo" className="btn btn-ghost">
                                Publicar una copla
                            </Link>
                        </div>

                        {/* barrita de color */}
                        <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-zinc-100">
                            <div
                                className="h-full w-full"
                                style={{
                                    background:
                                        "linear-gradient(90deg, rgb(239,68,68), rgb(251,191,36), rgb(34,197,94), rgb(59,130,246), rgb(101,3,84))",
                                }}
                            />
                        </div>
                    </div>

                    {/* panel lateral */}
                    {/* panel lateral: recomendadas */}
                    <div className="grid gap-4">
                        <div className="card p-5">
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <div className="badge">⭐ Recomendadas de hoy</div>
                                    <div className="mt-2 text-sm font-extrabold text-zinc-900">
                                        Para empezar a cantar
                                    </div>
                                    <div className="text-sm text-zinc-700">
                                        Tres coplas cortitas (click para ver detalle).
                                    </div>
                                </div>
                                <div className="text-2xl">🎶</div>
                            </div>

                            <div className="mt-4 grid gap-3">
                                <Link href="/c/copla-1" className="rounded-2xl border border-zinc-200 bg-white p-3 hover:bg-zinc-50">
                                    <div className="text-xs font-semibold text-zinc-700">🔥 Picardía</div>
                                    <div className="mt-1 line-clamp-2 text-sm font-semibold text-zinc-900">
                                        Dicen que soy travieso, pero es pura tradición…
                                    </div>
                                </Link>

                                <Link href="/c/copla-2" className="rounded-2xl border border-zinc-200 bg-white p-3 hover:bg-zinc-50">
                                    <div className="text-xs font-semibold text-zinc-700">🎭 Comparsa</div>
                                    <div className="mt-1 line-clamp-2 text-sm font-semibold text-zinc-900">
                                        En Cajamarca yo canto con alegría y con razón…
                                    </div>
                                </Link>

                                <Link href="/c/copla-3" className="rounded-2xl border border-zinc-200 bg-white p-3 hover:bg-zinc-50">
                                    <div className="text-xs font-semibold text-zinc-700">🌳 Yunza</div>
                                    <div className="mt-1 line-clamp-2 text-sm font-semibold text-zinc-900">
                                        Baila, canta y no te asombres… que en febrero todo cambia…
                                    </div>
                                </Link>
                            </div>

                            <div className="mt-4 flex items-center justify-between">

                                <Link href="/ranking" className="text-sm font-medium text-zinc-800 hover:underline">
                                    Ver ranking →
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}
