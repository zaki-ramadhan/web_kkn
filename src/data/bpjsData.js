import {
  Smartphone,
  QrCode,
  Stethoscope,
  Pill,
  FileText,
  Building2,
  Calendar,
  Activity,
  BedDouble
} from 'lucide-react';

// ==========================================
// 1. BRAND & IDENTITY (SMART DIGITAL)
// ==========================================

export const brandData = {
  brandName: 'SMART DIGITAL - KKN ARS Cibaregbeg 2026',
  navBrandTitle: 'SMART DIGITAL',
  navBrandSubtitle: 'KKN ARS Cibaregbeg',
  location: 'RT 004 dan 007 RW 007 Kp. Nyalindung / Talaga, Desa Cibaregbeg, Kec. Cibeber, Kab. Cianjur',
};

// 6 Institusi Mitra Sinergi Program KKN & Kesehatan Desa
export const institutionalLogos = [
  {
    id: 'inst-1',
    title: 'UPTD Puskesmas Cibaregbeg',
    alt: 'Logo UPTD Puskesmas Cibaregbeg',
    src: '/images/logo/UPTD_Puskesmas.png',
  },
  {
    id: 'inst-2',
    title: 'BPJS Kesehatan RI',
    alt: 'Logo BPJS Kesehatan Badan Penyelenggara Jaminan Sosial',
    src: '/images/logo/BPJS.png',
  },
  {
    id: 'inst-3',
    title: 'Universitas Indonesia Maju (UIMA)',
    alt: 'Logo Universitas Indonesia Maju UIMA',
    src: '/images/logo/UIMA.png',
  },
  {
    id: 'inst-4',
    title: 'Fakultas Ilmu Kesehatan (FIKES)',
    alt: 'Logo Fakultas Ilmu Kesehatan FIKES UIMA',
    src: '/images/logo/UIMA_FIKES.png',
  },
  {
    id: 'inst-5',
    title: 'Kader Posyandu Desa Cibaregbeg',
    alt: 'Logo Kader Posyandu Desa Cibaregbeg',
    src: '/images/logo/KADER_POSYANDU.png',
  },
  {
    id: 'inst-6',
    title: 'KKN S1 Administrasi Rumah Sakit',
    alt: 'Logo KKN S1 Administrasi Rumah Sakit KKN UIMA',
    src: '/images/logo/KKN_UIMA.png',
  },
];

// ==========================================
// 2. HERO BANNER & STATISTIK
// ==========================================

export const heroData = {
  eyebrow: 'Program Pengabdian KKN ARS Cibaregbeg 2026, Universitas Indonesia Maju (UIMA)',
  titlePrefix: 'Solusi Bebas Kendala Pelayanan',
  titleHighlight: 'Kesehatan Warga',
  titleSuffix: 'Desa Cibaregbeg',
  subtitle: 'Edukasi mandiri terkait alur rujukan faskes, re-aktivasi kepesertaan BPJS nonaktif, program cicilan REHAB, dan kemudahan antrean online Puskesmas berbasis digital.',
  avatarText: '1.450+ Warga Terbantu Program Edukasi Mahasiswa',
  stats: [
    { id: 'hs1', value: '100%', label: 'Tercover BPJS', detail: 'Pelayanan & obat generik di Puskesmas' },
    { id: 'hs2', value: 'Posyandu', label: 'Sirna Asih', detail: 'Konsultasi alur & panduan berkas tatap muka' },
    { id: 'hs3', value: '5 Menit', label: 'Antrean Online JKN', detail: 'Ambil nomor dari rumah tanpa antre subuh' },
    { id: 'hs4', value: '0 Rupiah', label: 'Persalinan Normal', detail: 'Gratis di Puskesmas PONED terdaftar' },
  ],
  ctaPrimary: { text: 'Edukasi Alur Berobat', href: '#alur-faskes' },
  ctaSecondary: {
    text: 'Tanya Kader Posyandu',
    href: 'https://wa.me/628892120024?text=Halo%20Kader%20Posyandu%2C%20saya%20warga%20Cibaregbeg%20ingin%20konsultasi%20kesehatan',
  },
};

