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
// 1. SHARED STATIC DATA (REUSABLE ACROSS VERSIONS)
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
    ctaLink: 'https://wa.me/628892120024?text=Halo%20Ibu%20Risma%2C%20saya%20ingin%20tanya%20panduan%20BPJS%20Mandiri',
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
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=960&h=640&q=75&fm=webp',
  },
  {
    id: 'srv-2',
    category: 'kia',
    span: 'col-span-12 lg:col-span-4',
    title: 'Kesehatan Ibu & Anak (KIA), Persalinan & KB',
    tag: 'Prioritas Desa',
    desc: 'Pemeriksaan kehamilan rutin (ANC terpadu + USG dasar), imunisasi lengkap bayi, persalinan normal 24 jam PONED, dan pemasangan alat KB (IUD, implan, suntik, pil).',
    stat: 'Termasuk Program Pencegahan Stunting',
    image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=600&h=450&q=75&fm=webp',
  },
  {
    id: 'srv-3',
    category: 'gigi',
    span: 'col-span-12 md:col-span-6 lg:col-span-4',
    title: 'Pelayanan Gigi & Mulut Lengkap',
    tag: 'Poli Gigi',
    desc: 'Pembersihan karang gigi (scaling 1x/tahun atas indikasi medis), penambalan gigi komposit, pencabutan gigi sulung/tetap, dan pengobatan infeksi pulpa.',
    stat: 'Dilayani Dokter Gigi Terdaftar',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&h=450&q=75&fm=webp',
  },
  {
    id: 'srv-4',
    category: 'lab',
    span: 'col-span-12 md:col-span-6 lg:col-span-4',
    title: 'Laboratorium Diagnostik Sederhana',
    tag: 'Tes Penunjang',
    desc: 'Pemeriksaan darah lengkap, tes urin rutin, glukosa darah puasa/sewaktu, tes kolesterol total, asam urat, tes dahak TBC, dan rapid diagnostic test.',
    stat: 'Hasil Cepat Hari yang Sama',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&h=450&q=75&fm=webp',
  },
  {
    id: 'srv-5',
    category: 'prolanis',
    span: 'col-span-12 lg:col-span-4',
    title: 'Prolanis (Program Pengelolaan Penyakit Kronis)',
    tag: 'Lansia & Kronis',
    desc: 'Pemantauan khusus penderita Diabetes Melitus & Hipertensi, senam lansia berkala, edukasi gizi klinik, dan paket obat rutin bulanan faskes.',
    stat: 'Pencegahan Dini Komplikasi Kronis',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&h=450&q=75&fm=webp',
  },
];

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

