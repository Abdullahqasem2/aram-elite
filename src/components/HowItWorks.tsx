import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const steps = [
  {
    num: '1',
    title: 'Call, WhatsApp or Fill Form',
    titleAr: 'اتصل أو واتساب أو النموذج',
    desc: 'Any channel — we respond within the hour.',
    descAr: 'أي قناة — نرد خلال ساعة في أوقات العمل.',
  },
  {
    num: '2',
    title: 'Free Consultation + Site Visit',
    titleAr: 'استشارة + زيارة موقع مجانية',
    desc: 'We come to you and assess your project — no cost.',
    descAr: 'نأتي إليك ونقيّم مشروعك بدون أي تكلفة.',
  },
  {
    num: '3',
    title: 'Clear Detailed Quote',
    titleAr: 'عرض سعر تفصيلي وشفاف',
    desc: 'Full scope, timeline, and price. Zero hidden costs.',
    descAr: 'نطاق وجدول وسعر واضح. بدون تكاليف مخفية.',
  },
  {
    num: '4',
    title: 'We Start Immediately',
    titleAr: 'نبدأ العمل فوراً',
    desc: 'Certified teams mobilize fast on schedule.',
    descAr: 'فرق معتمدة تنتشر بسرعة على جدول مؤكد.',
  },
];

const HowItWorks: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section className="glass-section-alt text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <span className="inline-block bg-primary dark:bg-blue-600 text-white font-cond text-xs font-bold uppercase px-4 py-2 rounded-full mb-4 tracking-widest">
            How to Order · كيفية الطلب
          </span>
          <h2 className="font-cond text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
            Get Any Service in 4 Simple Steps
          </h2>
          <p className="font-arabic text-lg font-bold text-gold mb-4">اطلب أي خدمة في ٤ خطوات بسيطة</p>
          <div className="w-20 h-1 bg-gold rounded-full mx-auto mb-4"></div>
          <p className="text-gray-200 max-w-2xl mx-auto mb-6">
            {lang === 'ar' ? 'مكالمة واحدة أو رسالة واتساب واحدة تكفي للبدء معنا' : 'One call or one WhatsApp message is all it takes.'}
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary dark:bg-blue-600 text-white px-8 py-3.5 rounded-lg font-cond text-sm md:text-base font-bold uppercase hover:bg-primary-dark dark:hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
          >
            📞 Start Now · اطلب الآن
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <div key={`step-${i}`} className="relative">
              <div className="glass-card-solid text-gray-900 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-lg font-bold text-primary-dark mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-cond text-lg font-bold text-primary-dark dark:text-blue-300 mb-1">{step.title}</h3>
                <p className="font-arabic text-sm text-primary-dark dark:text-yellow-400 font-semibold mb-2">{step.titleAr}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{lang === 'ar' ? step.descAr : step.desc}</p>
              </div>
              {i < 3 && (
                <div className="hidden lg:block absolute -right-5 top-1/2 transform -translate-y-1/2 text-primary-dark dark:text-yellow-400 text-2xl font-bold">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
