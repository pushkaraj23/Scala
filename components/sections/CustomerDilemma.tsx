// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const dilemmas = [
//   "Limited visibility across multi-level distribution",
//   "No real-time last-mile sales data",
//   "Low influencer engagement",
//   "Manual inventory, order, and incentive processes",
//   "Incentive leakage and fraud risks",
// ];

// export default function CustomerDilemma() {
//   const ref = useRef<HTMLElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });
//   const x = useTransform(scrollYProgress, [0, 0.5], ["-5%", "5%"]);

//   return (
//     <section
//       ref={ref}
//       id="dilemma"
//       className="relative py-24 sm:py-32 overflow-hidden bg-[color:var(--color-foreground)]"
//     >
//       <motion.div style={{ x }} className="absolute inset-0 bg-[color:var(--color-accent)]/10" aria-hidden />
//       <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-[color:var(--color-primary)] text-sm font-semibold tracking-widest uppercase mb-4"
//         >
//           The Customer&apos;s Dilemma
//         </motion.p>
//         <motion.h2
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.1 }}
//           className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12"
//         >
//           When growth is held back by legacy processes
//         </motion.h2>
//         <motion.ul
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
//           className="space-y-4"
//         >
//           {dilemmas.map((d, i) => (
//             <motion.li
//               key={i}
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 * i }}
//               className="text-lg sm:text-xl text-white/85 font-medium"
//             >
//               {d}
//             </motion.li>
//           ))}
//         </motion.ul>
//       </div>
//     </section>
//   );
// }


"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const dilemmas = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Limited visibility",
    desc: "across multi-level distribution networks"
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "No real-time data",
    desc: "on last-mile sales and market demand"
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Low engagement",
    desc: "from distributors, retailers & influencers"
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: "Manual processes",
    desc: "for inventory, orders, and incentives"
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "Revenue leakage",
    desc: "through incentive fraud and scheme misuse"
  },
];

export default function CustomerDilemma() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

  return (
    <section
      ref={ref}
      id="dilemma"
      className="relative py-15 sm:py-15 lg:py-15 overflow-hidden bg-gradient-to-l from-[#ffffff] via-[#aff840] to-[#6cb400]"
    >
      {/* Premium gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/20" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#a3e635_0%,_transparent_50%)] opacity-30" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#fef08a_0%,_transparent_50%)] opacity-40" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#bef264_0%,_transparent_40%)] opacity-20" aria-hidden />
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noise)"/%3E%3C/svg%3E")' }} aria-hidden />
      
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0  bg-center [mask-image:linear-gradient(180deg,transparent,white_30%,white_70%,transparent)] opacity-[0.05]"
        aria-hidden
      />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-lime-300 to-green-400 rounded-full blur-[100px]"
        aria-hidden
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-yellow-200 to-lime-300 rounded-full blur-[100px]"
        aria-hidden
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-green-300 to-lime-400 rounded-full blur-[120px]"
        aria-hidden
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6 + i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1,
          }}
          className="absolute w-3 h-3 bg-white/60 rounded-full blur-sm"
          style={{
            top: `${15 + i * 10}%`,
            left: `${8 + i * 12}%`,
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
          className="text-center mb-16"
        >
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-lime-400/30 backdrop-blur-sm shadow-lg shadow-lime-500/10 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-600"></span>
            </span>
            <span className="text-lime-800 text-xs sm:text-sm font-semibold tracking-wide uppercase">
              The Core Dilemma
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="text-gray-900">When growth is </span>
            <span className="bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
              held back
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Legacy processes and disconnected systems create a perfect storm of inefficiency
          </motion.p>
        </motion.div>

        {/* Dilemma Cards - Bento Grid Style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          {/* Large featured card */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
            className="md:col-span-2 lg:col-span-1 lg:row-span-2 group relative"
          >
            <div className="h-full rounded-3xl border border-white/50 bg-white/70 backdrop-blur-xl p-8 lg:p-10 shadow-2xl shadow-lime-500/10">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-lime-100/50 via-transparent to-green-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-lime-500 to-green-600 shadow-lg shadow-lime-500/30">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    The Breaking Point
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Traditional distribution systems weren&apos;t built for today&apos;s speed and scale. 
                    As networks grow, manual processes multiply exponentially, creating blind spots 
                    that cost millions in lost revenue and opportunities.
                  </p>
                </div>

                <div className="pt-4 border-t border-lime-200/50">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-bold bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-transparent">87%</div>
                    <div className="text-sm text-gray-600">of companies struggle with distribution visibility</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Smaller dilemma cards */}
          {dilemmas.map((dilemma, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative"
            >
              <div className="h-full rounded-2xl border border-white/50 bg-white/60 backdrop-blur-xl p-6 transition-all duration-300 hover:border-lime-400/50 hover:bg-white/80 shadow-lg shadow-lime-500/5 hover:shadow-xl hover:shadow-lime-500/10">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-lime-50/50 via-transparent to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-lime-100 to-green-100 border border-lime-200/50 text-lime-600 group-hover:scale-110 group-hover:from-lime-200 group-hover:to-green-200 transition-all duration-300">
                    {dilemma.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-lime-700 transition-colors duration-300 mb-1">
                      {dilemma.title}
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {dilemma.desc}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-lime-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom insight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/70 border border-amber-300/50 backdrop-blur-sm shadow-lg">
            <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-amber-800 text-sm font-medium">
              Every day without action costs ₹6.3 lakhs in lost opportunities
            </span>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 text-center"
        >
          <a
            href="#solution"
            className="group relative inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-semibold bg-gradient-to-r from-lime-600 to-green-600 text-white shadow-2xl shadow-lime-500/30 transition-all hover:shadow-lime-500/50 hover:scale-105 active:scale-100"
          >
            <span className="relative z-10">Discover The Solution</span>
            <svg
              className="relative z-10 ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-lime-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}