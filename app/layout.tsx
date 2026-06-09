import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finex Money - Your Money. Your Rules. Zero Delays.",
  description:
    "Skip the queues and the paperwork. Open your bank account instantly with just your SA ID, foreign passport, or permit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
