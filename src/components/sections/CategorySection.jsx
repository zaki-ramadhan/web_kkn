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
      className="relative overflow-hidden pt-48 sm:pt-60 md:pt-72 lg:pt-80 pb-24 sm:pb-28"
    >
      {/* Ultra-Smooth Velvety Atmospheric Color Transition from Dark Forest Green to Slate Grey */}
      <div
        className="absolute top-0 inset-x-0 h-[340px] sm:h-[440px] md:h-[520px] lg:h-[580px] pointer-events-none z-0"
        style={{
          background:
            'linear-gradient(to bottom, #032219 0%, rgba(3, 34, 25, 0.72) 18%, rgba(3, 34, 25, 0.38) 38%, rgba(3, 34, 25, 0.16) 60%, rgba(3, 34, 25, 0.04) 82%, transparent 100%)',
        }}
      />

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
