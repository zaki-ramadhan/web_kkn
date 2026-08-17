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
          text: 'Lakukan pembayaran tagihan penuh atau angsuran pertama via ATM, autodebet bank, atau minimarket.',
        },
      ],
      note: 'Kartu BPJS otomatis aktif kembali maksimal 1x24 jam setelah pembayaran atau angsuran pertama diverifikasi oleh sistem perbankan.',
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
      note: 'Pengaktifan kembali PBI bansos sepenuhnya bergantung pada penetapan kuota Kemensos RI dan verifikasi Dinas Sosial setempat.',
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
          text: 'Lakukan pembayaran iuran pertama untuk mengaktifkan kembali kartu secara langsung tanpa masa tunggu 14 hari.',
        },
      ],
      note: 'Pastikan pengalihan segmen dilakukan dalam kurun waktu 30 hari sejak tanggal nonaktif dari perusahaan untuk menghindari tunggakan kumulatif.',
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
          text: 'Tentukan Puskesmas Sukamakmur sebagai fasilitas kesehatan tingkat pertama yang baru untuk seluruh anggota keluarga.',
        },
        {
          title: 'Masa Berlaku Aktif',
          text: 'Perubahan faskes baru akan mulai berlaku efektif per tanggal 1 pada bulan berikutnya.',
        },
      ],
      note: 'Selama masa tunggu hingga tanggal 1 bulan berikutnya, Anda tetap dapat berobat di faskes lama atau memanfaatkan kuota berobat luar faskes.',
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
      note: 'Jika Anda menetap lebih dari 3 bulan di domisili baru, sangat dianjurkan untuk memindahkan FKTP secara permanen agar pelayanan lebih optimal.',
    },
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