// Roster 20 Mahasiswa KKN ARS Cibaregbeg (7 Divisi Resmi UIMA)
export const kknTeamMembers = [
  { id: 'tm-01', name: 'Safira Nur Kharisma', nim: '14230000007', role: 'Ketua KKN', division: 'BPH Inti', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80&fm=webp' },
  { id: 'tm-02', name: 'Muhammad Fikri', nim: '14230500003', role: 'Wakil Ketua KKN', division: 'BPH Inti', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80&fm=webp' },
  { id: 'tm-03', name: 'Revalina Yoanita', nim: '14230000004', role: 'Sekretaris I KKN', division: 'Sekretariat', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&h=160&q=80&fm=webp' },
  { id: 'tm-04', name: 'Melisa Safa Maura', nim: '14230000004', role: 'Sekretaris II KKN', division: 'Sekretariat', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=160&h=160&q=80&fm=webp' },
  { id: 'tm-05', name: 'Patriciya Rayna M.L', nim: '14230000002', role: 'Bendahara I KKN', division: 'Kebendaharaan', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&h=160&q=80&fm=webp' },
  { id: 'tm-06', name: 'Rini Eka Sukmawati', nim: '14230500004', role: 'Bendahara II KKN', division: 'Kebendaharaan', avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=160&h=160&q=80&fm=webp' },
  { id: 'tm-07', name: 'Triana M. Adu', nim: '14230000008', role: 'Koor. Divisi Acara', division: 'Divisi Acara', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&h=160&q=80&fm=webp' },
  { id: 'tm-08', name: 'Fatimah Ashzahra', nim: '14230000001', role: 'Divisi Acara KKN', division: 'Divisi Acara', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&h=160&q=80&fm=webp' },
  { id: 'tm-09', name: 'Esa Masyrifatul K', nim: '14230500002', role: 'Divisi Acara KKN', division: 'Divisi Acara', avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=160&h=160&q=80&fm=webp' },
  { id: 'tm-10', name: 'Fauzan M. Amry', nim: '142305000010', role: 'Divisi Acara KKN', division: 'Divisi Acara', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80&fm=webp' },
  { id: 'tm-11', name: 'Zahra Suci Melinda', nim: '14230500005', role: 'Koor. Divisi Humas', division: 'Divisi Humas', avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=160&h=160&q=80&fm=webp' },
  { id: 'tm-12', name: 'Indira Tri Anisa', nim: '14230500006', role: 'Divisi Humas KKN', division: 'Divisi Humas', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&h=160&q=80&fm=webp' },
  { id: 'tm-13', name: 'Devina Adelia Putri', nim: '14230500007', role: 'Divisi Humas KKN', division: 'Divisi Humas', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80&fm=webp' },
  { id: 'tm-14', name: 'Moh Ariska Rasyid', nim: '14230000009', role: 'Koor. Divisi PDD', division: 'Divisi PDD', avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=160&h=160&q=80&fm=webp' },
  { id: 'tm-15', name: 'Titian Sejati Gulo', nim: '14230000003', role: 'Divisi PDD KKN', division: 'Divisi PDD', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&h=160&q=80&fm=webp' },
  { id: 'tm-16', name: 'Zahra Rima Ardia', nim: '14230500008', role: 'Divisi PDD KKN', division: 'Divisi PDD', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=160&h=160&q=80&fm=webp' },
  { id: 'tm-17', name: 'St Anisa Balqis', nim: '142300000010', role: 'Divisi PDD KKN', division: 'Divisi PDD', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&h=160&q=80&fm=webp' },
  { id: 'tm-18', name: 'Mutiara Nur Azizah', nim: '14230000006', role: 'Koor. Divisi Perkap', division: 'Divisi Perkap', avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=160&h=160&q=80&fm=webp' },
  { id: 'tm-19', name: 'Devi Auliah', nim: '14230000005', role: 'Divisi Perkap KKN', division: 'Divisi Perkap', avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=160&h=160&q=80&fm=webp' },
  { id: 'tm-20', name: 'Atsalits N. Solihin', nim: '14230500001', role: 'Divisi Perkap KKN', division: 'Divisi Perkap', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=160&h=160&q=80&fm=webp' },
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
  { href: '#jenis-bpjs', title: 'Jenis Kepesertaan BPJS', desc: 'PBI, Mandiri/PBPU, & PPU' },
  { href: '#alur-faskes', title: 'Alur Pelayanan Puskesmas', desc: '5 Langkah berobat tanpa antre' },
  { href: '#layanan-puskesmas', title: 'Cakupan Layanan Poli', desc: 'Poli umum, KIA, gigi & lab' },
  { href: '#layanan-digital', title: 'Fitur Mobile JKN', desc: 'Antrean online & KIS digital' },
  { href: '#solusi-adm', title: 'Solusi BPJS Mati & Pindah FKTP', desc: 'REHAB, DTKS, & aktivasi' },
  { href: '#darurat', title: 'Kontak & Narahubung', desc: 'Ibu Risma, Puskesmas & 20 Tim KKN' },
];

export const avatarList = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64&q=80&fm=webp',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64&q=80&fm=webp',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=64&h=64&q=80&fm=webp',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=64&h=64&q=80&fm=webp',
];

// ==========================================
// 2. DATASET VERSI BARU: SMART DIGITAL (DRAFT KLIEN)
// ==========================================

export const smartDigitalData = {
  versionId: 'new',
  versionLabel: 'SMART DIGITAL (Terbaru)',
  brandName: 'SMART DIGITAL - KKN ARS Cibaregbeg 2026',
  navBrandTitle: 'SMART DIGITAL',
  navBrandSubtitle: 'KKN ARS Cibaregbeg',
  location: 'RT 004 dan 007 RW 007 Kp. Nyalindung / Talaga, Desa Cibaregbeg, Kec. Cibeber, Kab. Cianjur',
  hero: {
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
      href: 'https://wa.me/628892120024?text=Halo%20Ibu%20Risma%20Kader%20Posyandu%2C%20saya%20warga%20Cibaregbeg%20ingin%20konsultasi%20kesehatan',
    },
  },
  digitalFeatures: [
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
  ],
  emergencyContacts: [
    {
      id: 'c1',
      name: 'Ibu Risma',
      number: '+62 889-2120-024',
      type: 'Kader Posyandu',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&h=160&q=80&fm=webp',
      desc: 'Narahubung utama ibu kader posyandu Kp. Nyalindung dan Talaga untuk koordinasi langsung di posyandu jika ada yang ingin ditanyakan.',
      actionText: 'Chat Kader Posyandu',
      link: 'https://wa.me/628892120024?text=Halo%20Ibu%20Risma%2C%20saya%20warga%20Cibaregbeg%20ingin%20konsultasi%20di%20posyandu',
      urgent: true,
    },
    {
      id: 'c2',
      name: 'Puskesmas Cibeber / Cibaregbeg',
      number: '+62 857-9569-9854',
      type: 'Puskesmas',
      avatar: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=160&h=160&q=80&fm=webp',
      desc: 'Konsultasi alur berobat Puskesmas, advokasi warga terkait administrasi BPJS Kesehatan, dan penyuluhan kesehatan warga.',
      actionText: 'Hubungi Puskesmas',
      link: 'https://wa.me/6285795699854?text=Halo%20Puskesmas%2C%20saya%20warga%20Cibaregbeg%20ingin%20konsultasi%20layanan%20kesehatan',
      urgent: true,
    },
    {
      id: 'c3',
      name: 'BPJS Care Center (Pusat Aduan)',
      number: '165 / 0811-8165-165',
      type: 'Pusat Aduan BPJS',
      avatar: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=160&h=160&q=80&fm=webp',
      desc: 'Narahubung untuk layanan aduan resmi terkait kepesertaan BPJS yang tidak aktif maupun terkendala.',
      actionText: 'WhatsApp PANDAWA',
      link: 'https://wa.me/628118165165?text=Halo%20BPJS%20Kesehatan%2C%20saya%20ingin%20cek%20status%20kepesertaan',
      urgent: false,
    },
    {
      id: 'c4',
      name: 'Dinas Kesehatan (Dinkes)',
      number: '(0263) 268894',
      type: 'Dinas Kesehatan',
      avatar: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=160&h=160&q=80&fm=webp',
      desc: 'Narahubung untuk layanan dan fasilitas kesehatan daerah Kabupaten Cianjur.',
      actionText: 'Telepon Kantor Dinkes',
      link: 'tel:0263268894',
      urgent: false,
    },
  ],
  footer: {
    title: 'SMART DIGITAL - KKN ARS Cibaregbeg 2026',
    desc: 'Portal informasi dan edukasi kesehatan mandiri yang dikembangkan oleh Tim Mahasiswa KKN S1 Administrasi Rumah Sakit (ARS) Universitas Indonesia Maju (UIMA) untuk mempermudah warga desa memahami alur dan hak pelayanan kesehatan.',
    address: 'RT 004 dan 007 RW 007 Kp. Nyalindung / Talaga, Desa Cibaregbeg, Kec. Cibeber, Kab. Cianjur',
    posyanduContact: 'Ibu Risma (+62 889-2120-024)',
    posyanduLink: 'https://wa.me/628892120024?text=Halo%20Ibu%20Risma%2C%20saya%20ingin%20konsultasi%20di%20posyandu',
    tiktok: '@kknars_cibaregbeg',
    tiktokUrl: 'https://www.tiktok.com/@kknars_cibaregbeg',
    instagram: '@kknars_cibaregbeg',
    instagramUrl: 'https://www.instagram.com/kknars_cibaregbeg/',
    copyright: '© 2026 KKN ARS Cibaregbeg. Program Pengabdian Masyarakat S1 Administrasi Rumah Sakit, Universitas Indonesia Maju (UIMA). Hak cipta dilindungi.',
  },
};

// ==========================================
// 3. DATASET VERSI LAMA: POSKO SEHAT BPJS (ARSIP)
// ==========================================

export const legacyData = {
  versionId: 'old',
  versionLabel: 'Versi Lama (Posko Sehat)',
  brandName: 'POSKO SEHAT BPJS - KKN ARS Cibaregbeg',
  navBrandTitle: 'POSKO SEHAT BPJS',
  navBrandSubtitle: 'KKN ARS Cibaregbeg',
  location: 'Kp. Nyalindung / Talaga, Desa Cibaregbeg, Kec. Cibeber, Kab. Cianjur',
  hero: {
    eyebrow: 'Program Pengabdian KKN ARS Cibaregbeg 2026',
    titlePrefix: 'Panduan Lengkap Layanan',
    titleHighlight: 'BPJS Kesehatan',
    titleSuffix: '& Puskesmas',
    subtitle: 'Media edukasi kesehatan dari mahasiswa KKN untuk warga: alur berobat mudah tanpa antre panjang, cara re-aktivasi kartu nonaktif, prosedur pindah faskes domisili, dan pemanfaatan antrean online.',
    avatarText: '1.450+ Warga Terbantu Program Edukasi Mahasiswa',
    stats: [
      { id: 'hs1', value: '100%', label: 'Tercover BPJS', detail: 'Pelayanan & obat generik di Puskesmas' },
      { id: 'hs2', value: 'Posko', label: 'Siaga Mahasiswa', detail: 'Konsultasi alur & panduan berkas' },
      { id: 'hs3', value: '5 Menit', label: 'Antrean Online JKN', detail: 'Ambil nomor dari rumah tanpa antre' },
      { id: 'hs4', value: '0 Rupiah', label: 'Persalinan Normal', detail: 'Gratis di Puskesmas PONED terdaftar' },
    ],
    ctaPrimary: { text: 'Pelajari Alur Pendaftaran', href: '#alur-faskes' },
    ctaSecondary: { text: 'Kontak Tim Mahasiswa KKN', href: '#darurat' },
  },
  digitalFeatures: [
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
  ],
  emergencyContacts: [
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
  ],
  footer: {
    title: 'POSKO SEHAT BPJS - KKN ARS Cibaregbeg',
    desc: 'Portal resmi edukasi dan advokasi pelayanan kesehatan masyarakat Desa Cibaregbeg oleh Tim Mahasiswa KKN ARS Universitas Indonesia Maju (UIMA).',
    address: 'Kp. Nyalindung / Talaga, Desa Cibaregbeg, Kec. Cibeber, Kab. Cianjur',
    posyanduContact: 'Posko KKN Mahasiswa (0857-1122-3344)',
    posyanduLink: 'https://wa.me/6285711223344',
    tiktok: '@kknars_cibaregbeg',
    tiktokUrl: 'https://www.tiktok.com/@kknars_cibaregbeg',
    instagram: '@kknars_cibaregbeg',
    instagramUrl: 'https://www.instagram.com/kknars_cibaregbeg/',
    copyright: '© 2026 KKN ARS Cibaregbeg UIMA. Hak Cipta Dilindungi.',
  },
};

// Default export compatibility
export const heroStats = smartDigitalData.hero.stats;
export const emergencyContacts = smartDigitalData.emergencyContacts;
export const digitalFeatures = smartDigitalData.digitalFeatures;
