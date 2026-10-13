"use client";

import { motion } from "motion/react";
import { MotionDiv } from "../ui/MotionDiv";

export default function VoidHero() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-obsidian flex items-center">
      <div className="container mx-auto px-6 relative z-10">
        <div className="relative w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <MotionDiv
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bleed-left"
            >
              <h1 className="text-7xl md:text-9xl font-display font-bold leading-none text-alabaster uppercase">
                Sculpting<br />Air
              </h1>
            </MotionDiv>
          </div>

          <div className="lg:col-span-5 flex flex-col items-end text-right gap-6">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-md"
            >
              <p className="text-lg md:text-xl text-alabaster/60 leading-relaxed font-body">
                Architectural fragrance systems designed for the modern monolith. No fluff. Just structure.
              </p>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <button className="px-8 py-4 bg-copper-oxide text-obsidian font-bold uppercase tracking-widest text-xs rounded-full hover:scale-[1.02] transition-transform active:scale-[0.98]">
                Enter the Void
              </button>
            </MotionDiv>
          </div>
        </div>
      </div>

      {/* Hyper-Luxury Glass Monolith Asset */}
      <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none">
        <div className="absolute right-20 top-1/2 -translate-y-1/2 w-1/2 h-2/3 bg-zinc/40 backdrop-blur-3xl border border-alabaster/10 rounded-3xl shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-alabaster/20" />
          <div className="absolute inset-0 bg-gradient-to-br from-alabaster/5 to-transparent" />
        </div>
      </div>
    </section>
  );
}
