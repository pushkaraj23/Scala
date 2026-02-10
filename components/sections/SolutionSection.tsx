"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SolutionSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.98, 1]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.35], [0.7, 1]);

  return (
    <section
      ref={ref}
      id="solution"
      className="relative py-24 sm:py-32 overflow-hidden bg-[color:var(--color-surface)]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-background)] to-[color:var(--color-surface)]" aria-hidden />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ scale, opacity }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[color:var(--color-primary)] text-sm font-semibold tracking-widest uppercase mb-4"
          >
            The Solution
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[color:var(--color-foreground)]"
          >
            A unified platform
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-[color:var(--color-text-secondary)] max-w-3xl mx-auto"
          >
            Manage distribution, inventory, and incentives with real-time visibility and built-in fraud control.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-[color:var(--color-primary)]/10 border border-[color:var(--color-primary)]/30 px-6 py-4"
          >
            <span className="text-[color:var(--color-foreground)] font-semibold">
              End-to-end visibility • Automated incentives • One platform
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
