import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import LayoutWrapper from "@/components/layout/LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ==================================
   SEO METADATA (SCALA)
================================== */

export const metadata: Metadata = {
  title: {
    default: "Scala – Distribution, Inventory & Incentive Management Platform",
    template: "%s | Scala",
  },
  description:
    "Scala is an end-to-end distribution, inventory, and incentive management platform offering real-time visibility, automated rewards, and built-in fraud control.",
  keywords: [
    "distribution management software",
    "inventory management system",
    "incentive management platform",
    "loyalty management software",
    "supply chain visibility",
    "fraud control incentives",
    "FMCG distribution software",
  ],
  metadataBase: new URL("https://www.scalasuite.com"),
  openGraph: {
    title: "Scala – Unified Distribution & Incentive Platform",
    description:
      "Manage inventory, incentives, fraud detection, and last-mile execution on one unified platform.",
    url: "https://www.scalasuite.com",
    siteName: "Scala",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ==================================
   ROOT LAYOUT
================================== */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[color:var(--color-background)] text-[color:var(--color-foreground)]`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
