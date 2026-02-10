"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Factory, Warehouse, Truck, Store, User } from "lucide-react";

const flow = [
  { icon: Factory, label: "Manufacturer", sub: "Demand & products with QR tagging" },
  { icon: Warehouse, label: "Brand Warehouse", sub: "QR-verified inventory" },
  { icon: Truck, label: "Super Stockist", sub: "Live stock visibility to dealers" },
  { icon: Store, label: "Dealer", sub: "Orders & sells via platform" },
  { icon: User, label: "Plumber / Influencer", sub: "Scans for rewards" },
];

export default function DistributionFlow() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0.2, 0.6], ["-8%", "8%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      ref={ref}
      id="flow"
      className="relative py-24 sm:py-32 overflow-hidden bg-[color:var(--color-foreground)]"
    >
      <motion.div style={{ x }} className="absolute inset-0 bg-[color:var(--color-accent)]/25" aria-hidden />
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute -right-40 top-1/3 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,var(--color-primary)/35,transparent_70%)] opacity-80"
        aria-hidden
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <p className="text-[color:var(--color-primary)] text-sm font-semibold tracking-widest uppercase mb-3">
              End to End Distribution Flow
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              From manufacturer to last mile
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto lg:mx-0">
              Every movement is captured, verified, and visible — from production to plumber.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-md mx-auto"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl p-4 shadow-2xl"
            >
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[color:var(--color-primary)]/40 via-transparent to-[color:var(--color-accent)]/40 opacity-80" />
              <div className="relative rounded-2xl overflow-hidden bg-[radial-gradient(circle_at_top,var(--color-primary)/20,transparent_60%)] p-4">
                <Image
                  src="/globe.svg"
                  alt="Global distribution visibility"
                  width={640}
                  height={420}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12, delayChildren: 0.2 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          {flow.map((node, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center rounded-2xl border border-white/20 bg-white/5 backdrop-blur p-6 sm:p-8 min-w-[140px] sm:min-w-[160px] hover:bg-white/12 hover:border-[color:var(--color-primary)]/60 hover:-translate-y-1 transition-transform transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[color:var(--color-primary)]/20 flex items-center justify-center text-[color:var(--color-primary)] mb-4">
                <node.icon size={24} strokeWidth={1.8} />
              </div>
              <span className="font-semibold text-white text-center">{node.label}</span>
              <span className="text-xs text-white/80 text-center mt-1">{node.sub}</span>
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-white/80 text-sm"
        >
          Barcode-driven inventory • Real-time sync • Fraud control
        </motion.p>
      </div>
    </section>
  );
}