export const avatarList = [
  '/images/team/14230000007_Safira Nurkharisma.webp',
  '/images/team/14230500003_Muhammad Fikri.webp',
  '/images/team/14230000004_Revalina Yoanita.webp',
  '/images/team/14230800002_Melisa Safa Maura.webp',
];

// ==========================================
// 3. SECTION 1: JENIS & KATEGORI KEPESERTAAN BPJS KESEHATAN
// ==========================================

export const bpjsCategories = [
  {
    id: 'pbi',
    badge: 'Bantuan Pemerintah',
    name: 'BPJS PBI JK (Bantuan Pemerintah)',
    price: 'Gratis 100%',
    priceSub: '(Ditanggung APBN / APBD)',
    target: 'Masyarakat pra-sejahtera, warga kurang mampu, dan penyandang disabilitas terdaftar bantuan sosial DTKS.',
    features: [
      'Hak rawat inap Kelas 3.',
      'Iuran bulanan dibayarkan penuh oleh negara.',
      'Pelayanan kesehatan paripurna di Puskesmas & RS rujukan.',
      'Pendaftaran & verifikasi data di balai desa setempat.',
    ],
    highlighted: false,
    theme: 'white',
    ctaText: 'Pelajari Ketentuan PBI',
    ctaLink: '#solusi-adm',
  },
  {
    id: 'mandiri',
    badge: 'Mandiri / PBPU',
    name: 'BPJS Mandiri / PBPU (Bukan Penerima Upah)',
    price: 'Rp 35.000 - Rp 150.000',
    priceSub: '/ orang / bulan',
    target: 'Pekerja mandiri, petani, pedagang, wiraswasta, dan masyarakat umum bukan penerima upah tetap.',
    features: [
      'Pilihan Kelas: Kelas 1 (150rb), Kelas 2 (100rb), Kelas 3 (35rb subsidi pemerintah).',
      'Akses bebas memilih FKTP Puskesmas/Klinik.',
      'Pendaftaran praktis via Mobile JKN.',
      'Pembayaran autodebet bank & e-wallet.',
    ],
    highlighted: true,
    theme: 'forest',
    ctaText: 'Konsultasi via WA',
    ctaLink: 'https://wa.me/628892120024?text=Halo%20Kader%20Posyandu%2C%20saya%20ingin%20tanya%20panduan%20BPJS%20Mandiri',
  },
  {
    id: 'ppu',
    badge: 'Pekerja Formal (PPU)',
    name: 'BPJS PPU (Pekerja Penerima Upah)',
    price: '5% dari Gaji Pokok',
    priceSub: '(4% Kantor + 1% Karyawan)',
    target: 'Karyawan swasta, ASN, pegawai BUMN/BUMD, dan pekerja formal berpenghasilan tetap.',
    features: [
      'Iuran dipotong langsung dari slip gaji.',
      'Menanggung otomatis hingga 5 anggota keluarga (suami/istri + 3 anak).',
      'Hak kelas rawat inap sesuai jenjang gaji.',
      'Pendaftaran dikoordinasikan oleh instansi/perusahaan tempat bekerja.',
    ],
    highlighted: false,
    theme: 'white',
    ctaText: 'Info Ketentuan PPU',
    ctaLink: '#solusi-adm',
  },
];

// ==========================================
// 4. SECTION 2: ALUR PENDAFTARAN & PELAYANAN PUSKESMAS
// ==========================================

