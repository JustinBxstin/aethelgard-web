"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

const LAYERS = [
  { title: 'THE ASCENT', sub: 'Initial contact. Top notes of citrus and ozone.', color: 'bg-zinc' },
  { title: 'THE HEART', sub: 'The structural core. Cedarwood and dry iris.', color: 'bg-obsidian' },
  { title: 'THE DEPTH', sub: 'The final anchor. Vetiver, musk, and ancient resin.', color: 'bg-zinc' },
  { title: 'THE VOID', sub: 'The lingering silence of an empty room.', color: 'bg-obsidian' },
];

export default function SpatialJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".journey-section");

      sections.forEach((section, i) => {
        if (i === sections.length - 1) return;

        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          endTrigger: sections[sections.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
        });

        gsap.to(section, {
          scale: 0.9,
          opacity: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: sections[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <div ref={containerRef} className="relative">
      {LAYERS.map((layer, i) => (
        <section
          key={i}
          className="journey-section sticky top-0 h-[100dvh] w-full flex items-center justify-start px-6 md:px-24"
        >
          <div className={`absolute inset-0 ${layer.color} -z-10`} />

          <div className="relative z-10 max-w-4xl">
            <div className="w-20 h-1 bg-copper-oxide mb-8" />
            <h2 className="text-6xl md:text-8xl font-display font-bold text-alabaster leading-none mb-6 uppercase">
              {layer.title}
            </h2>
            <p className="text-xl md:text-2xl text-alabaster/60 font-body max-w-xl leading-relaxed">
              {layer.sub}
            </p>
          </div>
        </section>
      ))}
    </div>
  );
}
