import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { num: '10+', label: 'Years in Saudi Arabia', ar: 'سنوات في المملكة' },
    { num: '5', label: 'Specialist Companies', ar: 'شركات متخصصة' },
    { num: '500+', label: 'Projects Completed', ar: 'مشروع منجز' },
    { num: '100%', label: 'Client Satisfaction', ar: 'رضا عملائنا' },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-gray-100 dark:bg-gray-700 rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-600">
              <div className="font-cond text-5xl md:text-6xl font-bold text-primary dark:text-blue-400 mb-3">{stat.num}</div>
              <div className="font-cond text-sm md:text-base font-bold text-gray-700 dark:text-gray-200 mb-1">{stat.label}</div>
              <div className="font-arabic text-sm text-gray-500 dark:text-gray-400">{stat.ar}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