export const registrationSteps = [
  {
    step: '01',
    icon: Smartphone,
    title: 'Ambil Antrean Online / Offline',
    desc: 'Ambil nomor antrean secara online via aplikasi Mobile JKN sebelum datang, atau langsung di mesin antrean Puskesmas.',
    highlight: 'Hemat waktu antrean 2-3 jam di ruang tunggu loket.',
  },
  {
    step: '02',
    icon: QrCode,
    title: 'Verifikasi di Loket Pendaftaran',
    desc: 'Tunjukkan e-KTP atau barcode Kartu Indonesia Sehat (KIS) digital pada aplikasi. Tidak memerlukan fotokopi berkas fisik tebal.',
    highlight: 'Cukup tunjukkan NIK / KTP asli atau KIS digital.',
  },
  {
    step: '03',
    icon: Stethoscope,
    title: 'Pemeriksaan Medis & Dokter',
    desc: 'Pemeriksaan tanda vital (tensi darah, suhu, berat badan) oleh perawat, dilanjutkan konsultasi & diagnosa dokter di poli tujuan.',
    highlight: 'Sesuai poli (Umum, Gigi, KIA/KB, Lansia Prolanis).',
  },
  {
    step: '04',
    icon: Pill,
    title: 'Pengambilan Obat di Farmasi',
    desc: 'Serahkan resep dokter ke instalasi farmasi Puskesmas. Seluruh obat formularium nasional generik diberikan tanpa iur biaya.',
    highlight: 'Obat generik tercover 100% gratis.',
  },
  {
    step: '05',
    icon: FileText,
    title: 'Penerbitan Rujukan Berjenjang',
    desc: 'Jika membutuhkan pemeriksaan spesialis/tindakan lanjutan, dokter menerbitkan surat rujukan online (PCare) ke Rumah Sakit rekanan.',
    highlight: 'Sistem rujukan terintegrasi otomatis ke RS.',
  },
];

// ==========================================
// 5. SECTION 3: CAKUPAN LAYANAN & POLI DI PUSKESMAS
// ==========================================

export const serviceFilterTabs = [
  { id: 'all', label: 'Semua Pelayanan (5)' },
  { id: 'umum', label: 'Poli Umum' },
  { id: 'kia', label: 'KIA & Bersalin' },
  { id: 'gigi', label: 'Poli Gigi' },
  { id: 'lab', label: 'Laboratorium' },
  { id: 'prolanis', label: 'Prolanis Kronis' },
];

export const puskesmasServices = [
  {
    id: 'srv-1',
    category: 'umum',
    span: 'col-span-12 lg:col-span-8',
    title: 'Rawat Jalan Tingkat Pertama (Poli Umum)',
    tag: 'Pelayanan Utama',
    desc: 'Konsultasi dokter umum, penanganan penyakit menular & tidak menular, pemeriksaan tanda vital, penjahitan luka, dan terapi farmasi standar.',
    stat: '100% Tercover Tanpa Iur Biaya',
    image: '/images/services/rawat jalan.jpg',
  },
  {
    id: 'srv-2',
    category: 'kia',
    span: 'col-span-12 lg:col-span-4',
    title: 'Kesehatan Ibu & Anak (KIA), Persalinan & KB',
    tag: 'Prioritas Desa',
    desc: 'Pemeriksaan kehamilan rutin (ANC terpadu + USG dasar), imunisasi lengkap bayi, persalinan normal 24 jam PONED, dan pemasangan alat KB (IUD, implan, suntik, pil).',
    stat: 'Termasuk Program Pencegahan Stunting',
    image: '/images/services/kesehatan ibu & anak.jpg',
  },
  {
    id: 'srv-3',
    category: 'gigi',
    span: 'col-span-12 md:col-span-6 lg:col-span-4',
    title: 'Pelayanan Gigi & Mulut Lengkap',
    tag: 'Poli Gigi',
    desc: 'Pembersihan karang gigi (scaling 1x/tahun atas indikasi medis), penambalan gigi komposit, pencabutan gigi sulung/tetap, dan pengobatan infeksi pulpa.',
    stat: 'Dilayani Dokter Gigi Terdaftar',
    image: '/images/services/pelayanan gigi & mulut lengkap.jpg',
  },
  {
    id: 'srv-4',
    category: 'lab',
    span: 'col-span-12 md:col-span-6 lg:col-span-4',
    title: 'Laboratorium Diagnostik Sederhana',
    tag: 'Tes Penunjang',
    desc: 'Pemeriksaan darah lengkap, tes urin rutin, glukosa darah puasa/sewaktu, tes kolesterol total, asam urat, tes dahak TBC, dan rapid diagnostic test.',
    stat: 'Hasil Cepat Hari yang Sama',
    image: '/images/services/edukasi kkn.jpg',
  },
  {
    id: 'srv-5',
    category: 'prolanis',
    span: 'col-span-12 lg:col-span-4',
    title: 'Prolanis (Program Pengelolaan Penyakit Kronis)',
    tag: 'Lansia & Kronis',
    desc: 'Pemantauan khusus penderita Diabetes Melitus & Hipertensi, senam lansia berkala, edukasi gizi klinik, dan paket obat rutin bulanan faskes.',
    stat: 'Pencegahan Dini Komplikasi Kronis',
    image: '/images/services/prolanis.jpg',
  },
];

