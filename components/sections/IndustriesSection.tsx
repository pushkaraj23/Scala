"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cpu, Building2, Package, Car, Zap, Shirt } from "lucide-react";

const industries = [
  { icon: Cpu, name: "Electronics & Consumer Durables", desc: "Complex multi-tier distribution" },
  { icon: Car, name: "Automotive Components", desc: "Multi-tier supply chains" },
  { icon: Building2, name: "Building Materials & Sanitaryware", desc: "Influencer-driven sales" },
  { icon: Package, name: "FMCG & Packaged Goods", desc: "High-volume distribution" },
  { icon: Zap, name: "Electricals & Switchgear", desc: "Technical products" },
  { icon: Shirt, name: "Apparel & Fashion Retail", desc: "Seasonal inventory" },
];

export default function IndustriesSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0.2, 0.6], [-1, 1]);

  return (
    <section
      ref={ref}
      id="industries"
      className="relative py-24 sm:py-32 overflow-hidden bg-[color:var(--color-background)]"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[color:var(--color-primary)] text-sm font-semibold tracking-widest uppercase mb-3">
            Market Opportunity
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[color:var(--color-foreground)]">
            Target Industries & Use Cases
          </h2>
          <p className="mt-4 text-lg text-[color:var(--color-text-secondary)] max-w-2xl mx-auto">
            Six key sectors transforming their distribution with Scala. Universal applicability: adaptable to any industry with multi-tier distribution and influencer-driven sales.
          </p>
        </motion.div>

        <motion.div
          style={{ rotate }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group flex items-center gap-5 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-sm hover:border-[color:var(--color-primary)]/40 hover:shadow-lg transition"
            >
              <div className="w-12 h-12 rounded-xl bg-[color:var(--color-primary)]/15 flex items-center justify-center text-[color:var(--color-primary)] group-hover:bg-[color:var(--color-primary)]/25 transition">
                <ind.icon size={24} strokeWidth={1.8} />
              </div>
              <div>
                <span className="font-semibold text-[color:var(--color-foreground)] block">{ind.name}</span>
                {ind.desc && <span className="text-xs text-[color:var(--color-text-secondary)]">{ind.desc}</span>}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
