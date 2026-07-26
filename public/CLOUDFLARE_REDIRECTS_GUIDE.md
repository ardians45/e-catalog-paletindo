# Panduan Setup 301 Permanent Redirect di Cloudflare Dashboard (paletindo.id)

Untuk menyelesaikan masalah **Split Domain** (kebocoran impresi antara `http://`, `https://www.`, `http://www.` dan `https://paletindo.id/`), lakukan konfigurasi 301 Redirect berikut pada akun Cloudflare Anda.

---

## Opsi 1: Menggunakan Single Redirects (Rekomendasi Utama)

1. Login ke [Cloudflare Dashboard](https://dash.cloudflare.com/) dan pilih domain **paletindo.id**.
2. Di menu navigasi sebelah kiri, buka **Rules** > **Redirect Rules** (atau **Single Redirects**).
3. Klik tombol **Create Rule**.

### Rule 1: Always Use HTTPS & Canonical Non-WWW
- **Rule name**: `Canonical Redirect to https://paletindo.id`
- **If incoming requests match...**: Select **Custom filter expression**
- **Expression**:
  ```text
  (http.host eq "www.paletindo.id") or (ssl and http.host eq "www.paletindo.id") or (not ssl and http.host eq "paletindo.id")
  ```
- **Then...**:
  - **Type**: Dynamic
  - **Expression**: `concat("https://paletindo.id", http.request.uri.path)`
  - **Status code**: `301` (Moved Permanently)
  - **Preserve query string**: Centang (Check)

4. Klik **Deploy**.

---

## Opsi 2: Menggunakan Page Rules (Legacy Rule)

Jika Anda menggunakan Cloudflare Page Rules:

1. Buka **Rules** > **Page Rules**.
2. Klik **Create Page Rule**.
3. **URL**: `http://*paletindo.id/*`
   - **Setting**: `Always Use HTTPS`
4. Klik **Save and Deploy Page Rule**.

5. Tambahkan Page Rule kedua:
   - **URL**: `https://www.paletindo.id/*`
   - **Setting**: `Forwarding URL`
   - **Status Code**: `301 - Permanent Redirect`
   - **Destination URL**: `https://paletindo.id/$1`
6. Klik **Save and Deploy Page Rule**.

---

## Pengujian Setelah Setup

Buka Terminal / Command Prompt dan jalankan tes HTTP Header berikut:

```bash
# 1. Tes HTTP Non-WWW -> HTTPS Non-WWW
curl -I http://paletindo.id

# 2. Tes HTTPS WWW -> HTTPS Non-WWW
curl -I https://www.paletindo.id
```

**Hasil yang diharapkan**: Response header mengembalikan `HTTP/1.1 301 Moved Permanently` dengan header `Location: https://paletindo.id/`.
