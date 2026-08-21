# ASLI SEHAT CIBAREGBEG

Portal edukasi mandiri mengenai alur pelayanan BPJS Kesehatan dan Puskesmas untuk warga Desa Cibaregbeg, Kec. Cibeber, Kab. Cianjur. Proyek ini dikembangkan oleh Tim Mahasiswa KKN S1 Administrasi Rumah Sakit (ARS) Universitas Indonesia Maju (UIMA) Periode 2026.

## Fitur & Konten
- **Kategori Kepesertaan:** Penjelasan status kepesertaan BPJS (PBI, Mandiri/PBPU, dan PPU).
- **Alur Pelayanan Puskesmas:** Panduan tahap pendaftaran, pemeriksaan medis, farmasi, hingga prosedur rujukan berjenjang ke RS.
- **Layanan Tercover:** Informasi poli, tindakan medis, KIA/persalinan, lab sederhana, dan program Prolanis di Puskesmas.
- **Panduan Mobile JKN:** Registrasi akun, KIS digital, antrean online faskes, dan skrining kesehatan tahunan.
- **Solusi Administrasi:** Informasi aktivasi kartu nonaktif, program cicilan REHAB, dan pemindahan faskes tingkat pertama (FKTP).
- **Kontak Posko:** Narahubung tim KKN dan jadwal piket posko pendampingan warga di Desa Cibaregbeg.

## Tech Stack
- **Frontend:** React 18, Vite
- **Styling:** Tailwind CSS
- **Icons & Motion:** Lucide React, Framer Motion

## Menjalankan Proyek

### 1. Instalasi
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```

### 3. Build Produksi
```bash
npm run build
```

## Struktur Proyek
```text
web_kkn/
├── public/                # Aset gambar, logo lembaga, dan foto tim
├── src/
│   ├── components/        # Komponen UI dan modular sections
│   ├── data/              # Data konten edukasi (bpjsData.js)
│   ├── hooks/             # Custom hooks
│   ├── utils/             # Helper utilities
│   ├── App.jsx            # Layout utama halaman
│   ├── index.css          # Styling dasar & Tailwind
│   └── main.jsx           # React root entry point
├── index.html             # Meta tag SEO & HTML template
├── tailwind.config.js     # Konfigurasi tema & warna Tailwind
└── vite.config.js         # Konfigurasi bundler Vite
```
