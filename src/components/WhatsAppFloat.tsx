import React from 'react';

const WhatsAppFloat: React.FC = () => {
  return (
    <a
      href="https://wa.me/966500000000"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-30 w-14 h-14 md:w-16 md:h-16 bg-green dark:bg-green-600 hover:bg-green-700 dark:hover:bg-green-700 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl shadow-lg hover:shadow-2xl transition-all animate-pulse"
      title="Chat on WhatsApp"
    >
      💬
    </a>
  );
};

export default WhatsAppFloat;
