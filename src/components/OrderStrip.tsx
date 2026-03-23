import React from 'react';

const OrderStrip: React.FC = () => {
  return (
    <div className="bg-accent dark:bg-red-600 px-6 py-5 text-center">
      <p className="text-white font-cond text-2xl font-bold uppercase mb-1">Don't Wait — Order Your Service Today</p>
      <p className="font-arabic text-white text-lg font-bold">لا تتأخر — اطلب خدمتك اليوم</p>
      <div className="flex flex-wrap gap-3 justify-center mt-3.5">
        <a href="tel:+966XXXXXXXXX" className="bg-gold dark:bg-yellow-500 text-black dark:text-gray-900 px-7 py-3 rounded font-cond text-base font-bold uppercase hover:bg-yellow-400 dark:hover:bg-yellow-600 transition">📞 Call Now · اتصل الآن</a>
        <a href="https://wa.me/966XXXXXXXXX" className="border-2 border-gold dark:border-yellow-500 text-gold dark:text-yellow-400 px-7 py-2.5 rounded font-cond text-base font-bold uppercase hover:bg-gold hover:bg-opacity-10 dark:hover:bg-yellow-500 dark:hover:bg-opacity-10 transition">💬 WhatsApp</a>
        <a href="#contact" className="border-2 border-gold dark:border-yellow-500 text-gold dark:text-yellow-400 px-7 py-2.5 rounded font-cond text-base font-bold uppercase hover:bg-gold hover:bg-opacity-10 dark:hover:bg-yellow-500 dark:hover:bg-opacity-10 transition">📝 Fill in Request Form</a>
      </div>
    </div>
  );
};

export default OrderStrip;
