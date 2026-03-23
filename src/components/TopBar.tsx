import React from 'react';
import { useTheme } from '../context/ThemeContext';

const TopBar: React.FC = () => {
  const { isDark, toggleDarkMode } = useTheme();

  return (
    <div className="sticky top-0 z-50 bg-primary-dark dark:bg-gray-800 px-6 py-3 flex items-center justify-between flex-wrap gap-2.5 shadow-lg transition-colors">
      <div className="flex items-center gap-5 flex-wrap">
        <span className="text-gold font-cond text-xl font-bold tracking-widest">ARAM ELITE</span>
        <span className="bg-green dark:bg-green-700 text-white text-xs font-bold px-2.5 py-0.5 rounded font-cond tracking-wide">FREE CONSULTATION · استشارة مجانية</span>
      </div>
      <div className="flex gap-6 items-center flex-wrap">
        <a href="tel:+966XXXXXXXXX" className="text-blue-300 dark:text-blue-200 text-sm hover:text-white transition-colors flex items-center gap-1">
          📞 +966 XX XXX XXXX
        </a>
        <a href="https://wa.me/966XXXXXXXXX" className="text-blue-300 dark:text-blue-200 text-sm hover:text-white transition-colors flex items-center gap-1">
          💬 WhatsApp
        </a>
        <button
          onClick={toggleDarkMode}
          className="bg-gray-700 dark:bg-yellow-500 text-white dark:text-gray-900 px-4 py-2 text-sm font-bold rounded hover:bg-gray-600 dark:hover:bg-yellow-400 transition font-cond tracking-wide"
          aria-label="Toggle dark mode"
        >
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
        <a href="#contact" className="bg-accent dark:bg-red-600 text-white px-6 py-2 text-sm font-bold rounded hover:bg-red-700 dark:hover:bg-red-700 transition font-cond tracking-wide uppercase whitespace-nowrap">
          اطلب الخدمة الآن ▶
        </a>
      </div>
    </div>
  );
};

export default TopBar;
