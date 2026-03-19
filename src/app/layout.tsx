import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { RFQProvider } from "@/components/providers/RFQProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PT Paletindo Prakarsa Unggul - Suplier Palet & Container",
  description: "B2B E-Catalog untuk Palet Plastik, Container Industrial, dan Custom Packaging.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col antialiased bg-zinc-50 text-zinc-900`} suppressHydrationWarning>
        <RFQProvider>
          <Navbar />
          <main className="flex-grow flex flex-col">
            {children}
          </main>
          <Footer />
        </RFQProvider>
      </body>
    </html>
  );
}
