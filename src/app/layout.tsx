import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://paletindo.id"),
  title: "Palet Plastik Tangerang Selatan - PT Paletindo Prakarsa Unggul",
  description: "Jual Palet Plastik Tangerang Selatan berkualitas tinggi. PT Paletindo Prakarsa Unggul menyediakan Palet Plastik, Container Industrial, dan Custom Packaging terbaik.",
  keywords: ["Palet Plastik Tangerang Selatan", "Jual Palet Plastik", "Palet Plastik Murah", "Palet Plastik Industri", "Paletindo", "Palet Plastik Banten"],
  verification: {
    google: "JKGzBIgPZIL0-JDnVrFfHhlupAZwI_Gqkt355ECK718",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/icon.png' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  alternates: {
    canonical: "https://paletindo.id",
  },
  openGraph: {
    type: "website",
    siteName: "PT Paletindo Prakarsa Unggul",
    locale: "id_ID",
    url: "https://paletindo.id",
    title: "Palet Plastik Tangerang Selatan - PT Paletindo Prakarsa Unggul",
    description: "Jual Palet Plastik Tangerang Selatan berkualitas tinggi. PT Paletindo Prakarsa Unggul menyediakan Palet Plastik, Container Industrial, dan Custom Packaging terbaik.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "PT Paletindo Prakarsa Unggul Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Palet Plastik Tangerang Selatan - PT Paletindo Prakarsa Unggul",
    description: "Jual Palet Plastik Tangerang Selatan berkualitas tinggi. PT Paletindo Prakarsa Unggul menyediakan Palet Plastik, Container Industrial, dan Custom Packaging terbaik.",
    images: ["/logo.png"],
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
              "name": "PT Paletindo Prakarsa Unggul",
              "description": "Supplier dan distributor palet plastik, container plastik industrial di Tangerang Selatan. Melayani area Serpong Utara, BSD, Ciputat, Pondok Aren.",
              "image": "https://paletindo.id/logo.png",
              "url": "https://paletindo.id",
              "telephone": "+62-21-5374295",
              "email": "marketing@paletindo.id",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jelupang",
                "addressLocality": "Serpong Utara",
                "addressRegion": "Tangerang Selatan",
                "postalCode": "15323",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -6.2465,
                "longitude": 106.6630
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "17:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "08:00",
                  "closes": "13:00"
                }
              ],
              "priceRange": "Rp",
              "areaServed": ["Tangerang Selatan", "Serpong Utara", "BSD", "Ciputat", "Pondok Aren", "Pamulang", "Jakarta Selatan"],
              "sameAs": [
                "https://www.facebook.com/paletindo",
                "https://www.instagram.com/paletindo",
                "https://www.tokopedia.com/paletindo",
                "https://www.blibli.com/merchant/paletindo"
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
