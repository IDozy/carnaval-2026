import SiteNav from "@/src/components/SiteNav";
import Hero from "@/src/components/Hero";
import CategoryCards from "@/src/components/CategoryCards";
import CoplaFeature from "@/src/components/CoplaFeature";

export default function HomePage() {
  return (
    <div>
      <SiteNav />
      <Hero />
      <CategoryCards />
      <CoplaFeature />

      <footer className="border-t border-white/10 py-10">
        <div className="container text-sm text-zinc-400">
          © {new Date().getFullYear()} Carnavalero · Cajamarca → Perú
        </div>
      </footer>
    </div>
  );
}
