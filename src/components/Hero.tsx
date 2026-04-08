import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section className="bg-linear-to-br from-primary-dark via-primary to-primary-dark dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 px-6 py-16 md:py-24 lg:py-32 text-white relative overflow-hidden min-h-screen flex items-center" style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(196, 154, 42, 0.05) 0px, rgba(196, 154, 42, 0.05) 1px, transparent 1px, transparent 100px)' }}>
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
        {/* Left: Main Content */}
        <div className="lg:col-span-2">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 bg-white bg-opacity-15 dark:bg-opacity-10 border border-white border-opacity-50 dark:border-opacity-30 text-gold px-5 py-2.5 rounded-full text-xs md:text-sm font-bold mb-6 backdrop-blur-sm">
              ⭐ {lang === 'ar' ? '40+ سنة خبرة · الرياض' : '40+ Years · Riyadh'}
            </span>
          </div>

          <h1 className="font-cond text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            {lang === 'ar' ? (
              <>مجموعة <span className="text-gold">أرام إيليت</span> — مقاولات وصيانة وتشطيب فاخر</>
            ) : (
              <>Aram Elite Group — <span className="text-gold">Contracting, Maintenance & Luxury Fit-Out</span></>
            )}
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-white text-opacity-90 mb-6 leading-relaxed">
            {lang === 'ar'
              ? 'من بناء مشروعك التجاري الكبير إلى صيانة فيلتك — نغطي كل شيء. أكثر من 40 سنة خبرة جماعية في الرياض، مع تخصص في المشاريع السكنية والتجارية الراقية.'
              : 'From building your next commercial project to maintaining your villa — we cover every trade. 40+ years of collective experience in Riyadh, specializing in high-end residential and commercial projects.'
            }
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4 mb-8">
            <a href="tel:+966500000000" className="bg-gold dark:bg-yellow-500 text-primary-dark dark:text-gray-900 px-7 md:px-10 py-3.5 md:py-4 rounded-lg font-cond text-sm md:text-base font-bold uppercase hover:bg-yellow-300 dark:hover:bg-yellow-600 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 whitespace-nowrap">
              📞 {lang === 'ar' ? 'اتصل الآن' : 'Call Now'}
            </a>
            <a href="https://wa.me/966500000000" className="bg-green dark:bg-green-600 text-white px-7 md:px-10 py-3.5 md:py-4 rounded-lg font-cond text-sm md:text-base font-bold uppercase hover:bg-green-600 dark:hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 whitespace-nowrap">
              💬 {lang === 'ar' ? 'واتساب' : 'WhatsApp'}
            </a>
            <a href="#contact" className="bg-white bg-opacity-20 dark:bg-opacity-15 border-2 border-white text-white px-6 md:px-9 py-3 md:py-3.5 rounded-lg font-cond text-sm md:text-base font-bold uppercase hover:bg-opacity-30 dark:hover:bg-opacity-25 transition-all transform hover:scale-105 flex items-center gap-2 whitespace-nowrap">
              📋 {lang === 'ar' ? 'عرض سعر' : 'Get Quote'}
            </a>
          </div>

          <div className="flex flex-wrap gap-3 text-xs md:text-sm">
            <span className="font-semibold text-gold flex items-center gap-2">✓ {lang === 'ar' ? '40+ سنة خبرة' : '40+ Years'}</span>
            <span className="font-semibold text-gold flex items-center gap-2">✓ {lang === 'ar' ? 'زيارة مجانية' : 'Free Visit'}</span>
            <span className="font-semibold text-gold flex items-center gap-2">✓ {lang === 'ar' ? 'استشارة مجانية' : 'Free Consult'}</span>
            <span className="font-semibold text-gold flex items-center gap-2">✓ {lang === 'ar' ? 'ملف الأعمال' : 'Portfolio'}</span>
          </div>
        </div>

        {/* Right: Consultation Card */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-750 rounded-2xl p-8 shadow-2xl border border-gray-100 dark:border-gray-600">
            <span className="inline-block bg-green dark:bg-green-600 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-wide">
              ✅ {lang === 'ar' ? 'مجاناً 100%' : '100% FREE'}
            </span>
            <h3 className="font-cond text-2xl font-bold text-primary-dark dark:text-white mb-6">
              {lang === 'ar' ? 'احصل على استشارتك الآن' : 'Free Consultation'}
            </h3>

            <div className="space-y-4 mb-7">
              <div className="flex gap-3 items-start">
                <span className="text-2xl shrink-0">🏠</span>
                <div>
                  <p className="font-semibold text-primary-dark dark:text-white text-sm">
                    {lang === 'ar' ? 'زيارة موقع مجانية' : 'Free Site Visit'}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">{lang === 'ar' ? 'نأتي إليك' : 'We come to you'}</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-2xl shrink-0">📞</span>
                <div>
                  <p className="font-semibold text-primary-dark dark:text-white text-sm">
                    {lang === 'ar' ? 'استشارة هاتفية' : 'Phone Consultation'}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">{lang === 'ar' ? 'مجانية' : 'Complimentary'}</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-2xl shrink-0">💬</span>
                <div>
                  <p className="font-semibold text-primary-dark dark:text-white text-sm">
                    {lang === 'ar' ? 'واتساب' : 'WhatsApp'}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">{lang === 'ar' ? 'متاح أي وقت' : '24/7 Available'}</p>
                </div>
              </div>
            </div>

            <a href="tel:+966500000000" className="w-full bg-primary-dark dark:bg-blue-700 text-white py-3.5 rounded-lg font-bold text-center hover:bg-primary-dark hover:bg-opacity-90 transition-all transform hover:shadow-lg block mb-3">
              📞 {lang === 'ar' ? 'احجز الآن' : 'Book Now'}
            </a>
            <a href="https://wa.me/966500000000" className="w-full bg-green dark:bg-green-600 text-white py-3.5 rounded-lg font-bold text-center hover:bg-green-700 dark:hover:bg-green-700 transition-all transform hover:shadow-lg block">
              💬 {lang === 'ar' ? 'واتساب' : 'WhatsApp'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
