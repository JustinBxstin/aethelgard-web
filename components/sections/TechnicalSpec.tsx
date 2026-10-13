"use client";

import { MotionDiv } from "../ui/MotionDiv";
import { cn } from "../ui/MotionDiv";

const SPECS = [
  { label: 'Sustain', value: '12 Hours', reason: 'High molecular weight resins ensure enduring presence.' },
  { label: 'Diffusion', value: 'Radius 4m', reason: 'Architectural projection optimized for concrete volumes.' },
  { label: 'Origin', value: 'Sourced', reason: 'Ethically harvested cedar from the Nordic highlands.' },
  { label: 'Purity', value: '99.8%', reason: 'Triple-distilled for absolute olfactory clarity.' },
  { label: 'Complexity', value: '14 Notes', reason: 'Precise balancing of volatile and heavy molecules.' },
  { label: 'Impact', value: 'Structural', reason: 'Designed to alter the perceived volume of a room.' },
];

export default function TechnicalSpec() {
  return (
    <section className="py-32 px-6 bg-obsidian border-t border-zinc">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="text-copper-oxide font-mono text-xs uppercase tracking-[0.2em] font-bold">
            Technical Specifications
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc border border-zinc overflow-hidden rounded-luxury">
          {SPECS.map((spec, i) => (
            <MotionDiv
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-obsidian p-12 flex flex-col gap-4 group hover:bg-zinc/30 transition-colors"
            >
              <span className="text-copper-oxide font-mono text-[10px] uppercase tracking-widest">
                {spec.label}
              </span>
              <div className="text-4xl md:text-6xl font-display font-bold text-alabaster leading-none">
                {spec.value}
              </div>
              <p className="text-alabaster/40 font-body text-sm max-w-xs leading-relaxed">
                {spec.reason}
              </p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
