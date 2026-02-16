"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  // Changed scale effect to be more subtle (1 to 0.95 instead of 1 to 0.85)
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[color:var(--color-accent-dark)] via-[color:var(--color-accent-dark)] to-[color:var(--color-accent)]"
    >
      {/* Enhanced background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-primary)_0%,_transparent_60%)] opacity-20" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--color-accent)_0%,_transparent_50%)] opacity-10" aria-hidden />
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"
        aria-hidden
      />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -left-48 w-96 h-96 bg-[color:var(--color-primary)] rounded-full blur-[120px] opacity-30"
        aria-hidden
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[color:var(--color-accent)] rounded-full blur-[120px] opacity-20"
        aria-hidden
      />

      <motion.div
        style={{ opacity, scale }}
        transition={{ ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-sm:py-12 will-change-transform"
      >
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--color-primary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[color:var(--color-primary)]"></span>
              </span>
              <span className="text-white/95 text-xs sm:text-sm font-medium tracking-wide">
                SAAS PLATFORM
              </span>
            </motion.div>

            {/* Main headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                <span className="block text-white leading-[1.1]">
                  Supply Chain Distribution & Incentive Management System
                </span>
                <span className="block mt-2 text-[color:var(--color-primary-soft)] leading-[1.1]">
                  GROW BEYOND BOUNDARIES
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                A Product of{" "}
                <a href="https://www.scalasuite.com" target="_blank" rel="noopener noreferrer" className="text-white font-semibold underline hover:text-[color:var(--color-primary)]">www.scalasuite.com</a>
                {" "}— <span className="text-white font-semibold">Paxgrow India Pvt. Ltd.</span>
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-semibold bg-[color:var(--color-primary)] text-white shadow-2xl shadow-[color:var(--color-primary)]/50 transition-all hover:bg-[color:var(--color-primary-dark)] hover:shadow-[color:var(--color-primary)]/70 hover:scale-105 active:scale-100"
              >
                <span className="relative z-10">Request Demo</span>
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
              </a>

              <a
                href="#features"
                className="group inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-semibold bg-white/5 text-white border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
              >
                Explore Features
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </motion.div>

            {/* Brand attribution */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap items-center gap-4 justify-center lg:justify-start pt-4"
            >
              <span className="text-sm text-white/70">
                <span className="font-semibold text-white">Real-time visibility</span> • <span className="font-semibold text-white">Automated incentives</span> • <span className="font-semibold text-white">Fraud control</span>
              </span>
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg mx-auto lg:max-w-none"
          >
            {/* Floating elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }} >
            </motion.div>

            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}>
            </motion.div>

            {/* Main dashboard mockup */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotateY: [-2, 2, -2],
                rotateX: [2, -2, 2]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl p-2 sm:p-3 shadow-2xl shadow-[color:var(--color-accent-dark)]/70"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Inner container */}
              <div className="relative bg-gradient-to-br from-[color:var(--color-accent-dark)]/95 to-[color:var(--color-accent)]/90 rounded-2xl p-1 overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 backdrop-blur-sm rounded-t-2xl border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[color:var(--color-error)]/80" />
                    <div className="w-3 h-3 rounded-full bg-[color:var(--color-warning)]/80" />
                    <div className="w-3 h-3 rounded-full bg-[color:var(--color-success)]/80" />
                  </div>

                </div>

                {/* Dashboard content */}
                <div className="relative bg-[radial-gradient(ellipse_at_top,var(--color-primary)/15,transparent_60%)] rounded-b-2xl p-4 sm:p-6">
                  <Image
                    src="/window.svg"
                    alt="Scala distribution dashboard interface"
                    width={800}
                    height={560}
                    priority
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />

                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/50 uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <motion.span
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-white/70"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}