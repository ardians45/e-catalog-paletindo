"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useRFQ } from "@/components/providers/RFQProvider";

export default function Navbar() {
  const { items } = useRFQ();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Katalog Produk", href: "/products" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Artikel & Berita", href: "/blog" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        isScrolled 
          ? "border-b border-zinc-200 bg-white/80 backdrop-blur-md py-4" 
          : isHome 
            ? "bg-transparent border-transparent py-6" 
            : "border-b border-zinc-200 bg-white/80 backdrop-blur-md py-4"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <Image
                src="/logo.png"
                alt="Logo PT Paletindo Prakarsa Unggul"
                width={40}
                height={40}
                className="object-contain mix-blend-multiply"
                priority
              />
              <span className={cn(
                "text-xl font-bold tracking-tight hidden sm:block transition-colors",
                !isScrolled && isHome ? "text-white" : "text-zinc-900"
              )}>
                PT Paletindo Prakarsa Unggul
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#D4A373]",
                  !isScrolled && isHome ? "text-zinc-300" : "text-zinc-500"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/rfq"
              className={cn(
                "relative p-2 transition-colors rounded-full hover:bg-white/10",
                !isScrolled && isHome ? "text-white" : "text-zinc-500"
              )}
              aria-label="Keranjang RFQ"
            >
              <ShoppingCart className="h-5 w-5" />
              {items.length > 0 && (
                <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#D4A373] text-[10px] font-bold text-white shadow-sm">
                  {items.length}
                </span>
              )}
            </Link>

            {(!isScrolled && isHome) ? (
              <Link
                href="/rfq"
                className="hidden md:flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-zinc-950 shadow-2xl hover:bg-[#D4A373] transition-all"
              >
                Minta Penawaran
              </Link>
            ) : (
              <Link
                href="/rfq"
                className="hidden md:flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-bold text-white shadow hover:bg-zinc-800 transition-all"
              >
                Minta Penawaran
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 text-zinc-600 rounded-md hover:bg-zinc-100 hover:text-zinc-900"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100 border-t border-zinc-200" : "max-h-0 opacity-0"
        )}
      >
        <div className="space-y-1 px-4 pb-3 pt-2 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block rounded-lg px-4 py-3 text-base font-medium text-zinc-600 hover:bg-zinc-50 hover:text-[#D4A373] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/rfq"
            className="mt-6 block w-full rounded-full bg-zinc-900 px-4 py-3 text-center text-base font-medium text-white shadow-md hover:bg-zinc-800 transition-all"
            onClick={() => setIsOpen(false)}
          >
            Minta Penawaran
          </Link>
        </div>
      </div>
    </header>
  );
}
