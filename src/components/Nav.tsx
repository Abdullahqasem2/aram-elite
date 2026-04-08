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
    <nav className="sticky top-11 z-40 bg-gray-50 dark:bg-gray-800 border-b-4 border-primary dark:border-blue-500 px-6 flex items-stretch justify-between transition-colors">
      <div className="flex flex-col justify-center py-3">
        <span className="font-cond text-2xl font-bold text-primary dark:text-blue-300 tracking-wider">ARAM ELITE GROUP</span>
        <span className="font-arabic text-sm text-gray-600 dark:text-gray-400">مجموعة أرام إيليت</span>
      </div>
      <ul className="hidden md:flex list-none gap-0">
        {navLinks.map(link => (
          <li key={link.href} className="flex">
            <a href={link.href} className="flex items-center px-5 text-sm font-semibold text-gray-700 dark:text-gray-300 border-b-4 border-transparent hover:text-primary dark:hover:text-blue-300 hover:border-primary dark:hover:border-blue-400 transition-all">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3">
        <a href="#contact" className="bg-primary dark:bg-blue-600 text-white px-6 py-2.5 text-sm font-bold rounded hover:bg-primary-dark dark:hover:bg-blue-700 transition-colors font-cond whitespace-nowrap">
          {lang === 'ar' ? 'اطلب الآن' : 'Order Now →'}
        </a>
      </div>
    </nav>
  );
};

export default Nav;
