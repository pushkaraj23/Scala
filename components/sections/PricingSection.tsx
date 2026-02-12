 "use client";

import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Core",
    price: "₹",
    priceNote: "For emerging brands",
    description: "Digitise core distribution flows with real-time visibility.",
    features: [
      "Up to 2 distribution tiers tracked",
      "Standard dashboards & reports",
      "Email support during business hours",
    ],
  },
  {
    name: "Scale",
    price: "₹₹",
    priceNote: "Most popular plan",
    description: "Automate incentives and multi-level programs across your network.",
    featured: true,
    features: [
      "Multi-level distribution & influencer flows",
      "Automated incentive & loyalty programs",
      "Advanced fraud checks & rule engine",
      "Priority onboarding & success manager",
    ],
  },
  {
    name: "Enterprise",
    price: "₹₹₹",
    priceNote: "For national & global brands",
    description: "Custom programs, complex hierarchies and enterprise-grade security.",
    features: [
      "Custom workflows & integrations",
      "Dedicated infra & data residency options",
      "Role-based access & SSO options",
      "24x7 premium support & SLAs",
    ],
  },
];

export default function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <section
      id="pricing"
      className="relative py-24 sm:py-28 overflow-hidden bg-[color:var(--color-background)]"
    >
      {/* Subtle brand background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-background)] via-[color:var(--color-surface)] to-[color:var(--color-background)]" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--color-primary-soft)/40,_transparent_60%)] opacity-80" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--color-accent)/22,_transparent_60%)] opacity-60" aria-hidden />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[color:var(--color-primary)] mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[color:var(--color-foreground)]">
            Flexible pricing for teams of all sizes
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[color:var(--color-text-secondary)]">
            Choose the plan that matches your current distribution complexity. All plans
            come with secure infrastructure, analytics and implementation support.
          </p>
        </div>

        {/* Billing toggle (visual only) */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center rounded-full bg-[color:var(--color-surface)] p-1 border border-[color:var(--color-border)] text-xs sm:text-sm shadow-sm">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2 rounded-full font-medium transition-colors ${
                billing === "monthly"
                  ? "bg-[color:var(--color-primary)] text-white shadow-sm shadow-[color:var(--color-primary)]/40"
                  : "text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-foreground)]"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling("annual")}
              className={`px-5 py-2 rounded-full font-medium transition-colors ${
                billing === "annual"
                  ? "bg-[color:var(--color-primary)] text-white shadow-sm shadow-[color:var(--color-primary)]/40"
                  : "text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-foreground)]"
              }`}
            >
              Annual
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => {
            const isFeatured = Boolean(plan.featured);
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.25 },
                }}
                className={[
                  "relative flex flex-col rounded-3xl px-6 sm:px-8 py-8 sm:py-10 border shadow-lg",
                  isFeatured
                    ? "border-[color:var(--color-primary)] bg-[color:var(--color-background)] text-[color:var(--color-foreground)] shadow-[0_24px_70px_rgba(0,0,0,0.16)] md:-translate-y-2"
                    : "border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-foreground)] shadow-[0_16px_50px_rgba(0,0,0,0.08)]",
                ].join(" ")}
              >
                {isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[color:var(--color-primary)] text-white text-xs font-semibold px-4 py-1 shadow-md">
                    Most popular plan
                  </div>
                )}
                <div className="mb-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
                    {plan.name}
                  </p>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-semibold text-[color:var(--color-primary)]">
                      {plan.price}
                    </span>
                    <span className="text-xs text-[color:var(--color-text-muted)]">
                      {billing === "annual" ? "per brand / year*" : "per brand / month*"}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-[color:var(--color-text-muted)]">
                    {plan.priceNote}
                  </p>
                </div>
                <p className="text-sm sm:text-base text-[color:var(--color-text-secondary)] mb-5">
                  {plan.description}
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[color:var(--color-text-secondary)] flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[color:var(--color-primary)]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <a
                    href="#contact"
                    className={[
                      "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold w-full border transition-colors",
                      isFeatured
                        ? "bg-[color:var(--color-primary)] text-white border-[color:var(--color-primary)] hover:bg-[color:var(--color-primary-dark)]"
                        : "bg-transparent text-[color:var(--color-foreground)] border-[color:var(--color-border)] hover:bg-[color:var(--color-surface-light)]",
                    ].join(" ")}
                  >
                    Talk to sales
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-6 text-[0.7rem] text-center text-[color:var(--color-text-muted)]">
          *Indicative structure only. Final commercials depend on usage, geographies and
          integrations.
        </p>
      </div>
    </section>
  );
}


