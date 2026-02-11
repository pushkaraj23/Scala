// "use client";

// import { useState, useEffect, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Lock, Download, Loader2, Mail, User, Building2, Phone, MessageSquare, Calendar, CheckCircle2, Circle } from "lucide-react";
// import { getEnquiries, setEnquiryChecked } from "@/lib/firestore";
// import type { Enquiry } from "@/lib/firestore";

// const ADMIN_PASSWORD = "scala@123";
// const SESSION_KEY = "scala_admin_auth";

// function formatDate(value: unknown): string {
//   if (!value) return "—";
//   if (value instanceof Date) return value.toLocaleString();
//   if (typeof value === "object" && value !== null && "toDate" in value) {
//     const d = (value as { toDate: () => Date }).toDate();
//     return d.toLocaleString();
//   }
//   return String(value);
// }

// function escapeCsvCell(s: string): string {
//   if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
//   return s;
// }

// function enquiriesToCsv(rows: (Enquiry & { id: string; createdAt: unknown })[]): string {
//   const headers = ["Date", "Name", "Email", "Company", "Phone", "Message", "Checked"];
//   const lines = [
//     headers.join(","),
//     ...rows.map((r) =>
//       [
//         formatDate(r.createdAt),
//         escapeCsvCell(r.name ?? ""),
//         escapeCsvCell(r.email ?? ""),
//         escapeCsvCell(r.company ?? ""),
//         escapeCsvCell(r.phone ?? ""),
//         escapeCsvCell(r.message ?? ""),
//         (r.checked ? "Yes" : "No"),
//       ].join(",")
//     ),
//   ];
//   return lines.join("\r\n");
// }

