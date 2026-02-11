// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const problems = [
//   { title: "No Real-Time Visibility", desc: "Stock, orders, dispatch, and retailer activity are always delayed" },
//   { title: "Slow & Messy Fulfillment", desc: "Wrong items, partial dispatches, high returns" },
//   { title: "Poor Route & Beat Execution", desc: "Missed outlets and unreliable field reporting" },
//   { title: "Weak Analytics & Forecasting", desc: "Decisions driven by gut feel, not data" },
//   { title: "Collections & Credit Delays", desc: "Manual credit control and reactive follow-ups" },
//   { title: "Loyalty & Rewards Leakage", desc: "Fraud, duplicate claims, delayed redemptions" },
//   { title: "Distributor & Retailer Chaos", desc: "No standard onboarding, targets, or tracking" },
//   { title: "Uncontrolled Pricing & Schemes", desc: "Multiple price lists, misapplied discounts, margin leakage" },
//   { title: "Inventory Mismatch & Stockouts", desc: "Dead stock at some depots, shortages at others" },
//   { title: "Manual Order Capture", desc: "WhatsApp, calls, and Excel cause errors and follow-ups" },
//   { title: "Unmanaged Inter-Warehouse Transfers", desc: "Stock moves without system records" },
//   { title: "No Secondary Sales Visibility", desc: "Primary sales visible, real demand hidden" },
// ];

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.06, delayChildren: 0.2 },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0 },
// };

// export default function ProblemSection() {
//   const ref = useRef<HTMLElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });
//   const backgroundY = useTransform(scrollYProgress, [0, 0.3], ["0%", "15%"]);

//   return (
//     <section
//       ref={ref}
//       id="problem"
//       className="relative py-24 sm:py-32 overflow-hidden bg-[color:var(--color-surface)]"
//     >
//       <motion.div
//         style={{ y: backgroundY }}
//         className="absolute inset-0 bg-[color:var(--color-surface-light)]/30"
//         aria-hidden
//       />
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-80px" }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <p className="text-[color:var(--color-primary)] text-sm font-semibold tracking-widest uppercase mb-3">
//             The Problem
//           </p>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[color:var(--color-foreground)]">
//             Distribution without visibility
//           </h2>
//           <p className="mt-4 text-lg text-[color:var(--color-text-secondary)] max-w-2xl mx-auto">
//             Manual processes, fragmented data, and lack of real-time control hold growth back.
//           </p>
//         </motion.div>

//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-60px" }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
//         >
//           {problems.map((p, i) => (
//             <motion.div
//               key={i}
//               variants={item}
//               transition={{ duration: 0.4 }}
//               className="group rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] p-6 shadow-sm transition hover:border-[color:var(--color-primary)]/40 hover:shadow-md"
//             >
//               <h3 className="font-semibold text-[color:var(--color-foreground)] group-hover:text-[color:var(--color-accent)] transition">
//                 {p.title}
//               </h3>
//               <p className="mt-2 text-sm text-[color:var(--color-text-secondary)]">{p.desc}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const problems = [
  { 
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "No Real-Time Visibility", 
    desc: "Stock, orders, dispatch, and retailer activity are always delayed",
  },
  { 
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "Slow & Messy Fulfillment", 
    desc: "Wrong items, partial dispatches, high returns",
  },
  { 
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "Poor Route & Beat Execution", 
    desc: "Missed outlets and unreliable field reporting",
  },
  { 
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Weak Analytics & Forecasting", 
    desc: "Decisions driven by gut feel, not data",
  },
  { 
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Collections & Credit Delays", 
    desc: "Manual credit control and reactive follow-ups",
  },
  { 
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
    title: "Loyalty & Rewards Leakage", 
    desc: "Fraud, duplicate claims, delayed redemptions",
  },
  { 
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Distributor & Retailer Chaos", 
    desc: "No standard onboarding, targets, or tracking",
  },
  { 
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    title: "Uncontrolled Pricing & Schemes", 
    desc: "Multiple price lists, misapplied discounts, margin leakage",
  },
  { 
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Inventory Mismatch & Stockouts", 
    desc: "Dead stock at some depots, shortages at others",
  },
  { 
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Manual Order Capture", 
    desc: "WhatsApp, calls, and Excel cause errors and follow-ups",
  },
  { 
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Unmanaged Inter-Warehouse Transfers", 
    desc: "Stock moves without system records",
  },
  { 
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
      </svg>
    ),
    title: "No Secondary Sales Visibility", 
    desc: "Primary sales visible, real demand hidden",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.08, 
      delayChildren: 0.3 
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15
    }
  },
};

