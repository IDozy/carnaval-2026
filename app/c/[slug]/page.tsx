import SiteNav from "@/src/components/SiteNav";

export default function CoplaDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <SiteNav />
      <div className="container py-10">
        <div className="card p-6">
          <div className="badge">🎶 Copla</div>
          <h1 className="mt-3 text-2xl font-black">{params.slug}</h1>
          <p className="mt-2 text-sm text-zinc-300">Acá irá el detalle con imagen y acciones.</p>
        </div>
      </div>
    </div>
  );
}
