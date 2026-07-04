import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Nav: React.FC<{ overHero?: boolean }> = ({ overHero = false }) => {
  const { lang } = useLanguage();

  const navLinks = lang === 'ar'
    ? [
        { href: '#contracting', label: 'مقاولات' },
        { href: '#design', label: 'تصميم' },
        { href: '#renovation', label: 'ترميم' },
        { href: '#maintenance', label: 'صيانة' },
        { href: '#luxury', label: '♛ قصور فاخرة' },
        { href: '#sports', label: 'رياضة' },
        { href: '#contact', label: 'تواصل' },
      ]
    : [
        { href: '#contracting', label: 'Contracting' },
        { href: '#design', label: 'Design' },
        { href: '#renovation', label: 'Renovation' },
        { href: '#maintenance', label: 'Maintenance' },
        { href: '#luxury', label: '♛ Luxury' },
        { href: '#sports', label: 'Sports' },
        { href: '#contact', label: 'Contact' },
      ];

  return (
    <nav className={`sticky top-11 z-40 px-6 py-2 flex items-center justify-between transition-colors gap-3 overflow-x-auto border-b-4 ${
      overHero
        ? 'bg-black/35 backdrop-blur-md text-white border-gold/80'
        : 'bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-primary dark:border-blue-500'
    }`}>
      <div className="flex flex-col justify-center whitespace-nowrap min-w-fit">
        <span className={`font-cond text-lg md:text-2xl font-bold tracking-wider ${overHero ? 'text-white' : 'text-primary dark:text-blue-300'}`}>ARAM</span>
        <span className={`font-arabic text-xs md:text-sm ${overHero ? 'text-gray-200' : 'text-gray-600 dark:text-gray-400'}`}>إيليت</span>
      </div>
      <ul className="hidden lg:flex list-none gap-0 flex-1 justify-center">
        {navLinks.map(link => (
          <li key={link.href} className="flex">
            <a href={link.href} className={`flex items-center px-3 text-xs font-semibold border-b-4 border-transparent transition-all whitespace-nowrap ${
              overHero
                ? 'text-white/90 hover:text-gold hover:border-gold'
                : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-300 hover:border-primary dark:hover:border-blue-400'
            }`}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2 ml-auto">
        <a href="#contact" className={`px-4 py-2 text-xs md:text-sm font-bold rounded transition-colors font-cond whitespace-nowrap ${
          overHero
            ? 'bg-gold text-primary-dark hover:bg-yellow-300'
            : 'bg-primary dark:bg-blue-600 text-white hover:bg-primary-dark dark:hover:bg-blue-700'
        }`}>
          {lang === 'ar' ? 'اطلب' : 'Order'}
        </a>
      </div>
    </nav>
  );
};

export default Nav;
