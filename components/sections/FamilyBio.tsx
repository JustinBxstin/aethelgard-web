"use client";

import { MotionDiv, cn } from "../ui/MotionDiv";

const FAMILY_MEMBERS = [
  {
    name: "Elias Thorne",
    role: "The Patriarch",
    bio: "A keeper of old maps and forgotten languages. Elias spent four decades cataloging the whispers of the northern coast, believing that every stone has a story if you listen long enough.",
    image: "/images/family/elias.jpg",
    note: "Still remembers the exact shade of the 1924 eclipse.",
    position: "left",
  },
  {
    name: "Clara Thorne",
    role: "The Archivist",
    bio: "With a penchant for ink-stained fingers and midnight tea, Clara transforms raw memory into curated history. Her archives are the heartbeat of the estate.",
    image: "/images/family/clara.jpg",
    note: "Her notebooks are written in three different ciphers.",
    position: "right",
  },
  {
    name: "Julian Thorne",
    role: "The Wanderer",
    bio: "The youngest of the line, Julian seeks the gaps between the maps. He returns every few years with artifacts that defy conventional physics.",
    image: "/images/family/julian.jpg",
    note: "Collected a piece of sea-glass that hums in C sharp.",
    position: "left",
  },
];

export default function FamilyBio() {
  return (
    <section className="relative py-24 px-6 md:px-24 bg-zinc overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-obsidian mb-4 tracking-tighter">
            Family Bio
          </h2>
          <div className="w-24 h-1 bg-obsidian/20 mx-auto rounded-full" />
        </div>

        <div className="space-y-32 md:space-y-48">
          {FAMILY_MEMBERS.map((member, i) => (
            <div
              key={i}
              className={cn(
                "flex flex-col md:flex-row items-center gap-12 md:gap-24",
                member.position === "right" ? "md:flex-row-reverse" : ""
              )}
            >
              <MotionDiv
                initial={{ opacity: 0, x: member.position === "left" ? -50 : 50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 120, damping: 15 }}
                className={cn(
                  "relative w-full md:w-1/2 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl",
                  "ring-8 ring-white/10"
                )}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />

                <div className={cn(
                  "absolute -bottom-4 -right-4 md:bottom-auto md:top-8 md:-right-8 bg-white p-4 shadow-lg rounded-lg rotate-3 max-w-[200px] hidden md:block",
                  "border border-zinc-200"
                )}>
                  <p className="font-handwriting text-obsidian text-sm leading-tight italic">
                    {member.note}
                  </p>
                </div>
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, x: member.position === "left" ? 50 : -50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.2 }}
                className="w-full md:w-1/2 space-y-6"
              >
                <div className="space-y-2">
                  <span className="text-sm uppercase tracking-widest text-obsidian/50 font-medium">
                    {member.role}
                  </span>
                  <h3 className="text-4xl md:text-6xl font-display font-bold text-obsidian leading-tight">
                    {member.name}
                  </h3>
                </div>
                <p className="text-lg md:text-xl text-obsidian/80 font-body leading-relaxed">
                  {member.bio}
                </p>
                <div className="pt-4">
                  <div className="w-12 h-px bg-obsidian/30" />
                </div>
              </MotionDiv>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
