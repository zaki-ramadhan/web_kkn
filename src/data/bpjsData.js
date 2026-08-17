import {
  Smartphone,
  QrCode,
  Stethoscope,
  Pill,
  FileText
} from 'lucide-react';

// Hero Stats (Clean Typographic Metrics)
export const heroStats = [
  {
    id: 'hs1',
    value: '100%',
    label: 'Tercover BPJS',
    detail: 'Pelayanan & obat generik di Puskesmas',
  },
  {
    id: 'hs2',
    value: 'Posko',
    label: 'Siaga Mahasiswa',
    detail: 'Konsultasi alur & panduan berkas',
  },
  {
    id: 'hs3',
    value: '5 Menit',
    label: 'Antrean Online JKN',
    detail: 'Ambil nomor dari rumah tanpa antre',
  },
  {
    id: 'hs4',
    value: '0 Rupiah',
    label: 'Persalinan Normal',
    detail: 'Gratis di Puskesmas PONED terdaftar',
  },
];

// 1. Jenis-Jenis Kepesertaan BPJS (Item #3)
export const bpjsCategories = [
  {
    id: 'pbi',
    badge: 'Bantuan Pemerintah',
    name: 'BPJS PBI (Penerima Bantuan Iuran)',
    price: 'Gratis 100%',
    priceSub: 'Bantuan Iuran Pemerintah',
    target: 'Masyarakat pra-sejahtera, warga kurang mampu, dan penyandang disabilitas terdaftar bantuan sosial.',
    features: [
      'Iuran bulanan dibayarkan penuh oleh Pemerintah',
      'Hak fasilitas rawat inap Kelas 3',
      'Pelayanan kesehatan paripurna di Puskesmas & RS rujukan',
      'Informasi pendaftaran dan verifikasi data di balai desa setempat',
    ],
    highlighted: false,
    theme: 'white',
    ctaText: 'Pelajari Ketentuan PBI',
    ctaLink: '#solusi-adm',
  },
  {
    id: 'mandiri',
    badge: 'Mandiri / PBPU',
    name: 'BPJS Non-PBI / Mandiri (PBPU)',
    price: 'Rp 35.000 - Rp 150.000',
    priceSub: 'Per Orang / Bulan (Sesuai Kelas)',
    target: 'Pekerja mandiri, petani, pedagang, wiraswasta, dan masyarakat umum bukan penerima upah tetap.',
    features: [
      'Pilihan Kelas: Kelas 1 (150rb), Kelas 2 (100rb), Kelas 3 (35rb subsidi)',
      'Akses bebas memilih FKTP (Puskesmas / Klinik mitra terdekat)',
      'Pendaftaran mandiri secara praktis via layanan digital JKN',
      'Pembayaran praktis via Autodebet bank & e-wallet',
    ],
    highlighted: true,
    theme: 'forest',
    ctaText: 'Tanya Tim KKN via WA',
    ctaLink: 'https://wa.me/6282145678901?text=Halo%20Tim%20Mahasiswa%20KKN%2C%20saya%20ingin%20tanya%20panduan%20BPJS%20Mandiri',
  },
  {
    id: 'ppu',
    badge: 'Pekerja Formal (PPU)',
    name: 'BPJS PPU (Pekerja Penerima Upah)',
    price: '5% dari Gaji',
    priceSub: 'Tanggungan Pemberi Kerja & Karyawan',
    target: 'Karyawan swasta, ASN, pegawai BUMN/BUMD, dan pekerja formal berpenghasilan tetap.',
    features: [
      'Iuran dipotong otomatis dari slip gaji bulanan',
      'Menanggung otomatis hingga 5 anggota keluarga (suami/istri + 3 anak)',
      'Hak kelas rawat inap ditentukan berdasarkan jenjang gaji pokok',
      'Pendaftaran dikoordinasikan langsung oleh instansi/perusahaan tempat bekerja',
    ],
    highlighted: false,
    theme: 'white',
    ctaText: 'Info Ketentuan PPU',
    ctaLink: '#solusi-adm',
  },
];

