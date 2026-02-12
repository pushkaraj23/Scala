// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
// import { submitEnquiry } from "@/lib/firestore";

// export default function ContactSection() {
//   const router = useRouter();
//   const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
//   const [errorMessage, setErrorMessage] = useState("");

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const formData = new FormData(form);
//     const name = (formData.get("name") as string)?.trim();
//     const email = (formData.get("email") as string)?.trim();
//     const company = (formData.get("company") as string)?.trim() || undefined;
//     const phone = (formData.get("phone") as string)?.trim() || undefined;
//     const message = (formData.get("message") as string)?.trim();

//     if (!name || !email || !message) {
//       setStatus("error");
//       setErrorMessage("Please fill in name, email, and message.");
//       return;
//     }

//     setStatus("loading");
//     setErrorMessage("");

//     try {
//       await submitEnquiry({ name, email, company, phone, message });
//       setStatus("success");
//       router.push("/thank-you");
//     } catch (err) {
//       setStatus("error");
//       setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
//     }
//   }

//   return (
//     <section
//       id="contact"
//       className="relative py-24 sm:py-32 overflow-hidden bg-[color:var(--color-surface)]"
//     >
//       <div className="absolute inset-0 bg-[color:var(--color-surface-light)]/30" aria-hidden />
//       <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
//           {/* Left: Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <div>
//               <p className="text-[color:var(--color-primary)] text-sm font-semibold tracking-widest uppercase mb-3">
//                 Our Contact
//               </p>
//               <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[color:var(--color-foreground)]">
//                 Get in touch
//               </h2>
//               <p className="mt-4 text-lg text-[color:var(--color-text-secondary)]">
//                 Ready to bring visibility and control to your distribution? Request a demo or drop us a line.
//               </p>
//             </div>
//             <ul className="space-y-5">
//               <li className="flex items-start gap-4 text-[color:var(--color-text-secondary)]">
//                 <Mail size={22} className="text-[color:var(--color-primary)] flex-shrink-0 mt-0.5" />
//                 <span>hello@scalasuite.com</span>
//               </li>
//               <li className="flex items-start gap-4 text-[color:var(--color-text-secondary)]">
//                 <Phone size={22} className="text-[color:var(--color-primary)] flex-shrink-0 mt-0.5" />
//                 <span>+91 90133 37705 | +91 955 262 5614</span>
//               </li>
//               <li className="flex items-start gap-4 text-[color:var(--color-text-secondary)]">
//                 <MapPin size={22} className="text-[color:var(--color-primary)] flex-shrink-0 mt-0.5" />
//                 <span>Noida • Ghaziabad • Pune</span>
//               </li>
//             </ul>
//           </motion.div>

