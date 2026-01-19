import Link from "next/link";

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur">  <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10">
            🎭
          </span>
          <div className="leading-tight">
            <div className="text-sm font-extrabold tracking-wide">CARNAVALERO</div>
            <div className="text-[11px] text-zinc-300">Cajamarca primero · Perú después</div>
          </div>
        </Link>

        <nav className="flex items-center gap-2">
          <Link href="/explorar" className="btn btn-ghost">Explorar</Link>
          <Link href="/ranking" className="btn btn-ghost">Ranking</Link>
          <Link href="/nuevo" className="btn btn-primary">+ Nueva copla</Link>
        </nav>
      </div>
    </header>
  );
}
