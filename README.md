# Futuristic Interactive Portfolio
Website portofolio statis HTML, CSS, JavaScript. Semua konten diisi manual melalui `config.js`.

## Struktur
- `index.html`: struktur halaman
- `style.css`: desain, warna, responsif, animasi
- `app.js`: interaksi dan render data
- `config.js`: semua teks, skills, proyek, prestasi, pengalaman, tautan
- `assets/profile`: foto profil
- `assets/projects`: preview proyek
- `assets/achievements`: sertifikat/prestasi
- `assets/documents`: CV dan dokumen

## Cara mengisi
1. Buka `config.js`, ganti data contoh.
2. Masukkan foto/PDF ke folder `assets` yang sesuai.
3. Isi path, contoh `assets/profile/profile.jpg`.
4. Tambahkan objek baru ke array `projects`, `skills`, `achievements`, atau `experience` untuk menambah item.
5. Buka `index.html` di browser atau jalankan melalui VS Code Live Server.

## Deploy GitHub Pages
Buat repository baru, upload seluruh isi folder ini, lalu pilih Settings → Pages → Deploy from a branch → `main` → `/ (root)`.

Website ini tidak memakai database/backend. Jangan publikasikan data pribadi yang tidak ingin dilihat umum.
