import React, { createContext, useContext, useState, useMemo } from 'react';

interface LanguageContextType {
  lang: 'ar' | 'en';
  setLang: (lang: 'ar' | 'en') => void;
  isArabic: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<'ar' | 'en'>(() => {
    try {
      return (localStorage.getItem('ae-lang') as 'ar' | 'en') || 'ar';
    } catch {
      return 'ar';
    }
  });

  const setLang = (newLang: 'ar' | 'en') => {
    setLangState(newLang);
    try {
      localStorage.setItem('ae-lang', newLang);
      document.documentElement.lang = newLang;
      document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    } catch {
      // Fallback if localStorage unavailable
    }
  };

  const value = useMemo(() => ({
    lang,
    setLang,
    isArabic: lang === 'ar',
  }), [lang]);

  React.useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
