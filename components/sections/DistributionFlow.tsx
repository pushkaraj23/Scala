// "use client";

// import { useRef } from "react";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { Factory, Warehouse, Truck, Store, User } from "lucide-react";

// const flow = [
//   { icon: Factory, label: "Manufacturer", sub: "Demand & products with QR tagging" },
//   { icon: Warehouse, label: "Brand Warehouse", sub: "QR-verified inventory" },
//   { icon: Truck, label: "Super Stockist", sub: "Live stock visibility to dealers" },
//   { icon: Store, label: "Dealer", sub: "Orders & sells via platform" },
//   { icon: User, label: "Plumber / Influencer", sub: "Scans for rewards" },
// ];

// export default function DistributionFlow() {
//   const ref = useRef<HTMLElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });
//   const x = useTransform(scrollYProgress, [0.2, 0.6], ["-8%", "8%"]);
//   const glowY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

//   return (
//     <section
//       ref={ref}
//       id="flow"
//       className="relative py-24 sm:py-32 overflow-hidden bg-[color:var(--color-foreground)]"
//     >
//       <motion.div style={{ x }} className="absolute inset-0 bg-[color:var(--color-accent)]/25" aria-hidden />
//       <motion.div
//         style={{ y: glowY }}
//         className="pointer-events-none absolute -right-40 top-1/3 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,var(--color-primary)/35,transparent_70%)] opacity-80"
//         aria-hidden
//       />
//       <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center mb-12">
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center lg:text-left"
//           >
//             <p className="text-[color:var(--color-primary)] text-sm font-semibold tracking-widest uppercase mb-3">
//               End to End Distribution Flow
//             </p>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
//               From manufacturer to last mile
//             </h2>
//             <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto lg:mx-0">
//               Every movement is captured, verified, and visible — from production to plumber.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9, x: 30 }}
//             whileInView={{ opacity: 1, scale: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="relative w-full max-w-md mx-auto"
//           >
//             <motion.div
//               animate={{ y: [0, -12, 0] }}
//               transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//               className="relative rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl p-4 shadow-2xl"
//             >
//               <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[color:var(--color-primary)]/40 via-transparent to-[color:var(--color-accent)]/40 opacity-80" />
//               <div className="relative rounded-2xl overflow-hidden bg-[radial-gradient(circle_at_top,var(--color-primary)/20,transparent_60%)] p-4">
//                 <Image
//                   src="/globe.svg"
//                   alt="Global distribution visibility"
//                   width={640}
//                   height={420}
//                   className="w-full h-auto"
//                 />
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ staggerChildren: 0.12, delayChildren: 0.2 }}
//           className="flex flex-wrap justify-center gap-4 sm:gap-6"
//         >
//           {flow.map((node, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 24, scale: 0.95 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.08 }}
//               className="flex flex-col items-center rounded-2xl border border-white/20 bg-white/5 backdrop-blur p-6 sm:p-8 min-w-[140px] sm:min-w-[160px] hover:bg-white/12 hover:border-[color:var(--color-primary)]/60 hover:-translate-y-1 transition-transform transition-colors"
//             >
//               <div className="w-12 h-12 rounded-xl bg-[color:var(--color-primary)]/20 flex items-center justify-center text-[color:var(--color-primary)] mb-4">
//                 <node.icon size={24} strokeWidth={1.8} />
//               </div>
//               <span className="font-semibold text-white text-center">{node.label}</span>
//               <span className="text-xs text-white/80 text-center mt-1">{node.sub}</span>
//             </motion.div>
//           ))}
//         </motion.div>
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="mt-10 text-center text-white/80 text-sm"
//         >
//           Barcode-driven inventory • Real-time sync • Fraud control
//         </motion.p>
//       </div>
//     </section>
//   );
// }


"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Factory, Warehouse, Truck, Store, User, ArrowRight } from "lucide-react";

const flow = [
  { icon: Factory, label: "Manufacturer", sub: "Demand & products with QR tagging", color: "from-green-600 to-emerald-600" },
  { icon: Warehouse, label: "Brand Warehouse", sub: "QR-verified inventory", color: "from-lime-600 to-green-600" },
  { icon: Truck, label: "Super Stockist", sub: "Live stock visibility to dealers", color: "from-emerald-600 to-teal-600" },
  { icon: Store, label: "Dealer", sub: "Orders & sells via platform", color: "from-green-600 to-lime-600" },
  { icon: User, label: "Plumber / Influencer", sub: "Scans for rewards", color: "from-lime-600 to-yellow-500" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  },
};

