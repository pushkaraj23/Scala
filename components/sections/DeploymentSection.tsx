// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { Globe, Smartphone, Palette, Users, Headphones, Calendar, FileCheck } from "lucide-react";

// const items = [
//   { icon: Globe, text: "White-label ready Web Portals" },
//   { icon: Smartphone, text: "2 Branded Mobile Apps (Apple & Google Play)" },
//   { icon: Palette, text: "Your brand name, logo, and UI customization*" },
//   { icon: Users, text: "Co-branding with Scala" },
//   { icon: Headphones, text: "Staff training & round-the-clock tech support" },
//   { icon: Calendar, text: "Full onboarding in 7 days*" },
//   { icon: FileCheck, text: "D&B Duns & DLT registration assistance for app launch" },
// ];

// const addons = [
//   "Annual Maintenance",
//   "Product Cataloging",
//   "WhatsApp Automation for Branding",
//   "Website Development and Digital Marketing",
// ];

// export default function DeploymentSection() {
//   const ref = useRef<HTMLElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });
//   const y = useTransform(scrollYProgress, [0, 0.5], ["0%", "10%"]);

//   return (
//     <section
//       ref={ref}
//       id="deployment"
//       className="relative py-24 sm:py-32 overflow-hidden bg-[color:var(--color-accent)]"
//     >
//       <motion.div style={{ y }} className="absolute inset-0 bg-[color:var(--color-accent-dark)]/30" aria-hidden />
//       <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <p className="text-[color:var(--color-primary)] text-sm font-semibold tracking-widest uppercase mb-3">
//             Deployment and Licensing
//           </p>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
//             White-label platform, your brand
//           </h2>
//           <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
//             Web portals, mobile apps, and full support — ready in days.
//           </p>
//         </motion.div>

//         <motion.ul
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ staggerChildren: 0.06, delayChildren: 0.2 }}
//           className="space-y-4 mb-12"
//         >
//           {items.map((item, i) => (
//             <motion.li
//               key={i}
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.06 }}
//               className="flex items-center gap-4 rounded-xl bg-white/10 backdrop-blur px-5 py-4 text-white font-medium"
//             >
//               <item.icon size={22} className="text-[color:var(--color-primary)] flex-shrink-0" />
//               {item.text}
//             </motion.li>
//           ))}
//         </motion.ul>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur p-6 sm:p-8"
//         >
//           <p className="text-sm font-semibold text-white/90 uppercase tracking-wide mb-3">Add-ons*</p>
//           <p className="text-white/80">
//             {addons.join(" • ")}
//           </p>
//         </motion.div>

//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="mt-12 text-center text-xl font-semibold text-white"
//         >
//           You control the brand. We protect the platform.
//         </motion.p>
//       </div>
//     </section>
//   );
// }


"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Users, 
  Headphones, 
  FileCheck,
  Check,
  Sparkles,
  Shield,
  ArrowRight
} from "lucide-react";

const items = [
  { icon: Globe, text: "White-Label Web Portals" },
  { icon: Palette, text: "UI Customization" },
  { icon: Users, text: "Staff Training" },
  { icon: FileCheck, text: "Compliance Assistance" },
  { icon: Smartphone, text: "2 Mobile Apps" },
  { icon: Users, text: "Co-Branding Option" },
  { icon: Headphones, text: "24/7 Tech Support" },
  { icon: FileCheck, text: "D&B Duns Registration" },
  { icon: FileCheck, text: "DLT Registration" },
  { icon: Smartphone, text: "App Store Publishing" },
];

const addons = [
  { icon: "🔧", text: "Annual Maintenance" },
  { icon: "📦", text: "Product Cataloging" },
  { icon: "💬", text: "WhatsApp Automation for Branding" },
  { icon: "🌐", text: "Website Development and Digital Marketing" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20, scale: 0.95 },
  show: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
};

