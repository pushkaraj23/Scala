 "use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function VideoSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section
      ref={ref}
      id="demo"
      className="relative py-20 sm:py-24 bg-[color:var(--color-background)] overflow-hidden"
    >
      {/* Soft light background using brand tokens */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-background)] via-[color:var(--color-surface)] to-[color:var(--color-background)]"
        aria-hidden
      />
      <div className="absolute inset-x-0 -top-40 h-64 bg-[radial-gradient(circle_at_top,_var(--color-primary-soft)/55,_transparent_70%)] opacity-70" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card container with entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-3xl bg-[color:var(--color-background)] shadow-2xl overflow-hidden border border-[color:var(--color-border)]/80"
        >
          {/* Top content row */}
          <div className="px-6 sm:px-10 pt-8 sm:pt-10 pb-6 sm:pb-8 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
            <div>
              <p className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[color:var(--color-primary)] mb-4">
                Platform walkthrough
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[color:var(--color-foreground)]">
                See how Scala
                <br />
                <span className="text-[color:var(--color-primary-soft)]">
                  runs your distribution
                </span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[color:var(--color-text-secondary)] max-w-xl">
                A short product tour showing how brands use Scala to orchestrate inventory,
                incentives and partner engagement across every level of their network.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-4 text-xs sm:text-sm">
                <div>
                  <p className="text-lg sm:text-xl font-semibold text-[color:var(--color-foreground)]">
                    12+
                  </p>
                  <p className="text-[color:var(--color-text-muted)]">Years of experience</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-semibold text-[color:var(--color-foreground)]">
                    83K+
                  </p>
                  <p className="text-[color:var(--color-text-muted)]">Program transactions</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-semibold text-[color:var(--color-foreground)]">
                    4.2K+
                  </p>
                  <p className="text-[color:var(--color-text-muted)]">Active partners</p>
                </div>
              </div>
            </div>

            {/* Right-side mini description */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="hidden lg:block"
            >
              <div className="rounded-2xl bg-[color:var(--color-surface)] px-5 py-4 border border-[color:var(--color-border)]">
                <p className="text-sm text-[color:var(--color-text-secondary)]">
                  We combine real-time data capture, configurable rules and partner-friendly
                  experiences so your brand stays in control while your network scales.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Video area */}
          <div className="bg-[color:var(--color-surface)]/60">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative mx-4 sm:mx-8 mb-6 sm:mb-8 rounded-3xl overflow-hidden shadow-xl -mt-4"
            >
              {/* Subtle floating animation on video frame */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full pt-[52%] bg-black"
              >
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Scala product demo video"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
                {/* Central play indicator ring (purely decorative over embed) */}
                <motion.div
                  className="pointer-events-none absolute inset-0 flex items-center justify-center"
                  animate={{ scale: [1, 1.04, 1], opacity: [0.9, 1, 0.9] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="h-16 w-16 rounded-full bg-white/10 border border-white/40 flex items-center justify-center backdrop-blur-sm">
                    <div className="h-10 w-10 rounded-full bg-[color:var(--color-primary)] flex items-center justify-center shadow-md shadow-[color:var(--color-primary)]/50">
                      <span className="ml-0.5 border-l-[10px] border-l-white border-y-[6px] border-y-transparent" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Logo strip placeholder (like reference) */}
            <div className="px-6 sm:px-10 pb-6 sm:pb-8">
              <p className="text-xs sm:text-sm font-medium text-[color:var(--color-text-secondary)] mb-3">
                Trusted by teams using:
              </p>
              <div className="flex flex-wrap gap-4 sm:gap-6 items-center text-[color:var(--color-text-secondary)] text-xs sm:text-sm">
                <span className="opacity-90">WhatsApp</span>
                <span className="opacity-80">Google Analytics</span>
                <span className="opacity-80">Zoho</span>
                <span className="opacity-80">SAP / ERP</span>
                <span className="opacity-80">Custom DMS</span>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="mt-4 text-[0.7rem] text-[color:var(--color-text-secondary)] text-center">
          Replace the demo video URL with your official Scala walkthrough once ready.
        </p>
      </div>
    </section>
  );
}



