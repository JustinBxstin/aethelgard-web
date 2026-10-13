import FamilyHero from "@/components/sections/FamilyHero";
import ReactionGallery from "@/components/sections/ReactionGallery";
import FamilyBio from "@/components/sections/FamilyBio";
import ChannelStats from "@/components/sections/ChannelStats";

export default function Home() {
  return (
    <main className="relative w-full bg-obsidian">
      <div className="flex flex-col gap-24 pb-24">
        <FamilyHero />
        <FamilyBio />
        <ReactionGallery />
        <ChannelStats />
      </div>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-zinc/20 bg-obsidian">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-alabaster font-display font-bold text-2xl tracking-tighter">
            The GShotIt Family
          </div>
          <div className="flex gap-8 text-alabaster/60 font-mono text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-copper-oxide transition-colors">Family Values</a>
            <a href="#" className="hover:text-copper-oxide transition-colors">Privacy</a>
            <a href="#" className="hover:text-copper-oxide transition-colors">Contact</a>
          </div>
          <div className="text-alabaster/40 font-mono text-xs uppercase">
            © 2026 Built with love by the GShotIt Family
          </div>
        </div>
      </footer>
    </main>
  );
}
