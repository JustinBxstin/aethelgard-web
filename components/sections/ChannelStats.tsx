"use client";

import { MotionDiv } from "../ui/MotionDiv";
import { cn } from "../ui/MotionDiv";

const STATS = [
  { label: 'Subscribers', value: '1.2M', color: 'bg-copper-oxide' },
  { label: 'Total Views', value: '45M', color: 'bg-zinc' },
  { label: 'Avg. Watch Time', value: '8:12', color: 'bg-sunset' },
  { label: 'Engagement Rate', value: '12.4%', color: 'bg-copper-oxide' },
  { label: 'Global Reach', value: '142 Countries', color: 'bg-zinc' },
  { label: 'Active Community', value: '89K', color: 'bg-sunset' },
];

export default function ChannelStats() {
  return (
    <section className="py-32 px-6 bg-obsidian border-t-4 border-zinc">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="text-copper-oxide font-mono text-xs uppercase tracking-[0.2em] font-bold">
            Channel Stats
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {STATS.map((stat, i) => (
            <MotionDiv
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: Math.random() * 4 - 2 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 15,
                delay: i * 0.05
              }}
              className={cn(
                "px-8 py-4 rounded-full border-4 border-obsidian shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-default",
                "flex items-center gap-3 text-obsidian font-bold",
                stat.color
              )}
            >
              <span className="font-mono text-[10px] uppercase tracking-tighter opacity-80">
                {stat.label}
              </span>
              <span className="text-xl font-display">
                {stat.value}
              </span>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
