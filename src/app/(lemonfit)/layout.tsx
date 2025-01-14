import type { Metadata } from "next";
import "../globals.css";
import { Inter } from 'next/font/google';
import { Footer, Header } from "@/widgets";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";

const inter = Inter({
  weight: ['500', '700', '900'],
  style: ['normal'],
  subsets: ['cyrillic'],
  display: 'swap',
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "lemonfit",
  description: "Фитнес зал",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${inter.variable} antialiased h-full flex flex-col relative`}
      >
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
