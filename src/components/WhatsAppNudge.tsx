import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface WhatsAppNudgeProps {
  variant?: 'primary' | 'secondary';
}

const WhatsAppNudge: React.FC<WhatsAppNudgeProps> = ({ variant = 'primary' }) => {
  const { lang } = useLanguage();

  const isPrimary = variant === 'primary';
  const bgClass = isPrimary
    ? 'bg-linear-to-r from-green-700 to-green-600 dark:from-green-800 dark:to-green-700'
    : 'bg-linear-to-r from-green-600 to-green-500 dark:from-green-700 dark:to-green-600';

  const message =
    lang === 'ar'
      ? isPrimary
        ? '💬 غير متأكد من أين تبدأ؟ لديك سؤال؟ راسلنا على واتساب — فريقنا يرشدك خطوة بخطوة بدون أي ضغط.'
        : '💬 لا تزال مترددًا؟ لديك سؤال؟ راسلنا على واتساب في أي وقت — فريقنا يرد بسرعة ويقدم نصيحة صادقة بدون أي ضغط مبيعات.'
      : isPrimary
        ? '💬 Not sure where to start? WhatsApp us — our team guides you step by step, no pressure.'
        : '💬 Still hesitant? WhatsApp us anytime — our team responds fast and gives honest advice with no sales pressure.';

  const buttonText = lang === 'ar' ? '💬 راسلنا الآن على واتساب' : '💬 WhatsApp Us Now';

  return (
    <div className={`${bgClass} px-6 py-6 text-white`}>
      <div className="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <p className="text-base font-semibold text-opacity-95">{message}</p>
        <a
          href={`https://wa.me/966500000000${lang === 'ar' ? '?text=أهلاً' : ''}`}
          className="bg-white text-green-700 dark:text-green-800 px-8 py-3 rounded-lg font-cond font-bold uppercase hover:bg-gray-100 transition-colors whitespace-nowrap"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default WhatsAppNudge;
