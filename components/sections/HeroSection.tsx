// "use client";

// import { useRef } from "react";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";

// export default function HeroSection() {
//   const ref = useRef<HTMLElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
//   const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

//   return (
//     <section
//       ref={ref}
//       id="hero"
//       className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[color:var(--color-foreground)]"
//     >
//       {/* Parallax background layer */}
//       <motion.div
//         style={{ y }}
//         className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-accent)]/20 via-transparent to-[color:var(--color-primary)]/10"
//         aria-hidden
//       />
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--color-primary)/15%,transparent)]" aria-hidden />

//       <motion.div
//         style={{ opacity }}
//         className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
//       >
//         <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
//           <div className="text-center lg:text-left">
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="text-[color:var(--color-primary)] text-xs sm:text-sm md:text-base font-medium tracking-[0.35em] uppercase mb-4"
//             >
//               Supply Chain Distribution & Incentive Management System
//             </motion.p>
//             <motion.h1
//               initial={{ opacity: 0, y: 24 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.35 }}
//               className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
//             >
//               Grow beyond
//               <br />
//               <span className="text-[color:var(--color-primary)]">boundaries</span>
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-white/80 max-w-xl lg:max-w-md mx-auto lg:mx-0"
//             >
//               Real-time visibility, automated incentives, and built-in fraud control on one unified platform.
//             </motion.p>
//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.8 }}
//               className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
//             >
//               <a
//                 href="#contact"
//                 className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-base font-semibold bg-[color:var(--color-primary)] text-white shadow-lg shadow-[color:var(--color-primary)]/30 transition hover:bg-[color:var(--color-primary-dark)]"
//               >
//                 Request a Demo
//               </a>
//               <span className="text-sm text-white/70">
//                 End-to-end control across distribution, inventory & incentives.
//               </span>
//             </motion.div>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9, y: 30 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
//             className="relative w-full max-w-md mx-auto"
//           >
//             <motion.div
//               animate={{ y: [0, -10, 0], rotate: [-1.5, 1.5, -1.5] }}
//               transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//               className="relative rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-4 sm:p-5 shadow-2xl"
//             >
//               <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[color:var(--color-primary)]/40 via-transparent to-[color:var(--color-accent)]/40 opacity-70 pointer-events-none" />
//               <div className="relative bg-[radial-gradient(circle_at_top,var(--color-primary)/20,transparent_55%)] rounded-2xl p-4 sm:p-6">
//                 <Image
//                   src="/window.svg"
//                   alt="Scala distribution dashboard"
//                   width={640}
//                   height={420}
//                   priority
//                   className="w-full h-auto"
//                 />
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Scroll indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.2 }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2"
//       >
//         <motion.div
//           animate={{ y: [0, 8, 0] }}
//           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//           className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2"
//         >
//           <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }



// "use client";

// import { useRef, useState, useEffect } from "react";
// import Image from "next/image";
// import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
// import { Sparkles, ArrowRight, ChevronDown, Zap, Shield, BarChart3 } from "lucide-react";

// export default function HeroSection() {
//   const ref = useRef<HTMLElement>(null);
//   const [isHovered, setIsHovered] = useState(false);
//   const [activeFeature, setActiveFeature] = useState(0);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   // Enhanced parallax effects
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
//   const yReverse = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
//   const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
//   const rotateX = useTransform(scrollYProgress, [0, 1], [0, 5]);

//   // Spring animations for smoother effects
//   const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
//   const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

//   // Floating animation for particles
//   const floatingAnimation = {
//     y: [0, -20, 0],
//     transition: {
//       duration: 3,
//       repeat: Infinity,
//       ease: "easeInOut",
//     }
//   };

//   // Features array for cycling animation
//   const features = [
//     { icon: <BarChart3 size={20} />, text: "Real-time Analytics", color: "var(--color-primary)" },
//     { icon: <Shield size={20} />, text: "Fraud Detection", color: "var(--color-accent)" },
//     { icon: <Zap size={20} />, text: "Automated Incentives", color: "#10B981" },
//   ];

//   // Rotate through features
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveFeature((prev) => (prev + 1) % features.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       ref={ref}
//       id="hero"
//       className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-[color:var(--color-foreground)] to-gray-900"
//     >
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Gradient mesh background */}
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[color:var(--color-primary)]/10 via-transparent to-transparent" />

