# Agung Dwi Sahputra — Portfolio

Website portofolio pribadi yang dibangun dengan **Astro 6**, **Tailwind CSS 4**, dan di-deploy ke **GitHub Pages**.

🌐 **Live:** [agungdwisahputra.github.io/AgungDwiSahputra](https://agungdwisahputra.github.io/AgungDwiSahputra)

---

## Fitur

- **Desain Glassmorphism** — tema dark navy dengan efek kaca (*backdrop-filter*)
- **Bilingual (ID / EN)** — toggle bahasa Indonesia/Inggris tanpa reload halaman
- **Full-text Search** — powered by [Pagefind](https://pagefind.app), aktif setelah `npm run build`
- **Halaman Proyek** — konten dari Markdown via Astro Content Layer, route `/projects/[slug]`
- **Formulir Kontak** — Formspree dengan validasi client-side dan proteksi honeypot
- **SEO lengkap** — sitemap, `robots.txt`, JSON-LD (Person, WebSite, CreativeWork), Open Graph, hreflang
- **Animasi scroll** — IntersectionObserver pada elemen `[data-animate]`
- **CI/CD** — GitHub Actions auto-deploy ke GitHub Pages pada setiap push ke `main`

---

## Tech Stack

| Kategori | Teknologi |
|---|---|
| Framework | Astro 6.x (static output) |
| Styling | Tailwind CSS 4.x + Inter font |
| Search | Pagefind 1.5.x |
| Contact Form | Formspree |
| Deployment | GitHub Pages via GitHub Actions |

---

## Memulai

**Prasyarat:** Node.js ≥ 22.12

```bash
# Install dependencies
npm install

# Jalankan dev server
npm run dev

# Build untuk production (termasuk Pagefind index)
npm run build

# Preview hasil build
npm run preview
```

> **Catatan:** Fitur pencarian hanya aktif setelah `npm run build`. Di dev mode akan muncul pesan *"Search aktif setelah build"* — ini normal.

---

## Struktur Konten

Semua data personal ada di folder `src/content/`:

| File | Isi |
|---|---|
| `profile.json` | Nama, bio, lokasi, email, link sosial, path CV |
| `experience.json` | Pengalaman kerja, pendidikan, sertifikasi, organisasi |
| `skills.json` | Daftar keahlian teknis (6 kategori, nilai 0–100) |
| `projects/*.md` | Detail setiap proyek (frontmatter + konten Markdown) |

### Menambah Proyek Baru

Buat file baru di `src/content/projects/nama-proyek.md`:

```markdown
---
title: "Nama Proyek"
description: "Deskripsi singkat proyek."
category: "Web Dev"      # GIS | Web Dev | Mobile | Data
tags: ["Laravel", "MySQL"]
year: 2025
status: "completed"      # completed | ongoing
featured: false
liveUrl: "https://..."   # opsional
repoUrl: "https://..."   # opsional
outcomes:
  - "Pencapaian utama proyek"
---

Konten detail proyek dalam Markdown...
```

---

## Kustomisasi

### Mengganti Data Pribadi
Edit file JSON di `src/content/` — tidak perlu menyentuh komponen Astro.

### Mengganti Teks UI (Bilingual)
Semua teks UI ada di objek `TRANSLATIONS` dalam `src/layouts/BaseLayout.astro` (`<script>` block). Tambahkan key baru lalu gunakan atribut `data-i18n="key.baru"` pada elemen HTML.

### Mengubah Warna / Tema
Edit variabel CSS di blok `@theme {}` dalam `src/styles/global.css`.

---

## Deployment

Workflow otomatis sudah dikonfigurasi di `.github/workflows/deploy.yml`.

**Langkah sekali untuk setup awal:**
1. Buka repo di GitHub → **Settings** → **Pages**
2. Ubah **Source** menjadi `GitHub Actions`
3. Push ke branch `main` — deploy akan berjalan otomatis

---

## Lisensi

Kode ini bersifat open untuk referensi. Mohon tidak menggunakan konten personal (foto, data CV, teks bio) tanpa izin.
