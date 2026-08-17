import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import ContactCard from '../ContactCard';
import EmergencyAdvisory from '../EmergencyAdvisory';
import TeamGalleryGrid from '../TeamGalleryGrid';
import { emergencyContacts, emergencyCriteria, kknTeamMembers } from '../../data/bpjsData';

export default function ContactSection({
  contacts = emergencyContacts,
  criteria = emergencyCriteria,
  members = kknTeamMembers,
  previewOption = 'option1', // 'option1' | 'option2' | 'option3'
  onSelectOption,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SectionWrapper id="darurat" bg="white">
      <SectionHeader
        badge="Pendampingan Warga Desa"
        title="Kontak & Narahubung Tim Mahasiswa KKN"
        subtitle="Hubungi tim mahasiswa KKN kami jika Anda memerlukan bantuan informasi, pendampingan alur faskes, atau konsultasi langsung di posko desa."
      />

      {/* 4 Primary Contact Action Cards with WhatsApp Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            name={contact.name}
            number={contact.number}
            type={contact.type}
            avatar={contact.avatar}
            desc={contact.desc}
            actionText={contact.actionText}
            link={contact.link}
            urgent={contact.urgent}
          />
        ))}
      </div>

      {/* ====================================================================
          OPSI 1: TERINTEGRASI LANGSUNG DI BAWAH KONTAK
          ==================================================================== */}
      {previewOption === 'option1' && (
        <div className="my-14 pt-12 border-t border-slate-200/80">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="block text-sm font-semibold text-emerald-700 mb-1">
                Struktur Tim Lengkap (Opsi 1)
              </span>
              <h3 className="font-grotesk text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                15 Mahasiswa Tim Pengabdian Desa Sukamakmur
              </h3>
            </div>
            <p className="text-sm text-slate-500 max-w-md font-normal">
              Profil seluruh anggota tim mahasiswa KKN yang bertugas di posko dan lapangan (read-only).
            </p>
          </div>

          <TeamGalleryGrid members={members} />
        </div>
      )}

      {/* ====================================================================
          OPSI 3: TOMBOL EKSPANSI (COLLAPSIBLE DRAWER)
          ==================================================================== */}
      {previewOption === 'option3' && (
        <div className="my-10 pt-8 border-t border-slate-200/80">
          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm transition-all duration-200 shadow-subtle hover:shadow-card-depth cursor-pointer"
            >
              <Users className="w-4 h-4 text-emerald-600" />
              <span>
                {isExpanded
                  ? 'Tutup Galeri Anggota Tim KKN'
                  : 'Lihat Seluruh 15 Anggota Tim Mahasiswa KKN (Opsi 3)'}
              </span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 text-slate-600" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-600" />
              )}
            </button>
          </div>

          {isExpanded && (
            <div className="mt-10 animate-in fade-in slide-in-from-top-3 duration-300">
              <div className="mb-6 text-center">
                <h4 className="font-grotesk font-bold text-xl text-slate-950">
                  Daftar 15 Mahasiswa Tim Pengabdian KKN 2026
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  Bertugas mendampingi warga dalam konsultasi kesehatan dan administrasi BPJS
                </p>
              </div>
              <TeamGalleryGrid members={members} />
            </div>
          )}
        </div>
      )}

      {/* Editorial Public Health Emergency Protocol */}
      <EmergencyAdvisory criteria={criteria} />
    </SectionWrapper>
  );
}