//         {/* Animated grid */}
//         <motion.div
//           style={{ y: yReverse }}
//           className="absolute inset-0 opacity-20"
//           aria-hidden
//         >
//           <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />
//         </motion.div>

//         {/* Floating particles */}
//         {[...Array(15)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-[2px] h-[2px] bg-[color:var(--color-primary)] rounded-full"
//             initial={{
//               x: Math.random() * 100 + "vw",
//               y: Math.random() * 100 + "vh",
//             }}
//             animate={{
//               x: `calc(${Math.random() * 100}vw + ${Math.sin(i) * 50}px)`,
//               y: `calc(${Math.random() * 100}vh + ${Math.cos(i) * 50}px)`,
//             }}
//             transition={{
//               duration: 20 + Math.random() * 10,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//             style={{
//               opacity: 0.3 + Math.random() * 0.4,
//               boxShadow: `0 0 ${10 + Math.random() * 20}px ${5 + Math.random() * 10}px var(--color-primary)`,
//             }}
//           />
//         ))}

//         {/* Pulsing orb */}
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.5, 0.3],
//           }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute top-1/4 left-1/4 w-96 h-96 bg-[color:var(--color-primary)]/10 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{
//             scale: [1, 1.3, 1],
//             opacity: [0.2, 0.4, 0.2],
//           }}
//           transition={{
//             duration: 5,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 1,
//           }}
//           className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[color:var(--color-accent)]/10 rounded-full blur-3xl"
//         />
//       </div>

//       {/* Parallax background layers */}
//       <motion.div
//         style={{ y: smoothY, rotateX }}
//         className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-accent)]/15 via-transparent to-[color:var(--color-primary)]/20"
//         aria-hidden
//       />

//       <motion.div
//         style={{ opacity, scale: smoothScale }}
//         className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
//       >
//         <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
//           <div className="text-center lg:text-left">


//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="text-[color:var(--color-primary)] text-xs sm:text-sm md:text-base font-medium tracking-[0.35em] uppercase mb-6"
//             >
//               Supply Chain Distribution & Incentive Management System
//             </motion.p>

//             <div className="relative">
//               <motion.h1
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
//                 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4"
//               >
//                 Grow beyond
//                 <br />
//                 <span className="relative inline-block">
//                   <span className="text-[color:var(--color-primary)] relative z-10">
//                     boundaries
//                   </span>
//                   <motion.span
//                     animate={{ width: ["0%", "100%", "0%"] }}
//                     transition={{ duration: 3, repeat: Infinity, delay: 1 }}
//                     className="absolute bottom-1 left-0 h-1 bg-gradient-to-r from-transparent via-[color:var(--color-primary)] to-transparent"
//                   />
//                 </span>
//               </motion.h1>            
//             </div>

//             {/* Animated feature carousel */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               className="mt-8 flex items-center justify-center lg:justify-start gap-3"
//             >
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeFeature}
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   transition={{ duration: 0.3 }}
//                   className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
//                   style={{ color: features[activeFeature].color }}
//                 >
//                   {features[activeFeature].icon}
//                   <span className="text-sm font-semibold">{features[activeFeature].text}</span>
//                 </motion.div>
//               </AnimatePresence>
//             </motion.div>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.7 }}
//               className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl lg:max-w-lg mx-auto lg:mx-0 leading-relaxed"
//             >
//               Real-time visibility, automated incentives, and built-in fraud control on one unified platform.
//               <span className="block mt-2 text-white/60 text-base">
//                 Transform your supply chain with AI-driven insights and automated workflows.
//               </span>
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.9 }}
//               className="mt-10 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
//             >
//               <motion.a
//                 href="#contact"
//                 className="group relative inline-flex items-center justify-center rounded-xl px-10 py-4 text-lg font-semibold bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-primary-dark)] text-white shadow-2xl shadow-[color:var(--color-primary)]/40 overflow-hidden"
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <motion.div
//                   animate={isHovered ? { x: 5 } : { x: 0 }}
//                   transition={{ type: "spring", stiffness: 400 }}
//                   className="flex items-center gap-2 relative z-10"
//                 >
//                   Request a Demo
//                   <ArrowRight size={20} />
//                 </motion.div>
//                 <motion.div
//                   initial={{ x: "-100%" }}
//                   animate={isHovered ? { x: "100%" } : { x: "-100%" }}
//                   transition={{ duration: 0.6 }}
//                   className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
//                 />
//               </motion.a>

