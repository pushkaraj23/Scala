"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
    Target,
    Eye,
    Sparkles,
    Users,
    Award,
    Rocket,
    Heart,
    Shield,
    Zap,
    Globe,
    TrendingUp,
    CheckCircle,
    ArrowRight,
    Linkedin,
    Twitter,
    Mail,
    Star,
    Building2,
    Calendar,
    ChevronRight,
    User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

// Animated Section Wrapper
function AnimatedSection({
    children,
    className = "",
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.section>
    );
}

// Stats Data
const stats = [
    { value: "10+", label: "Years Experience", icon: Calendar },
    { value: "500+", label: "Projects Completed", icon: CheckCircle },
    { value: "150+", label: "Happy Clients", icon: Heart },
    { value: "25+", label: "Team Members", icon: Users },
];

// Values Data
const values = [
    {
        icon: Rocket,
        title: "Innovation",
        description:
            "We constantly push boundaries and embrace cutting-edge technologies to deliver exceptional solutions.",
        gradient: "from-[#73b313] to-[#c4ff6b]",
    },
    {
        icon: Shield,
        title: "Integrity",
        description:
            "We build trust through transparency, honesty, and ethical practices in everything we do.",
        gradient: "from-blue-500 to-cyan-400",
    },
    {
        icon: Heart,
        title: "Passion",
        description:
            "Our love for what we do drives us to exceed expectations and create meaningful impact.",
        gradient: "from-pink-500 to-rose-400",
    },
    {
        icon: Users,
        title: "Collaboration",
        description:
            "We believe in the power of teamwork and partnership to achieve extraordinary results.",
        gradient: "from-purple-500 to-violet-400",
    },
    {
        icon: Zap,
        title: "Excellence",
        description:
            "We strive for perfection in every project, delivering quality that speaks for itself.",
        gradient: "from-amber-500 to-yellow-400",
    },
    {
        icon: Globe,
        title: "Global Vision",
        description:
            "We think globally while acting locally, creating solutions that transcend boundaries.",
        gradient: "from-teal-500 to-emerald-400",
    },
];

// Team Data
const team = [
    {
        name: "Alexander Mitchell",
        role: "CEO & Founder",
        image: "/team/ceo.jpg",
        bio: "Visionary leader with 15+ years in tech innovation",
        social: { linkedin: "#", twitter: "#" },
    },
    {
        name: "Sarah Chen",
        role: "CTO",
        image: "/team/cto.jpg",
        bio: "Tech architect passionate about scalable solutions",
        social: { linkedin: "#", twitter: "#" },
    },
    {
        name: "Marcus Johnson",
        role: "Head of Design",
        image: "/team/design.jpg",
        bio: "Creative mind behind our stunning visual experiences",
        social: { linkedin: "#", twitter: "#" },
    },
    {
        name: "Emily Rodriguez",
        role: "Head of Operations",
        image: "/team/ops.jpg",
        bio: "Operations expert ensuring seamless delivery",
        social: { linkedin: "#", twitter: "#" },
    },
];

// Timeline Data
const timeline = [
    {
        year: "2014",
        title: "The Beginning",
        description: "Founded with a vision to transform digital experiences",
    },
    {
        year: "2016",
        title: "First Major Milestone",
        description: "Reached 50+ clients and expanded our service offerings",
    },
    {
        year: "2018",
        title: "Global Expansion",
        description: "Opened offices in 3 new countries and grew to 50+ team members",
    },
    {
        year: "2020",
        title: "Innovation Award",
        description: "Recognized as industry leader in digital transformation",
    },
    {
        year: "2022",
        title: "New Heights",
        description: "Launched AI-powered solutions and reached 500+ projects",
    },
    {
        year: "2024",
        title: "The Future",
        description: "Continuing to innovate and shape the future of technology",
    },
];

