"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "motion/react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: (string | undefined | null | boolean)[]) {
  return twMerge(clsx(inputs));
}

interface MotionDivProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  initial?: any;
  whileInView?: any;
  viewport?: any;
  transition?: any;
  className?: string;
}

export function MotionDiv({
  children,
  initial,
  whileInView,
  viewport,
  transition,
  className,
  ...props
}: MotionDivProps) {
  const reduced = useReducedMotion();

  const effectiveInitial = reduced ? undefined : initial;
  const effectiveWhileInView = reduced ? undefined : whileInView;

  return (
    <motion.div
      initial={effectiveInitial}
      whileInView={effectiveWhileInView}
      viewport={viewport}
      transition={transition}
      className={cn("relative", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
