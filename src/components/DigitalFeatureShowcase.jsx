import React from 'react';
import { ArrowUpRight } from 'lucide-react';

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
    solution: 'Cukup buka layar ponsel dan perlihatkan barcode Kartu Indonesia Sehat (KIS) saat verifikasi di loket. Berkas fotokopi fisik tidak lagi diwajibkan.',
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
    <div className="space-y-8">
      {/* 2x2 Clean Editorial Breakdown: Masalah Lapangan vs Solusi Nyata */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {digitalFeatures.map((item) => (
          <div
            key={item.number}
            className="group relative bg-gradient-to-b from-white via-white to-slate-50/60 border border-slate-200/90 hover:border-brand-400/60 rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-card-depth hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 ease-out overflow-hidden"
          >
            {/* Top shimmer accent on hover */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-lime-400/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div>
              {/* Header Number & Title */}
              <div className="flex items-baseline gap-3.5 mb-5">
                <span className="font-grotesk font-black text-2xl sm:text-3xl text-brand-850 group-hover:text-brand-950 transition-colors shrink-0">
                  {item.number}
                </span>
                <h3 className="font-grotesk font-bold text-lg sm:text-xl text-slate-900 group-hover:text-brand-850 transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Context: Kendala Warga vs Solusi */}
              <div className="space-y-3.5 text-sm sm:text-base leading-relaxed">
                <div className="bg-slate-100/70 border border-slate-200/80 rounded-2xl p-4 text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-1">
                    Kendala yang sering dialami:
                  </strong>
                  {item.problem}
                </div>

                <div className="bg-brand-50/60 border border-brand-200/70 rounded-2xl p-4 text-slate-800">
                  <strong className="text-brand-900 font-bold block mb-1">
                    Kemudahan solusi digital:
                  </strong>
                  {item.solution}
                </div>
              </div>
            </div>

            {/* Practical Regulatory Note */}
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600 font-medium">
              <span className="font-bold text-slate-800">Catatan: </span>
              {item.note}
            </div>
          </div>
        ))}
      </div>

      {/* Grounded Assistance Banner */}
      <div className="relative bg-gradient-to-br from-brand-850 via-brand-900 to-brand-950 text-white rounded-3xl p-7 sm:p-9 border border-brand-700/80 shadow-forest-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 overflow-hidden">
        {/* Top shimmer accent on hover */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-lime-400/60 to-transparent pointer-events-none" />

        <div className="relative z-10">
          <h4 className="font-grotesk font-bold text-lg sm:text-xl text-white mb-1.5">
            Perlu Pendampingan Pembuatan Akun & Pendaftaran Antrean?
          </h4>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl font-normal leading-relaxed">
            Warga yang membutuhkan bantuan pendaftaran akun di ponsel dapat langsung mendatangi Posko Mahasiswa KKN di Balai Desa Sukamakmur pada jam piket harian.
          </p>
        </div>

        <a
          href="#darurat"
          className="relative z-10 px-6 py-3.5 rounded-full bg-lime-400 hover:bg-lime-300 text-brand-950 font-bold text-sm whitespace-nowrap transition-all duration-200 shadow-subtle hover:shadow-elevation flex items-center gap-2 active:scale-95 group/btn shrink-0"
        >
          <span>Jadwal & Kontak Posko</span>
          <ArrowUpRight className="w-4 h-4 group-hover/btn:rotate-45 transition-transform duration-200" />
        </a>
      </div>
    </div>
  );
}