export default function DistributionFlow() {
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
      id="flow"
      className="relative py-15 sm:py-15 lg:py-15 overflow-hidden bg-gradient-to-l from-[#ffffff] via-[#c4ff6b] to-[#73b313]"
    >
      {/* Premium gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/30" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#a3e635_0%,_transparent_50%)] opacity-30" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#fef08a_0%,_transparent_50%)] opacity-40" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#bef264_0%,_transparent_50%)] opacity-20" aria-hidden />

      {/* Subtle texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noise)"/%3E%3C/svg%3E")' 
        }} 
        aria-hidden 
      />

      {/* Grid pattern */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0  bg-center [mask-image:linear-gradient(180deg,transparent,white_20%,white_80%,transparent)] opacity-[0.04]"
        aria-hidden
      />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -left-32 w-80 h-80 bg-gradient-to-br from-lime-300 to-green-400 rounded-full blur-[100px]"
        aria-hidden
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-yellow-200 to-lime-300 rounded-full blur-[120px]"
        aria-hidden
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-green-300 to-emerald-400 rounded-full blur-[150px]"
        aria-hidden
      />

      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -50, 0],
            x: [0, 25, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 5 + i * 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
          className="absolute w-2 h-2 bg-white/70 rounded-full blur-[1px]"
          style={{
            top: `${10 + i * 8}%`,
            left: `${5 + i * 10}%`,
          }}
          aria-hidden
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-green-300/50 backdrop-blur-sm shadow-lg shadow-green-500/10 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
              </span>
              <span className="text-green-800 text-xs sm:text-sm font-semibold tracking-wide uppercase">
                End to End Distribution Flow
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              <span className="text-gray-900">From manufacturer </span>
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-lime-600 bg-clip-text text-transparent">
                to last mile
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg sm:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Every movement is captured, verified, and visible — from production to plumber.
            </motion.p>

            {/* Stats row */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-8 justify-center lg:justify-start"
            >
              {[
                { value: "100%", label: "Visibility" },
                { value: "Real-time", label: "Tracking" },
                { value: "Zero", label: "Leakage" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div> */}
          </motion.div>

          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-lg mx-auto"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-3xl border border-white/60 bg-white/50 backdrop-blur-xl p-3 shadow-2xl shadow-green-500/20"
            >
              {/* Glow border */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-green-400/50 via-transparent to-lime-400/50 opacity-80" />
              
              {/* Inner container */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/80 to-green-50/80 p-1">
                {/* Top bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-white/60 backdrop-blur-sm rounded-t-xl border-b border-green-100">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-4 py-1 rounded-lg bg-green-50 border border-green-200 text-xs text-green-700 font-medium">
                      scala-flow.app
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative bg-gradient-to-br from-green-50/50 to-lime-50/50 rounded-b-xl p-4 sm:p-6">
                  <Image
                    src="/globe.svg"
                    alt="Global distribution visibility"
                    width={640}
                    height={420}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              
            </motion.div>
          </motion.div>
        </div>

        {/* Flow Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-200 via-lime-300 to-yellow-200 rounded-full -translate-y-1/2 z-0" />
          
          <div className="relative z-10 flex flex-wrap justify-center gap-4 lg:gap-0 lg:grid lg:grid-cols-5">
            {flow.map((node, i) => (
              <motion.div
                key={i}
                // variants={item}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative flex flex-col items-center"
              >
                {/* Arrow connector (hidden on mobile, visible on lg) */}
                {i < flow.length - 1 && (
                  <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-6 h-6 text-green-500" />
                    </motion.div>
                  </div>
                )}

                <div className="relative rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl p-6 sm:p-8 min-w-[160px] sm:min-w-[180px] transition-all duration-300 hover:bg-white/90 hover:border-green-300 hover:shadow-2xl hover:shadow-green-500/20 group-hover:border-green-400">
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-100/50 via-transparent to-lime-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Step number */}
                  {/* <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    {i + 1}
                  </div> */}

                  {/* Icon */}
                  <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${node.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <node.icon size={28} strokeWidth={1.8} />
                  </div>

                  {/* Content */}
                  <h3 className="relative font-bold text-gray-900 text-center group-hover:text-green-700 transition-colors duration-300">
                    {node.label}
                  </h3>
                  <p className="relative text-xs text-gray-600 text-center mt-2 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {node.sub}
                  </p>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 lg:mt-20"
        >
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {[
              { icon: "📦", text: "Barcode-driven inventory" },
              { icon: "⚡", text: "Real-time sync" },
              { icon: "🛡️", text: "Fraud control" },
              { icon: "📊", text: "Analytics dashboard" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/70 border border-green-200/50 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-green-300 transition-all duration-300"
              >
                <span className="text-xl">{feature.icon}</span>
                <span className="text-sm font-medium text-gray-800">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="#demo"
            className="group relative inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-semibold bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-2xl shadow-green-500/30 transition-all hover:shadow-green-500/50 hover:scale-105 active:scale-100"
          >
            <span className="relative z-10">See It In Action</span>
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
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}