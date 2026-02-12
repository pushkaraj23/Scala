// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence, useInView } from "framer-motion";
// import {
//     Quote,
//     Star,
//     ChevronLeft,
//     ChevronRight,
//     Sparkles,
//     Building2,
//     Play,
//     Pause,
// } from "lucide-react";
// import Image from "next/image";

// // Testimonial Data
// const testimonials = [
//     {
//         id: 1,
//         name: "Sarah Johnson",
//         role: "CEO & Founder",
//         company: "TechVision Inc.",
//         image: "/testimonials/person-1.jpg",
//         content:
//             "Working with this team has been an absolute game-changer for our business. Their attention to detail and innovative approach helped us achieve a 300% increase in our online presence. Highly recommended!",
//         rating: 5,
//         featured: true,
//     },
//     {
//         id: 2,
//         name: "Michael Chen",
//         role: "Marketing Director",
//         company: "Global Brands Co.",
//         image: "/testimonials/person-2.jpg",
//         content:
//             "The level of creativity and professionalism exceeded all our expectations. They delivered a stunning brand identity that perfectly captures our vision. Our customers love the new look!",
//         rating: 5,
//         featured: true,
//     },
//     {
//         id: 3,
//         name: "Emily Rodriguez",
//         role: "Product Manager",
//         company: "InnovateTech",
//         image: "/testimonials/person-3.jpg",
//         content:
//             "From concept to execution, the entire process was seamless. The team's expertise in UX design transformed our app into something our users genuinely enjoy using.",
//         rating: 5,
//     },
//     {
//         id: 4,
//         name: "David Thompson",
//         role: "Creative Director",
//         company: "Design Studios",
//         image: "/testimonials/person-4.jpg",
//         content:
//             "As a fellow creative, I have high standards. This team not only met them but surpassed every expectation. Their work speaks for itself – absolutely phenomenal!",
//         rating: 5,
//         featured: true,
//     },
//     {
//         id: 5,
//         name: "Lisa Wang",
//         role: "Startup Founder",
//         company: "NextGen Solutions",
//         image: "/testimonials/person-5.jpg",
//         content:
//             "They understood our vision from day one and brought it to life in ways we couldn't have imagined. The ROI on our new website has been incredible.",
//         rating: 5,
//     },
//     {
//         id: 6,
//         name: "James Morrison",
//         role: "Operations Manager",
//         company: "Enterprise Corp",
//         image: "/testimonials/person-6.jpg",
//         content:
//             "Professional, responsive, and incredibly talented. They delivered our project on time and on budget. We've already started planning our next project together.",
//         rating: 5,
//     },
// ];

// // Star Rating Component
// function StarRating({ rating }: { rating: number }) {
//     return (
//         <div className="flex items-center gap-1">
//             {[...Array(5)].map((_, i) => (
//                 <Star
//                     key={i}
//                     className={`w-4 h-4 ${
//                         i < rating
//                             ? "text-yellow-400 fill-yellow-400"
//                             : "text-gray-300"
//                     }`}
//                 />
//             ))}
//         </div>
//     );
// }

// // Single Testimonial Card
// function TestimonialCard({
//     testimonial,
//     index,
//     variant = "default",
// }: {
//     testimonial: (typeof testimonials)[0];
//     index: number;
//     variant?: "default" | "compact" | "featured";
// }) {
//     const ref = useRef(null);
//     const isInView = useInView(ref, { once: true, margin: "-50px" });

//     if (variant === "featured") {
//         return (
//             <motion.div
//                 ref={ref}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="relative group"
//             >
//                 {/* Gradient Border */}
//                 <div className="absolute -inset-[1px] bg-gradient-to-l from-[#ffffff] via-[#c4ff6b] to-[#73b313] rounded-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

//                 <div className="relative bg-white rounded-3xl p-8 sm:p-10">
//                     {/* Quote Icon */}
//                     <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-l from-[#ffffff] via-[#c4ff6b] to-[#73b313] flex items-center justify-center shadow-lg">
//                         <Quote className="w-6 h-6 text-black" />
//                     </div>

//                     {/* Featured Badge */}
//                     {testimonial.featured && (
//                         <div className="absolute top-6 right-6">
//                             <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-l from-[#c4ff6b] to-[#73b313] text-xs font-bold text-black">
//                                 <Sparkles className="w-3 h-3" />
//                                 Featured
//                             </span>
//                         </div>
//                     )}