// ==========================================
// 6. SECTION 4: FITUR & PEMANFAATAN LAYANAN DIGITAL JKN (5 FITUR)
// ==========================================

export const digitalFeatures = [
  {
    number: '01',
    title: 'Booking Antrean Online Faskes',
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
    desc: 'Kuesioner evaluasi mandiri singkat untuk mendeteksi dini risiko penyakit tidak menular seperti hipertensi, diabetes melitus, ginjal, dan jantung koroner secara berkala.',
    highlight: 'Dianjurkan diisi minimal 1 kali per tahun, terhubung ke rekam medis Puskesmas.',
  },
  {
    number: '04',
    title: 'Perubahan Faskes Domisili Mandiri',
    desc: 'Bagi warga pendatang atau warga yang faskes pertamanya masih terdaftar di luar kota/desa lain, dapat memindahkan faskes pertama ke Puskesmas Cibaregbeg secara mandiri tanpa surat pengantar.',
    highlight: 'Syarat: terdaftar min. 3 bulan di faskes lama. Aktif per tgl 1 bulan berikutnya.',
  },
  {
    number: '05',
    title: 'Informasi Ketersediaan Tempat Tidur & Operasi',
    desc: 'Mengecek ketersediaan kamar rawat inap dan jadwal tindakan operasi di RS rujukan secara transparan dan real-time langsung melalui smartphone.',
    highlight: 'Memastikan kepastian fasilitas sebelum menuju rumah sakit rujukan.',
  },
];

// ==========================================
// 7. SECTION 5: PANDUAN ADMINISTRASI & PERMASALAHAN BPJS (FAQ)
// ==========================================

