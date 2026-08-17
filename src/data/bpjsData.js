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
    title: 'Ambil Antrean Online / Offline',
    desc: 'Ambil nomor antrean secara online sebelum datang atau langsung di mesin antrean Puskesmas.',
    highlight: 'Hemat waktu antrean',
  },
  {
    step: '02',
    title: 'Verifikasi di Loket Pendaftaran',
    desc: 'Tunjukkan KTP atau barcode Kartu Indonesia Sehat (KIS) digital. Tidak perlu fotokopi berkas tebal.',
    highlight: 'Cukup tunjukkan NIK',
  },
  {
    step: '03',
    title: 'Pemeriksaan Medis & Dokter',
    desc: 'Pemeriksaan tanda vital oleh perawat, dilanjutkan konsultasi & diagnosa oleh dokter umum/gigi.',
    highlight: 'Sesuai poli tujuan',
  },
  {
    step: '04',
    title: 'Pengambilan Obat di Farmasi',
    desc: 'Ambil obat sesuai resep dokter di instalasi farmasi Puskesmas. Seluruh obat formularium 100% gratis.',
    highlight: 'Tanpa iur biaya obat',
  },
  {
    step: '05',
    title: 'Rujukan Berjenjang (Jika Diperlukan)',
    desc: 'Jika memerlukan tindakan spesialis, dokter menerbitkan surat rujukan online otomatis ke Rumah Sakit rekanan.',
    highlight: 'Rujukan terintegrasi',
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
    answer:
      'Untuk BPJS Mandiri: Cek total tagihan di portal layanan digital JKN. Jika tunggakan memberatkan, manfaatkan Program REHAB (Rencana Pembayaran Bertahap) untuk mencicil tagihan hingga 12 bulan. Setelah cicilan lunas atau tagihan dibayar penuh via ATM/e-wallet, status kartu otomatis aktif kembali dalam 1x24 jam.',
  },
  {
    id: 'adm-2',
    category: 'Aktivasi BPJS Mati',
    question: 'Kartu BPJS PBI (Bantuan Pemerintah) dinonaktifkan, bagaimana solusinya?',
    answer:
      'Peserta PBI dinonaktifkan jika data NIK tidak padan data kependudukan atau terhapus dari daftar DTKS. Langkah solusi: (1) Datang ke kantor kelurahan setempat membawa KTP dan KK untuk verifikasi data, (2) Mengajukan usulan data ulang ke balai desa, atau (3) Beralih menjadi peserta BPJS Mandiri Kelas 3 jika mampu secara mandiri.',
  },
  {
    id: 'adm-3',
    category: 'Aktivasi BPJS Mati',
    question: 'Saya baru berhenti bekerja dari kantor, bagaimana cara mengaktifkan BPJS kembali?',
    answer:
      'Setelah dinonaktifkan oleh perusahaan lama, Anda dapat beralih ke segmen BPJS Mandiri (PBPU) tanpa masa tunggu denda. Buka menu "Perubahan Data Peserta" -> Pilih "Pindah Segmen Mandiri", tentukan kelas rawat inap yang diinginkan, lalu lakukan pembayaran iuran pertama.',
  },
  {
    id: 'adm-4',
    category: 'Pindah Domisili & FKTP',
    question: 'Bagaimana cara pindah FKTP (Puskesmas/Klinik) ke domisili tempat tinggal baru?',
    answer:
      'Syarat utama: Telah terdaftar minimal 3 bulan di FKTP lama (kecuali jika pindah domisili KK resmi yang dibuktikan surat pindah). Cara pindah: Buka menu "Perubahan Data Peserta" -> Klik "Fasilitas Kesehatan Tingkat Pertama" -> Pilih Provinsi, Kab/Kota, dan Puskesmas tujuan -> Simpan. Perubahan berlaku per tanggal 1 bulan berikutnya.',
  },
  {
    id: 'adm-5',
    category: 'Pindah Domisili & FKTP',
    question: 'Apakah bisa berobat di Puskesmas lain jika sedang di luar kota tanpa pindah FKTP?',
    answer:
      'Bisa! Peserta BPJS berhak mendapatkan pelayanan di luar FKTP terdaftarnya maksimal 3 kali kunjungan dalam 1 bulan pada faskes yang sama. Jika kondisi darurat (UGD), Anda bisa langsung datang ke faskes terdekat mana saja tanpa surat rujukan.',
  },
];

// 5. Kontak Narahubung Tim Mahasiswa KKN (Item #7)
export const emergencyContacts = [
  {
    id: 'c1',
    name: 'M. Raditya Pratama',
    number: '0821-****-01',
    type: 'Koordinator Desa KKN',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=160&h=160&q=80&fm=webp',
    desc: 'Narahubung utama mahasiswa KKN untuk koordinasi posko, pendampingan warga desa, dan informasi kegiatan pengabdian.',
    actionText: 'Chat WA Kordes',
    link: 'https://wa.me/6282145678901?text=Halo%20Kordes%20Raditya%2C%20saya%20warga%20butuh%20informasi%20bantuan%20kesehatan',
    urgent: true,
  },
  {
    id: 'c2',
    name: 'Anindya Kirana',
    number: '0812-****-90',
    type: 'Divisi Kesehatan KKN',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&h=160&q=80&fm=webp',
    desc: 'Konsultasi alur berobat Puskesmas, panduan syarat re-aktivasi BPJS, dan edukasi jadwal posyandu balita & lansia.',
    actionText: 'Chat Divisi Kesehatan',
    link: 'https://wa.me/6281234567890?text=Halo%20Kak%20Anindya%20Divisi%20Kesehatan%2C%20saya%20ingin%20tanya%20prosedur%20faskes',
    urgent: false,
  },
  {
    id: 'c3',
    name: 'Piket Posko Induk KKN',
    number: '0857-****-44',
    type: 'Layanan Balai Desa',
    avatar: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=160&h=160&q=80&fm=webp',
    desc: 'Piket posko mahasiswa di Balai Pertemuan Desa untuk bantuan konsultasi langsung, panduan antrean online, dan layanan informasi.',
    actionText: 'Hubungi Posko KKN',
    link: 'https://wa.me/6285711223344?text=Halo%20Piket%20Posko%20KKN%2C%20saya%20ingin%20konsultasi%20di%20posko',
    urgent: true,
  },
  {
    id: 'c4',
    name: 'Fauzan Ramadhan',
    number: '0813-****-66',
    type: 'Pendamping Lapangan',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80&fm=webp',
    desc: 'Pendampingan langsung bagi lansia dan warga yang membutuhkan bantuan teknis alur pelayanan dan administrasi kartu.',
    actionText: 'Chat Pendamping Warga',
    link: 'https://wa.me/6281399887766?text=Halo%20Kak%20Fauzan%2C%20saya%20butuh%20pendampingan%20administrasi',
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
