-- ==========================================
-- MIGRASI PRODUK dari dummy_data.json
-- Total: 189 produk
-- Jalankan di Supabase SQL Editor
-- ==========================================

BEGIN;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK SOLID 42.5 X 29 X 20.5 CM', 'container-plastik-solid-42-5-x-29-x-20-5-cm', 'Tipe : Container Plastik Industrial, Solid & Stack-able Dimensi : 42.5 x 29 x 20.5 Cm Material : HDPE Co/ PP Block Warna : Merah, Biru, Kuning & Hijau Kegunaan : Handling ...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 42.5, 29, 20.5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MPC+4088+Blue.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK SOLID 74.5 X 51.5 X 35 CM', 'container-plastik-solid-74-5-x-51-5-x-35-cm', 'Tipe : Container Plastik Industrial, Solid & Stack-able Dimensi : 74.5 x 51.5 x 35 Cm Material : HDPE Co / PP Block Co Warna : Kuning, Biru, Hijau, Merah Kegunaan : Handling M...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 74.5, 51.5, 35, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MPC+7033_Yellow1+.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK SOLID 63,1 X 41,6 X 32.3 CM', 'container-plastik-solid-63-1-x-41-6-x-32-3-cm', 'Tipe : Container Plastik Industrial, Solid & Stackable  Material : HDPE Co/PP Block Co ORIGINAL Warna : Sunny Blue, Heavy Duty Kegunaan : Handling Material, Produk pada b...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Container+Plastik+MPC+16+.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK SOLID 33.5 X 16.8 X 10 CM', 'container-plastik-solid-33-5-x-16-8-x-10-cm', 'Dimensi : 33.5 (P) x 16.8 (L) x 10 (T) Cm Tipe : Container Plastik Industrial, Solid & Stackable, Tebal dan Kuat Material : PP Block Copolymer Warna : Biru, Merah, Kuning, Hija...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 33.5, 16.8, 10, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MPC+6262+Yellow+(FILEminimizer).JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK DENGAN TUTUP (LID)', 'container-plastik-dengan-tutup-lid', 'Dimensi Container : 62 (P) x 43 (L) x 25 Cm Dimensi Tutup : 63 (P) x 44 (L) x 3 (T) Cm Tipe : Container Plastik Industrial, Solid & Stackable Material : PP Block Copolymer War...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 62, 43, 25, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MPC+2244+With+Lid+(FILEminimizer).JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('KERANJANG BELANJA BUTTERFLY', 'keranjang-belanja-butterfly', 'Tipe : Keranjang Belanja/ Shopping Basket + Handle Dimensi : 41.5 X 33 X 26 Cm  Material : PP Warna : Biru, Pink, Merah, Hijau Kegunaan : Keranjang Belanja pada Hipermarket, Convenience ...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 41.5, 33, 26, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Keranjang+Belanja+Elegant+Butterfly.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK 67 X 33.5 X 19.5 CM', 'container-plastik-67-x-33-5-x-19-5-cm', 'Tipe : Container Plastik Industrial, Solid & Stackable Material : HDPE Co/  PP Block Copolymer Warna : Biru, Kuning, Merah, Orange & Hijau Kegunaan: Handling Material...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 67, 33.5, 19.5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/DSCF9773+MPC+6655+Blue+Benneton.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK SOLID 58 X 38 X 21 CM', 'container-plastik-solid-58-x-38-x-21-cm', 'Tipe : Container Plastik Industrial, Solid, Nestable & Stackable Dimensi : 58 (P) x 38 (L) x 21 (T) Cm Material : HDPE Co/ PP Block Co Warna : Biru, Kuning, Hijau, Merah, Abu-...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 58, 38, 21, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/DSCF9734_MPC+5011.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK JUMBO 84 X 62 X 54.5 CM DENGAN RODA', 'container-plastik-jumbo-84-x-62-x-54-5-cm-dengan-roda', 'Tipe : Container Plastik Industrial, Berlubang, Stackable + Roda Dimensi : 84 (P) x 62 (L) x 54.5 (T) Cm Material : HDPE Co/ PP Block Co Warna : Biru, Kuning, Merah, Hijau & H...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 84, 62, 54.5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MPC+7908_Blue.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK SOLID 62 X 43 X 25 CM', 'container-plastik-solid-62-x-43-x-25-cm', 'Tipe : Container Plastik Industrial, Solid & Stackable Material : HDPE Co/ PP Block Dimensi : 62 (P) x 43 (L) x 25 (T) Cm Warna : Biru, Merah, Kuning, Hijau & Hitam Keguna...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 62, 43, 25, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MPC+2244_Blue.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTANER PLASTIK SOLID 67 X 33.5 X 28.8 CM', 'contaner-plastik-solid-67-x-33-5-x-28-8-cm', 'Tipe : Container Plastik Industrial, Solid, Heavy Duty & Stackable Material : HDPE Co/ PP Block Warna : Biru, Kuning, Orange, Hijau, Merah Fungsi : Handling Material pada Berb...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 67, 33.5, 28.8, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/DSCF9407+MPC+6656+Orange.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK 50.3 X 33.5 X 38 CM', 'container-plastik-50-3-x-33-5-x-38-cm', 'Tipe : Container Plastik Industrial, Heavy Duty, Solid & Stackable Material : HDPE Co/ PP Block Warna : Merah, Biru, Kuning, Hijau, Orange Fungsi : Handling Material pada Berbag...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 50.3, 33.5, 38, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/DSCF9410+MPC+6558+Blue_Top+View.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK SOLID 50.3 X 33.5 X 28.8 CM', 'container-plastik-solid-50-3-x-33-5-x-28-8-cm', 'Tipe : Container Plastik Industrial, Solid & Stackable Material : HDPE Co/ PP Block  Warna : Hijau, Biru, Kuning, Merah, Orange Fungsi : Handling Material pada Berbagai B...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 50.3, 33.5, 28.8, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/DSCF9428+MPC+6556+Green_Top+View.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK SOLID 50.3 X 33.5 X 19.5 CM', 'container-plastik-solid-50-3-x-33-5-x-19-5-cm', 'Tipe : Container Plastik Solid, Stackable Material : HDPE Co/ PP Block Warna : Biru, Merah, Kuning, Hijau, Orange Fungsi : Handling Material pada Berbagai Jenis Industri/ Manufact...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 50.3, 33.5, 19.5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/DSCF9421+MPC+6555_Orange+Top+View.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK SOLID 50.3 X 33.5 X 10.3 CM', 'container-plastik-solid-50-3-x-33-5-x-10-3-cm', 'Tipe : Container Plastik Solid, Industrial, Stackable Material : HDPE Co/ PP Block Warna : Biru, Kuning, Hijau, Orange Fungsi : Handling Material pada Berbagai Jenis Industri/ Man...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 50.3, 33.5, 10.3, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/DSCF9417+MPC+6553_Orange.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK 65 X 43 X 31.5 CM', 'container-plastik-65-x-43-x-31-5-cm', 'Tipe : Container Plastik Multipurposes, Nestable, Berlubang Dimensi : 65 (P) x 43 (L) x 31.5 (T) Cm Standar Warna : Merah, Biru, Kuning, Hijau Material : PP Block Copolymer Keguna...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 65, 43, 31.5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/DSCF9034.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER JUMBO 81 X 58 X 53 CM', 'container-jumbo-81-x-58-x-53-cm', 'Dimensi : 81 (P) x 58 (L) x 53 (T) Cm Tipe : Container Plastik Jumbo, Holes, Stackable + Roda Material : PP Block Copolymer Standar Warna : Biru, Merah, Hijau, Kuning Kegunaan : Handling Mate...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 81, 58, 53, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MPC+7009_Blue+Top+View.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK SOLID 50.5 X 33.5 X 18.5 CM', 'container-plastik-solid-50-5-x-33-5-x-18-5-cm', 'Tipe : Container Plastik Industrial, Solid, Stackable Dimensi : 50,5 (P) X 33.5 (L) X 18.5 (T) Cm Material : PP Block Standar Warna : Merah, Kuning, Biru & Hijau Kegunaan : Ha...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 50.5, 33.5, 18.5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MPC+6033_Blue.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK LIPAT 68 X 46 X 28 CM', 'container-plastik-lipat-68-x-46-x-28-cm', 'Tipe : Container Plastik Industrial, Lipat (Folded), Berlubang Dimensi : 68 (P) X 46 (L) X 28 (T) CM Dimensi Terlipat : 68 (P) X 46 (L) X 7 (T) CM Material : PP Block Standar Warn...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 68, 46, 28, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Container+Plastik+Lipat_1101_Yellow.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK SOLID 52 X 43 X 31 CM', 'container-plastik-solid-52-x-43-x-31-cm', 'Dimensi : 52 (P) X 37 (L) X 31 (T) CM Tipe : Container Plastik Industrial, Solid & Stackable Material : PP Standar Warna : Merah, Kuning, Hijau, Hitam Kegunaan : Handling Mate...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 52, 43, 31, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/DSCF9151_MPC+2230+PP_Black.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK SOLID 61 X 41 X 31 CM', 'container-plastik-solid-61-x-41-x-31-cm', 'Dimensi : 61 X 41 X 31 Cm (MPC 2240 PP) Material : PP Original Tipe : Container Plastik Industrial, Solid, Stackable Standart Warna : Merah, Biru, Kuning Kegunaan : Handling Mater...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 61, 41, 31, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/DSCF9133_MPC+2240_Red.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK SOLID 61 X 41 X 38 CM', 'container-plastik-solid-61-x-41-x-38-cm', 'Dimensi : 61 X 41 X 38 Cm (MPC 2242 PP) Material : PP Original Tipe : Container Plastik Industrial, Solid, Stackable Standart Warna : Merah, Biru, Kuning Kegunaan : Handling Mater...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 61, 41, 38, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/DSCF9139_MPC+2242_Yellow.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER SOLID 33.5 X 33.5 X 19.5 CM', 'container-solid-33-5-x-33-5-x-19-5-cm', 'Dimensi: 33.5 (P) X 33.5 (L) X 19.5 (T) CM Material: Hdpe Co/ PP Block Tipe: Container Plastik Solid, Stackable Standar Warna : Merah, Biru, Kuning Kegunaan: Handling Material/ Produk Pada Be...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 33.5, 33.5, 19.5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MPC+6644+Blue.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK SOLID 62 X 43 X 38 CM', 'container-plastik-solid-62-x-43-x-38-cm', 'Dimensi : 62 (P) x 43 (L) x 38 (T) Cm Material : PP Block  Standar Warna : Merah, Kuning, Biru, Hijau Tipe : Container Plastik Solid, Multipurposes, Heavy Duty Kegunaan : Han...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 62, 43, 38, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MPC+2088_Yellow.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('TRAY PLASTIK', 'tray-plastik', 'Dimensi : 61 (P) x 30.5 (L) x 4 (T) Cm Material : PP Block Standart Warna : Biru Tipe : Tray Plastik Fungsi : Handling Material pada perusahaan Assembling Ordere : Berdasarkan PO ...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Lainnya', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/DSCF9161.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK INDUSTRI 62 X 43 X 38 CM', 'container-plastik-industri-62-x-43-x-38-cm', 'Dimensi : 62 (P) x 43 (L) x 38 (T) Cm Material : PP Block Tipe : Container Plastik Industrial, Stackable, Heavy Duty Fungsi : Handling Material/ Produk pada berbagai Industri Stand...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 62, 43, 38, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/20130903_150702.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK DENGAN RODA', 'container-plastik-dengan-roda', 'Dimensi : 66 (P) X 49 (L) X 42 (T) CM Material : HDPE CO PO/ PP BLOCK Tipe : Container Plastik Multipurposes, Berlubang Fungsi: Handling Material pada Berbagai Bidang Industri, Re...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/20130903_150513.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('HELM PROYEK - SAFETY HELMET', 'helm-proyek-safety-helmet', 'Dimensi : 29 (P) X 22 (L) X 14 (T) Cm Material : PP Block Polymer, ABS Berat : 230 Gr Warna : Putih, Kuning, Biru & Merah Fitur : Kuat dan tahan lama, dilengkapi dengan tali d...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Safety Equipment', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Safety+Helmet_Biru2.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK INDUSTRIAL 61.5 X 41.5 X 31.5 CM', 'container-plastik-industrial-61-5-x-41-5-x-31-5-cm', 'Tipe : Container Plastik Industrial, Berlubang & Stack-able Dimensi : 61.5 [P] x 41.5 [L] x 31.5 Cm [T] Material : PP Block Warna : Merah, Kuning, Biru, Hijau Aplikasi : Handl...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 61.5, 41.5, 31.5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MPC+08+A.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK SOLID 41.5 X 28.5 X 16 CM', 'container-plastik-solid-41-5-x-28-5-x-16-cm', 'Tipe : Container Plastik Industrial, Solid & Stack-able Dimensi : 41.5 [P] x 28.5 [L] x 16 Cm [T] Material : PP Standar Warna : Merah, Kuning, Hijua, Biru Aplikasi : Handling ...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 41.5, 28.5, 16, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MPC+52.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK BERLUBANG 70 X 37.5 X 42 CM', 'container-plastik-berlubang-70-x-37-5-x-42-cm', 'Tipe : Container Plastik Industrial, Stack-able, Berlubang Dimensi : 70 [P] x 37.5 [L] x 42 [T] Cm Standar Warna : Merah, Kuning, Hijau & Biru Aplikasi : Material Handling pad...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 70, 37.5, 42, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MPC+5056+Blue+Benetton.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK SOLID 60 X 40 X 15 CM + TUTUP', 'container-plastik-solid-60-x-40-x-15-cm-tutup', 'Tipe : Container Plastik Industrial, Solid & Stack-able Dimensi : 60 [P] x 40 [L] x 15 [T] Cm Aplikasi : Handling Material pada Berbagai Bidang Industri, Manufacturing, Proses...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 60, 40, 15, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MPC+3322+Blue+Benetton.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK INDUSTRI 67 X 33.5 X 10 CM', 'container-plastik-industri-67-x-33-5-x-10-cm', 'Dimensi : 67 [P] x 33.5 [L] x 10 [T] Cm Material : HDPE Co/ PP Block Co Tipe : Container Plastik Industri, Solid & Stackable Standar Warna : Biru, Merah, Kuning, Hijau Kegunaa...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 67, 33.5, 10, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MPC-6653.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CRAT GELAS ISI 50 PCS', 'crat-gelas-isi-50-pcs', 'Dimensi : 84.5 [P] x 44.5 [L] x 14.5 [T] Cm Material : HDPE Co/ PP Block Co Kapasitas : 50 Gelas, Stack-able Standar Warna : Merah, Biru, Kuning, Hijau Order Berdasarkan PO  ...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Box Food Grade', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Crat+Gelas+Isi+50+(FILEminimizer).JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK SOLID 33.5 X 33.5 X 10 CM', 'container-plastik-solid-33-5-x-33-5-x-10-cm', 'Dimensi : 33.5 X 33.5 X 10 Cm Material : PP Block Copolymer Warna : Biru, Merah, Kuning, Hijau, Abu-Abu Asesoris : Card Holder/ Label Holder, Sablon Logo Kegunaan : Handling Mater...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 33.5, 33.5, 10, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MPC+6464+Blue+With+Marking.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK INDUSTRIAL BERLUBANG', 'container-plastik-industrial-berlubang', 'Tipe : Container Plastik Industrial, Berlubang & Stack-able Material : HDPE Co/ PP Block Co Dimensi : 64.9 [P] X 42.5 [L] X 15.3 [T] Cm Solid/ Rapat pada Dinding Lebar dan Pan...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 64.9, 42.5, 15.3, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MPC+22_Blue.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER LOGISTIK "NEW DESIGN"', 'container-logistik-new-design', 'Tipe : Container Plastik Logistik [Transport Crate] Dimensi : 60 [P] x 39.5 [L] x 32.5 [T] Cm Material : HDPE Co/ PP Block Co Original 100 % Warna : Customized/ Sesuai Pesanan&nbs...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 60, 39.5, 32.5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Transport+Crate+50+Liter+Blue+Sunny.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK INDUSTRIAL 41.5 X 28.5 X 16 CM', 'container-plastik-industrial-41-5-x-28-5-x-16-cm', 'Tipe : Container Plastik Industrial, Solid & Stackable Dimensi : 41.5 [P] x 28.5 [L] x 16 [T] Cm Material : HDPE Co/ PP Block Co Warna : Merah, Kuning. Hitam, Biru, Hijau Bisa...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 41.5, 28.5, 16, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MPC+6011_Yellow.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK INDUSTRIAL 24.5 X 18.5 X 11.5 CM', 'container-plastik-industrial-24-5-x-18-5-x-11-5-cm', 'Dimensi : 24.5 [P] x 18.5 [L] x 11.5 [T] Cm Material : HDPE Co/ PP Block Co Tipe : Container Plastik Industrial, Solid & Stack-able Standart Warna : Merah, Kuning, Biru, Hijau...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 24.5, 18.5, 11.5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MPC+6111Red+.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK INDUSTRIAL 60 X 40 X 40 CM SOLID', 'container-plastik-industrial-60-x-40-x-40-cm-solid', 'Tipe : Container Plastik Industrial, Solid & Stack-able Dimensi : 60 [P] x 40 [L]x 40 [T] Cm Material : PP Block Copolymer Standart Warna : Merah, Kuning, Biru, Hijau, Abu-Abu...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 60, 40, 40, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MPC+3329_+Blue.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('KERANJANG [BASKET] PLASTIK MULTIGUNA', 'keranjang-basket-plastik-multiguna', 'Tipe container plastik ini didesign untuk dipakai pada bidang industri yang tidak memerlukan container plastik tipe heavy duty. Seperti pada bidang industri pembuatan Apparel, Ase...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 39, 29.5, 12.5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Keranjang+Multi+Kecil.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('PLASTIK MESH 150 LUBANG', 'plastik-mesh-150-lubang', 'Tipe : Plastics Mesh 150 Lubang Dimensi : 55 cm [P] x 40 [L] x 2 cm [T] Material : HDPE Co/ PP Block Co Standar Warna : Merah, Kuning, Biru Fungsi : Plantation Tube Etc Harga Rp. ...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Lainnya', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Plastics+Mesh+150+Lubang.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK DENGAN SEKAT [2]', 'container-plastik-dengan-sekat-2', 'Dimensi : 50.5 [P] x 33 [L] x 12.5 [T] Cm Tipe : Container Plastik Industrial, Solid dan Stack-able Dilengkapi dengan Sekat ( Warna Sekat : White Natural) Material : HDPE Co/ PP B...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MPC+6055+++Skat.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK DENGAN SEKAT [1]', 'container-plastik-dengan-sekat-1', 'Dimensi : 36 [P] x 27 [L] x 13 [T] Cm Tipe : Container Plastik Industrial, Solid, Stack-able  Dilengkapi dengan Sekat. Kegunaan : Handling Material [Komponen] pada Berbagai B...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MPC+6053+++Skat.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK SOLID 62 X 43 X 21.5 CM', 'container-plastik-solid-62-x-43-x-21-5-cm', 'Tipe : Container Plastik Industrial, Solid & Stackable Material : HDPE Co/ PP Block Co Warna : Abu-Abu, Merah, Kuning, Hijau, Biru Aplikasi : Material Handling pada Bidang Per...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 62, 43, 21.5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MPC+2233_Grey.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK SOLID 48.5 X 35.5 X 27 CM', 'container-plastik-solid-48-5-x-35-5-x-27-cm', 'Tipe : Container Plastik Industrial, Solid & Stackable Material : HDPE Co/ PP Block Warna : Merah, Biru, Kuning, Hijau Fungsi : Handling material pada perbagai Bidang Industri...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 48.5, 35.5, 27, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MPC+3033_Yellow.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK SOLID MPC 18 D', 'container-plastik-solid-mpc-18-d', 'Tipe : Container Plastik Industrial, Solid, Heavy Duty, Stackable & Nestable Dimensi : 62.2 x 42.3 x 31.7 Cm Material : HDPE Co/ PP Block Co Warna : Kuning, Biru, Merah & ...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 62.2, 42.3, 31.7, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MPC+-+18+D+Red+Benetton.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK 50 X 35.5 X 27 CM', 'container-plastik-50-x-35-5-x-27-cm', 'Tipe : Container Plastik Industrial, Solid & Nestable Dimensi : 50 X 35.5 X 27 Cm + Tutup [Lid] Material : HDPE Co/ PP Block Co Warna : Biru Muda Kegunaan : Handling Material ...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 50, 35.5, 27, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MPC+5000_Light+Blue.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK SOLID 47.5 x 36 x 8 CM', 'container-plastik-solid-47-5-x-36-x-8-cm', 'Tipe : Container Plastik Industrial, Solid & Nest -able Dimensi : 47.5 [P] x 36 [L] x 8 Cm [T] Material : PP Block Copolymer Standar Warna : Merah, Kuning, Biru, Hijau Aplikasi : Handling...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 47.5, 36, 8, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Container+Solid+6066+Green.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('KRAT BOTOL ISI 24', 'krat-botol-isi-24', 'Tipe : Krat Botol Isi 24 Botol Dimensi : 52.5 [P] x 36 [L] x 32 Cm [T] Material : PP Block Copolymer, Stack-able Standar Warna : Merah, Bir u Aplikasi : Krat Untuk Botol B i r, Ke...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Lainnya', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Krat+Botol+Isi+24+Merah.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK INDUSTRIAL SOLID 37 X 28 X 10 CM', 'container-plastik-industrial-solid-37-x-28-x-10-cm', 'Tipe : Container Plastik Industrial, Solid & Stack-able Dimensi : 37[P] x 28[L] x 10 Cm [T] Material : PP Block Copolymer Standar Warna : Merah, Kuning, Biru, Hijau Aplikasi :...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 37, 28, 10, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MPC+6052+Blue+Benetton.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('UTILITY BOX 3007', 'utility-box-3007', 'Tipe : Utility Box Seri 3007 Dimensi : 42.7 [P] x 27.3 [L] x 12.7 [T] Cm Kompartemen : Double Layer Up to 50 Kompartemen Material : PP Original Standar Warna : Yellow Dark Grey, R...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Tackle+Box+3007+Kuning+Dark+Grey.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK 69 X 49 X 39.5 CM', 'container-plastik-69-x-49-x-39-5-cm', 'Tipe : Container Plastik Industrial, Solid & Stack-able Dimensi : 69 [P] x 49 [L] x 39.5 Cm [T] Material : PP Block Copolymer Standar Warna : Merah, Kuning, Biru, Hijau Aplika...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 69, 49, 39.5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Container+Plastik+69+x+49+x+39.5+Cm_Solid+Blue+Benetton.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('UTILITY BOX 1500', 'utility-box-1500', 'Tipe : Utility Box Dimensi : 22 [P] x 13.5 [L] x 5.6 [T] Cm Kompartemen : 2 Sisi / Double Side. 16 Kompartemen Material : PP Original Standar Warna : Putih Clear, Hijau Clear, Kun...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Utility+Box+1500_1.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('UTILITY BOX 450', 'utility-box-450', 'Tipe : Utility Box Dimensi : 13.6 [P] x 7.5 [L] x 5.1 [T] Cm Kompartemen : 2 Sisi / Double Side. 6 Kompartemen Material : PP Original Standar Warna : Putih Clear, Hijau Clear, Kuni...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Utility+Box+450_1.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('UTILITY BOX 800', 'utility-box-800', 'Tipe : Utility Box Dimensi : 19.8 [P] x 8.9 [L] x 5 [T] Cm Kompartemen : 2 Sisi / Double Side. 7 Kompartemen Material : PP Original Standar Warna : Putih Clear, Hijau Clear, Kunin...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Utility+Box+800.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('PART CASE  PC 3000 DOUBLE SIDE', 'part-case-pc-3000-double-side', 'Tipe : Part-Case - With Adjustable Divider Dimensi : 26 [P] x 21.3 [L] x 10.7[T] Cm Kompartemen : 2 Sisi Material : PP Original Standar Warna : White- Clear , Orange -Clear, Kunin...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Utility+Box+3000+Double_Sided.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('PART CASE PC 3700', 'part-case-pc-3700', 'Tipe : Utility Box With Adjustable Divider Dimensi : 36 [P] x 23 [L] x 5 [T] Cm Kompartemen : Up to 48 / Dapat disesuaikan dengan Kebutuhan Material : PP Original Standar Warna : Putih Transp...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Part+Case+3700+Clear.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('PART CASE PC 2200', 'part-case-pc-2200', 'Tipe : Part Case With Adjustable Divider Dimensi : 27.5 [P] x 19.1 [L] x 4.6 [T] Cm Kompartemen : Up to 38 / Dapat disesuaikan dengan Kebutuhan Material : PP Original Standar Warna : Clear, Ku...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/PC+2200.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('UTILITY BOX 900', 'utility-box-900', 'Tipe : Utility Box With Adjustable Divider Dimensi : 12.5 [P] x 23.3 [L] x 3.4 [T] Cm  Kompartemen : Sampai Dengan 15 Kompartemen Material : PP Original Standar Warna : Putih...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Utility+Box+9000.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('RANTANG KATERING 24 CM', 'rantang-katering-24-cm', 'Tipe : Rantang Katering, Bentuk Bulat + Handle Aplikasi : Katering untuk Karyawan, Pabrik, Kantor, Proyek, Event Etc Material : PP Original 100 %, Food Grade, Aman untuk Makanan T...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Box Food Grade', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Rantang+Katering+24+Cm+Merah+Benetton.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('TOOL BOX MT 100', 'tool-box-mt-100', 'Tipe : Multipurposes Tool Box MT 100 Material : PP Original Dimensi : 37 [P] x 20 [L] x 14 Cm [T] Fitur : 1 Tier Kompartemen, Smooth Handle, Security Lock , Eksklusife Design Warna...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MT+100+Green+Aple+1.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('TOOL BOX MT 200', 'tool-box-mt-200', 'Tipe : Multipurposes Tool Box MT 200 Material : PP Original Dimensi : 39 [P] x 20 [L] x 18 Cm [T] Fitur : 2 Tier Kompartemen, Smooth Handle, Security Lock Warna : Yellow Banana - ...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/DSCF0545.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('TACKLE BOX/ TOOL BOX MT 300', 'tackle-box-tool-box-mt-300', 'Tipe : Multipurposes Tool Box MT 300 Material : PP Original Dimensi : 44 [P] x 22 [L] x 21 Cm [T] Fitur : 3 Tier Kompartemen, Smooth Handle, Security Lock Warna : Banana - Grey, Ch...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MT+300.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK INDUSTRIAL 60 X 40 X 30 CM + TUTUP', 'container-plastik-industrial-60-x-40-x-30-cm-tutup', 'Tipe : Container Plastik Industrial, Solid & Stack-able Dimensi : 60 [P] x 40 [L] x 30 Cm [T] Material : PP Block Copolymer Standar Warna : Merah, Kuning, Biru, Hijau Aplikasi...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 60, 40, 30, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Container+Plastik+60+x+40+x+30+dengan+Tutup.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK SOLID 66 X 46.5 X 27 CM + LID', 'container-plastik-solid-66-x-46-5-x-27-cm-lid', 'Tipe : Container Plastik Solid, Nest-able + Tutup [DIJUAL TERPISAH] Dimensi  : 66 [P] x 46.5 [L] x 27 Cm [T] Material : PP Block Copolymer Standar Warna : Biru Muda Aplikasi ...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 66, 46.5, 27, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Container+Plastik+8000+Blue+Sunny.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('KERANJANG BELANJA YEN YEN', 'keranjang-belanja-yen-yen', 'Tipe : Keranjang Belanja Yen Yen Bentuk Oval  Dimensi : 38 [P] x 31 [L] x 20.5 [T] Material : PP Standar Warna : Merah, Biru, Kuning, Hijau, Ungu Aplikasi : Keranjang Belanja...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Keranjang+Belanja+Yen+Yen.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('KERANJANG BELANJA "BUTTERFLY"', 'keranjang-belanja-butterfly-1', 'Tipe : Keranjang Belanja + Gagang Dimensi : 41.5 [P] x 33 [L] x 26 Cm [T] Material : PP Standar Warna : Biru, Kuning, Merah, Orange Aplikasi : Shopping Crates pada Convenience Stor...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Keranjang+Belanja+Kupu-Kupu.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('PART CASE  3700 UNTUK TEMPAT BAUT (BOLT) MUR (NUT) RING ETC', 'part-case-3700-untuk-tempat-baut-bolt-mur-nut-ring-etc', 'Tipe : Part Case Industrial, Solid, & Stack-able Dimensi : 36[P] x 23[L] x 5 Cm [T] Partisi Included Material : PP Block Copolymer Standar Warna : Putih Clear, Kuning Clear, H...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Tempat+Baut_Mur_Ring+Etc+3700.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('[NEW] CONTAINER PLASTIK LIPAT 70 X 50 X 46.5 CM', 'new-container-plastik-lipat-70-x-50-x-46-5-cm', 'Tipe : Container Plastik Industrial, Solid, Fold-able & Stack-able Dimensi : 70 [P] x 50 [L] x 46.5 Cm [T] Dimensi Terlipat : 70 [P] x 50 [L] x 8.5 Cm[T] Material : PP Block C...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 70, 50, 46.5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Container+Plastik+Lipat+70+x+50+x+46.5+Cm_Hitam.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('PALET PLASTIK 120 X 50 X 13.2 CM', 'palet-plastik-120-x-50-x-13-2-cm', 'Tipe : Palet Palet Plastik Industrial Dimensi : 120 (P) x 50 (L) x 13.2 (T) Cm Handling : 2 Sisi Forklift /Handlift Material : PP Block Copolymer Standar Warna : Biru Aplikasi : S...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 120, 50, 13.2, 'Palet Plastik', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Palet+Plastik+120+x+50+x+13.2+Cm+Blue+Benetton.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK SOLID 100.5 X 33.5 X 10.3 CM', 'container-plastik-solid-100-5-x-33-5-x-10-3-cm', 'Tipe : Container Plastik Industrial, Solid & Stackable Dimensi : 100.5 [P] x 33.5 [L] x 10.3 Cm [T] Material : PP Block Copolymer Standar Warna : Merah, Kuning, Biru, Hijau Apl...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 100.5, 33.5, 10.3, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Container+Plastik+Solid+100.5+x+33.5+x+10.3+Cm.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK 100.5 X 33.5 X 28.8 CM', 'container-plastik-100-5-x-33-5-x-28-8-cm', 'Tipe : Container Plastik Industrial, Solid & Stackable Dimensi : 100.5 [P] x 33.5 [L] x 28.8 Cm [T] Material : PP Block Copolymer Standar Warna : Merah, Kuning, Biru, Hijau Ap...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 100.5, 33.5, 28.8, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/IMG_20160725_091848_471.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK INDUSTRIAL 100.5 X 33.5 X 19.5 CM', 'container-plastik-industrial-100-5-x-33-5-x-19-5-cm', 'Tipe : Container Plastik Industrial, Solid & Stackable Dimensi : 100.5 [P] x 33.5 [L] x 19.5 Cm [T] Material : PP Block Copolymer Standar Warna : Merah, Kuning, Biru, Hijau Ap...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 100.5, 33.5, 19.5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Container+Plastik+Solid+6688.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('PART CASE PLASTIK 2 LAYER', 'part-case-plastik-2-layer', 'Tipe : Part Case Plastik Material : PP Original Dimensi: 26 (P) X 12 (L) X 6 (T) Cm Free Partisi. Aplikasi : 1. Tempa t Part Elektronik, Mekanik Etc 2. Packing Produk Baut Etc 3. Tempat T ool...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Part+Case+LB+Large_Clear+Colour.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('CONTAINER PLASTIK INDUSTRIAL 62 X 43 X 8 CM', 'container-plastik-industrial-62-x-43-x-8-cm', 'Tipe : Container Plastik Industrial, Solid & Stackable Dimensi : 62 [P] x 43 [L] x 8 Cm [T] Material : PP Block Copolymer Standar Warna : Merah, Kuning, Biru, Hijau Aplikasi :...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 62, 43, 8, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MPC+2011_Yellow.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('PART CASE PLASTIK LB MEDIUM', 'part-case-plastik-lb-medium', 'Tipe : Part Case Plastik Material : PP Original Dimensi: 20 (P) X 10 (L) X 5 (T) Cm Free Partisi. Aplikasi : 1. Tempa t Part Elektronik, Mekanik Etc 2. Packing Produk Baut Etc 3. Tempat T ool...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/LB_Medium+Body.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('PARE PART CASE DOUBLE LAYER 4700', 'pare-part-case-double-layer-4700', 'Tipe : Part C ase Industrial Dimensi : 35.5(P) x 22.9 (L) x 7.1 (T) Cm Material : PP Fitur :  Double Layer, Des ign Terbaik . Kuat dan Tebal . Sudah Dilengkapi dengan partisi : 30 pcs Sta...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/TB_4700+Body.png')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('[New] Container Plastik Jumbo 120 x 110 x 76 Cm Solid', 'new-container-plastik-jumbo-120-x-110-x-76-cm-solid', 'Tipe : Container Plastik Jumbo, Solid Dimensi : 120 [P] x 110 [L] x 76 [T] Cm Material : PP Block Copolymer Kapasitas : 582.7 Liter Handling : 4 Sisi Forklift/ Handlift Standar Wa...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 120, 110, 76, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Container+Jumbo+1199_2.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Part Case Tempat Baut, Mur & Spare Part', 'part-case-tempat-baut-mur-spare-part', 'Normal 0 false false false IN X-NONE X-NONE Tipe : Kotak Serbaguna &#8211; Smart Box 3700 Dimensi : 36 [P] x 23[L] x 5 cm [T] Sudah termasuk partisi , Kuat dan Kokoh Material : PP...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Utility+Box_3700.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Tool Box - Kotak Perkakas 2 Tier MT 200', 'tool-box-kotak-perkakas-2-tier-mt-200', 'Tipe : Tool Box 2 Tier MT 200 Material : PP Original   Dimensi : 39[P] x 22[L] x 18 Cm [T] Bisa dilengkapi dengan kunci/ gembok pengaman 2 Tier Kompartemen + Partisi Stand...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Kotak+Kosmetik+MT+200+Hijau+Metalik.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Tool Box - Kotak Perkakas 3 Tier MT 300', 'tool-box-kotak-perkakas-3-tier-mt-300', 'Tipe : Tool Box 3 Tier MT300 Material : PP Original Dimensi : 44 [P] x 22[L] x 21Cm [T] Material : PP Original Bisa dilengkapi dengan kunci/ gembok pengaman 3 Tier Kompartemen&nbsp...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MT+300+Merah_Cream1.png')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Tool Box - Kotak Perkakas MT 100 Special Colour', 'tool-box-kotak-perkakas-mt-100-special-colour', 'Tipe : Tool Box 1 Tier MT 100 Material : PP Original Dimensi : 38 [P] x 21[L] x 16 Cm [T] Material : PP Original Bisa dilengkapi dengan kunci/ gembok pengaman 1 Tier Kompartemen&n...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MT+100+SC1.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Tool Box - Kotak Perkakas MT 6250', 'tool-box-kotak-perkakas-mt-6250', 'Tipe : Tool Box 1 Tier MT 6250 Material : PP Original Dimensi : 39 [P] x 20 [L] x 18 Cm [T] Material : PP Original Bisa dilengkapi dengan kunci/ gembok pengaman 1 Tier Kompartemen...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/DSCF0909+.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Smart Box - Part Case SS 280', 'smart-box-part-case-ss-280', 'Tipe : Kotak Spare Part SS 800 Dimensi : 12 [P] x 8 [L] x 3.4 Cm [T] Material : PP Original 7 Kompartemen Standar Warna : Clear Transparan Aplikasi : Handling Material Spare Part ...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/SS+280_101.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Smart Box - Part Case SS 800', 'smart-box-part-case-ss-800', 'Tipe : Kotak Spare Part SS 800 Dimensi : 18.3 [P] x 8 [L] x 4.5 Cm [T] Material : PP Original 7 Kompartemen Standar Warna : Clear Transparan Aplikasi : Handling Material Spare Par...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/SS+800%252B13.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Smart Box - Part Case SS 650', 'smart-box-part-case-ss-650', 'Tipe : Kotak Spare Part SS 650 Dimensi : 18 [P] x 9.2 [L] x 3.8 Cm [T] Material : PP  16 Kompartemen Standar Warna : Clear Transparan Aplikasi : Handling Material Spare Part ...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/SS+650_4.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik 62 X 43 X 31 Cm Berlubang', 'container-plastik-62-x-43-x-31-cm-berlubang', 'Tipe : Container Plastik Industrial Berlubang Stackable, Bisa dilengkapi dengan tutup Dimensi : 62[P] x 43 [L] x 31 [T] Material : PP Block Copolymer (PPBC) Aplikasi : Proses manu...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 62, 43, 31, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Container+62+x+43+x+31+Cm_Porforated.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik 60 x 40 x 40 Cm Heavy Duty', 'container-plastik-60-x-40-x-40-cm-heavy-duty', 'Tipe : Container Plastik Industrial Solid Stackable, Bisa dilengkapi dengan tutup Dimensi : 60 [P] x 40 [L] x 40 [T] Material : PP Block Copolymer (PPBC) Aplikasi : Proses manufac...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 60, 40, 40, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Container_Solid+60x40x40_3329+Blue.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik Industrial 50.5 x 33.5 x 18.5 Cm', 'container-plastik-industrial-50-5-x-33-5-x-18-5-cm', 'Tipe : Container Plastik Industrial Solid Stackable, Bisa dilengkapi dengan tutup Dimensi : 50.5 [P] x 33.5 [L] x 18.5 [T] Material : PP Block Copolymer (PPBC) Aplikasi : Proses m...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 50.5, 33.5, 18.5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/DSCF1432_6033+Blue.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik Industrial 68 x 49 x 46 Cm + Roda', 'container-plastik-industrial-68-x-49-x-46-cm-roda', 'Tipe : Container Plastik Industrial Berlubang     Dimensi : 68[P] x 49[L] x 46[T] Material : PP Block Copolymer (PPBC) Aplikasi : Proses manufacturing pada berbagai bida...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 68, 49, 46, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/IMG_20181030_133600_7007.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik 62 x 43 x 20 Cm + Tutup', 'container-plastik-62-x-43-x-20-cm-tutup', 'Tipe : Container Plastik Industrial Solid Stackable, Bisa dilengkapi dengan tutup Dimensi : 62 [P] x 43 [L] x 20[T] Material : PP Block Copolymer (PPBC) Aplikasi : Proses manufact...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 62, 43, 20, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/DSCF142033.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik 62 x 43 x 20 Cm Berlubang', 'container-plastik-62-x-43-x-20-cm-berlubang', 'Tipe : Container Plastik Industrial Berlubang Stackable, Bisa dilengkapi dengan tutup Dimensi : 62 [P] x 43 [L] x 20[T] Material : PP Block Copolymer (PPBC) Aplikasi : Proses manu...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 62, 43, 20, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/IMG_20181023_092429.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik Solid + Container Berlubang', 'container-plastik-solid-container-berlubang', 'Tipe : Container Plastik Industrial Solid(Kuning) Dimensi : 62 [P] x 43 [L] x 8 [T] Material : PP Block Copolymer (PPBC) Aplikasi : Proses manufacturing pada berbagai bidang indus...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/MPC+2008_2011.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik 62 x 43 x 38 + Tutup', 'container-plastik-62-x-43-x-38-tutup', 'Tipe : Container Plastik Industrial Berlubang Dimensi : 62 [P] x 43 [L] x 38 [T] Material : PP Block Copolymer (PPBC) Aplikasi : Proses manufacturing pada berbagai bidang industri...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 62, 43, 38, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Container+2008_Blue.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Crat Botol Isi 24 Pcs', 'crat-botol-isi-24-pcs', 'Tipe : Crat Botol Isi 24 Dimensi : 41.5 [P] x 28.5[L] x 28.5[T] Material : PP Block Copolymer (PPBC) Aplikasi : Handling botol untuk perusahaan minuman, saus, kecap etc Standar Wa...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/IMG_20180921_0838071111.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik Solid 67 X 50.3 X 38 Cm', 'container-plastik-solid-67-x-50-3-x-38-cm', 'Tipe : Container Plastik Industrial Solid Dimensi : 67 [P] x 50.3[L] x 38 [T] Material : PP Block Copolymer (PPBC) Aplikasi : Proses manufacturing pada berbagai bidang industri,&n...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 67, 50.3, 38, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/IMG_20180921_08222211.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik Solid 67 X 50.3 X 28.5 Cm', 'container-plastik-solid-67-x-50-3-x-28-5-cm', 'Tipe : Container Plastik Industrial Solid Dimensi : 67 [P] x 50.3[L] x 28.5 [T] Material : PP Block Copolymer (PPBC) Aplikasi : Proses manufacturing pada berbagai bidang industri,...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 67, 50.3, 28.5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/IMG_20180921_0820541.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik Berlubang 38.5 X 35 X 28 Cm', 'container-plastik-berlubang-38-5-x-35-x-28-cm', 'Tipe : Container Plastik Industrial Berlubang Dimensi : 38.5 [P] x 35 [L] x 28 [T] Material : PP Block Copolymer (PPBC) Aplikasi : Proses manufacturing pada berbagai bidang indust...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 38.5, 35, 28, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/IMG_20180921_0815341.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik 61.5 X 42.5 X 32.5 Cm', 'container-plastik-61-5-x-42-5-x-32-5-cm', 'Tipe : Container Plastik Industrial - Stackable Dimensi : 61.5 [P] x 42.5 [L] x 32.5 [T] Material : PP Block Copolymer Aplikasi : Proses manufacturing pada berbagai bidang industr...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 61.5, 42.5, 32.5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Container+3007.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik 78 x 41 x 20 Cm', 'container-plastik-78-x-41-x-20-cm', 'Tipe : Container Plastik Industrial - Stackable Dimensi : 78[P] x 41 [L] x 20 [T] Material : PP Block Copolymer Aplikasi : Proses manufacturing pada berbagai bidang industri,&nbsp...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 78, 41, 20, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Container+7303+Kuning1.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik Industrial 77 X 44 X 25 CM', 'container-plastik-industrial-77-x-44-x-25-cm', 'Tipe : Container Plastik Industrial, Stackable & Nestable Dimensi : 77[P] x 44 [L] x 25 [T] Material : PP Block Copolymer Aplikasi : Proses manufacturing pada berbagai bidang ...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 77, 44, 25, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Container+1005_3.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik Industrial 60 x 40 x 25.5 Cm', 'container-plastik-industrial-60-x-40-x-25-5-cm', 'Tipe : Container Plastik Industrial, Stackable & Nestable Dimensi : 60 [P] x 40 [L] x 25.5 [T] Material : PP Block Copolymer Aplikasi : Proses manufacturing pada berbagai bidan...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 60, 40, 25.5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/2404+Blue1.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('[New] Container Plastik Lipat - Foldable - 30 x 20 x 15.5 Cm', 'new-container-plastik-lipat-foldable-30-x-20-x-15-5-cm', 'Tipe : Container Plastik Lipat , Stackable Dimensi : 30 [P] x 20 [L] x 15.5 [T] Material : PP Aplikasi : Organizer untuk part-part kecil atau item lain pada berbagai bidang usaha,...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 30, 20, 15.5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Folding+Container+Med+2.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik Berlubang 61.8 x 43 x 32 Cm Untuk Agroindustri', 'container-plastik-berlubang-61-8-x-43-x-32-cm-untuk-agroindustri', 'Tipe : Container Plastik Industrial Dimensi : 61.8 [P] x 43 [L] x 32 [T] Jenis : Berlubang, Stackable Fitur : Berlubang dibagian lantai container, solid pada sisi lebar dan panjang...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 61.8, 43, 32, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Container+Plastik+Berlubang+Bawah+61.8+x+43+x+32+Cm.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik Industrial 33.5 x 33 x 19.5 Cm', 'container-plastik-industrial-33-5-x-33-x-19-5-cm', 'Tipe : Container Plastik Industrial Dimensi : 33.5 [P] x 33 [L] x 19.5 [T] Jenis : Berlubang, Stackable Material : HDPE/ PP Block Copolymer Aplikasi : Handling material pada berba...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 33.5, 33, 19.5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Container+Plastik+33.5+x+33+x+19.5+Cm_Blue+Benetton.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Keranjang Ikan, Sayur & Industri 67 x 47 x 36 Cm', 'keranjang-ikan-sayur-industri-67-x-47-x-36-cm', 'Tipe : Container Plastik Industrial Berlubang Material : PP Block Copolymer Warna : Biru, Merah, Kuning & Hijau Aplikasi : Handling material pada berbagai bidang industri sepe...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 67, 47, 36, 'Box Food Grade', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Container+Berlubang+67+x+47+x+36+Cm_1004_Yellow.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik Berlubang 65 x 43 x 31.5 Cm', 'container-plastik-berlubang-65-x-43-x-31-5-cm', 'Tipe : Container Plastik Industrial Berlubang Material : PP Block Copolymer Warna : Biru, Merah, Kuning & Hijau Aplikasi : Handling material pada berbagai bidang industri sepe...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 65, 43, 31.5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Container+Plastik+65+x+43+x+31.5+Cm.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik Solid 47.5 x 36 x 8 Cm', 'container-plastik-solid-47-5-x-36-x-8-cm-1', 'Tipe : Container Plastik Industrial, Solid Material : PP Block Copolymer Standar Warna : Biru, Kuning, Hijau Aplikasi : Digunakan secara luas pada berbagai bidang industri, manufa...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 47.5, 36, 8, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Container+Plastik+MPC+6066+Solid_Blue.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('[New] Palet Plastik 120 x 100 x 15 Cm + Metal Bar Reinforced', 'new-palet-plastik-120-x-100-x-15-cm-metal-bar-reinforced', 'Tipe : Palet Plastik Medium Duty + Metal Bar Reinforced Material : PP Block Copolymer Handling : 4 Sisi Forklift / Handlift Standar Warna : Biru Fitur : Diperkuat dengan High tens...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 120, 100, 15, 'Palet Plastik', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Palet+Plastik+120+x+100+x+15+Cm_Reinforced.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik 43 x 31 x 14.5 Cm', 'container-plastik-43-x-31-x-14-5-cm', 'Tipe : Container Plastik Berlubang Dimensi : 43 [P] x 31 [L] x 14.5 [T] Cm Material : PP Block Copolymer Standar warna : Hijau Untuk Informasi Produk, harga dan Pemesanan Hubungi ...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 43, 31, 14.5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/20191214_065630.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Palet Plastik 120 x 100 x 16 Cm Flat', 'palet-plastik-120-x-100-x-16-cm-flat', 'Tipe : Palet Plastik Flat Surface/ Hygiene Pallet Handling : 4 Sisi Forklift / Handlift Material : PP Block Copolymer Standar Warna : Biru, Hijau, Orange, Merah Fitur/Assesoris : ...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 120, 100, 16, 'Palet Plastik', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Palet+Plastik+1210+R+New.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Disewakan / Rental Palet Plastik 120 x 80 x 15 Cm Medium Duty', 'disewakan-rental-palet-plastik-120-x-80-x-15-cm-medium-duty', 'Tipe Palet : Medium Duty Flat Surface Dimensi : 120 [P] x 80 [L] x 15 [T] Cm Handing : 4 Sisi Forklift / Handlift Support : 4 Ton Static Load, 1 Ton Dinamic Load, 500 Kg Racking L...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 120, 80, 15, 'Palet Plastik', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Palet+Plastik+120+x+80+x+15+Cm+Bottom+View.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Keranjang Ikan + Gagang 69 x 48.5 x 37.5 Cm', 'keranjang-ikan-gagang-69-x-48-5-x-37-5-cm', 'Tipe : Container Berlubang, Nestable Dimensi : 69 [P] x 48.5 [L] x 37.5 [T] Cm Material : PP Block Copolymer  Standar Warna : Biru, Kuning, Hijau, Merah Aplikasi : Handling M...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 69, 48.5, 37.5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Keranjang+Ikan+dan+Sayur.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Palet Plastik Flat Surface 120 x 100 x 16 Cm - Four Ways', 'palet-plastik-flat-surface-120-x-100-x-16-cm-four-ways', 'Tipe : Palet Plastik Flat Surface/ Hygiene Palet Dimensi : 120 [P] x 100 [L] x 16 [T] Cm   Handling : 4 Sisi Forklift Handlift  Material : PP Block Copolymer Aplika...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 120, 100, 16, 'Palet Plastik', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Palet+Plastik+Flat+Surface+1210+Blue.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik 52 x 37 x 27 Cm Berlubang', 'container-plastik-52-x-37-x-27-cm-berlubang', 'Tipe : Container Plastik Industrial Berlubang (Porforated) Dimensi : 52 (P) x 37 (L) x 27 Cm (T), Stack-able Material : PP Block Copolymer Standar Warna : Merah, Kuning, Hijau, Bi...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 52, 37, 27, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Container+Plastik+Berlubang+52+x+37+x+30+Cm+Kuning.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Keranjang Buah Jumbo + Handle', 'keranjang-buah-jumbo-handle', 'Tipe : Keranjang Buah Jumbo + Handle Dimensi : 66 x 66 x 47 Cm Diameter : 66 CM Material : PP Block Copolymer  Standar Warna : Hijau  Aplikasi : Digunakan untuk panen bu...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 66, 66, 47, 'Box Food Grade', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Keranjang+Bulk+Hasil+Perikanan+dan+Pertanian1.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Berlubang Stackable & Nestable', 'container-berlubang-stackable-nestable', 'Tipe : Container Plastik Berlubang Fitur : Stackable & Nestable Material : PP Block Copolymer Dimensi : 48.5 x 36 x 10.5 Cm Standar Warna : Biru, Kuning Aplikasi : Pergudangan...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 48.5, 36, 10.5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/20190831_154836.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik Solid 50,5 X 35,5 X 18,5 Cm + Card Case', 'container-plastik-solid-50-5-x-35-5-x-18-5-cm-card-case', 'Tipe : Container Plastik Industrial Solid - Stackable - Dilengkapi dengan tempat kartu ID sehingga memudahkan pemberian identitas barang - Dan bisa dilengkapi dengan tutup  D...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/DSCF1717.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik Solid 60 x 40 x 35 Cm', 'container-plastik-solid-60-x-40-x-35-cm', 'Tipe : Container Plastik Industrial Solid, Heavy Duty Dimensi : 60 x 40 x 35 Cm, Kuat dan Tebal Material : PP Block Copolymer Standar Warna : Merah, Kuning, Hijau, Biru, Hitam Apl...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 60, 40, 35, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Container+60+x+40+x+35+Cm+Hitam.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Logistics Crate + Roda', 'logistics-crate-roda', 'Tipe : Container Logistik, Turn arround Container + Roda Dimensi : 60 x 40 x 31.5 Cm Material : PP Block Copolymer Standar Warna : Merah, Biru, Kuning Jenis Container : Stack-able...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 60, 40, 31.5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Logistics+Crate+with+Caster1.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Palet Plastik Nestable 120 x 100 x 14 Cm', 'palet-plastik-nestable-120-x-100-x-14-cm', 'Tipe : Palet Plastik Light Duty, Nestable Handling : 4 Sisi Forklift/ Handlift Material : PP Block Copolymer, Food Grade Standar Warna : Biru, Kuning Aplikasi : Handling material p...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 120, 100, 14, 'Palet Plastik', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Light+Duty+1210+F+Blue-1.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik Industrial 38.5 x 35 x 28 Cm Berlubang', 'container-plastik-industrial-38-5-x-35-x-28-cm-berlubang', 'Dimensi : 38.5 (P) x 35 (L) x 20 (T) Cm Tipe : Berlubang, Stack-able Material : PP Block Copolymer Standar Warna : Merah, Kuning, Biru Aplikasi : Untuk Display Produk, Storing Pro...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 38.5, 35, 28, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/DSCF1626.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik Industrial Solid 62 X 43 X 32 Cm', 'container-plastik-industrial-solid-62-x-43-x-32-cm', 'Dimensi : 62 [P] x 43 [L] x 32 [T] Cm Material : PP Block Copolymer Tipe : Container Plastik Industrial, Solid, Stackable Standart Warna : Biru, Kuning, Hijau, Merah Fungsi Utama ...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 62, 43, 32, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/5215.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik Industri Berlubang 60 X 40 X 35 Cm', 'container-plastik-industri-berlubang-60-x-40-x-35-cm', 'Tipe : Container Plastik Industrial Tipe : Berlubang, Stackable Dimensi : 60 [P] x 40 [L] x 35 [T] Material : PP Block Copolymer Aplikasi : Proses manufacturing pada berbagai bidan...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 60, 40, 35, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/3038.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik Solid 50,5 X 35,5 X 18,5 Cm + Tutup', 'container-plastik-solid-50-5-x-35-5-x-18-5-cm-tutup', 'Tipe : Container Plastik Industrial Solid Stackable, dilengkapi dengan tutup  Dimensi : 50.5 [P] x 33.5 [L] x 18.5 [T]  Material : PP Block Copolymer (PPBC) Aplikasi : P...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/6033.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Palet Plastik 120 X 100 X 15 Cm', 'palet-plastik-120-x-100-x-15-cm', 'Tipe : Palet Palet Plastik Industrial Dimensi : 120 (P) x 100 (L) x 15 (T) Cm Handling : 4 Sisi Forklift /Handlift Material : PP Block Copolymer Standar Warna : Biru Aplikasi : Se...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 120, 100, 15, 'Palet Plastik', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/1210.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastic  Industrial Solid 60 X 40 X 40 Cm', 'container-plastic-industrial-solid-60-x-40-x-40-cm', 'Tipe : Container Plastik Industrial, Solid & Stack-able Dimensi : 60 [P] x 40 [L]x 40 [T] Cm Material : PP Block Copolymer (PPBC) Standart Warna : Merah, Kuning, Biru, Hijau, ...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 60, 40, 40, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/3329.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik Solid 36 X 27 X 13 Cm', 'container-plastik-solid-36-x-27-x-13-cm', 'Dimensi : 36 [P] x 27 [L] x 13 [T] Cm Tipe : Container Plastik Industrial, Solid, Stack-able Kegunaan : Handling Material [Komponen] pada Berbagai Bidang Industri, Assembling, Gud...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 36, 27, 13, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/6053.JPG')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik 41,5 X 35 x 29 Cm', 'container-plastik-41-5-x-35-x-29-cm', 'Tipe : Container Plastik Industrial, Stackable Dimensi : 41,5 [P] x 35 [L] x 29 [T] Material : PP Block Copolymer (PPBC) Aplikasi : Proses manufacturing pada berbagai bidang indus...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 5, 35, 29, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/20190502_080544%25281%2529.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Keranjang Serbaguna - Keranjang Laundry', 'keranjang-serbaguna-keranjang-laundry', 'Tipe : Keranjang Laundry - Keranjang Serbaguna Dimensi : P [63] X L [45] X T [24] Cm Material : PP Block Copolymer Standar Warna : Merah  Status Stock : Ready Aplikasi : Keran...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Keranjang+Laundry+Merah.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Crat Besar Untuk Telur', 'crat-besar-untuk-telur', 'Tipe : Crat Telur Besar Dimensi : 70 [P] x 37.5 [L] x 42 [T] Cm Material : PP Block Copolymer Standar Warna : Biru & Kuning Kapasitas : 14 Tray Telur @30 Butir = 420 Butir Aplikasi : Sesua...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Crat+Telur+Besar.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik Solid 1005 x 33.5 x 19.5 Cm', 'container-plastik-solid-1005-x-33-5-x-19-5-cm', 'Tipe : Container Plastik Solid, Stackable Dimensi : 100.5 x 33.5 x 19.5 Cm Material : PP Block Copolymer Standar Warna : Biru, Hijau, Orange Aplikasi : Material Handling pada berb...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 1005, 33.5, 19.5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/20201128_092734.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik Berlubang 53 x 36 x 21 Cm', 'container-plastik-berlubang-53-x-36-x-21-cm', 'Tipe : Container Berlubang (Porforated) Stackable Dimensi : 53 [P] x 36 [L] x 21 [T] Cm  Material : PP Block Copolymer  Standar warna : Merah, Hijau, Kuning dan Biru Apl...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 53, 36, 21, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Container+MPC+6004+BY.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Crat Piring &  Mangkok', 'crat-piring-mangkok', 'Tipe : Crat untuk piring dan mangkok Dimensi : 60 x 30 x 35.5 Cm Material : PP Block Copolymer Jenis : Stackable & Porforated Standar Warna : Merah, Biru, Kuning & ...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 60, 30, 35.5, 'Box Food Grade', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/20200914_092112.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Tempat Cuci Tangan / Wudhu Portabel 44 Liter Dengan Tutup', 'tempat-cuci-tangan-wudhu-portabel-44-liter-dengan-tutup', 'Tipe : Tempat Cuci Tangan / Wudhu Portabel + Tutup Material : PP Original  Dimensi : 40.5 x 38.5 x 54 Cm Kapasitas : 44 Liter Sudah dilengkapi dengan kran kualitas bagus denga...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 40.5, 38.5, 54, 'Lainnya', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/20200911_112909.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Kotak Makan Katering Bulat', 'kotak-makan-katering-bulat', 'Diameter : 24 Cm Tinggi : 6 Cm Material : PP Oiginal 100 %, Tanpa Scraps Atau Material Recycle 5 Kompartemen New Design - Dilengkapi tempat untuk kuah sayur dengan tutup anti tump...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Box Food Grade', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/IMG_20200819_155339.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Kotak Spare Part Serbaguna 53 X 43 x 5,5 Cm', 'kotak-spare-part-serbaguna-53-x-43-x-5-5-cm', 'Kotak Spare Part Serbaguna Dimensi : 53 X 43 x 5,5 Cm Terbuat dari bahan berkualitas, kokoh dan tebal Dapat di tumpuk Aplikasi : digunakan untuk penyimpanan komponen perakitan, mu...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 53, 43, 5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/6069a.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Kotak Spare Part Serbaguna 30 X 21 x 3 Cm', 'kotak-spare-part-serbaguna-30-x-21-x-3-cm', 'Kotak Spare Part Serbaguna Dimensi : 30 X 21 x 3 Cm Terbuat dari bahan berkualitas, kokoh dan tebal Dapat di tumpuk Aplikasi : digunakan untuk penyimpanan komponen perakitan, mur ...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 30, 21, 3, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/0555a.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Kotak Spare Part Serbaguna + Sekat', 'kotak-spare-part-serbaguna-sekat', 'Kotak Spare Part Serbaguna + Sekat Dimensi : 50,5 X 33 x 12,5 Cm Terbuat dari bahan berkualitas, kokoh dan tebal Dapat di tumpuk Aplikasi : digunakan untuk penyimpanan suku cadang...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 5, 33, 12, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/6055%252Ba.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Tempat Spare Part SV 18 x 10 x 8 Cm', 'tempat-spare-part-sv-18-x-10-x-8-cm', 'Victory Part Case Small  Dimensi per pcs : 18 (P) x 10 (L) x 8 (T) Cm Harga sudah termasuk Locking Stick Aplikasi : Sesuai untuk menyimpan spare part pada bengkel, part cente...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 18, 10, 8, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/20200617_081207.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('APD Face Shield Dewasa With Adjustable Webbing', 'apd-face-shield-dewasa-with-adjustable-webbing', 'Item : Alat Pelindung Diri (APD) Face Shield Material : Pet, Busa, Plastik Helm dan Webbing Karet Elastis Special Treatment : Plastik Shield 15 Cm sudah Dicoating lebih Kilap&nbsp...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Lainnya', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/20200605_145641.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Tatakan Plastik Untuk Alas Bak Truk', 'tatakan-plastik-untuk-alas-bak-truk', 'Dimensi : 121 [P] x 58 [L] x 3 [T] Cm Material : PP Block Copolymer Standar Warna : Putih Natural Kuat terhadap tekanan & bisa dipotong menyesuaikan luasan bidang Ready Stock ...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Lainnya', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/IMG-20200513-WA0013.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Palet Plastik 100 x 50 x 8 Cm Untuk Truk Berpendingin / Thermoking', 'palet-plastik-100-x-50-x-8-cm-untuk-truk-berpendingin-thermoking', 'Normal 0 false false false EN-US X-NONE X-NONE /* Style Definitions */ table.MsoNormalTable {mso-style-name:"Table Normal"; mso-tstyle-rowband-size:0; mso-tstyle-colband-size:0; m...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 100, 50, 8, 'Palet Plastik', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Palet+Plastik+100+x+50+x+8+Cm1.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik 45 x 31 x 16.5 Cm', 'container-plastik-45-x-31-x-16-5-cm', 'Tipe : Container Berlubang - Stackable Material : PP Block Copolymer Original Standar warna : Biru, Kuning dan Merah Karakter Produk : Round off (Tidak ada sudut tajam) Warna Kila...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 45, 31, 16.5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/1638750828445.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Palet Plastik All New 120 x 120 x 7.5 Cm', 'palet-plastik-all-new-120-x-120-x-7-5-cm', 'Palet Plastik Baru - ALL NEW Dimensi :120 [P] x 120 [L] x 7.5 [T] Cm Material : PP Block Copolymer Handling : 4 Sisi Forklift Aplikasi : Cold Storage, Wet Warehouse, Logistik &amp...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 120, 120, 7.5, 'Palet Plastik', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/1638330412616.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Keranjang Buah Baru Untuk Klengkeng , Jeruk, Sawo & Lain Lain', 'keranjang-buah-baru-untuk-klengkeng-jeruk-sawo-lain-lain', 'Tipe  : Keranjang Buah Dimensi  : 48.8 [P] x 35.5 [L]x 15.5 [T] Cm Barang Baru (All New) Standar Warna : Hijau Dilengkapi dengan Tutup/ Lid Aplikasi : Untuk Buah dan Say...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Box Food Grade', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/1636433016399.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Lunch Box 5 Sekat Untuk Lapas Narkotika', 'lunch-box-5-sekat-untuk-lapas-narkotika', 'Tipe : Lunch Box 5 Sekat + Tutup Transparan Material : PP Original, Food Grade Ukuran : 24.1 x 18.5 x 5.1 Cm Karakteristik Produk : Round off (tidak ada sudut tajam), ...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 24.1, 18.5, 5.1, 'Box Food Grade', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/1632804113030.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Crat Galon Untuk Hotel - Resto dan Rumah Sakit', 'crat-galon-untuk-hotel-resto-dan-rumah-sakit', 'Tipe : Crat Galon Single Material : PP Block Coploymer Original Dimensi : 32 [P] x 32 [L]x 52.5 [T] Cm Warna Ready : Biru & Customized *) Handling : Stack-able, Pegangan 4 Sis...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/1630919900885.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Keranjang Belanja Eks Giant', 'keranjang-belanja-eks-giant', 'Tipe : Keranjang Belanja  Material : PP Barang eks Giant kondisi masih sangat bagus Warna : Hijau Harga Rp. 25.000/ pcs Untuk Informasi Produk, Harga dan Order Hubungi : (021...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/1630552203831.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Keranjang Belanja - Troley Roda Eks Giant', 'keranjang-belanja-troley-roda-eks-giant', 'Tipe : Shopping Crates - Keranjang Belanja Asesoris : Handle Jinjing dan Tarik Dilengkapi dengan Roda 2 Swivel dan 2 Fixed Warna : Hijau Kondisi masih sangat bagus dan berfungsi b...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/1630547556055.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Solid Industrial 67 x 50.3 x 19.5 Cm', 'container-solid-industrial-67-x-50-3-x-19-5-cm', 'Tipe : Container Industrial - Solid Material : PP Block Copolymer Stackable Colour : Blue, Yellow, Green Aplikasi : Handling material pada perusahaan manufacturing, assembling per...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 67, 50.3, 19.5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/1627613983045.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Pail 20 Liter Pull Up', 'pail-20-liter-pull-up', 'Tipe : Pail 20 Liter Pull Up Material : PP Original, Food Grade - Food Contact Save Dimensi : 32 Cm Diameter Atas, 28 Cm Diameter Atas Tinggi : 39 Cm Dilengkapi dengan handle Apli...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Box Food Grade', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/1626050770703.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Lunch Box 6 Sekat Untuk Lembaga Pemasyarakatan (LP) Pengayoman', 'lunch-box-6-sekat-untuk-lembaga-pemasyarakatan-lp-pengayoman', 'Tipe : Lunch Box 6 Sekat + Tutup Material : PP Original  Warna Body : Biru, Hijau Kompartemen : 6 Sekat  Tutup Warna Bening (Transparan) Tutup bisa diberi Marking Sablon...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Box Food Grade', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/1623623875465.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container 5 Liter Untuk Houseware atau Paket Promosi Produk', 'container-5-liter-untuk-houseware-atau-paket-promosi-produk', 'Container Plastik + Tutup Dimensi : 28 x 19 x 14 Cm Material : PP Original Sesuai Untuk Penyimpanan Barang Skala Rumah Tangga Variasi Warna Body : Clear, Biru, Kuning, Magenta dan...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 28, 19, 14, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/1622455960744.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Krat Telur + 4 Tray Telur - Kapasitas 120 Butir', 'krat-telur-4-tray-telur-kapasitas-120-butir', 'Krat Telur + 4 Tray Telur  Kapasitas : 120 Butir Telur Material : PP Block Copolymer Kuat Kokoh dan Tebal -  Praktis dan Hemat Sesuai untuk Pengiriman dan penyimpanan tel...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/1619926167359.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Palet Plastik 120 x 100 x 14 Cm', 'palet-plastik-120-x-100-x-14-cm', 'Tipe : Palet Plastik Industrial Dimensi : 120 x 100 x 14 Cm Material : PP Block Copolymer Virgin 100 % Handling 4 Sisi Forklift | Handlift Static Load : 6000 Kg Dinamic Load : 150...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 120, 100, 14, 'Palet Plastik', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/1618187211395.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Keranjang Buah Besar - Keranjang Ikan - Keranjang Panen', 'keranjang-buah-besar-keranjang-ikan-keranjang-panen', 'Tipe : Keranjang Buah Meterial : PP Block Copolymer Dilengkapi dengan 4 Handle Standar Warna : Hijau Diameter : 66 Cm Tinggi : 47 Cm Kokoh, Kuat, Tebal dan Tahan Lama Aplikasi : Cocok Untuk K...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Box Food Grade', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/1617675188080.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Lipat 68 x 46 x 28 Cm (Folded Container)', 'container-lipat-68-x-46-x-28-cm-folded-container', 'Dimensi : 68 x 46 x 28 Cm Material : PP Block Copolymer (PPBC) Warna : Hijau, Merah dan Kuning Karakteristik Produk : Kokoh, Porforated, Folded Volume : 87 Liter Aplikasi : Logistics, Warehou...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 68, 46, 28, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Container+Lipat+Merah_1.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik Solid Food Grade 41.5 x 28.5 x 16 Cm', 'container-plastik-solid-food-grade-41-5-x-28-5-x-16-cm', 'Tipe : Container Plastik Solid  Dimensi : 41.5 [P] x 28.5 [L] x 16 [T] Cm Material : PP Block Copolymer Original  Karakteristik Produk : Warna Cerah, Tidak Bau Plastik (Odorless),&n...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 41.5, 28.5, 16, 'Box Food Grade', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/20210319_081740.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Tray Telur Ayam Isi 30 Butir', 'tray-telur-ayam-isi-30-butir', 'Tipe : Tray Telur Ayam Isi 30 Butir Dimensi : 32 [P] x 31 [L] x 5 [T] Cm Material : PP Block Copolymer  Standar Warna : Biru, Kuning, Hijau dan Merah Karakteristik Produk : Warna Cerah, ...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Screenshot_20210307-141418_Lazada.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Plastik Kecil Untuk Spare Part - Baut - Ring - Etc', 'container-plastik-kecil-untuk-spare-part-baut-ring-etc', 'Container Solid  Dimensi : 24.5 x 23 x 11.5 Cm Material : PP Block Copolymer Original Stackable - Bisa disusun Aplikasi : Tempat baut - ring dan Spare Part Lain Kuat dan Teba...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 24.5, 23, 11.5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/1671683604487.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Keranjang Buah - Lengkeng - Jeruk - Sawo - Manggis Etc', 'keranjang-buah-lengkeng-jeruk-sawo-manggis-etc', 'Dimensi : 48 [P] x 35 [L] x 15 [T] Cm Material : PP Proses Produk Baru [All New] - Bukan Bekas Warna : Hijau Muda Keranjang multiguna untuk jeruk, apel, salak, manggis, kelengkeng...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Box Food Grade', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Keranjang%20Buah_Lengkeng_Jeruk%20+%20Tutup.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Keranjang Buah - Ikan 67 x 47 x 36 Cm Nestable & Stackable', 'keranjang-buah-ikan-67-x-47-x-36-cm-nestable-stackable', 'Keranjang Buah - Ikan  Dimensi : 67 [P] x 47 [L] x 36 [T] Cm Material PP Block Copolymer Virgin 100 % Nestable & Stackable Kokoh, Kuat dan Tahan Lama Aplikasi : Keranjang...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 67, 47, 36, 'Box Food Grade', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Keranjang%20Ikan%20-%20Buah%2067%20x%2047%20x%2036%20Cm1.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Solid Untuk Spare Part- Bumbu Pada Restoran Dll', 'container-solid-untuk-spare-part-bumbu-pada-restoran-dll', 'Container Solid -  Stackable Dimensi : 47 [P] x 35 [L] x 14 [T] Cm Pilihan Warna : Biru, Merah, Kuning & Hijau Material : PP Block Copolymer Virgin Aplikasi : Tempat Spar...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Container%20Solid%20Untuk%20Laci.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Lipat Solid 60 x 40 x 32 Cm', 'container-lipat-solid-60-x-40-x-32-cm', 'Container Lipat Solid Dimensi : 60 x 40 x 32 Cm Ukuran terlipat : 60 x 40 x 8 Cm Material : PP Original Berat per unit : 2.65 Kg Fitur : Foldable (lipat), Ringkas dan Hemat Ruang&n...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 60, 40, 32, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/1670395851817.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Bak Ukur Untuk Ikan Koi', 'bak-ukur-untuk-ikan-koi', 'Bak Ukur untuk Ikan Koi Dimensi : 67 x 33.5 x 28.5 Cm Material : PP Block Copolymer Original Standart Warna : Biru, Hijau & Orange Bak tidak berbau Plastik (Odorless) Sudah te...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 67, 33.5, 28.5, 'Lainnya', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/1668656841480.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Bak Semai Untuk Bibit Tanaman', 'bak-semai-untuk-bibit-tanaman', 'Dimensi : 100.5 x 35.5 x 10 Cm Material : PP Block Copolymer Stackable - Solid Pilihan Warna : Biru, Orange, Hijau Aplikasi : Untuk Operasional Bidang Usaha Pertanian, Manufacturi...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 100.5, 35.5, 10, 'Lainnya', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/1667582715327.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Lunch Box Bulat 5 Sekat Untuk Program Pencegahan Stunting', 'lunch-box-bulat-5-sekat-untuk-program-pencegahan-stunting', 'Lunch Box Bulat Diameter 24 Cm Tinggi 6 Cm 5 Sekat + 1 Tempat Sayur dengan tutup Material : PP dan LDPE Original Food Grade, Aman Kontak dengan makanan Bisa dipakai untuk Microwav...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Box Food Grade', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/1665964078120.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Solid 47 x 35.5 x 14 Cm', 'container-solid-47-x-35-5-x-14-cm', 'Container Solid - Stackable Dimensi : 47 x 35.5 x 14 Cm Material : PP Block Copolymer Pilihan Warna : Biru, Kuning, Hijau & Merah Aplikasi : Tempat Spare Part, Tempat Bahan Ba...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 47, 35.5, 14, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/1665395825418.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Keranjang Laundry - Keranjang Pasar - Keranjang Belanja BOSHJE', 'keranjang-laundry-keranjang-pasar-keranjang-belanja-boshje', 'Tipe : Keranjang Belanja - Keranjang Laundry Material : PP  Dimensi : 47.5 [P] x 33.2 [L] x 41.3 Cm (T) Dilengkapi dengan handle  Karakteristik Produk : Kokoh, Kuat dan ...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/1662951901218.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Lunch Box 5 Sekat New Model', 'lunch-box-5-sekat-new-model', 'Tipe : Lunch Box 5 Sekat / Kompartemen Dimensi : 27[P] x 21 [L] x 5 [T] Cm  Standar Warna : Biru, Hijau, Merah, Ungu, Pink Material : PP/LDPE Original 100 % Tidak menggunakan...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Box Food Grade', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Lunch%20Box%20Numan%20Hijau%205%20Sekat.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Industri Berlubang 68 x 49 x 35 Cm', 'container-industri-berlubang-68-x-49-x-35-cm', 'Tipe      : Container Industrial, Porforated Dimensi      : 68 [P] x 49 [L] x 35 [T] Cm Material      : PP Block Copolymer Original 10...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 68, 49, 35, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/1656844792925.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container Untuk Roti 2nd Hand Eks Perusahaan Bakery', 'container-untuk-roti-2nd-hand-eks-perusahaan-bakery', 'Tipe : Container Bakery / Roti Dimensi : 53 x 39.5 x 10.5 Cm - Stackable Material : PP Block Copolymer Warna : Grey / Abu-Abu Kondisi : Second Hand Kondisi Bersih, Tidak ada pecah...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 53, 39.5, 10.5, 'Box Food Grade', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/20230726_112255.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Keranjang Ikan / Sayur + Gagang Besi 2nd Hand', 'keranjang-ikan-sayur-gagang-besi-2nd-hand', 'Tipe : Keranjang Berlubang + Gagang Besi Dimensi : 69 x 48.5 x 37.5 Cm Material : PP Block Copolymer Aplikasi : Keranjang Untuk Ikan/ Sayur/ Buah Etc Kondisi : 2nd Hand Kualitas B...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 69, 48.5, 37.5, 'Box Food Grade', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/20230726_093329.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Keranjang Buah + Tutup', 'keranjang-buah-tutup', 'Tipe : Keranjang Buah Berlubang + Tutup Dimensi : 48 [P] x 35 [L] x 15 [T] Cm Colour : Green Material : PP  Aplikasi : Packing Buah, Sayur, Ikan Asin Etc  Untuk Informas...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Box Food Grade', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/20230714_150544.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Unknown Product', 'unknown-product', 'Tipe : Container Logistik Dimensi : 54.7 x 37.5 x 32.3 Cm Material : PP Colour : Grey (Abu-abu) Kondisi : Bekas Masih Bagus, Bersih dan Layak Pakai Eks Perusahaan Makanan Harga Ko...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 54.7, 37.5, 32.3, 'Box Food Grade', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/20230527_091315.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Palet Futari 30 x 30 x 3 Cm Untuk Alas Truk Thermo', 'palet-futari-30-x-30-x-3-cm-untuk-alas-truk-thermo', 'Tipe : Mini Palet 30 x 30 x 3 Cm Material : PP Original Sistem Sambungan : Interlock 4 Sisi Warna Pilihan :  1. Kuning 2. Hijau 3. Merah 4. Grey 5. Coklat 6. Cream White 7. Bi...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 30, 30, 3, 'Palet Plastik', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/1679977652565.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Mini Palet 30 x 30 x 3 Cm Untuk Tatakan Barang Gudang Sembako - Gudang Farmasi - Modern Market', 'mini-palet-30-x-30-x-3-cm-untuk-tatakan-barang-gudang-sembako-gudang-farmasi-modern-market', 'Tipe : Mini Palet  Sistem Sambungan : Interlock 4 Sisi Mudah dibongkar pasang Dimensi : 30 x 30 x 3 Cm / Lembar Material : PP Warna : Merah, Biru, Hijau dan Cream Tahan suhu ...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 30, 30, 3, 'Palet Plastik', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/1673594216355.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Alas Lantai Box Truk Berpendingin 30 x 30 x 3 Cm', 'alas-lantai-box-truk-berpendingin-30-x-30-x-3-cm', 'Tipe : Alas Bak Truk Berpendingin Sistem Sambungan : Interlock 4 Sisi Mudah dibongkar pasang Dimensi : 30 x 30 x 3 Cm / Lembar Material : PP Warna : Merah, Biru, Hijau dan Cream T...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 30, 30, 3, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/1674184019592.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Tatakan Plastik Untuk Kandang / Pet', 'tatakan-plastik-untuk-kandang-pet', 'Brand  :  Futari Plastic Dimensi  : 30 [P] x 30 [L] x 3 [T] Cm Material : PP  Weight   : 485 Gr / Unit Dimensi lubang  : 1.1 cm [L] x 2.8 [P] Cm ...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Lainnya', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/1673594216355.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Palet Plastik ALL NEW 120 x 120 x 16 Cm + Steel Reinforced', 'palet-plastik-all-new-120-x-120-x-16-cm-steel-reinforced', 'Tipe   : Palet Plastik Industrial, Porforated, Non Reversible Dimensi   : 120 [P] x 120 [L] x 16 Cm [T] Material : PP Block Copolymer Virgin 100 % Handling : 4 Sisi Fork...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 120, 120, 16, 'Palet Plastik', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/1672747026730.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Palet Plastik 120 x 50 x 13.2 Cm - ALL NEW', 'palet-plastik-120-x-50-x-13-2-cm-all-new', 'Tipe : Palet Plastik Industrial, Porforated (Berlubang)  Dimensi : 120 x 50 x 13.2 Cm Material : PP Block Copolymer Original Handling : 2 Sisi Forklift - Handlift Warna : Bir...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 120, 50, 13.2, 'Palet Plastik', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/1672545090891.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Part Case - Jolly Box Futari Small 24 x 12.5 x 7.5 Cm', 'part-case-jolly-box-futari-small-24-x-12-5-x-7-5-cm', 'Brand : Futari Tipe : Part Case (Tempat Spare Part) - Organizer  Dimensi : 24 (P) x 12.5 (L) x 7.5 (T) Cm Material : PP Block Copolymer Karakteristik Produk : Solid, Stackable - Nestable...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 24, 12.5, 7.5, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/1732920911049.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Palet Plastik Flat Surface Modular & Interlock 30 x 30 x 3 Cm', 'palet-plastik-flat-surface-modular-interlock-30-x-30-x-3-cm', 'Brand : Futari Tipe : Palet Plastik Flat Surface  Dimensi : 30 x 30 x 3 Cm Sistem : Modular & Interlock (Bisa disambung-sambung sesuai luas yang dibutuhkan antar sambunga...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 30, 30, 3, 'Palet Plastik', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Brosur%20Futari%20FS.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Krat Botol Isi 24 Botol - Kecil', 'krat-botol-isi-24-botol-kecil', 'Krat Botol Isi 24 Untuk Botol Ukuran Kecil  Maksimal Diameter Botol 6.3 Cm Dimensi : 41.5 x 28.5 x 28.5 Cm Stackable - Material PP Block Copolymer Standar Warna : Merah & ...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 41.5, 28.5, 28.5, 'Lainnya', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/20240217_081418%20-%20Copy.jpg')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Lunch Box Katering 6 Sekat Kiana - Lebih Tebal- Lebih Awet- Harga Tetap Ekonomis', 'lunch-box-katering-6-sekat-kiana-lebih-tebal-lebih-awet-harga-tetap-ekonomis', 'Lunch Box Kiana (New Product) Material : PP Homopolymer 100 % Original - Aman dari Bahan Kimia Berbahaya Dimensi : P : 27 x L : 22 x T : 5 Cm Body 30 % lebih tebal dari produk sejenis - Lebih...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Box Food Grade', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/Blue%209221.png')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Unknown Product', 'unknown-product-1', 'JOLLY BOX - PART CASE FUTARI MEDIUM (M) Spesifikasi : Dimensi Per Pcs : 30 (P) x 16 (L) x 12 (T) Cm Material : Plastik PP Virgin tidak berbau, warna cerah tidak kusam.&nbsp...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Container Industri', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/IMG_20250625_163545.png')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)
VALUES ('Container  Solid Ekonomis Untuk Bakery, Resto, Hotel, Katering - Food Grade', 'container-solid-ekonomis-untuk-bakery-resto-hotel-katering-food-grade', 'Container Industrial Tipe : Solid & Stackable Brand   Futari No 148 Dimensi : 51 [P] x 34 [L] x 10 [T] Cm -  Volume : 12.8 Liter Material PP Virgin 100 %   *) Ke...', 'Plastik PP/HDPE', 'Sesuai Gambar', 0, false, 0, 0, 0, 'Box Food Grade', ARRAY['Industri', 'Pergudangan', 'Distribusi'], '/images/products/481_Solid.png')
ON CONFLICT (slug) DO NOTHING;

COMMIT;

-- ✅ Selesai! 189 produk telah dimasukkan.