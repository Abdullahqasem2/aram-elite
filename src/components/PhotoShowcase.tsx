import React from 'react';
import { images } from '../data/images';

const tiles = [
  { img: images.decor555, title: 'Premium Décor', ar: 'ديكور فاخر' },
  { img: images.img5593, title: 'Lighting Design', ar: 'تصميم إضاءة' },
  { img: images.gypsum1, title: 'Gypsum & Ceilings', ar: 'جبس وأسقف' },
  { img: images.marble, title: 'Marble & Stone', ar: 'رخام وحجر' },
];

const PhotoTile: React.FC<{ img: string; title: string; ar: string }> = ({ img, title, ar }) => (
  <div className="relative overflow-hidden min-h-[8rem] sm:min-h-[10rem]">
    <img
      src={img}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    <div className="absolute bottom-2 left-2 text-white text-xs">
      <p className="font-cond font-bold">{title}</p>
      <p className="font-arabic text-gold text-xs">{ar}</p>
    </div>
  </div>
);

const PhotoShowcase: React.FC = () => {
  return (
    /* dir=ltr keeps hero-left / tiles-right regardless of page RTL */
    <div
      className="grid grid-cols-2 sm:grid-cols-3 gap-1 glass-section-alt"
      dir="ltr"
    >
      {/* Hero — spans 2 rows on the left */}
      <div className="row-span-2 relative overflow-hidden min-h-[16rem] sm:min-h-0">
        <img
          src={images.design}
          alt="Luxury interior design Riyadh"
          className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3 text-white">
          <p className="font-cond text-sm font-bold">Interior Design</p>
          <p className="font-arabic text-xs text-gold">تصميم داخلي فاخر</p>
        </div>
      </div>

      {/* 2×2 tile grid on the right — no empty cells */}
      {tiles.map((item) => (
        <PhotoTile key={item.title} {...item} />
      ))}
    </div>
  );
};

export default PhotoShowcase;
