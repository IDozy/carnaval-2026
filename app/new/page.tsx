import SiteNav from "@/src/components/SiteNav";

export default function NuevoPage() {
  return (
    <div>
      <SiteNav />
      <div className="container py-10">
        <div className="card p-6">
          <h1 className="text-2xl font-black">Nueva copla</h1>
          <p className="mt-2 text-sm text-zinc-300">Formulario con preview visual.</p>
        </div>
      </div>
    </div>
  );
}
