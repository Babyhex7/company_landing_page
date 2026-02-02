# 🌱 Strapi Data Seeder

Auto-populate sample data ke Strapi tanpa klik-klik manual!

## 📋 Prerequisites

1. Strapi sudah running di `http://localhost:1337`
2. Sudah buat admin user
3. Sudah set API permissions (Public role)

## 🚀 Cara Pakai

### Step 1: Buat API Token

1. Buka Strapi Admin: http://localhost:1337/admin
2. Login dengan admin user
3. **Settings** (⚙️) → **API Tokens** → **Create new API Token**
4. Isi:
   - **Name**: `Seeder`
   - **Description**: `Token untuk populate sample data`
   - **Token duration**: `Unlimited`
   - **Token type**: `Full access`
5. Klik **Save**
6. **Copy token** yang muncul (hanya muncul sekali!)

### Step 2: Set Environment Variable

**PowerShell (Windows):**

```powershell
$env:STRAPI_TOKEN="paste_token_disini"
```

**Bash (Linux/Mac):**

```bash
export STRAPI_TOKEN="paste_token_disini"
```

### Step 3: Install Dependencies (kalau belum)

```bash
npm install
```

### Step 4: Jalankan Seeder

```bash
node scripts/populate-data.js
```

## ✅ Apa Yang Di-populate?

| Content Type     | Jumlah | Keterangan                                    |
| ---------------- | ------ | --------------------------------------------- |
| **Homepage**     | 1      | Single type dengan hero, CTA, dll             |
| **Site Setting** | 1      | Single type dengan logo, contact, social      |
| **About Page**   | 1      | Single type dengan story, mission, vision     |
| **Categories**   | 5      | Web, Mobile, Design, E-commerce, SaaS         |
| **Services**     | 6      | Web Dev, Mobile, UI/UX, Cloud, AI, Consulting |
| **Client Logos** | 8      | Google, Microsoft, Apple, dll                 |
| **Testimonials** | 4      | Testimoni dari klien                          |
| **Team Members** | 4      | CEO, CTO, Designer, Developer                 |

## 🎯 Setelah Seeder Berhasil

1. **Buka Strapi Admin** dan lihat semua content sudah terisi
2. **Test API endpoints:**

   ```
   http://localhost:1337/api/homepage
   http://localhost:1337/api/services
   http://localhost:1337/api/testimonials
   ```

3. **Lanjut ke Frontend Astro!** 🚀

## ⚠️ Troubleshooting

### Error: STRAPI_TOKEN not found

- Pastikan sudah set environment variable dengan benar
- Token harus dalam quotes

### Error: 403 Forbidden

- Pastikan API Token type = "Full access"
- Pastikan token belum expired

### Error: 404 Not Found

- Pastikan Strapi sudah running
- Pastikan URL = http://localhost:1337

## 🔄 Reset Data

Kalau mau reset dan populate ulang:

```bash
# Hapus database
cd strapi-backend
Remove-Item -Path ".tmp" -Recurse -Force

# Restart Strapi
npm run develop

# Buat admin user lagi
# Buat API token lagi
# Jalankan seeder lagi
```

## 📝 Customize Data

Edit file `scripts/seed-data.js` untuk ubah sample data sesuai kebutuhan.
