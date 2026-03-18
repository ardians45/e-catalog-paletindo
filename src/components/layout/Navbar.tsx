"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Katalog Produk", href: "/products" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Artikel & Berita", href: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <Image
                src="/logo.jpeg"
                alt="Logo PT Paletindo Prakarsa Unggul"
                width={40}
                height={40}
                className="object-contain mix-blend-multiply"
                priority
              />
              <span className="text-xl font-bold tracking-tight text-zinc-900 hidden sm:block">
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
                className="text-sm font-medium text-zinc-500 hover:text-[#D4A373] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              className="p-2 text-zinc-500 hover:text-[#D4A373] transition-colors rounded-full hover:bg-zinc-50"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link
              href="/rfq"
              className="relative p-2 text-zinc-500 hover:text-[#D4A373] transition-colors rounded-full hover:bg-zinc-50"
              aria-label="Keranjang RFQ"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#D4A373] text-[10px] font-bold text-white shadow-sm">
                0
              </span>
            </Link>

            <Link
              href="/rfq"
              className="hidden md:flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 transition-all"
            >
              Minta Penawaran
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 text-zinc-600 rounded-md hover:bg-zinc-100 hover:text-zinc-900"
              onClick={() => setIsOpen(!isOpen)}
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
