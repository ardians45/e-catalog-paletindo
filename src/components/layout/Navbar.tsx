"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart, Search, ChevronDown } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useRFQ } from "@/components/providers/RFQProvider";

export default function Navbar() {
  const { items } = useRFQ();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
    { 
      name: "Produk", 
      href: "/products",
      submenu: [
        { name: "Palet Plastik", href: "/products?category=Palet%20Plastik", 
          child: [
            { name: "Heavy Duty", href: "/products?category=Heavy%20Duty" },
            { name: "Food Grade", href: "/products?category=Food%20Grade" },
            { name: "Medium Duty", href: "/products?category=Medium%20Duty" },
          ]
        },
        { name: "Container Plastik", href: "/products?category=Container%20Industri" },
        { name: "Crat Plastik", href: "/products?category=Crat%20Plastik" },
      ]
    },
    { 
      name: "Area Layanan", 
      href: "#",
      submenu: [
        { 
          name: "Tangerang Selatan", 
          href: "/palet-plastik-tangerang-selatan",
          child: [
            { name: "Serpong Utara", href: "/pallet-plastik-serpong-utara" },
            { name: "Serpong", href: "/pallet-plastik-serpong" },
            { name: "BSD City", href: "/pallet-plastik-bsd" },
            { name: "Ciputat", href: "/pallet-plastik-ciputat" },
            { name: "Pondok Aren", href: "/pallet-plastik-pondok-aren" },
            { name: "Pamulang", href: "/pallet-plastik-pamulang" },
          ]
        }
      ]
    },
    { name: "Blog", href: "/blog" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Kontak", href: "/contact" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        isScrolled 
          ? "border-b border-zinc-200 bg-white/80 backdrop-blur-md py-4 shadow-sm" 
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
              <div className="flex flex-col">
                <span className={cn(
                  "text-lg font-black tracking-tighter leading-none transition-colors",
                  !isScrolled && isHome ? "text-white" : "text-zinc-900"
                )}>
                  PALETINDO.
                </span>
                <span className={cn(
                  "text-[8px] font-bold uppercase tracking-[0.3em] mt-1 transition-colors",
                  !isScrolled && isHome ? "text-zinc-400" : "text-zinc-500"
                )}>
                  Prakarsa Unggul
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group py-4"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center gap-1",
                    !isScrolled && isHome ? "text-zinc-300 hover:text-white" : "text-zinc-500 hover:text-zinc-900",
                    pathname === link.href && "text-[#D4A373]"
                  )}
                >
                  {link.name}
                  {link.submenu && <ChevronDown className="w-3 h-3" />}
                </Link>

                {link.submenu && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 w-64 bg-white border border-zinc-100 shadow-2xl rounded-2xl overflow-hidden py-3 animate-in fade-in slide-in-from-top-2 duration-300">
                    {link.submenu.map((sub) => (
                      <div key={sub.name} className="relative group/sub">
                        <Link
                          href={sub.href}
                          className="flex items-center justify-between px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-all"
                        >
                          {sub.name}
                          {sub.child && <ChevronDown className="w-3 h-3 -rotate-90" />}
                        </Link>
                        
                        {sub.child && (
                          <div className="absolute left-full top-0 w-56 bg-white border border-zinc-100 shadow-2xl rounded-2xl overflow-hidden py-3 hidden group-hover/sub:block animate-in fade-in slide-in-from-left-2 duration-300">
                            {sub.child.map((c) => (
                              <Link
                                key={c.name}
                                href={c.href}
                                className="block px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
                              >
                                {c.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
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

            <Link
              href="/rfq"
              className={cn(
                "hidden md:flex items-center justify-center rounded-xl px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-all",
                !isScrolled && isHome 
                  ? "bg-white text-zinc-950 hover:bg-[#D4A373]" 
                  : "bg-zinc-900 text-white hover:bg-zinc-800"
              )}
            >
              Minta Penawaran
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className={cn(
                "xl:hidden p-2 rounded-md transition-colors",
                !isScrolled && isHome ? "text-white hover:bg-white/10" : "text-zinc-600 hover:bg-zinc-100"
              )}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "xl:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white border-t border-zinc-100",
          isOpen ? "max-h-[80vh] opacity-100 py-6" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-6 space-y-4">
          {navLinks.map((link) => (
            <div key={link.name} className="space-y-2">
              <Link
                href={link.href}
                className="block text-sm font-black uppercase tracking-widest text-zinc-900"
                onClick={() => !link.submenu && setIsOpen(false)}
              >
                {link.name}
              </Link>
              {link.submenu && (
                <div className="pl-4 space-y-3 border-l border-zinc-100 mt-2">
                  {link.submenu.map((sub) => (
                    <div key={sub.name} className="space-y-2">
                      <Link
                        href={sub.href}
                        className="block text-[11px] font-bold uppercase tracking-widest text-zinc-500 hover:text-[#D4A373]"
                        onClick={() => !sub.child && setIsOpen(false)}
                      >
                        {sub.name}
                      </Link>
                      {sub.child && (
                        <div className="pl-4 space-y-2">
                          {sub.child.map((c) => (
                            <Link
                              key={c.name}
                              href={c.href}
                              className="block text-[10px] font-medium text-zinc-400 hover:text-[#D4A373]"
                              onClick={() => setIsOpen(false)}
                            >
                              • {c.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/rfq"
            className="mt-8 block w-full rounded-xl bg-zinc-900 px-4 py-4 text-center text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-xl"
            onClick={() => setIsOpen(false)}
          >
            Minta Penawaran Sekarang
          </Link>
        </div>
      </div>
    </header>
  );
}