//           {/* Right: Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] p-6 sm:p-8 shadow-lg"
//           >
//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                 <label className="block">
//                   <span className="block text-sm font-medium text-[color:var(--color-foreground)] mb-2">Name *</span>
//                   <input
//                     type="text"
//                     name="name"
//                     required
//                     placeholder="Your name"
//                     className="w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 py-3 text-[color:var(--color-foreground)] placeholder:text-[color:var(--color-text-muted)] focus:border-[color:var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/20 transition"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="block text-sm font-medium text-[color:var(--color-foreground)] mb-2">Email *</span>
//                   <input
//                     type="email"
//                     name="email"
//                     required
//                     placeholder="you@company.com"
//                     className="w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 py-3 text-[color:var(--color-foreground)] placeholder:text-[color:var(--color-text-muted)] focus:border-[color:var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/20 transition"
//                   />
//                 </label>
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                 <label className="block">
//                   <span className="block text-sm font-medium text-[color:var(--color-foreground)] mb-2">Company</span>
//                   <input
//                     type="text"
//                     name="company"
//                     placeholder="Company name"
//                     className="w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 py-3 text-[color:var(--color-foreground)] placeholder:text-[color:var(--color-text-muted)] focus:border-[color:var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/20 transition"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="block text-sm font-medium text-[color:var(--color-foreground)] mb-2">Phone</span>
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="+91 …"
//                     className="w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 py-3 text-[color:var(--color-foreground)] placeholder:text-[color:var(--color-text-muted)] focus:border-[color:var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/20 transition"
//                   />
//                 </label>
//               </div>
//               <label className="block">
//                 <span className="block text-sm font-medium text-[color:var(--color-foreground)] mb-2">Message *</span>
//                 <textarea
//                   name="message"
//                   required
//                   rows={4}
//                   placeholder="Tell us about your distribution needs…"
//                   className="w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 py-3 text-[color:var(--color-foreground)] placeholder:text-[color:var(--color-text-muted)] focus:border-[color:var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/20 transition resize-none"
//                 />
//               </label>
//               {status === "error" && errorMessage && (
//                 <p className="text-sm text-[color:var(--color-error)]">{errorMessage}</p>
//               )}
//               <button
//                 type="submit"
//                 disabled={status === "loading"}
//                 className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 w-full sm:w-auto text-base font-semibold bg-[color:var(--color-primary)] text-white shadow-lg shadow-[color:var(--color-primary)]/25 transition hover:bg-[color:var(--color-primary-dark)] disabled:opacity-70 disabled:cursor-not-allowed"
//               >
//                 {status === "loading" ? (
//                   <>
//                     <Loader2 size={20} className="animate-spin" />
//                     Sending…
//                   </>
//                 ) : (
//                   <>
//                     <Send size={20} />
//                     Send enquiry
//                   </>
//                 )}
//               </button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  Sparkles,
  Globe,
  MessageCircle,
  User,
  Building2,
  CheckCircle,
  ArrowRight,
  Zap,
} from "lucide-react";
import { submitEnquiry } from "@/lib/firestore";

// Animated Background Component
const CONTACT_PARTICLES = Array.from({ length: 15 }, (_, i) => ({
  left: 5 + ((i * 7) % 90),
  top: 10 + ((i * 13) % 80),
  duration: 3 + (i % 5) * 0.4,
  delay: i * 0.25,
}));

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-[800px] h-[800px] rounded-full"
       
      />
      <motion.div
        className="absolute -bottom-1/2 -right-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, var(--color-primary-soft) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating Particles (deterministic for SSR/CSR match) */}
      {CONTACT_PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[color:var(--color-primary)]/30"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

// Contact Info Card Component
function ContactCard({
  icon: Icon,
  title,
  content,
  link,
  delay = 0,
}: {
  icon: React.ElementType;
  title: string;
  content: string;
  link?: string;
  delay?: number;
}) {
  const isExternalLink = link?.startsWith("http");
  const cardContent = (
    <>
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[color:var(--color-primary)]/0 via-[color:var(--color-primary)]/5 to-[color:var(--color-primary-soft)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-primary-soft)] flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-[color:var(--color-primary)]/20 transition-shadow">
          <Icon className="w-6 h-6 text-[color:var(--color-accent-dark)]" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-[color:var(--color-foreground)] mb-1">{title}</h3>
          <p className="text-[color:var(--color-text-secondary)] text-sm leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </>
  );

  const cardClassName =
    "group relative bg-[color:var(--color-accent-dark)]/80 backdrop-blur-xl border border-[color:var(--color-border)] rounded-2xl p-6 hover:bg-[color:var(--color-accent-dark)]/90 hover:border-[color:var(--color-primary)]/40 transition-all duration-300 block w-full text-left no-underline";

  if (link) {
    return (
      <motion.a
        href={link}
        target={isExternalLink ? "_blank" : undefined}
        rel={isExternalLink ? "noopener noreferrer" : undefined}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02, y: -5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={cardClassName}
      >
        {cardContent}
      </motion.a>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -5 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cardClassName}
    >
      {cardContent}
    </motion.div>
  );
}

