"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { submitEnquiry } from "@/lib/firestore";

export default function ContactSection() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

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
      setErrorMessage("Please fill in name, email, and message.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      await submitEnquiry({ name, email, company, phone, message });
      setStatus("success");
      router.push("/thank-you");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 overflow-hidden bg-[color:var(--color-surface)]"
    >
      <div className="absolute inset-0 bg-[color:var(--color-surface-light)]/30" aria-hidden />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="text-[color:var(--color-primary)] text-sm font-semibold tracking-widest uppercase mb-3">
                Our Contact
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[color:var(--color-foreground)]">
                Get in touch
              </h2>
              <p className="mt-4 text-lg text-[color:var(--color-text-secondary)]">
                Ready to bring visibility and control to your distribution? Request a demo or drop us a line.
              </p>
            </div>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-[color:var(--color-text-secondary)]">
                <Mail size={22} className="text-[color:var(--color-primary)] flex-shrink-0 mt-0.5" />
                <span>hello@scalasuite.com</span>
              </li>
              <li className="flex items-start gap-4 text-[color:var(--color-text-secondary)]">
                <Phone size={22} className="text-[color:var(--color-primary)] flex-shrink-0 mt-0.5" />
                <span>+91 90133 37705 | +91 955 262 5614</span>
              </li>
              <li className="flex items-start gap-4 text-[color:var(--color-text-secondary)]">
                <MapPin size={22} className="text-[color:var(--color-primary)] flex-shrink-0 mt-0.5" />
                <span>Noida • Ghaziabad • Pune</span>
              </li>
            </ul>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] p-6 sm:p-8 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="block text-sm font-medium text-[color:var(--color-foreground)] mb-2">Name *</span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 py-3 text-[color:var(--color-foreground)] placeholder:text-[color:var(--color-text-muted)] focus:border-[color:var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/20 transition"
                  />
                </label>
                <label className="block">
                  <span className="block text-sm font-medium text-[color:var(--color-foreground)] mb-2">Email *</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 py-3 text-[color:var(--color-foreground)] placeholder:text-[color:var(--color-text-muted)] focus:border-[color:var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/20 transition"
                  />
                </label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="block text-sm font-medium text-[color:var(--color-foreground)] mb-2">Company</span>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company name"
                    className="w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 py-3 text-[color:var(--color-foreground)] placeholder:text-[color:var(--color-text-muted)] focus:border-[color:var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/20 transition"
                  />
                </label>
                <label className="block">
                  <span className="block text-sm font-medium text-[color:var(--color-foreground)] mb-2">Phone</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 …"
                    className="w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 py-3 text-[color:var(--color-foreground)] placeholder:text-[color:var(--color-text-muted)] focus:border-[color:var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/20 transition"
                  />
                </label>
              </div>
              <label className="block">
                <span className="block text-sm font-medium text-[color:var(--color-foreground)] mb-2">Message *</span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your distribution needs…"
                  className="w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 py-3 text-[color:var(--color-foreground)] placeholder:text-[color:var(--color-text-muted)] focus:border-[color:var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/20 transition resize-none"
                />
              </label>
              {status === "error" && errorMessage && (
                <p className="text-sm text-[color:var(--color-error)]">{errorMessage}</p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 w-full sm:w-auto text-base font-semibold bg-[color:var(--color-primary)] text-white shadow-lg shadow-[color:var(--color-primary)]/25 transition hover:bg-[color:var(--color-primary-dark)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send enquiry
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
