import SiteNav from "@/src/components/SiteNav";

export default function ExplorarPage() {
  return (
    <div>
      <SiteNav />
      <div className="container py-10">
        <div className="card p-6">
          <h1 className="text-2xl font-black">Explorar</h1>
          <p className="mt-2 text-sm text-zinc-300">
            Aquí haremos el buscador + filtros + grid con portadas.
          </p>
        </div>
      </div>
    </div>
  );
}
