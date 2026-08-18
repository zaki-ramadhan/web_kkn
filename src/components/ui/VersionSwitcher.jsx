import React, { useState } from 'react';
import { Sparkles, History, ChevronRight, Check } from 'lucide-react';
import { useVersion } from '../../context/VersionContext';

export default function VersionSwitcher() {
  const { version, toggleVersion, isNewVersion } = useVersion();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      aria-label="Mode Perbandingan Versi Materi"
      className="fixed bottom-6 left-4 sm:left-6 z-50 flex flex-col items-start gap-2"
    >
      {/* Expanded Quick Info Card (Shows when opened) */}
      {isOpen && (
        <div className="bg-brand-950/95 backdrop-blur-xl border border-white/20 text-white rounded-2xl p-4 shadow-2xl max-w-xs sm:max-w-sm mb-1 text-xs sm:text-sm animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between font-bold text-lime-300 mb-2 pb-2 border-b border-white/10">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-lime-400" />
              Mode Perbandingan Materi
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-0.5"
              title="Tutup info"
            >
              ✕
            </button>
          </div>
          <p className="text-slate-300 leading-relaxed mb-3">
            {isNewVersion ? (
              <>
                <strong className="text-white">Versi Baru (Draft Klien):</strong> Memuat materi <em>SMART DIGITAL</em>, 4 Kontak Institusi (Ibu Risma, Puskesmas, BPJS 165, Dinkes), 5 Fitur Digital, dan tombol Tanya Kader Posyandu.
              </>
            ) : (
              <>
                <strong className="text-white">Versi Lama:</strong> Memuat materi awal <em>Posko Sehat BPJS</em>, 4 Kontak Mahasiswa KKN, dan 4 Fitur Digital awal.
              </>
            )}
          </p>
          <div className="text-[11px] text-slate-400 bg-black/30 rounded-lg p-2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0" />
            <span>Klik tab untuk membandingkan perubahan langsung di layar.</span>
          </div>
        </div>
      )}

      {/* Floating Main Pill Switcher */}
      <div className="bg-brand-950/90 backdrop-blur-md border border-brand-700/80 rounded-full p-1.5 shadow-forest-card flex items-center gap-1">
        {/* Toggle Button: New Version */}
        <button
          type="button"
          onClick={() => toggleVersion('new')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
            isNewVersion
              ? 'bg-lime-400 text-brand-950 shadow-sm'
              : 'text-slate-300 hover:text-white hover:bg-white/10'
          }`}
        >
          <Sparkles className={`w-3.5 h-3.5 ${isNewVersion ? 'text-brand-950' : 'text-lime-400'}`} />
          <span>SMART DIGITAL <span className="hidden sm:inline font-normal opacity-80">(Baru)</span></span>
          {isNewVersion && <Check className="w-3.5 h-3.5 shrink-0" />}
        </button>

        {/* Toggle Button: Old Version */}
        <button
          type="button"
          onClick={() => toggleVersion('old')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
            !isNewVersion
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-300 hover:text-white hover:bg-white/10'
          }`}
        >
          <History className={`w-3.5 h-3.5 ${!isNewVersion ? 'text-brand-900' : 'text-slate-400'}`} />
          <span>Versi Lama</span>
          {!isNewVersion && <Check className="w-3.5 h-3.5 shrink-0" />}
        </button>

        {/* Info Toggle Trigger */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center text-xs font-bold transition-colors ml-0.5"
          title="Buka ringkasan perbandingan"
        >
          ?
        </button>
      </div>
    </aside>
  );
}
