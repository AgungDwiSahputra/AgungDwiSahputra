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

## Struktur Konten

Semua data personal ada di folder `src/content/`:

| File | Isi |
|---|---|
| `profile.json` | Nama, bio, lokasi, email, link sosial, path CV |
| `experience.json` | Pengalaman kerja, pendidikan, sertifikasi, organisasi |
| `skills.json` | Daftar keahlian teknis (6 kategori, nilai 0–100) |
| `projects/*.md` | Detail setiap proyek (frontmatter + konten Markdown) |

---

## Lisensi

Kode ini bersifat open untuk referensi. Mohon tidak menggunakan konten personal (foto, data CV, teks bio) tanpa izin.
