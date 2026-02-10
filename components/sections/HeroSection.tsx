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
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[color:var(--color-foreground)]"
    >
      {/* Parallax background layer */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-accent)]/20 via-transparent to-[color:var(--color-primary)]/10"
        aria-hidden
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--color-primary)/15%,transparent)]" aria-hidden />

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
          <div className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[color:var(--color-primary)] text-xs sm:text-sm md:text-base font-medium tracking-[0.35em] uppercase mb-4"
            >
              Supply Chain Distribution & Incentive Management System
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
            >
              Grow beyond
              <br />
              <span className="text-[color:var(--color-primary)]">boundaries</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-white/80 max-w-xl lg:max-w-md mx-auto lg:mx-0"
            >
              Real-time visibility, automated incentives, and built-in fraud control on one unified platform.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-base font-semibold bg-[color:var(--color-primary)] text-white shadow-lg shadow-[color:var(--color-primary)]/30 transition hover:bg-[color:var(--color-primary-dark)]"
              >
                Request a Demo
              </a>
              <span className="text-sm text-white/70">
                End-to-end control across distribution, inventory & incentives.
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-md mx-auto"
          >
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-1.5, 1.5, -1.5] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-4 sm:p-5 shadow-2xl"
            >
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[color:var(--color-primary)]/40 via-transparent to-[color:var(--color-accent)]/40 opacity-70 pointer-events-none" />
              <div className="relative bg-[radial-gradient(circle_at_top,var(--color-primary)/20,transparent_55%)] rounded-2xl p-4 sm:p-6">
                <Image
                  src="/window.svg"
                  alt="Scala distribution dashboard"
                  width={640}
                  height={420}
                  priority
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