//                     {/* Rating */}
//                     <div className="mb-6 pt-4">
//                         <StarRating rating={testimonial.rating} />
//                     </div>

//                     {/* Content */}
//                     <blockquote className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
//                         "{testimonial.content}"
//                     </blockquote>

//                     {/* Author */}
//                     <div className="flex items-center gap-4">
//                         <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gradient-to-l from-[#c4ff6b] to-[#73b313] p-[2px]">
//                             <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
//                                 <span className="text-xl font-bold text-gray-500">
//                                     {testimonial.name.charAt(0)}
//                                 </span>
//                             </div>
//                         </div>
//                         <div>
//                             <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
//                             <p className="text-sm text-gray-500">
//                                 {testimonial.role} at {testimonial.company}
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </motion.div>
//         );
//     }

//     if (variant === "compact") {
//         return (
//             <motion.div
//                 ref={ref}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
//             >
//                 <StarRating rating={testimonial.rating} />
//                 <p className="mt-4 text-gray-600 text-sm line-clamp-3">
//                     "{testimonial.content}"
//                 </p>
//                 <div className="mt-4 flex items-center gap-3">
//                     <div className="w-10 h-10 rounded-full bg-gradient-to-l from-[#c4ff6b] to-[#73b313] flex items-center justify-center text-black font-bold text-sm">
//                         {testimonial.name.charAt(0)}
//                     </div>
//                     <div>
//                         <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
//                         <p className="text-xs text-gray-500">{testimonial.company}</p>
//                     </div>
//                 </div>
//             </motion.div>
//         );
//     }

//     // Default variant
//     return (
//         <motion.div
//             ref={ref}
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
//         >
//             {/* Hover Gradient Border Effect */}
//             <div className="absolute inset-0 rounded-2xl bg-gradient-to-l from-[#ffffff] via-[#c4ff6b] to-[#73b313] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />

//             <div className="flex items-start gap-4 mb-4">
//                 <Quote className="w-8 h-8 text-[#73b313] flex-shrink-0" />
//                 <StarRating rating={testimonial.rating} />
//             </div>

//             <blockquote className="text-gray-700 leading-relaxed mb-6">
//                 "{testimonial.content}"
//             </blockquote>

//             <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
//                 <div className="w-12 h-12 rounded-full bg-gradient-to-l from-[#c4ff6b] to-[#73b313] flex items-center justify-center text-black font-bold">
//                     {testimonial.name.charAt(0)}
//                 </div>
//                 <div>
//                     <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
//                     <p className="text-sm text-gray-500 flex items-center gap-1">
//                         <Building2 className="w-3 h-3" />
//                         {testimonial.role}, {testimonial.company}
//                     </p>
//                 </div>
//             </div>
//         </motion.div>
//     );
// }

// // Carousel Testimonial Component
// function TestimonialCarousel() {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//     useEffect(() => {
//         if (!isAutoPlaying) return;
//         const interval = setInterval(() => {
//             setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//         }, 5000);
//         return () => clearInterval(interval);
//     }, [isAutoPlaying]);

//     const goToPrev = () => {
//         setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//     };

//     const goToNext = () => {
//         setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//     };

//     return (
//         <div className="relative">
//             {/* Main Carousel */}
//             <div className="relative overflow-hidden rounded-3xl">
//                 {/* Gradient Background */}
//                 <div className="absolute inset-0 bg-gradient-to-l from-[#ffffff] via-[#c4ff6b] to-[#73b313]" />

//                 {/* Content */}
//                 <div className="relative px-6 py-12 sm:px-12 sm:py-16 lg:px-20 lg:py-20">
//                     <AnimatePresence mode="wait">
//                         <motion.div
//                             key={currentIndex}
//                             initial={{ opacity: 0, x: 50 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             exit={{ opacity: 0, x: -50 }}
//                             transition={{ duration: 0.5 }}
//                             className="max-w-4xl mx-auto text-center"
//                         >
//                             {/* Quote Icon */}
//                             <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-black/10 backdrop-blur-sm flex items-center justify-center">
//                                 <Quote className="w-8 h-8 text-black" />
//                             </div>

//                             {/* Rating */}
//                             <div className="flex justify-center mb-6">
//                                 <StarRating rating={testimonials[currentIndex].rating} />
//                             </div>

//                             {/* Content */}
//                             <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-black leading-relaxed mb-8">
//                                 "{testimonials[currentIndex].content}"
//                             </blockquote>

