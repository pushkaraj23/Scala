"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Target,
  Shield,
  Smartphone,
  CheckCircle2,
  Link2,
  Sparkles,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Distribution Flow Visibility",
    stat: "99.9%",
    statLabel: "Tracking Accuracy",
    description: "Complete supply chain transparency with real-time tracking",
  },
  {
    icon: Shield,
    title: "Fraud Detection",
    stat: "95%",
    statLabel: "Fraud Prevention",
    description: "Prevent fraudulent claims with automated validation",
  },
  {
    icon: Smartphone,
    title: "QR & Barcode Control",
    stat: "40%",
    statLabel: "Faster Verification",
    description: "Instant verification with QR and barcode technology",
  },
  {
    icon: Link2,
    title: "Unified Platform",
    stat: "One System",
    description: "Eliminate data silos — everything in a single platform",
  },
  {
    icon: Sparkles,
    title: "Automated Incentives",
    stat: "300%",
    statLabel: "Engagement Boost",
    description: "Influencer engagement increases by 3x with instant rewards",
  },
  {
    icon: Rocket,
    title: "Rapid Deployment",
    stat: "7 Days",
    statLabel: "Go-Live",
    description: "Full onboarding and go-live in just 7 days",
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function SolutionSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.25], [40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);

  return (
    <section
      ref={ref}
      id="solution"
      className="relative min-h-screen py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[color:var(--color-background)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,_var(--color-primary)/12_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_100%,_var(--color-accent)/8_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--color-surface)_0%,_transparent_70%)] opacity-50" />

      <motion.div
        style={{ y, opacity }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[color:var(--color-accent)]/15 border border-[color:var(--color-accent)]/40 text-[color:var(--color-accent)] text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-accent)] animate-pulse" />
            Why Choose Scala?
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-[color:var(--color-foreground)]">Why Choose </span>
            <span className="text-[color:var(--color-accent)]">Scala?</span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-[color:var(--color-text-secondary)] leading-relaxed">
            Comprehensive platform delivering measurable business outcomes. End-to-end
            distribution flow visibility, automated incentives, and fraud control in one
            unified system.
          </p>
        </motion.div>

        {/* Stats – accent highlights */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-14 flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          {[
            { value: "99.9%", label: "Tracking Accuracy" },
            { value: "95%", label: "Fraud Prevention" },
            { value: "3x", label: "Engagement Boost" },
            { value: "7 Days", label: "Go-Live" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-4 rounded-2xl bg-[color:var(--color-surface)]/60 backdrop-blur-sm border border-[color:var(--color-border)] hover:border-[color:var(--color-accent)]/50 transition-colors"
            >
              <span className="text-2xl sm:text-3xl font-bold text-[color:var(--color-accent)]">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-[color:var(--color-text-secondary)]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid – bento-style layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl p-6 sm:p-7 bg-[color:var(--color-surface)]/40 backdrop-blur-sm border border-[color:var(--color-border)] hover:border-[color:var(--color-accent)]/40 transition-all duration-300 overflow-hidden"
            >
              {/* Accent glow on hover */}
              <div className="absolute inset-0 bg-[color:var(--color-accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-[color:var(--color-accent)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-[color:var(--color-primary)] flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-semibold text-[color:var(--color-foreground)] mb-2">
                  {feature.title}
                </h3>
                {"stat" in feature && feature.stat && (
                  <p className="text-[color:var(--color-accent)] font-bold text-xl mb-1">
                    {feature.stat}
                    {"statLabel" in feature && feature.statLabel ? (
                      <span className="text-sm font-medium text-[color:var(--color-text-muted)] ml-2">
                        {feature.statLabel}
                      </span>
                    ) : null}
                  </p>
                )}
                <p className="text-[color:var(--color-text-secondary)] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA + Badge Row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-[color:var(--color-primary)] text-white font-semibold hover:bg-[color:var(--color-primary-dark)] transition-all shadow-lg shadow-[color:var(--color-primary)]/30 hover:shadow-xl hover:scale-105 active:scale-100"
          >
            Request a Demo
          </a>
          <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-[color:var(--color-accent)]/10 border border-[color:var(--color-accent)]/30">
            <span className="text-sm font-medium text-[color:var(--color-text-secondary)]">
              99.9% Accuracy
            </span>
            <span className="w-1 h-1 rounded-full bg-[color:var(--color-accent)]" />
            <span className="text-sm font-medium text-[color:var(--color-text-secondary)]">
              95% Fraud Prevention
            </span>
            <span className="w-1 h-1 rounded-full bg-[color:var(--color-accent)]" />
            <span className="text-sm font-medium text-[color:var(--color-text-secondary)]">
              7-Day Go-Live
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
