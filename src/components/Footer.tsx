import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <footer className="bg-black dark:bg-gray-950 text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Left */}
          <div>
            <p className="font-cond text-3xl font-bold text-gold dark:text-yellow-400 mb-1">ARAM ELITE GROUP</p>
            <p className="font-arabic text-base text-gray-300 dark:text-gray-400 mb-3.5">مجموعة أرام إيليت</p>
            <p className="text-sm text-gray-300 dark:text-gray-400 mb-1">
              {lang === 'ar' ? 'صناعة الإرث، رفع المعايير' : 'Crafting Legacies, Elevating Standards'}
            </p>
            <p className="font-arabic text-sm text-gray-300 dark:text-gray-400">نصنع الإرث، نرتقي بالمعايير</p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-3.5 leading-relaxed">
              {lang === 'ar'
                ? 'مجموعة أرام إيليت — الأكثر شمولاً للمقاولات والصيانة والإضاءة في الرياض. استشارة مجانية متاحة.'
                : 'Riyadh\'s #1 contracting, maintenance & lighting group. Free consultation available.'
              }
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-cond text-sm font-bold uppercase text-gold dark:text-yellow-400 mb-4 tracking-wider">
              {lang === 'ar' ? 'خدماتنا' : 'Our Services'}
            </h4>
            <ul className="space-y-2">
              {(lang === 'ar'
                ? [
                    { href: '#services', label: 'المقاولات العامة' },
                    { href: '#lighting', label: 'تصميم الإضاءة' },
                    { href: '#maintenance', label: 'الصيانة' },
                    { href: '#renovation', label: 'التجديد والتشطيب' },
                    { href: '#sports', label: 'المنشآت الرياضية' },
                    { href: '#lux', label: 'الفاخرة والقصور' },
                  ]
                : [
                    { href: '#services', label: 'General Contracting' },
                    { href: '#lighting', label: 'Lighting Design' },
                    { href: '#maintenance', label: 'Maintenance' },
                    { href: '#renovation', label: 'Renovation' },
                    { href: '#sports', label: 'Sports Facilities' },
                    { href: '#lux', label: 'Royal & Luxury' },
                  ]
              ).map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-yellow-400 transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cond text-sm font-bold uppercase text-gold dark:text-yellow-400 mb-4 tracking-wider">
              {lang === 'ar' ? 'تواصل معنا' : 'Contact · تواصل'}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="tel:+966500000000" className="text-sm text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-yellow-400 transition">
                  📞 +966 50 000 0000
                </a>
              </li>
              <li>
                <a href="https://wa.me/966500000000" className="text-sm text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-yellow-400 transition">
                  💬 {lang === 'ar' ? 'واتساب' : 'WhatsApp'}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-yellow-400 transition">
                  📝 {lang === 'ar' ? 'نموذج الطلب' : 'Request Form'}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-yellow-400 transition">
                  {lang === 'ar' ? 'استشارة مجانية' : 'Free Consultation'}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-gray-800 pt-6 text-center text-xs text-gray-400 dark:text-gray-500">
          <p>
            © 2025 {lang === 'ar' ? 'مجموعة أرام إيليت' : 'Aram Elite Group'} · {lang === 'ar' ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'} · {lang === 'ar' ? 'جميع الحقوق محفوظة' : 'All Rights Reserved'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
