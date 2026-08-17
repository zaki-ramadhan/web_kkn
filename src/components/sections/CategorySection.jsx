import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import CategoryCard from '../CategoryCard';
import { bpjsCategories } from '../../data/bpjsData';

export default function CategorySection({ categories = bpjsCategories }) {
  return (
    <SectionWrapper
      id="jenis-bpjs"
      bg="slate"
      className="relative overflow-hidden pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-24"
    >
      {/* Extended Top Edge Color Transition: Dark Forest Green melting smoothly down into Slate Grey */}
      <div className="absolute top-0 inset-x-0 h-64 sm:h-80 lg:h-96 bg-gradient-to-b from-brand-950 via-brand-950/35 via-brand-950/10 to-transparent pointer-events-none z-0" />

      <div className="relative z-10">
        <SectionHeader
          badge="Kategori Kepesertaan"
          title="Jenis-Jenis Kepesertaan BPJS Kesehatan"
          subtitle="Pahami kategori kepesertaan, besaran iuran, hak rawat inap, dan mekanisme pendaftarannya."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center pt-4 pb-4">
          {categories.map((cat, idx) => {
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
    </SectionWrapper>
  );
}