// 2. Alur Pendaftaran Pasien BPJS di Puskesmas (Item #1)
export const registrationSteps = [
  {
    step: '01',
    icon: Smartphone,
    title: 'Ambil Antrean Online / Offline',
    desc: 'Ambil nomor antrean secara online sebelum datang atau langsung di mesin antrean Puskesmas.',
    highlight: 'Hemat waktu antrean 2-3 jam',
  },
  {
    step: '02',
    icon: QrCode,
    title: 'Verifikasi di Loket Pendaftaran',
    desc: 'Tunjukkan KTP atau barcode Kartu Indonesia Sehat (KIS) digital. Tidak perlu fotokopi berkas tebal.',
    highlight: 'Cukup tunjukkan NIK / KTP',
  },
  {
    step: '03',
    icon: Stethoscope,
    title: 'Pemeriksaan Medis & Dokter',
    desc: 'Pemeriksaan tanda vital oleh perawat, dilanjutkan konsultasi & diagnosa oleh dokter umum/gigi.',
    highlight: 'Sesuai poli tujuan faskes',
  },
  {
    step: '04',
    icon: Pill,
    title: 'Pengambilan Obat di Farmasi',
    desc: 'Ambil obat sesuai resep dokter di instalasi farmasi Puskesmas. Seluruh obat formularium 100% gratis.',
    highlight: 'Obat generik 100% gratis',
  },
  {
    step: '05',
    icon: FileText,
    title: 'Rujukan Berjenjang (Jika Perlu)',
    desc: 'Jika memerlukan tindakan spesialis, dokter menerbitkan surat rujukan online otomatis ke Rumah Sakit rekanan.',
    highlight: 'Sistem rujukan terintegrasi',
  },
];

// Service Category Filter Tabs
export const serviceFilterTabs = [
  { id: 'all', label: 'Semua Layanan' },
  { id: 'umum', label: 'Pengobatan Umum' },
  { id: 'kia', label: 'Ibu & Anak (KIA/KB)' },
  { id: 'gigi', label: 'Poli Gigi & Mulut' },
  { id: 'lab', label: 'Laboratorium Dasar' },
  { id: 'prolanis', label: 'Prolanis (Penyakit Kronis)' },
];

// 3. Jenis Pelayanan di Puskesmas yang Tercover BPJS (Item #5)
// Optimized WebP URLs with compressed dimensions for fast loading and responsive cover
export const puskesmasServices = [
  {
    id: 'srv-1',
    category: 'umum',
    span: 'col-span-12 lg:col-span-8',
    title: 'Rawat Jalan Tingkat Pertama (RJTP) & Pengobatan Umum',
    tag: 'Pelayanan Utama',
    desc: 'Konsultasi dokter umum, penanganan penyakit menular & tidak menular, pemeriksaan tanda vital, penjahitan luka, dan terapi farmasi standar.',
    stat: '100% Tercover Tanpa Iur Biaya',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=960&h=640&q=75&fm=webp',
  },
  {
    id: 'srv-2',
    category: 'kia',
    span: 'col-span-12 lg:col-span-4',
    title: 'Kesehatan Ibu & Anak (KIA), Persalinan & KB',
    tag: 'Prioritas Desa',
    desc: 'Pemeriksaan kehamilan rutin (ANC terpadu + USG dasar), imunisasi lengkap bayi, persalinan normal 24 jam, dan pemasangan alat KB (IUD, implan, suntik).',
    stat: 'Termasuk Skrining Stunting',
    image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=600&h=450&q=75&fm=webp',
  },
  {
    id: 'srv-3',
    category: 'gigi',
    span: 'col-span-12 md:col-span-6 lg:col-span-4',
    title: 'Pelayanan Gigi & Mulut Lengkap',
    tag: 'Poli Gigi',
    desc: 'Pembersihan karang gigi (scaling 1x/tahun sesuai indikasi medis), penambalan gigi komposit, pencabutan gigi sulung/tetap, dan pengobatan infeksi pulpa.',
    stat: 'Dilayani Dokter Gigi',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&h=450&q=75&fm=webp',
  },
  {
    id: 'srv-4',
    category: 'lab',
    span: 'col-span-12 md:col-span-6 lg:col-span-4',
    title: 'Laboratorium Diagnostik Sederhana',
    tag: 'Tes Penunjang',
    desc: 'Pemeriksaan darah lengkap, tes urin rutin, glukosa darah puasa/sewaktu, tes kolesterol, asam urat, tes dahak TBC, dan rapid diagnostic test.',
    stat: 'Hasil Cepat Hari yang Sama',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&h=450&q=75&fm=webp',
  },
  {
    id: 'srv-5',
    category: 'prolanis',
    span: 'col-span-12 lg:col-span-4',
    title: 'Prolanis (Program Pengelolaan Penyakit Kronis)',
    tag: 'Lansia & Kronis',
    desc: 'Pemantauan khusus penderita Diabetes Melitus & Hipertensi, senam lansia berkala, edukasi gizi klinik, dan paket obat rutin bulanan.',
    stat: 'Pencegahan Komplikasi Dini',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&h=450&q=75&fm=webp',
  },
];

