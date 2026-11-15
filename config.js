// EDIT KONTEN PORTOFOLIO DI FILE INI. Masukkan file visual ke folder assets.
const PORTFOLIO = {
  site: {
    name: "ARFIAN",
    brand: "ARFIAN/OS",
    role: "ENTREPRENEUR · DEVELOPER · CREATOR",
    bio: "Membangun ide, merancang solusi, dan menghubungkan teknologi dengan peluang nyata.",
    location: "SURABAYA, INDONESIA",
    focus: "BUILD · LEARN · CREATE",
    photo: "assets/profile/profile.jpg",
    cv: "assets/documents/cv.pdf",
    email: "papikimung@gmail.com",
    contact: "Terbuka untuk peluang kerja, freelance, kolaborasi, dan percakapan yang bermakna.",
    socials: [
      { label: "PORTFOLIO", url: "https://arfian224.github.io/Portofolio/" },
      { label: "GITHUB", url: "https://github.com/arfian224" },
      { label: "INSTAGRAM", url: "https://instagram.com/arfian_91_" }
    ]
  },
  about: {
    summary: "Saya percaya ide yang baik harus berani diuji, dibangun, dan dikembangkan menjadi sesuatu yang bermanfaat.",
    description: "Mahasiswa S1 Kewirausahaan di UPN Veteran Jawa Timur dengan minat pada pengembangan bisnis, teknologi, dan kreativitas digital. Saya senang mengeksplorasi ide, membuat prototipe, membangun website, serta belajar melalui pengalaman nyata.",
    facts: [
      { label: "EDUCATION", value: "S1 Kewirausahaan · UPN Veteran Jawa Timur" },
      { label: "INTEREST", value: "Web Development · IoT · Entrepreneurship" },
      { label: "BASED IN", value: "Surabaya, Indonesia" },
      { label: "MINDSET", value: "Build · Learn · Improve" }
    ]
  },
  skills: [
    { name: "HTML", group: "WEB", level: "Advanced", value: 90 },
    { name: "CSS", group: "WEB", level: "Advanced", value: 88 },
    { name: "PHP", group: "CODE", level: "Intermediate", value: 65 },
    { name: "JavaScript", group: "CODE", level: "Beginner", value: 45 },
    { name: "Microsoft Excel", group: "TOOLS", level: "Advanced", value: 90 },
    { name: "Microsoft Word", group: "TOOLS", level: "Advanced", value: 90 },
    { name: "PowerPoint", group: "TOOLS", level: "Advanced", value: 88 },
    { name: "Arduino / IoT", group: "TECH", level: "Intermediate", value: 65 },
    { name: "Graphic Design", group: "CREATIVE", level: "Intermediate", value: 65 }
  ],
  projects: [
    { title: "FIANFOOD", category: "BUSINESS", year: "2026", image: "assets/projects/fianfood.jpg", summary: "Membangun dan mengembangkan brand camilan dengan fokus pada produk, pemasaran, dan penjualan.", description: "Fianfood merupakan bisnis makanan ringan yang saya rintis. Pengalaman ini mencakup pengembangan varian produk, pengemasan, perhitungan modal, strategi harga, pemasaran, dan eksplorasi kanal penjualan online.", tags: ["Entrepreneurship", "Branding", "Marketing"], link: "" },
    { title: "SMARTGLASS", category: "TECH", year: "ONGOING", image: "assets/projects/smartglass.jpg", summary: "Prototipe kacamata pintar yang menampilkan notifikasi, peta, dan musik dari ponsel.", description: "Proyek perangkat wearable berbasis teknologi yang dikembangkan sejak SMK. Tujuannya membantu pengguna, khususnya pengendara, mengakses informasi penting tanpa harus terus melihat ponsel.", tags: ["IoT", "Hardware", "Prototype"], link: "" },
    { title: "PARKLINK", category: "TECH", year: "2026", image: "assets/projects/parklink.jpg", summary: "Konsep sistem akses kampus dan kantor menggunakan NFC/QR dengan opsi akses sementara.", description: "Eksplorasi solusi akses berbasis NFC dan QR. Konsep mencakup kartu akses, akses sementara melalui ponsel, serta prototipe dan validasi kebutuhan pengguna.", tags: ["NFC", "Arduino", "Business Model"], link: "" },
    { title: "TAPDINE", category: "WEB", year: "2026", image: "assets/projects/tapdine.jpg", summary: "Landing page QR/NFC untuk menghubungkan pelanggan restoran ke layanan dan kanal digital.", description: "Sistem transit digital yang memudahkan pelanggan mengakses WhatsApp customer service, Google Reviews, dan media sosial restoran melalui satu kali scan QR atau NFC.", tags: ["HTML", "CSS", "JavaScript"], link: "" },
    { title: "SNACKVERSE", category: "WEB", year: "2026", image: "assets/projects/snackverse.jpg", summary: "Website katalog dan pemesanan camilan dengan integrasi Google Sheets dan Apps Script.", description: "Proyek website sederhana untuk menampilkan produk, lokasi, keranjang, dan alur pembuatan bukti transaksi PDF menggunakan Google Apps Script dan Google Sheets.", tags: ["HTML", "JavaScript", "Google Apps Script"], link: "https://arfian224.github.io/Snack2/" },
    { title: "SMARTKOS AI", category: "TECH", year: "ONGOING", image: "assets/projects/smartkos.jpg", summary: "Eksplorasi asisten AI interaktif untuk ruang kost dengan tampilan kepala robot.", description: "Eksperimen membuat companion AI untuk ruang kost dengan chatbot, ekspresi mekanis sederhana, dan integrasi servo sebagai prototipe interaksi fisik.", tags: ["ESP32", "Servo", "AI"], link: "" }
  ],
  achievements: [
    { title: "Juara 1 Olimpiade Fisika", issuer: "Tambahkan nama penyelenggara", year: "Tambahkan tahun", image: "assets/achievements/olimpiade-fisika.jpg", description: "Tambahkan keterangan dan detail prestasi." },
    { title: "Juara 2 Olimpiade Kimia", issuer: "Tambahkan nama penyelenggara", year: "Tambahkan tahun", image: "assets/achievements/olimpiade-kimia.jpg", description: "Tambahkan keterangan dan detail prestasi." },
    { title: "Juara 2 Olimpiade IPS", issuer: "Tambahkan nama penyelenggara", year: "Tambahkan tahun", image: "assets/achievements/olimpiade-ips.jpg", description: "Tambahkan keterangan dan detail prestasi." },
    { title: "Sertifikat Kompetensi LSP", issuer: "Lembaga Sertifikasi Profesi", year: "Tambahkan tahun", image: "assets/achievements/lsp.jpg", description: "Tambahkan skema sertifikasi dan nomor/masa berlaku jika memang ingin ditampilkan." }
  ],
  experience: [
    { type: "EDUCATION", title: "S1 Kewirausahaan", organization: "UPN Veteran Jawa Timur", period: "2026 — PRESENT", description: "Mempelajari kewirausahaan, pengembangan ide bisnis, validasi pasar, dan pengelolaan usaha." },
    { type: "BUSINESS", title: "Founder — Fianfood", organization: "Food & Snack Business", period: "ONGOING", description: "Mengelola pengembangan produk, pengemasan, harga, pemasaran, dan strategi penjualan." },
    { type: "INTERNSHIP", title: "Intern Teknisi", organization: "PT Icon Plus", period: "Tambahkan periode", description: "Mendukung pekerjaan instalasi dan input data dengan memperhatikan ketelitian serta efektivitas kerja." },
    { type: "PROJECT", title: "Freelance Web Development", organization: "UMKM / Personal Projects", period: "ONGOING", description: "Membuat dan mengembangkan website sederhana sesuai kebutuhan proyek dan eksplorasi mandiri." }
  ]
};