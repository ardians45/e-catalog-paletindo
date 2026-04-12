# E-Catalog Paletindo

E-Catalog Paletindo adalah platform katalog produk digital modern yang dibangun untuk menampilkan produk palet dan kontainer industri dari Paletindo. Aplikasi ini dirancang untuk memberikan pengalaman pencarian produk yang mulus bagi pelanggan serta sistem manajemen konten (CMS) yang kuat bagi admin.

## 🚀 Fitur Utama

- **Katalog Produk Dinamis**: Penjelajahan produk dengan filter kategori dan pencarian real-time.
- **Detail Produk Mendalam**: Informasi teknis lengkap termasuk material, dimensi (panjang, lebar, tinggi), berat, dan warna.
- **Sistem RFQ (Request for Quote)**: Memungkinkan pelanggan mengirim permintaan penawaran harga langsung melalui platform.
- **Perbandingan Produk**: Fitur untuk membandingkan spesifikasi antara beberapa produk sekaligus.
- **Blog & Artikel**: Portal informasi untuk membagikan berita industri dan edukasi produk.
- **Panel Admin Premium**: Dashboard khusus untuk mengelola inventaris produk, artikel, dan unggahan gambar melalui Supabase Storage.
- **Desain Responsif & Modern**: Dibangun dengan Tailwind CSS 4 dan Framer Motion untuk antarmuka yang elegan dan hidup.

## 🛠️ Teknologi yang Digunakan

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) & [Lucide React](https://lucide.dev/) (Icons)
- **Animasi**: [Framer Motion](https://www.framer.com/motion/)
- **Backend & Database**: [Supabase](https://supabase.com/) (PostgreSQL, Auth, & Storage)
- **State Management**: React Hooks & Server Actions

## 📦 Instalasi

1. **Clone repositori**:
   ```bash
   git clone https://github.com/ardians45/e-catalog-paletindo.git
   cd e-catalog-paletindo
   ```

2. **Instal dependensi**:
   ```bash
   npm install
   ```

3. **Konfigurasi Environment**:
   Buat file `.env.local` di direktori root dan masukkan kredensial Supabase Anda:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Setup Database**:
   Gunakan file `supabase-migration.sql` atau `migrate-products-data.sql` di dashboard SQL Supabase untuk menyiapkan tabel dan policy yang diperlukan.

5. **Jalankan Server Pengembangan**:
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 📂 Struktur Proyek

- `src/app/`: Routing aplikasi (Next.js App Router).
- `src/components/`: Komponen UI yang reusable.
- `src/lib/`: Konfigurasi library pihak ketiga (Supabase, utils).
- `public/`: Aset statis seperti gambar dan logo.
- `scripts/`: Skrip pembantu untuk scraping dan migrasi data.

## 📝 Lisensi

Proyek ini dikembangkan untuk kebutuhan internal **Paletindo**. Hak cipta dilindungi undang-undang.

---
*Dibuat dengan ❤️ oleh [ardians45](https://github.com/ardians45)*