export default function DeploymentSection() {
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
      id="deployment"
      className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-t from-[color:var(--color-surface)] via-[color:var(--color-foreground)] to-[color:var(--color-accent-dark)]"
    >
      {/* Premium overlay effects using theme neutrals */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/10" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-background)_0%,_transparent_50%)] opacity-10" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-primary-soft)_0%,_transparent_50%)] opacity-15" aria-hidden />

      {/* Grid pattern */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0  bg-center [mask-image:linear-gradient(180deg,transparent,white_20%,white_80%,transparent)] opacity-[0.05]"
        aria-hidden
      />

      {/* Animated gradient orbs using palette */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -left-32 w-80 h-80 bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_70%)] rounded-full blur-[100px]"
        aria-hidden
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[radial-gradient(circle_at_center,var(--color-accent)_0%,transparent_70%)] rounded-full blur-[120px]"
        aria-hidden
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5 + i * 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.6,
          }}
          className="absolute w-2 h-2 bg-white/40 rounded-full blur-[1px]"
          style={{
            top: `${12 + i * 10}%`,
            left: `${8 + i * 11}%`,
          }}
          aria-hidden
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-20"
        >
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[color:var(--color-background)]/80 border border-[color:var(--color-primary)]/40 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--color-primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[color:var(--color-primary)]"></span>
            </span>
            <span className="text-foreground text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Implementation
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-bold tracking-tight mb-6"
          >
            <span className="text-white">Deployment, Licensing </span>
            <span className="bg-gradient-to-r from-[color:var(--color-primary-soft)] via-[color:var(--color-primary)] to-[color:var(--color-primary-soft)] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              & Support
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto"
          >
            Complete package for rapid go-live and ongoing success
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8 lg:gap-12">
          {/* Features List */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-4"
          >
            {items.map((listItem, i) => (
              <motion.div
                key={i}
                // variants={item}
                whileHover={{ 
                  x: 8,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                <div className="relative flex items-center gap-4 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-accent-dark)]/90 px-6 py-5 transition-all duration-300 hover:border-[color:var(--color-primary)]/60 hover:bg-[color:var(--color-accent-dark)] shadow-lg shadow-black/30">
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[color:var(--color-primary)]/18 via-transparent to-[color:var(--color-accent)]/18 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Icon */}
                  <div className="relative flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] flex items-center justify-center shadow-lg shadow-[color:var(--color-primary)]/40 group-hover:scale-110 transition-transform duration-300">
                    <listItem.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Text */}
                  <span className="relative flex-1 font-semibold text-white group-hover:text-[color:var(--color-primary-soft)] transition-colors duration-300">
                    {listItem.text}
                  </span>

                  {/* Check */}
                  <div className="relative flex-shrink-0 w-7 h-7 rounded-full bg-[color:var(--color-primary)]/40 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[color:var(--color-background)]" />
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[color:var(--color-primary)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Add-ons Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-accent-dark)]/90 p-6 sm:p-8 overflow-hidden shadow-xl shadow-black/40"
            >
              {/* Glow */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[color:var(--color-primary)]/25 via-transparent to-[color:var(--color-accent)]/25 opacity-70" />
              
              <div className="relative">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5 text-[color:var(--color-primary-soft)]" />
                  <p className="text-sm font-semibold text-white uppercase tracking-wide">Optional Add-Ons</p>
                </div>

                <div className="space-y-3">
                  {addons.map((addon, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[color:var(--color-accent-dark)] border border-[color:var(--color-border)] hover:border-[color:var(--color-primary)]/60 hover:bg-[color:var(--color-accent)]/80 transition-all duration-300"
                    >
                      <span className="text-lg">{addon.icon}</span>
                      <span className="text-white/90 text-sm font-medium">{addon.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Promise Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative rounded-3xl border border-[color:var(--color-border)] bg-gradient-to-br from-[color:var(--color-accent-dark)]/95 to-[color:var(--color-accent)]/90 p-6 sm:p-8 overflow-hidden shadow-xl shadow-black/40"
            >
              {/* Decorative blurs */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-[color:var(--color-primary)]/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-[color:var(--color-accent)]/30 rounded-full blur-2xl" />

              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] shadow-lg shadow-[color:var(--color-primary)]/40 mb-6">
                  <Shield className="w-7 h-7 text-white" />
                </div>

                <p className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-6">
                  You control the{" "}
                  <span className="bg-gradient-to-r from-[color:var(--color-primary-soft)] to-[color:var(--color-primary)] bg-clip-text text-transparent">
                    brand
                  </span>
                  .
                  <br />
                  We protect the{" "}
                  <span className="bg-gradient-to-r from-[color:var(--color-accent)] to-[color:var(--color-primary-soft)] bg-clip-text text-transparent">
                    platform
                  </span>
                  .
                </p>

                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-accent)] text-white font-semibold shadow-xl shadow-[color:var(--color-primary)]/40 hover:shadow-[color:var(--color-primary)]/60 hover:scale-105 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 lg:mt-20 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />
      </div>
    </section>
  );
}