//               <div className="flex items-center gap-4">
//                 <div className="flex -space-x-2">
//                   {[...Array(3)].map((_, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, scale: 0 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ delay: 1 + i * 0.1 }}
//                       className="w-8 h-8 rounded-full border-2 border-white/20 bg-gradient-to-br from-gray-700 to-gray-900"
//                     />
//                   ))}
//                 </div>
//                 <span className="text-sm text-white/70">
//                   Join <span className="font-semibold text-white">500+</span> industry leaders
//                 </span>
//               </div>
//             </motion.div>

//             {/* Stats */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 1.1 }}
//               className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0"
//             >
//               {[
//                 { value: "99%", label: "Accuracy" },
//                 { value: "24/7", label: "Monitoring" },
//                 { value: "50%", label: "Cost Reduce" },
//               ].map((stat, index) => (
//                 <div key={index} className="text-center lg:text-left">
//                   <div className="text-2xl font-bold text-white">{stat.value}</div>
//                   <div className="text-sm text-white/60">{stat.label}</div>
//                 </div>
//               ))}
//             </motion.div>
//           </div>

//           {/* Enhanced dashboard preview */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9, y: 40 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
//             className="relative w-full max-w-xl mx-auto"
//           >
//             {/* Glow effect */}
//             <div className="absolute -inset-4 bg-gradient-to-r from-[color:var(--color-primary)]/30 to-[color:var(--color-accent)]/30 blur-3xl opacity-50 rounded-3xl" />

//             <motion.div
//               animate={{ y: [0, -15, 0] }}
//               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//               className="relative rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl p-6 shadow-2xl"
//               style={{
//                 boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
//               }}
//             >
//               {/* Dashboard header */}
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="flex gap-1">
//                   <div className="w-3 h-3 rounded-full bg-red-500" />
//                   <div className="w-3 h-3 rounded-full bg-yellow-500" />
//                   <div className="w-3 h-3 rounded-full bg-green-500" />
//                 </div>
//                 <div className="h-2 w-24 bg-white/20 rounded-full" />
//                 <div className="ml-auto flex gap-2">
//                   <div className="w-6 h-6 rounded-full bg-white/10" />
//                   <div className="w-6 h-6 rounded-full bg-white/10" />
//                 </div>
//               </div>

//               {/* Animated chart */}
//               <div className="relative h-48 bg-gradient-to-b from-white/5 to-transparent rounded-xl p-4 mb-6">
//                 <div className="absolute inset-4 flex items-end gap-2">
//                   {[30, 60, 45, 80, 65, 90, 70].map((height, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ height: 0 }}
//                       animate={{ height: `${height}%` }}
//                       transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
//                       className="flex-1 bg-gradient-to-t from-[color:var(--color-primary)] to-[color:var(--color-accent)] rounded-t"
//                     />
//                   ))}
//                 </div>
//               </div>

//               {/* Data points */}
//               <div className="grid grid-cols-3 gap-4">
//                 {[
//                   { label: "Sales Growth", value: "+42%" },
//                   { label: "Efficiency", value: "89%" },
//                   { label: "Fraud Alerts", value: "3" },
//                 ].map((item, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 1 + i * 0.2 }}
//                     className="bg-white/5 rounded-xl p-4"
//                   >
//                     <div className="text-2xl font-bold text-white">{item.value}</div>
//                     <div className="text-xs text-white/60">{item.label}</div>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Live indicator */}
//               <motion.div
//                 animate={{ opacity: [1, 0.5, 1] }}
//                 transition={{ duration: 1.5, repeat: Infinity }}
//                 className="absolute -top-2 -right-2 flex items-center gap-1 px-3 py-1 bg-green-500/20 rounded-full backdrop-blur-sm"
//               >
//                 <div className="w-2 h-2 bg-green-500 rounded-full" />
//                 <span className="text-xs text-green-400">LIVE</span>
//               </motion.div>
//             </motion.div>

//             {/* Floating elements around dashboard */}
//             <motion.div
//               className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-[color:var(--color-primary)]/20 to-transparent border border-white/10 backdrop-blur-sm p-4"
//             >
//               <BarChart3 size={24} className="text-white/70" />
//             </motion.div>

