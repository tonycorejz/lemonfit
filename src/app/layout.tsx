import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';

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
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
