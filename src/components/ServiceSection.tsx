import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PHONE, PHONE_DISPLAY, WA_BASE } from '../data/services';
import type { ServiceData } from '../data/services';

interface ServiceSectionProps {
  service: ServiceData;
  altBg?: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ service, altBg = false }) => {
  const { lang, isArabic } = useLanguage();
  const t = (b: { en: string; ar: string }) => (isArabic ? b.ar : b.en);

  const waHref = `${WA_BASE}?text=${encodeURIComponent(t(service.waMessage))}`;

  const ctaBg = service.gold
    ? 'bg-linear-to-br from-yellow-900/95 via-yellow-700/95 to-yellow-800/95 dark:from-yellow-950/95 dark:via-yellow-800/95 dark:to-yellow-900/95'
    : 'bg-linear-to-br from-primary-dark/95 via-primary/95 to-primary-dark/95 dark:from-gray-800/95 dark:via-gray-900/95 dark:to-gray-800/95';

  return (
    <section
      id={service.id}
      className={`${altBg ? 'glass-section-alt' : 'glass-section'} text-white px-6 py-16 md:py-20`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block bg-primary dark:bg-blue-600 text-white font-cond text-xs font-bold uppercase px-5 py-2 rounded-full mb-5 tracking-wide">
            {t(service.kicker)}
          </span>
          <h2 className={`${isArabic ? 'font-arabic' : 'font-cond'} text-3xl md:text-5xl font-bold text-white mb-3`}>
            {t(service.title)}
          </h2>
          <div className="w-20 h-1 bg-gold rounded-full mx-auto mb-4"></div>
          <p className="text-gray-200 leading-relaxed text-base md:text-lg">
            {t(service.desc)}
          </p>
        </div>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-xl mb-10">
          <img
            src={service.img}
            alt={service.alt}
            className="w-full h-56 md:h-80 object-cover hover:scale-105 transition-transform duration-700"
            loading="lazy"
            onError={(e) => {
              (e.currentTarget.parentElement as HTMLElement).style.display = 'none';
            }}
          />
        </div>

        {/* Sub-services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
          {service.items.map((item) => (
            <div
              key={item.en}
              className="glass-card text-white rounded-xl px-4 py-3.5 flex items-center gap-3"
            >
              <span className="text-green font-bold shrink-0">✓</span>
              <h3 className="text-sm font-semibold text-white leading-snug">
                {t(item)}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA card */}
        <div className={`${ctaBg} rounded-2xl p-8 md:p-10 text-center text-white shadow-2xl`}>
          <span className="inline-block bg-gold dark:bg-yellow-500 text-primary-dark dark:text-gray-900 font-cond text-xs font-bold uppercase px-5 py-2 rounded-full mb-4 tracking-widest">
            {lang === 'ar' ? '✅ زيارة موقع مجانية — 24/7' : '✅ FREE SITE VISIT — 24/7'}
          </span>
          <p className={`${isArabic ? 'font-arabic' : 'font-cond'} text-2xl md:text-3xl font-bold mb-2`}>
            {t(service.ctaTitle)}
          </p>
          <p className="text-white text-opacity-90 mb-7 max-w-2xl mx-auto">{t(service.ctaDesc)}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green dark:bg-green-600 hover:bg-green-700 dark:hover:bg-green-700 text-white px-8 py-4 rounded-lg font-cond text-sm md:text-base font-bold uppercase transition-all transform hover:scale-105 shadow-lg"
            >
              💬 {lang === 'ar' ? 'احجز زيارتك المجانية — واتساب' : 'Book Your Free Visit — WhatsApp'}
            </a>
            <a
              href={`tel:${PHONE}`}
              className="bg-white !text-black px-8 py-4 rounded-lg font-cond text-sm md:text-base font-bold uppercase hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              📞 <span dir="ltr" className="!text-black">{PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
