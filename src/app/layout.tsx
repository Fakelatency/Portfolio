import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hubert Brończyk | Full Stack Web Developer",
  description: "Portfolio i CV Huberta Brończyka. Full Stack Web Developer, przedsiębiorca, wykonawca i instruktor. Technologie: React, Next.js, Node.js, PostgreSQL.",
  keywords: ["Hubert Brończyk", "Full Stack Developer", "Web Developer", "React", "Next.js", "TypeScript", "CV", "Portfolio", "Toruń", "SoHa PSA"],
  authors: [{ name: "Hubert Brończyk" }],
  openGraph: {
    title: "Hubert Brończyk | Full Stack Web Developer & Przedsiębiorca",
    description: "Zajrzyj do mojego portfolio. Od fazy koncepcyjnej i projektowania UX/UI do wdrożenia zaawansowanych systemów.",
    type: "profile",
    locale: "pl_PL",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
