 "use client";

 import { useState } from "react";
 import { motion, AnimatePresence } from "framer-motion";
 import { ChevronDown } from "lucide-react";

 const faqs = [
   {
     question: "What problems does Scala solve for distribution-heavy brands?",
     answer:
       "Scala gives you real-time visibility of inventory and incentives from manufacturer to influencer. It digitises claims, prevents fraud, and ensures the right people are rewarded at the right time across complex, multi-level networks.",
   },
   {
     question: "How long does it take to go live?",
     answer:
       "Most brands start seeing value within 4–8 weeks, depending on the complexity of your existing programs, data quality, and integrations. We follow a phased rollout by region, channel or program so that adoption is smooth.",
   },
   {
     question: "Can Scala integrate with our existing ERP, CRM or DMS?",
     answer:
       "Yes. Scala is designed to plug into existing ERPs, CRMs, DMS and analytics tools. We support standard APIs, webhooks, SFTP and custom connectors so that data flows securely between systems.",
   },
   {
     question: "Is Scala suitable for small or mid-sized brands?",
     answer:
       "Absolutely. Our Growth and Scale plans are built for emerging and mid-sized brands that want enterprise-grade control without heavy upfront investment. You can start with a limited set of programs and expand as you grow.",
   },
   {
     question: "How does Scala handle data security and compliance?",
     answer:
       "We follow industry best practices for encryption, access control and audit trails. Role-based permissions, environment isolation and secure data transfer ensure that sensitive program and partner information stays protected.",
   },
 ];

 export default function FAQSection() {
   const [openIndex, setOpenIndex] = useState<number | null>(0);

   const toggle = (index: number) => {
     setOpenIndex((prev) => (prev === index ? null : index));
   };

   const faqSchema = {
     "@context": "https://schema.org",
     "@type": "FAQPage",
     mainEntity: faqs.map((item) => ({
       "@type": "Question",
       name: item.question,
       acceptedAnswer: {
         "@type": "Answer",
         text: item.answer,
       },
     })),
   };

   return (
     <section
       id="faqs"
       className="relative py-24 sm:py-28 bg-[color:var(--color-surface)] overflow-hidden"
     >
       {/* FAQ JSON-LD for SEO */}
       <script
         type="application/ld+json"
         // eslint-disable-next-line react/no-danger
         dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
       />
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--color-primary)/12,_transparent_60%)]" aria-hidden />
       <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-10 sm:mb-12">
           <p className="text-[color:var(--color-primary)] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-3">
             FAQs
           </p>
           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[color:var(--color-foreground)]">
             Answers to common questions
           </h2>
           <p className="mt-4 text-base sm:text-lg text-[color:var(--color-text-secondary)]">
             Everything you need to know about how Scala fits into your distribution,
             incentive and loyalty strategy.
           </p>
         </div>

         <div className="space-y-3">
           {faqs.map((faq, index) => {
             const isOpen = openIndex === index;
             return (
               <div
                 key={faq.question}
                 className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-background)]"
               >
                 <button
                   type="button"
                   onClick={() => toggle(index)}
                   className="w-full flex items-center justify-between gap-4 px-4 sm:px-6 py-4 sm:py-5 text-left"
                   aria-expanded={isOpen}
                 >
                   <span className="text-sm sm:text-base font-medium text-[color:var(--color-foreground)]">
                     {faq.question}
                   </span>
                   <span
                     className={[
                       "flex h-7 w-7 items-center justify-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-text-secondary)] transition-transform",
                       isOpen ? "rotate-180" : "",
                     ].join(" ")}
                   >
                     <ChevronDown size={16} />
                   </span>
                 </button>
                 <AnimatePresence initial={false}>
                   {isOpen && (
                     <motion.div
                       initial={{ height: 0, opacity: 0 }}
                       animate={{ height: "auto", opacity: 1 }}
                       exit={{ height: 0, opacity: 0 }}
                       transition={{ duration: 0.2 }}
                       className="px-4 sm:px-6 pb-4 sm:pb-5"
                     >
                       <p className="text-sm sm:text-base text-[color:var(--color-text-secondary)]">
                         {faq.answer}
                       </p>
                     </motion.div>
                   )}
                 </AnimatePresence>
               </div>
             );
           })}
         </div>
       </div>
     </section>
   );
 }

