/**
 * Upload semua gambar produk ke Supabase Storage
 * lalu update image_url di database.
 * 
 * PERSIAPAN:
 *   1. Tambahkan SUPABASE_SERVICE_ROLE_KEY di file .env.local
 *   2. Jalankan: node migrate-images.mjs
 * 
 * Script ini:
 *   - Membaca semua gambar dari public/images/products/
 *   - Upload ke Supabase Storage bucket 'product-images'
 *   - Update image_url di tabel products
 */

import { createClient } from '@supabase/supabase-js';
import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, extname, basename } from 'path';
import { config } from 'dotenv';

// Load .env.local
config({ path: '.env.local' });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error('❌ ERROR: Pastikan .env.local berisi:');
  console.error('   NEXT_PUBLIC_SUPABASE_URL=...');
  console.error('   SUPABASE_SERVICE_ROLE_KEY=...');
  console.error('');
  console.error('   Dapatkan service_role key dari:');
  console.error('   Supabase Dashboard → Settings → API → service_role (secret)');
  process.exit(1);
}

// Pakai service_role key agar bypass RLS
const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

const IMAGES_DIR = './public/images/products';
const BUCKET_NAME = 'product-images';

// Content type mapping
function getContentType(ext) {
  const types = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
  };
  return types[ext.toLowerCase()] || 'application/octet-stream';
}

async function ensureBucket() {
  // Check if bucket exists
  const { data: buckets } = await supabase.storage.listBuckets();
  const exists = buckets?.some(b => b.name === BUCKET_NAME);
  
  if (!exists) {
    console.log(`📁 Membuat bucket "${BUCKET_NAME}"...`);
    const { error } = await supabase.storage.createBucket(BUCKET_NAME, {
      public: true,
      fileSizeLimit: 5242880, // 5MB
      allowedMimeTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    });
    if (error) {
      console.error('❌ Gagal membuat bucket:', error.message);
      process.exit(1);
    }
    console.log('✅ Bucket berhasil dibuat\n');
  } else {
    console.log(`✅ Bucket "${BUCKET_NAME}" sudah ada\n`);
  }
}

async function main() {
  console.log('🖼️  Upload Gambar Produk ke Supabase Storage\n');
  console.log('==========================================\n');

  // 1. Pastikan bucket ada
  await ensureBucket();

  // 2. Baca list file gambar lokal
  if (!existsSync(IMAGES_DIR)) {
    console.error(`❌ Folder ${IMAGES_DIR} tidak ditemukan`);
    process.exit(1);
  }

  const files = readdirSync(IMAGES_DIR).filter(f => {
    const ext = extname(f).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
  });

  console.log(`📦 Ditemukan ${files.length} gambar di ${IMAGES_DIR}\n`);

  // 3. Upload satu per satu
  let uploaded = 0;
  let skipped = 0;
  let failed = 0;

  for (let i = 0; i < files.length; i++) {
    const filename = files[i];
    const filePath = join(IMAGES_DIR, filename);
    const ext = extname(filename);
    const contentType = getContentType(ext);
    
    // Bersihkan nama file untuk storage path (ganti special chars)
    const safeName = filename.replace(/%[0-9A-Fa-f]{2}/g, '_').replace(/[^a-zA-Z0-9._-]/g, '_');
    const storagePath = `products/${safeName}`;

    process.stdout.write(`  [${i + 1}/${files.length}] ${filename}... `);

    try {
      const fileBuffer = readFileSync(filePath);

      const { data, error } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(storagePath, fileBuffer, {
          contentType,
          upsert: true, // Overwrite if exists
        });

      if (error) {
        console.log(`❌ ${error.message}`);
        failed++;
        continue;
      }

      uploaded++;
      console.log(`✅`);
    } catch (err) {
      console.log(`❌ ${err.message}`);
      failed++;
    }
  }

  console.log(`\n📊 Upload selesai: ✅ ${uploaded} | ⏩ ${skipped} | ❌ ${failed}\n`);

  // 4. Update image_url di database
  console.log('🔄 Mengupdate image_url di database...\n');

  // Get the public URL base
  const { data: { publicUrl: baseUrl } } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl('');

  // Fetch all products
  const { data: products, error: fetchErr } = await supabase
    .from('products')
    .select('id, image_url')
    .not('image_url', 'is', null);

  if (fetchErr) {
    console.error('❌ Gagal fetch products:', fetchErr.message);
    return;
  }

  let updated = 0;
  for (const product of (products || [])) {
    if (!product.image_url || !product.image_url.startsWith('/images/products/')) {
      continue;
    }

    // Extract filename from local path
    const localFilename = product.image_url.replace('/images/products/', '');
    const safeName = localFilename.replace(/%[0-9A-Fa-f]{2}/g, '_').replace(/[^a-zA-Z0-9._-]/g, '_');
    const publicUrl = `${baseUrl}products/${safeName}`.replace(/([^:])\/\//g, '$1/');

    const { error: updateErr } = await supabase
      .from('products')
      .update({ image_url: publicUrl })
      .eq('id', product.id);

    if (!updateErr) {
      updated++;
    } else {
      console.error(`  ❌ Update gagal untuk ID ${product.id}: ${updateErr.message}`);
    }
  }

  console.log(`✅ ${updated} produk di-update dengan URL Supabase Storage\n`);
  console.log('==========================================');
  console.log('🎉 SELESAI! Semua gambar sudah di Supabase Storage');
  console.log('==========================================\n');
}

main().catch(err => {
  console.error('💥 Error:', err);
  process.exit(1);
});