// 4. Panduan Fitur Layanan Digital JKN (Item #6)
export const digitalJknFlow = [
  {
    step: '1',
    title: 'Aktivasi Akses NIK Digital',
    desc: 'Verifikasi NIK KTP dan nomor kartu BPJS aktif untuk mengakses alur informasi kesehatan mandiri.',
    tip: 'Data terhubung langsung dengan basis data kependudukan resmi.',
  },
  {
    step: '2',
    title: 'Pendaftaran Antrean Faskes Online',
    desc: 'Pilih menu Pendaftaran Pelayanan (Antrean). Tentukan poli tujuan dan dokter, lalu dapatkan nomor antrean digital beserta estimasi waktu pelayanan.',
    tip: 'Pengambilan nomor antrean dapat dilakukan mulai H-1 sebelum waktu kedatangan.',
  },
  {
    step: '3',
    title: 'Kartu Peserta KIS Digital',
    desc: 'Buka menu Kartu Peserta untuk menampilkan barcode KIS digital. Cukup tunjukkan barcode saat berobat tanpa perlu membawa kartu fisik.',
    tip: 'Kartu digital memiliki kekuatan hukum yang sah di seluruh faskes mitra BPJS.',
  },
  {
    step: '4',
    title: 'Skrining Riwayat Kesehatan Mandiri',
    desc: 'Isi kuesioner skrining kesehatan mandiri untuk mendeteksi potensi risiko penyakit kardiovaskular, ginjal, dan diabetes secara berkala.',
    tip: 'Dianjurkan diisi minimal 1 kali setiap tahun.',
  },
  {
    step: '5',
    title: 'Perubahan Data & Pindah FKTP Mandiri',
    desc: 'Ubah FKTP (Puskesmas/Klinik) terdaftar atau perbarui data nomor kontak dan alamat melalui menu Perubahan Data Peserta.',
    tip: 'Perubahan FKTP aktif per tanggal 1 bulan berikutnya.',
  },
];

