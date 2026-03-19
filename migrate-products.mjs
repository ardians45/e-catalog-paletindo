/**
 * GENERATE SQL INSERT dari dummy_data.json
 * 
 * Cara pakai:
 *   node migrate-products.mjs
 * 
 * Script ini akan GENERATE file SQL yang bisa di-copas ke Supabase SQL Editor.
 * Supabase SQL Editor berjalan dengan role postgres (bypass RLS).
 */

import { readFileSync, writeFileSync } from 'fs';

// Helper: buat slug dari nama produk
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Escape single quotes for SQL
function escapeSQL(str) {
  if (!str) return '';
  return str.replace(/'/g, "''");
}

function main() {
  console.log('📦 Membaca dummy_data.json...\n');

  const rawData = readFileSync('./dummy_data.json', 'utf-8');
  const products = JSON.parse(rawData);
  console.log(`✅ Ditemukan ${products.length} produk\n`);

  const usedSlugs = new Set();
  const sqlLines = [];

  sqlLines.push('-- ==========================================');
  sqlLines.push('-- MIGRASI PRODUK dari dummy_data.json');
  sqlLines.push(`-- Total: ${products.length} produk`);
  sqlLines.push('-- Jalankan di Supabase SQL Editor');
  sqlLines.push('-- ==========================================');
  sqlLines.push('');
  sqlLines.push('BEGIN;');
  sqlLines.push('');

  for (const p of products) {
    let slug = slugify(p.name);
    let counter = 1;
    while (usedSlugs.has(slug)) {
      slug = `${slugify(p.name)}-${counter}`;
      counter++;
    }
    usedSlugs.add(slug);

    const name = escapeSQL(p.name);
    const description = escapeSQL(p.description || '');
    const material = escapeSQL(p.material || 'Plastik PP/HDPE');
    const color = escapeSQL(p.color || 'Sesuai Gambar');
    const weight = p.weight || 0;
    const isFeatured = p.is_featured ? 'true' : 'false';
    const lengthOuter = p.dimensions?.length_outer || 0;
    const widthOuter = p.dimensions?.width_outer || 0;
    const heightOuter = p.dimensions?.height_outer || 0;
    const category = escapeSQL(p.categories?.[0] || 'Container Industri');
    const applications = p.applications && p.applications.length > 0
      ? `ARRAY[${p.applications.map(a => `'${escapeSQL(a)}'`).join(', ')}]`
      : "ARRAY[]::text[]";
    const imageUrl = p.image ? `'${escapeSQL(p.image)}'` : 'NULL';

    sqlLines.push(`INSERT INTO public.products (name, slug, description, material, color, weight, is_featured, length_outer, width_outer, height_outer, category, applications, image_url)`);
    sqlLines.push(`VALUES ('${name}', '${slug}', '${description}', '${material}', '${color}', ${weight}, ${isFeatured}, ${lengthOuter}, ${widthOuter}, ${heightOuter}, '${category}', ${applications}, ${imageUrl})`);
    sqlLines.push(`ON CONFLICT (slug) DO NOTHING;`);
    sqlLines.push('');
  }

  sqlLines.push('COMMIT;');
  sqlLines.push('');
  sqlLines.push(`-- ✅ Selesai! ${products.length} produk telah dimasukkan.`);

  const sqlContent = sqlLines.join('\n');
  writeFileSync('./migrate-products-data.sql', sqlContent, 'utf-8');

  console.log(`✅ File SQL berhasil dibuat: migrate-products-data.sql`);
  console.log(`📋 Total: ${products.length} INSERT statements\n`);
  console.log(`👉 LANGKAH SELANJUTNYA:`);
  console.log(`   1. Buka Supabase Dashboard → SQL Editor`);
  console.log(`   2. Copy-paste SELURUH isi file migrate-products-data.sql`);
  console.log(`   3. Klik "Run" — semua produk akan terinsert!`);
  console.log('');
}

main();
