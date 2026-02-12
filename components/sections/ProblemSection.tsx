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
    title: "Limited Visibility", 
    desc: "No real-time tracking across your distribution network",
  },
  { 
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Low Influencer Engagement", 
    desc: "Engagement rates drop by 60% without automation",
  },
  { 
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "Fraud & Leakage Risks", 
    desc: "8-12% of incentive budget lost to fraud and leakage",
  },
  { 
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "No Real-Time Data", 
    desc: "30-40% slower decision cycles due to delayed insights",
  },
  { 
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: "Manual Processes", 
    desc: "15-25% error rates with manual inventory and incentive handling",
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
      className="relative py-20 sm:py-15 lg:py-20 overflow-hidden bg-gradient-to-b from-[color:var(--color-accent-dark)] via-[color:var(--color-accent-dark)] to-[color:var(--color-accent)]"
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
          <p className="text-[color:var(--color-primary)] text-sm font-semibold tracking-widest uppercase mb-3">
            The Challenge
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white">The Distribution </span>
            <span className="block bg-gradient-to-r from-[color:var(--color-primary)] via-[color:var(--color-accent)] to-[color:var(--color-primary)] bg-clip-text text-transparent leading-[1.1] animate-gradient bg-[length:200%_auto]">
              Dilemma
            </span>
          </h2>
          
          <p className="mt-6 text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Critical pain points in multi-level distribution networks
          </p>

          
        </motion.div>

        {/* Problem Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto"
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
                Industry Impact
              </p>
              <p className="text-white/50 text-sm mt-1">
                Companies with manual distribution systems experience 23% higher operational costs and 35% slower growth compared to automated competitors.
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