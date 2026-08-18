import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import Eyebrow from '../ui/Eyebrow';
import Stabilo from '../ui/Stabilo';
import ContactCard from '../ContactCard';
import EmergencyAdvisory from '../EmergencyAdvisory';
import TeamMarqueeSlider from '../TeamMarqueeSlider';
import DarkVeil from '../reactbits/DarkVeil';
import { emergencyContacts, emergencyCriteria, kknTeamMembers } from '../../data/bpjsData';

export default function ContactSection({
  contacts = emergencyContacts,
  criteria = emergencyCriteria,
  members = kknTeamMembers,
}) {
  return (
    <SectionWrapper id="darurat" bg="white" className="relative overflow-hidden">
      {/* Decorative DarkVeil Ambient Canvas Layer (React Bits) */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] pointer-events-none opacity-25 rounded-full overflow-hidden blur-2xl z-0">
        <DarkVeil
          hueShift={130}
          noiseIntensity={0.02}
          scanlineIntensity={0.05}
          speed={0.4}
          scanlineFrequency={0.2}
          warpAmount={0.25}
        />
      </div>

      <div className="absolute bottom-12 left-0 w-[450px] h-[450px] pointer-events-none opacity-20 rounded-full overflow-hidden blur-2xl z-0">
        <DarkVeil
          hueShift={130}
          noiseIntensity={0.02}
          scanlineIntensity={0.05}
          speed={0.35}
          scanlineFrequency={0.2}
          warpAmount={0.2}
        />
      </div>

      <SectionHeader
        badge="Pendampingan Warga Desa"
        title={
          <>
            Kontak & Narahubung <Stabilo>Tim Mahasiswa KKN</Stabilo>
          </>
        }
        subtitle="Hubungi tim mahasiswa KKN kami jika Anda memerlukan bantuan informasi, pendampingan alur faskes, atau konsultasi langsung di posko desa."
      />

      {/* 4 Primary Action Cards for Direct Citizen Inquiries */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative z-10">
        {contacts.map((contact, idx) => (
          <ContactCard
            key={contact.id}
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
        ))}
      </div>

      {/* Sub-section: 20 Mahasiswa Tim KKN Continuous Nonstop Slider */}
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

      {/* Editorial Public Health Emergency Protocol */}
      <EmergencyAdvisory criteria={criteria} />
    </SectionWrapper>
  );
}
