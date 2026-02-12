"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SolutionSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.98, 1]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.35], [0.7, 1]);

  const features = [
    {
      icon: "🎯",
      title: "End-to-End Visibility",
      stat: "99.9% Tracking Accuracy",
      description: "Complete supply chain transparency with real-time tracking"
    },
    {
      icon: "🛡️",
      title: "Fraud Detection",
      stat: "95% Fraud Prevention",
      description: "Prevent 95% of fraudulent claims with automated validation"
    },
    {
      icon: "📱",
      title: "QR & Barcode Control",
      stat: "40% Faster",
      description: "Instant verification with QR and barcode technology"
    },
    {
      icon: "✅",
      title: "Zero Manual Errors",
      description: "Eliminate data silos and human error with automated processes"
    },
    {
      icon: "🔗",
      title: "Unified Platform",
      stat: "One Platform, All Functions",
      description: "Eliminate data silos — everything in a single system"
    },
    {
      icon: "💰",
      title: "Automated Incentives",
      stat: "300% Engagement Boost",
      description: "Influencer engagement increases by 3x with instant rewards"
    },
    {
      icon: "🚀",
      title: "Rapid Deployment",
      stat: "7-Day Go-Live",
      description: "Full onboarding and go-live in just 7 days"
    }
  ];

  const stats = [
    { value: "99.9%", label: "Tracking Accuracy" },
    { value: "95%", label: "Fraud Prevention" },
    { value: "3x", label: "Engagement Boost" },
    { value: "7 Days", label: "Go-Live" }
  ];

  return (
    <section
      ref={ref}
      id="solution"
      className="relative min-h-screen py-24 sm:py-32 overflow-hidden bg-[color:var(--color-background)]"
    >
      {/* Soft brand gradient background using design tokens */}
      <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-background)] via-[color:var(--color-surface)] to-[color:var(--color-background)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--color-primary)/18,_transparent_60%)] opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--color-accent)/16,_transparent_60%)] opacity-70" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ scale, opacity }}
          className="text-center"
        >
         <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[color:var(--color-surface)]/80 border border-[color:var(--color-primary)]/40 backdrop-blur-sm shadow-lg shadow-[color:var(--color-primary)]/15 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--color-primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[color:var(--color-primary)]"></span>
            </span>
            <span className="text-[color:var(--color-foreground)] text-xs sm:text-sm font-semibold tracking-wide uppercase">
              Why Choose Scala?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[color:var(--color-foreground)] drop-shadow-sm"
          >
            Why Choose
            <span className="block mt-2 bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-accent)] bg-clip-text text-transparent">
              Scala?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-[color:var(--color-text-secondary)] max-w-3xl mx-auto drop-shadow-sm"
          >
            Comprehensive platform delivering measurable business outcomes. 
            End-to-end visibility, automated incentives, and fraud control in one unified system.
          </motion.p>
          
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-[color:var(--color-background)]/85 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[color:var(--color-border)]"
              >
                <div className="text-3xl font-bold text-[color:var(--color-primary)]">{stat.value}</div>
                <div className="text-sm text-[color:var(--color-text-secondary)] mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-[color:var(--color-background)]/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[color:var(--color-border)] hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-[color:var(--color-foreground)] mb-1">
                  {feature.title}
                </h3>
                {"stat" in feature && (
                  <p className="text-[color:var(--color-primary)] font-semibold text-sm mb-2">
                    {feature.stat}
                  </p>
                )}
                <p className="text-[color:var(--color-text-secondary)] text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex justify-center items-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[color:var(--color-primary)] text-[color:var(--color-accent-dark)] font-semibold hover:bg-[color:var(--color-primary-dark)] transition-colors shadow-lg hover:shadow-xl"
            >
              Request a demo
            </a>
          </motion.div>

          {/* Bottom Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="mt-12 inline-flex items-center gap-2 rounded-2xl bg-[color:var(--color-background)]/90 backdrop-blur-sm border-2 border-[color:var(--color-primary)]/30 px-6 py-4 shadow-lg"
          >
            <span className="text-[color:var(--color-foreground)] font-semibold">
              99.9% Tracking Accuracy • 95% Fraud Prevention • 7-Day Go-Live
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}