// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Inter, Bricolage_Grotesque } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });

export const metadata: Metadata = {
  title: "Rastlaus – Make. Break. Ship.",
  description: "Et lite, effektivt kollektiv som bygger produkter for oss selv – og for de modige som blir med.",
  metadataBase: new URL("https://rastlaus.example"), // sett din prod-URL etter deploy
  openGraph: {
    title: "Rastlaus – Make. Break. Ship.",
    description: "Små produkter, store streker.",
    url: "/",
    siteName: "Rastlaus",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "nb_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rastlaus – Make. Break. Ship.",
    description: "Små produkter, store streker.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no" className={`${inter.variable} ${bricolage.variable}`}>
      <body>{children}</body>
    </html>
  );
}