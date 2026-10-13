"use client";

import { MotionDiv } from "../ui/MotionDiv";
import { cn } from "../ui/MotionDiv";

const REACTIONS = [
  {
    title: 'Visceral Shock',
    category: 'Primary',
    description: 'The immediate, breathless reaction to the scale of the monolith.',
    size: 'md:col-span-2 md:row-span-2',
    bg: 'bg-zinc text-obsidian',
    rotation: -2,
    sticker: 'High Impact'
  },
  {
    title: 'Quiet Awe',
    category: 'Atmospheric',
    description: 'A slow-burn realization of architectural intent.',
    size: 'md:col-span-1 md:row-span-1',
    bg: 'bg-copper-oxide text-obsidian',
    rotation: 3,
    sticker: 'Subtle'
  },
  {
    title: 'Spatial Vertigo',
    category: 'Kinetic',
    description: 'The feeling of gravity shifting within the inner sanctum.',
    size: 'md:col-span-1 md:row-span-2',
    bg: 'bg-obsidian text-zinc border border-zinc',
    rotation: -1,
    sticker: 'Disorienting'
  },
  {
    title: 'Tactile Memory',
    category: 'Sensory',
    description: 'The phantom sensation of cold stone against fingertips.',
    size: 'md:col-span-1 md:row-span-1',
    bg: 'bg-zinc text-obsidian',
    rotation: 2,
    sticker: 'Haptic'
  },
];

export default function ReactionGallery() {
  return (
    <section className="py-32 px-6 bg-obsidian overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 relative">
          <span className="text-copper-oxide font-mono text-xs uppercase tracking-[0.2em] font-bold relative z-10">
            The Reaction Gallery
          </span>
          <div className="absolute -top-2 -left-4 w-12 h-12 bg-zinc rounded-full blur-3xl opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[300px]">
          {REACTIONS.map((reaction, i) => (
            <MotionDiv
              key={i}
              initial={{ opacity: 0, y: 20, rotate: reaction.rotation }}
              whileInView={{ opacity: 1, y: 0, rotate: reaction.rotation }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: i * 0.1 }}
              className={cn(
                "group relative p-6 flex flex-col justify-between bg-white shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl",
                reaction.size,
                "border-[12px] border-white"
              )}
            >
              {/* Inner Content Area */}
              <div className={cn(
                "h-full w-full p-6 flex flex-col justify-between relative overflow-hidden",
                reaction.bg
              )}>
                <div className="relative z-10">
                  <span className="font-mono text-[10px] uppercase tracking-widest mb-3 block font-bold opacity-70">
                    {reaction.category}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-display font-bold leading-tight">
                    {reaction.title}
                  </h3>
                </div>

                <p className="relative z-10 font-body text-sm leading-relaxed font-medium max-w-xs">
                  {reaction.description}
                </p>

                {/* Sticker Badge */}
                <div className="absolute -right-2 -top-2 w-16 h-16 bg-cyber rounded-full flex items-center justify-center rotate-12 border-2 border-obsidian font-display font-bold text-obsidian text-[10px] uppercase text-center p-2 shadow-md group-hover:rotate-0 transition-transform duration-300">
                  {reaction.sticker}
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
