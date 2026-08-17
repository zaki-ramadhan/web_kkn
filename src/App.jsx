import React, { useState, useMemo } from 'react';
import {
  Info
} from 'lucide-react';

// Centralized Data Layer
import {
  heroStats,
  bpjsCategories,
  registrationSteps,
  serviceFilterTabs,
  puskesmasServices,
  administrativeFaqs,
  emergencyContacts
} from './data/bpjsData';

// UI Primitive Components (Atomic)
import PillCTAButton from './components/ui/PillCTAButton';
import AvatarStack from './components/ui/AvatarStack';
import SectionHeader from './components/ui/SectionHeader';
import StatCard from './components/ui/StatCard';
import CalloutBox from './components/ui/CalloutBox';
import Heading from './components/ui/Heading';
import TabGroup from './components/ui/TabGroup';

// Feature Components (Molecules / Organisms)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CategoryCard from './components/CategoryCard';
import StepCard from './components/StepCard';
import BentoServiceCard from './components/BentoServiceCard';
import DigitalFeatureShowcase from './components/DigitalFeatureShowcase';
import AccordionItem from './components/AccordionItem';
import ContactCard from './components/ContactCard';

export default function App() {
  const [activeServiceTab, setActiveServiceTab] = useState('all');
  const [openFaqId, setOpenFaqId] = useState('adm-1');

  // Filter Puskesmas Services
  const filteredServices = useMemo(() => {
    if (activeServiceTab === 'all') return puskesmasServices;
    return puskesmasServices.filter((srv) => srv.category === activeServiceTab);
  }, [activeServiceTab]);

  const handleToggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? '' : id));
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-lime-400 selection:text-brand-950">
      {/* Dynamic Glassmorphism Fixed Header */}
      <Navbar />

      {/* ====================================================================
          HERO SECTION (High Visibility Dark Cover Photo & Text Legibility)
          ==================================================================== */}
      <section id="hero-section" className="relative pt-28 pb-24 sm:pt-32 md:pt-36 md:pb-28 overflow-hidden bg-brand-950 text-white">
        {/* Background Image with Crisp Object-Cover and Increased Clarity */}
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&h=1080&q=75&fm=webp"
          alt="Layanan Kesehatan Masyarakat"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-45 pointer-events-none"
        />

        {/* Multi-layer Dark Gradient Scrim for Guaranteed Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/90 via-brand-950/75 to-brand-950 pointer-events-none" />

        {/* Ambient Center Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-lime-400/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Plain Text Eyebrow (No chip, no blinking dot) */}
          <span className="inline-block text-sm sm:text-base font-semibold text-lime-400 mb-4 tracking-normal drop-shadow-sm">
            Program Pengabdian Mahasiswa KKN 2026 • Desa Sukamakmur
          </span>

          {/* Heading */}
          <Heading as="h1" level="1" color="light" className="max-w-4xl mx-auto mb-6 text-balance text-white leading-tight drop-shadow-md">
            Panduan Lengkap Layanan{' '}
            <span className="text-lime-300 underline decoration-lime-400 decoration-4 underline-offset-8">
              BPJS Kesehatan
            </span>{' '}
            & Puskesmas
          </Heading>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-100 max-w-2xl mx-auto leading-relaxed mb-8 text-balance font-normal drop-shadow-sm">
            Media edukasi kesehatan dari mahasiswa KKN untuk warga: alur berobat mudah tanpa antre panjang,
            cara re-aktivasi kartu nonaktif, prosedur pindah faskes domisili, dan pemanfaatan antrean online.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <PillCTAButton href="#alur-faskes" variant="lime" size="lg">
              Pelajari Alur Pendaftaran
            </PillCTAButton>
            <PillCTAButton href="#darurat" variant="light" size="lg">
              Kontak Tim Mahasiswa KKN
            </PillCTAButton>
          </div>

          {/* Avatar stack (Dark variant) */}
          <div className="flex justify-center mb-14">
            <AvatarStack variant="dark" label="1.450+ Warga Terbantu Program Edukasi Mahasiswa" />
          </div>

          {/* 4 Hero Stat Capsules (Pronounced Distorted Slider Arc Effect) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-left items-stretch pt-3 pb-2">
            {heroStats.map((item, idx) => {
              const distortionClass =
                idx === 0
                  ? 'md:-rotate-6 md:-translate-x-5 md:scale-95 md:origin-right hover:md:rotate-0 hover:md:translate-x-0 hover:md:scale-100 hover:md:opacity-100 transition-all duration-300'
                  : idx === 3
                  ? 'md:rotate-6 md:translate-x-5 md:scale-95 md:origin-left hover:md:rotate-0 hover:md:translate-x-0 hover:md:scale-100 hover:md:opacity-100 transition-all duration-300'
                  : idx === 1
                  ? 'md:-rotate-1 md:-translate-x-1.5 hover:md:rotate-0 hover:md:translate-x-0 transition-all duration-300'
                  : 'md:rotate-1 md:translate-x-1.5 hover:md:rotate-0 hover:md:translate-x-0 transition-all duration-300';

              return (
                <div key={item.id} className={`h-full ${distortionClass}`}>
                  <StatCard
                    variant="dark"
                    value={item.value}
                    label={item.label}
                    detail={item.detail}
                    className="h-full"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 1: JENIS-JENIS BPJS (Item #3)
          ==================================================================== */}
      <section id="jenis-bpjs" className="py-20 bg-gradient-to-b from-slate-50 via-slate-50/80 to-white border-y border-slate-200/80">
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
                  ? 'lg:scale-105 z-10 hover:lg:scale-[1.07] transition-transform duration-300'
                  : idx === 0
                  ? 'lg:scale-95 lg:origin-right hover:lg:scale-100 transition-transform duration-300'
                  : 'lg:scale-95 lg:origin-left hover:lg:scale-100 transition-transform duration-300';

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
          SECTION 2: ALUR PENDAFTARAN PASIEN BPJS DI PUSKESMAS (Item #1)
          ==================================================================== */}
      <section id="alur-faskes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Alur Pelayanan Faskes"
            title="Alur Pelayanan Pasien BPJS di FKTP / Puskesmas"
            subtitle="Ikuti 5 langkah terpadu mulai dari pengambilan antrean hingga pengambilan obat tanpa biaya tambahan."
          />

          {/* 5 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {registrationSteps.map((step, idx) => (
              <StepCard
                key={idx}
                step={step.step}
                title={step.title}
                desc={step.desc}
                highlight={step.highlight}
              />
            ))}
          </div>

          {/* Essential Rule Notice Callout */}
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
          SECTION 3: JENIS PELAYANAN DI PUSKESMAS TERCOVER BPJS (Item #5)
          ==================================================================== */}
      <section id="layanan-puskesmas" className="py-20 bg-gradient-to-b from-slate-50 via-slate-50/70 to-white border-t border-slate-200/80">
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
          SECTION 4: FITUR LAYANAN DIGITAL JKN (Item #6) - INTERACTIVE SPLIT SHOWCASE
          ==================================================================== */}
      <section id="layanan-digital" className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Transformasi Layanan Digital"
            title="Fitur & Pemanfaatan Layanan Digital JKN"
            subtitle="Pelajari alur antrean online Puskesmas dari rumah, akses kartu KIS digital, skrining kesehatan mandiri, dan prosedur ganti domisili faskes."
          />

          {/* Interactive Feature Showcase with Live Preview Screen */}
          <DigitalFeatureShowcase />
        </div>
      </section>

      {/* ====================================================================
          SECTION 5: CARA AKTIVASI BPJS MATI & BALIK DOMISILI FKTP (Items #2 & #4)
          ==================================================================== */}
      <section id="solusi-adm" className="py-20 bg-gradient-to-b from-slate-50 via-slate-50/80 to-white border-t border-slate-200/80">
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

              {/* Editorial Highlight Card with Hover Shimmer & Lift */}
              <div className="group relative bg-white border border-slate-200/90 hover:border-brand-400/60 rounded-2xl p-6 shadow-card-depth hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 ease-out overflow-hidden">
                {/* Top shimmer accent on hover */}
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
          SECTION 6: KONTAK & NARAHUBUNG TIM MAHASISWA KKN (Item #7)
          ==================================================================== */}
      <section id="darurat" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Pendampingan Warga Desa"
            title="Kontak & Narahubung Tim Mahasiswa KKN"
            subtitle="Hubungi tim mahasiswa KKN kami jika Anda memerlukan bantuan informasi, pendampingan alur faskes, atau konsultasi langsung di posko desa."
          />

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

          {/* ================================================================
              EDITORIAL PUBLIC HEALTH ADVISORY: Gawat Darurat Bebas Rujukan
              ================================================================ */}
          <div className="mt-14 bg-brand-950 text-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-brand-800 shadow-forest-card relative overflow-hidden">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Directive & Legal Exemption */}
              <div className="lg:col-span-6 space-y-3">
                <span className="block text-sm sm:text-base font-semibold text-rose-400 tracking-normal">
                  Prosedur Gawat Darurat Medis
                </span>

                <h3 className="font-grotesk text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  Hak Bebas Rujukan Langsung ke IGD Rumah Sakit
                </h3>

                <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
                  Dalam situasi medis darurat yang mengancam nyawa, pasien peserta BPJS berhak <strong className="text-white font-semibold">langsung ditangani di Instalasi Gawat Darurat (IGD) rumah sakit mana pun</strong> tanpa memerlukan surat rujukan dari FKTP/Puskesmas dan tanpa uang muka.
                </p>

                <div className="pt-2 text-xs sm:text-sm text-slate-400 font-medium border-t border-white/10">
                  Landasan Regulasi: Permenkes RI No. 28 Tahun 2014 & Ketentuan BPJS Kesehatan
                </div>
              </div>

              {/* Right Column: 3 Clinical Emergency Categories */}
              <div className="lg:col-span-6 space-y-3">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Kriteria Klinis Penanganan Gawat Darurat:
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.06] hover:bg-white/[0.09] border border-white/10 transition-colors">
                  <span className="font-grotesk font-black text-rose-400 text-lg shrink-0 mt-0.5">01</span>
                  <div>
                    <div className="text-sm sm:text-base font-bold text-white leading-snug">
                      Gangguan Pernapasan Akut & Henti Jantung
                    </div>
                    <div className="text-xs sm:text-sm text-slate-300 mt-1 font-normal leading-relaxed">
                      Asma berat mendadak, sesak napas akut, henti napas, atau serangan jantung.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.06] hover:bg-white/[0.09] border border-white/10 transition-colors">
                  <span className="font-grotesk font-black text-rose-400 text-lg shrink-0 mt-0.5">02</span>
                  <div>
                    <div className="text-sm sm:text-base font-bold text-white leading-snug">
                      Penurunan Kesadaran & Cedera Fisik Berat
                    </div>
                    <div className="text-xs sm:text-sm text-slate-300 mt-1 font-normal leading-relaxed">
                      Pingsan tidak sadarkan diri, kecelakaan lalu lintas, trauma kepala, patah tulang terbuka.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.06] hover:bg-white/[0.09] border border-white/10 transition-colors">
                  <span className="font-grotesk font-black text-rose-400 text-lg shrink-0 mt-0.5">03</span>
                  <div>
                    <div className="text-sm sm:text-base font-bold text-white leading-snug">
                      Pendarahan Masif & Kejang Demam Balita
                    </div>
                    <div className="text-xs sm:text-sm text-slate-300 mt-1 font-normal leading-relaxed">
                      Pendarahan hebat yang tidak terkendali, luka bakar luas, keracunan akut, atau kejang demam anak.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
