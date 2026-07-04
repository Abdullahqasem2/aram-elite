import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Nav: React.FC<{ overHero?: boolean }> = ({ overHero = false }) => {
  const { lang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  const linkClass = overHero
    ? 'text-white/90 hover:text-gold hover:bg-white/10'
    : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-300 hover:bg-gray-100 dark:hover:bg-gray-700';

  const desktopLinkClass = `${linkClass} flex items-center px-3 text-xs font-semibold border-b-4 border-transparent transition-all whitespace-nowrap hover:border-gold`;

  return (
    <nav
      className={`relative px-4 sm:px-6 py-2 border-b-4 transition-colors ${
        overHero
          ? 'bg-black/35 backdrop-blur-md text-white border-gold/80'
          : 'bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-primary dark:border-blue-500'
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col justify-center whitespace-nowrap min-w-fit">
          <span className={`font-cond text-lg md:text-2xl font-bold tracking-wider ${overHero ? 'text-white' : 'text-primary dark:text-blue-300'}`}>ARAM</span>
          <span className={`font-arabic text-xs md:text-sm ${overHero ? 'text-gray-200' : 'text-gray-600 dark:text-gray-400'}`}>إيليت</span>
        </div>

        {/* Desktop links */}
        <ul className="hidden lg:flex list-none gap-0 flex-1 justify-center">
          {navLinks.map((link) => (
            <li key={link.href} className="flex">
              <a href={link.href} className={desktopLinkClass}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className={`hidden sm:inline-flex px-4 py-2 text-xs md:text-sm font-bold rounded transition-colors font-cond whitespace-nowrap ${
              overHero
                ? 'bg-gold text-primary-dark hover:bg-yellow-300'
                : 'bg-primary dark:bg-blue-600 text-white hover:bg-primary-dark dark:hover:bg-blue-700'
            }`}
          >
            {lang === 'ar' ? 'اطلب' : 'Order'}
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className={`lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg transition-colors ${
              overHero ? 'text-white hover:bg-white/10' : 'text-primary dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? (lang === 'ar' ? 'إغلاق القائمة' : 'Close menu') : (lang === 'ar' ? 'فتح القائمة' : 'Open menu')}
          >
            <span className={`block w-5 h-0.5 rounded transition-all ${overHero ? 'bg-white' : 'bg-primary dark:bg-white'} ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-5 h-0.5 rounded my-1 transition-all ${overHero ? 'bg-white' : 'bg-primary dark:bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 rounded transition-all ${overHero ? 'bg-white' : 'bg-primary dark:bg-white'} ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/40 z-40"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div className={`lg:hidden absolute left-0 right-0 top-full z-50 shadow-xl border-t ${
            overHero
              ? 'bg-primary-dark/95 backdrop-blur-md border-gold/30'
              : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700'
          }`}>
            <ul className="list-none py-2 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-6 py-3.5 text-sm font-semibold transition-colors ${linkClass}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="px-4 pb-4 sm:hidden">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block text-center py-3 rounded-lg font-cond text-sm font-bold bg-gold text-primary-dark hover:bg-yellow-300 transition-colors"
              >
                {lang === 'ar' ? 'اطلب الآن' : 'Order Now'}
              </a>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Nav;