// export default function AdminPage() {
//   const [authenticated, setAuthenticated] = useState(false);
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [enquiries, setEnquiries] = useState<(Enquiry & { id: string; createdAt: unknown })[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [submitting, setSubmitting] = useState(false);
//   const [togglingId, setTogglingId] = useState<string | null>(null);
//   const [filter, setFilter] = useState<"all" | "checked" | "unchecked">("all");

//   useEffect(() => {
//     const ok = typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY) === "true";
//     setAuthenticated(ok);
//   }, []);

//   const loadEnquiries = useCallback(async () => {
//     setLoading(true);
//     try {
//       const data = await getEnquiries();
//       setEnquiries(data);
//     } catch (e) {
//       setEnquiries([]);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     if (authenticated) loadEnquiries();
//   }, [authenticated, loadEnquiries]);

//   function handleLogin(e: React.FormEvent) {
//     e.preventDefault();
//     setError("");
//     setSubmitting(true);
//     if (password === ADMIN_PASSWORD) {
//       sessionStorage.setItem(SESSION_KEY, "true");
//       setAuthenticated(true);
//       setPassword("");
//     } else {
//       setError("Incorrect password.");
//     }
//     setSubmitting(false);
//   }

//   function handleDownloadCsv() {
//     const csv = enquiriesToCsv(enquiries);
//     const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `scala-enquiries-${new Date().toISOString().slice(0, 10)}.csv`;
//     a.click();
//     URL.revokeObjectURL(url);
//   }

//   async function handleToggleChecked(id: string, current?: boolean) {
//     setTogglingId(id);
//     const next = !current;
//     // optimistic update
//     setEnquiries((prev) =>
//       prev.map((e) => (e.id === id ? { ...e, checked: next } : e))
//     );
//     try {
//       await setEnquiryChecked(id, next);
//     } catch {
//       // revert on error
//       setEnquiries((prev) =>
//         prev.map((e) => (e.id === id ? { ...e, checked: current } : e))
//       );
//     } finally {
//       setTogglingId(null);
//     }
//   }

//   const checkedCount = enquiries.filter((e) => e.checked).length;
//   const uncheckedCount = enquiries.length - checkedCount;

//   const filteredEnquiries = enquiries.filter((e) => {
//     if (filter === "checked") return !!e.checked;
//     if (filter === "unchecked") return !e.checked;
//     return true;
//   });

//   if (!authenticated) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-[#1b2e02] via-[#072a13] to-[#0c2220] p-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//           className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl"
//         >
//           <div className="flex justify-center mb-6">
//             <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center text-[color:var(--color-primary)]">
//               <Lock size={28} strokeWidth={1.8} />
//             </div>
//           </div>
//           <h1 className="text-xl font-semibold text-white text-center mb-2">Admin</h1>
//           <p className="text-sm text-white/60 text-center mb-6">Enter password to continue</p>
//           <form onSubmit={handleLogin} className="space-y-4">
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//               autoFocus
//               className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[color:var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/30 transition"
//             />
//             {error && <p className="text-sm text-[color:var(--color-error)]">{error}</p>}
//             <button
//               type="submit"
//               disabled={submitting}
//               className="w-full rounded-xl px-4 py-3 text-base font-semibold bg-[color:var(--color-primary)] text-white hover:bg-[color:var(--color-primary-dark)] disabled:opacity-70 transition"
//             >
//               {submitting ? "Checking…" : "Sign in"}
//             </button>
//           </form>
//         </motion.div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[color:var(--color-surface)] p-4 sm:p-6 lg:p-8">
//       <div className="max-w-5xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//           className="mb-8"
//         >
//           <h1 className="text-2xl sm:text-3xl font-bold text-[color:var(--color-foreground)]">Enquiries</h1>
//           <p className="mt-1 text-[color:var(--color-text-secondary)]">Contact form submissions from the website.</p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           className="mb-6 flex flex-wrap items-center gap-4 justify-between"
//         >
//           <div className="flex flex-wrap items-center gap-3">
//             <button
//               type="button"
//               onClick={handleDownloadCsv}
//               disabled={enquiries.length === 0}
//               className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold bg-[color:var(--color-primary)] text-white hover:bg-[color:var(--color-primary-dark)] disabled:opacity-50 disabled:cursor-not-allowed transition"
//             >
//               <Download size={18} />
//               Download CSV
//             </button>
//             <button
//               type="button"
//               onClick={loadEnquiries}
//               disabled={loading}
//               className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium border border-[color:var(--color-border)] bg-[color:var(--color-background)] text-[color:var(--color-foreground)] hover:bg-[color:var(--color-surface-light)] disabled:opacity-70 transition"
//             >
//               {loading ? <Loader2 size={18} className="animate-spin" /> : "Refresh"}
//             </button>
//           </div>

//           <div className="inline-flex items-center gap-1 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] p-1 text-xs font-medium text-[color:var(--color-text-secondary)]">
//             <button
//               type="button"
//               onClick={() => setFilter("all")}
//               className={`px-3 py-1.5 rounded-lg transition ${filter === "all" ? "bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)]" : ""}`}
//             >
//               All ({enquiries.length})
//             </button>
//             <button
//               type="button"
//               onClick={() => setFilter("checked")}
//               className={`px-3 py-1.5 rounded-lg transition ${filter === "checked" ? "bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)]" : ""}`}
//             >
//               Checked ({checkedCount})
//             </button>
//             <button
//               type="button"
//               onClick={() => setFilter("unchecked")}
//               className={`px-3 py-1.5 rounded-lg transition ${filter === "unchecked" ? "bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)]" : ""}`}
//             >
//               Unchecked ({uncheckedCount})
//             </button>
//           </div>
//         </motion.div>

//         {loading ? (
//           <div className="flex items-center justify-center py-20">
//             <Loader2 size={32} className="animate-spin text-[color:var(--color-primary)]" />
//           </div>
//         ) : filteredEnquiries.length === 0 ? (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] p-12 text-center text-[color:var(--color-text-secondary)]"
//           >
//             No enquiries in this view.
//           </motion.div>
//         ) : (
//           <div className="space-y-4">
//             <AnimatePresence mode="popLayout">
//               {filteredEnquiries.map((e, i) => {
//                 const isChecked = !!e.checked;
//                 return (
//                   <motion.article
//                     key={e.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ delay: i * 0.03 }}
//                     className={`rounded-2xl p-5 sm:p-6 shadow-sm border ${
//                       isChecked
//                         ? "border-[color:var(--color-primary)]/50 bg-[color:var(--color-surface)]"
//                         : "border-[color:var(--color-border)] bg-[color:var(--color-background)]"
//                     }`}
//                   >
//                   <div className="flex flex-wrap items-start gap-4 sm:gap-6">
//                     <div className="flex items-center gap-3 min-w-0">
//                       <div className="w-10 h-10 rounded-xl bg-[color:var(--color-primary)]/15 flex items-center justify-center text-[color:var(--color-primary)] flex-shrink-0">
//                         <User size={20} />
//                       </div>
//                       <div className="min-w-0">
//                         <p className="font-semibold text-[color:var(--color-foreground)] truncate">{e.name}</p>
//                         <p className="text-sm text-[color:var(--color-text-secondary)] flex items-center gap-1.5 truncate">
//                           <Mail size={14} className="flex-shrink-0" />
//                           {e.email}
//                         </p>
//                       </div>
//                     </div>
//                     {e.company && (
//                       <div className="flex items-center gap-2 text-sm text-[color:var(--color-text-secondary)]">
//                         <Building2 size={16} className="flex-shrink-0" />
//                         {e.company}
//                       </div>
//                     )}
//                     {e.phone && (
//                       <div className="flex items-center gap-2 text-sm text-[color:var(--color-text-secondary)]">
//                         <Phone size={16} className="flex-shrink-0" />
//                         {e.phone}
//                       </div>
//                     )}
//                     <div className="flex items-center gap-3 text-xs text-[color:var(--color-text-muted)] w-full sm:w-auto">
//                       <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-2 py-1 text-[10px] font-medium uppercase tracking-wide">
//                         <Calendar size={12} className="flex-shrink-0" />
//                         {formatDate(e.createdAt)}
//                       </span>
//                       <button
//                         type="button"
//                         onClick={() => handleToggleChecked(e.id!, e.checked)}
//                         disabled={togglingId === e.id}
//                         className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wide border  ${
//                           isChecked
//                             ? "border-[color:var(--color-primary)]/70 bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)]"
//                             : "border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-foreground)] hover:border-[color:var(--color-primary)]/60 hover:bg-[color:var(--color-surface-light)]"
//                         } disabled:opacity-70`}
//                       >
//                         {isChecked ? (
//                           <CheckCircle2 size={12} className="text-[color:var(--color-primary)]" />
//                         ) : (
//                           <Circle size={12} className="text-[color:var(--color-text-muted)]" />
//                         )}
//                         {isChecked ? "Checked" : "Mark checked"}
//                       </button>
//                     </div>
//                   </div>
//                   {e.message && (
//                     <div className="mt-4 pt-4 border-t border-[color:var(--color-border)] flex gap-2">
//                       <MessageSquare size={18} className="text-[color:var(--color-text-muted)] flex-shrink-0 mt-0.5" />
//                       <p className="text-sm text-[color:var(--color-text-secondary)] whitespace-pre-wrap">{e.message}</p>
//                     </div>
//                   )}
//                   </motion.article>
//                 );
//               })}
//             </AnimatePresence>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  Download,
  Loader2,
  Mail,
  User,
  Building2,
  Phone,
  MessageSquare,
  Calendar,
  CheckCircle2,
  Circle,
  RefreshCw,
  Shield,
  Inbox,
  Sparkles,
  TrendingUp,
  Clock,
  Search,
  LogOut,
  ChevronRight,
  Eye,
  MoreVertical,
  Trash2,
  ExternalLink,
} from "lucide-react";
import { getEnquiries, setEnquiryChecked } from "@/lib/firestore";
import type { Enquiry } from "@/lib/firestore";

