import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import Eyebrow from '../ui/Eyebrow';
import Stabilo from '../ui/Stabilo';
import ContactCard from '../ContactCard';
import EmergencyAdvisory from '../EmergencyAdvisory';
import TeamMarqueeSlider from '../TeamMarqueeSlider';
import AnimatedContent from '../reactbits/AnimatedContent';
import { useVersion } from '../../context/VersionContext';
import { emergencyCriteria, kknTeamMembers } from '../../data/bpjsData';

export default function ContactSection({
  criteria = emergencyCriteria,
  members = kknTeamMembers,
}) {
  const { currentData } = useVersion();
  const contacts = currentData.emergencyContacts;
  return (
    <SectionWrapper id="darurat" bg="white">
      <SectionHeader
        badge="Pendampingan Warga Desa"
        title={
          <>
            Kontak & Narahubung <Stabilo>Tim Mahasiswa KKN</Stabilo>
          </>
        }
        subtitle="Hubungi tim mahasiswa KKN kami jika Anda memerlukan bantuan informasi, pendampingan alur faskes, atau konsultasi langsung di posko desa."
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

      {/* Sub-section: 20 Mahasiswa Tim KKN Continuous Nonstop Slider */}
      <AnimatedContent distance={30} duration={0.65} delay={0.15}>
        <div className="pt-12 pb-8 border-t border-slate-200/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <Eyebrow variant="brand">
                Struktur Tim Mahasiswa
              </Eyebrow>
              <h3 className="font-grotesk text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                20 Mahasiswa Tim KKN ARS Cibaregbeg
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 max-w-md font-normal leading-relaxed">
              Susunan 20 mahasiswa S1 Administrasi Rumah Sakit yang bertugas mendampingi warga di posko pelayanan dan edukasi kesehatan Desa Cibaregbeg.
            </p>
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
