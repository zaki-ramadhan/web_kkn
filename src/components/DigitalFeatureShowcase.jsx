import React, { useState } from 'react';
import { ArrowRight, Clock, MapPin, QrCode, Activity, Check } from 'lucide-react';
import Heading from './ui/Heading';
import PillCTAButton from './ui/PillCTAButton';

const featureList = [
  {
    id: 'antrean',
    number: '01',
    title: 'Booking Antrean Online',
    subtitle: 'Ambil Nomor Faskes dari Rumah',
    desc: 'Warga dapat memilih poli tujuan dan jam kunjungan mulai H-1 dari rumah. Tidak perlu lagi datang subuh dan berdesakan mengantre di loket Puskesmas.',
    tip: 'Pengambilan nomor antrean dibuka mulai pukul 07.00 s.d 15.00 WIB untuk pelayanan hari berikutnya.',
    preview: {
      type: 'ticket',
      faskesName: 'Puskesmas Sukamakmur',
      poliName: 'Poli Umum',
      doctorName: 'dr. Hendra Pratama',
      queueNumber: 'A-014',
      estTime: '09:15 WIB',
      remaining: '2 Pasien di depan Anda',
      status: 'Menunggu Dipanggil',
    },
  },
  {
    id: 'kis',
    number: '02',
    title: 'Kartu KIS Digital (Barcode)',
    subtitle: 'Sah Tanpa Perlu Kartu Fisik',
    desc: 'Cukup tunjukkan barcode kartu KIS di layar ponsel saat registrasi loket Puskesmas atau rumah sakit. Sah berkekuatan hukum tanpa fotokopi berkas fisik.',
    tip: 'Barcode kartu digital dapat di-screenshot dan disimpan di galeri foto untuk akses cepat tanpa sinyal internet.',
    preview: {
      type: 'kisCard',
      holderName: 'Budi Santoso',
      nikNumber: '3201-1204-****-0001',
      bpjsNumber: '0001-2345-****-89',
      fktpName: 'Puskesmas Sukamakmur',
      fktpStatus: 'Peserta Aktif (Kelas 3)',
    },
  },
  {
    id: 'skrining',
    number: '03',
    title: 'Skrining Kesehatan Mandiri',
    subtitle: 'Deteksi Dini Risiko Penyakit',
    desc: 'Kuesioner evaluasi kesehatan singkat untuk mendeteksi potensi risiko hipertensi, diabetes melitus, ginjal, dan jantung sebelum timbul komplikasi berat.',
    tip: 'Dianjurkan diisi minimal 1 kali setiap tahun sebagai rekam medis awal sebelum konsultasi dokter.',
    preview: {
      type: 'screening',
      period: 'Tahun Evaluasi 2026',
      items: [
        { label: 'Diabetes Melitus', status: 'Risiko Rendah', safe: true },
        { label: 'Hipertensi / Tekanan Darah', status: 'Risiko Rendah', safe: true },
        { label: 'Penyakit Jantung Koroner', status: 'Normal Terpantau', safe: true },
        { label: 'Penyakit Ginjal Kronis', status: 'Normal Terpantau', safe: true },
      ],
      recommendation: 'Pertahankan pola hidup sehat dan periksa tensi rutin di Posbindu Desa.',
    },
  },
  {
    id: 'fktp',
    number: '04',
    title: 'Pindah FKTP & Cek Riwayat',
    subtitle: 'Ganti Domisili Faskes Mandiri',
    desc: 'Bagi warga pendatang atau yang faskesnya masih di kampung lama, Anda dapat memindahkan faskes pertama ke Puskesmas Sukamakmur langsung secara mandiri.',
    tip: 'Syarat pindah: telah terdaftar minimal 3 bulan di faskes lama. Perubahan berlaku tanggal 1 bulan berikutnya.',
    preview: {
      type: 'transfer',
      oldFktp: 'Klinik Pratama Luar Kota (Faskes Lama)',
      newFktp: 'Puskesmas Sukamakmur (Faskes Domisili Baru)',
      effectiveDate: 'Aktif per 1 Bulan Depan',
      status: 'Pengajuan Terverifikasi Sistem',
    },
  },
];

