import React from 'react';

const digitalFeatures = [
  {
    number: '01',
    title: 'Pendaftaran Antrean Online Tanpa Antre Subuh',
    problem: 'Warga tidak perlu lagi datang subuh jam 05.00 pagi hanya untuk berebut nomor antrean fisik di loket Puskesmas.',
    solution: 'Ambil nomor antrean mandiri dari rumah mulai H-1 sebelum jadwal kunjungan. Anda cukup datang 15 menit sebelum estimasi jam pelayanan yang tertera di ponsel.',
    note: 'Nomor antrean online langsung terhubung ke sistem antrean poli Puskesmas Sukamakmur.',
  },
  {
    number: '02',
    title: 'Kartu KIS Digital Pengganti Kartu Fisik',
    problem: 'Kartu fisik sering hilang, rusak di dompet, tertinggal di rumah, atau warga merasa wajib membawa fotokopi kartu.',
    solution: 'Cukup buka layar ponsel dan perlihatkan barcode Kartu Indonesia Sehat (KIS) saat verifikasi di loket. Berkas fisik tidak lagi diwajibkan.',
    note: 'Barcode kartu digital memiliki kekuatan hukum resmi dan wajib diterima di seluruh faskes mitra BPJS.',
  },
  {
    number: '03',
    title: 'Skrining Kesehatan Mandiri untuk Deteksi Dini',
    problem: 'Penyakit tidak menular seperti darah tinggi (hipertensi) dan diabetes sering kali baru disadari saat sudah terjadi komplikasi berat.',
    solution: 'Isi kuesioner evaluasi kesehatan singkat secara berkala 1 kali per tahun untuk mengetahui tingkat risiko kesehatan Anda sebelum berkonsultasi dengan dokter.',
    note: 'Hasil skrining otomatis tersimpan di rekam medis Puskesmas sebagai acuan pemeriksaan dokter.',
  },
  {
    number: '04',
    title: 'Pindah Faskes Tingkat Pertama (FKTP) Mandiri',
    problem: 'Warga pendatang atau yang faskesnya masih terdaftar di luar kota harus mengurus perpindahan faskes ke kantor cabang BPJS.',
    solution: 'Pindahkan faskes pertama Anda ke Puskesmas Sukamakmur langsung secara mandiri tanpa perlu surat pengantar dari desa asal.',
    note: 'Syarat mutasi: sudah terdaftar minimal 3 bulan di faskes lama. Perubahan aktif per tanggal 1 bulan berikutnya.',
  },
];

export default function DigitalFeatureShowcase() {
  return (
    <div className="space-y-6">
      {/* 2x2 Clean Editorial Breakdown: Masalah Nyata vs Solusi Digital */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {digitalFeatures.map((item) => (
          <div
            key={item.number}
            className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-colors hover:bg-slate-50 hover:border-slate-300"
          >
            <div>
              {/* Header Number & Title */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-grotesk font-black text-2xl text-brand-850 shrink-0">
                  {item.number}
                </span>
                <h3 className="font-grotesk font-bold text-lg sm:text-xl text-slate-900 leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Context: Kendala Warga vs Solusi */}
              <div className="space-y-3 text-sm sm:text-base leading-relaxed">
                <div className="text-slate-600 bg-white p-3.5 rounded-xl border border-slate-200/70">
                  <strong className="text-slate-800 font-semibold block mb-1">
                    Kendala yang sering dialami:
                  </strong>
                  {item.problem}
                </div>

                <div className="text-slate-700 pt-1">
                  <strong className="text-brand-900 font-semibold block mb-1">
                    Kemudahan layanan digital:
                  </strong>
                  {item.solution}
                </div>
              </div>
            </div>

            {/* Practical Regulatory Note */}
            <div className="mt-5 pt-4 border-t border-slate-200/80 text-xs sm:text-sm text-slate-600 font-medium">
              <span className="font-bold text-slate-800">Catatan: </span>
              {item.note}
            </div>
          </div>
        ))}
      </div>

      {/* Grounded Assistance Banner */}
      <div className="bg-brand-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-brand-800">
        <div>
          <h4 className="font-grotesk font-bold text-lg text-white mb-1.5">
            Perlu Pendampingan Pembuatan Akun & Pendaftaran Antrean?
          </h4>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl font-normal leading-relaxed">
            Warga yang membutuhkan bantuan pendaftaran akun di ponsel dapat langsung mendatangi Posko Mahasiswa KKN di Balai Desa Sukamakmur pada jam piket harian.
          </p>
        </div>
        <a
          href="#darurat"
          className="px-6 py-3 rounded-full bg-lime-400 hover:bg-lime-300 text-brand-950 font-bold text-sm whitespace-nowrap transition-colors shrink-0"
        >
          Lihat Jadwal & Kontak Posko
        </a>
      </div>
    </div>
  );
}
