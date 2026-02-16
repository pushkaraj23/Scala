"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[color:var(--color-accent)] text-[color:var(--color-accent-foreground)]">
            {/* Top CTA Strip */}
            <div className="border-b border-[color:var(--color-accent-foreground)]/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                        Ready to Transform Your Distribution Network?
                    </h3>
                    <p className="opacity-90 max-w-2xl mx-auto mb-6">
                        Supply Chain Distribution & Incentive Management — real-time visibility,
                        automated incentives, and fraud control on one unified platform.
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
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 text-lg font-semibold mb-4">
                            <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--color-primary)]" />
                            Scala
                        </div>
                        <p className="opacity-85 text-sm max-w-sm">
                            An yution, inventory, and incentive management
                            platform with real-time visibility and built-in fraud control.
                        </p>
                        <p className="mt-4 opacity-75 text-xs">
                            Built for brands that run complex, multi-level distribution and loyalty
                            programs and need complete control over inventory, incentives and fraud.
                        </p>
                    </div>

                    {/* Platform Links */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">
                            Platform
                        </h4>
                        <ul className="space-y-3 text-sm opacity-85">
                            <li>
                                <a href="#solution" className="hover:opacity-100 transition-opacity">
                                    Solution
                                </a>
                            </li>
                            <li>
                                <a href="#features" className="hover:opacity-100 transition-opacity">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#pricing" className="hover:text-white transition">
                                    Pricing
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
                            <li>
                                <a href="#integrations" className="hover:opacity-100 transition-opacity">
                                    Integrations
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">
                            Resources
                        </h4>
                        <ul className="space-y-3 text-sm opacity-85">
                            <li>
                                <a href="#demo" className="hover:opacity-100 transition-opacity">
                                    Product Demo
                                </a>
                            </li>
                            <li>
                                <a href="#testimonials" className="hover:opacity-100 transition-opacity">
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a href="#faqs" className="hover:opacity-100 transition-opacity">
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a href="#gallery" className="hover:opacity-100 transition-opacity">
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="hover:opacity-100 transition-opacity">
                                    About Scala
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">
                            Contact
                        </h4>
                        <ul className="space-y-3 text-sm opacity-85">
                            <li className="flex items-start gap-3">
                                <Mail size={16} className="mt-0.5" />
                                <span>hello@scalasuite.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={16} className="mt-0.5" />
                                <a href="tel:+919013337705" className="hover:opacity-100 transition-opacity">+91 901-333-7705</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="mt-0.5" />
                                <span>Noida • Ghaziabad • Pune</span>
                            </li>
                            <li className="pt-2 text-xs opacity-70">
                                For partnerships, integrations or enterprise deployments, reach out to{" "}
                                <span className="font-medium opacity-100">hello@scalasuite.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[color:var(--color-accent-foreground)]/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6
                        flex flex-col sm:flex-row items-center justify-between gap-4
                        text-xs opacity-75">
                    <span>© 2025 Paxgrow India Pvt. Ltd. All rights reserved.</span>
                    <span className="font-semibold opacity-95 uppercase tracking-wider">
                        Your Growth Partner
                    </span>
                </div>
            </div>
        </footer>
    );
}
