"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Building2, Factory, Warehouse, Truck, Store, User } from "lucide-react";

const flow = [
  { icon: Building2, label: "Brand", sub: "Source & product management" },
  { icon: Factory, label: "Manufacturer", sub: "Demand & products with QR tagging" },
  { icon: Warehouse, label: "Warehouse", sub: "QR-verified inventory" },
  { icon: Truck, label: "Super Stockist", sub: "Live stock visibility to dealers" },
  { icon: Store, label: "Dealer", sub: "Orders & sells via platform" },
  { icon: User, label: "Plumber", sub: "Scans for rewards & incentives" },
];

const scalaConnects = [
  { step: 1, title: "QR Code Generation", desc: "Unique QR code for each product" },
  { step: 2, title: "Scan at Every Transfer", desc: "QR code scanned at each handoff" },
  { step: 3, title: "Real-Time Updates", desc: "Sync to central cloud platform" },
  { step: 4, title: "Automated Incentives", desc: "Loyalty points credited instantly" },
  { step: 5, title: "Fraud Prevention", desc: "Validates every scan" },
  { step: 6, title: "Analytics & Insights", desc: "Actionable insights for decisions" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const staggerFlow = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const connectStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

export default function DistributionFlow() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

  return (
    <section
      ref={ref}
      id="flow"
      className="relative py-15 sm:py-15 lg:py-15 overflow-hidden bg-gradient-to-l from-[color:var(--color-background)] via-[color:var(--color-primary-soft)] to-[color:var(--color-primary)]"
    >
      {/* Premium gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-background)]/70 via-transparent to-[color:var(--color-surface)]/80" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--color-primary-soft)_0%,_transparent_50%)] opacity-40" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--color-primary)_0%,_transparent_50%)] opacity-35" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-accent)_0%,_transparent_50%)] opacity-25" aria-hidden />

      {/* Subtle texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noise)"/%3E%3C/svg%3E")' 
        }} 
        aria-hidden 
      />

      {/* Grid pattern */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0  bg-center [mask-image:linear-gradient(180deg,transparent,white_20%,white_80%,transparent)] opacity-[0.04]"
        aria-hidden
      />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -left-32 w-80 h-80 bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_70%)] rounded-full blur-[100px]"
        aria-hidden
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[radial-gradient(circle_at_center,var(--color-primary-soft)_0%,transparent_70%)] rounded-full blur-[120px]"
        aria-hidden
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,var(--color-accent)_0%,transparent_70%)] rounded-full blur-[150px]"
        aria-hidden
      />

      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -50, 0],
            x: [0, 25, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 5 + i * 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
          className="absolute w-2 h-2 bg-white/70 rounded-full blur-[1px]"
          style={{
            top: `${10 + i * 8}%`,
            left: `${5 + i * 10}%`,
          }}
          aria-hidden
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[color:var(--color-background)]/80 border border-[color:var(--color-primary)]/40 backdrop-blur-sm shadow-lg shadow-[color:var(--color-primary)]/15 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--color-primary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[color:var(--color-primary)]"></span>
              </span>
              <span className="text-[color:var(--color-foreground)] text-xs sm:text-sm font-semibold tracking-wide uppercase">
                Distribution Ecosystem
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              <span className="text-accent"> End-to-end </span>
              <span className="text-accent-dark">
                Distribution Flows
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg sm:text-xl text-[color:var(--color-text-secondary)] max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Six-tier seamless integration from brand to end-user
            </motion.p>

            {/* Stats row */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-8 justify-center lg:justify-start"
            >
              {[
                { value: "100%", label: "Visibility" },
                { value: "Real-time", label: "Tracking" },
                { value: "Zero", label: "Leakage" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-green-500">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div> */}
          </motion.div>

          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-lg mx-auto"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-background)]/90 backdrop-blur-xl p-3 shadow-2xl shadow-[color:var(--color-accent-dark)]/30"
            >
              {/* Glow border */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[color:var(--color-primary)]/40 via-transparent to-[color:var(--color-accent)]/40 opacity-80" />
              
              {/* Inner container */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[color:var(--color-background)]/90 to-[color:var(--color-surface)]/90 p-1">
                {/* Top bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[color:var(--color-surface)]/90 backdrop-blur-sm rounded-t-xl border-b border-[color:var(--color-border)]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[color:var(--color-error)]" />
                    <div className="w-3 h-3 rounded-full bg-[color:var(--color-warning)]" />
                    <div className="w-3 h-3 rounded-full bg-[color:var(--color-success)]" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-4 py-1 rounded-lg bg-[color:var(--color-background)] border border-[color:var(--color-border)] text-xs text-[color:var(--color-foreground)] font-medium">
                      scala-flow.app
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative bg-gradient-to-br from-[color:var(--color-background)]/90 to-[color:var(--color-surface)]/90 rounded-b-xl p-4 sm:p-6">
                  <Image
                    src="/globe.svg"
                    alt="Global distribution visibility"
                    width={640}
                    height={420}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              
            </motion.div>
          </motion.div>
        </div>

        {/* Flow – Pipeline style: vertical on mobile, horizontal on desktop */}
        <motion.div
          variants={staggerFlow}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="relative"
        >
          {/* Desktop: Horizontal pipeline */}
          <div className="hidden lg:block">
            <div className="relative flex items-start justify-between gap-2 px-4">
              {/* Track line */}
              <div className="absolute top-8 left-8 right-8 h-1 rounded-full bg-[color:var(--color-border)]/60" />
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" as const, delay: 0.4 }}
                className="absolute top-8 left-8 right-8 h-1 rounded-full origin-left bg-[color:var(--color-primary)]/80"
              />

              {flow.map((node, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="relative flex flex-col items-center flex-1 min-w-0 max-w-[140px]"
                >
                  <motion.div
                    whileHover={{ scale: 1.08, y: -4 }}
                    className="relative z-10 flex flex-col items-center"
                  >
                    <div className="relative w-16 h-16 rounded-2xl bg-[color:var(--color-background)]/95 backdrop-blur border-2 border-[color:var(--color-primary)]/50 shadow-xl shadow-[color:var(--color-primary)]/10 flex items-center justify-center text-[color:var(--color-primary)] transition-colors hover:border-[color:var(--color-primary)] hover:bg-[color:var(--color-primary)]/10">
                      <node.icon size={28} strokeWidth={1.8} />
                      <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[color:var(--color-primary)] text-white text-[10px] font-bold flex items-center justify-center shadow">
                        {i + 1}
                      </span>
                    </div>
                  </motion.div>
                  <h3 className="mt-3 font-semibold text-[color:var(--color-foreground)] text-sm text-center truncate w-full">
                    {node.label}

                  </h3>
                  <p className="mt-0.5 text-[10px] sm:text-xs text-foreground/80 text-center line-clamp-2 leading-tight">
                    {node.sub}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile & Tablet: Vertical timeline */}
          <div className="lg:hidden space-y-0">
            {flow.map((node, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="relative flex gap-4 sm:gap-6"
              >
                {/* Timeline line */}
                {i < flow.length - 1 && (
                  <div className="absolute left-[27px] sm:left-[31px] top-14 bottom-0 w-0.5 bg-[color:var(--color-primary)]/30" />
                )}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    whileTap={{ scale: 0.96 }}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[color:var(--color-background)]/95 backdrop-blur border-2 border-[color:var(--color-primary)]/50 flex items-center justify-center text-[color:var(--color-primary)]"
                  >
                    <node.icon size={24} strokeWidth={1.8} className="sm:w-7 sm:h-7" />
                  </motion.div>
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-[color:var(--color-primary)] text-white text-[10px] font-bold flex items-center justify-center shadow">
                    {i + 1}
                  </span>
                </div>
                <div className="flex-1 min-w-0 pt-1 pb-8 sm:pb-10">
                  <h3 className="font-semibold text-[color:var(--color-foreground)] text-base sm:text-lg">
                    {node.label}
                  </h3>
                  <p className="mt-1 text-sm text-foreground/80 leading-relaxed">
                    {node.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How Scala Connects */}
        <motion.div
          variants={connectStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-20 lg:mt-24"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary border border-primary-dark text-xs font-semibold text-accent-dark uppercase tracking-wider mb-4">
              The Process
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[color:var(--color-foreground)]">
              How Scala Connects Every Tier
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {scalaConnects.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -3 }}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-[color:var(--color-background)]/90 backdrop-blur-sm border border-[color:var(--color-border)] hover:border-[color:var(--color-primary)]/40 transition-colors"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-[color:var(--color-primary)]/20 text-[color:var(--color-primary)] flex items-center justify-center font-bold text-sm group-hover:bg-[color:var(--color-primary)]/30 transition-colors">
                  {item.step}
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-[color:var(--color-foreground)] text-sm sm:text-base">{item.title}</p>
                  <p className="text-xs sm:text-sm text-[color:var(--color-text-secondary)] mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          {[
            { value: "100%", label: "Product Traceability" },
            { value: "<1 sec", label: "Sync Speed" },
            { value: "6 Tiers", label: "Full Integration" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-2 px-5 py-3 rounded-full bg-[color:var(--color-background)]/90 border border-[color:var(--color-border)]">
              <span className="text-lg font-bold text-[color:var(--color-primary)]">{s.value}</span>
              <span className="text-sm font-medium text-[color:var(--color-foreground)]">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="#demo"
            className="group relative inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-semibold bg-[color:var(--color-primary)] text-white shadow-2xl shadow-[color:var(--color-accent-dark)]/40 transition-all hover:bg-[color:var(--color-primary-dark)] hover:shadow-[color:var(--color-accent-dark)]/60 hover:scale-105 active:scale-100"
          >
            <span className="relative z-10">See It In Action</span>
            <svg
              className="relative z-10 ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}