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
    <section className="bg-primary-dark dark:bg-gray-900 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <div key={`stat-${i}`} className="text-center">
              <div className="font-cond text-5xl md:text-6xl font-bold text-gold dark:text-yellow-400 mb-2">{stat.num}</div>
              <div className="font-cond text-sm md:text-base font-bold text-white mb-1">{stat.label}</div>
              <div className="font-arabic text-xs text-white text-opacity-60 dark:text-opacity-50">{stat.labelEn}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
