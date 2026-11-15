# ARFIAN — Digital Identity System

Website portofolio futuristik dengan:
- ID Card foto profil yang menggantung dan bergoyang; klik untuk membalik kartu.
- Kartu penghargaan dengan efek hologram; klik untuk melihat dokumen.
- Kartu proyek interaktif dengan efek tilt 3D dan filter kategori.
- Skill matrix animatif, timeline pengalaman, navigasi responsif, dan tautan CV.

## Cara mengedit konten
Buka `config.js`. Hampir semua teks dan data website berada di file tersebut:
- `site`: nama, peran, lokasi, foto, CV, email, dan media sosial.
- `about`: ringkasan dan informasi diri.
- `skills`: kemampuan dan tingkat penguasaan.
- `projects`: daftar proyek, kategori, ringkasan, gambar, teknologi, dan tautan.
- `achievements`: sertifikat dan penghargaan.
- `experience`: pendidikan, pengalaman, dan aktivitas.

## Tempat menaruh aset
1. Foto profil: `assets/profile/profile.jpg`
2. Gambar proyek: simpan di `assets/projects/`, lalu samakan nama/path di `config.js`.
3. Sertifikat: simpan di `assets/achievements/`, lalu samakan nama/path di `config.js`.
4. CV PDF: `assets/documents/cv.pdf`

Nama file contoh yang sudah disiapkan pada `config.js`:
- `fianfood.jpg`, `smartglass.jpg`, `parklink.jpg`, `tapdine.jpg`, `snackverse.jpg`, `smartkos.jpg`
- `olimpiade-fisika.jpg`, `olimpiade-kimia.jpg`, `olimpiade-ips.jpg`, `lsp.jpg`

Jika nama file Anda berbeda, cukup ubah nilai `image` di `config.js`. Sertifikat boleh berupa JPG/PNG. Untuk PDF, ubah mekanisme tampilan di `app.js` atau siapkan versi gambar pratinjau.

## Cara menjalankan
Website ini statis, tidak membutuhkan database atau backend.
- Ekstrak ZIP.
- Buka `index.html` di browser untuk preview.
- Untuk publikasi, upload seluruh isi folder ke repository GitHub dan aktifkan GitHub Pages dari Settings → Pages → Deploy from a branch.

## Catatan penting
- Periksa kembali nama, tahun, penyelenggara, deskripsi, tautan, dan tingkat skill sebelum dipublikasikan.
- Data prestasi yang belum lengkap masih berupa placeholder dan wajib dikoreksi.
- Jangan unggah data pribadi sensitif pada kartu identitas publik.
- Efek animasi mengikuti pengaturan reduced motion perangkat pengunjung.
