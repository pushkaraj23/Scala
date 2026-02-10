"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Download, Loader2, Mail, User, Building2, Phone, MessageSquare, Calendar, CheckCircle2, Circle } from "lucide-react";
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
        (r.checked ? "Yes" : "No"),
      ].join(",")
    ),
  ];
  return lines.join("\r\n");
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
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "true");
      setAuthenticated(true);
      setPassword("");
    } else {
      setError("Incorrect password.");
    }
    setSubmitting(false);
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
    // optimistic update
    setEnquiries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, checked: next } : e))
    );
    try {
      await setEnquiryChecked(id, next);
    } catch {
      // revert on error
      setEnquiries((prev) =>
        prev.map((e) => (e.id === id ? { ...e, checked: current } : e))
      );
    } finally {
      setTogglingId(null);
    }
  }

  const checkedCount = enquiries.filter((e) => e.checked).length;
  const uncheckedCount = enquiries.length - checkedCount;

  const filteredEnquiries = enquiries.filter((e) => {
    if (filter === "checked") return !!e.checked;
    if (filter === "unchecked") return !e.checked;
    return true;
  });

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[color:var(--color-foreground)] p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl"
        >
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-xl bg-[color:var(--color-primary)]/20 flex items-center justify-center text-[color:var(--color-primary)]">
              <Lock size={28} strokeWidth={1.8} />
            </div>
          </div>
          <h1 className="text-xl font-semibold text-white text-center mb-2">Admin</h1>
          <p className="text-sm text-white/60 text-center mb-6">Enter password to continue</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              autoFocus
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[color:var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/30 transition"
            />
            {error && <p className="text-sm text-[color:var(--color-error)]">{error}</p>}
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-xl px-4 py-3 text-base font-semibold bg-[color:var(--color-primary)] text-white hover:bg-[color:var(--color-primary-dark)] disabled:opacity-70 transition"
            >
              {submitting ? "Checking…" : "Sign in"}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[color:var(--color-surface)] p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-[color:var(--color-foreground)]">Enquiries</h1>
          <p className="mt-1 text-[color:var(--color-text-secondary)]">Contact form submissions from the website.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 flex flex-wrap items-center gap-4 justify-between"
        >
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleDownloadCsv}
              disabled={enquiries.length === 0}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold bg-[color:var(--color-primary)] text-white hover:bg-[color:var(--color-primary-dark)] disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              <Download size={18} />
              Download CSV
            </button>
            <button
              type="button"
              onClick={loadEnquiries}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium border border-[color:var(--color-border)] bg-[color:var(--color-background)] text-[color:var(--color-foreground)] hover:bg-[color:var(--color-surface-light)] disabled:opacity-70 transition"
            >
              {loading ? <Loader2 size={18} className="animate-spin" /> : "Refresh"}
            </button>
          </div>

          <div className="inline-flex items-center gap-1 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] p-1 text-xs font-medium text-[color:var(--color-text-secondary)]">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-3 py-1.5 rounded-lg transition ${filter === "all" ? "bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)]" : ""}`}
            >
              All ({enquiries.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter("checked")}
              className={`px-3 py-1.5 rounded-lg transition ${filter === "checked" ? "bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)]" : ""}`}
            >
              Checked ({checkedCount})
            </button>
            <button
              type="button"
              onClick={() => setFilter("unchecked")}
              className={`px-3 py-1.5 rounded-lg transition ${filter === "unchecked" ? "bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)]" : ""}`}
            >
              Unchecked ({uncheckedCount})
            </button>
          </div>
        </motion.div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 size={32} className="animate-spin text-[color:var(--color-primary)]" />
          </div>
        ) : filteredEnquiries.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] p-12 text-center text-[color:var(--color-text-secondary)]"
          >
            No enquiries in this view.
          </motion.div>
        ) : (
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredEnquiries.map((e, i) => {
                const isChecked = !!e.checked;
                return (
                  <motion.article
                    key={e.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className={`rounded-2xl p-5 sm:p-6 shadow-sm border ${
                      isChecked
                        ? "border-[color:var(--color-primary)]/50 bg-[color:var(--color-surface)]"
                        : "border-[color:var(--color-border)] bg-[color:var(--color-background)]"
                    }`}
                  >
                  <div className="flex flex-wrap items-start gap-4 sm:gap-6">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-[color:var(--color-primary)]/15 flex items-center justify-center text-[color:var(--color-primary)] flex-shrink-0">
                        <User size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-[color:var(--color-foreground)] truncate">{e.name}</p>
                        <p className="text-sm text-[color:var(--color-text-secondary)] flex items-center gap-1.5 truncate">
                          <Mail size={14} className="flex-shrink-0" />
                          {e.email}
                        </p>
                      </div>
                    </div>
                    {e.company && (
                      <div className="flex items-center gap-2 text-sm text-[color:var(--color-text-secondary)]">
                        <Building2 size={16} className="flex-shrink-0" />
                        {e.company}
                      </div>
                    )}
                    {e.phone && (
                      <div className="flex items-center gap-2 text-sm text-[color:var(--color-text-secondary)]">
                        <Phone size={16} className="flex-shrink-0" />
                        {e.phone}
                      </div>
                    )}
                    <div className="flex items-center gap-3 text-xs text-[color:var(--color-text-muted)] w-full sm:w-auto">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-2 py-1 text-[10px] font-medium uppercase tracking-wide">
                        <Calendar size={12} className="flex-shrink-0" />
                        {formatDate(e.createdAt)}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleToggleChecked(e.id!, e.checked)}
                        disabled={togglingId === e.id}
                        className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wide border  ${
                          isChecked
                            ? "border-[color:var(--color-primary)]/70 bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)]"
                            : "border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-foreground)] hover:border-[color:var(--color-primary)]/60 hover:bg-[color:var(--color-surface-light)]"
                        } disabled:opacity-70`}
                      >
                        {isChecked ? (
                          <CheckCircle2 size={12} className="text-[color:var(--color-primary)]" />
                        ) : (
                          <Circle size={12} className="text-[color:var(--color-text-muted)]" />
                        )}
                        {isChecked ? "Checked" : "Mark checked"}
                      </button>
                    </div>
                  </div>
                  {e.message && (
                    <div className="mt-4 pt-4 border-t border-[color:var(--color-border)] flex gap-2">
                      <MessageSquare size={18} className="text-[color:var(--color-text-muted)] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-[color:var(--color-text-secondary)] whitespace-pre-wrap">{e.message}</p>
                    </div>
                  )}
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
