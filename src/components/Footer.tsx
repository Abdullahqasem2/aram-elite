import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black dark:bg-gray-950 text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Left */}
          <div>
            <p className="font-cond text-3xl font-bold text-gold dark:text-yellow-400 mb-1">ARAM ELITE GROUP</p>
            <p className="font-arabic text-base text-gray-300 dark:text-gray-400 mb-3.5">مجموعة أرام إيليت</p>
            <p className="text-sm text-gray-300 dark:text-gray-400 mb-1">Crafting Legacies, Elevating Standards</p>
            <p className="font-arabic text-sm text-gray-300 dark:text-gray-400">نصنع الإرث، نرتقي بالمعايير</p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-3.5 leading-relaxed">Riyadh's #1 contracting, maintenance & renovation group. Free consultation available.</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-cond text-sm font-bold uppercase text-gold dark:text-yellow-400 mb-4 tracking-wider">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-sm text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-yellow-400 transition">General Contracting</a></li>
              <li><a href="#services" className="text-sm text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-yellow-400 transition">Maintenance</a></li>
              <li><a href="#services" className="text-sm text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-yellow-400 transition">Renovation</a></li>
              <li><a href="#services" className="text-sm text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-yellow-400 transition">Sports Facilities</a></li>
              <li><a href="#services" className="text-sm text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-yellow-400 transition">Royal & Luxury</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cond text-sm font-bold uppercase text-gold dark:text-yellow-400 mb-4 tracking-wider">Contact · تواصل</h4>
            <ul className="space-y-2">
              <li><a href="tel:+966XXXXXXXXX" className="text-sm text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-yellow-400 transition">📞 +966 XX XXX XXXX</a></li>
              <li><a href="https://wa.me/966XXXXXXXXX" className="text-sm text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-yellow-400 transition">💬 WhatsApp</a></li>
              <li><a href="#contact" className="text-sm text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-yellow-400 transition">📝 Request Form</a></li>
              <li><a href="#contact" className="text-sm text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-yellow-400 transition">Free Consultation</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-gray-800 pt-6 text-center text-xs text-gray-400 dark:text-gray-500">
          <p>© 2025 Aram Elite Group · Riyadh, Saudi Arabia · جميع الحقوق محفوظة · All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
