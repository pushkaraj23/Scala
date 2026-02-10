"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Barcode, Package, Gift, Megaphone, ShieldCheck } from "lucide-react";

const blocks = [
  {
    icon: Barcode,
    title: "Barcode-driven inventory",
    desc: "Scan, record, dispatch — real-time sync. Every movement captured and updated instantly.",
  },
  {
    icon: Package,
    title: "Order, inventory & status automation",
    desc: "End-to-end automation for orders, stock levels, and delivery status.",
  },
  {
    icon: Gift,
    title: "Plumber loyalty & incentive automation",
    desc: "Scan → wallet → redemption. QR scan credits points; geo & frequency validation; fraud control.",
  },
  {
    icon: Megaphone,
    title: "Offers & promotions engine",
    desc: "Create, target, and deliver promotions across channels.",
  },
  {
    icon: ShieldCheck,
    title: "Automated fraud detection & control",
    desc: "Real-time monitoring ensures secure incentive distribution. Unusual patterns flagged for admin verification.",
  },
];

export default function IncentivesSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.5], ["5%", "-5%"]);

  return (
    <section
      ref={ref}
      id="incentives"
      className="relative py-24 sm:py-32 overflow-hidden bg-[color:var(--color-surface)]"
    >
      <motion.div style={{ y }} className="absolute inset-0 bg-[color:var(--color-surface-light)]/40" aria-hidden />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[color:var(--color-primary)] text-sm font-semibold tracking-widest uppercase mb-3">
            Platform Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[color:var(--color-foreground)]">
            Inventory, incentives & control
          </h2>
          <p className="mt-4 text-lg text-[color:var(--color-text-secondary)] max-w-2xl mx-auto">
            From barcode scanning to fraud-proof rewards — all in one place.
          </p>
        </motion.div>

        <div className="space-y-6">
          {blocks.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, rotate: i % 2 === 0 ? -0.5 : 0.5 }}
              className="flex flex-col sm:flex-row items-start gap-6 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] p-6 sm:p-8 shadow-sm hover:border-[color:var(--color-primary)]/40 hover:shadow-lg transition-transform transition-colors"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[color:var(--color-primary)]/15 flex items-center justify-center text-[color:var(--color-primary)]">
                <b.icon size={28} strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[color:var(--color-foreground)]">{b.title}</h3>
                <p className="mt-2 text-[color:var(--color-text-secondary)]">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="relative max-w-md w-full rounded-3xl border border-[color:var(--color-border)] bg-[radial-gradient(circle_at_top,var(--color-primary)/18,transparent_65%)] p-4 sm:p-6 shadow-xl"
          >
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[color:var(--color-primary)]/35 via-transparent to-[color:var(--color-accent)]/35 opacity-80 pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden bg-[color:var(--color-surface)]">
              <Image
                src="/file.svg"
                alt="Incentive rules and offers"
                width={640}
                height={360}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