const ADMIN_PASSWORD = "scala@123";
const SESSION_KEY = "scala_admin_auth";

function formatDate(value: unknown): string {
  if (!value) return "—";
  if (value instanceof Date) return value.toLocaleString();
  if (typeof value === "object" && value !== null && "toDate" in value) {
    const d = (value as { toDate: () => Date }).toDate();
    return d.toLocaleString();
  }
  return String(value);
}

function formatRelativeTime(value: unknown): string {
  if (!value) return "—";
  let date: Date;
  if (value instanceof Date) {
    date = value;
  } else if (typeof value === "object" && value !== null && "toDate" in value) {
    date = (value as { toDate: () => Date }).toDate();
  } else {
    return String(value);
  }

  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString();
}

function escapeCsvCell(s: string): string {
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function enquiriesToCsv(rows: (Enquiry & { id: string; createdAt: unknown })[]): string {
  const headers = ["Date", "Name", "Email", "Company", "Phone", "Message", "Checked"];
  const lines = [
    headers.join(","),
    ...rows.map((r) =>
      [
        formatDate(r.createdAt),
        escapeCsvCell(r.name ?? ""),
        escapeCsvCell(r.email ?? ""),
        escapeCsvCell(r.company ?? ""),
        escapeCsvCell(r.phone ?? ""),
        escapeCsvCell(r.message ?? ""),
        r.checked ? "Yes" : "No",
      ].join(",")
    ),
  ];
  return lines.join("\r\n");
}

// Animated Background Component
function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#73b313]/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#c4ff6b]/5 rounded-full blur-[100px] animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#73b313]/5 rounded-full blur-[150px]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#73b313 1px, transparent 1px), linear-gradient(90deg, #73b313 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#73b313]/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
}

