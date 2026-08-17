import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import ContactCard from '../ContactCard';
import EmergencyAdvisory from '../EmergencyAdvisory';
import { emergencyContacts, emergencyCriteria } from '../../data/bpjsData';

export default function ContactSection({
  contacts = emergencyContacts,
  criteria = emergencyCriteria,
}) {
  return (
    <SectionWrapper id="darurat" bg="white">
      <SectionHeader
        badge="Pendampingan Warga Desa"
        title="Kontak & Narahubung Tim Mahasiswa KKN"
        subtitle="Hubungi tim mahasiswa KKN kami jika Anda memerlukan bantuan informasi, pendampingan alur faskes, atau konsultasi langsung di posko desa."
      />

      {/* Student Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Editorial Public Health Emergency Protocol */}
      <EmergencyAdvisory criteria={criteria} />
    </SectionWrapper>
  );
}
