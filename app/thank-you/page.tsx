"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft } from "lucide-react";

export default function ThankYouPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full text-center"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[color:var(--color-success)]/15 text-[color:var(--color-success)] mb-8">
          <CheckCircle2 size={48} strokeWidth={1.5} />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[color:var(--color-foreground)] mb-4">
          Thank you
        </h1>
        <p className="text-lg text-[color:var(--color-text-secondary)] mb-8">
          We&apos;ve received your enquiry and will get back to you shortly.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold bg-[color:var(--color-primary)] text-white hover:bg-[color:var(--color-primary-dark)] transition"
        >
          <ArrowLeft size={20} />
          Back to home
        </Link>
      </motion.div>
    </section>
  );
}
