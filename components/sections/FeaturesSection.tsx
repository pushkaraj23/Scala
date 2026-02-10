"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScanLine, Shield, LayoutGrid, Zap } from "lucide-react";

const features = [
  {
    icon: ScanLine,
    title: "QR & barcode-driven inventory control",
    desc: "Every movement captured, verified, and updated instantly.",
  },
  {
    icon: Zap,
    title: "Automated incentive & loyalty management",
    desc: "Points, redemptions, and fraud control in one flow.",
  },
  {
    icon: Shield,
    title: "Built-in fraud detection",
    desc: "Real-time monitoring for secure incentive distribution.",
  },
  {
    icon: LayoutGrid,
    title: "One unified, scalable platform",
    desc: "Distribution, inventory, and incentives in a single system.",
  },
];

export default function FeaturesSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.4], ["2%", "-8%"]);

  return (
    <section
      ref={ref}
      id="features"
      className="relative py-24 sm:py-32 overflow-hidden bg-[color:var(--color-background)]"
    >
      <motion.div style={{ y }} className="absolute inset-0 bg-[color:var(--color-surface)]/50" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[color:var(--color-primary)] text-sm font-semibold tracking-widest uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[color:var(--color-foreground)]">
            End-to-end distribution visibility
          </h2>
          <p className="mt-4 text-lg text-[color:var(--color-text-secondary)] max-w-2xl mx-auto">
            One platform for inventory, incentives, and last-mile execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 sm:p-8 shadow-sm transition hover:border-[color:var(--color-primary)]/40 hover:shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[color:var(--color-primary)]/15 text-[color:var(--color-primary)] mb-5 group-hover:bg-[color:var(--color-primary)]/25 transition">
                <f.icon size={24} strokeWidth={1.8} />
              </div>
              <h3 className="font-semibold text-lg text-[color:var(--color-foreground)]">{f.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--color-text-secondary)]">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