export default function DigitalFeatureShowcase() {
  const [activeFeatureId, setActiveFeatureId] = useState('antrean');

  const currentFeature =
    featureList.find((item) => item.id === activeFeatureId) || featureList[0];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-800 shadow-forest-card relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Split-Screen Architecture */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Interactive Feature Nav List */}
        <div className="lg:col-span-6 space-y-3">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Pilih Fitur untuk Melihat Simulasi Layanan:
          </div>

          <div className="space-y-2.5">
            {featureList.map((item) => {
              const isActive = item.id === activeFeatureId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveFeatureId(item.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 border ${
                    isActive
                      ? 'bg-white/12 border-lime-400/60 shadow-lg translate-x-1'
                      : 'bg-white/[0.04] hover:bg-white/[0.08] border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span
                      className={`font-grotesk font-extrabold text-lg shrink-0 ${
                        isActive ? 'text-lime-400' : 'text-slate-500'
                      }`}
                    >
                      {item.number}
                    </span>
                    <div className="min-w-0">
                      <div
                        className={`text-base font-bold truncate leading-tight ${
                          isActive ? 'text-white' : 'text-slate-300'
                        }`}
                      >
                        {item.title}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-400 truncate mt-0.5 font-normal">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isActive
                        ? 'bg-lime-400 text-brand-950 translate-x-1'
                        : 'text-slate-500'
                    }`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Live Interactive Screen Preview Panel */}
        <div className="lg:col-span-6">
          <div className="bg-slate-950/80 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
            {/* Top Bar Indicator */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10 text-xs text-slate-400">
              <span className="font-semibold text-lime-400">
                Fitur #{currentFeature.number} • {currentFeature.title}
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Sistem Aktif 24 Jam
              </span>
            </div>

            {/* Feature Description Header */}
            <h3 className="font-grotesk text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
              {currentFeature.subtitle}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-6">
              {currentFeature.desc}
            </p>

            {/* Dynamic Interactive Mockup Surface based on active tab */}
            {currentFeature.preview.type === 'ticket' && (
              <div className="bg-gradient-to-b from-brand-900 to-brand-950 border border-brand-700/80 rounded-2xl p-5 text-white shadow-inner-glow">
                <div className="flex items-center justify-between text-xs text-slate-300 pb-2 border-b border-white/10">
                  <span>{currentFeature.preview.faskesName}</span>
                  <span>{currentFeature.preview.poliName}</span>
                </div>
                <div className="py-4 text-center">
                  <div className="text-xs text-lime-300 font-semibold uppercase tracking-wider mb-1">
                    Nomor Antrean Anda
                  </div>
                  <div className="font-grotesk text-4xl sm:text-5xl font-black text-lime-400 tracking-tight">
                    {currentFeature.preview.queueNumber}
                  </div>
                  <div className="text-sm text-slate-200 mt-2 font-medium flex items-center justify-center gap-1.5">
                    <Clock className="w-4 h-4 text-lime-400" />
                    <span>Estimasi Jam Pelayanan: {currentFeature.preview.estTime}</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <span>Status: {currentFeature.preview.status}</span>
                  <span className="text-lime-300 font-semibold">
                    {currentFeature.preview.remaining}
                  </span>
                </div>
              </div>
            )}

            {currentFeature.preview.type === 'kisCard' && (
              <div className="bg-gradient-to-br from-emerald-800 via-emerald-900 to-slate-950 border border-emerald-600/50 rounded-2xl p-5 text-white shadow-inner-glow">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div>
                    <div className="font-grotesk font-black text-sm tracking-wider text-lime-300">
                      KARTU INDONESIA SEHAT (KIS)
                    </div>
                    <div className="text-xs text-slate-300">BPJS Kesehatan Digital</div>
                  </div>
                  <QrCode className="w-7 h-7 text-lime-400" />
                </div>
                <div className="py-4 space-y-1.5">
                  <div className="text-lg font-bold text-white">
                    {currentFeature.preview.holderName}
                  </div>
                  <div className="text-xs text-slate-300">
                    No. BPJS: {currentFeature.preview.bpjsNumber}
                  </div>
                  <div className="text-xs text-slate-300">
                    NIK: {currentFeature.preview.nikNumber}
                  </div>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <span>Faskes: {currentFeature.preview.fktpName}</span>
                  <span className="text-lime-300 font-bold">
                    {currentFeature.preview.fktpStatus}
                  </span>
                </div>
              </div>
            )}

            {currentFeature.preview.type === 'screening' && (
              <div className="bg-white/[0.06] border border-white/15 rounded-2xl p-4 sm:p-5 text-white space-y-2.5">
                <div className="text-xs font-semibold text-lime-300 pb-1 border-b border-white/10 flex items-center gap-1.5">
                  <Activity className="w-4 h-4" />
                  <span>Ringkasan Evaluasi: {currentFeature.preview.period}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {currentFeature.preview.items.map((it, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-between"
                    >
                      <span className="text-slate-300">{it.label}</span>
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <Check className="w-3 h-3" /> {it.status}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 text-xs text-slate-300 font-normal">
                  Rekomendasi: {currentFeature.preview.recommendation}
                </div>
              </div>
            )}

            {currentFeature.preview.type === 'transfer' && (
              <div className="bg-white/[0.06] border border-white/15 rounded-2xl p-5 text-white space-y-3">
                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-lime-400" />
                  <span>Status Pemindahan Faskes Tingkat Pertama (FKTP)</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-xs space-y-1.5">
                  <div className="text-slate-400">Dari: {currentFeature.preview.oldFktp}</div>
                  <div className="text-lime-300 font-bold">
                    Menjadi: {currentFeature.preview.newFktp}
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
                  <span className="text-emerald-400 font-semibold">
                    {currentFeature.preview.status}
                  </span>
                  <span>{currentFeature.preview.effectiveDate}</span>
                </div>
              </div>
            )}

            {/* Practical Advice Tip Box */}
            <div className="mt-5 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-slate-300 font-normal">
              <span className="font-bold text-lime-400">Tips Penggunaan: </span>
              {currentFeature.tip}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Assistance Banner */}
      <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div>
          <h4 className="font-grotesk font-bold text-lg text-white mb-1">
            Butuh Bantuan Instalasi & Registrasi Akun Mandiri?
          </h4>
          <p className="text-sm text-slate-300 font-normal">
            Tim Mahasiswa KKN siap membimbing pendaftaran akun dan aktivasi antrean online langsung di Posko Desa Sukamakmur.
          </p>
        </div>
        <div className="shrink-0">
          <PillCTAButton href="#darurat" variant="lime" size="sm">
            Bimbingan di Posko KKN
          </PillCTAButton>
        </div>
      </div>
    </div>
  );
}