export const administrativeFaqs = [
  {
    id: 'adm-1',
    category: 'Aktivasi BPJS Mati',
    question: 'Bagaimana cara mengaktifkan kartu BPJS Mandiri yang nonaktif akibat tunggakan iuran?',
    answer: {
      intro: 'Bagi peserta BPJS Mandiri (PBPU) yang status kepesertaannya nonaktif akibat keterlambatan iuran bulanan:',
      list: [
        {
          title: 'Cek Rincian Tagihan',
          text: 'Periksa total bulan tunggakan dan tagihan di kanal pembayaran resmi.',
        },
        {
          title: 'Manfaatkan Program REHAB',
          text: 'Manfaatkan Program REHAB (Rencana Pembayaran Bertahap) jika tunggakan 4-24 bulan untuk dicicil hingga 12 tahapan.',
        },
        {
          title: 'Bayar Tagihan / Cicilan ke-1',
          text: 'Bayar tagihan penuh atau cicilan ke-1, kartu langsung aktif kembali dalam 1x24 jam.',
        },
      ],
    },
  },
  {
    id: 'adm-2',
    category: 'Aktivasi BPJS Mati',
    question: 'Kartu BPJS PBI (Bantuan Pemerintah) tiba-tiba dinonaktifkan, bagaimana solusinya?',
    answer: {
      intro: 'Peserta PBI yang dinonaktifkan umumnya disebabkan perbaruan data kependudukan atau DTKS:',
      list: [
        {
          title: 'Verifikasi NIK di Balai Desa',
          text: 'Verifikasi NIK di balai desa setempat membawa e-KTP dan KK asli untuk memastikan status NIK padan di Dukcapil.',
        },
        {
          title: 'Pengusulan Ulang DTKS',
          text: 'Ajukan pengusulan ulang data ke dalam DTKS melalui pendamping bansos desa.',
        },
        {
          title: 'Opsi Peralihan Mandiri',
          text: 'Jika ada kebutuhan berobat darurat dan mampu, dapat beralih sementara ke BPJS Mandiri Kelas 3 (Rp 35.000/bln).',
        },
      ],
    },
  },
  {
    id: 'adm-3',
    category: 'Aktivasi BPJS Mati',
    question: 'Saya baru berhenti bekerja dari kantor, bagaimana cara mengaktifkan BPJS kembali?',
    answer: {
      intro: 'Setelah dinonaktifkan oleh perusahaan lama pasca-resign atau PHK:',
      list: [
        {
          title: 'Masa Perlindungan Pasca-PHK',
          text: 'Manfaatkan masa perlindungan dasar pasca-PHK hingga 6 bulan tanpa iuran untuk kondisi medis tertentu.',
        },
        {
          title: 'Pengalihan Segmen Mandiri',
          text: 'Ajukan pengalihan status dari PPU (Pekerja Formal) menjadi PBPU/Mandiri dan pilih kelas rawat inap yang diinginkan.',
        },
        {
          title: 'Bayar Iuran Bulan Pertama',
          text: 'Bayar iuran bulan pertama dalam waktu 30 hari agar kartu aktif tanpa masa tunggu.',
        },
      ],
    },
  },
  {
    id: 'adm-4',
    category: 'Pindah Domisili & FKTP',
    question: 'Bagaimana cara pindah FKTP (Puskesmas) ke domisili tempat tinggal baru di Cibaregbeg?',
    answer: {
      intro: 'Untuk mempermudah rujukan berjenjang di tempat tinggal baru:',
      list: [
        {
          title: 'Syarat Masa Terdaftar',
          text: 'Pastikan telah terdaftar minimal 3 bulan di faskes lama (kecuali jika ada surat pindah KK resmi).',
        },
        {
          title: 'Ubah Data via Mobile JKN',
          text: 'Ubah FKTP melalui menu Perubahan Data Peserta di aplikasi Mobile JKN ke Puskesmas Cibaregbeg.',
        },
        {
          title: 'Masa Aktif Efektif',
          text: 'Perubahan FKTP akan mulai aktif berlaku per tanggal 1 bulan berikutnya.',
        },
      ],
    },
  },
  {
    id: 'adm-5',
    category: 'Pelayanan Luar Kota',
    question: 'Apakah bisa berobat di Puskesmas lain jika sedang di luar kota tanpa pindah FKTP?',
    answer: {
      intro: 'Peserta BPJS tetap memiliki hak mendapatkan pelayanan kesehatan di luar domisili:',
      list: [
        {
          title: 'Maksimal 3 Kali Kunjungan',
          text: 'Peserta BPJS berhak mendapatkan pelayanan di luar FKTP terdaftar maksimal 3 kali kunjungan dalam 1 bulan pada faskes yang sama.',
        },
        {
          title: 'Kondisi Gawat Darurat (IGD)',
          text: 'Jika kondisi darurat medis, dapat langsung menuju IGD RS mana saja tanpa rujukan.',
        },
      ],
    },
  },
];