// 5. Cara Mengaktifkan BPJS Mati & Pindah FKTP (Items #2 & #4)
export const administrativeFaqs = [
  {
    id: 'adm-1',
    category: 'Aktivasi BPJS Mati',
    question: 'Bagaimana cara mengaktifkan kartu BPJS Mandiri yang nonaktif akibat tunggakan?',
    answer: {
      intro: 'Bagi peserta BPJS Mandiri (PBPU) yang status kepesertaannya nonaktif akibat keterlambatan iuran bulanan, berikut langkah re-aktivasi yang dapat dilakukan:',
      list: [
        {
          title: 'Cek Rincian Tunggakan',
          text: 'Periksa total bulan tunggakan dan nominal iuran melalui kanal pembayaran resmi atau layanan informasi BPJS.',
        },
        {
          title: 'Manfaatkan Program REHAB',
          text: 'Jika tunggakan mencapai 4 hingga 24 bulan dan memberatkan, manfaatkan Program REHAB (Rencana Pembayaran Bertahap) untuk mencicil tagihan hingga 12 tahapan.',
        },
        {
          title: 'Bayar Iuran / Cicilan Pertama',
          text: 'Lakukan pembayaran tagihan penuh atau angsuran pertama via ATM, autodebet bank, atau minimarket agar kartu aktif kembali dalam 1x24 jam.',
        },
      ],
    },
  },
  {
    id: 'adm-2',
    category: 'Aktivasi BPJS Mati',
    question: 'Kartu BPJS PBI (Bantuan Pemerintah) dinonaktifkan, bagaimana solusinya?',
    answer: {
      intro: 'Peserta PBI yang dinonaktifkan umumnya disebabkan data NIK kependudukan belum padan di Dukcapil atau terhapus dari pemutakhiran bansos DTKS. Solusi yang dapat ditempuh warga:',
      list: [
        {
          title: 'Verifikasi NIK di Balai Desa',
          text: 'Datang ke kantor desa/kelurahan setempat membawa e-KTP dan KK asli untuk memastikan status NIK aktif dan padan secara kependudukan.',
        },
        {
          title: 'Pengusulan Ulang DTKS',
          text: 'Mintalah pendampingan petugas bansos desa untuk mengusulkan kembali data keluarga Anda ke dalam Data Terpadu Kesejahteraan Sosial (DTKS).',
        },
        {
          title: 'Opsi Pindah ke Segmen Mandiri',
          text: 'Jika membutuhkan pelayanan medis mendesak dan mampu secara ekonomi, Anda dapat beralih sementara ke BPJS Mandiri Kelas 3 (Rp 35.000/bulan).',
        },
      ],
    },
  },
  {
    id: 'adm-3',
    category: 'Aktivasi BPJS Mati',
    question: 'Saya baru berhenti bekerja dari kantor, bagaimana cara mengaktifkan BPJS kembali?',
    answer: {
      intro: 'Setelah dinonaktifkan oleh instansi/perusahaan lama pasca-resign atau PHK, jaminan kesehatan Anda dapat dialihkan ke segmen Mandiri tanpa denda:',
      list: [
        {
          title: 'Masa Perlindungan Pasca-PHK',
          text: 'Peserta masih berhak mendapatkan manfaat perlindungan dasar hingga 6 bulan pasca-PHK tanpa iuran untuk kondisi medis tertentu.',
        },
        {
          title: 'Pengalihan ke Segmen Mandiri',
          text: 'Ubah segmen kepesertaan dari PPU (Pekerja Formal) menjadi PBPU/Mandiri dan pilih kelas rawat inap yang dikehendaki (Kelas 1, 2, atau 3).',
        },
        {
          title: 'Pembayaran Iuran Pertama',
          text: 'Lakukan pembayaran iuran pertama dalam kurun waktu 30 hari untuk mengaktifkan kembali kartu secara langsung tanpa masa tunggu.',
        },
      ],
    },
  },
  {
    id: 'adm-4',
    category: 'Pindah Domisili & FKTP',
    question: 'Bagaimana cara pindah FKTP (Puskesmas/Klinik) ke domisili tempat tinggal baru?',
    answer: {
      intro: 'Untuk mempermudah rujukan dan memastikan pelayanan kesehatan tercover 100% di tempat tinggal saat ini, ikuti alur mutasi FKTP berikut:',
      list: [
        {
          title: 'Syarat Masa Terdaftar',
          text: 'Peserta telah terdaftar minimal 3 bulan di FKTP lama (syarat ini dikecualikan jika Anda memiliki surat keterangan pindah domisili KK resmi).',
        },
        {
          title: 'Pilih Puskesmas Domisili Baru',
          text: 'Tentukan Puskesmas Cibaregbeg sebagai fasilitas kesehatan tingkat pertama yang baru untuk seluruh anggota keluarga.',
        },
        {
          title: 'Masa Berlaku Aktif',
          text: 'Perubahan faskes baru akan mulai berlaku efektif per tanggal 1 pada bulan berikutnya.',
        },
      ],
    },
  },
  {
    id: 'adm-5',
    category: 'Pindah Domisili & FKTP',
    question: 'Apakah bisa berobat di Puskesmas lain jika sedang di luar kota tanpa pindah FKTP?',
    answer: {
      intro: 'Peserta BPJS tetap memiliki hak mendapatkan pelayanan kesehatan dasar meskipun sedang berada di luar wilayah faskes terdaftarnya:',
      list: [
        {
          title: 'Kuota Kunjungan Luar Faskes',
          text: 'Berhak mendapatkan pelayanan di luar FKTP terdaftar maksimal 3 kali kunjungan dalam 1 bulan pada faskes yang sama.',
        },
        {
          title: 'Kondisi Gawat Darurat (UGD)',
          text: 'Jika mengalami kondisi darurat medis yang mengancam nyawa, Anda dapat langsung mendatangi IGD rumah sakit mana saja tanpa rujukan.',
        },
      ],
    },
  },
];