export default function AboutUs() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none">
                <div
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#73b313]/20 via-transparent to-transparent"
                    aria-hidden
                />
                <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#c4ff6b]/10 via-transparent to-transparent"
                    aria-hidden
                />
                {/* Floating Particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-[#73b313]/30 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.3, 0.8, 0.3],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Hero Section */}
            <section ref={heroRef} className="relative flex items-center justify-center py-15 ">
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="relative z-10 max-w-6xl mx-auto px-4 sm:px-5 lg:px-6 text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#73b313]/10 border border-[#73b313]/30 mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-[#c4ff6b]" />
                        <span className="text-sm font-medium text-[#c4ff6b]">About Our Company</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
                    >
                        We Build{" "}
                        <span className="relative">
                            <span className="bg-gradient-to-r from-[#73b313] via-[#c4ff6b] to-[#73b313] bg-clip-text text-transparent">
                                Digital Dreams
                            </span>
                            <motion.span
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#73b313] to-[#c4ff6b] rounded-full"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            />
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl sm:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                    >
                        We are a passionate team of innovators, designers, and developers dedicated to
                        transforming ideas into extraordinary digital experiences that drive growth and inspire
                        change.
                    </motion.p>
                </motion.div>
            </section>

            {/* Stats Section */}
            <AnimatedSection className="relative py-5">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                variants={scaleIn}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[#73b313]/20 to-[#c4ff6b]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 sm:p-8 text-center hover:border-[#73b313]/50 transition-all duration-300">
                                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#73b313] to-[#c4ff6b] flex items-center justify-center">
                                        <stat.icon className="w-7 h-7 text-black" />
                                    </div>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                        className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-2"
                                    >
                                        {stat.value}
                                    </motion.div>
                                    <p className="text-slate-400 font-medium">{stat.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </AnimatedSection>

            {/* Mission & Vision Section */}
            <AnimatedSection className="relative py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

                        {/* Mission */}
                        <motion.div
                            variants={fadeInLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#73b313]/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

                            <div className="relative bg-slate-900/40 backdrop-blur-xl p-8 rounded-3xl border border-slate-800">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c4ff6b] to-[#73b313] flex items-center justify-center">
                                        <Target className="w-8 h-8 text-black" />
                                    </div>

                                    <h2 className="text-3xl sm:text-4xl font-bold">
                                        Our Mission
                                    </h2>
                                </div>


                                <div className="w-20 h-1 bg-gradient-to-r from-[#73b313] to-[#c4ff6b] rounded-full mb-6" />

                                <p className="text-lg text-slate-400 leading-relaxed">
                                    To empower businesses worldwide with innovative digital solutions that drive
                                    growth, enhance user experiences, and create lasting value. We are committed to
                                    pushing the boundaries of technology while maintaining the highest standards of
                                    quality and integrity.
                                </p>

                                <ul className="mt-6 space-y-3">
                                    {[
                                        "Deliver exceptional quality",
                                        "Foster innovation",
                                        "Build lasting partnerships"
                                    ].map((item, i) => (
                                        <motion.li
                                            key={item}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + i * 0.1 }}
                                            className="flex items-center gap-3 text-slate-300"
                                        >
                                            <CheckCircle className="w-5 h-5 text-[#73b313]" />
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            variants={fadeInRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-l from-[#c4ff6b]/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

                            <div className="relative bg-slate-900/40 backdrop-blur-xl p-8 rounded-3xl border border-slate-800">

                                {/* Icon */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c4ff6b] to-[#73b313] flex items-center justify-center">
                                        <Eye className="w-8 h-8 text-black" />
                                    </div>

                                    <h2 className="text-3xl sm:text-4xl font-bold">
                                        Our Vision
                                    </h2>
                                </div>


                                {/* Title */}
                                <div className="w-20 h-1 bg-gradient-to-r from-[#c4ff6b] to-[#73b313] rounded-full mb-6" />

                                <p className="text-lg text-slate-400 leading-relaxed">
                                    To be the global leader in digital transformation, recognized for our innovative
                                    solutions, exceptional talent, and unwavering commitment to client success. We
                                    envision a future where technology seamlessly enhances every aspect of human
                                    experience.
                                </p>

                                <ul className="mt-6 space-y-3">
                                    {[
                                        "Lead industry innovation",
                                        "Global impact",
                                        "Sustainable growth"
                                    ].map((item, i) => (
                                        <motion.li
                                            key={item}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + i * 0.1 }}
                                            className="flex items-center gap-3 text-slate-300"
                                        >
                                            <CheckCircle className="w-5 h-5 text-[#c4ff6b]" />
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>

                            </div>
                        </motion.div>

                    </div>
                </div>
            </AnimatedSection>


            {/* Values Section */}
            <AnimatedSection className="relative py-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#73b313]/10 border border-[#73b313]/30 mb-4">
                            <Star className="w-4 h-4 text-[#c4ff6b]" />
                            <span className="text-sm font-medium text-[#c4ff6b]">What We Stand For</span>
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Core Values</h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            The principles that guide every decision we make and every solution we create
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                variants={fadeInUp}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}
                                />
                                <div className="relative h-full bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 group">

                                    {/* Icon + Title Row */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div
                                            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <value.icon className="w-7 h-7 text-black" />
                                        </div>

                                        <h3 className="text-xl font-bold">
                                            {value.title}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <p className="text-slate-400 leading-relaxed">
                                        {value.description}
                                    </p>

                                </div>

                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </AnimatedSection>

            <AnimatedSection className="relative py-5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#73b313]/10 border border-[#73b313]/30 mb-4">
                            <Calendar className="w-4 h-4 text-[#c4ff6b]" />
                            <span className="text-sm font-medium text-[#c4ff6b]">Our Journey</span>
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Company Timeline</h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            A decade of innovation, growth, and success
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#73b313] via-[#c4ff6b] to-[#73b313]" />

                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex items-center gap-8 mb-12 ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                                    }`}
                            >
                                {/* Dot */}
                                <div className="absolute left-4 sm:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#73b313] to-[#c4ff6b] ring-4 ring-slate-900" />

                                {/* Content */}
                                <div
                                    className={`flex-1 ml-12 sm:ml-0 ${index % 2 === 0 ? "sm:pr-16 sm:text-right" : "sm:pl-16"}`}
                                >
                                    <div className="inline-block">
                                        <span className="inline-block px-3 py-1 rounded-full bg-[#73b313]/10 text-[#c4ff6b] text-sm font-bold mb-2">
                                            {item.year}
                                        </span>
                                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                        <p className="text-slate-400">{item.description}</p>
                                    </div>
                                </div>

                                {/* Spacer for opposite side */}
                                <div className="hidden sm:block flex-1" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Team Section */}
            <AnimatedSection className="relative py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#73b313]/10 border border-[#73b313]/30 mb-4">
                            <Users className="w-4 h-4 text-[#c4ff6b]" />
                            <span className="text-sm font-medium text-[#c4ff6b]">The People Behind</span>
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Meet Our Team</h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Talented individuals united by a passion for excellence
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                variants={fadeInUp}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#73b313]/20 to-[#c4ff6b]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                                <div className="relative bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 text-center hover:border-[#73b313]/50 transition-all duration-300">
                                    {/* Avatar */}
                                    <div className="relative w-28 h-28 mx-auto mb-5">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#73b313] to-[#c4ff6b] rounded-full p-0.5">
                                            <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center">
                                                <User className="w-12 h-12 text-slate-400" />
                                            </div>
                                        </div>
                                        {/* Status Dot */}
                                        <div className="absolute bottom-1 right-1 w-5 h-5 bg-[#73b313] rounded-full border-4 border-slate-800" />
                                    </div>

                                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                    <p className="text-[#c4ff6b] font-medium mb-3">{member.role}</p>
                                    <p className="text-sm text-slate-400 mb-4">{member.bio}</p>

                                    {/* Social Links */}
                                    <div className="flex items-center justify-center gap-3">
                                        <a
                                            href={member.social.linkedin}
                                            className="w-9 h-9 rounded-lg bg-slate-700/50 flex items-center justify-center text-slate-400 hover:bg-[#73b313] hover:text-black transition-all duration-300"
                                        >
                                            <Linkedin className="w-4 h-4" />
                                        </a>
                                        <a
                                            href={member.social.twitter}
                                            className="w-9 h-9 rounded-lg bg-slate-700/50 flex items-center justify-center text-slate-400 hover:bg-[#73b313] hover:text-black transition-all duration-300"
                                        >
                                            <Twitter className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </AnimatedSection>


        </div>
    );
}