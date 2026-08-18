import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';
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
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-8">
            <div className="flex-1 max-w-2xl lg:pr-6">
              <Eyebrow variant="brand">
                Struktur Pembimbing & Tim Mahasiswa
              </Eyebrow>
              <h3 className="font-grotesk text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight mb-2">
                Dosen Pembimbing & <Stabilo>20 Mahasiswa KKN ARS</Stabilo>
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Didampingi oleh Dosen Pembimbing Lapangan & Dosen Pengampu Universitas Indonesia Maju (UIMA) beserta 20 mahasiswa S1 Administrasi Rumah Sakit.
              </p>
            </div>

            {/* Dosen Pembimbing & Pengampu Static Mini Cards on the right side of header text */}
            <div className="flex flex-wrap sm:flex-nowrap gap-4 shrink-0">
              {advisors.map((adv) => (
                <div
                  key={adv.id}
                  className="w-[195px] sm:w-[220px] shrink-0 py-2"
                >
                  <div className="relative bg-white border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 shadow-card-depth flex flex-col justify-between h-full overflow-hidden">
                    {/* Portrait Photo (Clean, no overlay badge) */}
                    <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-3 bg-slate-100 border border-slate-100">
                      <img
                        src={adv.avatar}
                        alt={adv.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    {/* Lecturer Details */}
                    <div>
                      <h4
                        title={adv.name}
                        className="font-grotesk font-bold text-sm sm:text-base text-slate-900 leading-snug line-clamp-1 truncate"
                      >
                        {adv.name}
                      </h4>
                      <div className="text-sm font-semibold text-emerald-600 mt-1 line-clamp-1 truncate">
                        {adv.role}
                      </div>
                      <div className="text-sm text-slate-500 font-normal mt-0.5 line-clamp-1 truncate">
                        {adv.institution}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
