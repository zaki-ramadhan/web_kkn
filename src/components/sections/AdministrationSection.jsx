import React, { useState } from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import Heading from '../ui/Heading';
import Eyebrow from '../ui/Eyebrow';
import Stabilo from '../ui/Stabilo';
import AccordionItem from '../AccordionItem';
import AnimatedContent from '../reactbits/AnimatedContent';
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
          <AnimatedContent distance={30} duration={0.65} delay={0.05}>
            <Eyebrow variant="brand">
              Pusat Solusi Administrasi
            </Eyebrow>

            <Heading as="h2" level="2" color="dark" className="mb-4">
              Panduan Administrasi & <Stabilo>Permasalahan BPJS (FAQ)</Stabilo>
            </Heading>

            <p className="text-slate-700 text-base leading-relaxed mb-6 font-normal">
              Solusi mandiri penanganan kartu nonaktif, program cicilan tunggakan REHAB, pengusulan DTKS bansos desa, hingga kepindahan FKTP domisili.
            </p>

            {/* REHAB Program Highlight Box (Speech Bubble Card) */}
            <div className="relative bg-white border border-slate-200/90 rounded-2xl p-6 shadow-card-depth mb-4">
              <h4 className="font-grotesk font-bold text-base text-slate-900 mb-2">
                Program REHAB (Cicilan Iuran)
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed mb-4 font-normal">
                Bagi peserta PBPU/Mandiri dengan tunggakan lebih dari 3 bulan s.d 24 bulan, Anda dapat mencicil tunggakan hingga 12 tahapan melalui menu REHAB di layanan digital JKN.
              </p>
              <div className="pt-3.5 border-t border-slate-100 text-sm font-semibold text-brand-900">
                <span>Ketentuan Pindah FKTP: Terdaftar minimal 3 bulan</span>
              </div>

              {/* Chat Bubble Tail */}
              <div className="absolute -bottom-2.5 left-8 w-5 h-5 bg-white border-r border-b border-slate-200/90 rotate-45 transform" />
            </div>
          </AnimatedContent>
        </div>

        {/* Right Accordion List */}
        <div className="lg:col-span-7 space-y-4">
          {faqs.map((faq, idx) => (
            <AnimatedContent
              key={faq.id}
              distance={25}
              duration={0.5}
              delay={0.1 + idx * 0.08}
            >
              <AccordionItem
                id={faq.id}
                category={faq.category}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaqId === faq.id}
                onToggle={handleToggleFaq}
              />
            </AnimatedContent>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