// ==========================================
// 8. SECTION 6: PUSAT INFORMASI & KONTAK RESMI (4 KONTAK)
// ==========================================

export const emergencyContacts = [
  {
    id: 'c1',
    name: 'BPJS Care Center & PANDAWA',
    number: 'WA: 0811-8-165-165 | Telp: 165',
    type: 'Layanan Resmi BPJS',
    avatar: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=160&h=160&q=80&fm=webp',
    desc: 'Layanan aduan resmi & administrasi online. No. 165 untuk panggilan telepon suara (berbayar pulsa), dan WA 0811-8-165-165 untuk chat PANDAWA.',
    actionText: 'Hubungi PANDAWA',
    link: 'https://wa.me/628118165165?text=Halo%20BPJS%20Kesehatan%2C%20saya%20warga%20Cibaregbeg%20ingin%20cek%20status%20kepesertaan',
    urgent: false,
  },
  {
    id: 'c2',
    name: 'Kader Posyandu (Sirna Asih)',
    number: '+62 889-2120-024',
    type: 'Kader Posyandu Sirna Asih',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&h=160&q=80&fm=webp',
    desc: 'Narahubung resmi kader posyandu wilayah Kp. Nyalindung dan Talaga untuk konsultasi dan koordinasi langsung pelayanan posyandu desa.',
    actionText: 'Hubungi Posyandu',
    link: 'https://wa.me/628892120024?text=Halo%20Kader%20Posyandu%2C%20saya%20warga%20Cibaregbeg%20ingin%20konsultasi%20posyandu',
    urgent: true,
  },
  {
    id: 'c3',
    name: 'Puskesmas Cibaregbeg / Cibeber',
    number: '+62 857-9569-9854',
    type: 'Puskesmas Pelayanan',
    avatar: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=160&h=160&q=80&fm=webp',
    desc: 'Konsultasi alur berobat Puskesmas, informasi jadwal dokter/poli, dan advokasi rujukan kesehatan warga.',
    actionText: 'Hubungi Puskesmas',
    link: 'https://wa.me/6285795699854?text=Halo%20Puskesmas%2C%20saya%20warga%20Cibaregbeg%20ingin%20konsultasi%20layanan%20kesehatan',
    urgent: true,
  },
  {
    id: 'c4',
    name: 'Dinas Kesehatan Kab. Cianjur',
    number: '(0263) 268894',
    type: 'Dinas Kesehatan Cianjur',
    avatar: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=160&h=160&q=80&fm=webp',
    desc: 'Narahubung panggilan telepon kantor resmi untuk layanan dan fasilitas kesehatan daerah Kabupaten Cianjur.',
    actionText: 'Hubungi Dinkes',
    link: 'tel:0263268894',
    urgent: false,
  },
];

// Dosen Pembimbing Lapangan (DPL) & Dosen Pengampu Mata Kuliah UIMA
export const academicAdvisors = [
  {
    id: 'adv-1',
    name: 'Ibu Ns. Oci Etri Nursanty, S.Kep., M.M.R.',
    role: 'Dosen Pembimbing Lapangan (DPL)',
    institution: 'Universitas Indonesia Maju (UIMA)',
    avatar: '/images/logo/UIMA_FIKES.png',
  },
  {
    id: 'adv-2',
    name: 'Ibu Hanifah Solihah, S.KM.',
    role: 'Dosen Pengampu Mata Kuliah',
    institution: 'Universitas Indonesia Maju (UIMA)',
    avatar: '/images/logo/UIMA.png',
  },
];

