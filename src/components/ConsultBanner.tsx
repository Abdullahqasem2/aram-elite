import React from 'react';

const ConsultBanner: React.FC = () => {
  return (
    <div className="bg-primary-dark dark:bg-gray-800 border-t-4 border-b-4 border-gold px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="font-cond text-3xl md:text-4xl font-bold text-gold uppercase mb-2">🎁 100% Free Consultation</p>
          <p className="font-cond text-xl md:text-2xl font-bold text-white mb-1">3 Ways to Connect</p>
          <p className="font-arabic text-lg text-white text-opacity-75">استشارة مجانية ١٠٠٪ — ٣ طرق للتواصل معنا</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-700 rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow">
            <span className="text-4xl">🏠</span>
            <div>
              <p className="font-cond text-base font-bold text-primary dark:text-blue-400">Free On-Site Visit</p>
              <p className="font-arabic text-sm text-gray-600 dark:text-gray-300">زيارة موقعك مجاناً</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-700 rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow">
            <span className="text-4xl">📞</span>
            <div>
              <p className="font-cond text-base font-bold text-primary dark:text-blue-400">Free Phone Consult</p>
              <p className="font-arabic text-sm text-gray-600 dark:text-gray-300">استشارة هاتفية مجانية</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-700 rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow">
            <span className="text-4xl">💻</span>
            <div>
              <p className="font-cond text-base font-bold text-primary dark:text-blue-400">Free Online Consult</p>
              <p className="font-arabic text-sm text-gray-600 dark:text-gray-300">استشارة عبر الإنترنت</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#contact" className="bg-gold dark:bg-yellow-500 text-black dark:text-gray-900 px-10 py-4 rounded-lg font-cond text-lg font-bold uppercase hover:bg-yellow-400 dark:hover:bg-yellow-600 transition-colors shadow-lg w-full sm:w-auto text-center">
            Book My Free Consultation →
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
