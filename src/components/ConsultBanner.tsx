import React from 'react';

const ConsultBanner: React.FC = () => {
  return (
    <div className="glass-dark border-t-4 border-b-4 border-gold px-6 py-14 md:py-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 text-center md:text-left">
          <p className="font-cond text-4xl md:text-5xl font-bold text-gold uppercase mb-2">🏠 Book Your Free Site Visit</p>
          <p className="font-arabic text-2xl md:text-3xl font-bold text-white mb-3">احجز زيارة موقع مجانية</p>
          <p className="text-white text-opacity-75 text-base md:text-lg max-w-2xl mx-auto md:mx-0">
            Our team comes to you anywhere in Riyadh — completely free, no obligation. Prefer another way? Phone and online consultations are free too.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="relative flex items-center gap-4 glass-card-solid text-black rounded-xl p-6 shadow-lg">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide whitespace-nowrap">Most Requested · الأكثر طلباً</span>
            <span className="text-5xl">🏠</span>
            <div>
              <p className="font-cond text-lg font-bold text-black">Free On-Site Visit</p>
              <p className="font-arabic text-sm text-black">زيارة موقعك مجاناً</p>
            </div>
          </div>
          <div className="flex items-center gap-4 glass-card-solid text-gray-900 rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow">
            <span className="text-4xl">📞</span>
            <div>
              <p className="font-cond text-base font-bold text-primary-dark dark:text-blue-300">Free Phone Consult</p>
              <p className="font-arabic text-sm text-gray-700 dark:text-gray-300">استشارة هاتفية مجانية</p>
            </div>
          </div>
          <div className="flex items-center gap-4 glass-card-solid text-gray-900 rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow">
            <span className="text-4xl">💻</span>
            <div>
              <p className="font-cond text-base font-bold text-primary-dark dark:text-blue-300">Free Online Consult</p>
              <p className="font-arabic text-sm text-gray-700 dark:text-gray-300">استشارة عبر الإنترنت</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#contact" className="bg-gold dark:bg-yellow-500 text-black dark:text-gray-900 px-10 py-4 rounded-lg font-cond text-lg font-bold uppercase hover:bg-yellow-400 dark:hover:bg-yellow-600 transition-colors shadow-lg w-full sm:w-auto text-center">
            Book My Free Site Visit · احجز زيارتي المجانية →
          </a>
          <p className="text-center text-sm text-white text-opacity-70 dark:text-opacity-60">
            <span className="block">No commitment required · No hidden fees</span>
            <span className="font-arabic block text-xs">لا التزام · لا رسوم خفية</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConsultBanner;
