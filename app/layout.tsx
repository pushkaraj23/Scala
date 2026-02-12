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
    default: "Scala – Supply Chain Distribution & Incentive Management System",
    template: "%s | Scala",
  },
  description:
    "Scala by Paxgrow India: End-to-end supply chain distribution and incentive management. Real-time visibility, 99.9% tracking accuracy, 95% fraud prevention, 7-day go-live.",
  keywords: [
    "supply chain distribution",
    "incentive management system",
    "distribution management software",
    "inventory management system",
    "loyalty management software",
    "fraud control incentives",
    "FMCG distribution software",
    "Paxgrow India",
  ],
  metadataBase: new URL("https://www.scalasuite.com"),
  openGraph: {
    title: "Scala – Supply Chain Distribution & Incentive Management | Paxgrow India",
    description:
      "Grow beyond boundaries. Unified platform for distribution, inventory, incentives, and fraud control. A product of www.scalasuite.com – Paxgrow India Pvt. Ltd.",
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
