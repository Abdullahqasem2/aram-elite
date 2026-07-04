import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const faqs = [
  {
    q: {
      en: 'Is the first site visit really free?',
      ar: 'هل الزيارة الأولى للموقع مجانية فعلاً؟',
    },
    a: {
      en: 'Yes — completely free with no obligation. Our engineer visits, assesses your project and gives you a detailed quote. WhatsApp or call +966 50 208 0228.',
      ar: 'نعم — مجانية بالكامل ودون أي التزام. يزورك مهندسنا ويقيّم مشروعك ويقدم لك عرض سعر مفصل. واتساب أو اتصال على ‎+966 50 208 0228.',
    },
  },
  {
    q: {
      en: 'Per-visit maintenance vs. annual contract — which should I choose?',
      ar: 'الصيانة بالزيارة أم العقد السنوي — أيهما أختار؟',
    },
    a: {
      en: 'Per-visit works for one-off urgent repairs. Annual contracts include scheduled preventive maintenance, 24/7 priority response and preferential rates — the best choice for villas, mansions, malls and facilities.',
      ar: 'الزيارة الواحدة مناسبة للأعطال الطارئة. أما العقد السنوي فيشمل صيانة وقائية مجدولة وأولوية استجابة 24/7 وأسعاراً تفضيلية — وهو الخيار الأفضل للفلل والقصور والمولات والمرافق.',
    },
  },
  {
    q: {
      en: 'Do you handle luxury mansion projects?',
      ar: 'هل تنفذون مشاريع القصور الفاخرة؟',
    },
    a: {
      en: '40 years designing, building and maintaining mansions for high-profile clients, with access to the rarest materials on the market and absolute discretion.',
      ar: '40 عاماً في تصميم وبناء وصيانة القصور لكبار الشخصيات، مع وصول لأندر المواد في السوق وسرية تامة.',
    },
  },
  {
    q: {
      en: 'Which areas do you serve?',
      ar: 'ما المناطق التي تخدمونها؟',
    },
    a: {
      en: 'We serve Riyadh and all surrounding areas, and accept major projects across Saudi Arabia.',
      ar: 'نخدم الرياض وجميع المناطق المحيطة بها، ونستقبل المشاريع الكبرى في جميع أنحاء المملكة.',
    },
  },
];

const Faq: React.FC = () => {
  const { isArabic } = useLanguage();

  return (
    <section className="glass-section text-white px-6 py-16 md:py-20" id="faq" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-primary dark:bg-blue-600 text-white font-cond text-xs font-bold uppercase px-5 py-2 rounded-full mb-5 tracking-wide">
            FAQ
          </span>
          <h2 className={`${isArabic ? 'font-arabic' : 'font-cond'} text-3xl md:text-5xl font-bold text-white mb-3`}>
            {isArabic ? 'الأسئلة الأكثر شيوعاً' : 'Frequently Asked Questions'}
          </h2>
          <div className="w-20 h-1 bg-gold rounded-full mx-auto"></div>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q.en}
              className="glass-card text-white rounded-xl px-5 py-4 group"
            >
              <summary className="font-bold text-white cursor-pointer text-sm md:text-base list-none flex items-center justify-between gap-3">
                {isArabic ? faq.q.ar : faq.q.en}
                <span className="text-primary-dark dark:text-yellow-400 shrink-0 group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <p className="text-sm text-gray-200 mt-3 leading-relaxed">
                {isArabic ? faq.a.ar : faq.a.en}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