//             <motion.div
//               className="absolute -bottom-4 -right-4 w-16 h-16 rounded-xl bg-gradient-to-tr from-[color:var(--color-accent)]/20 to-transparent border border-white/10 backdrop-blur-sm p-3"
//             >
//               <Shield size={20} className="text-white/70" />
//             </motion.div>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Enhanced scroll indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5 }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2"
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//           className="flex flex-col items-center gap-2"
//         >
//           <ChevronDown size={24} className="text-white/60" />
//           <div className="text-sm text-white/40 font-medium">Explore</div>
//         </motion.div>
//       </motion.div>

//       {/* Mouse trail effect (optional) */}
//       <div className="pointer-events-none fixed inset-0 z-0">
//         <div className="absolute w-64 h-64 bg-[color:var(--color-primary)]/5 rounded-full blur-3xl" 
//           style={{ transform: 'translate(var(--mouse-x), var(--mouse-y))' }} />
//       </div>
//     </section>
//   );
// }




// "use client";

// import { useRef } from "react";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";

// export default function HeroSection() {
//   const ref = useRef<HTMLElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

//   return (
//     <section
//       ref={ref}
//       id="hero"
//       className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
//     >
//       {/* Enhanced background layers */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-primary)_0%,_transparent_60%)] opacity-20" aria-hidden />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--color-accent)_0%,_transparent_50%)] opacity-10" aria-hidden />
//       <motion.div
//         style={{ y }}
//         className="absolute inset-0  bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"
//         aria-hidden
//       />

//       {/* Animated gradient orbs */}
//       <motion.div
//         animate={{
//           scale: [1, 1.2, 1],
//           opacity: [0.3, 0.5, 0.3],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute top-1/4 -left-48 w-96 h-96 bg-[color:var(--color-primary)] rounded-full blur-[120px] opacity-30"
//         aria-hidden
//       />
//       <motion.div
//         animate={{
//           scale: [1.2, 1, 1.2],
//           opacity: [0.2, 0.4, 0.2],
//         }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 1,
//         }}
//         className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[color:var(--color-accent)] rounded-full blur-[120px] opacity-20"
//         aria-hidden
//       />

//       <motion.div
//         style={{ opacity, scale }}
//         className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
//       >
//         <div className="grid gap-12 lg:gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-center">
//           {/* Left content */}
//           <div className="text-center lg:text-left space-y-8">
//             {/* Eyebrow */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
//             >
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--color-primary)] opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-[color:var(--color-primary)]"></span>
//               </span>
//               <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wide">
//                 Next-Gen Supply Chain Platform
//               </span>
//             </motion.div>

//             {/* Main headline */}
//             <div className="space-y-4">
//               <motion.h1
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
//               >
//                 <span className="block text-white leading-[1.1]">
//                   Transform your
//                 </span>
//                 <span className="block bg-gradient-to-r from-[color:var(--color-primary)] via-[color:var(--color-accent)] to-[color:var(--color-primary)] bg-clip-text text-transparent leading-[1.1] animate-gradient bg-[length:200%_auto]">
//                   distribution network
//                 </span>
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.4 }}
//                 className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
//               >
//                 Unified platform for{" "}
//                 <span className="text-white font-semibold">real-time visibility</span>,{" "}
//                 <span className="text-white font-semibold">automated incentives</span>, and{" "}
//                 <span className="text-white font-semibold">intelligent fraud control</span>
//               </motion.p>
//             </div>

//             {/* CTAs */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
//             >
//               <a
//                 href="#contact"
//                 className="group relative inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-semibold bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-accent)] text-white shadow-2xl shadow-[color:var(--color-primary)]/50 transition-all hover:shadow-[color:var(--color-primary)]/70 hover:scale-105 active:scale-100"
//               >
//                 <span className="relative z-10">Request Demo</span>
//                 <svg
//                   className="relative z-10 ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M13 7l5 5m0 0l-5 5m5-5H6"
//                   />
//                 </svg>
//               </a>

//               <a
//                 href="#features"
//                 className="group inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-semibold bg-white/5 text-white border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
//               >
//                 Explore Features
//                 <svg
//                   className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </a>
//             </motion.div>

//             {/* Social proof */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//               className="flex flex-wrap items-center gap-6 justify-center lg:justify-start pt-4"
//             >
//               <div className="flex items-center gap-2">
//                 <div className="flex -space-x-2">
//                   {[1, 2, 3, 4].map((i) => (
//                     <div
//                       key={i}
//                       className="w-8 h-8 rounded-full bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] border-2 border-slate-900"
//                     />
//                   ))}
//                 </div>
//                 <span className="text-sm text-white/70">
//                   <span className="font-semibold text-white">500+</span> companies trust us
//                 </span>
//               </div>

