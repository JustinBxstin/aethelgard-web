import VoidHero from "@/components/sections/VoidHero";
import OlfactoryMap from "@/components/sections/OlfactoryMap";
import SpatialJourney from "@/components/sections/SpatialJourney";
import TechnicalSpec from "@/components/sections/TechnicalSpec";

export default function Home() {
  return (
    <main className="relative w-full bg-obsidian">
      <VoidHero />
      <OlfactoryMap />
      <SpatialJourney />
      <TechnicalSpec />

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc bg-obsidian">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-alabaster font-display font-bold text-xl uppercase tracking-tighter">
            Aethelgard
          </div>
          <div className="flex gap-8 text-alabaster/40 font-mono text-[10px] uppercase tracking-widest">
            <a href="#" className="hover:text-copper-oxide transition-colors">Privacy</a>
            <a href="#" className="hover:text-copper-oxide transition-colors">Terms</a>
            <a href="#" className="hover:text-copper-oxide transition-colors">Archive</a>
          </div>
          <div className="text-alabaster/20 font-mono text-[10px] uppercase">
            © 2026 Olfactory Architecture
          </div>
        </div>
      </footer>
    </main>
  );
}
