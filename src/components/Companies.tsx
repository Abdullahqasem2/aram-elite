import React from 'react';

const Companies: React.FC = () => {
  const companies = [
    { name: 'Aram Elite Contracting', ar: 'أرام إيليت للمقاولات', desc: 'General contracting · turnkey projects' },
    { name: 'Aram Elite Maintenance', ar: 'أرام إيليت للصيانة', desc: 'AMC contracts · facilities management' },
    { name: 'Aram Elite Renovation', ar: 'أرام إيليت للتجديد', desc: 'Interior design · renovation · heritage' },
    { name: 'Aram Elite Sports', ar: 'أرام إيليت للرياضة', desc: 'Stadiums · gyms · pools · courts' },
    { name: 'Aram Elite Lux', ar: 'أرام إيليت لوكس', desc: 'Royal palaces · luxury villas · smart homes' },
  ];

  return (
    <section className="glass-section-alt text-white px-6 py-16" id="companies">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <span className="inline-block bg-gold dark:bg-yellow-500 text-black dark:text-gray-900 font-cond text-xs font-bold uppercase px-4 py-2 rounded-full mb-4">Our 5 Companies</span>
          <h2 className="font-cond text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">Specialists for Every Need</h2>
          <div className="w-20 h-1 bg-gold rounded-full mx-auto mb-4"></div>
          <p className="font-arabic text-lg text-gold font-semibold mb-3">متخصصون لكل احتياجاتك</p>
          <p className="text-gray-200 leading-relaxed max-w-2xl mx-auto mb-6">Aram Elite Group brings together five specialist companies under one roof.</p>
          <a
            href="#contact"
            className="inline-block bg-gold dark:bg-yellow-500 text-black dark:text-gray-900 px-8 py-3.5 rounded-lg font-cond text-sm md:text-base font-bold uppercase hover:bg-yellow-400 dark:hover:bg-yellow-600 transition-all transform hover:scale-105 shadow-lg"
          >
            📋 Talk to a Specialist · تحدث مع متخصص
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {companies.map((company, i) => (
            <div key={i} className="glass-card-solid text-gray-900 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <p className="font-cond text-lg font-bold text-primary-dark dark:text-yellow-400 mb-2">{company.name}</p>
              <p className="font-arabic text-sm text-gray-600 dark:text-gray-400 mb-2">{company.ar}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{company.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