//               <div className="h-6 w-px bg-white/20" />

//               <div className="flex items-center gap-1">
//                 {[1, 2, 3, 4, 5].map((i) => (
//                   <svg
//                     key={i}
//                     className="w-5 h-5 text-yellow-400"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                 ))}
//                 <span className="ml-2 text-sm text-white/70">
//                   <span className="font-semibold text-white">4.9</span>/5 rating
//                 </span>
//               </div>
//             </motion.div>
//           </div>

//           {/* Right visual */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8, y: 40 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
//             className="relative w-full max-w-lg mx-auto lg:max-w-none"
//           >
//             {/* Floating elements */}
//             <motion.div
//               animate={{ 
//                 y: [0, -20, 0],
//                 rotate: [0, 5, 0]
//               }}
//               transition={{ 
//                 duration: 6, 
//                 repeat: Infinity, 
//                 ease: "easeInOut" 
//               }}
//               className="absolute -top-8 -left-8 w-20 h-20 bg-[color:var(--color-primary)]/20 rounded-2xl backdrop-blur-xl border border-white/10 flex items-center justify-center"
//             >
//               <svg className="w-10 h-10 text-[color:var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//               </svg>
//             </motion.div>

//             <motion.div
//               animate={{ 
//                 y: [0, 15, 0],
//                 rotate: [0, -5, 0]
//               }}
//               transition={{ 
//                 duration: 8, 
//                 repeat: Infinity, 
//                 ease: "easeInOut",
//                 delay: 1
//               }}
//               className="absolute -bottom-6 -right-6 w-24 h-24 bg-[color:var(--color-accent)]/20 rounded-2xl backdrop-blur-xl border border-white/10 flex items-center justify-center"
//             >
//               <svg className="w-12 h-12 text-[color:var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//               </svg>
//             </motion.div>

//             {/* Main dashboard mockup */}
//             <motion.div
//               animate={{ 
//                 y: [0, -12, 0],
//                 rotateY: [-2, 2, -2],
//                 rotateX: [2, -2, 2]
//               }}
//               transition={{ 
//                 duration: 15, 
//                 repeat: Infinity, 
//                 ease: "easeInOut" 
//               }}
//               className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl p-2 sm:p-3 shadow-2xl shadow-black/40"
//               style={{ transformStyle: "preserve-3d" }}
//             >
//               {/* Glow effect */}
//               <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[color:var(--color-primary)] via-[color:var(--color-accent)] to-[color:var(--color-primary)] opacity-50 blur-2xl animate-gradient bg-[length:200%_auto]" />

//               {/* Inner container */}
//               <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 rounded-2xl p-1 overflow-hidden">
//                 {/* Top bar */}
//                 <div className="flex items-center gap-2 px-4 py-3 bg-white/5 backdrop-blur-sm rounded-t-2xl border-b border-white/10">
//                   <div className="flex gap-1.5">
//                     <div className="w-3 h-3 rounded-full bg-red-500/80" />
//                     <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
//                     <div className="w-3 h-3 rounded-full bg-green-500/80" />
//                   </div>
//                   <div className="flex-1 flex justify-center">
//                     <div className="px-4 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white/60">
//                       scala-dashboard.app
//                     </div>
//                   </div>
//                 </div>

//                 {/* Dashboard content */}
//                 <div className="relative bg-[radial-gradient(ellipse_at_top,var(--color-primary)/15,transparent_60%)] rounded-b-2xl p-4 sm:p-6">
//                   <Image
//                     src="/window.svg"
//                     alt="Scala distribution dashboard interface"
//                     width={800}
//                     height={560}
//                     priority
//                     className="w-full h-auto rounded-lg shadow-2xl"
//                   />

//                   {/* Floating stats */}
//                   <motion.div
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 1, duration: 0.6 }}
//                     className="absolute top-8 -left-4 bg-white/10 backdrop-blur-xl rounded-xl p-3 border border-white/20 shadow-xl"
//                   >
//                     <div className="text-2xl font-bold text-white">98.5%</div>
//                     <div className="text-xs text-white/70">Accuracy</div>
//                   </motion.div>