// 5. Kontak Narahubung Tim Mahasiswa KKN (Struktur Resmi UIMA)
export const emergencyContacts = [
  {
    id: 'c1',
    name: 'Safira Nur Kharisma',
    number: '0821-****-01',
    type: 'Ketua KKN UIMA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80&fm=webp',
    desc: 'Narahubung utama mahasiswa KKN untuk koordinasi posko induk, perizinan desa, dan informasi umum kegiatan pengabdian.',
    actionText: 'Chat Ketua KKN',
    link: 'https://wa.me/6282145678901?text=Halo%20Ketua%20KKN%20Safira%2C%20saya%20warga%20butuh%20informasi',
    urgent: true,
  },
  {
    id: 'c2',
    name: 'Zahra Suci Melinda',
    number: '0812-****-90',
    type: 'Koor. Divisi Humas',
    avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=160&h=160&q=80&fm=webp',
    desc: 'Konsultasi alur berobat Puskesmas, advokasi warga terkait administrasi BPJS Kesehatan, dan penyuluhan kesehatan warga.',
    actionText: 'Chat Divisi Humas',
    link: 'https://wa.me/6281234567890?text=Halo%20Kak%20Zahra%20Divisi%20Humas%20KKN%2C%20saya%20ingin%20tanya%20prosedur%20faskes',
    urgent: false,
  },
  {
    id: 'c3',
    name: 'Posko KKN ARS Cibaregbeg',
    number: '0857-****-44',
    type: 'Kp. Nyalindung / Talaga',
    avatar: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=160&h=160&q=80&fm=webp',
    desc: 'Piket posko mahasiswa di Kp. Nyalindung / Talaga untuk konsultasi langsung tatap muka, panduan aplikasi digital, dan layanan informasi.',
    actionText: 'Hubungi Posko KKN',
    link: 'https://wa.me/6285711223344?text=Halo%20Piket%20Posko%20KKN%2C%20saya%20ingin%20konsultasi%20di%20posko',
    urgent: true,
  },
  {
    id: 'c4',
    name: 'Divisi Acara & Pelayanan',
    number: '0813-****-66',
    type: 'Divisi Acara KKN',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=160&h=160&q=80&fm=webp',
    desc: 'Pendampingan langsung kegiatan sosialisasi kesehatan, posyandu desa, dan edukasi alur rujukan berjenjang ke faskes.',
    actionText: 'Chat Divisi Acara',
    link: 'https://wa.me/6281399887766?text=Halo%20Divisi%20Acara%20KKN%2C%20saya%20ingin%20tanya%20jadwal%20kegiatan',
    urgent: false,
  },
];

// Optimized Avatars in WebP
export const avatarList = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64&q=80&fm=webp',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64&q=80&fm=webp',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=64&h=64&q=80&fm=webp',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=64&h=64&q=80&fm=webp',
];

// 6. Kriteria Klinis Gawat Darurat Bebas Rujukan (Permenkes RI No. 28/2014)
export const emergencyCriteria = [
  {
    code: '01',
    title: 'Gangguan Pernapasan Akut & Henti Jantung',
    desc: 'Asma berat mendadak, sesak napas akut, henti napas, atau serangan jantung.',
  },
  {
    code: '02',
    title: 'Penurunan Kesadaran & Cedera Fisik Berat',
    desc: 'Pingsan tidak sadarkan diri, kecelakaan lalu lintas, trauma kepala, patah tulang terbuka.',
  },
  {
    code: '03',
    title: 'Pendarahan Masif & Kejang Demam Balita',
    desc: 'Pendarahan hebat yang tidak terkendali, luka bakar luas, keracunan akut, atau kejang demam anak.',
  },
];

