import React from 'react';

const WhyUs: React.FC = () => {
  const reasons = [
    { icon: '🎁', title: '100% Free Consultation', titleAr: 'استشارة مجانية ١٠٠٪', desc: 'Visit your site for free, consult by phone, or meet online — no commitment.' },
    { icon: '⏱', title: 'On Time, Every Time', titleAr: 'في الموعد دائماً', desc: 'We take deadlines seriously with real-time progress updates.' },
    { icon: '💰', title: 'Transparent Pricing', titleAr: 'أسعار شفافة وواضحة', desc: 'Detailed quote before work starts. No hidden costs. No surprises.' },
    { icon: '👑', title: 'Royal-Level Experience', titleAr: 'خبرة على مستوى القصور', desc: 'We have designed royal palaces and landmark projects.' },
    { icon: '🔑', title: 'One Group, Full Coverage', titleAr: 'مجموعة واحدة، تغطية كاملة', desc: 'Construction, maintenance, renovation, sports, luxury — all in one.' },
    { icon: '📞', title: 'Always Reachable', titleAr: 'دائماً في متناول يدك', desc: 'Call, WhatsApp, or fill form — we respond within the hour. 24/7 emergency.' },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800 px-6 py-16" id="why">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <span className="inline-block bg-primary dark:bg-blue-600 text-white font-cond text-xs font-bold uppercase px-4 py-2 rounded-full mb-4">Why Choose Us</span>
          <h2 className="font-cond text-4xl md:text-5xl font-bold text-primary dark:text-blue-300 mb-3">We Don't Just Show Up — We Deliver</h2>
          <p className="font-arabic text-lg font-bold text-gray-700 dark:text-gray-300">لا نكتفي بالحضور — بل ننجز ما وعدنا به</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div key={i} className="bg-gray-100 dark:bg-gray-700 rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-600">
              <div className="text-6xl mb-4">{reason.icon}</div>
              <h3 className="font-cond text-lg font-bold text-primary dark:text-blue-300 mb-2">{reason.title}</h3>
              <p className="font-arabic text-sm text-gold dark:text-yellow-400 font-semibold mb-3">{reason.titleAr}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
