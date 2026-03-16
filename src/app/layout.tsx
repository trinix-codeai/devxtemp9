import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap"
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Aster Hospital CRM",
  description: "Patient-centric hospital CRM with clinical workflows and analytics."
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-sand text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