// 7. Fitur & Pemanfaatan Layanan Digital JKN (Item #6)
export const digitalFeatures = [
  {
    number: '01',
    title: 'Booking Antrean Puskesmas dari Rumah',
    desc: 'Warga tidak perlu lagi datang subuh jam 05.00 pagi untuk mengambil nomor antrean fisik. Pilih poli tujuan dan dokter mulai H-1 melalui ponsel, lalu datang cukup 15 menit sebelum estimasi jam pelayanan.',
    highlight: 'Hemat waktu antrean 2 hingga 3 jam di loket fisik Puskesmas.',
  },
  {
    number: '02',
    title: 'Kartu Indonesia Sehat (KIS) Digital',
    desc: 'Cukup perlihatkan barcode KIS di layar ponsel saat verifikasi loket pendaftaran. Kartu digital ini berkekuatan hukum sah di seluruh Puskesmas dan Rumah Sakit mitra BPJS tanpa perlu membawa fotokopi kartu fisik.',
    highlight: 'Solusi praktis saat kartu fisik hilang, rusak, atau tertinggal di rumah.',
  },
  {
    number: '03',
    title: 'Skrining Riwayat Kesehatan Berkala',
    desc: 'Kuesioner evaluasi mandiri singkat untuk mendeteksi dini risiko penyakit tidak menular seperti hipertensi (darah tinggi), diabetes melitus, dan jantung koroner secara berkala minimal 1 kali per tahun.',
    highlight: 'Hasil skrining langsung terhubung ke rekam medis Puskesmas sebagai acuan dokter.',
  },
  {
    number: '04',
    title: 'Perubahan Faskes Domisili Mandiri',
    desc: 'Bagi warga pendatang atau warga yang faskes pertamanya masih terdaftar di luar kota, Anda dapat memindahkan faskes tingkat pertama ke Puskesmas Cibaregbeg secara mandiri tanpa perlu surat pengantar.',
    highlight: 'Syarat: terdaftar minimal 3 bulan di faskes lama. Aktif per tanggal 1 bulan berikutnya.',
  },
];

// 8. Modul Panduan Navigasi Navbar
export const navEducationalModules = [
  {
    href: '#jenis-bpjs',
    title: 'Jenis Kepesertaan BPJS',
    desc: 'Kategori PBI, Mandiri (PBPU), dan PPU beserta iurannya',
  },
  {
    href: '#layanan-puskesmas',
    title: 'Layanan Tercover Puskesmas',
    desc: 'Cakupan poli umum, KIA/KB, gigi, dan laboratorium',
  },
  {
    href: '#layanan-digital',
    title: 'Fitur Layanan Digital JKN',
    desc: 'Antrean online mandiri, kartu digital KIS, dan skrining',
  },
  {
    href: '#solusi-adm',
    title: 'Aktivasi & Balik Domisili',
    desc: 'Solusi kartu nonaktif, cicilan REHAB, dan pindah faskes',
  },
];

