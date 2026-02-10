"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[color:var(--color-accent)] text-white">
            {/* Top CTA Strip */}
            <div className="border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                        Ready to bring visibility and control to your distribution?
                    </h3>
                    <p className="text-white/80 max-w-2xl mx-auto mb-6">
                        Scala helps brands manage inventory, incentives, fraud control, and
                        last-mile execution on one unified platform.
                    </p>

                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center
                       rounded-lg px-6 py-3 text-sm font-medium
                       bg-[color:var(--color-primary)]
                       text-white
                       hover:bg-[color:var(--color-primary-dark)]
                       transition"
                    >
                        Request a Demo
                    </a>
                </div>
            </div>

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 text-lg font-semibold mb-4">
                            <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--color-primary)]" />
                            Scala
                        </div>
                        <p className="text-white/75 text-sm max-w-sm">
                            An end-to-end distribution, inventory, and incentive management
                            platform with real-time visibility and built-in fraud control.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">
                            Platform
                        </h4>
                        <ul className="space-y-3 text-sm text-white/75">
                            <li>
                                <a href="#solution" className="hover:text-white transition">
                                    Solution
                                </a>
                            </li>
                            <li>
                                <a href="#features" className="hover:text-white transition">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#industries" className="hover:text-white transition">
                                    Industries
                                </a>
                            </li>
                            <li>
                                <a href="#deployment" className="hover:text-white transition">
                                    Deployment
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">
                            Contact
                        </h4>
                        <ul className="space-y-3 text-sm text-white/75">
                            <li className="flex items-start gap-3">
                                <Mail size={16} className="mt-0.5" />
                                <span>hello@scalasuite.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={16} className="mt-0.5" />
                                <span>+91 90133 37705</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="mt-0.5" />
                                <span>Noida • Ghaziabad • Pune</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6
                        flex flex-col sm:flex-row items-center justify-between
                        text-xs text-white/60">
                    <span>© {new Date().getFullYear()} Scala. All rights reserved.</span>
                    <span className="mt-2 sm:mt-0">
                        You control the brand. We protect the platform.
                    </span>
                </div>
            </div>
        </footer>
    );
}