//                             {/* Author */}
//                             <div className="flex flex-col items-center">
//                                 <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl font-bold text-[#73b313] mb-4">
//                                     {testimonials[currentIndex].name.charAt(0)}
//                                 </div>
//                                 <h4 className="text-lg font-bold text-black">
//                                     {testimonials[currentIndex].name}
//                                 </h4>
//                                 <p className="text-black/70">
//                                     {testimonials[currentIndex].role} at{" "}
//                                     {testimonials[currentIndex].company}
//                                 </p>
//                             </div>
//                         </motion.div>
//                     </AnimatePresence>

//                     {/* Navigation Arrows */}
//                     <button
//                         onClick={goToPrev}
//                         className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-black hover:bg-white/40 transition-all"
//                     >
//                         <ChevronLeft className="w-6 h-6" />
//                     </button>
//                     <button
//                         onClick={goToNext}
//                         className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-black hover:bg-white/40 transition-all"
//                     >
//                         <ChevronRight className="w-6 h-6" />
//                     </button>
//                 </div>
//             </div>

//             {/* Dots & Controls */}
//             <div className="flex items-center justify-center gap-4 mt-8">
//                 {/* Play/Pause */}
//                 <button
//                     onClick={() => setIsAutoPlaying(!isAutoPlaying)}
//                     className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
//                 >
//                     {isAutoPlaying ? (
//                         <Pause className="w-4 h-4 text-gray-600" />
//                     ) : (
//                         <Play className="w-4 h-4 text-gray-600 ml-0.5" />
//                     )}
//                 </button>

//                 {/* Dots */}
//                 <div className="flex items-center gap-2">
//                     {testimonials.map((_, i) => (
//                         <button
//                             key={i}
//                             onClick={() => setCurrentIndex(i)}
//                             className={`transition-all duration-300 ${
//                                 i === currentIndex
//                                     ? "w-8 h-2 bg-gradient-to-r from-[#73b313] to-[#c4ff6b] rounded-full"
//                                     : "w-2 h-2 bg-gray-300 hover:bg-gray-400 rounded-full"
//                             }`}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// // Marquee/Infinite Scroll Testimonials
// function TestimonialMarquee() {
//     return (
//         <div className="relative overflow-hidden py-8">
//             {/* Gradient Overlays */}
//             <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
//             <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

//             {/* Scrolling Content */}
//             <motion.div
//                 className="flex gap-6"
//                 animate={{ x: [0, -2000] }}
//                 transition={{
//                     duration: 30,
//                     repeat: Infinity,
//                     ease: "linear",
//                 }}
//             >
//                 {[...testimonials, ...testimonials].map((testimonial, index) => (
//                     <div
//                         key={`${testimonial.id}-${index}`}
//                         className="flex-shrink-0 w-[350px]"
//                     >
//                         <TestimonialCard
//                             testimonial={testimonial}
//                             index={0}
//                             variant="compact"
//                         />
//                     </div>
//                 ))}
//             </motion.div>
//         </div>
//     );
// }

// // Main Testimonial Section Component
// export default function TestimonialSection() {
//     const [activeTab, setActiveTab] = useState<"carousel" | "grid" | "marquee">("carousel");

//     return (
//         <section className="py-20 sm:py-28 bg-gray-50">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 {/* Section Header */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6 }}
//                     className="text-center mb-16"
//                 >
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.5 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true }}
//                         className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-l from-[#ffffff] via-[#c4ff6b] to-[#73b313] mb-6"
//                     >
//                         <Sparkles className="w-4 h-4 text-black" />
//                         <span className="text-sm font-semibold text-black">Client Testimonials</span>
//                     </motion.div>

//                     <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
//                         What Our{" "}
//                         <span className="bg-gradient-to-l from-[#73b313] via-[#c4ff6b] to-[#73b313] bg-clip-text text-transparent">
//                             Clients Say
//                         </span>
//                     </h2>

//                     <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                         Don't just take our word for it. Here's what our amazing clients have to
//                         say about working with us.
//                     </p>
//                 </motion.div>

//                 {/* Layout Toggle */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     className="flex justify-center mb-12"
//                 >
//                     <div className="inline-flex items-center gap-1 p-1.5 bg-white rounded-xl shadow-sm border border-gray-200">
//                         {[
//                             { id: "carousel", label: "Carousel" },
//                             { id: "grid", label: "Grid" },
//                             { id: "marquee", label: "Marquee" },
//                         ].map((tab) => (
//                             <button
//                                 key={tab.id}
//                                 onClick={() => setActiveTab(tab.id as typeof activeTab)}
//                                 className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
//                                     activeTab === tab.id
//                                         ? "bg-gradient-to-l from-[#73b313] to-[#c4ff6b] text-black"
//                                         : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
//                                 }`}
//                             >
//                                 {tab.label}
//                             </button>
//                         ))}
//                     </div>
//                 </motion.div>

