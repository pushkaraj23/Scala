

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
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] animate-pulse"
        style={{ background: "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)" }}
      />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[100px] animate-pulse delay-1000"
        style={{ background: "radial-gradient(circle, var(--color-primary-soft) 0%, transparent 70%)" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px]"
        style={{ background: "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)" }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Particles (deterministic) */}
      {Array.from({ length: 20 }).map((_, i) => {
        const left = 5 + ((i * 11) % 90);
        const top = 5 + ((i * 17) % 90);
        const duration = 4 + (i % 5) * 0.5;
        const delay = i * 0.3;
        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[color:var(--color-primary)]/40"
            style={{
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
            }}
          />
        );
      })}
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
    primary:
      "bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-primary-dark)] text-[color:var(--color-accent-dark)] hover:from-[color:var(--color-primary-dark)] hover:to-[color:var(--color-primary)] shadow-lg shadow-[color:var(--color-primary)]/25",
    secondary:
      "bg-[color:var(--color-accent-dark)]/70 border border-[color:var(--color-border)] text-[color:var(--color-foreground)] hover:bg-[color:var(--color-accent-dark)]/90",
    ghost:
      "text-[color:var(--color-text-muted)] hover:text-[color:var(--color-foreground)] hover:bg-[color:var(--color-accent-dark)]/60",
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
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[color:var(--color-primary)]/0 via-[color:var(--color-primary-soft)]/25 to-[color:var(--color-primary)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_100%] group-hover:animate-shimmer" />
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
    green: "from-[color:var(--color-primary)] to-[color:var(--color-primary-soft)]",
    blue: "from-[color:var(--color-primary)] to-[color:var(--color-accent)]",
    amber: "from-[color:var(--color-primary-soft)] to-[color:var(--color-primary)]",
    purple: "from-[color:var(--color-accent)] to-[color:var(--color-accent-dark)]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative group"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${colorClasses[color]} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
      <div className="relative bg-[color:var(--color-accent-dark)]/80 backdrop-blur-xl border border-[color:var(--color-border)] rounded-2xl p-5 hover:border-[color:var(--color-primary)]/60 transition-all duration-300">
        <div className="flex items-start justify-between mb-3">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center`}>
            <Icon className="w-5 h-5 text-[color:var(--color-accent-dark)]" />
          </div>
          {trend && (
            <span className="flex items-center gap-1 text-xs font-medium text-[color:var(--color-primary)]">
              <TrendingUp className="w-3 h-3" />
              {trend}
            </span>
          )}
        </div>
        <p className="text-2xl font-bold text-[color:var(--color-foreground)] mb-1">{value}</p>
        <p className="text-sm text-[color:var(--color-text-secondary)]">{label}</p>
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
            ? "bg-gradient-to-r from-[color:var(--color-primary)]/45 via-[color:var(--color-primary-soft)]/30 to-[color:var(--color-primary)]/45 opacity-100"
            : "bg-gradient-to-r from-[color:var(--color-surface-light)]/15 to-[color:var(--color-surface)]/10 opacity-0 group-hover:opacity-100"
        }`}
      />

      <div
        className={`relative rounded-2xl p-5 sm:p-6 transition-all duration-300 ${
          isChecked
            ? "bg-gradient-to-br from-[color:var(--color-primary)]/12 via-[color:var(--color-accent-dark)]/90 to-[color:var(--color-accent-dark)]/95"
            : "bg-[color:var(--color-accent-dark)]/80 backdrop-blur-xl hover:bg-[color:var(--color-accent-dark)]/90"
        } border ${
          isChecked
            ? "border-[color:var(--color-primary)]/35"
            : "border-[color:var(--color-border)]/60 hover:border-[color:var(--color-border)]"
        }`}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-4 min-w-0">
            {/* Avatar */}
              <div
                className={`relative w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  isChecked
                    ? "bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-primary-soft)]"
                    : "bg-gradient-to-br from-[color:var(--color-accent-dark)] to-[color:var(--color-accent)]"
                }`}
              >
                <span className={`text-lg font-bold ${isChecked ? "text-[color:var(--color-accent-dark)]" : "text-[color:var(--color-foreground)]"}`}>
                {enquiry.name?.charAt(0)?.toUpperCase() || "?"}
              </span>
              {isChecked && (
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[color:var(--color-primary)] rounded-full flex items-center justify-center border-2 border-[color:var(--color-accent-dark)]">
                  <CheckCircle2 className="w-3 h-3 text-[color:var(--color-accent-dark)]" />
                </div>
              )}
            </div>

            {/* Name & Email */}
            <div className="min-w-0">
              <h3 className="font-semibold text-[color:var(--color-foreground)] text-lg truncate">
                {enquiry.name}
              </h3>
              <a
                href={`mailto:${enquiry.email}`}
                className="text-sm text-[color:var(--color-text-muted)] hover:text-[color:var(--color-primary-soft)] flex items-center gap-1.5 truncate transition-colors"
              >
                <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                {enquiry.email}
              </a>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Time Badge */}
            <span className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[color:var(--color-accent-dark)]/70 text-xs text-[color:var(--color-text-muted)]">
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
                  ? "bg-[color:var(--color-primary)] text-[color:var(--color-accent-dark)]"
                  : "bg-[color:var(--color-accent-dark)]/70 text-[color:var(--color-text-muted)] hover:bg-[color:var(--color-accent-dark)]/90 hover:text-[color:var(--color-foreground)] border border-[color:var(--color-border)]"
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
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[color:var(--color-accent-dark)]/70 text-sm text-[color:var(--color-text-muted)]">
              <Building2 className="w-3.5 h-3.5 text-[color:var(--color-primary)]" />
              {enquiry.company}
            </div>
          )}
          {enquiry.phone && (
            <a
              href={`tel:${enquiry.phone}`}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[color:var(--color-accent-dark)]/70 text-sm text-[color:var(--color-text-muted)] hover:text-[color:var(--color-primary-soft)] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[color:var(--color-primary)]" />
              {enquiry.phone}
            </a>
          )}
          <div className="sm:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[color:var(--color-accent-dark)]/70 text-xs text-[color:var(--color-text-muted)]">
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
            <div className="flex gap-3 pt-4 border-t border-[color:var(--color-border)]/60">
              <div className="w-8 h-8 rounded-lg bg-[color:var(--color-accent-dark)]/70 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-4 h-4 text-[color:var(--color-primary)]" />
              </div>
              <p className="text-sm text-[color:var(--color-text-secondary)] leading-relaxed whitespace-pre-wrap">
                {enquiry.message}
              </p>
            </div>

            {!isExpanded && enquiry.message.length > 150 && (
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[color:var(--color-accent-dark)] to-transparent" />
            )}
          </motion.div>
        )}

        {enquiry.message && enquiry.message.length > 150 && (
          <button
            onClick={onExpand}
            className="mt-2 text-xs text-[color:var(--color-primary)] hover:text-[color:var(--color-primary-soft)] font-medium flex items-center gap-1 transition-colors"
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
      <div className="min-h-screen flex items-center justify-center bg-[color:var(--color-accent-dark)] p-4 relative overflow-hidden">
        <AnimatedBackground />

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-md z-10"
        >
          {/* Gradient Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[color:var(--color-primary)] via-[color:var(--color-primary-soft)] to-[color:var(--color-primary)] rounded-3xl opacity-30 blur-xl" />
          <div className="absolute -inset-[1px] bg-gradient-to-r from-[color:var(--color-primary)] via-[color:var(--color-primary-soft)] to-[color:var(--color-primary)] rounded-3xl opacity-50" />

          <div className="relative bg-[color:var(--color-accent-dark)]/95 backdrop-blur-xl rounded-3xl p-8 sm:p-10">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-primary-soft)] rounded-2xl blur-xl opacity-50 animate-pulse" />
                <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-primary-soft)] flex items-center justify-center shadow-2xl shadow-[color:var(--color-primary)]/30">
                  <Shield className="w-10 h-10 text-[color:var(--color-accent-dark)]" strokeWidth={1.5} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center mb-8"
            >
              <h1 className="text-3xl font-bold text-[color:var(--color-foreground)] mb-2">
                Welcome Back
              </h1>
              <p className="text-[color:var(--color-text-secondary)]">
                Enter your credentials to access the admin dashboard
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleLogin}
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="relative group">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-[color:var(--color-primary)]/40 to-[color:var(--color-primary-soft)]/40 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[color:var(--color-text-muted)] group-focus-within:text-[color:var(--color-primary)] transition-colors" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    autoFocus
                    className="w-full rounded-xl bg-[color:var(--color-accent-dark)]/70 border border-[color:var(--color-border)] pl-12 pr-4 py-4 text-[color:var(--color-foreground)] placeholder:text-[color:var(--color-text-muted)] focus:outline-none focus:border-[color:var(--color-primary)] transition-all duration-300"
                  />
                </div>
              </div>

              <AnimatePresence>
                {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -10, height: 0 }}
                      className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[color:var(--color-error)]/10 border border-[color:var(--color-error)]/25 text-[color:var(--color-error)] text-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-[color:var(--color-error)]" />
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
              className="mt-8 text-center text-xs text-[color:var(--color-text-muted)]"
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
    <div className="min-h-screen bg-[color:var(--color-accent-dark)] text-[color:var(--color-foreground)] relative">
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
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-primary-soft)] flex items-center justify-center">
                <Inbox className="w-6 h-6 text-[color:var(--color-accent-dark)]" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold">Enquiries</h1>
                <p className="text-[color:var(--color-text-secondary)] text-sm">
                  Manage contact form submissions
                </p>
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
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[color:var(--color-text-muted)]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search enquiries..."
                className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-[color:var(--color-accent-dark)]/70 border border-[color:var(--color-border)] text-[color:var(--color-foreground)] placeholder:text-[color:var(--color-text-muted)] focus:outline-none focus:border-[color:var(--color-primary)]/60 transition-colors"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-[color:var(--color-accent-dark)]/80 border border-[color:var(--color-border)]">
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
                      ? "bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-primary-dark)] text-[color:var(--color-accent-dark)]"
                      : "text-[color:var(--color-text-muted)] hover:text-[color:var(--color-foreground)] hover:bg-[color:var(--color-accent-dark)]/60"
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
                <div className="absolute inset-0 bg-[color:var(--color-primary)]/20 rounded-full blur-xl animate-pulse" />
                <Loader2 className="w-12 h-12 animate-spin text-[color:var(--color-primary)] relative" />
              </div>
              <p className="mt-4 text-[color:var(--color-text-secondary)]">Loading enquiries...</p>
            </div>
          ) : filteredEnquiries.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-primary)]/10 to-transparent rounded-3xl" />
              <div className="relative bg-[color:var(--color-accent-dark)]/80 backdrop-blur-xl border border-[color:var(--color-border)] rounded-3xl p-16 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[color:var(--color-accent-dark)]/70 flex items-center justify-center">
                  <Inbox className="w-10 h-10 text-[color:var(--color-text-muted)]" />
                </div>
                <h3 className="text-xl font-semibold text-[color:var(--color-foreground)] mb-2">
                  No enquiries found
                </h3>
                <p className="text-[color:var(--color-text-secondary)]">
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