import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    service: '',
    consultation: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(lang === 'ar' ? 'شكراً! سنتواصل معك خلال ساعة واحدة.' : 'Thank you! We will contact you within 1 hour.');
    setFormData({ name: '', phone: '', company: '', service: '', consultation: '', message: '' });
  };

  const services = lang === 'ar'
    ? [
        { group: '🏗 مقاولات عامة', items: ['بناء مبنى جديد', 'مجمع تجاري / مول', 'فيلا / سكني'] },
        { group: '💡 تصميم إضاءة', items: ['إضاءة داخلية', 'إضاءة خارجية / واجهات', 'إضاءة حدائق'] },
        { group: '🔧 صيانة', items: ['عقد صيانة سنوي', 'صيانة طارئة', 'إدارة مرافق'] },
        { group: '✦ تشطيب', items: ['تبليط', 'رخام وجرانيت', 'تجديد منزل'] },
        { group: '⚙️ أنظمة', items: ['سباكة', 'كهرباء', 'مصعد', 'منزل ذكي'] },
        { group: '🌿 حدائق', items: ['تصميم حدائق', 'مسبح', 'نظام ري'] },
        { group: '🏟 رياضة', items: ['ملعب كرة قدم', 'صالة رياضية', 'مسبح رياضي'] },
        { group: '♛ فاخر', items: ['قصر / منزل فاخر', 'تجديد راقي', 'صيانة عقار فاخر'] },
      ]
    : [
        { group: '🏗 Contracting', items: ['Turnkey Building', 'Commercial / Mall', 'Villa / Residential'] },
        { group: '💡 Lighting Design', items: ['Indoor Lighting', 'Outdoor / Façade', 'Garden Lighting'] },
        { group: '🔧 Maintenance', items: ['Annual Contract (AMC)', 'Emergency Maintenance', 'Facilities Management'] },
        { group: '✦ Finishes', items: ['Tiling', 'Marble & Granite', 'Home Renovation'] },
        { group: '⚙️ Systems', items: ['Plumbing', 'Electrical', 'Elevators', 'Smart Home'] },
        { group: '🌿 Landscape', items: ['Garden Design', 'Swimming Pool', 'Irrigation'] },
        { group: '🏟 Sports', items: ['Football Pitch', 'Gym', 'Sports Pool'] },
        { group: '♛ Luxury', items: ['Palace / Mansion', 'High-End Renovation', 'Luxury Property Care'] },
      ];

  return (
    <section className="glass-dark text-white px-6 py-20" id="contact">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <span className="inline-block bg-gold dark:bg-yellow-500 text-primary-dark dark:text-gray-900 font-cond text-xs font-bold uppercase px-4 py-2 rounded-full mb-4 tracking-widest">
            Contact · تواصل معنا
          </span>
          <h2 className="font-cond text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            Contact Aram Elite Group
          </h2>
          <p className="font-arabic text-lg md:text-xl font-bold text-gold mb-4">تواصل مع مجموعة أرام إيليت</p>
          <p className="text-lg text-white text-opacity-75 dark:text-opacity-65">
            {lang === 'ar'
              ? 'تواصل معنا عبر الهاتف أو واتساب أو النموذج لحجز استشارتك المجانية. نرد خلال ساعة.'
              : 'Reach us by call, WhatsApp, or form for your free consultation. We respond within the hour.'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Methods */}
          <div>
            <div className="space-y-4">
              <a href="tel:+966502080228" className="flex items-center gap-4 glass-card-solid !text-black rounded-lg p-5 hover:opacity-95 transition shadow-sm">
                <span className="text-3xl">📞</span>
                <div>
                  <p className="font-bold !text-black mb-1">Call Us Directly · اتصل مباشرة <span className="bg-green text-white text-xs font-bold px-2 py-0.5 rounded ml-2">FREE · مجاناً</span></p>
                  <p className="text-lg font-bold !text-black mt-1">+966 50 208 0228</p>
                </div>
              </a>

              <a href="https://wa.me/966502080228" className="flex items-center gap-4 glass-card-solid text-black rounded-lg p-5 hover:opacity-95 transition shadow-sm">
                <span className="text-3xl">💬</span>
                <div>
                  <p className="font-bold text-black mb-1">WhatsApp Us · واتساب <span className="bg-green text-white text-xs font-bold px-2 py-0.5 rounded ml-2">FASTEST · الأسرع</span></p>
                  <p className="text-sm text-black">{lang === 'ar' ? 'رسالة مباشرة — الرد السريع' : 'Send photos, ask anything, anytime'}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 glass-card-solid text-black rounded-lg p-5 shadow-sm">
                <span className="text-3xl">🏠</span>
                <div>
                  <p className="font-bold text-black mb-1">Free On-Site Visit · زيارة موقع مجانية <span className="bg-green text-white text-xs font-bold px-2 py-0.5 rounded ml-2">FREE · مجاناً</span></p>
                  <p className="text-sm text-black">{lang === 'ar' ? 'زيارة موقعك في الرياض' : 'We come to you anywhere in Riyadh'}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 glass-card-solid text-black rounded-lg p-5 shadow-sm">
                <span className="text-3xl">🕐</span>
                <div>
                  <p className="font-bold text-black mb-1">Working Hours · ساعات العمل</p>
                  <p className="text-sm text-black">{lang === 'ar' ? 'الأحد – الخميس: 8:00 صباحاً – 7:00 مساءً' : 'Sun – Thu: 8:00 AM – 7:00 PM'}</p>
                  <p className="text-xs text-black font-semibold mt-1">24/7 {lang === 'ar' ? 'خدمة طوارئ متاحة' : 'Emergency Available'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="glass-card-solid rounded-2xl p-8 shadow-2xl text-gray-900">
            <p className="font-cond text-2xl font-bold text-primary-dark dark:text-white mb-1">
              Request Service · اطلب الخدمة
            </p>
            <p className="text-gray-700 dark:text-gray-400 text-sm mb-6">
              {lang === 'ar' ? 'ملء النموذج واحصل على رد خلال ساعة' : 'Fill the form and get a response within 1 hour'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-2 tracking-wide">
                    Name · الاسم *
                  </label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder={lang === 'ar' ? 'أدخل اسمك' : 'Your name'} className="w-full border-2 border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 rounded-lg p-3 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-10 outline-none transition-all text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-400" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-2 tracking-wide">
                    Phone · الهاتف *
                  </label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+966..." className="w-full border-2 border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 rounded-lg p-3 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-10 outline-none transition-all text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-400" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-2 tracking-wide">
                  Service · الخدمة *
                </label>
                <select name="service" value={formData.service} onChange={handleChange} required className="w-full border-2 border-gray-300 bg-white text-gray-900 rounded-lg p-3 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-10 outline-none transition-all text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-400">
                  <option value="">{lang === 'ar' ? '-- اختر الخدمة --' : '-- Select service --'}</option>
                  {services.map(group => (
                    <optgroup key={group.group} label={group.group}>
                      {group.items.map(item => (
                        <option key={item} value={item}>{item}</option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-2 tracking-wide">
                  Consultation Type · نوع الاستشارة *
                </label>
                <select name="consultation" value={formData.consultation} onChange={handleChange} required className="w-full border-2 border-gray-300 bg-white text-gray-900 rounded-lg p-3 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-10 outline-none transition-all text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-400">
                  <option value={lang === 'ar' ? 'زيارة موقع' : 'Site Visit'}>{lang === 'ar' ? 'زيارة موقع مجانية' : 'Free Site Visit'}</option>
                  <option value={lang === 'ar' ? 'اتصال هاتفي' : 'Phone Call'}>{lang === 'ar' ? 'اتصال هاتفي مجاني' : 'Free Phone Call'}</option>
                  <option value={lang === 'ar' ? 'اجتماع أونلاين' : 'Online'}>{lang === 'ar' ? 'اجتماع أونلاين مجاني' : 'Free Online Meeting'}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-2 tracking-wide">
                  Tell Us About Your Project · التفاصيل
                </label>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder={lang === 'ar' ? 'صف احتياجاتك...' : 'Describe your needs...'} rows={4} className="w-full border-2 border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 rounded-lg p-3 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-10 outline-none resize-none transition-all text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-400"></textarea>
              </div>

              <button type="submit" className="w-full bg-gold dark:bg-yellow-500 text-primary-dark dark:text-gray-900 py-4 rounded-lg font-cond text-base font-bold uppercase hover:bg-yellow-300 dark:hover:bg-yellow-600 transition-all transform hover:shadow-lg mt-6">
                🚀 Send Request · أرسل الآن
              </button>
              <p className="text-center text-xs text-gray-700 dark:text-gray-400 mt-3">
                <span className="text-green font-bold">✓</span> {lang === 'ar' ? 'رد خلال ساعة' : 'Response within 1 hour'} &nbsp; | &nbsp;
                <span className="text-green font-bold">✓</span> {lang === 'ar' ? 'خصوصية مضمونة' : 'Privacy guaranteed'}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