// Roster 20 Mahasiswa KKN ARS Cibaregbeg (7 Divisi Resmi UIMA)
export const kknTeamMembers = [
  {
    id: 'tm-01',
    name: 'Safira Nurkharisma',
    nim: '14230000007',
    role: 'Ketua KKN',
    division: 'BPH Inti',
    avatar: '/images/team/14230000007_Safira Nurkharisma.webp',
  },
  {
    id: 'tm-02',
    name: 'Muhammad Fikri',
    nim: '14230500003',
    role: 'Wakil Ketua KKN',
    division: 'BPH Inti',
    avatar: '/images/team/14230500003_Muhammad Fikri.webp',
  },
  {
    id: 'tm-03',
    name: 'Revalina Yoanita',
    nim: '14230000004',
    role: 'Sekretaris I KKN',
    division: 'Sekretariat',
    avatar: '/images/team/14230000004_Revalina Yoanita.webp',
  },
  {
    id: 'tm-04',
    name: 'Melisa Safa Maura',
    nim: '14230800002',
    role: 'Sekretaris II KKN',
    division: 'Sekretariat',
    avatar: '/images/team/14230800002_Melisa Safa Maura.webp',
  },
  {
    id: 'tm-05',
    name: 'Patriciya Rayna Martin',
    nim: '14230000002',
    role: 'Bendahara I KKN',
    division: 'Kebendaharaan',
    avatar: '/images/team/14230000002 Patriciya Rayna Martin.webp',
  },
  {
    id: 'tm-06',
    name: 'Rini Eka Sukmawati',
    nim: '14230500004',
    role: 'Bendahara II KKN',
    division: 'Kebendaharaan',
    avatar: '/images/team/14230500004_Rini Eka Sukmawati.webp',
  },
  {
    id: 'tm-07',
    name: 'Triana Adu',
    nim: '14230000008',
    role: 'Koor. Divisi Acara',
    division: 'Divisi Acara',
    avatar: '/images/team/14230000008_Triana Adu.webp',
  },
  {
    id: 'tm-08',
    name: 'Fatimah Ashzahra',
    nim: '14230000001',
    role: 'Divisi Acara KKN',
    division: 'Divisi Acara',
    avatar: '/images/team/14230000001_Fatimah Ashzahra.webp',
  },
  {
    id: 'tm-09',
    name: 'Esa Masyrifatul Kholqiyah',
    nim: '14230500002',
    role: 'Divisi Acara KKN',
    division: 'Divisi Acara',
    avatar: '/images/team/14230500002 Esa Masyrifatul Kholqiyah.webp',
  },
  {
    id: 'tm-10',
    name: 'Fauzan Muhammad Amry',
    nim: '14230500010',
    role: 'Divisi Acara KKN',
    division: 'Divisi Acara',
    avatar: '/images/team/14230500010_Fauzan Muhammad Amry.webp',
  },
  {
    id: 'tm-11',
    name: 'Zahra Suci Melinda',
    nim: '14230500005',
    role: 'Koor. Divisi Humas',
    division: 'Divisi Humas',
    avatar: '/images/team/14230500005_Zahra Suci Melinda.webp',
  },
  {
    id: 'tm-12',
    name: 'Indira Tri Anisa',
    nim: '14230500006',
    role: 'Divisi Humas KKN',
    division: 'Divisi Humas',
    avatar: '/images/team/14230500006_Indira Tri Anisa.webp',
  },
  {
    id: 'tm-13',
    name: 'Devina Adelia Putri',
    nim: '14230500007',
    role: 'Divisi Humas KKN',
    division: 'Divisi Humas',
    avatar: '/images/team/14230500007_Devina Adelia Putri.webp',
  },
  {
    id: 'tm-14',
    name: 'M. Ariska Rasyid',
    nim: '14230000009',
    role: 'Koor. Divisi PDD',
    division: 'Divisi PDD',
    avatar: '/images/team/14230000009_M. Ariska Rasyid.webp',
  },
  {
    id: 'tm-15',
    name: 'Titian Sejati Gulo',
    nim: '14230000003',
    role: 'Divisi PDD KKN',
    division: 'Divisi PDD',
    avatar: '/images/team/14230000003_Titian Sejati Gulo.webp',
  },
  {
    id: 'tm-16',
    name: 'Zahra Rima Ardia',
    nim: '14230500008',
    role: 'Divisi PDD KKN',
    division: 'Divisi PDD',
    avatar: '/images/team/14230500008_Zahra Rima Ardia.webp',
  },
  {
    id: 'tm-17',
    name: 'Siti Annisa Balqis',
    nim: '14230000010',
    role: 'Divisi PDD KKN',
    division: 'Divisi PDD',
    avatar: '/images/team/14230000010_Siti Annisa Balqis.webp',
  },
  {
    id: 'tm-18',
    name: 'Mutiara Nur Azzizah',
    nim: '14230000006',
    role: 'Koor. Divisi Perkap',
    division: 'Divisi Perkap',
    avatar: '/images/team/14230000006_Mutiara Nur Azzizah.webp',
  },
  {
    id: 'tm-19',
    name: 'Devi Auliah',
    nim: '14230000005',
    role: 'Divisi Perkap KKN',
    division: 'Divisi Perkap',
    avatar: '/images/team/14230000005_Devi Auliah.webp',
  },
  {
    id: 'tm-20',
    name: 'Atsalits Nurazizah Solihin',
    nim: '14230500001',
    role: 'Divisi Perkap KKN',
    division: 'Divisi Perkap',
    avatar: '/images/team/14230500001_Atsalits Nurazizah Solihin_.webp',
  },
];

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

