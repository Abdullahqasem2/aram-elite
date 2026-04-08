import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Stats: React.FC = () => {
  const { lang } = useLanguage();

  const stats = lang === 'ar'
    ? [
        { num: '40+', label: 'سنة خبرة جماعية', labelEn: 'Years Experience' },
        { num: '500+', label: 'مشروع منجز', labelEn: 'Projects Delivered' },
        { num: '30+', label: 'خدمة متخصصة', labelEn: 'Services Covered' },
        { num: '5', label: 'أقسام متخصصة', labelEn: 'Specialist Divisions' },
        { num: '24/7', label: 'خدمة طوارئ دائمة', labelEn: 'Emergency Support' },
      ]
    : [
        { num: '40+', label: 'Years Experience', labelEn: 'سنة خبرة جماعية' },
        { num: '500+', label: 'Projects Delivered', labelEn: 'مشروع منجز' },
        { num: '30+', label: 'Services Covered', labelEn: 'خدمة متخصصة' },
        { num: '5', label: 'Specialist Divisions', labelEn: 'أقسام متخصصة' },
        { num: '24/7', label: 'Emergency Support', labelEn: 'خدمة طوارئ دائمة' },
      ];

  return (
    <section className="bg-primary-dark dark:bg-gray-900 px-6 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="font-cond text-3xl md:text-5xl font-bold text-white mb-3">
            {lang === 'ar' ? 'أرقام تتحدث عن نجاحنا' : 'Our Track Record'}
          </h2>
          <p className="text-white text-opacity-70 text-base md:text-lg">
            {lang === 'ar' ? 'أكثر من 40 سنة من الريادة والتميز في الرياض' : '40+ years of excellence and leadership in Riyadh'}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
          {stats.map((stat, i) => (
            <div key={`stat-${i}`} className="text-center">
              <div className="font-cond text-4xl md:text-5xl lg:text-6xl font-bold text-gold dark:text-yellow-400 mb-2">{stat.num}</div>
              <div className="font-cond text-xs md:text-sm lg:text-base font-bold text-white mb-1">{stat.label}</div>
              <div className="font-arabic text-xs text-white text-opacity-60 dark:text-opacity-50">{stat.labelEn}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
