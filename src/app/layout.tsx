import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://paletindo.id"),
  title: "Jual Pallet Plastik & Container Box Industri — Ready Stock Jabodetabek | PT Paletindo",
  description: "Pabrik & Supplier Pallet Plastik Heavy Duty, Food Grade, serta Container Box Industri / Keranjang Plastik. Harga Grosir Direct Pabrik & Kirim Hari Ini!",
  keywords: [
    "Jual Pallet Plastik",
    "Container Box Industri",
    "Box Container Plastik",
    "Jual Container Box Terdekat",
    "Pallet Plastik Tangerang Selatan",
    "Supplier Pallet Plastik Industri",
    "Pabrik Palet Plastik",
    "Keranjang Plastik Industri",
    "PT Paletindo Prakarsa Unggul"
  ],
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
    title: "Jual Pallet Plastik & Container Box Industri — Ready Stock Jabodetabek | PT Paletindo",
    description: "Pabrik & Supplier Pallet Plastik Heavy Duty, Food Grade, serta Container Box Industri / Keranjang Plastik. Harga Grosir Direct Pabrik & Kirim Hari Ini!",
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
    title: "Jual Pallet Plastik & Container Box Industri — Ready Stock Jabodetabek | PT Paletindo",
    description: "Pabrik & Supplier Pallet Plastik Heavy Duty, Food Grade, serta Container Box Industri / Keranjang Plastik. Harga Grosir Direct Pabrik & Kirim Hari Ini!",
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
              "@type": ["LocalBusiness", "Organization"],
              "name": "PT Paletindo Prakarsa Unggul",
              "legalName": "PT Paletindo Prakarsa Unggul",
              "description": "Supplier utama & pabrik distributor pallet plastik industri, container box solid & berlubang, dan custom packaging berkualitas tinggi di Jabodetabek.",
              "image": "https://paletindo.id/logo.png",
              "url": "https://paletindo.id",
              "telephone": "+62-878-7766-2097",
              "email": "marketing@paletindo.id",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jelupang, Kec. Serpong Utara",
                "addressLocality": "Tangerang Selatan",
                "addressRegion": "Banten",
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
              "priceRange": "$$",
              "areaServed": [
                "Tangerang Selatan",
                "Serpong Utara",
                "BSD City",
                "Ciputat",
                "Pondok Aren",
                "Pamulang",
                "Serpong",
                "Jakarta",
                "Tangerang",
                "Bekasi",
                "Bogor",
                "Depok",
                "Karawang"
              ],
              "knowsAbout": [
                "Pallet Plastik Heavy Duty",
                "Pallet Plastik Food Grade",
                "Container Box Industri",
                "Container Solid",
                "Container Berlubang",
                "Custom Packaging Industri"
              ],
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
