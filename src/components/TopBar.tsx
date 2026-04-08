import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const TopBar: React.FC = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="sticky top-0 z-50 bg-primary-dark dark:bg-gray-800 px-6 py-3 flex items-center justify-between flex-wrap gap-2.5 shadow-lg transition-colors">
      <div className="flex items-center gap-5 flex-wrap">
        <span className="text-gold font-cond text-xl font-bold tracking-widest">ARAM ELITE</span>
        <span className="bg-green dark:bg-green-700 text-white text-xs font-bold px-2.5 py-0.5 rounded font-cond tracking-wide">
          {lang === 'ar' ? '✅ استشارة مجانية' : 'FREE CONSULTATION'}
        </span>
        <span className="text-gray-300 dark:text-gray-400 text-xs font-semibold">
          {lang === 'ar' ? '40+ سنة خبرة · الرياض' : '40+ Years Experience · Riyadh'}
        </span>
      </div>
      <div className="flex gap-2 md:gap-4 items-center flex-wrap justify-end">
        <a href="tel:+966500000000" className="text-gold dark:text-yellow-400 text-xs md:text-sm hover:text-yellow-300 transition-colors flex items-center gap-1 font-semibold whitespace-nowrap">
          📞 <span className="hidden md:inline">+966 50 000</span>
        </a>
        <a href="https://wa.me/966500000000" className="text-green dark:text-green-400 text-xs md:text-sm hover:text-green-300 transition-colors flex items-center gap-1 font-semibold whitespace-nowrap">
          💬 <span className="hidden md:inline">WhatsApp</span>
        </a>
        <div className="flex gap-1 bg-white bg-opacity-10 dark:bg-opacity-10 border border-white border-opacity-20 rounded-full p-1">
          <button
            onClick={() => setLang('ar')}
            className={`px-2 md:px-3 py-1 rounded-full text-xs font-bold transition-colors ${
              lang === 'ar'
                ? 'bg-gold text-primary-dark'
                : 'text-white hover:bg-white hover:bg-opacity-10'
            }`}
          >
            عربي
          </button>
          <button
            onClick={() => setLang('en')}
            className={`px-2 md:px-3 py-1 rounded-full text-xs font-bold transition-colors ${
              lang === 'en'
                ? 'bg-gold text-primary-dark'
                : 'text-white hover:bg-white hover:bg-opacity-10'
            }`}
          >
            EN
          </button>
        </div>
        <a href="#contact" className="bg-accent dark:bg-red-600 text-white px-4 py-2 text-xs md:text-sm font-bold rounded hover:bg-red-700 dark:hover:bg-red-700 transition font-cond tracking-wide uppercase whitespace-nowrap">
          {lang === 'ar' ? 'اطلب' : 'Order'}
        </a>
      </div>
    </div>
  );
};

export default TopBar;
