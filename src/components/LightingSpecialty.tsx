import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { images } from '../data/images';

const showcasePhotos = [
  { src: images.decor22, alt: 'Luxury living room with integrated lighting' },
  { src: images.img5593, alt: 'Dining room chandelier and cove lighting' },
  { src: images.img5591, alt: 'Office bookshelf and ceiling lighting' },
  { src: images.facade, alt: 'Architectural facade lighting' },
];

const ShowcaseImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
    loading="lazy"
    onError={(e) => {
      (e.currentTarget.parentElement as HTMLElement).style.display = 'none';
    }}
  />
);

const lightingServices = [
  { icon: '🏠', en: 'Luxury Residence Lighting', ar: 'إضاءة المساكن الفاخرة والراقية' },
  { icon: '🏛', en: 'Architectural Façade Lighting', ar: 'إضاءة الواجهات المعمارية' },
  { icon: '🌿', en: 'Landscape & Garden Lighting', ar: 'إضاءة الحدائق والمناطق الخارجية' },
  { icon: '💡', en: 'Smart & Automated Lighting', ar: 'إضاءة ذكية وأوتوماتيكية' },
  { icon: '🏟', en: 'Sports & Floodlighting', ar: 'إضاءة فيضانية ورياضية' },
  { icon: '🕯', en: 'Decorative & Statement Fixtures', ar: 'إضاءة ديكورية واستعراضية' },
  { icon: '🏢', en: 'Commercial & Office Lighting', ar: 'إضاءة تجارية ومكتبية' },
  { icon: '🔆', en: 'Fixture Selection & Supply', ar: 'اختيار المصابيح وتوريدها' },
];

const LightingSpecialty: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section className="glass-dark text-white px-6 py-20" id="lighting">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block bg-gold dark:bg-yellow-500 text-primary-dark dark:text-gray-900 font-cond text-xs font-bold uppercase px-4 py-2 rounded-full mb-4 tracking-widest">
              ⭐ Signature Specialty · تخصص مميز
            </span>
            <h2 className="font-cond text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
              Specialist Lighting Design — Indoor & Outdoor
            </h2>
            <p className="font-arabic text-lg md:text-xl font-bold text-gold mb-4">تصميم إضاءة متخصص — داخلي وخارجي</p>
            <div className="w-20 h-1 bg-gold rounded-full mb-6"></div>
            <a
              href="https://wa.me/966502080228"
              className="inline-block bg-gold dark:bg-yellow-500 text-primary-dark dark:text-gray-900 px-6 py-2.5 rounded-lg font-cond text-sm font-bold uppercase hover:bg-yellow-300 dark:hover:bg-yellow-600 transition-all transform hover:scale-105 shadow-lg mb-6"
            >
              💬 Enquire Now · استفسر الآن
            </a>
            <p className="text-lg text-white text-opacity-90 mb-8 leading-relaxed">
              {lang === 'ar'
                ? 'من أبرز تخصصات أرام إيليت — تصميم الإضاءة المعمارية الاحترافي والتركيب الخبير. بأكثر من 40 سنة خبرة جماعية، فريق الإضاءة لدينا يتولى كل شيء: من المفهوم واختيار المصابيح إلى التوريد والتركيب المعتمد الكامل.'
                : 'One of Aram Elite\'s most important specialties — professional architectural lighting design and expert installation for all facility types. Our team handles concept, fixture selection, supply, and certified installation.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {lightingServices.map((service, i) => (
                <div key={`light-${i}`} className="glass-card text-white rounded-lg p-4">
                  <p className="text-sm font-bold text-white">{service.icon} {service.en}</p>
                  <p className="font-arabic text-xs text-gray-200">{service.ar}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/966502080228" className="bg-green dark:bg-green-600 hover:bg-green-700 dark:hover:bg-green-700 text-white px-8 py-4 rounded-lg font-cond font-bold uppercase transition">
                💬 WhatsApp Enquiry · استفسر على واتساب
              </a>
              <a href="tel:+966502080228" className="bg-white !text-black hover:bg-gray-100 border-2 border-white px-8 py-3.5 rounded-lg font-cond font-bold uppercase transition">
                📞 Call Us · اتصل بنا
              </a>
            </div>
          </div>

          {/* Bento grid: wide top + tall left + two stacked right */}
          <div className="grid grid-cols-2 gap-3 grid-rows-[11rem_11rem_11rem] md:grid-rows-[12rem_12rem_12rem]">
            <div className="col-span-2 row-start-1 rounded-lg overflow-hidden">
              <ShowcaseImage src={showcasePhotos[0].src} alt={showcasePhotos[0].alt} />
            </div>
            <div className="row-span-2 row-start-2 col-start-1 rounded-lg overflow-hidden">
              <ShowcaseImage src={showcasePhotos[1].src} alt={showcasePhotos[1].alt} />
            </div>
            <div className="row-start-2 col-start-2 rounded-lg overflow-hidden">
              <ShowcaseImage src={showcasePhotos[2].src} alt={showcasePhotos[2].alt} />
            </div>
            <div className="row-start-3 col-start-2 rounded-lg overflow-hidden">
              <ShowcaseImage src={showcasePhotos[3].src} alt={showcasePhotos[3].alt} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LightingSpecialty;
