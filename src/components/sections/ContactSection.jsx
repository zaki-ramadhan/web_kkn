import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import Eyebrow from '../ui/Eyebrow';
import Stabilo from '../ui/Stabilo';
import ContactCard from '../ContactCard';
import EmergencyAdvisory from '../EmergencyAdvisory';
import TeamMarqueeSlider from '../TeamMarqueeSlider';
import AnimatedContent from '../reactbits/AnimatedContent';
import {
  emergencyContacts,
  emergencyCriteria,
  kknTeamMembers,
  academicAdvisors,
} from '../../data/bpjsData';

export default function ContactSection({
  contacts = emergencyContacts,
  criteria = emergencyCriteria,
  members = kknTeamMembers,
  advisors = academicAdvisors,
}) {
  return (
    <SectionWrapper id="darurat" bg="white">
      <SectionHeader
        badge="Pusat Layanan & Narahubung"
        title={
          <>
            Pusat Informasi & <Stabilo>Kontak Darurat</Stabilo>
          </>
        }
        subtitle="Hubungi narahubung resmi Kader Posyandu Sirna Asih, Puskesmas Cibeber/Cibaregbeg, Care Center BPJS 165, dan Dinas Kesehatan Cianjur."
      />

      {/* 4 Primary Action Cards for Direct Citizen Inquiries with Staggered Scroll-Reveal Animations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {contacts.map((contact, idx) => (
          <AnimatedContent
            key={contact.id}
            distance={35}
            duration={0.6}
            delay={idx * 0.12}
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

      {/* Sub-section: Struktur Pembimbing & Tim Mahasiswa */}
      <AnimatedContent distance={30} duration={0.65} delay={0.15}>
        <div className="pt-12 pb-8 border-t border-slate-200/80">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6">
            <div>
              <Eyebrow variant="brand">
                Struktur Pembimbing & Tim Mahasiswa
              </Eyebrow>
              <h3 className="font-grotesk text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight mb-2">
                Dosen Pembimbing & 20 Mahasiswa KKN ARS
              </h3>
              <p className="text-sm sm:text-base text-slate-600 max-w-lg font-normal leading-relaxed">
                Susunan 20 mahasiswa S1 Administrasi Rumah Sakit yang bertugas mendampingi warga di posyandu pelayanan dan edukasi kesehatan Desa Cibaregbeg.
              </p>
            </div>

            {/* OPSI 1: Editorial Academic Mentorship Lockup (Clean, Human & Prestigious) */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:px-5 sm:py-3.5 flex flex-col sm:flex-row sm:items-center gap-4 text-xs sm:text-sm shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100/80 text-emerald-800 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wide block">
                    Dosen Pembimbing Lapangan (DPL)
                  </span>
                  <span className="font-bold text-slate-900 block leading-tight">
                    {advisors[0]?.name}
                  </span>
                </div>
              </div>

              <div className="hidden sm:block w-px h-9 bg-slate-200" />

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100/80 text-emerald-800 flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wide block">
                    Dosen Pengampu Mata Kuliah
                  </span>
                  <span className="font-bold text-slate-900 block leading-tight">
                    {advisors[1]?.name}
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
