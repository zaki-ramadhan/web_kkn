import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import Eyebrow from '../ui/Eyebrow';
import ContactCard from '../ContactCard';
import EmergencyAdvisory from '../EmergencyAdvisory';
import TeamMarqueeSlider from '../TeamMarqueeSlider';
import { emergencyContacts, emergencyCriteria, kknTeamMembers } from '../../data/bpjsData';

export default function ContactSection({
  contacts = emergencyContacts,
  criteria = emergencyCriteria,
  members = kknTeamMembers,
}) {
  return (
    <SectionWrapper id="darurat" bg="white">
      <SectionHeader
        badge="Pendampingan Warga Desa"
        title="Kontak & Narahubung Tim Mahasiswa KKN"
        subtitle="Hubungi tim mahasiswa KKN kami jika Anda memerlukan bantuan informasi, pendampingan alur faskes, atau konsultasi langsung di posko desa."
      />

      {/* 4 Primary Action Cards for Direct Citizen Inquiries */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

      {/* Sub-section: 15 Mahasiswa Tim KKN Continuous Nonstop Slider */}
      <div className="pt-12 pb-8 border-t border-slate-200/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <Eyebrow variant="brand">
              Struktur Tim Mahasiswa
            </Eyebrow>
            <h3 className="font-grotesk text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              15 Mahasiswa Tim Pengabdian KKN 2026
            </h3>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md font-normal leading-relaxed">
            Susunan 15 mahasiswa lintas program studi yang bertugas mendampingi warga di posko pelayanan dan edukasi kesehatan Desa Sukamakmur.
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
