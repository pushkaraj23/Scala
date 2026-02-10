"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, Smartphone, Palette, Users, Headphones, Calendar, FileCheck } from "lucide-react";

const items = [
  { icon: Globe, text: "White-label ready Web Portals" },
  { icon: Smartphone, text: "2 Branded Mobile Apps (Apple & Google Play)" },
  { icon: Palette, text: "Your brand name, logo, and UI customization*" },
  { icon: Users, text: "Co-branding with Scala" },
  { icon: Headphones, text: "Staff training & round-the-clock tech support" },
  { icon: Calendar, text: "Full onboarding in 7 days*" },
  { icon: FileCheck, text: "D&B Duns & DLT registration assistance for app launch" },
];

const addons = [
  "Annual Maintenance",
  "Product Cataloging",
  "WhatsApp Automation for Branding",
  "Website Development and Digital Marketing",
];

export default function DeploymentSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.5], ["0%", "10%"]);

  return (
    <section
      ref={ref}
      id="deployment"
      className="relative py-24 sm:py-32 overflow-hidden bg-[color:var(--color-accent)]"
    >
      <motion.div style={{ y }} className="absolute inset-0 bg-[color:var(--color-accent-dark)]/30" aria-hidden />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[color:var(--color-primary)] text-sm font-semibold tracking-widest uppercase mb-3">
            Deployment and Licensing
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            White-label platform, your brand
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Web portals, mobile apps, and full support — ready in days.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.06, delayChildren: 0.2 }}
          className="space-y-4 mb-12"
        >
          {items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-4 rounded-xl bg-white/10 backdrop-blur px-5 py-4 text-white font-medium"
            >
              <item.icon size={22} className="text-[color:var(--color-primary)] flex-shrink-0" />
              {item.text}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur p-6 sm:p-8"
        >
          <p className="text-sm font-semibold text-white/90 uppercase tracking-wide mb-3">Add-ons*</p>
          <p className="text-white/80">
            {addons.join(" • ")}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-xl font-semibold text-white"
        >
          You control the brand. We protect the platform.
        </motion.p>
      </div>
    </section>
  );
}
