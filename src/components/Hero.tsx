import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-primary-dark to-primary dark:from-gray-800 dark:to-gray-900 px-6 py-20 text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <span className="inline-block bg-gold dark:bg-yellow-500 text-black dark:text-gray-900 font-cond text-sm font-bold uppercase px-4 py-1.5 rounded mb-5 tracking-wider">
          ⭐ Riyadh's #1 Contracting & Maintenance Group
        </span>
        <h1 className="font-cond text-5xl md:text-7xl font-bold text-white mb-2.5 leading-tight">
          Build It. Fix It.<br/><span className="text-gold dark:text-yellow-400">Elevate It.</span>
        </h1>
        <p className="font-arabic text-2xl md:text-3xl font-bold text-white text-opacity-85 dark:text-opacity-90 mb-7">ابنِ. أصلح. ارتقِ بمشروعك مع أرام إيليت</p>
        <p className="text-lg text-white text-opacity-90 dark:text-opacity-85 mb-3 leading-relaxed max-w-2xl mx-auto">
          General contracting · Maintenance contracts · Renovation · Sports facilities · Royal mansions — all under one group, serving Riyadh and Saudi Arabia.
        </p>
        <p className="font-arabic text-lg text-white text-opacity-75 dark:text-opacity-70 mb-9 leading-relaxed max-w-2xl mx-auto">
          مقاولات عامة · عقود صيانة · تجديد وترميم · منشآت رياضية · قصور ملكية — تحت مجموعة واحدة في الرياض والمملكة العربية السعودية.
        </p>
        <div className="flex flex-wrap gap-3.5 justify-center mb-10">
          <a href="tel:+966XXXXXXXXX" className="bg-accent dark:bg-red-600 text-white px-9 py-4 rounded-lg font-cond text-lg font-bold uppercase hover:bg-red-700 dark:hover:bg-red-700 hover:shadow-xl transition-all flex items-center gap-2">
            📞 Call Us Now · اتصل الآن
          </a>
          <a href="#services" className="bg-white bg-opacity-15 dark:bg-opacity-10 border-2 border-white border-opacity-50 dark:border-opacity-30 text-white px-8 py-3.5 rounded-lg font-cond text-lg font-bold uppercase hover:bg-opacity-25 dark:hover:bg-opacity-20 transition-all flex items-center gap-2">
            See All Services · استعرض الخدمات
          </a>
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          <span className="bg-white bg-opacity-10 dark:bg-opacity-5 border border-white border-opacity-20 dark:border-opacity-10 text-white px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
            <span className="text-green-400">✓</span> Free On-Site Visit · زيارة مجانية
          </span>
          <span className="bg-white bg-opacity-10 dark:bg-opacity-5 border border-white border-opacity-20 dark:border-opacity-10 text-white px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
            <span className="text-green-400">✓</span> Free Call Consultation · استشارة هاتفية مجانية
          </span>
          <span className="bg-white bg-opacity-10 dark:bg-opacity-5 border border-white border-opacity-20 dark:border-opacity-10 text-white px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
            <span className="text-green-400">✓</span> Free Online Consult · استشارة عبر الإنترنت مجاناً
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
