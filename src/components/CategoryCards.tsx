import Image from "next/image";
import Link from "next/link";

const CATS = [
    { name: "Amor", img: "/img/cat-amor.png", q: "amor", emoji: "💘", color: "rgb(239,68,68)" },
    { name: "Picardía", img: "/img/cat-picardia.png", q: "picardia", emoji: "🔥", color: "rgb(251,191,36)" },
    { name: "Yunza", img: "/img/cat-yunza.png", q: "yunza", emoji: "🌳", color: "rgb(34,197,94)" },
    { name: "Tradición", img: "/img/cat-tradicion.png", q: "tradicion", emoji: "🏵️", color: "rgb(101,3,84)" },
    { name: "Comparsas", img: "/img/cat-comparsas.png", q: "comparsas", emoji: "🎭", color: "rgb(59,130,246)" },
    { name: "Regional", img: "/img/cat-regional.png", q: "regional", emoji: "📍", color: "rgb(24,24,27)" },
];

export default function CategoryCards() {
    return (
        <section className="container py-10">
            <div className="flex items-end justify-between gap-4">
                <div>
                    <h2 className="text-xl font-extrabold text-zinc-900">Explora por temáticas</h2>
                    <p className="mt-1 text-sm text-zinc-700">Entrar con una imagen cambia todo.</p>
                </div>
                <Link href="/explorar" className="text-sm font-medium text-zinc-800 hover:underline">
                    Ver todo →
                </Link>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {CATS.map((c) => (
                    <Link
                        key={c.name}
                        href={`/explorar?tag=${encodeURIComponent(c.q)}`}
                        className="card group relative h-44 overflow-hidden"
                    >
                        {/* Fondo imagen */}
                        <Image
                            src={c.img}
                            alt={c.name}
                            fill
                            className="object-cover opacity-95 transition-transform duration-300 group-hover:scale-[1.04]"
                        />

                        {/* Overlay suave */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                        {/* Sticker/emoji arriba (look app) */}
                        <div className="absolute left-4 top-4">
                            <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/20 bg-white/15 text-lg text-white backdrop-blur">
                                {c.emoji}
                            </div>
                        </div>

                        {/* Texto + barra de color (opción 3) */}
                        <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-end justify-between gap-3">
                                <div>
                                    <div className="text-lg font-black text-white drop-shadow-sm">{c.name}</div>
                                    <div className="text-xs font-medium text-white/90">Ver coplas →</div>
                                </div>

                                {/* mini barra de color a la derecha */}
                                <div className="hidden sm:block h-8 w-2 rounded-full bg-white/25 overflow-hidden">
                                    <div className="h-full w-full" style={{ background: c.color }} />
                                </div>
                            </div>


                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
