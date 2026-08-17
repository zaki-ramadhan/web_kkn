# Posko Sehat BPJS - Web Edukasi Layanan Kesehatan Desa

Sistem informasi dan portal edukasi mandiri mengenai alur pelayanan BPJS Kesehatan dan Puskesmas, dikembangkan oleh Tim Mahasiswa KKN S1 Administrasi Rumah Sakit (ARS) Universitas Indonesia Maju (UIMA) - Desa Cibaregbeg, Kec. Cibeber, Kab. Cianjur Periode 2026. Proyek ini bertujuan membantu warga desa memahami hak kepesertaan, alur berobat berjenjang, tata cara pengaktifan kartu, hingga pemanfaatan antrean online secara mandiri.

---

## 📌 Cakupan Materi & Modul Edukasi

Landing page ini menyajikan 6 pilar informasi utama yang disesuaikan dengan kebutuhan lapangan:

1. **Klasifikasi Kepesertaan BPJS**  
   Penjelasan terstruktur mengenai kategori PBI (Bantuan Pemerintah), Non-PBI/Mandiri (PBPU), dan Pekerja Penerima Upah (PPU) beserta rincian tarif dan hak kelas perawatan.
2. **Alur Pelayanan FKTP (Puskesmas)**  
   Panduan tahapan berobat mulai dari pendaftaran loket/antrean, pemeriksaan medis dokter, instalasi farmasi obat, hingga prosedur penerbitan surat rujukan berjenjang ke rumah sakit.
3. **Cakupan Layanan Tercover**  
   Katalog interaktif jenis poli dan tindakan medis di Puskesmas yang 100% ditanggung BPJS (Poli Umum, KIA/KB & Persalinan, Poli Gigi, Laboratorium Sederhana, dan Program Pengelolaan Penyakit Kronis/Prolanis).
4. **Panduan Fitur Digital JKN**  
   Panduan langkah demi langkah pendaftaran akun, pengambilan nomor antrean faskes dari rumah, barcode digital KIS, dan pengisian skrining riwayat kesehatan tahunan.
5. **Solusi Administrasi & Re-Aktivasi**  
   Mekanisme penanganan kartu nonaktif karena tunggakan via Program REHAB (cicilan tagihan), solusi data NIK PBI, serta ketentuan pemindahan FKTP domisili.
6. **Narahubung & Posko Bantuan Mahasiswa**  
   Akses komunikasi langsung ke koordinator desa, divisi kesehatan mahasiswa, dan piket posko KKN untuk pendampingan warga yang membutuhkan bantuan teknis.

---

## 🚀 Teknologi & Arsitektur Sistem

Landing page ini dibangun dengan standar performa dan aksesibilitas tinggi:
- **Framework UI:** React 18 + Vite (SPA)
- **Styling Engine:** Tailwind CSS v3 dengan custom extended design tokens
- **Tipografi:** Plus Jakarta Sans & Space Grotesk
- **Ikonografi:** Lucide React
- **Optimasi Aset:** Lazy load modul & avatar, zero layout shift (CLS 0.0), 100% responsive mobile-first

---

## 📁 Struktur Direktori

```text
web_kkn/
├── src/
│   ├── components/
│   │   ├── ui/                    # Komponen atomik / primitif reusable
│   │   │   ├── AvatarStack.jsx    # Bukti pendampingan warga
│   │   │   ├── Badge.jsx          # Tag/chip status dengan varian warna
│   │   │   ├── CalloutBox.jsx     # Kotak informasi kebijakan & rujukan
│   │   │   ├── CheckList.jsx      # Daftar checklist fitur & indikasi medis
│   │   │   ├── Heading.jsx        # Tipografi heading Space Grotesk
│   │   │   ├── MiniCard.jsx       # Kartu ringkas informasi (REHAB, tips)
│   │   │   ├── PillCTAButton.jsx  # Tombol aksi pill dengan hover dinamis
│   │   │   ├── SectionHeader.jsx  # Header terstandarisasi tiap section
│   │   │   ├── StatCard.jsx       # Kartu ringkasan metrik / capaian
│   │   │   └── TabGroup.jsx       # Filter navigasi kategori layanan
│   │   ├── AccordionItem.jsx      # Komponen baris FAQ interaktif
│   │   ├── BentoServiceCard.jsx   # Kartu grid layanan bento
│   │   ├── CategoryCard.jsx       # Kartu pilihan kepesertaan BPJS
│   │   ├── ContactCard.jsx        # Kartu kontak narahubung mahasiswa KKN
│   │   ├── Footer.jsx             # Informasi posko & navigasi bawah
│   │   ├── Navbar.jsx             # Top ribbon darurat & header responsif
│   │   └── StepCard.jsx           # Kartu alur tahapan pelayanan (light/dark)
│   ├── data/
│   │   └── bpjsData.js            # Sentralisasi data teks, FAQ, & kontak
│   ├── App.jsx                    # Komponen utama landing page
│   ├── index.css                  # Konfigurasi Tailwind & base styling
│   └── main.jsx                   # Entry point aplikasi React
├── index.html                     # HTML Template & Google Fonts
├── tailwind.config.js             # Skema warna, font, dan shadow kustom
├── vite.config.js                 # Konfigurasi bundler Vite
└── package.json                   # Dependensi proyek
```

---

## 🚀 Panduan Menjalankan Proyek

### 1. Prasyarat
Pastikan Node.js (versi 18 ke atas) dan npm telah terpasang di perangkat Anda.

### 2. Instalasi Dependensi
Jalankan perintah berikut di direktori proyek:
```bash
npm install
```

### 3. Menjalankan Server Pengembangan Lokal
Untuk menjalankan server lokal dengan fitur Hot Module Replacement (HMR):
```bash
npm run dev
```
Buka peramban di alamat `http://localhost:5173`.

### 4. Membangun Berkas Produksi
Untuk mengompilasi dan mengoptimalkan berkas untuk keperluan rilis/hosting:
```bash
npm run build
```
Hasil kompilasi siap pakai akan berada di dalam folder `dist/`.

---

## 👥 Tim Pelaksana

**Program Kuliah Kerja Nyata - KKN ARS Cibaregbeg 2026**  
- **Wilayah Penugasan:** Desa Cibaregbeg, Posko Induk KKN ARS  
- **Fokus Kegiatan:** Edukasi Literasi Jaminan Kesehatan & Digitalisasi Pelayanan Faskes Desa  
