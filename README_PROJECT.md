# Company Landing Page - Dokumentasi Proyek

**Nama Proyek:** Modern Company Landing Page  
**Tanggal Mulai:** 1 Februari 2026  
**Status:** Dalam Pengembangan  
**Author:** Bagas

---

## Deskripsi Proyek

### Latar Belakang

Proyek ini adalah pembuatan website landing page perusahaan modern yang dirancang untuk menampilkan profil perusahaan dengan tampilan profesional dan performa optimal. Website ini dibangun dengan pendekatan headless CMS yang memisahkan antara backend (content management) dan frontend (tampilan).

### Tujuan Utama

- **Tampilan Modern** - Design dengan glassmorphism, rounded corners, dan animasi halus
- **Performa Tinggi** - Target Lighthouse score 90+ untuk semua metrik
- **Responsive** - Mobile-first approach, tampil sempurna di semua device
- **Mudah Dikelola** - Content bisa diupdate via CMS tanpa coding
- **SEO Friendly** - Optimasi untuk mesin pencari dengan dynamic meta tags

### Fitur Utama

- Homepage dengan section: Hero, Clients, Services, Projects, Testimonials, Team, CTA
- Halaman Services untuk daftar layanan perusahaan
- Halaman Projects untuk portfolio proyek yang pernah dikerjakan
- Halaman About untuk profil dan tim perusahaan
- Halaman Contact dengan form kontak
- Blog untuk artikel dan berita perusahaan

---

## Arsitektur & Keputusan Teknis

### Arsitektur Sistem

Proyek ini menggunakan arsitektur headless CMS dengan 3 layer utama:

**Layer 1 - Frontend (Astro)**
Berjalan di port 4321. Menggunakan Static Site Generation (SSG), Tailwind CSS untuk styling, component-based architecture, dan zero JavaScript by default.

**Layer 2 - Backend CMS (Strapi)**
Berjalan di port 1337. Berfungsi sebagai headless CMS dengan REST API endpoints, media library untuk gambar, dan admin panel untuk content management.

**Layer 3 - Database (SQLite)**
Menggunakan better-sqlite3 untuk development. Database ringan yang portable dan mudah dikonfigurasi.

Frontend berkomunikasi dengan backend melalui REST API call untuk mengambil data konten.

### Keputusan Arsitektur

**Mengapa Astro sebagai Frontend?**

Astro dipilih karena mengirim halaman sebagai HTML murni tanpa JavaScript (Zero JS by Default), sehingga performa sangat cepat. Arsitektur Islands memungkinkan komponen interaktif di-hydrate secara terpisah. Konten di-render saat build time bukan saat request, jadi lebih cepat. Astro juga framework agnostic, bisa menggunakan React, Vue, atau Svelte dalam satu proyek. HTML static lebih mudah diindeks search engine sehingga SEO optimal.

**Mengapa Strapi sebagai Backend CMS?**

Strapi dipilih karena self-hosted, tidak tergantung layanan pihak ketiga dan data tetap di kontrol kita. Content type bisa dibuat sesuai kebutuhan tanpa batasan (customizable). Mendukung REST dan GraphQL. Admin panel memiliki UI yang user-friendly untuk non-technical user. Plugin system memudahkan penambahan fitur.

**Mengapa Tailwind CSS?**

Tailwind CSS menggunakan pendekatan utility-first, styling langsung di HTML tanpa perlu file CSS terpisah. CSS yang tidak dipakai otomatis dihapus saat build (purge unused). Design system sudah built-in mencakup spacing, colors, dan typography. Development jadi lebih cepat tanpa switching file.

**Mengapa SQLite untuk Development?**

SQLite tidak perlu install database server terpisah (zero config). Database adalah single file sehingga mudah di-share (portable). Performance sangat baik untuk development. Bisa diganti ke PostgreSQL untuk production (migration ready).

### Content Types di Strapi

**Collection Types (data yang bisa banyak):**

- Service - Daftar layanan perusahaan
- Project - Portfolio proyek
- Blog Post - Artikel blog
- Category - Kategori untuk blog/project
- Testimonial - Testimoni klien
- Team Member - Anggota tim
- Client Logo - Logo klien/partner

