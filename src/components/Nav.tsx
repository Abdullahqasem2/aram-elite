import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Nav: React.FC = () => {
  const { lang } = useLanguage();

  const navLinks = lang === 'ar' 
    ? [
        { href: '#services', label: 'الخدمات' },
        { href: '#contracting', label: 'مقاولات' },
        { href: '#lighting', label: '💡 إضاءة ✦' },
        { href: '#maintenance', label: 'صيانة' },
        { href: '#renovation', label: 'تشطيب' },
        { href: '#contact', label: 'تواصل' },
      ]
    : [
        { href: '#services', label: 'Services' },
        { href: '#contracting', label: 'Contracting' },
        { href: '#lighting', label: '💡 Lighting' },
        { href: '#maintenance', label: 'Maintenance' },
        { href: '#renovation', label: 'Renovation' },
        { href: '#contact', label: 'Contact' },
      ];

  return (
    <nav className="sticky top-11 z-40 bg-gray-50 dark:bg-gray-800 border-b-4 border-primary dark:border-blue-500 px-6 py-2 flex items-center justify-between transition-colors gap-3 overflow-x-auto">
      <div className="flex flex-col justify-center whitespace-nowrap min-w-fit">
        <span className="font-cond text-lg md:text-2xl font-bold text-primary dark:text-blue-300 tracking-wider">ARAM</span>
        <span className="font-arabic text-xs md:text-sm text-gray-600 dark:text-gray-400">إيليت</span>
      </div>
      <ul className="hidden lg:flex list-none gap-0 flex-1 justify-center">
        {navLinks.map(link => (
          <li key={link.href} className="flex">
            <a href={link.href} className="flex items-center px-3 text-xs font-semibold text-gray-700 dark:text-gray-300 border-b-4 border-transparent hover:text-primary dark:hover:text-blue-300 hover:border-primary dark:hover:border-blue-400 transition-all whitespace-nowrap">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2 ml-auto">
        <a href="#contact" className="bg-primary dark:bg-blue-600 text-white px-4 py-2 text-xs md:text-sm font-bold rounded hover:bg-primary-dark dark:hover:bg-blue-700 transition-colors font-cond whitespace-nowrap">
          {lang === 'ar' ? 'اطلب' : 'Order'}
        </a>
      </div>
    </nav>
  );
};

export default Nav;
