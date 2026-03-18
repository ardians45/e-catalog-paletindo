import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-white p-1 rounded-md">
                <Image
                  src="/logo.jpeg"
                  alt="Logo PT Paletindo Prakarsa Unggul"
                  width={32}
                  height={32}
                  className="object-contain mix-blend-multiply"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                PT Paletindo Prakarsa Unggul
              </span>
            </div>
            <p className="text-sm text-zinc-500 max-w-xs mt-6 leading-relaxed">
              Spesialis Palet Plastik, Container Plastik Industrial, Container Distribusi, Container Lipat, Container Jumbo, Crat Plastik, Crat Botol, Crat Galon, Crat Buah, Lunch Box, Crat Gelas, Crat Piring, Spare Part Case, Shopping Crates, Container Unggas, Safety Helmet, Tempat Sampah Plastik Jumbo, Tatakan Plastik, Tool Box, Utility Box Etc.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              E-Catalog
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-sm hover:text-[#D4A373] transition-colors">
                  Semua Produk
                </Link>
              </li>
              <li>
                <Link href="/products?category=palet" className="text-sm hover:text-[#D4A373] transition-colors">
                  Palet Plastik
                </Link>
              </li>
              <li>
                <Link href="/products?category=container" className="text-sm hover:text-[#D4A373] transition-colors">
                  Container Industri
                </Link>
              </li>
              <li>
                <Link href="/categories/custom" className="text-sm hover:text-[#D4A373] transition-colors">
                  Custom Palet
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-sm hover:text-[#D4A373] transition-colors">
                  Bandingkan Produk
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Perusahaan
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm hover:text-[#D4A373] transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/about#testimonials" className="text-sm hover:text-[#D4A373] transition-colors">
                  Testimoni Pelanggan
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-[#D4A373] transition-colors">
                  Artikel & Berita
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-[#D4A373] transition-colors">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Kontak B2B
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-[#D4A373] shrink-0" />
                <a href="https://maps.app.goo.gl/U49BaoBxpcoPw7hV8" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">
                  Jl. Raya Ps. Kemis No.11, Kutajaya, Kec. Ps. Kemis<br/>Kabupaten Tangerang, Banten 15560
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-[#D4A373] shrink-0" />
                <div className="flex flex-col space-y-2 text-sm">
                  <div>
                    <span className="text-zinc-500 text-xs block mb-0.5">Telp / Fax</span>
                    <a href="tel:0215374295" className="hover:text-white transition-colors">(021) 5374295</a>
                  </div>
                  <div>
                    <span className="text-zinc-500 text-xs block mb-0.5">Fast Respon HP</span>
                    <a href="tel:+6287877662097" className="hover:text-white transition-colors block">087-877-66-2097</a>
                    <a href="tel:+6281288197597" className="hover:text-white transition-colors block">0812-8819-7597</a>
                  </div>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-[#D4A373] shrink-0" />
                <div className="flex flex-col space-y-1">
                  <a href="mailto:Paletindointimakmur@yahoo.co.id" className="text-sm hover:text-white transition-colors break-all">
                    Paletindointimakmur@yahoo.co.id
                  </a>
                  <a href="mailto:Marketing@paletindo.com" className="text-sm hover:text-white transition-colors break-all">
                    Marketing@paletindo.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} PT Paletindo Prakarsa Unggul. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-zinc-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-zinc-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