// 9. Data Lengkap 20 Mahasiswa Tim Pengabdian KKN 2026 (Struktur Resmi UIMA)
// 1. Ketua / Wakil: 2 orang | 2. Sekretaris: 2 orang | 3. Bendahara: 2 orang
// 4. Divisi Acara: 4 orang  | 5. Divisi Humas: 3 orang | 6. Divisi PDD: 4 orang | 7. Divisi Perkap: 3 orang
export const kknTeamMembers = [
  // 1. Ketua & Wakil KKN (2 Orang)
  {
    id: 'tm-1',
    name: 'Safira Nur Kharisma',
    nim: '14230000007',
    role: 'Ketua KKN',
    major: 'S1 Administrasi Rumah Sakit',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80&fm=webp',
    isContact: true,
  },
  {
    id: 'tm-2',
    name: 'Muhammad Fikri',
    nim: '14230500003',
    role: 'Wakil Ketua KKN',
    major: 'S1 Administrasi Rumah Sakit',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&h=300&q=80&fm=webp',
    isContact: true,
  },

  // 2. Sekretaris KKN (2 Orang)
  {
    id: 'tm-3',
    name: 'Revalina Yoanita',
    nim: '14230000004',
    role: 'Sekretaris I KKN',
    major: 'S1 Administrasi Rumah Sakit',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300&q=80&fm=webp',
    isContact: false,
  },
  {
    id: 'tm-4',
    name: 'Melisa Safa Maura',
    nim: '14230000004',
    role: 'Sekretaris II KKN',
    major: 'S1 Administrasi Rumah Sakit',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300&q=80&fm=webp',
    isContact: false,
  },

  // 3. Bendahara KKN (2 Orang)
  {
    id: 'tm-5',
    name: 'Patriciya Rayna M.L',
    nim: '14230000002',
    role: 'Bendahara I KKN',
    major: 'S1 Administrasi Rumah Sakit',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&h=300&q=80&fm=webp',
    isContact: false,
  },
  {
    id: 'tm-6',
    name: 'Rini Eka Sukmawati',
    nim: '14230500004',
    role: 'Bendahara II KKN',
    major: 'S1 Administrasi Rumah Sakit',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=300&h=300&q=80&fm=webp',
    isContact: false,
  },

  // 4. Divisi Acara KKN (4 Orang)
  {
    id: 'tm-7',
    name: 'Triana M. Adu',
    nim: '14230000008',
    role: 'Koor. Divisi Acara',
    major: 'S1 Administrasi Rumah Sakit',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&h=300&q=80&fm=webp',
    isContact: true,
  },
  {
    id: 'tm-8',
    name: 'Fatimah Ashzahra',
    nim: '14230000001',
    role: 'Divisi Acara KKN',
    major: 'S1 Administrasi Rumah Sakit',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&h=300&q=80&fm=webp',
    isContact: false,
  },
  {
    id: 'tm-9',
    name: 'Esa Masyrifatul K',
    nim: '14230500002',
    role: 'Divisi Acara KKN',
    major: 'S1 Administrasi Rumah Sakit',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&h=300&q=80&fm=webp',
    isContact: false,
  },
  {
    id: 'tm-10',
    name: 'Fauzan M. Amry',
    nim: '142305000010',
    role: 'Divisi Acara KKN',
    major: 'S1 Administrasi Rumah Sakit',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=80&fm=webp',
    isContact: false,
  },

  // 5. Divisi Humas KKN (3 Orang)
  {
    id: 'tm-11',
    name: 'Zahra Suci Melinda',
    nim: '14230500005',
    role: 'Koor. Divisi Humas',
    major: 'S1 Administrasi Rumah Sakit',
    avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=300&h=300&q=80&fm=webp',
    isContact: true,
  },
  {
    id: 'tm-12',
    name: 'Indira Tri Anisa',
    nim: '14230500006',
    role: 'Divisi Humas KKN',
    major: 'S1 Administrasi Rumah Sakit',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80&fm=webp',
    isContact: false,
  },
  {
    id: 'tm-13',
    name: 'Devina Adelia Putri',
    nim: '14230500007',
    role: 'Divisi Humas KKN',
    major: 'S1 Administrasi Rumah Sakit',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300&q=80&fm=webp',
    isContact: false,
  },

  // 6. Divisi PDD - Publikasi, Dokumentasi & Desain (4 Orang)
  {
    id: 'tm-14',
    name: 'Moh Ariska Rasyid',
    nim: '14230000009',
    role: 'Koor. Divisi PDD',
    major: 'S1 Administrasi Rumah Sakit',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80&fm=webp',
    isContact: false,
  },
  {
    id: 'tm-15',
    name: 'Titian Sejati Gulo',
    nim: '14230000003',
    role: 'Divisi PDD KKN',
    major: 'S1 Administrasi Rumah Sakit',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&h=300&q=80&fm=webp',
    isContact: false,
  },
  {
    id: 'tm-16',
    name: 'Zahra Rima Ardia',
    nim: '14230500008',
    role: 'Divisi PDD KKN',
    major: 'S1 Administrasi Rumah Sakit',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=300&h=300&q=80&fm=webp',
    isContact: false,
  },
  {
    id: 'tm-17',
    name: 'St Anisa Balqis',
    nim: '142300000010',
    role: 'Divisi PDD KKN',
    major: 'S1 Administrasi Rumah Sakit',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300&q=80&fm=webp',
    isContact: false,
  },

  // 7. Divisi Perkap - Perlengkapan & Logistik (3 Orang)
  {
    id: 'tm-18',
    name: 'Mutiara Nur Azizah',
    nim: '14230000006',
    role: 'Koor. Divisi Perkap',
    major: 'S1 Administrasi Rumah Sakit',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&h=300&q=80&fm=webp',
    isContact: false,
  },
  {
    id: 'tm-19',
    name: 'Devi Auliah',
    nim: '14230000005',
    role: 'Divisi Perkap KKN',
    major: 'S1 Administrasi Rumah Sakit',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&h=300&q=80&fm=webp',
    isContact: false,
  },
  {
    id: 'tm-20',
    name: 'Atsalits N. Solihin',
    nim: '14230500001',
    role: 'Divisi Perkap KKN',
    major: 'S1 Administrasi Rumah Sakit',
    avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=300&h=300&q=80&fm=webp',
    isContact: false,
  },
];



