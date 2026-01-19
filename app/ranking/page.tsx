import SiteNav from "@/src/components/SiteNav";
import Image from "next/image";

export default function RankingPage() {
  return (
    <div>
      <SiteNav />
      <div className="container py-10">
        <div className="card relative overflow-hidden p-6">
          <div className="absolute inset-0 -z-10">
            <Image src="/img/banner-ranking.jpg" alt="Ranking" fill className="object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
          </div>
          <h1 className="text-2xl font-black">Ranking</h1>
          <p className="mt-2 text-sm text-zinc-300">Top semanal / mensual (con medallas).</p>
        </div>
      </div>
    </div>
  );
}