export default function ProblemSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={ref}
      id="problem"
      className="relative py-20 sm:py-15 lg:py-20 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Background effects matching hero - using CSS variables */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--color-primary)_0%,_transparent_60%)] opacity-15" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--color-accent)_0%,_transparent_50%)] opacity-10" aria-hidden />
      
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0  bg-center [mask-image:linear-gradient(180deg,transparent,white_20%,white_80%,transparent)] opacity-[0.03]"
        aria-hidden
      />

      {/* Animated gradient orbs - using theme colors */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 -right-32 w-80 h-80 bg-[color:var(--color-primary)] rounded-full blur-[120px]"
        aria-hidden
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 -left-32 w-96 h-96 bg-[color:var(--color-accent)] rounded-full blur-[120px]"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white">Distribution </span>
            <span className="block bg-gradient-to-r from-[color:var(--color-primary)] via-[color:var(--color-accent)] to-[color:var(--color-primary)] bg-clip-text text-transparent leading-[1.1] animate-gradient bg-[length:200%_auto]">
              without visibility
            </span>
          </h2>
          
          <p className="mt-6 text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Manual processes, fragmented data, and lack of real-time control 
            <span className="text-white font-semibold"> cost you millions </span> 
            in lost revenue and efficiency.
          </p>

          
        </motion.div>

        {/* Problem Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
        >
          {problems.map((p, i) => (
            <motion.div
              key={i}
              // variants={item}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.25, ease: "easeOut" }
              }}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 transition-all duration-300 hover:border-[color:var(--color-primary)]/40 hover:bg-white/[0.05]">
                {/* Hover glow effect - using theme colors */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[color:var(--color-primary)]/10 via-transparent to-[color:var(--color-accent)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Icon - using theme colors */}
                <div className="relative mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[color:var(--color-primary)]/20 to-[color:var(--color-accent)]/20 border border-white/10 text-[color:var(--color-primary)] group-hover:border-[color:var(--color-primary)]/40 group-hover:scale-110 transition-all duration-300">
                  {p.icon}
                </div>

                {/* Content */}
                <h3 className="relative font-semibold text-lg text-white group-hover:text-[color:var(--color-primary)] transition-colors duration-300 mb-2">
                  {p.title}
                </h3>
                
                <p className="relative text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                  {p.desc}
                </p>

                {/* Bottom accent line - using theme colors */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[color:var(--color-primary)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA - matching hero button style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 lg:mt-24 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-white/[0.03] to-white/[0.06] border border-white/10 backdrop-blur-sm">
            <div className="text-center sm:text-left">
              <p className="text-white font-semibold text-lg">
                Stop losing money to inefficiency
              </p>
              <p className="text-white/50 text-sm mt-1">
                See how Scala solves every challenge above
              </p>
            </div>
            <a
              href="#solution"
              className="group relative inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-semibold bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-accent)] text-white shadow-2xl shadow-[color:var(--color-primary)]/50 transition-all hover:shadow-[color:var(--color-primary)]/70 hover:scale-105 active:scale-100"
            >
              <span className="relative z-10">See The Solution</span>
              <svg 
                className="relative z-10 ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}