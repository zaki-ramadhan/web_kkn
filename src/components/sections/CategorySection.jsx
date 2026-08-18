import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import Stabilo from '../ui/Stabilo';
import CategoryCard from '../CategoryCard';
import AnimatedContent from '../reactbits/AnimatedContent';
import { bpjsCategories } from '../../data/bpjsData';

export default function CategorySection({ categories = bpjsCategories }) {
  return (
    <SectionWrapper id="jenis-bpjs" bg="slate">
      <SectionHeader
        badge="Section 01 • Kategori Kepesertaan"
        title={
          <>
            Jenis & Kategori Kepesertaan <Stabilo>BPJS Kesehatan</Stabilo>
          </>
        }
        subtitle="Pahami 3 kategori kepesertaan: PBI JK bantuan pemerintah, Mandiri/PBPU, dan PPU pekerja formal beserta besaran iuran dan hak rawat inapnya."
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
            <AnimatedContent
              key={cat.id}
              distance={40}
              duration={0.65}
              delay={idx * 0.15}
              className={`h-full ${scaleClass}`}
            >
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
            </AnimatedContent>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
