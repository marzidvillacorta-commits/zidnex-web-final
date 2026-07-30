import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const headingFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Zidnex Digital | Digital Engineering",
  description: "We build digital systems, commerce platforms, and tailored software for demanding enterprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${headingFont.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans bg-[#F8FAFC] text-[#0F172A] selection:bg-[#3B82F6] selection:text-white">
        <main className="flex-1">
          {children}
          <CookieConsent />
        </main>
      </body>
    </html>
  );
}
