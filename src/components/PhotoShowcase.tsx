import React from 'react';

const PhotoShowcase: React.FC = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-1 bg-gray-200 dark:bg-gray-800">
      {/* Tall left column */}
      <div className="col-span-1 md:row-span-2">
        <div className="relative h-60 md:h-full overflow-hidden bg-gradient-to-br from-primary-dark to-primary dark:from-gray-700 dark:to-gray-800">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80" 
            alt="Luxury villa Riyadh" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-3 left-3 text-white">
            <p className="font-cond text-sm font-bold">Residential Construction</p>
            <p className="font-arabic text-xs text-gold">بناء سكني فاخر</p>
          </div>
        </div>
      </div>

      {/* Row 1 */}
      {[
        { img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80', title: 'Premium Interior', ar: 'تشطيبات فاخرة' },
        { img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=600&q=80', title: 'Lighting Design', ar: 'تصميم إضاءة' },
        { img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80', title: 'Garden Design', ar: 'حدائق راقية' },
        { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80', title: 'Smart Home', ar: 'منازل ذكية' },
      ].map((item, i) => (
        <div key={i} className="relative h-32 md:h-32 overflow-hidden bg-gray-300 dark:bg-gray-700">
          <img 
            src={item.img} 
            alt={item.title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-2 left-2 text-white text-xs">
            <p className="font-cond font-bold">{item.title}</p>
            <p className="font-arabic text-gold text-xs">{item.ar}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoShowcase;