//                 {/* Content */}
//                 <AnimatePresence mode="wait">
//                     {activeTab === "carousel" && (
//                         <motion.div
//                             key="carousel"
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -20 }}
//                             transition={{ duration: 0.3 }}
//                         >
//                             <TestimonialCarousel />
//                         </motion.div>
//                     )}

//                     {activeTab === "grid" && (
//                         <motion.div
//                             key="grid"
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -20 }}
//                             transition={{ duration: 0.3 }}
//                             className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
//                         >
//                             {testimonials.map((testimonial, index) => (
//                                 <TestimonialCard
//                                     key={testimonial.id}
//                                     testimonial={testimonial}
//                                     index={index}
//                                     variant={testimonial.featured ? "featured" : "default"}
//                                 />
//                             ))}
//                         </motion.div>
//                     )}

//                     {activeTab === "marquee" && (
//                         <motion.div
//                             key="marquee"
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -20 }}
//                             transition={{ duration: 0.3 }}
//                         >
//                             <TestimonialMarquee />
//                         </motion.div>
//                     )}
//                 </AnimatePresence>
//             </div>
//         </section>
//     );
// }

// // Alternative: Single Featured Testimonial with Gradient Background
// export function FeaturedTestimonial() {
//     return (
//         <section className="py-20">
//             <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     className="relative"
//                 >
//                     {/* Glow Effect */}
//                     <div className="absolute -inset-4 bg-gradient-to-l from-[#ffffff] via-[#c4ff6b] to-[#73b313] rounded-[2rem] blur-2xl opacity-30" />

//                     {/* Card */}
//                     <div className="relative bg-gradient-to-l from-[#ffffff] via-[#c4ff6b] to-[#73b313] rounded-3xl p-1">
//                         <div className="bg-white rounded-[1.4rem] p-8 sm:p-12 lg:p-16">
//                             <div className="flex flex-col lg:flex-row items-center gap-10">
//                                 {/* Avatar */}
//                                 <div className="flex-shrink-0">
//                                     <div className="relative">
//                                         <div className="absolute -inset-2 bg-gradient-to-l from-[#ffffff] via-[#c4ff6b] to-[#73b313] rounded-full blur-md opacity-70" />
//                                         <div className="relative w-32 h-32 rounded-full bg-gradient-to-l from-[#c4ff6b] to-[#73b313] p-1">
//                                             <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center">
//                                                 <span className="text-4xl font-bold text-gray-500">S</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Content */}
//                                 <div className="flex-1 text-center lg:text-left">
//                                     <Quote className="w-12 h-12 text-[#73b313] mb-6 mx-auto lg:mx-0" />

//                                     <blockquote className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-8">
//                                         "Working with this team has been an absolute game-changer for our
//                                         business. Their attention to detail and innovative approach helped
//                                         us achieve a 300% increase in our online presence. Highly recommended!"
//                                     </blockquote>

//                                     <div className="flex flex-col sm:flex-row items-center gap-4">
//                                         <div>
//                                             <StarRating rating={5} />
//                                         </div>
//                                         <div className="h-6 w-px bg-gray-200 hidden sm:block" />
//                                         <div>
//                                             <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
//                                             <p className="text-gray-500">CEO & Founder, TechVision Inc.</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// }

// // Alternative: Minimal Testimonial Cards
// export function MinimalTestimonials() {
//     return (
//         <section className="py-20 bg-gradient-to-l from-[#ffffff] via-[#c4ff6b] to-[#73b313]">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 {/* Header */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     className="text-center mb-16"
//                 >
//                     <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
//                         Trusted by Industry Leaders
//                     </h2>
//                     <p className="text-lg text-black/70 max-w-2xl mx-auto">
//                         Join hundreds of satisfied clients who have transformed their business with us.
//                     </p>
//                 </motion.div>

//                 {/* Grid */}
//                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {testimonials.slice(0, 6).map((testimonial, index) => (
//                         <motion.div
//                             key={testimonial.id}
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: index * 0.1 }}
//                             className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 hover:bg-white transition-colors duration-300"
//                         >
//                             <StarRating rating={testimonial.rating} />

