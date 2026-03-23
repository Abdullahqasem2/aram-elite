import React from 'react';

const Nav: React.FC = () => {
  return (
    <nav className="sticky top-11 z-40 bg-gray-50 dark:bg-gray-800 border-b-4 border-primary dark:border-blue-500 px-6 flex items-stretch justify-between transition-colors">
      <div className="flex flex-col justify-center py-3">
        <span className="font-cond text-2xl font-bold text-primary dark:text-blue-300 tracking-wider">ARAM ELITE GROUP</span>
        <span className="font-arabic text-sm text-gray-600 dark:text-gray-400">مجموعة أرام إيليت</span>
      </div>
      <ul className="hidden md:flex list-none gap-0">
        <li className="flex"><a href="#services" className="flex items-center px-5 text-sm font-semibold text-gray-700 dark:text-gray-300 border-b-4 border-transparent hover:text-primary dark:hover:text-blue-300 hover:border-primary dark:hover:border-blue-400 transition-all">Services / الخدمات</a></li>
        <li className="flex"><a href="#contracting" className="flex items-center px-5 text-sm font-semibold text-gray-700 dark:text-gray-300 border-b-4 border-transparent hover:text-primary dark:hover:text-blue-300 hover:border-primary dark:hover:border-blue-400 transition-all">Contracting</a></li>
        <li className="flex"><a href="#maintenance" className="flex items-center px-5 text-sm font-semibold text-gray-700 dark:text-gray-300 border-b-4 border-transparent hover:text-primary dark:hover:text-blue-300 hover:border-primary dark:hover:border-blue-400 transition-all">Maintenance</a></li>
        <li className="flex"><a href="#renovation" className="flex items-center px-5 text-sm font-semibold text-gray-700 dark:text-gray-300 border-b-4 border-transparent hover:text-primary dark:hover:text-blue-300 hover:border-primary dark:hover:border-blue-400 transition-all">Renovation</a></li>
        <li className="flex"><a href="#contact" className="flex items-center px-5 text-sm font-semibold text-gray-700 dark:text-gray-300 border-b-4 border-transparent hover:text-primary dark:hover:text-blue-300 hover:border-primary dark:hover:border-blue-400 transition-all">Contact</a></li>
      </ul>
      <div className="flex items-center gap-3">
        <a href="#contact" className="bg-primary dark:bg-blue-600 text-white px-6 py-2.5 text-sm font-bold rounded hover:bg-primary-dark dark:hover:bg-blue-700 transition-colors font-cond whitespace-nowrap">Order Service Now →</a>
      </div>
    </nav>
  );
};

export default Nav;