**Single Types (data yang cuma satu):**

- Homepage - Konten halaman utama
- About Page - Konten halaman about
- Site Setting - Pengaturan global seperti logo dan kontak

### API Integration Pattern

Untuk integrasi API, dibuat helper function di file strapi.ts yang mengambil data dari Strapi. Base URL diambil dari environment variable. Function fetchAPI generic digunakan untuk semua request dengan error handling yang proper. Setiap content type memiliki function spesifik seperti getServices, getProjects, getTestimonials, dan lainnya.

---

## Tech Stack

### Frontend

- **Astro versi 5.17.1** - Framework frontend dengan SSG
- **Tailwind CSS versi 4.1.18** - Utility-first CSS framework
- **TypeScript versi 5.x** - Type safety dan developer experience
- **Sharp versi 0.34.3** - Image optimization
- **MDX** - Markdown dengan JSX untuk blog

### Backend

- **Strapi versi 5.34.0** - Headless CMS
- **better-sqlite3 versi 12.4.1** - Database driver
- **Node.js versi 20.0.0 atau lebih** - Runtime environment

### Design System

**Warna Utama:**

- Primary: Indigo 500 (#6366f1)
- Secondary: Purple 500 (#8b5cf6)
- Accent: Cyan 500 (#06b6d4)
- Dark: Slate 900 (#0f172a)
- Light: Slate 50 (#f8fafc)

**Typography:**

- Font Heading: Plus Jakarta Sans
- Font Body: Inter

**Effects:**
Glassmorphism, gradient backgrounds, smooth animations, dan rounded corners.

---

## Struktur Folder

Proyek terdiri dari dua folder utama:

**astro-frontend** berisi semua code frontend. Di dalamnya ada folder public untuk static assets seperti fonts dan images. Folder src berisi assets untuk images yang di-optimize, components untuk komponen Astro termasuk sections homepage (Hero, Clients, Services, Projects, Testimonials, Team, CTA), content untuk konten MDX blog, layouts untuk layout templates, lib untuk helper functions termasuk strapi.ts, pages untuk route pages (index, about, contact, blog, projects, services), dan styles untuk global CSS.

**strapi-backend** berisi semua code backend CMS. Di dalamnya ada folder config untuk konfigurasi Strapi, database untuk migrations, public untuk uploaded files, dan src yang berisi api dengan semua content types (service, project, blog-post, testimonial, team-member, client-logo, category, homepage, about-page, site-setting) serta admin untuk customization.

---

## Tantangan & Solusi

### Tantangan 1: Integrasi Astro dengan Strapi

**Masalah:** Astro perlu fetch data dari Strapi saat build time. Struktur response Strapi berbeda dengan format yang umum. Perlu handle error jika Strapi tidak running.

**Solusi:** Dibuat wrapper function yang handle semua kompleksitas. Function ini menghandle error dengan graceful (return null bukan throw error), extract data dari format response Strapi, dan type-safe dengan TypeScript generics.

**Hasil:** Frontend bisa build meskipun Strapi down dengan fallback data. Code lebih clean dan reusable.

### Tantangan 2: Image URL dari Strapi

**Masalah:** Strapi menyimpan image dengan relative URL (/uploads/image.jpg). Di production, URL bisa berbeda dengan development. Perlu fallback jika image tidak ada.

**Solusi:** Dibuat helper function getStrapiMediaUrl yang mengecek apakah URL kosong (return placeholder), sudah absolute (return as is), atau relative (tambahkan base URL).

**Hasil:** Image selalu tampil dengan URL yang benar. Ada fallback image jika media tidak ditemukan. Mudah switch antara development dan production.

### Tantangan 3: Zero JavaScript dengan Interaktivitas

**Masalah:** Astro mengirim HTML murni tanpa JavaScript. Beberapa fitur butuh interaktivitas seperti mobile menu dan animations. Tidak mau bundle JavaScript yang besar.

**Solusi:** Gunakan CSS-only solutions untuk animasi sederhana. Gunakan Astro Islands untuk komponen yang butuh JS. Inline script kecil untuk toggle menu menggunakan teknik checkbox hidden dengan peer selector.

**Hasil:** Zero JS untuk sebagian besar halaman. Interactive components di-load hanya jika diperlukan. Bundle size minimal.

### Tantangan 4: Content Management untuk Non-Technical User

**Masalah:** Tim content perlu update website tanpa coding. Strapi admin panel perlu dikonfigurasi dengan baik. Field yang kompleks seperti JSON dan Rich Text perlu dijelaskan.

**Solusi:** Buat content type dengan field yang jelas dan deskriptif. Gunakan field hints di Strapi untuk panduan. Buat dokumentasi khusus untuk content editor. Gunakan default values untuk field yang umum.

**Hasil:** Content editor bisa update website mandiri. Konsistensi konten terjaga. Tidak perlu developer untuk update konten.

### Tantangan 5: Performance Optimization

**Masalah:** Banyak image yang bisa memperlambat loading. Font custom menambah request. CSS yang besar dari Tailwind.

**Solusi:** Untuk image optimization, gunakan sharp untuk resize dan compress, lazy loading untuk image below the fold, dan WebP format dengan fallback. Untuk font loading, self-host fonts (tidak dari Google Fonts), font-display swap, dan preload critical fonts. Untuk CSS optimization, Tailwind purge unused CSS, critical CSS inline, dan async load non-critical CSS.

**Hasil:** Lighthouse Performance 90+. First Contentful Paint kurang dari 1.5 detik. Total bundle size minimal.

---

## Hasil & Pencapaian

### Metrics Target

- Lighthouse Performance: Target 90+ (In Progress)
- Lighthouse Accessibility: Target 90+ (In Progress)
- Lighthouse Best Practices: Target 90+ (In Progress)
- Lighthouse SEO: Target 90+ (In Progress)
- First Contentful Paint: Target kurang dari 1.5 detik (In Progress)
- Time to Interactive: Target kurang dari 3 detik (In Progress)

### Fitur yang Selesai

Yang sudah selesai:

- Setup Strapi backend dengan semua content types
- Setup Astro frontend dengan Tailwind CSS
- Integrasi API Strapi ke Astro
- Komponen section homepage (Hero, Clients, Services, dll)
- Layout dan navigation
- Blog dengan MDX support

Yang sedang dikerjakan:

- Halaman dinamis (projects, services)
- Form contact
- Animasi dan micro-interactions

Yang akan dikerjakan:

- Deployment production

### Pembelajaran

**Headless CMS Architecture** - Memahami pemisahan frontend dan backend, API-first approach, dan content modeling yang baik.

**Static Site Generation** - Build-time vs Runtime rendering, Incremental Static Regeneration, dan trade-offs SSG vs SSR.

**Modern CSS Practices** - Utility-first CSS dengan Tailwind, CSS custom properties untuk theming, dan responsive design patterns.

**Performance Optimization** - Image optimization strategies, font loading best practices, dan bundle size optimization.

---

## Cara Menjalankan

### Prerequisites

- Node.js versi 20.0.0 atau lebih baru
- npm atau yarn
- Git

### Setup Backend (Strapi)

Pertama masuk ke folder strapi-backend. Lalu install dependencies dengan npm install. Jalankan development server dengan npm run dev. Buka browser di http://localhost:1337/admin untuk admin panel dan http://localhost:1337/api untuk API.

### Setup Frontend (Astro)

Pertama masuk ke folder astro-frontend. Lalu install dependencies dengan npm install. Buat file .env dan isi dengan PUBLIC_STRAPI_URL=http://localhost:1337. Jalankan development server dengan npm run dev. Buka browser di http://localhost:4321.

### Build Production

Untuk backend, masuk ke folder strapi-backend, jalankan npm run build lalu npm run start.

Untuk frontend, masuk ke folder astro-frontend, jalankan npm run build lalu npm run preview untuk test production build.

---

## Referensi

- Astro Documentation: https://docs.astro.build
- Strapi Documentation: https://docs.strapi.io
- Tailwind CSS Documentation: https://tailwindcss.com/docs
- Plus Jakarta Sans Font: https://fonts.google.com/specimen/Plus+Jakarta+Sans

---

Catatan: Dokumentasi ini akan diupdate seiring perkembangan proyek.

Last Updated: Februari 2026
