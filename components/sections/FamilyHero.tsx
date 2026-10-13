"use client";

import { motion } from "motion/react";
import { MotionDiv } from "../ui/MotionDiv";
import { cn } from "../ui/MotionDiv";
import { useEffect, useState } from "react";

export default function FamilyHero() {
  const [blobStyles, setBlobStyles] = useState<{width: string, height: string, top: string, left: string, duration: number}[]>([]);

  useEffect(() => {
    setBlobStyles([...Array(4)].map(() => ({
      width: `${60 + Math.random() * 20}%`,
      height: `${60 + Math.random() * 20}%`,
      top: `${Math.random() * 50}%`,
      left: `${Math.random() * 50}%`,
      duration: 10 + Math.random() * 10,
    })));
  }, []);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-alabaster flex items-center">
      {/* High-Energy Organic Background */}
      <div className="absolute inset-0 z-0">
        {/* Floating Organic Blobs */}
        {blobStyles.map((style, i) => (
          <motion.div
            key={i}
            className={cn(
              "absolute blur-[100px] rounded-full opacity-40",
              i % 2 === 0 ? "bg-copper-oxide" : "bg-zinc"
            )}
            style={{
              width: style.width,
              height: style.height,
              top: style.top,
              left: style.left,
            }}
            animate={{
              x: [0, 30, -30, 0],
              y: [0, -40, 40, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: style.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-alabaster/20 to-alabaster" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="relative w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6">
            <MotionDiv
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="relative"
            >
              <h1 className="text-6xl md:text-8xl font-display font-bold leading-tight text-obsidian uppercase tracking-tighter">
                Together <br />
                <span className="text-copper-oxide font-medium lowercase italic">is better.</span>
              </h1>

              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.2 }}
                className="mt-6 max-w-lg"
              >
                <p className="text-xl md:text-2xl text-obsidian/70 leading-relaxed font-body">
                  Capturing the chaos, the laughter, and the quiet moments that make a house a home.
                </p>
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.4 }}
                className="mt-10"
              >
                <button className="px-12 py-6 bg-obsidian text-alabaster font-bold uppercase tracking-widest text-sm rounded-2xl shadow-xl hover:scale-105 transition-transform active:scale-95">
                  Join the Family
                </button>
              </MotionDiv>
            </MotionDiv>
          </div>

          {/* Right Content: Latest Video Highlight */}
          <div className="lg:col-span-6 relative">
            <MotionDiv
              initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 150, damping: 18 }}
              className="relative z-10 group"
            >
              {/* Video Thumbnail Placeholder */}
              <div className="aspect-video bg-zinc rounded-3xl overflow-hidden shadow-2xl border-8 border-white relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-obsidian/40 to-transparent z-10 pointer-events-none" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-20 h-20 bg-copper-oxide rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                  >
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-alabaster border-b-[12px] border-b-transparent ml-1" />
                  </motion.div>
                </div>

                {/* Mock Content */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1511895497565-636597d87ec3?q=80&w=1000')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
              </div>

              {/* Floating Label */}
              <MotionDiv
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white px-4 py-2 rounded-full shadow-md border border-zinc/10 text-obsidian font-bold text-sm z-20"
              >
                Latest Video ✨
              </MotionDiv>
            </MotionDiv>

            {/* Decorative Floating Shapes */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <FloatingShape key={i} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingShape({ index }: { index: number }) {
  const [pos, setPos] = useState({ top: '50%', left: '50%' });

  useEffect(() => {
    setPos({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    });
  }, []);

  return (
    <motion.div
      className="absolute w-12 h-12 bg-copper-oxide/20 rounded-full blur-xl"
      style={{ top: pos.top, left: pos.left }}
      animate={{
        x: [0, 20, -20, 0],
        y: [0, -20, 20, 0],
      }}
      transition={{
        duration: 5 + Math.random() * 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