//                             <p className="mt-4 text-gray-700 line-clamp-4">
//                                 "{testimonial.content}"
//                             </p>

//                             <div className="mt-6 flex items-center gap-3">
//                                 <div className="w-10 h-10 rounded-full bg-gradient-to-l from-[#c4ff6b] to-[#73b313] flex items-center justify-center text-black font-bold text-sm">
//                                     {testimonial.name.charAt(0)}
//                                 </div>
//                                 <div>
//                                     <p className="font-semibold text-gray-900 text-sm">
//                                         {testimonial.name}
//                                     </p>
//                                     <p className="text-xs text-gray-500">{testimonial.company}</p>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }


"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    Quote,
    Star,
    Sparkles,
    Building2,
} from "lucide-react";

// Testimonial Data
const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "CEO & Founder",
        company: "TechVision Inc.",
        image: "/testimonials/person-1.jpg",
        content:
            "Working with this team has been an absolute game-changer for our business. Their attention to detail and innovative approach helped us achieve a 300% increase in our online presence. Highly recommended!",
        rating: 5,
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Marketing Director",
        company: "Global Brands Co.",
        image: "/testimonials/person-2.jpg",
        content:
            "The level of creativity and professionalism exceeded all our expectations. They delivered a stunning brand identity that perfectly captures our vision. Our customers love the new look!",
        rating: 5,
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Product Manager",
        company: "InnovateTech",
        image: "/testimonials/person-3.jpg",
        content:
            "From concept to execution, the entire process was seamless. The team's expertise in UX design transformed our app into something our users genuinely enjoy using.",
        rating: 5,
    },
    {
        id: 4,
        name: "David Thompson",
        role: "Creative Director",
        company: "Design Studios",
        image: "/testimonials/person-4.jpg",
        content:
            "As a fellow creative, I have high standards. This team not only met them but surpassed every expectation. Their work speaks for itself – absolutely phenomenal!",
        rating: 5,
    },
    {
        id: 5,
        name: "Lisa Wang",
        role: "Startup Founder",
        company: "NextGen Solutions",
        image: "/testimonials/person-5.jpg",
        content:
            "They understood our vision from day one and brought it to life in ways we couldn't have imagined. The ROI on our new website has been incredible.",
        rating: 5,
    },
    {
        id: 6,
        name: "James Morrison",
        role: "Operations Manager",
        company: "Enterprise Corp",
        image: "/testimonials/person-6.jpg",
        content:
            "Professional, responsive, and incredibly talented. They delivered our project on time and on budget. We've already started planning our next project together.",
        rating: 5,
    },
];

// Star Rating Component
function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={`w-4 h-4 ${
                        i < rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                    }`}
                />
            ))}
        </div>
    );
}

// Single Testimonial Card
function TestimonialCard({
    testimonial,
    index,
}: {
    testimonial: (typeof testimonials)[0];
    index: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
            {/* Hover Gradient Border Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-l from-white via-[color:var(--color-primary-soft)] to-[color:var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />

            <div className="flex items-start gap-4 mb-4">
                <Quote className="w-8 h-8 text-[color:var(--color-primary)] flex-shrink-0" />
                <StarRating rating={testimonial.rating} />
            </div>

            <blockquote className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.content}"
            </blockquote>

            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-l from-[color:var(--color-primary-soft)] to-[color:var(--color-primary)] flex items-center justify-center text-black font-bold">
                    {testimonial.name.charAt(0)}
                </div>
                <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                        <Building2 className="w-3 h-3" />
                        {testimonial.role}, {testimonial.company}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

// Main Testimonial Section Component
export default function TestimonialSection() {
    return (
        <section id="testimonials" className="py-20 sm:py-28 bg-[color:var(--color-background)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[color:var(--color-surface)] border border-[color:var(--color-primary)]/30 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-[color:var(--color-primary)]" />
                        <span className="text-sm font-semibold text-[color:var(--color-foreground)]">Client Testimonials</span>
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[color:var(--color-foreground)] mb-6">
                        What Our{" "}
                        <span className="bg-gradient-to-l from-[color:var(--color-primary)] via-[color:var(--color-primary-soft)] to-[color:var(--color-primary)] bg-clip-text text-transparent">
                            Clients Say
                        </span>
                    </h2>

                    <p className="text-xl text-[color:var(--color-text-secondary)] max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our amazing clients have to
                        say about working with us.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}