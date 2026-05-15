"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  
  // Custom mapping for prettier labels
  const labelMap: Record<string, string> = {
    "products": "Produk",
    "blog": "Blog",
    "about": "Tentang Kami",
    "contact": "Kontak",
    "rfq": "Minta Penawaran",
    "palet-plastik-tangerang-selatan": "Tangerang Selatan",
    "pallet-plastik-serpong-utara": "Serpong Utara",
    "pallet-plastik-serpong": "Serpong",
    "pallet-plastik-bsd": "BSD City",
    "pallet-plastik-ciputat": "Ciputat",
    "pallet-plastik-pondok-aren": "Pondok Aren",
    "pallet-plastik-pamulang": "Pamulang",
  };

  return (
    <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
      <Link href="/" className="hover:text-zinc-900 transition-colors flex items-center gap-1">
        <Home className="w-3 h-3" /> Beranda
      </Link>
      
      {pathSegments.map((segment, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
        const isLast = index === pathSegments.length - 1;
        const label = labelMap[segment] || segment.replace(/-/g, " ");

        return (
          <div key={href} className="flex items-center gap-2">
            <ChevronRight className="w-3 h-3 text-zinc-300" />
            {isLast ? (
              <span className="text-[#D4A373]">{label}</span>
            ) : (
              <Link href={href} className="hover:text-zinc-900 transition-colors">
                {label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
