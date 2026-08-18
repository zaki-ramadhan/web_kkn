import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import Eyebrow from '../ui/Eyebrow';
import Stabilo from '../ui/Stabilo';
import TopShimmer from '../ui/TopShimmer';
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
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <Eyebrow variant="brand">
                Struktur Pembimbing & Tim Mahasiswa
              </Eyebrow>
              <h3 className="font-grotesk text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                Dosen Pembimbing & 20 Mahasiswa KKN ARS
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 max-w-md font-normal leading-relaxed">
              Didampingi oleh Dosen Pembimbing Lapangan & Dosen Pengampu Universitas Indonesia Maju (UIMA) beserta 20 mahasiswa S1 Administrasi Rumah Sakit.
            </p>
          </div>

          {/* Dosen Pembimbing Lapangan (DPL) & Dosen Pengampu Mata Kuliah Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mb-8">
            {advisors.map((adv) => (
              <div
                key={adv.id}
                className="group relative bg-white border border-slate-200/90 hover:border-emerald-400 rounded-2xl p-4 sm:p-5 transition-all duration-300 ease-out shadow-card-depth hover:-translate-y-1 overflow-hidden flex items-center gap-4"
              >
                <TopShimmer variant="lime" />
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 p-1.5 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={adv.avatar}
                    alt={adv.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded-md bg-brand-950/90 backdrop-blur-xs text-[10px] font-bold text-lime-400 border border-lime-400/30">
                    Dosen
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-[11px] font-bold tracking-tight mb-1">
                    {adv.role}
                  </span>
                  <h4
                    title={adv.name}
                    className="font-grotesk font-bold text-sm sm:text-base text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug"
                  >
                    {adv.name}
                  </h4>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    {adv.institution}
                  </div>
                </div>
              </div>
            ))}
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