// Premium Input Component
function PremiumInput({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  icon: Icon,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  icon?: React.ElementType;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <label className="block group">
      <span className="block text-sm font-medium text-[color:var(--color-text-secondary)] mb-2">
        {label}{" "}
        {required && <span className="text-[color:var(--color-primary)]">*</span>}
      </span>
      <div className="relative">
        {Icon && (
          <div
            className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
              focused
                ? "text-[color:var(--color-primary)]"
                : "text-[color:var(--color-text-muted)]"
            }`}
          >
            <Icon className="w-4 h-4" />
          </div>
        )}
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`w-full rounded-xl bg-[color:var(--color-accent-dark)]/60 border ${
            focused
              ? "border-[color:var(--color-primary)]/50"
              : "border-[color:var(--color-border)]"
          } ${Icon ? "pl-12" : "px-4"} pr-4 py-3.5 text-[color:var(--color-foreground)] placeholder:text-[color:var(--color-text-muted)] focus:outline-none transition-all duration-300`}
        />
        {focused && (
          <motion.div
            layoutId="input-glow"
            className="absolute -inset-[1px] rounded-xl  -z-10 blur-sm"
          />
        )}
      </div>
    </label>
  );
}

// Success Animation Component
function SuccessAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="absolute inset-0 flex items-center justify-center bg-[color:var(--color-accent-dark)]/85 backdrop-blur-md rounded-2xl z-50"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-primary-soft)] flex items-center justify-center"
        >
          <CheckCircle className="w-10 h-10 text-[color:var(--color-accent-dark)]" />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl font-bold text-[color:var(--color-foreground)] mb-2"
        >
          Message Sent!
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-[color:var(--color-text-secondary)]"
        >
          We'll get back to you shortly
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default function ContactSection() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const company = (formData.get("company") as string)?.trim() || undefined;
    const phone = (formData.get("phone") as string)?.trim() || undefined;
    const message = (formData.get("message") as string)?.trim();

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      await submitEnquiry({ name, email, company, phone, message });
      setStatus("success");
      setTimeout(() => {
        router.push("/thank-you");
      }, 2000);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 901-333-7705",
      link: "tel:+919013337705",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@scalasuite.com",
      link: "mailto:hello@scalasuite.com",
    },
    {
      icon: Globe,
      title: "Visit Website",
      content: "www.scalasuite.com",
      link: "https://www.scalasuite.com",
    },
    {
      icon: MapPin,
      title: "Our Offices",
      content: "Noida • Ghaziabad • Pune",
    },
  ];

  const features = [
    { icon: Zap, text: "Quick Response" },
    { icon: Globe, text: "Global Support" },
    { icon: MessageCircle, text: "24/7 Chat" },
  ];

  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden bg-[color:var(--color-surface)]">
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[color:var(--color-primary)]/10 border border-[color:var(--color-primary)]/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[color:var(--color-primary-soft)]" />
            <span className="text-sm font-medium text-[color:var(--color-primary-soft)]">
              Get in Touch
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[color:var(--color-foreground)] mb-6">
            Ready to Transform Your{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-[color:var(--color-primary)] via-[color:var(--color-primary-soft)] to-[color:var(--color-primary)] bg-clip-text text-transparent">
                Distribution Network?
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-primary-soft)] rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </h2>

          <p className="text-xl text-[color:var(--color-text-secondary)] max-w-2xl mx-auto">
            Call us, email us, or visit our website. We're ready to help you grow beyond boundaries.
          </p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3 mt-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[color:var(--color-accent-dark)]/70 border border-[color:var(--color-border)]"
              >
                <feature.icon className="w-4 h-4 text-[color:var(--color-primary)]" />
                <span className="text-sm text-[color:var(--color-text-secondary)]">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <ContactCard key={info.title} {...info} delay={index * 0.1} />
              ))}
            </div>

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 p-6 bg-gradient-to-br from-[color:var(--color-primary)]/10 to-transparent rounded-2xl border border-[color:var(--color-primary)]/20"
            >
              <h3 className="font-semibold text-[color:var(--color-foreground)] mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-[color:var(--color-primary)]" />
                Our Offices
              </h3>
              <div className="space-y-3 text-sm">
                {["Noida", "Ghaziabad", "Pune"].map((city, index) => (
                  <motion.div
                    key={city}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-2 text-[color:var(--color-text-secondary)]"
                  >
                    <span className="w-2 h-2 rounded-full bg-[color:var(--color-primary)]" />
                    {city}, India
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative"
          >
            {/* Form Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[color:var(--color-primary)]/20 via-[color:var(--color-primary-soft)]/10 to-[color:var(--color-primary)]/20 rounded-3xl blur-2xl opacity-50" />

            <div className="relative bg-[color:var(--color-accent-dark)]/80 backdrop-blur-xl border border-[color:var(--color-border)] rounded-3xl p-8 sm:p-10">
              {/* Form Header */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-[color:var(--color-foreground)]">
                  Send us a message
                </h3>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-primary-soft)] flex items-center justify-center"
                >
                  <Send className="w-5 h-5 text-black" />
                </motion.div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <PremiumInput
                    label="Your Name"
                    name="name"
                    placeholder="John Doe"
                    required
                    icon={User}
                  />
                  <PremiumInput
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    icon={Mail}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <PremiumInput
                    label="Company"
                    name="company"
                    placeholder="Your Company"
                    icon={Building2}
                  />
                  <PremiumInput
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    icon={Phone}
                  />
                </div>

                <label className="block group">
                  <span className="block text-sm font-medium text-[color:var(--color-text-secondary)] mb-2">
                    Message{" "}
                    <span className="text-[color:var(--color-primary)]">*</span>
                  </span>
                  <div className="relative">
                    <div
                      className={`absolute left-4 top-4 transition-colors ${
                        focusedField === "message"
                          ? "text-[color:var(--color-primary)]"
                          : "text-[color:var(--color-text-muted)]"
                      }`}
                    >
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your project or requirements..."
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full rounded-xl bg-[color:var(--color-accent-dark)]/60 border ${
                        focusedField === "message"
                          ? "border-[color:var(--color-primary)]/50"
                          : "border-[color:var(--color-border)]"
                      } pl-12 pr-4 py-3.5 text-[color:var(--color-foreground)] placeholder:text-[color:var(--color-text-muted)] focus:outline-none focus:bg-[color:var(--color-accent-dark)]/70 transition-all duration-300 resize-none`}
                    />
                   
                  </div>
                </label>

                {/* Error Message */}
                <AnimatePresence>
                  {status === "error" && errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -10, height: 0 }}
                      className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[color:var(--color-error)]/10 border border-[color:var(--color-error)]/25 text-[color:var(--color-error)] text-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-[color:var(--color-error)] animate-pulse" />
                      {errorMessage}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  whileHover={{ scale: status === "loading" || status === "success" ? 1 : 1.02 }}
                  whileTap={{ scale: status === "loading" || status === "success" ? 1 : 0.98 }}
                  className="relative group w-full sm:w-auto"
                >
                  <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[color:var(--color-primary)] via-[color:var(--color-primary-soft)] to-[color:var(--color-primary)] opacity-70 group-hover:opacity-100 blur-sm transition-opacity" />
                  <div className="relative flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-primary-dark)] text-black font-semibold transition-all">
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </div>
                </motion.button>

                {/* Privacy Notice */}
                <p className="text-xs text-[color:var(--color-text-muted)] mt-4">
                  By sending this message, you agree to our{" "}
                  <a
                    href="#"
                    className="text-[color:var(--color-primary)] hover:text-[color:var(--color-primary-soft)] transition-colors"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-[color:var(--color-primary)] hover:text-[color:var(--color-primary-soft)] transition-colors"
                  >
                    Terms of Service
                  </a>
                </p>
              </form>

              {/* Success Animation Overlay */}
              <AnimatePresence>{status === "success" && <SuccessAnimation />}</AnimatePresence>
            </div>
          </motion.div>
        </div>

        
      </div>
    </section>
  );
}