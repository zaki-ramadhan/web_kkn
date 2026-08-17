import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import TeamGalleryGrid from '../TeamGalleryGrid';
import { kknTeamMembers } from '../../data/bpjsData';

export default function TeamSection({ members = kknTeamMembers }) {
  return (
    <SectionWrapper id="tim-kkn" bg="slate" className="border-t border-slate-200/80">
      <SectionHeader
        badge="Struktur Tim Mahasiswa"
        title="Tim Pengabdian KKN Mahasiswa 2026"
        subtitle="Mengenal 15 mahasiswa lintas program studi yang bertugas mendampingi warga dan posko kesehatan di Desa Sukamakmur."
      />

      <TeamGalleryGrid members={members} />
    </SectionWrapper>
  );
}
