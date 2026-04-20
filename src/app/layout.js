import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingNav from "@/components/FloatingNav";
import Footer from "@/components/Footer";
import Courosel from "@/components/Showcase";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MyStore",
  description: "Quality Products for Your Home",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <FloatingNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
