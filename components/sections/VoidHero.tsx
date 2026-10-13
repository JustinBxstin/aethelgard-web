"use client";

import { motion } from "motion/react";
import { MotionDiv } from "../ui/MotionDiv";
import { cn } from "../ui/MotionDiv";

export default function VoidHero() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-obsidian flex items-center">
      {/* Vibrant Gradient Mesh Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-copper-oxide/30 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-zinc/30 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-obsidian)_0%,_transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="relative w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <MotionDiv
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative"
            >
              <h1 className="text-7xl md:text-9xl font-display font-bold leading-none text-alabaster uppercase tracking-tighter">
                Living<br />
                <span className="text-copper-oxide italic">Atmosphere</span>
              </h1>

              {/* Floating Iridescent Atoms */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-zinc rounded-full blur-sm border border-alabaster/50"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                />
              ))}
            </MotionDiv>
          </div>

          <div className="lg:col-span-5 flex flex-col items-end text-right gap-6">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.2 }}
              className="max-w-md"
            >
              <p className="text-lg md:text-xl text-alabaster/80 leading-relaxed font-body font-medium">
                Fragrance as a living energy. High-saturation scent architecture that pulses with your space.
              </p>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.4 }}
            >
              <button className="px-10 py-5 bg-zinc text-obsidian font-bold uppercase tracking-widest text-sm rounded-full shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:scale-105 hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.5)] transition-all active:scale-95">
                Feel the Pulse
              </button>
            </MotionDiv>
          </div>
        </div>
      </div>

      {/* Floating "Aura" Asset (Replaces the Monolith) */}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-1/3 h-1/2 pointer-events-none">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-copper-oxide/20 blur-[100px] rounded-full animate-pulse" />
          <div className="absolute inset-0 bg-zinc/20 blur-[80px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </section>
  );
}
