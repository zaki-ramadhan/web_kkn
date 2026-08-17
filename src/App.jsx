import React, { useState, useMemo } from 'react';
import { Info } from 'lucide-react';

// Centralized Data Layer
import {
  heroStats,
  bpjsCategories,
  registrationSteps,
  serviceFilterTabs,
  puskesmasServices,
  administrativeFaqs,
  emergencyContacts,
  emergencyCriteria,
} from './data/bpjsData';

// UI Primitives
import PillCTAButton from './components/ui/PillCTAButton';
import SectionHeader from './components/ui/SectionHeader';
import CalloutBox from './components/ui/CalloutBox';
import Heading from './components/ui/Heading';
import TabGroup from './components/ui/TabGroup';

// Feature Components (Organisms)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import CategoryCard from './components/CategoryCard';
import StepCard from './components/StepCard';
import BentoServiceCard from './components/BentoServiceCard';
import DigitalFeatureShowcase from './components/DigitalFeatureShowcase';
import AccordionItem from './components/AccordionItem';
import ContactCard from './components/ContactCard';
import EmergencyAdvisory from './components/EmergencyAdvisory';
import NotFound from './components/NotFound';

export default function App() {
  const [activeServiceTab, setActiveServiceTab] = useState('all');
  const [openFaqId, setOpenFaqId] = useState('adm-1');

  // Check 404 fallback for non-root URL path
  const isNotFound =
    typeof window !== 'undefined' &&
    window.location.pathname !== '/' &&
    window.location.pathname !== '';

  if (isNotFound) {
    return <NotFound />;
  }

  // Filter Puskesmas Services by active category tab
  const filteredServices = useMemo(() => {
    if (activeServiceTab === 'all') return puskesmasServices;
    return puskesmasServices.filter((srv) => srv.category === activeServiceTab);
  }, [activeServiceTab]);

  const handleToggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? '' : id));
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-lime-400 selection:text-brand-950">
      {/* Fixed Dynamic Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection stats={heroStats} />

      {/* ====================================================================
          SECTION 1: JENIS-JENIS KEPESERTAAN BPJS
          ==================================================================== */}
      <section
        id="jenis-bpjs"
        className="py-20 bg-gradient-to-b from-slate-50 via-slate-50/80 to-white border-y border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Kategori Kepesertaan"
            title="Jenis-Jenis Kepesertaan BPJS Kesehatan"
            subtitle="Pahami kategori kepesertaan, besaran iuran, hak rawat inap, dan mekanisme pendaftarannya."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center pt-4 pb-4">
            {bpjsCategories.map((cat, idx) => {
              const scaleClass =
                idx === 1
                  ? 'lg:scale-105 z-10'
                  : idx === 0
                  ? 'lg:scale-95 lg:origin-right'
                  : 'lg:scale-95 lg:origin-left';

              return (
                <div key={cat.id} className={`h-full ${scaleClass}`}>
                  <CategoryCard
                    badge={cat.badge}
                    name={cat.name}
                    price={cat.price}
                    priceSub={cat.priceSub}
                    target={cat.target}
                    features={cat.features}
                    ctaText={cat.ctaText}
                    ctaLink={cat.ctaLink}
                    theme={cat.theme}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 2: ALUR PELAYANAN PASIEN BPJS DI PUSKESMAS
          ==================================================================== */}
      <section id="alur-faskes" className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Alur Pelayanan Faskes"
            title="Alur Pelayanan Pasien BPJS di FKTP / Puskesmas"
            subtitle="Ikuti 5 langkah terpadu mulai dari pengambilan antrean hingga pengambilan obat tanpa biaya tambahan."
          />
        </div>

        {/* Continuous 60fps Nonstop Slider Track */}
        <div className="relative w-full overflow-hidden marquee-container py-4 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="flex gap-6 animate-marquee">
            {[...registrationSteps, ...registrationSteps].map((step, idx) => (
              <div key={idx} className="w-[280px] sm:w-[320px] shrink-0">
                <StepCard
                  step={step.step}
                  title={step.title}
                  desc={step.desc}
                  highlight={step.highlight}
                  className="h-full"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CalloutBox
            icon={Info}
            variant="brand"
            title="Prinsip Pelayanan Rujukan Berjenjang"
            description="Pasien BPJS wajib berobat ke Faskes Tingkat Pertama (FKTP) tempat terdaftar terlebih dahulu. Pasien hanya dapat langsung ke UGD Rumah Sakit tanpa surat rujukan jika berada dalam kondisi gawat darurat mengancam jiwa."
            className="mt-12"
          >
            <PillCTAButton href="#layanan-digital" variant="dark" size="sm">
              Cek FKTP Anda di Layanan Digital JKN
            </PillCTAButton>
          </CalloutBox>
        </div>
      </section>

      {/* ====================================================================
          SECTION 3: JENIS PELAYANAN DI PUSKESMAS TERCOVER BPJS
          ==================================================================== */}
      <section
        id="layanan-puskesmas"
        className="py-20 bg-gradient-to-b from-slate-50 via-slate-50/70 to-white border-t border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="block text-sm sm:text-base font-semibold text-brand-800 mb-2.5 tracking-normal">
                Cakupan Manfaat Layanan
              </span>
              <Heading as="h2" level="2" color="dark">
                Jenis Pelayanan Puskesmas Tercover BPJS
              </Heading>
            </div>
            <p className="text-slate-700 text-base max-w-md font-normal leading-relaxed">
              Seluruh tindakan medis dasar, tindakan preventif, dan obat-obatan formularium nasional diberikan 100% tanpa iur biaya bagi peserta aktif.
            </p>
          </div>

          {/* Category Tabs Filter */}
          <TabGroup
            tabs={serviceFilterTabs}
            activeTab={activeServiceTab}
            onTabChange={setActiveServiceTab}
            className="mb-8"
          />

          {/* Bento Showcase Grid */}
          <div className="grid grid-cols-12 gap-6">
            {filteredServices.map((srv) => (
              <BentoServiceCard
                key={srv.id}
                title={srv.title}
                tag={srv.tag}
                desc={srv.desc}
                stat={srv.stat}
                image={srv.image}
                span={srv.span}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 4: FITUR LAYANAN DIGITAL JKN (EDITORIAL MAGAZINE SPREAD)
          ==================================================================== */}
      <section id="layanan-digital" className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Transformasi Layanan Digital"
            title="Fitur & Pemanfaatan Layanan Digital JKN"
            subtitle="Pelajari alur antrean online Puskesmas dari rumah, akses kartu KIS digital, skrining kesehatan mandiri, dan prosedur ganti domisili faskes."
          />

          <DigitalFeatureShowcase />
        </div>
      </section>

      {/* ====================================================================
          SECTION 5: AKTIVASI BPJS MATI & PINDAH DOMISILI FKTP
          ==================================================================== */}
      <section
        id="solusi-adm"
        className="py-20 bg-gradient-to-b from-slate-50 via-slate-50/80 to-white border-t border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Sticky Guide */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
              <span className="block text-sm sm:text-base font-semibold text-brand-800 mb-2.5 tracking-normal">
                Solusi Administrasi BPJS
              </span>

              <Heading as="h2" level="2" color="dark" className="mb-4">
                Aktivasi BPJS Mati & Balik Domisili FKTP
              </Heading>

              <p className="text-slate-700 text-base leading-relaxed mb-6 font-normal">
                Jangan panik jika status kartu Anda nonaktif atau faskes terdaftar masih di kampung halaman lama. Simak solusi mandiri dan ketentuan terbarunya di sini.
              </p>

              {/* REHAB Program Highlight Box */}
              <div className="group relative bg-white border border-slate-200/90 hover:border-brand-400/60 rounded-2xl p-6 shadow-card-depth hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 ease-out overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-lime-400/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <h4 className="font-grotesk font-bold text-base text-slate-900 mb-2 group-hover:text-brand-850 transition-colors">
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
              {administrativeFaqs.map((faq) => (
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
        </div>
      </section>

      {/* ====================================================================
          SECTION 6: KONTAK & NARAHUBUNG TIM MAHASISWA KKN
          ==================================================================== */}
      <section id="darurat" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Pendampingan Warga Desa"
            title="Kontak & Narahubung Tim Mahasiswa KKN"
            subtitle="Hubungi tim mahasiswa KKN kami jika Anda memerlukan bantuan informasi, pendampingan alur faskes, atau konsultasi langsung di posko desa."
          />

          {/* Student Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyContacts.map((contact) => (
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
          <EmergencyAdvisory criteria={emergencyCriteria} />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
