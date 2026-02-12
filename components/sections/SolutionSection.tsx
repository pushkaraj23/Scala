// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// export default function SolutionSection() {
//   const ref = useRef<HTMLElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });
//   const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.98, 1]);
//   const opacity = useTransform(scrollYProgress, [0.1, 0.35], [0.7, 1]);

//   return (
//     <section
//       ref={ref}
//       id="solution"
//       className="relative py-24 sm:py-32 overflow-hidden bg-[color:var(--color-surface)]"
//     >
//       <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-background)] to-[color:var(--color-surface)]" aria-hidden />
//       <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           style={{ scale, opacity }}
//           className="text-center"
//         >
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-[color:var(--color-primary)] text-sm font-semibold tracking-widest uppercase mb-4"
//           >
//             The Solution
//           </motion.p>
//           <motion.h2
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="text-3xl sm:text-4xl md:text-5xl font-bold text-[color:var(--color-foreground)]"
//           >
//             A unified platform
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="mt-6 text-xl text-[color:var(--color-text-secondary)] max-w-3xl mx-auto"
//           >
//             Manage distribution, inventory, and incentives with real-time visibility and built-in fraud control.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.35 }}
//             className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-[color:var(--color-primary)]/10 border border-[color:var(--color-primary)]/30 px-6 py-4"
//           >
//             <span className="text-[color:var(--color-foreground)] font-semibold">
//               End-to-end visibility • Automated incentives • One platform
//             </span>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

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
      title: "Real-time Tracking",
      description: "Monitor every transaction and movement across your entire distribution network instantly"
    },
    {
      icon: "🛡️",
      title: "Fraud Prevention",
      description: "AI-powered fraud detection system that protects your revenue and brand reputation"
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description: "Deep insights into performance metrics, trends, and predictive forecasting"
    },
    {
      icon: "🤝",
      title: "Partner Management",
      description: "Streamline relationships with distributors, retailers, and channel partners"
    },
    {
      icon: "💰",
      title: "Smart Incentives",
      description: "Automated reward distribution based on performance and achievement metrics"
    },
    {
      icon: "🔄",
      title: "Seamless Integration",
      description: "Connect with your existing ERP, CRM, and business systems effortlessly"
    }
  ];

  const stats = [
    { value: "45%", label: "Reduction in fraud" },
    { value: "3x", label: "Faster settlements" },
    { value: "99.9%", label: "Platform uptime" },
    { value: "60%", label: "Cost savings" }
  ];

  return (
    <section
      ref={ref}
      id="solution"
      className="relative min-h-screen py-24 sm:py-32 overflow-hidden"
    >
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#ffffff] via-[#aff840] to-[#6cb400]" />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6cb400]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#aff840]/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-[#aff840]/15 rounded-full blur-2xl animate-pulse delay-500" />
      
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-lime-400/30 backdrop-blur-sm shadow-lg shadow-lime-500/10 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-600"></span>
            </span>
            <span className="text-lime-800 text-xs sm:text-sm font-semibold tracking-wide uppercase">
              The Solution
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 drop-shadow-sm"
          >
            A unified platform for
            <span className="block mt-2 bg-gradient-to-r from-[#6cb400] to-[#4a8200] bg-clip-text text-transparent">
              modern distribution
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto drop-shadow-sm"
          >
            Manage distribution, inventory, and incentives with real-time visibility and built-in fraud control. 
            Transform your supply chain with intelligent automation and data-driven insights.
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
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50"
              >
                <div className="text-3xl font-bold text-[#6cb400]">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
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
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
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
            className="mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="px-8 py-4 bg-[#6cb400] text-white font-semibold rounded-full hover:bg-[#5ca300] transition-colors shadow-lg hover:shadow-xl">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-900 font-semibold rounded-full hover:bg-white transition-colors shadow-lg hover:shadow-xl border border-gray-200">
              Watch Demo
            </button>
          </motion.div>

          {/* Bottom Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="mt-12 inline-flex items-center gap-2 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-[#6cb400]/30 px-6 py-4 shadow-lg"
          >
            <span className="text-gray-900 font-semibold">
              End-to-end visibility • Automated incentives • One platform
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}