//                   <motion.div
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 1.2, duration: 0.6 }}
//                     className="absolute bottom-8 -right-4 bg-white/10 backdrop-blur-xl rounded-xl p-3 border border-white/20 shadow-xl"
//                   >
//                     <div className="text-2xl font-bold text-green-400">↑ 234%</div>
//                     <div className="text-xs text-white/70">Efficiency</div>
//                   </motion.div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Enhanced scroll indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.4 }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//           className="flex flex-col items-center gap-2"
//         >
//           <span className="text-xs text-white/50 uppercase tracking-wider">Scroll</span>
//           <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
//             <motion.span 
//               animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
//               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//               className="w-1.5 h-1.5 rounded-full bg-white/70" 
//             />
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }






"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  // Changed scale effect to be more subtle (1 to 0.95 instead of 1 to 0.85)
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Enhanced background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-primary)_0%,_transparent_60%)] opacity-20" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--color-accent)_0%,_transparent_50%)] opacity-10" aria-hidden />
      <motion.div
        style={{ y }}
        className="absolute inset-0  bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"
        aria-hidden
      />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -left-48 w-96 h-96 bg-[color:var(--color-primary)] rounded-full blur-[120px] opacity-30"
        aria-hidden
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[color:var(--color-accent)] rounded-full blur-[120px] opacity-20"
        aria-hidden
      />

      <motion.div
        style={{ opacity, scale }}
        transition={{ ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 will-change-transform"
      >
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--color-primary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[color:var(--color-primary)]"></span>
              </span>
              <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wide">
                Next-Gen Supply Chain Platform
              </span>
            </motion.div>

            {/* Main headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              >
                <span className="block text-white leading-[1.1]">
                  Transform your
                </span>
                <span className="block bg-gradient-to-r from-[color:var(--color-primary)] via-[color:var(--color-accent)] to-[color:var(--color-primary)] bg-clip-text text-transparent leading-[1.1] animate-gradient bg-[length:200%_auto]">
                  distribution network
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Unified platform for{" "}
                <span className="text-white font-semibold">real-time visibility</span>,{" "}
                <span className="text-white font-semibold">automated incentives</span>, and{" "}
                <span className="text-white font-semibold">intelligent fraud control</span>
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-semibold bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-accent)] text-white shadow-2xl shadow-[color:var(--color-primary)]/50 transition-all hover:shadow-[color:var(--color-primary)]/70 hover:scale-105 active:scale-100"
              >
                <span className="relative z-10">Request Demo</span>
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
              </a>

              <a
                href="#features"
                className="group inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-semibold bg-white/5 text-white border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
              >
                Explore Features
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap items-center gap-6 justify-center lg:justify-start pt-4"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] border-2 border-slate-900"
                    />
                  ))}
                </div>
                <span className="text-sm text-white/70">
                  <span className="font-semibold text-white">500+</span> companies trust us
                </span>
              </div>

              <div className="h-6 w-px bg-white/20" />

              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-white/70">
                  <span className="font-semibold text-white">4.9</span>/5 rating
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg mx-auto lg:max-w-none"
          >
            {/* Floating elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            // className="absolute -top-8 -left-8 w-20 h-20 bg-[color:var(--color-primary)]/20 rounded-2xl backdrop-blur-xl border border-white/10 flex items-center justify-center"
            >
              {/* <svg className="w-10 h-10 text-[color:var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg> */}
            </motion.div>

            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            // className="absolute -bottom-6 -right-6 w-24 h-24 bg-[color:var(--color-accent)]/20 rounded-2xl backdrop-blur-xl border border-white/10 flex items-center justify-center"
            >
              {/* <svg className="w-12 h-12 text-[color:var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg> */}
            </motion.div>

            {/* Main dashboard mockup */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotateY: [-2, 2, -2],
                rotateX: [2, -2, 2]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl p-2 sm:p-3 shadow-2xl shadow-black/40"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Glow effect */}
              {/* <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[color:var(--color-primary)] via-[color:var(--color-accent)] to-[color:var(--color-primary)] opacity-50 blur-2xl animate-gradient bg-[length:200%_auto]" /> */}

              {/* Inner container */}
              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 rounded-2xl p-1 overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 backdrop-blur-sm rounded-t-2xl border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>

                </div>

                {/* Dashboard content */}
                <div className="relative bg-[radial-gradient(ellipse_at_top,var(--color-primary)/15,transparent_60%)] rounded-b-2xl p-4 sm:p-6">
                  <Image
                    src="/window.svg"
                    alt="Scala distribution dashboard interface"
                    width={800}
                    height={560}
                    priority
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />

                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/50 uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <motion.span
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-white/70"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}