export const navEducationalModules = [
  { href: '#jenis-bpjs', title: 'Jenis & Kategori Kepesertaan', desc: 'PBI JK, Mandiri/PBPU, & PPU' },
  { href: '#alur-faskes', title: 'Alur Pendaftaran & Pelayanan', desc: '5 Langkah berobat di Puskesmas' },
  { href: '#layanan-puskesmas', title: 'Cakupan Layanan & Poli', desc: 'Poli umum, KIA, gigi, lab & prolanis' },
  { href: '#layanan-digital', title: 'Fitur Layanan Digital JKN', desc: 'Antrean online, KIS digital, & kamar RS' },
  { href: '#solusi-adm', title: 'Panduan Administrasi (FAQ)', desc: 'Solusi kartu nonaktif & cicilan REHAB' },
  { href: '#darurat', title: 'Pusat Informasi & Kontak', desc: 'Kader Posyandu, Puskesmas, BPJS 165, & Dinkes' },
];

// ==========================================
// 9. FOOTER DATA
// ==========================================

export const footerData = {
  title: 'SMART DIGITAL - KKN ARS Cibaregbeg 2026',
  desc: 'Portal informasi dan edukasi kesehatan mandiri yang dikembangkan oleh Tim Mahasiswa KKN S1 Administrasi Rumah Sakit (ARS) Universitas Indonesia Maju (UIMA) untuk mempermudah warga desa memahami alur dan hak pelayanan kesehatan.',
  address: 'RT 004 dan 007 RW 007 Kp. Nyalindung / Talaga, Desa Cibaregbeg, Kec. Cibeber, Kab. Cianjur',
  posyanduContact: 'Kader Posyandu (+62 889-2120-024)',
  posyanduLink: 'https://wa.me/628892120024?text=Halo%20Kader%20Posyandu%2C%20saya%20ingin%20konsultasi%20di%20posyandu',
  tiktok: '@kknars_cibaregbeg',
  tiktokUrl: 'https://www.tiktok.com/@kknars_cibaregbeg',
  instagram: '@kknars_cibaregbeg',
  instagramUrl: 'https://www.instagram.com/kknars_cibaregbeg/',
  copyright: '© 2026 KKN ARS Cibaregbeg. Program Pengabdian Masyarakat S1 Administrasi Rumah Sakit, Universitas Indonesia Maju (UIMA). Hak cipta dilindungi.',
};

// Aliases for compatibility
export const heroStats = heroData.stats;
