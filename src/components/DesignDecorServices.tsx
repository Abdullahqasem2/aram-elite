import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { images } from '../data/images';

interface DecorService {
  img: string;
  name: string;
  nameAr: string;
  desc: string;
  descAr: string;
}

const services: DecorService[] = [
  {
    img: images.img5592,
    name: 'Wood Cladding',
    nameAr: 'تكسية خشبية',
    desc: 'Premium interior & exterior wood cladding for walls, ceilings, and accent features.',
    descAr: 'أعمال تكسية خشبية فاخرة للجدران والأسقف والعناصر الديكورية داخلياً وخارجياً.',
  },
  {
    img: images.facade,
    name: 'Villa & Building Facade Design',
    nameAr: 'تصميم وتنفيذ واجهات الفلل والمباني',
    desc: 'Full façade design and implementation for villas, buildings, and commercial fronts.',
    descAr: 'تصميم وتنفيذ كامل لواجهات الفلل والمباني والمنشآت التجارية.',
  },
  {
    img: images.marble,
    name: 'Marble Works — Indoor & Outdoor',
    nameAr: 'أعمال رخام داخلي وخارجي',
    desc: 'Specialized marble installation for floors, walls, staircases, and outdoor features.',
    descAr: 'أعمال رخام متخصصة للأرضيات والجدران والسلالم والعناصر الخارجية.',
  },
  {
    img: images.gypsum,
    name: 'Gypsum Design',
    nameAr: 'تصاميم جبس',
    desc: 'Elegant gypsum ceiling and wall designs for high-end mansions and general projects.',
    descAr: 'تصاميم جبس أنيقة للأسقف والجدران للقصور والمنازل الفاخرة ومختلف المشاريع.',
  },
  {
    img: images.img5594,
    name: 'Restaurant & Café Concept Design',
    nameAr: 'تصميم مفاهيم المطاعم والمقاهي',
    desc: 'Custom concept design and construction for high-end restaurants, cafés, and businesses.',
    descAr: 'تصميم وتنفيذ مفاهيم خاصة للمطاعم والمقاهي والمنشآت التجارية الراقية.',
  },
];

const DesignDecorServices: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section className="glass-section-alt text-white px-6 py-16 md:py-20" id="design-decor">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block bg-gold dark:bg-yellow-500 text-primary-dark dark:text-gray-900 font-cond text-xs font-bold uppercase px-4 py-2 rounded-full mb-4 tracking-widest">
              ⭐ Signature Specialty · تخصص مميز
            </span>
            <h2 className="font-cond text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
              Professional Design & Decor Services
            </h2>
            <p className="font-arabic text-lg md:text-xl font-bold text-gold mb-3">خدمات التصميم والديكور الاحترافية</p>
            <div className="w-20 h-1 bg-gold rounded-full mb-4"></div>
            <p className="text-gray-200 leading-relaxed max-w-2xl">
              {lang === 'ar'
                ? 'يقدّم فريقنا أعمال تشطيب وديكور راقية بأعلى معايير الحرفية — من تكسية الخشب وتصميم الواجهات إلى أعمال الرخام والجبس ومفاهيم المطاعم والمقاهي.'
                : 'Our team delivers premium finishing and decor work to the highest craftsmanship standards — from wood cladding and façade design to marble, gypsum, and restaurant/café concept design.'
              }
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-gold dark:bg-yellow-500 text-primary-dark dark:text-gray-900 px-8 py-3.5 rounded-lg font-cond text-sm md:text-base font-bold uppercase hover:bg-yellow-300 dark:hover:bg-yellow-600 transition-all transform hover:scale-105 shadow-lg text-center whitespace-nowrap"
          >
            📋 Get a Free Quote · اطلب عرض سعر
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const waText = lang === 'ar'
              ? `مرحباً، أرغب بالاستفسار عن خدمة: ${service.nameAr}`
              : `Hi, I'd like to enquire about: ${service.name}`;
            return (
              <div
                key={`decor-${i}`}
                className="glass-card-solid text-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-cond text-lg font-bold text-primary-dark dark:text-blue-300 mb-1">
                    {service.name}
                  </h3>
                  <p className="font-arabic text-xs text-primary-dark dark:text-yellow-400 font-semibold mb-3">
                    {service.nameAr}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {lang === 'ar' ? service.descAr : service.desc}
                  </p>
                  <a
                    href={`https://wa.me/966502080228?text=${encodeURIComponent(waText)}`}
                    className="block text-center py-2.5 px-4 rounded font-cond text-xs font-bold uppercase bg-green dark:bg-green-600 text-white hover:bg-green-700 dark:hover:bg-green-700 transition"
                  >
                    💬 Enquire Now · استفسر الآن
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DesignDecorServices;
