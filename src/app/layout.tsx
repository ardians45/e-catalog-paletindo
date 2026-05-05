import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://paletindo.vercel.app"),
  title: "Palet Plastik Tangerang Selatan - PT Paletindo Prakarsa Unggul",
  description: "Jual Palet Plastik Tangerang Selatan berkualitas tinggi. PT Paletindo Prakarsa Unggul menyediakan Palet Plastik, Container Industrial, dan Custom Packaging terbaik.",
  keywords: ["Palet Plastik Tangerang Selatan", "Jual Palet Plastik", "Palet Plastik Murah", "Palet Plastik Industri", "Paletindo", "Palet Plastik Banten"],
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
      <head>
        <link rel="preconnect" href="https://tqqlnlscdhrwyaqkbiaq.supabase.co" />
        <link rel="dns-prefetch" href="https://tqqlnlscdhrwyaqkbiaq.supabase.co" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "PT Paletindo Prakarsa Unggul - Palet Plastik Tangerang Selatan",
              "image": "https://paletindo.vercel.app/logo.png",
              "@id": "https://paletindo.vercel.app",
              "url": "https://paletindo.vercel.app",
              "telephone": "+62215374295",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jelupang, Serpong Utara",
                "addressLocality": "Tangerang Selatan",
                "addressRegion": "Banten",
                "postalCode": "15323",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -6.2625,
                "longitude": 106.6719
              },
              "description": "Pusat jual Palet Plastik Tangerang Selatan. Menyediakan palet plastik berkualitas, container industri, dan solusi packaging untuk kebutuhan logistik B2B.",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "08:00",
                "closes": "17:00"
              },
              "sameAs": [
                "https://www.facebook.com/paletindo",
                "https://www.instagram.com/paletindo"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col antialiased bg-zinc-50 text-zinc-900`} suppressHydrationWarning>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
