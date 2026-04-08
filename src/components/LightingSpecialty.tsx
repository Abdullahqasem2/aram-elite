import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LightingSpecialty: React.FC = () => {
  const { lang } = useLanguage();

  const lightingServices = [
    { icon: '🏠', ar: '🏠 إضاءة المساكن الفاخرة والراقية', en: '🏠 Luxury Residence Lighting' },
    { icon: '🏛', ar: '🏛 إضاءة الواجهات المعمارية', en: '🏛 Architectural Façade Lighting' },
    { icon: '🌿', ar: '🌿 إضاءة الحدائق والمناطق الخارجية', en: '🌿 Landscape & Garden Lighting' },
    { icon: '💡', ar: '💡 إضاءة ذكية وأوتوماتيكية', en: '💡 Smart & Automated Lighting' },
    { icon: '🏟', ar: '🏟 إضاءة فيضانية ورياضية', en: '🏟 Sports & Floodlighting' },
    { icon: '🕯', ar: '🕯 إضاءة ديكورية واستعراضية', en: '🕯 Decorative & Statement Fixtures' },
    { icon: '🏢', ar: '🏢 إضاءة تجارية ومكتبية', en: '🏢 Commercial & Office Lighting' },
    { icon: '🔆', ar: '🔆 اختيار المصابيح وتوريدها', en: '🔆 Fixture Selection & Supply' },
  ];

  return (
    <section className="bg-linear-to-br from-primary-dark via-primary to-primary-dark dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block bg-gold dark:bg-yellow-500 text-primary-dark dark:text-gray-900 font-cond text-xs font-bold uppercase px-4 py-2 rounded-full mb-4 tracking-widest">
              {lang === 'ar' ? '⭐ تخصص موقع أرام إيليت' : '⭐ Signature Specialty'}
            </span>
            <h2 className="font-cond text-4xl md:text-5xl font-bold mb-6">
              {lang === 'ar' ? 'تصميم إضاءة متخصص — داخلي وخارجي' : 'Specialist Lighting Design — Indoor & Outdoor'}
            </h2>
            <p className="text-lg text-white text-opacity-90 mb-8 leading-relaxed">
              {lang === 'ar'
                ? 'من أبرز تخصصات أرام إيليت — تصميم الإضاءة المعمارية الاحترافي والتركيب الخبير. بأكثر من 40 سنة خبرة جماعية، فريق الإضاءة لدينا يتولى كل شيء: من المفهوم واختيار المصابيح إلى التوريد والتركيب المعتمد الكامل.'
                : 'One of Aram Elite\'s most important specialties — professional architectural lighting design and expert installation for all facility types. Our team handles concept, fixture selection, supply, and certified installation.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {lightingServices.map((service, i) => (
                <div key={`light-${i}`} className="bg-white bg-opacity-10 dark:bg-opacity-5 border border-white border-opacity-20 dark:border-opacity-10 rounded-lg p-4">
                  <p className="text-sm font-bold text-gold dark:text-yellow-400">{lang === 'ar' ? service.ar : service.en}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/966500000000" className="bg-green dark:bg-green-600 hover:bg-green-700 dark:hover:bg-green-700 text-white px-8 py-4 rounded-lg font-cond font-bold uppercase transition">
                💬 {lang === 'ar' ? 'استفسر على واتساب' : 'WhatsApp Enquiry'}
              </a>
              <a href="tel:+966500000000" className="bg-white bg-opacity-10 hover:bg-opacity-20 border-2 border-white text-white px-8 py-3.5 rounded-lg font-cond font-bold uppercase transition">
                📞 {lang === 'ar' ? 'اتصل بنا' : 'Call Us'}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=600&q=80',
              'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1536623975707-c4b3b2c1f75d?auto=format&fit=crop&w=400&q=80',
            ].map((src, i) => (
              <div key={`photo-${i}`} className={`rounded-lg overflow-hidden ${i === 0 ? 'col-span-2' : ''}`}>
                <img src={src} alt="Lighting showcase" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LightingSpecialty;
