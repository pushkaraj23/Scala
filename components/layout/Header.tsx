"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
    { label: "Solution", href: "#solution" },
    { label: "Features", href: "#features" },
    { label: "Industries", href: "#industries" },
    { label: "Deployment", href: "#deployment" },
    { label: "Contact", href: "#contact" },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[color:var(--color-background)]/80 backdrop-blur border-b border-[color:var(--color-border)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="#hero"
                        className="flex items-center gap-2 font-semibold text-lg text-[color:var(--color-foreground)]"
                    >
                        <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--color-primary)]" />
                        Scala
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="relative text-sm font-medium text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-accent)] transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[color:var(--color-primary)] after:transition-all hover:after:w-full"
                            >
                                {item.label}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            className="ml-4 inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium bg-[color:var(--color-primary)] text-white hover:bg-[color:var(--color-primary-dark)] shadow-sm shadow-[color:var(--color-primary)]/30 transition"
                        >
                            Request Demo
                        </a>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden inline-flex items-center justify-center rounded-lg border border-[color:var(--color-border)] p-2 text-[color:var(--color-foreground)] bg-[color:var(--color-background)]/90"
                        aria-label="Toggle Menu"
                    >
                        {open ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden border-t border-[color:var(--color-border)] bg-[color:var(--color-background)]/95 backdrop-blur">
                    <div className="px-4 py-4 space-y-4">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="block text-sm font-medium text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-accent)] py-1"
                            >
                                {item.label}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            onClick={() => setOpen(false)}
                            className="block w-full text-center rounded-lg px-5 py-3 text-sm font-medium bg-[color:var(--color-primary)] text-white hover:bg-[color:var(--color-primary-dark)] shadow-sm shadow-[color:var(--color-primary)]/30 transition"
                        >
                            Request Demo
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
