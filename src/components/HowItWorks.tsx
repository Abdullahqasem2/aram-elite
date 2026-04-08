import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const HowItWorks: React.FC = () => {
  const { lang } = useLanguage();

  const steps = [
    {
      num: '1',
      title: lang === 'ar' ? 'اتصل أو واتساب أو النموذج' : 'Call, WhatsApp or Fill Form',
      desc: lang === 'ar' ? 'أي قناة — نرد خلال ساعة في أوقات العمل.' : 'Any channel — we respond within the hour.',
    },
    {
      num: '2',
      title: lang === 'ar' ? 'استشارة + زيارة موقع مجانية' : 'Free Consultation + Site Visit',
      desc: lang === 'ar' ? 'نأتي إليك ونقيّم مشروعك بدون أي تكلفة.' : 'We come to you and assess your project — no cost.',
    },
    {
      num: '3',
      title: lang === 'ar' ? 'عرض سعر تفصيلي وشفاف' : 'Clear Detailed Quote',
      desc: lang === 'ar' ? 'نطاق وجدول وسعر واضح. بدون تكاليف مخفية.' : 'Full scope, timeline, and price. Zero hidden costs.',
    },
    {
      num: '4',
      title: lang === 'ar' ? 'نبدأ العمل فوراً' : 'We Start Immediately',
      desc: lang === 'ar' ? 'فرق معتمدة تنتشر بسرعة على جدول مؤكد.' : 'Certified teams mobilize fast on schedule.',
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <span className="inline-block bg-primary dark:bg-blue-600 text-white font-cond text-xs font-bold uppercase px-4 py-2 rounded-full mb-4 tracking-widest">
            {lang === 'ar' ? 'كيفية الطلب' : 'How to Order'}
          </span>
          <h2 className="font-cond text-4xl md:text-5xl font-bold text-primary-dark dark:text-blue-300 mb-3">
            {lang === 'ar' ? 'اطلب أي خدمة في ٤ خطوات بسيطة' : 'Get Any Service in 4 Simple Steps'}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {lang === 'ar' ? 'مكالمة واحدة أو رسالة واتساب واحدة تكفي للبدء معنا' : 'One call or one WhatsApp message is all it takes.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <div key={`step-${i}`} className="relative">
              <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gold dark:bg-yellow-500 rounded-full flex items-center justify-center text-lg font-bold text-primary-dark dark:text-gray-900 mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-cond text-lg font-bold text-primary-dark dark:text-blue-300 mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{step.desc}</p>
              </div>
              {i < 3 && (
                <div className="hidden lg:block absolute -right-5 top-1/2 transform -translate-y-1/2 text-gold text-2xl font-bold">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
