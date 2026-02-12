 "use client";

 import { motion } from "framer-motion";
 import {
   MessageCircle,
   BarChart3,
   Workflow,
   Database,
   Cloud,
   Link as LinkIcon,
 } from "lucide-react";

 const integrations = [
   {
     name: "WhatsApp",
     category: "Messaging & engagement",
     icon: MessageCircle,
   },
   {
     name: "Google Analytics",
     category: "Web & campaign analytics",
     icon: BarChart3,
   },
   {
     name: "Zoho",
     category: "CRM & business apps",
     icon: Workflow,
   },
   {
     name: "ERP & DMS",
     category: "SAP / Oracle / custom",
     icon: Database,
   },
   {
     name: "Cloud data lakes",
     category: "BigQuery, Redshift, Snowflake",
     icon: Cloud,
   },
   {
     name: "Custom APIs",
     category: "REST / webhooks / SFTP",
     icon: LinkIcon,
   },
 ];

 export default function IntegrationsSection() {
   return (
     <section
       id="integrations"
       className="relative py-24 sm:py-28 bg-[color:var(--color-background)] overflow-hidden"
     >
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--color-primary)/12,_transparent_60%)]" aria-hidden />
       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start">
           <div>
             <p className="text-[color:var(--color-primary)] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-3">
               Integrations
             </p>
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[color:var(--color-foreground)]">
               Connect Scala to your stack
             </h2>
             <p className="mt-4 text-base sm:text-lg text-[color:var(--color-text-secondary)] max-w-xl">
               Plug Scala into the tools you already use for communication, analytics,
               finance and reporting. Avoid data silos and keep every team working
               from the same source of truth.
             </p>
             <p className="mt-4 text-sm text-[color:var(--color-text-secondary)]">
               We support dozens of out-of-the-box integrations and can build custom
               connectors for your ERP, DMS or in-house systems.
             </p>
             <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 py-2 text-xs sm:text-sm text-[color:var(--color-text-secondary)]">
               <span className="inline-flex h-2 w-2 rounded-full bg-[color:var(--color-primary)]" />
               <span>Ask us about your preferred CRM, SMS or analytics platform.</span>
             </div>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
             {integrations.map((item, index) => (
               <motion.div
                 key={item.name}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.05 }}
                 className="flex items-start gap-3 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-4 sm:p-5 shadow-sm hover:border-[color:var(--color-primary)]/40 hover:shadow-lg transition"
               >
                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--color-primary)]/12 text-[color:var(--color-primary)]">
                   <item.icon size={20} strokeWidth={1.8} />
                 </div>
                 <div>
                   <p className="text-sm font-semibold text-[color:var(--color-foreground)]">
                     {item.name}
                   </p>
                   <p className="text-xs text-[color:var(--color-text-secondary)] mt-1">
                     {item.category}
                   </p>
                 </div>
               </motion.div>
             ))}
           </div>
         </div>
       </div>
     </section>
   );
 }