// Premium Button Component
function PremiumButton({
  children,
  onClick,
  disabled,
  variant = "primary",
  size = "md",
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-[#73b313] to-[#5a8c0f] text-white hover:from-[#5a8c0f] hover:to-[#73b313] shadow-lg shadow-[#73b313]/20",
    secondary: "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20",
    ghost: "text-gray-400 hover:text-white hover:bg-white/5",
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={`
        relative group inline-flex items-center justify-center gap-2 font-semibold rounded-xl
        transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
        ${sizeClasses[size]} ${variantClasses[variant]} ${className}
      `}
    >
      {variant === "primary" && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#73b313]/0 via-white/20 to-[#73b313]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_100%] group-hover:animate-shimmer" />
      )}
      <span className="relative flex items-center gap-2">{children}</span>
    </motion.button>
  );
}

// Stat Card Component
function StatCard({
  icon: Icon,
  label,
  value,
  trend,
  color = "green",
  delay = 0,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  trend?: string;
  color?: "green" | "blue" | "amber" | "purple";
  delay?: number;
}) {
  const colorClasses = {
    green: "from-[#73b313] to-[#c4ff6b]",
    blue: "from-blue-500 to-cyan-400",
    amber: "from-amber-500 to-yellow-400",
    purple: "from-purple-500 to-pink-400",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative group"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${colorClasses[color]} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
      <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all duration-300">
        <div className="flex items-start justify-between mb-3">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center`}>
            <Icon className="w-5 h-5 text-black" />
          </div>
          {trend && (
            <span className="flex items-center gap-1 text-xs font-medium text-[#73b313]">
              <TrendingUp className="w-3 h-3" />
              {trend}
            </span>
          )}
        </div>
        <p className="text-2xl font-bold text-white mb-1">{value}</p>
        <p className="text-sm text-gray-400">{label}</p>
      </div>
    </motion.div>
  );
}

// Enquiry Card Component
function EnquiryCard({
  enquiry,
  index,
  isToggling,
  onToggle,
  isExpanded,
  onExpand,
}: {
  enquiry: Enquiry & { id: string; createdAt: unknown };
  index: number;
  isToggling: boolean;
  onToggle: () => void;
  isExpanded: boolean;
  onExpand: () => void;
}) {
  const isChecked = !!enquiry.checked;
  const [showMenu, setShowMenu] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ delay: index * 0.03, duration: 0.4 }}
      layout
      className="group relative"
    >
      {/* Glow Effect */}
      <div
        className={`absolute -inset-[1px] rounded-2xl transition-opacity duration-500 ${
          isChecked
            ? "bg-gradient-to-r from-[#73b313]/50 via-[#c4ff6b]/30 to-[#73b313]/50 opacity-100"
            : "bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100"
        }`}
      />

      <div
        className={`relative rounded-2xl p-5 sm:p-6 transition-all duration-300 ${
          isChecked
            ? "bg-gradient-to-br from-[#73b313]/10 via-[#0a1a0a] to-[#0a1a0a]"
            : "bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.04]"
        } border ${isChecked ? "border-[#73b313]/30" : "border-white/5 hover:border-white/10"}`}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-4 min-w-0">
            {/* Avatar */}
            <div
              className={`relative w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                isChecked ? "bg-gradient-to-br from-[#73b313] to-[#c4ff6b]" : "bg-gradient-to-br from-gray-700 to-gray-800"
              }`}
            >
              <span className={`text-lg font-bold ${isChecked ? "text-black" : "text-white"}`}>
                {enquiry.name?.charAt(0)?.toUpperCase() || "?"}
              </span>
              {isChecked && (
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#73b313] rounded-full flex items-center justify-center border-2 border-[#0a1a0a]">
                  <CheckCircle2 className="w-3 h-3 text-black" />
                </div>
              )}
            </div>

            {/* Name & Email */}
            <div className="min-w-0">
              <h3 className="font-semibold text-white text-lg truncate">{enquiry.name}</h3>
              <a
                href={`mailto:${enquiry.email}`}
                className="text-sm text-gray-400 hover:text-[#c4ff6b] flex items-center gap-1.5 truncate transition-colors"
              >
                <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                {enquiry.email}
              </a>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Time Badge */}
            <span className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 text-xs text-gray-400">
              <Clock className="w-3 h-3" />
              {formatRelativeTime(enquiry.createdAt)}
            </span>

            {/* Status Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onToggle}
              disabled={isToggling}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 ${
                isChecked
                  ? "bg-[#73b313] text-black"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              } disabled:opacity-50`}
            >
              {isToggling ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : isChecked ? (
                <CheckCircle2 className="w-3.5 h-3.5" />
              ) : (
                <Circle className="w-3.5 h-3.5" />
              )}
              {isChecked ? "Done" : "Mark Done"}
            </motion.button>

            {/* More Menu */}
            
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          {enquiry.company && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-sm text-gray-400">
              <Building2 className="w-3.5 h-3.5 text-[#73b313]" />
              {enquiry.company}
            </div>
          )}
          {enquiry.phone && (
            <a
              href={`tel:${enquiry.phone}`}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-sm text-gray-400 hover:text-[#c4ff6b] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#73b313]" />
              {enquiry.phone}
            </a>
          )}
          <div className="sm:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 text-xs text-gray-500">
            <Calendar className="w-3 h-3" />
            {formatDate(enquiry.createdAt)}
          </div>
        </div>

        {/* Message */}
        {enquiry.message && (
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : "60px" }}
            className="relative overflow-hidden"
          >
            <div className="flex gap-3 pt-4 border-t border-white/5">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-4 h-4 text-[#73b313]" />
              </div>
              <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-wrap">{enquiry.message}</p>
            </div>

            {!isExpanded && enquiry.message.length > 150 && (
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0a1a0a] to-transparent" />
            )}
          </motion.div>
        )}

        {enquiry.message && enquiry.message.length > 150 && (
          <button
            onClick={onExpand}
            className="mt-2 text-xs text-[#73b313] hover:text-[#c4ff6b] font-medium flex items-center gap-1 transition-colors"
          >
            {isExpanded ? "Show less" : "Read more"}
            <ChevronRight className={`w-3 h-3 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
          </button>
        )}
      </div>
    </motion.article>
  );
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [enquiries, setEnquiries] = useState<(Enquiry & { id: string; createdAt: unknown })[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [togglingId, setTogglingId] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "checked" | "unchecked">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    const ok = typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY) === "true";
    setAuthenticated(ok);
  }, []);

  const loadEnquiries = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getEnquiries();
      setEnquiries(data);
    } catch (e) {
      setEnquiries([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (authenticated) loadEnquiries();
  }, [authenticated, loadEnquiries]);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        sessionStorage.setItem(SESSION_KEY, "true");
        setAuthenticated(true);
        setPassword("");
      } else {
        setError("Incorrect password. Please try again.");
      }
      setSubmitting(false);
    }, 800);
  }

  function handleLogout() {
    sessionStorage.removeItem(SESSION_KEY);
    setAuthenticated(false);
  }

  function handleDownloadCsv() {
    const csv = enquiriesToCsv(enquiries);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `scala-enquiries-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function handleToggleChecked(id: string, current?: boolean) {
    setTogglingId(id);
    const next = !current;
    setEnquiries((prev) => prev.map((e) => (e.id === id ? { ...e, checked: next } : e)));
    try {
      await setEnquiryChecked(id, next);
    } catch {
      setEnquiries((prev) => prev.map((e) => (e.id === id ? { ...e, checked: current } : e)));
    } finally {
      setTogglingId(null);
    }
  }

  const checkedCount = enquiries.filter((e) => e.checked).length;
  const uncheckedCount = enquiries.length - checkedCount;

  const filteredEnquiries = enquiries
    .filter((e) => {
      if (filter === "checked") return !!e.checked;
      if (filter === "unchecked") return !e.checked;
      return true;
    })
    .filter((e) => {
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return (
        e.name?.toLowerCase().includes(query) ||
        e.email?.toLowerCase().includes(query) ||
        e.company?.toLowerCase().includes(query) ||
        e.message?.toLowerCase().includes(query)
      );
    });

  // Login Screen
  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050a05] p-4 relative overflow-hidden">
        <AnimatedBackground />

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-md z-10"
        >
          {/* Gradient Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#73b313] via-[#c4ff6b] to-[#73b313] rounded-3xl opacity-30 blur-xl" />
          <div className="absolute -inset-[1px] bg-gradient-to-r from-[#73b313] via-[#c4ff6b] to-[#73b313] rounded-3xl opacity-50" />

          <div className="relative bg-[#0a1a0a]/95 backdrop-blur-xl rounded-3xl p-8 sm:p-10">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#73b313] to-[#c4ff6b] rounded-2xl blur-xl opacity-50 animate-pulse" />
                <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#73b313] to-[#c4ff6b] flex items-center justify-center shadow-2xl shadow-[#73b313]/30">
                  <Shield className="w-10 h-10 text-black" strokeWidth={1.5} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center mb-8"
            >
              <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
              <p className="text-gray-400">Enter your credentials to access the admin dashboard</p>
            </motion.div>

            <motion.form
              onSubmit={handleLogin}
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="relative group">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-[#73b313]/50 to-[#c4ff6b]/50 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#73b313] transition-colors" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    autoFocus
                    className="w-full rounded-xl bg-white/5 border border-white/10 pl-12 pr-4 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              <PremiumButton disabled={submitting || !password} className="w-full py-4">
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Authenticating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Sign In
                  </>
                )}
              </PremiumButton>
            </motion.form>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 text-center text-xs text-gray-600"
            >
              Protected by Scala Security • v2.0
            </motion.p>
          </div>
        </motion.div>
      </div>
    );
  }

  // Dashboard
  return (
    <div className="min-h-screen bg-[#050a05] text-white relative">
      <AnimatedBackground />

      <div className="relative z-10 p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#73b313] to-[#c4ff6b] flex items-center justify-center">
                <Inbox className="w-6 h-6 text-black" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold">Enquiries</h1>
                <p className="text-gray-400 text-sm">Manage contact form submissions</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <PremiumButton onClick={handleDownloadCsv} disabled={enquiries.length === 0} size="sm">
                <Download className="w-4 h-4" />
                Export CSV
              </PremiumButton>

              <PremiumButton onClick={loadEnquiries} disabled={loading} variant="secondary" size="sm">
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
                Refresh
              </PremiumButton>

              <PremiumButton onClick={handleLogout} variant="ghost" size="sm">
                <LogOut className="w-4 h-4" />
              </PremiumButton>
            </div>
          </motion.header>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard icon={Inbox} label="Total Enquiries" value={enquiries.length} trend="+12%" color="green" delay={0.1} />
            <StatCard icon={CheckCircle2} label="Completed" value={checkedCount} color="blue" delay={0.15} />
            <StatCard icon={Clock} label="Pending" value={uncheckedCount} color="amber" delay={0.2} />
            <StatCard
              icon={TrendingUp}
              label="Response Rate"
              value={enquiries.length > 0 ? `${Math.round((checkedCount / enquiries.length) * 100)}%` : "0%"}
              color="purple"
              delay={0.25}
            />
          </div>

          {/* Filters & Search */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6"
          >
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search enquiries..."
                className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#73b313]/50 transition-colors"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/10">
              {[
                { key: "all", label: "All", count: enquiries.length },
                { key: "unchecked", label: "Pending", count: uncheckedCount },
                { key: "checked", label: "Done", count: checkedCount },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key as typeof filter)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    filter === tab.key
                      ? "bg-gradient-to-r from-[#73b313] to-[#5a8c0f] text-black"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="relative">
                <div className="absolute inset-0 bg-[#73b313]/20 rounded-full blur-xl animate-pulse" />
                <Loader2 className="w-12 h-12 animate-spin text-[#73b313] relative" />
              </div>
              <p className="mt-4 text-gray-400">Loading enquiries...</p>
            </div>
          ) : filteredEnquiries.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#73b313]/5 to-transparent rounded-3xl" />
              <div className="relative bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-3xl p-16 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/5 flex items-center justify-center">
                  <Inbox className="w-10 h-10 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No enquiries found</h3>
                <p className="text-gray-400">
                  {searchQuery ? "Try adjusting your search query" : filter !== "all" ? "Try changing the filter" : "New submissions will appear here"}
                </p>
              </div>
            </motion.div>
          ) : (
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {filteredEnquiries.map((enquiry, index) => (
                  <EnquiryCard
                    key={enquiry.id}
                    enquiry={enquiry}
                    index={index}
                    isToggling={togglingId === enquiry.id}
                    onToggle={() => handleToggleChecked(enquiry.id, enquiry.checked)}
                    isExpanded={expandedId === enquiry.id}
                    onExpand={() => setExpandedId(expandedId === enquiry.id ? null : enquiry.id)}
                  />
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>

    
    </div>
  );
}