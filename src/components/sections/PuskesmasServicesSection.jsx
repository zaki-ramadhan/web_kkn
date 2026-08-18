import React, { useState, useMemo } from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import Heading from '../ui/Heading';
import Eyebrow from '../ui/Eyebrow';
import Stabilo from '../ui/Stabilo';
import TabGroup from '../ui/TabGroup';
import BentoServiceCard from '../BentoServiceCard';
import AnimatedContent from '../reactbits/AnimatedContent';
import { serviceFilterTabs, puskesmasServices } from '../../data/bpjsData';

export default function PuskesmasServicesSection({
  services = puskesmasServices,
  tabs = serviceFilterTabs,
}) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredServices = useMemo(() => {
    if (activeTab === 'all') return services;
    return services.filter((srv) => srv.category === activeTab);
  }, [services, activeTab]);

  return (
    <SectionWrapper id="layanan-puskesmas" bg="slateSoft">
      <AnimatedContent distance={30} duration={0.6} threshold={0.1}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <Eyebrow variant="brand">
              Cakupan Manfaat Layanan
            </Eyebrow>
            <Heading as="h2" level="2" color="dark">
              Jenis Pelayanan Puskesmas <Stabilo>Tercover BPJS</Stabilo>
            </Heading>
          </div>
          <p className="text-slate-700 text-base max-w-md font-normal leading-relaxed">
            Seluruh tindakan medis dasar, tindakan preventif, dan obat-obatan formularium nasional diberikan 100% tanpa iur biaya bagi peserta aktif.
          </p>
        </div>
      </AnimatedContent>

      {/* Category Tabs Filter */}
      <AnimatedContent distance={20} duration={0.5} delay={0.1}>
        <TabGroup
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          className="mb-8"
        />
      </AnimatedContent>

      {/* Bento Showcase Grid with Staggered Scroll-Reveal Animations */}
      <div className="grid grid-cols-12 gap-6">
        {filteredServices.map((srv, idx) => (
          <AnimatedContent
            key={srv.id}
            distance={35}
            duration={0.6}
            delay={(idx % 3) * 0.12}
            className={`${srv.span || 'col-span-12'} h-full`}
          >
            <BentoServiceCard
              title={srv.title}
              tag={srv.tag}
              desc={srv.desc}
              stat={srv.stat}
              image={srv.image}
              span="col-span-12"
            />
          </AnimatedContent>
        ))}
      </div>
    </SectionWrapper>
  );
}
