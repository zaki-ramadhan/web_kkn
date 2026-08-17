import React, { useState } from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import Heading from '../ui/Heading';
import Eyebrow from '../ui/Eyebrow';
import Stabilo from '../ui/Stabilo';
import TopShimmer from '../ui/TopShimmer';
import AccordionItem from '../AccordionItem';
import { administrativeFaqs } from '../../data/bpjsData';

export default function AdministrationSection({ faqs = administrativeFaqs }) {
  const [openFaqId, setOpenFaqId] = useState('adm-1');

  const handleToggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? '' : id));
  };

  return (
    <SectionWrapper id="solusi-adm" bg="slateTop">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Sticky Guide */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
          <Eyebrow variant="brand">
            Solusi Administrasi BPJS
          </Eyebrow>

          <Heading as="h2" level="2" color="dark" className="mb-4">
            Aktivasi <Stabilo>BPJS Mati</Stabilo> & Balik Domisili FKTP
          </Heading>

          <p className="text-slate-700 text-base leading-relaxed mb-6 font-normal">
            Jangan panik jika status kartu Anda nonaktif atau faskes terdaftar masih di kampung halaman lama. Simak solusi mandiri dan ketentuan terbarunya di sini.
          </p>

          {/* REHAB Program Highlight Box (Static Informational Card) */}
          <div className="relative bg-white border border-slate-200/90 rounded-2xl p-6 shadow-card-depth overflow-hidden">
            <h4 className="font-grotesk font-bold text-base text-slate-900 mb-2">
              Program REHAB (Cicilan Iuran)
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed mb-4 font-normal">
              Bagi peserta PBPU/Mandiri dengan tunggakan lebih dari 3 bulan s.d 24 bulan, Anda dapat mencicil tunggakan hingga 12 tahapan melalui menu REHAB di layanan digital JKN.
            </p>
            <div className="pt-3.5 border-t border-slate-100 text-sm font-bold text-brand-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-700" />
              <span>Ketentuan Pindah FKTP: Terdaftar minimal 3 bulan</span>
            </div>
          </div>
        </div>

        {/* Right Accordion List */}
        <div className="lg:col-span-7 space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              id={faq.id}
              category={faq.category}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFaqId === faq.id}
              onToggle={handleToggleFaq}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
