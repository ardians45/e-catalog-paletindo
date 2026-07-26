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

  const rawData = readFileSync('./src/data/dummy_data.json', 'utf-8');
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
    let baseSlug = slugify(p.name);
    if (!baseSlug) baseSlug = 'product';

    let slug = baseSlug;
    let counter = 1;
    while (usedSlugs.has(slug)) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }
    usedSlugs.add(slug);

    const name = escapeSQL(p.name);
    const category = escapeSQL(p.categories?.[0] || 'Container Industri');
    const description = escapeSQL(p.description || '');
    const material = escapeSQL(p.material || '');
    const color = escapeSQL(p.color || '');
    const lengthOuter = p.dimensions?.length_outer || 0;
    const widthOuter = p.dimensions?.width_outer || 0;
    const heightOuter = p.dimensions?.height_outer || 0;
    const imageUrl = escapeSQL(p.image || '');
    const applicationsArr = p.applications || [];
    const applications = applicationsArr.length > 0
      ? `ARRAY[${applicationsArr.map(a => `'${escapeSQL(a)}'`).join(',')}]::text[]`
      : 'ARRAY[]::text[]';

    sqlLines.push(
      `INSERT INTO public.products (name, slug, category, description, material, color, length_outer, width_outer, height_outer, image_url, applications) VALUES (` +
      `'${name}', '${slug}', '${category}', '${description}', '${material}', '${color}', ${lengthOuter}, ${widthOuter}, ${heightOuter}, '${imageUrl}', ${applications}` +
      `) ON CONFLICT (slug) DO NOTHING;`
    );
  }

  sqlLines.push('');
  sqlLines.push('COMMIT;');
  sqlLines.push('');
  sqlLines.push(`-- ✅ Selesai! ${products.length} produk telah dimasukkan.`);

  const sqlContent = sqlLines.join('\n');
  writeFileSync('./database/migrate-products-data.sql', sqlContent, 'utf-8');

  console.log(`✅ File SQL berhasil dibuat: database/migrate-products-data.sql`);
  console.log(`📋 Total: ${products.length} INSERT statements\n`);
  console.log(`👉 LANGKAH SELANJUTNYA:`);
  console.log(`   1. Buka Supabase Dashboard → SQL Editor`);
  console.log(`   2. Copy-paste SELURUH isi file migrate-products-data.sql`);
  console.log(`   3. Klik "Run" — semua produk akan terinsert!`);
  console.log('');
}

main();
