import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  Info,
  CheckCircle2,
  RefreshCw,
  MapPin,
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
import MiniCard from './components/ui/MiniCard';

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
      {/* Top Ribbon & Sticky Header */}
      <Navbar />

      {/* ====================================================================
          HERO SECTION
          ==================================================================== */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Hero Pill Badge */}
          <div className="mb-6">
            <Badge variant="brand" size="md" pulseDot dotColor="bg-lime-500">
              Program Pengabdian Mahasiswa KKN 2026 • Desa Sukamakmur
            </Badge>
          </div>

          {/* Heading */}
          <Heading as="h1" level="1" color="dark" className="max-w-4xl mx-auto mb-6 text-balance">
            Panduan Lengkap Layanan{' '}
            <span className="text-brand-850 underline decoration-lime-400 decoration-4 underline-offset-8">
              BPJS Kesehatan
            </span>{' '}
            & Puskesmas
          </Heading>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed mb-8 text-balance font-normal">
            Media edukasi kesehatan dari mahasiswa KKN untuk warga: alur berobat mudah tanpa antre panjang,
            cara re-aktivasi kartu nonaktif, prosedur pindah faskes domisili, dan pemanfaatan antrean online.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <PillCTAButton href="#alur-faskes" variant="dark" size="lg">
              Pelajari Alur Pendaftaran
            </PillCTAButton>
            <PillCTAButton href="#darurat" variant="light" size="lg">
              Kontak Tim Mahasiswa KKN
            </PillCTAButton>
          </div>

          {/* Avatar stack */}
          <div className="flex justify-center mb-14">
            <AvatarStack label="1.450+ Warga Terbantu Program Edukasi Mahasiswa" />
          </div>

          {/* 4 Hero Stat Capsules */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
            {heroStats.map((item) => (
              <StatCard
                key={item.id}
                value={item.value}
                label={item.label}
                detail={item.detail}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 1: JENIS-JENIS BPJS (Item #3)
          ==================================================================== */}
      <section id="jenis-bpjs" className="py-20 bg-slate-50 border-y border-slate-200/80">
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
      <section id="layanan-puskesmas" className="py-20 bg-slate-50 border-t border-slate-200/80">
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
            <p className="text-slate-700 text-sm sm:text-base max-w-md font-normal leading-relaxed">
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
          <div className="bg-brand-850 rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-elevation border border-brand-700">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />

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

                <p className="text-slate-200 text-sm sm:text-base mb-8 leading-relaxed font-normal">
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

                <MiniCard
                  icon={Sparkles}
                  variant="darkGlass"
                  description="Seluruh fitur layanan digital dapat diakses 24 jam secara terpadu untuk mempermudah pendaftaran dan pelayanan faskes."
                />
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
      <section id="solusi-adm" className="py-20 bg-slate-50 border-t border-slate-200/80">
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

              {/* Highlight MiniCard */}
              <MiniCard
                icon={RefreshCw}
                title="Program REHAB (Cicilan Iuran)"
                description="Bagi peserta PBPU/Mandiri dengan tunggakan lebih dari 3 bulan s.d 24 bulan, Anda dapat mencicil tunggakan hingga 12 tahapan melalui menu REHAB di layanan digital JKN."
                footer={
                  <span className="text-brand-900 font-bold flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-brand-700" /> Syarat Pindah FKTP: Terdaftar minimal 3 bulan
                  </span>
                }
              />
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

          {/* Emergency Guidelines Callout */}
          <div className="mt-12 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <Heading as="h4" level="4" color="dark" className="mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" /> Catatan Penting: Kondisi Gawat Darurat Medis
            </Heading>
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed mb-4 font-normal">
              Untuk kondisi medis darurat yang mengancam keselamatan, pasien dapat <strong>langsung mendatangi UGD Rumah Sakit terdekat tanpa perlu surat rujukan faskes tingkat pertama</strong>:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm font-semibold text-slate-900">
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-start gap-2 shadow-subtle">
                <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                <span>Gangguan pernapasan akut / henti napas</span>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-start gap-2 shadow-subtle">
                <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                <span>Kehilangan kesadaran / cedera fisik berat</span>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-start gap-2 shadow-subtle">
                <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
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
