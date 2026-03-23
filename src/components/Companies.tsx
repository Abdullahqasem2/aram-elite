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
    <section className="bg-primary-dark dark:bg-gray-900 text-white px-6 py-16" id="companies">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <span className="inline-block bg-gold dark:bg-yellow-500 text-black dark:text-gray-900 font-cond text-xs font-bold uppercase px-4 py-2 rounded-full mb-4">Our 5 Companies</span>
          <h2 className="font-cond text-4xl md:text-5xl font-bold mb-3">Specialists for Every Need</h2>
          <p className="font-arabic text-lg text-white text-opacity-85 dark:text-opacity-75 mb-3">متخصصون لكل احتياجاتك</p>
          <p className="text-white text-opacity-75 dark:text-opacity-65 leading-relaxed max-w-2xl mx-auto">Aram Elite Group brings together five specialist companies under one roof.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {companies.map((company, i) => (
            <div key={i} className="bg-white bg-opacity-10 dark:bg-opacity-5 border border-white border-opacity-20 dark:border-opacity-10 rounded-xl p-6 text-center hover:bg-opacity-15 dark:hover:bg-opacity-10 transition-colors">
              <p className="font-cond text-lg font-bold text-gold dark:text-yellow-400 mb-2">{company.name}</p>
              <p className="font-arabic text-sm text-white text-opacity-70 dark:text-opacity-60 mb-2">{company.ar}</p>
              <p className="text-xs text-white text-opacity-60 dark:text-opacity-50 leading-relaxed">{company.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
