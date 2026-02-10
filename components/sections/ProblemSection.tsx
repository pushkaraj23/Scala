"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const problems = [
  { title: "No Real-Time Visibility", desc: "Stock, orders, dispatch, and retailer activity are always delayed" },
  { title: "Slow & Messy Fulfillment", desc: "Wrong items, partial dispatches, high returns" },
  { title: "Poor Route & Beat Execution", desc: "Missed outlets and unreliable field reporting" },
  { title: "Weak Analytics & Forecasting", desc: "Decisions driven by gut feel, not data" },
  { title: "Collections & Credit Delays", desc: "Manual credit control and reactive follow-ups" },
  { title: "Loyalty & Rewards Leakage", desc: "Fraud, duplicate claims, delayed redemptions" },
  { title: "Distributor & Retailer Chaos", desc: "No standard onboarding, targets, or tracking" },
  { title: "Uncontrolled Pricing & Schemes", desc: "Multiple price lists, misapplied discounts, margin leakage" },
  { title: "Inventory Mismatch & Stockouts", desc: "Dead stock at some depots, shortages at others" },
  { title: "Manual Order Capture", desc: "WhatsApp, calls, and Excel cause errors and follow-ups" },
  { title: "Unmanaged Inter-Warehouse Transfers", desc: "Stock moves without system records" },
  { title: "No Secondary Sales Visibility", desc: "Primary sales visible, real demand hidden" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ProblemSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 0.3], ["0%", "15%"]);

  return (
    <section
      ref={ref}
      id="problem"
      className="relative py-24 sm:py-32 overflow-hidden bg-[color:var(--color-surface)]"
    >
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-[color:var(--color-surface-light)]/30"
        aria-hidden
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[color:var(--color-primary)] text-sm font-semibold tracking-widest uppercase mb-3">
            The Problem
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[color:var(--color-foreground)]">
            Distribution without visibility
          </h2>
          <p className="mt-4 text-lg text-[color:var(--color-text-secondary)] max-w-2xl mx-auto">
            Manual processes, fragmented data, and lack of real-time control hold growth back.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {problems.map((p, i) => (
            <motion.div
              key={i}
              variants={item}
              transition={{ duration: 0.4 }}
              className="group rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] p-6 shadow-sm transition hover:border-[color:var(--color-primary)]/40 hover:shadow-md"
            >
              <h3 className="font-semibold text-[color:var(--color-foreground)] group-hover:text-[color:var(--color-accent)] transition">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-[color:var(--color-text-secondary)]">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
