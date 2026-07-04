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
    <section className="glass-section text-white px-6 py-16 md:py-20" id="why">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16 text-center">
          <span className="inline-block bg-primary dark:bg-blue-600 text-white font-cond text-xs font-bold uppercase px-5 py-2 rounded-full mb-5 tracking-wide">Why Choose Us</span>
          <h2 className="font-cond text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">We Don't Just Show Up — We Deliver</h2>
          <div className="w-20 h-1 bg-gold rounded-full mx-auto mb-4"></div>
          <p className="font-arabic text-lg font-bold text-gold mb-6">لا نكتفي بالحضور — بل ننجز ما وعدنا به</p>
          <a
            href="#contact"
            className="inline-block bg-gold dark:bg-yellow-500 text-black dark:text-gray-900 px-8 py-3.5 rounded-lg font-cond text-sm md:text-base font-bold uppercase hover:bg-yellow-400 dark:hover:bg-yellow-600 transition-all transform hover:scale-105 shadow-lg"
          >
            📞 Book Your Free Consultation · احجز استشارتك المجانية
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, i) => (
            <div key={i} className="glass-card-solid text-gray-900 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-5xl md:text-6xl mb-5">{reason.icon}</div>
              <h3 className="font-cond text-lg font-bold text-primary-dark dark:text-white mb-2">{reason.title}</h3>
              <p className="font-arabic text-sm text-primary-dark dark:text-blue-300 font-semibold mb-4">{reason.titleAr}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
