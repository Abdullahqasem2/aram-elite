import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section className="bg-linear-to-br from-primary-dark via-primary to-primary-dark dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 px-6 py-24 md:py-32 text-white relative overflow-hidden min-h-screen flex items-center" style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(196, 154, 42, 0.05) 0px, rgba(196, 154, 42, 0.05) 1px, transparent 1px, transparent 100px)' }}>
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
        {/* Left: Main Content */}
        <div className="lg:col-span-2">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 bg-white bg-opacity-15 dark:bg-opacity-10 border border-white border-opacity-40 dark:border-opacity-20 text-gold px-4 py-2 rounded-full text-sm font-bold mb-6">
              ⭐ {lang === 'ar' ? '40+ سنة خبرة جماعية · الرياض، المملكة العربية السعودية' : '40+ Years Collective Experience · Riyadh'}
            </span>
          </div>

          <h1 className="font-cond text-5xl md:text-7xl font-bold leading-tight mb-6">
            {lang === 'ar' ? (
              <>مجموعة <span className="text-gold">أرام إيليت</span> — مقاولات وصيانة وتشطيب فاخر في الرياض</>
            ) : (
              <>Aram Elite Group — <span className="text-gold">Contracting, Maintenance & Luxury Fit-Out</span> in Riyadh</>
            )}
          </h1>

          <p className="text-xl md:text-2xl text-white text-opacity-90 mb-6 leading-relaxed">
            {lang === 'ar'
              ? 'من بناء مشروعك التجاري الكبير إلى صيانة فيلتك — نغطي كل شيء. أكثر من 40 سنة خبرة جماعية في الرياض، مع تخصص في المشاريع السكنية والتجارية الراقية.'
              : 'From building your next commercial project to maintaining your villa — we cover every trade. 40+ years of collective experience in Riyadh, specializing in high-end residential and commercial projects.'
            }
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a href="tel:+966500000000" className="bg-gold dark:bg-yellow-500 text-primary-dark dark:text-gray-900 px-9 py-4 rounded-lg font-cond text-lg font-bold uppercase hover:bg-yellow-400 dark:hover:bg-yellow-600 transition-colors flex items-center gap-2">
              📞 {lang === 'ar' ? 'اتصل الآن' : 'Call Now'}
            </a>
            <a href="https://wa.me/966500000000" className="bg-green dark:bg-green-600 text-white px-9 py-4 rounded-lg font-cond text-lg font-bold uppercase hover:bg-green-700 dark:hover:bg-green-700 transition-colors flex items-center gap-2">
              💬 {lang === 'ar' ? 'واتساب' : 'WhatsApp'}
            </a>
            <a href="#contact" className="bg-white bg-opacity-15 dark:bg-opacity-10 border-2 border-white text-white px-8 py-3.5 rounded-lg font-cond text-lg font-bold uppercase hover:bg-opacity-25 dark:hover:bg-opacity-20 transition-colors flex items-center gap-2">
              📋 {lang === 'ar' ? 'اطلب عرض سعر' : 'Get a Quote'}
            </a>
          </div>

          <div className="flex flex-wrap gap-4">
            <span className="text-sm font-semibold text-gold flex items-center gap-2">✓ {lang === 'ar' ? '40+ سنة خبرة' : '40+ Years Experience'}</span>
            <span className="text-sm font-semibold text-gold flex items-center gap-2">✓ {lang === 'ar' ? 'زيارة موقع مجانية' : 'Free Site Visit'}</span>
            <span className="text-sm font-semibold text-gold flex items-center gap-2">✓ {lang === 'ar' ? 'استشارة مجانية' : 'Free Consultation'}</span>
            <span className="text-sm font-semibold text-gold flex items-center gap-2">✓ {lang === 'ar' ? 'ملف أعمال عند الطلب' : 'Portfolio on Request'}</span>
          </div>
        </div>

        {/* Right: Consultation Card */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-2xl">
            <span className="inline-block bg-green dark:bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
              ✅ {lang === 'ar' ? 'مجاناً بالكامل' : '100% Free'}
            </span>
            <h3 className="font-cond text-2xl font-bold text-primary-dark dark:text-blue-400 mb-6">
              {lang === 'ar' ? 'احصل على استشارتك المجانية الآن' : 'Get Your Free Consultation'}
            </h3>

            <div className="space-y-4 mb-6">
              <div className="flex gap-4">
                <span className="text-2xl">🏠</span>
                <div>
                  <p className="font-bold text-primary-dark dark:text-blue-300 text-sm">
                    {lang === 'ar' ? 'زيارة موقع مجانية — نأتي إليك' : 'Free Site Visit — We come to you'}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-bold text-primary-dark dark:text-blue-300 text-sm">
                    {lang === 'ar' ? 'استشارة هاتفية مجانية' : 'Free Phone Consultation'}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl">💬</span>
                <div>
                  <p className="font-bold text-primary-dark dark:text-blue-300 text-sm">
                    {lang === 'ar' ? 'استشارة واتساب — أي وقت' : 'WhatsApp Consultation — Anytime'}
                  </p>
                </div>
              </div>
            </div>

            <a href="tel:+966500000000" className="w-full bg-primary-dark dark:bg-gray-800 text-white py-3 rounded-lg font-bold text-center hover:bg-primary-dark hover:bg-opacity-90 transition-colors block mb-3">
              📞 {lang === 'ar' ? 'احجز استشارتك' : 'Book Consultation'}
            </a>
            <a href="https://wa.me/966500000000" className="w-full bg-green dark:bg-green-600 text-white py-3 rounded-lg font-bold text-center hover:bg-green-700 transition-colors block">
              💬 {lang === 'ar' ? 'واتساب' : 'WhatsApp'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
