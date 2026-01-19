import SiteNav from "@/src/components/SiteNav";
import Hero from "@/src/components/Hero";
import CategoryCards from "@/src/components/CategoryCards";
import CoplaFeature from "@/src/components/CoplaFeature";
import AdSenseCard from "@/src/components/AdSenseCard";
import HeroBelowRow from "@/src/components/HeroBelowRow";


export default function HomePage() {
  return (
    <div>
      <SiteNav />
      <Hero />
      <HeroBelowRow />
      <CategoryCards />
      <AdSenseCard variant="inline" slot="0987654321" />
      <CoplaFeature />



      <footer className="border-t border-white/10 py-10">
        <div className="container text-sm text-zinc-400">
          © {new Date().getFullYear()} Carnavalero · Cajamarca → Perú
        </div>
      </footer>
    </div>
  );
}
