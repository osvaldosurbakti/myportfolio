"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import { ThemeProvider } from "@/context/ThemeContext";
import { use } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-gray-100 text-gray-900`}>
      <ThemeProvider>
        <Navbar />
        <main className="container mx-auto px-4 pt-16 pb-24">{children}</main>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}