import React, { useState } from 'react';

interface ServiceCard {
  icon: string;
  name: string;
  nameAr: string;
  desc: string;
  descAr: string;
  includes: string[];
  cta: string;
  ctaAr: string;
  isRed?: boolean;
  isGold?: boolean;
}

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState('contracting');

  const servicesByCategory: Record<string, ServiceCard[]> = {
    contracting: [
      {
        icon: '🏢',
        name: 'Turnkey Construction',
        nameAr: 'البناء الشامل تسليم مفتاح',
        desc: 'We build your project from the ground up — design, permits, construction, and handover.',
        descAr: 'نبني مشروعك من الأساس — تصميم، تراخيص، بناء، وتسليم.',
        includes: ['Architectural & structural design', 'Government permits & approvals', 'Full construction management', 'MEP systems', 'Quality control'],
        cta: 'Get a Free Quote Now · اطلب عرض سعر مجاني',
        ctaAr: 'اطلب عرض سعر مجاني',
        isRed: true,
      },
      {
        icon: '🛍',
        name: 'Shopping Centers & Malls',
        nameAr: 'مراكز التسوق والمولات',
        desc: 'Full construction of retail centers and shopping malls.',
        descAr: 'بناء شامل لمراكز التجزئة والمولات والمجمعات التجارية.',
        includes: ['Retail unit construction & fit-out', 'Food court & entertainment zones', 'Multi-level parking', 'Smart building systems', 'Fire suppression'],
        cta: 'Start Your Project · ابدأ مشروعك',
        ctaAr: 'ابدأ مشروعك',
      },
    ],
    maintenance: [
      {
        icon: '📋',
        name: 'Annual Maintenance Contract (AMC)',
        nameAr: 'عقد الصيانة السنوي',
        desc: 'One contract covers everything. We schedule all maintenance throughout the year.',
        descAr: 'عقد واحد يغطي كل شيء. نجدول جميع صيانة عقارك طوال العام.',
        includes: ['Scheduled preventive maintenance', 'Civil, electrical & plumbing', 'HVAC & mechanical systems', 'Emergency response', 'Monthly reports'],
        cta: 'Get My AMC Quote · اطلب عرض عقد الصيانة',
        ctaAr: 'اطلب عرض عقد الصيانة',
        isRed: true,
      },
      {
        icon: '⚡',
        name: '24/7 Emergency Maintenance',
        nameAr: 'الصيانة الطارئة ٢٤/٧',
        desc: 'Something broke? We respond fast, any time of day or night.',
        descAr: 'حدث عطل؟ نستجيب بسرعة في أي وقت من الليل أو النهار.',
        includes: ['Guaranteed response times', 'Structural & civil emergency', 'Electrical fault repair', 'Plumbing emergencies', 'HVAC breakdown'],
        cta: 'Call Now for Emergency · اتصل الآن للطوارئ',
        ctaAr: 'اتصل الآن للطوارئ',
        isRed: true,
      },
    ],
    renovation: [
      {
        icon: '🛋',
        name: 'Interior Design & Decoration',
        nameAr: 'التصميم الداخلي والديكور',
        desc: 'We design the space, source materials, and execute the transformation.',
        descAr: 'نصمم المساحة ونوفر المواد وننفذ التحول.',
        includes: ['3D design concept', 'Materials & color selection', 'Furniture procurement', 'Full installation', 'Flooring & ceilings'],
        cta: 'Book Free Design Consultation · استشارة تصميم مجانية',
        ctaAr: 'استشارة تصميم مجانية',
        isRed: true,
      },
      {
        icon: '🔨',
        name: 'Home & Villa Renovation',
        nameAr: 'تجديد المنازل والفيلات',
        desc: 'Full or partial home renovation — kitchens, bathrooms, living areas.',
        descAr: 'تجديد كامل أو جزئي للمنزل — مطابخ وحمامات وغرف معيشة.',
        includes: ['Kitchen & bathroom renovation', 'Flooring replacement', 'Ceiling & partition works', 'Painting & finishes', 'Electrical & plumbing upgrades'],
        cta: 'Get Free Home Assessment · تقييم منزلك مجاناً',
        ctaAr: 'تقييم منزلك مجاناً',
      },
    ],
    sports: [
      {
        icon: '⚽',
        name: 'Football Pitches & Stadiums',
        nameAr: 'ملاعب كرة القدم والاستادات',
        desc: 'We build football pitches and stadiums of any scale.',
        descAr: 'نبني ملاعب كرة القدم والاستادات بأي حجم.',
        includes: ['FIFA-standard turf', 'LED floodlighting', 'Grandstands & seating', 'Changing rooms', 'Drainage & irrigation'],
        cta: 'Get a Free Quote · اطلب عرض سعر مجاني',
        ctaAr: 'اطلب عرض سعر مجاني',
        isRed: true,
      },
      {
        icon: '🏊',
        name: 'Swimming Pools & Aquatic',
        nameAr: 'المسابح والمنشآت المائية',
        desc: 'Olympic pools, recreational pools, and full aquatic centers.',
        descAr: 'مسابح أولمبية وترفيهية وأطفال ومراكز مائية متكاملة.',
        includes: ['Pool design & construction', 'Filtration & water treatment', 'Tiling & waterproofing', 'Changing facilities', 'Maintenance contracts'],
        cta: 'Get Pool Quote · اطلب عرض سعر للمسبح',
        ctaAr: 'اطلب عرض سعر للمسبح',
      },
    ],
    lux: [
      {
        icon: '♛',
        name: 'Royal Palace Design & Build',
        nameAr: 'تصميم وبناء القصور الملكية',
        desc: 'We design and build royal residences with highest craftsmanship.',
        descAr: 'نصمم وننشئ المقار الملكية بأعلى مستويات الحرفية.',
        includes: ['Bespoke architectural design', 'Ceremonial halls', 'Advanced security', 'Smart palace automation', 'Palatial gardens'],
        cta: 'Request Private Consultation · استشارة خاصة',
        ctaAr: 'استشارة خاصة',
        isGold: true,
      },
      {
        icon: '🏡',
        name: 'Luxury Villa Design & Build',
        nameAr: 'تصميم وبناء الفيلات الفاخرة',
        desc: 'Build your dream home with custom architecture and premium materials.',
        descAr: 'ابنِ منزل أحلامك بهندسة مخصصة ومواد راقية.',
        includes: ['Custom villa design', 'Premium interior design', 'Smart home & AV', 'Pool & gym', 'High-end materials'],
        cta: 'Start Your Villa Project · ابدأ مشروع فيلتك',
        ctaAr: 'ابدأ مشروع فيلتك',
        isGold: true,
      },
    ],
  };

  return (
    <section className="bg-bg px-6 py-16" id="services">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <span className="inline-block bg-primary text-white font-cond text-xs font-bold uppercase px-3.5 py-1 rounded mb-3">All Services · جميع الخدمات</span>
          <h2 className="font-cond text-4xl md:text-5xl font-bold text-primary-dark mb-2">What Can We Do For You?</h2>
          <p className="font-arabic text-lg font-bold text-text3">ماذا نستطيع أن نقدم لك؟</p>
          <p className="text-text2 leading-relaxed max-w-2xl mt-3">Select a category below to see what we offer.</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-9">
          {['contracting', 'maintenance', 'renovation', 'sports', 'lux'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-lg font-cond text-sm font-bold uppercase transition ${
                activeTab === tab
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white'
              }`}
            >
              {tab === 'contracting' && '🏗 General Contracting'}
              {tab === 'maintenance' && '🔧 Maintenance'}
              {tab === 'renovation' && '🎨 Renovation'}
              {tab === 'sports' && '🏟 Sports Facilities'}
              {tab === 'lux' && '♛ Royal & Luxury'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {servicesByCategory[activeTab]?.map((service, i) => (
            <div
              key={i}
              className={`bg-gray-50 dark:bg-gray-700 border rounded-lg p-6 ${
                service.isGold ? 'border-t-4 border-t-gold' : 'border-t-4 border-t-primary'
              }`}
            >
              <span className="text-4xl block mb-3">{service.icon}</span>
              <h3 className="font-cond text-xl font-bold text-primary dark:text-blue-300">{service.name}</h3>
              <p className="font-arabic text-sm text-gold dark:text-yellow-400 font-semibold mb-3">{service.nameAr}</p>
              <p className="text-sm text-gray-700 dark:text-gray-200 mb-3">{service.desc}</p>
              <p className="font-arabic text-xs text-gray-600 dark:text-gray-400 mb-4">{service.descAr}</p>
              <div className="mb-4">
                <p className="text-xs font-bold uppercase text-gray-600 dark:text-gray-400 mb-2">Includes:</p>
                <ul className="space-y-1">
                  {service.includes.map((item, j) => (
                    <li key={j} className="text-xs text-gray-700 dark:text-gray-300 flex gap-1.5">
                      <span className="text-green font-bold">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#contact"
                className={`block text-center py-2.5 px-4 rounded font-cond text-xs font-bold uppercase transition ${
                  service.isRed
                    ? 'bg-accent text-white hover:bg-red-700'
                    : service.isGold
                    ? 'bg-gold text-black hover:bg-gray-700'
                    : 'bg-primary text-white hover:bg-primary-dark'
                }`}
              >
                {service.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
