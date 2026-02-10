"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const dilemmas = [
  "Limited visibility across multi-level distribution",
  "No real-time last-mile sales data",
  "Low influencer engagement",
  "Manual inventory, order, and incentive processes",
  "Incentive leakage and fraud risks",
];

export default function CustomerDilemma() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 0.5], ["-5%", "5%"]);

  return (
    <section
      ref={ref}
      id="dilemma"
      className="relative py-24 sm:py-32 overflow-hidden bg-[color:var(--color-foreground)]"
    >
      <motion.div style={{ x }} className="absolute inset-0 bg-[color:var(--color-accent)]/10" aria-hidden />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[color:var(--color-primary)] text-sm font-semibold tracking-widest uppercase mb-4"
        >
          The Customer&apos;s Dilemma
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12"
        >
          When growth is held back by legacy processes
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="space-y-4"
        >
          {dilemmas.map((d, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="text-lg sm:text-xl text-white/85 font-medium"
            >
              {d}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
