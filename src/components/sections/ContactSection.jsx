import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import Eyebrow from '../ui/Eyebrow';
import Stabilo from '../ui/Stabilo';
import ContactCard from '../ContactCard';
import TeamMarqueeSlider from '../TeamMarqueeSlider';
import EmergencyAdvisory from '../EmergencyAdvisory';
import AnimatedContent from '../reactbits/AnimatedContent';
import {
  emergencyContacts,
  kknTeamMembers,
  emergencyCriteria,
  academicAdvisors
} from '../../data/bpjsData';

export default function ContactSection({
  contacts = emergencyContacts,
  members = kknTeamMembers,
  criteria = emergencyCriteria,
  advisors = academicAdvisors,
}) {
  return (
    <SectionWrapper id="darurat" bg="white">
      <SectionHeader
        badge="Pusat Layanan & Narahubung"
        title={
          <>
            Pusat Informasi & <Stabilo>Kontak Resmi</Stabilo>
          </>
        }
        subtitle="Hubungi narahubung resmi Kader Posyandu Sirna Asih, Puskesmas Cibeber/Cibaregbeg, Care Center BPJS 165, dan Dinas Kesehatan Cianjur."
      />

      {/* Grid 4 Kartu Narahubung Resmi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 pt-2 items-stretch">
        {contacts.map((contact, idx) => (
          <AnimatedContent
            key={contact.id}
            distance={30}
            duration={0.6}
            delay={idx * 0.08}
            className="h-full"
          >
            <ContactCard
              index={idx}
              name={contact.name}
              number={contact.number}
              type={contact.type}
              avatar={contact.avatar}
              desc={contact.desc}
              actionText={contact.actionText}
              link={contact.link}
              urgent={contact.urgent}
            />
          </AnimatedContent>
        ))}
      </div>

      {/* Sub-section: 20 Mahasiswa Tim KKN Continuous Nonstop Slider & Dosen Pembimbing */}
      <AnimatedContent distance={30} duration={0.65} delay={0.15}>
        <div className="pt-12 pb-8 border-t border-slate-200/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
            <div>
              <Eyebrow variant="brand">
                Struktur Tim Mahasiswa & Dosen Pembimbing
              </Eyebrow>
              <h3 className="font-grotesk text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                20 Mahasiswa Tim KKN ARS Cibaregbeg
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 max-w-md font-normal leading-relaxed">
              Susunan 20 mahasiswa S1 Administrasi Rumah Sakit yang bertugas mendampingi warga di posyandu pelayanan dan edukasi kesehatan Desa Cibaregbeg.
            </p>
          </div>

          {/* [OPSI 2] Badge Pill Ringkas */}
          <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-dashed border-slate-300">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              Opsi 2: Badge Pill Ringkas
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-emerald-300 text-xs sm:text-sm font-semibold text-emerald-950 shadow-2xs">
                <GraduationCap className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>DPL:</strong> {advisors[0]?.name}</span>
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-emerald-300 text-xs sm:text-sm font-semibold text-emerald-950 shadow-2xs">
                <BookOpen className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Dosen Pengampu:</strong> {advisors[1]?.name}</span>
              </span>
            </div>
          </div>

          {/* [OPSI 1] Kartu Kehormatan Akademik (Grid 2 Kolom) */}
          <div className="mb-8 p-4 rounded-2xl bg-slate-50 border border-dashed border-slate-300">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3">
              Opsi 1: Kartu Kehormatan Akademik (2 Kolom)
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3.5 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-card-depth hover:border-emerald-400/80 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200/80 flex items-center justify-center font-bold shrink-0 group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-wider text-emerald-700 leading-tight mb-0.5">
                    Dosen Pembimbing Lapangan (DPL)
                  </span>
                  <h4 className="font-grotesk font-bold text-sm sm:text-base text-slate-900 leading-snug">
                    {advisors[0]?.name}
                  </h4>
                  <span className="block text-xs text-slate-500 font-normal">
                    {advisors[0]?.institution}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-card-depth hover:border-emerald-400/80 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200/80 flex items-center justify-center font-bold shrink-0 group-hover:scale-105 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-wider text-emerald-700 leading-tight mb-0.5">
                    Dosen Pengampu Mata Kuliah
                  </span>
                  <h4 className="font-grotesk font-bold text-sm sm:text-base text-slate-900 leading-snug">
                    {advisors[1]?.name}
                  </h4>
                  <span className="block text-xs text-slate-500 font-normal">
                    {advisors[1]?.institution}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 60fps Continuous Marquee Slider with Edge Fade & Hover Pause */}
          <TeamMarqueeSlider members={members} />
        </div>
      </AnimatedContent>

      {/* Editorial Public Health Emergency Protocol */}
      <AnimatedContent distance={35} duration={0.7} delay={0.2}>
        <EmergencyAdvisory criteria={criteria} />
      </AnimatedContent>
    </SectionWrapper>
  );
}
