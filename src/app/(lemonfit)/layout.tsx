import type { Metadata } from "next";
import "../globals.css";
import { Inter } from 'next/font/google';
import { Footer, Header } from "@/widgets";
import { Toaster } from "@/components/ui/toaster";

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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col justify-between relative`}
      >
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
