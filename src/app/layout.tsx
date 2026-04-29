import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PT Paletindo Prakarsa Unggul - Suplier Palet & Container",
  description: "B2B E-Catalog untuk Palet Plastik, Container Industrial, dan Custom Packaging.",
  verification: {
    google: "JKGzBIgPZIL0-JDnVrFfHhlupAZwI_Gqkt355ECK718",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col antialiased bg-zinc-50 text-zinc-900`} suppressHydrationWarning>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
