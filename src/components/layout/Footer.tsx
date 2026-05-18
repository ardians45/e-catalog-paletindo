import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Kolom 1 - Produk */}
          <div>
            <h3 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8">
              Kategori Produk
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/products?category=Palet%20plastik" className="text-sm font-medium hover:text-[#D4A373] transition-colors">
                  Palet Plastik
                </Link>
              </li>
              <li>
                <Link href="/products?category=Container%20Solid" className="text-sm font-medium hover:text-[#D4A373] transition-colors">
                  Container Solid
                </Link>
              </li>
              <li>
                <Link href="/products?category=Container%20Berlubang" className="text-sm font-medium hover:text-[#D4A373] transition-colors">
                  Container Berlubang
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm font-medium hover:text-[#D4A373] transition-colors">
                  Semua Produk
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 2 - Area Layanan */}
          <div>
            <h3 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8">
              Area Layanan
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/palet-plastik-tangerang-selatan" className="text-sm font-bold text-zinc-300 hover:text-[#D4A373]">
                  Tangerang Selatan
                </Link>
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <Link href="/pallet-plastik-serpong-utara" className="text-[10px] text-zinc-500 hover:text-white">Serpong Utara</Link>
                  <Link href="/pallet-plastik-serpong" className="text-[10px] text-zinc-500 hover:text-white">Serpong</Link>
                  <Link href="/pallet-plastik-bsd" className="text-[10px] text-zinc-500 hover:text-white">BSD City</Link>
                  <Link href="/pallet-plastik-ciputat" className="text-[10px] text-zinc-500 hover:text-white">Ciputat</Link>
                  <Link href="/pallet-plastik-pondok-aren" className="text-[10px] text-zinc-500 hover:text-white">Pondok Aren</Link>
                  <Link href="/pallet-plastik-pamulang" className="text-[10px] text-zinc-500 hover:text-white">Pamulang</Link>
                </div>
              </li>
            </ul>
          </div>

          {/* Kolom 3 - Informasi */}
          <div>
            <h3 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8">
              Informasi
            </h3>
            <ul className="space-y-4">
              <li><Link href="/blog" className="text-sm font-medium hover:text-[#D4A373] transition-colors">Blog & News</Link></li>
              <li><Link href="/about" className="text-sm font-medium hover:text-[#D4A373] transition-colors">Tentang Kami</Link></li>
              <li><Link href="/contact" className="text-sm font-medium hover:text-[#D4A373] transition-colors">Kontak</Link></li>
              <li><Link href="/faq" className="text-sm font-medium hover:text-[#D4A373] transition-colors">FAQ</Link></li>
              <li><Link href="/privacy" className="text-sm font-medium hover:text-[#D4A373] transition-colors">Kebijakan Privasi</Link></li>
            </ul>
          </div>

          {/* Kolom 4 - Kontak */}
          <div>
            <h3 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8">
              Hubungi Kami
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="h-5 w-5 text-[#D4A373] shrink-0" />
                <p className="text-sm leading-relaxed">
                  Jelupang, Kec. Serpong Utara<br />
                  Tangerang Selatan, Banten 15323
                </p>
              </li>
              <li className="flex gap-4">
                <Phone className="h-5 w-5 text-[#D4A373] shrink-0" />
                <div className="text-sm space-y-1">
                  <a href="tel:+6287877662097" className="block hover:text-white">087-877-66-2097</a>
                  <a href="tel:+6281288197597" className="block hover:text-white">0812-8819-7597</a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="h-5 w-5 text-[#D4A373] shrink-0" />
                <a href="mailto:Marketing@paletindo.com" className="text-sm hover:text-white truncate">Marketing@paletindo.com</a>
              </li>
              <li className="flex gap-4">
                <Clock className="h-5 w-5 text-[#D4A373] shrink-0" />
                <div className="text-sm">
                  <p className="font-bold text-zinc-300">Jam Operasional:</p>
                  <p>Senin - Jumat: 08:00 - 17:00</p>
                  <p>Sabtu: 08:00 - 14:00</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Logo PT Paletindo Prakarsa Unggul"
              width={32}
              height={32}
              className="object-contain mix-blend-screen opacity-50 grayscale"
            />
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">
              &copy; {new Date().getFullYear()} PT Paletindo Prakarsa Unggul.
            </p>
          </div>
          <div className="flex gap-6">
             <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
             <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
             <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
