"use client";

import { motion } from "motion/react";
import { MotionDiv } from "../ui/MotionDiv";
import { cn } from "../ui/MotionDiv";

const NOTES = [
  {
    title: 'Core: Cedarwood',
    category: 'Foundation',
    description: 'The structural anchor of the scent profile, evoking raw concrete and ancient forests.',
    size: 'col-span-2 row-span-2',
    bg: 'bg-zinc'
  },
  {
    title: 'Top Notes',
    category: 'Atmosphere',
    description: 'Citrus and ozone. The first breath of a cold morning.',
    size: 'col-span-1 row-span-2',
    bg: 'bg-obsidian border border-zinc'
  },
  {
    title: 'Base Notes',
    category: 'Sustain',
    description: 'Vetiver and musk. The lingering shadow of a monolith.',
    size: 'col-span-1 row-span-1',
    bg: 'bg-zinc'
  },
  {
    title: 'Sensory Depth',
    category: 'Resonance',
    description: 'The interaction of fragrance with architectural surfaces.',
    size: 'col-span-1 row-span-1',
    bg: 'bg-obsidian border border-zinc'
  },
];

export default function OlfactoryMap() {
  return (
    <section className="py-32 px-6 bg-obsidian">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-copper-oxide font-mono text-xs uppercase tracking-[0.2em] font-bold">
            The Olfactory Map
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {NOTES.map((note, i) => (
            <MotionDiv
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "p-8 flex flex-col justify-between rounded-luxury transition-colors hover:border-copper-oxide/30 border border-transparent relative overflow-hidden",
                note.bg
              )}
            >
              {/* Hyper-Luxury Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-copper-oxide" />

              <div className="relative z-10">
                <span className="text-copper-oxide font-mono text-[10px] uppercase tracking-widest mb-4 block">
                  {note.category}
                </span>
                <h3 className="text-3xl md:text-5xl font-display font-bold text-alabaster leading-tight">
                  {note.title}
                </h3>
              </div>
              <p className="relative z-10 text-alabaster/60 font-body text-sm leading-relaxed max-w-xs">
                {note.description}
              </p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
