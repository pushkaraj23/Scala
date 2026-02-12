"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Smartphone, LayoutDashboard, Database, Cloud, BarChart3, Zap } from "lucide-react";

const platformModules = [
  {
    icon: Smartphone,
    title: "Mobile Application",
    desc: "For Field Teams & On-Ground Staff",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    desc: "For Management & Oversight",
  },
];

const integrationSteps = [
  { step: 1, icon: Database, title: "Data Capture" },
  { step: 2, icon: Cloud, title: "Cloud Processing" },
  { step: 3, icon: BarChart3, title: "Dashboard Visibility" },
  { step: 4, icon: Zap, title: "Automated Actions" },
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
            Platform Overview
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[color:var(--color-foreground)]">
            The Complete Solution Architecture
          </h2>
          <p className="mt-4 text-lg text-[color:var(--color-text-secondary)] max-w-2xl mx-auto">
            Unified SAAS platform integrating all distribution functions
          </p>
        </motion.div>

        {/* Platform Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {platformModules.map((f, i) => (
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

        {/* Platform Integration Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-[color:var(--color-foreground)] text-center mb-8">
            Platform Integration Flow
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {integrationSteps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-6 py-5 min-w-[140px] shadow-sm hover:border-[color:var(--color-primary)]/40 transition"
              >
                <span className="w-10 h-10 rounded-full bg-[color:var(--color-primary)] text-white flex items-center justify-center font-bold text-sm mb-3">
                  {s.step}
                </span>
                <s.icon size={22} className="text-[color:var(--color-primary)] mb-2" strokeWidth={1.8} />
                <span className="font-medium text-[color:var(--color-foreground)] text-sm text-center">
                  {s.title}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Unified Ecosystem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-6 rounded-2xl bg-[color:var(--color-surface)] border border-[color:var(--color-border)]"
        >
          <p className="text-[color:var(--color-text-secondary)] max-w-3xl mx-auto">
            <span className="font-semibold text-[color:var(--color-foreground)]">Unified Ecosystem:</span> All modules work seamlessly together, eliminating data silos and ensuring consistent information across your entire distribution network.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
