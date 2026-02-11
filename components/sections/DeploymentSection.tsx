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
  Calendar, 
  FileCheck,
  Check,
  Sparkles,
  Shield,
  ArrowRight
} from "lucide-react";

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
      className="relative py-15 sm:py-15 lg:py-15 overflow-hidden bg-gradient-to-t from-[#cdfa8d] via-[#086729] to-[#084842]"
    >
      {/* Premium overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#ffffff_0%,_transparent_50%)] opacity-10" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#fef08a_0%,_transparent_50%)] opacity-15" aria-hidden />

      {/* Grid pattern */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0  bg-center [mask-image:linear-gradient(180deg,transparent,white_20%,white_80%,transparent)] opacity-[0.05]"
        aria-hidden
      />

      {/* Animated gradient orbs */}
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
        className="absolute top-1/4 -left-32 w-80 h-80 bg-gradient-to-br from-lime-300 to-emerald-400 rounded-full blur-[100px]"
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
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-teal-300 to-cyan-400 rounded-full blur-[120px]"
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-400/20 border border-lime-300/40 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400"></span>
            </span>
            <span className="text-white text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Deployment and Licensing
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-bold tracking-tight mb-6"
          >
            <span className="text-white">White-label platform, </span>
            <span className="bg-gradient-to-r from-lime-200 via-yellow-200 to-lime-200 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              your brand
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto"
          >
            Web portals, mobile apps, and full support — ready in days.
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
                <div className="relative flex items-center gap-4 rounded-2xl border border-lime-400/30 bg-emerald-900/80 px-6 py-5 transition-all duration-300 hover:border-lime-300/60 hover:bg-emerald-800/80 shadow-lg shadow-black/20">
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-lime-400/10 via-transparent to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Icon */}
                  <div className="relative flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-lime-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-lime-500/30 group-hover:scale-110 transition-transform duration-300">
                    <listItem.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Text */}
                  <span className="relative flex-1 font-semibold text-white group-hover:text-lime-100 transition-colors duration-300">
                    {listItem.text}
                  </span>

                  {/* Check */}
                  <div className="relative flex-shrink-0 w-7 h-7 rounded-full bg-lime-500/30 flex items-center justify-center">
                    <Check className="w-4 h-4 text-lime-300" />
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-lime-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
              className="relative rounded-3xl border border-lime-400/30 bg-emerald-900/80 p-6 sm:p-8 overflow-hidden shadow-xl shadow-black/30"
            >
              {/* Glow */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-lime-400/20 via-transparent to-teal-400/20 opacity-60" />
              
              <div className="relative">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5 text-lime-300" />
                  <p className="text-sm font-semibold text-white uppercase tracking-wide">Add-ons*</p>
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
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-teal-900/60 border border-lime-400/20 hover:border-lime-400/40 hover:bg-teal-800/60 transition-all duration-300"
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
              className="relative rounded-3xl border border-lime-400/40 bg-gradient-to-br from-emerald-800/90 to-teal-900/90 p-6 sm:p-8 overflow-hidden shadow-xl shadow-black/30"
            >
              {/* Decorative blurs */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-lime-400/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-teal-400/20 rounded-full blur-2xl" />

              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-lime-400 to-emerald-500 shadow-lg shadow-lime-500/40 mb-6">
                  <Shield className="w-7 h-7 text-white" />
                </div>

                <p className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-6">
                  You control the{" "}
                  <span className="bg-gradient-to-r from-lime-200 to-yellow-200 bg-clip-text text-transparent">
                    brand
                  </span>
                  .
                  <br />
                  We protect the{" "}
                  <span className="bg-gradient-to-r from-teal-200 to-cyan-200 bg-clip-text text-transparent">
                    platform
                  </span>
                  .
                </p>

                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-lime-400 to-emerald-500 text-white font-semibold shadow-xl shadow-lime-500/30 hover:shadow-lime-500/50 hover:scale-105 transition-all duration-300"
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