import React, { useState, useMemo } from 'react';
import {
  Info,
  AlertTriangle
} from 'lucide-react';

// Centralized Data Layer
import {
  heroStats,
  bpjsCategories,
  registrationSteps,
  serviceFilterTabs,
  puskesmasServices,
  digitalJknFlow,
  administrativeFaqs,
  emergencyContacts
} from './data/bpjsData';

// UI Primitive Components (Atomic)
import PillCTAButton from './components/ui/PillCTAButton';
import AvatarStack from './components/ui/AvatarStack';
import SectionHeader from './components/ui/SectionHeader';
import StatCard from './components/ui/StatCard';
import CalloutBox from './components/ui/CalloutBox';
import Badge from './components/ui/Badge';
import Heading from './components/ui/Heading';
import CheckList from './components/ui/CheckList';
import TabGroup from './components/ui/TabGroup';

// Feature Components (Molecules / Organisms)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CategoryCard from './components/CategoryCard';
import StepCard from './components/StepCard';
import BentoServiceCard from './components/BentoServiceCard';
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

          {/* 4 Hero Stat Capsules (Pure Typographic Metric Focus) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
            {heroStats.map((item) => (
              <StatCard
                key={item.id}
                variant="dark"
                value={item.value}
                label={item.label}
                detail={item.detail}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 1: JENIS-JENIS BPJS (Item #3)
          ==================================================================== */}
      <section id="jenis-bpjs" className="py-20 bg-gradient-to-b from-slate-50 via-slate-50/80 to-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Pilar 1 • Kepesertaan"
            title="Jenis-Jenis Kepesertaan BPJS Kesehatan"
            subtitle="Pahami kategori kepesertaan, besaran iuran, hak rawat inap, dan mekanisme pendaftarannya."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {bpjsCategories.map((cat) => (
              <CategoryCard
                key={cat.id}
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
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 2: ALUR PENDAFTARAN PASIEN BPJS DI PUSKESMAS (Item #1)
          ==================================================================== */}
      <section id="alur-faskes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Pilar 2 • Prosedur Berobat"
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
              <div className="mb-3">
                <Badge variant="brand" size="sm">
                  Pilar 3 • Cakupan Manfaat
                </Badge>
              </div>
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
          SECTION 4: FITUR LAYANAN DIGITAL JKN (Item #6)
          ==================================================================== */}
      <section id="layanan-digital" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-800 via-brand-850 to-brand-950 rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-forest-card border border-brand-700/80 ring-1 ring-white/10">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-lime-400/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-5">
                <div className="mb-4">
                  <Badge variant="brandDark" size="md">
                    Pilar 4 • Transformasi Digital
                  </Badge>
                </div>

                <Heading as="h2" level="1" color="light" className="mb-4 leading-tight">
                  Fitur & Pemanfaatan Layanan Digital JKN
                </Heading>

                <p className="text-slate-200 text-base mb-8 leading-relaxed font-normal">
                  Pelajari alur dan kemudahan akses layanan digital BPJS Kesehatan mulai dari registrasi akun, pendaftaran antrean faskes secara online, hingga kartu digital KIS.
                </p>

                <CheckList
                  items={[
                    'Booking Antrean Puskesmas H-1 dari Rumah',
                    'Kartu Digital KIS (Cukup tunjukkan barcode di loket)',
                    'Cek Riwayat Pembayaran & Pindah FKTP Mandiri',
                  ]}
                  theme="forest"
                  size="sm"
                  className="space-y-3 mb-8"
                />

                <div className="bg-white/10 border border-white/15 rounded-2xl p-4 text-sm sm:text-base text-slate-200 leading-relaxed backdrop-blur-sm">
                  Seluruh fitur layanan digital dapat diakses 24 jam secara terpadu untuk mempermudah pendaftaran dan pelayanan faskes warga.
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-7 space-y-3">
                {digitalJknFlow.map((item, idx) => (
                  <StepCard
                    key={idx}
                    variant="dark"
                    step={item.step}
                    title={item.title}
                    desc={item.desc}
                    tip={item.tip}
                  />
                ))}
              </div>
            </div>
          </div>
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
              <div className="mb-3">
                <Badge variant="brand" size="sm">
                  Pilar 5 • Solusi Administrasi
                </Badge>
              </div>

              <Heading as="h2" level="2" color="dark" className="mb-4">
                Aktivasi BPJS Mati & Balik Domisili FKTP
              </Heading>

              <p className="text-slate-700 text-base leading-relaxed mb-6 font-normal">
                Jangan panik jika status kartu Anda nonaktif atau faskes terdaftar masih di kampung halaman lama. Simak solusi mandiri dan ketentuan terbarunya di sini.
              </p>

              {/* Editorial Highlight Card */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-card-depth">
                <h4 className="font-grotesk font-bold text-base text-slate-900 mb-2">
                  Program REHAB (Cicilan Iuran)
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed mb-4 font-normal">
                  Bagi peserta PBPU/Mandiri dengan tunggakan lebih dari 3 bulan s.d 24 bulan, Anda dapat mencicil tunggakan hingga 12 tahapan melalui menu REHAB di layanan digital JKN.
                </p>
                <div className="pt-3 border-t border-slate-100 text-sm font-bold text-brand-900 flex items-center gap-2">
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
            badge="Pilar 6 • Pendampingan Warga"
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
                desc={contact.desc}
                actionText={contact.actionText}
                link={contact.link}
                urgent={contact.urgent}
              />
            ))}
          </div>

          {/* Emergency Guidelines Callout (Clean Editorial Clinical Criteria) */}
          <div className="mt-12 bg-gradient-to-r from-rose-50/70 via-rose-50/40 to-white border border-rose-200/90 rounded-3xl p-6 sm:p-8 shadow-card-depth">
            <Heading as="h4" level="4" color="dark" className="mb-2 flex items-center gap-2 text-rose-950 font-bold">
              <AlertTriangle className="w-5 h-5 text-rose-600" /> Catatan Penting: Kondisi Gawat Darurat Medis
            </Heading>
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed mb-5 font-normal">
              Untuk kondisi medis darurat yang mengancam keselamatan, pasien dapat <strong>langsung mendatangi UGD Rumah Sakit terdekat tanpa perlu surat rujukan faskes tingkat pertama</strong>:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-sm font-semibold text-slate-900">
              <div className="p-4 bg-white rounded-2xl border-l-4 border-l-rose-500 border border-slate-200/80 shadow-subtle flex flex-col justify-center">
                <span className="text-xs font-bold text-rose-700 uppercase tracking-wider mb-1">Kriteria 1</span>
                <span>Gangguan pernapasan akut / henti napas</span>
              </div>
              <div className="p-4 bg-white rounded-2xl border-l-4 border-l-rose-500 border border-slate-200/80 shadow-subtle flex flex-col justify-center">
                <span className="text-xs font-bold text-rose-700 uppercase tracking-wider mb-1">Kriteria 2</span>
                <span>Kehilangan kesadaran / cedera fisik berat</span>
              </div>
              <div className="p-4 bg-white rounded-2xl border-l-4 border-l-rose-500 border border-slate-200/80 shadow-subtle flex flex-col justify-center">
                <span className="text-xs font-bold text-rose-700 uppercase tracking-wider mb-1">Kriteria 3</span>
                <span>Pendarahan hebat / kejang demam anak</span>
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
