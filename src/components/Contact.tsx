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
    <section className="bg-primary-dark dark:bg-gray-900 text-white px-6 py-20" id="contact">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <span className="inline-block bg-gold dark:bg-yellow-500 text-primary-dark dark:text-gray-900 font-cond text-xs font-bold uppercase px-4 py-2 rounded-full mb-4 tracking-widest">
            {lang === 'ar' ? 'تواصل معنا' : 'Contact · تواصل'}
          </span>
          <h2 className="font-cond text-4xl md:text-5xl font-bold mb-3">
            {lang === 'ar' ? 'تواصل مع مجموعة أرام إيليت' : 'Contact Aram Elite Group'}
          </h2>
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
              <a href="tel:+966500000000" className="flex items-center gap-4 bg-white bg-opacity-10 dark:bg-opacity-5 border border-white border-opacity-20 dark:border-opacity-10 rounded-lg p-5 hover:bg-opacity-15 dark:hover:bg-opacity-10 transition">
                <span className="text-3xl">📞</span>
                <div>
                  <p className="font-bold text-gold mb-1">{lang === 'ar' ? 'اتصل مباشرة' : 'Call Us Directly'} <span className="bg-green dark:bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded ml-2">{lang === 'ar' ? 'مجاناً' : 'FREE'}</span></p>
                  <p className="font-arabic text-sm text-white text-opacity-70">{lang === 'ar' ? 'اتصل بنا مباشرة — مجاناً' : '+966 50 000 0000'}</p>
                  <p className="text-lg font-bold text-gold mt-1">+966 50 000 0000</p>
                </div>
              </a>

              <a href="https://wa.me/966500000000" className="flex items-center gap-4 bg-white bg-opacity-10 dark:bg-opacity-5 border border-white border-opacity-20 dark:border-opacity-10 rounded-lg p-5 hover:bg-opacity-15 dark:hover:bg-opacity-10 transition">
                <span className="text-3xl">💬</span>
                <div>
                  <p className="font-bold text-green mb-1">{lang === 'ar' ? 'واتساب' : 'WhatsApp Us'} <span className="bg-green dark:bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded ml-2">{lang === 'ar' ? 'الأسرع' : 'FASTEST'}</span></p>
                  <p className="font-arabic text-sm text-white text-opacity-70">{lang === 'ar' ? 'رسالة مباشرة — الرد السريع' : 'Send photos, ask anything, anytime'}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-white bg-opacity-10 dark:bg-opacity-5 border border-white border-opacity-20 dark:border-opacity-10 rounded-lg p-5">
                <span className="text-3xl">🏠</span>
                <div>
                  <p className="font-bold text-gold mb-1">{lang === 'ar' ? 'زيارة موقع مجانية' : 'Free On-Site Visit'} <span className="bg-green dark:bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded ml-2">{lang === 'ar' ? 'مجاناً' : 'FREE'}</span></p>
                  <p className="font-arabic text-sm text-white text-opacity-70">{lang === 'ar' ? 'زيارة موقعك في الرياض' : 'We come to you anywhere in Riyadh'}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gold dark:bg-yellow-500 bg-opacity-10 dark:bg-opacity-5 border border-gold dark:border-yellow-500 border-opacity-30 dark:border-opacity-20 rounded-lg p-5">
                <span className="text-3xl">🕐</span>
                <div>
                  <p className="font-bold text-gold mb-1">{lang === 'ar' ? 'ساعات العمل' : 'Working Hours'}</p>
                  <p className="text-sm text-white text-opacity-80">{lang === 'ar' ? 'الأحد – الخميس: 8:00 صباحاً – 7:00 مساءً' : 'Sun – Thu: 8:00 AM – 7:00 PM'}</p>
                  <p className="text-xs text-gold font-semibold mt-1">24/7 {lang === 'ar' ? 'خدمة طوارئ متاحة' : 'Emergency Available'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
            <p className="font-cond text-2xl font-bold text-primary-dark dark:text-white mb-2">
              {lang === 'ar' ? 'اطلب الخدمة' : 'Request Service'}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
              {lang === 'ar' ? 'ملء النموذج واحصل على رد خلال ساعة' : 'Fill the form and get a response within 1 hour'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-600 dark:text-gray-300 mb-2 tracking-wide">
                    {lang === 'ar' ? 'الاسم' : 'Name'} *
                  </label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder={lang === 'ar' ? 'أدخل اسمك' : 'Your name'} className="w-full border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg p-3 focus:border-primary dark:focus:border-blue-400 focus:ring-2 focus:ring-primary focus:ring-opacity-10 outline-none transition-all text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-600 dark:text-gray-300 mb-2 tracking-wide">
                    {lang === 'ar' ? 'الهاتف' : 'Phone'} *
                  </label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+966..." className="w-full border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg p-3 focus:border-primary dark:focus:border-blue-400 focus:ring-2 focus:ring-primary focus:ring-opacity-10 outline-none transition-all text-sm" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 dark:text-gray-300 mb-2 tracking-wide">
                  {lang === 'ar' ? 'الخدمة' : 'Service'} *
                </label>
                <select name="service" value={formData.service} onChange={handleChange} required className="w-full border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg p-3 focus:border-primary dark:focus:border-blue-400 focus:ring-2 focus:ring-primary focus:ring-opacity-10 outline-none transition-all text-sm">
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
                <label className="block text-xs font-bold uppercase text-gray-600 dark:text-gray-300 mb-2 tracking-wide">
                  {lang === 'ar' ? 'نوع الاستشارة' : 'Consultation Type'} *
                </label>
                <select name="consultation" value={formData.consultation} onChange={handleChange} required className="w-full border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg p-3 focus:border-primary dark:focus:border-blue-400 focus:ring-2 focus:ring-primary focus:ring-opacity-10 outline-none transition-all text-sm">
                  <option value={lang === 'ar' ? 'زيارة موقع' : 'Site Visit'}>{lang === 'ar' ? 'زيارة موقع مجانية' : 'Free Site Visit'}</option>
                  <option value={lang === 'ar' ? 'اتصال هاتفي' : 'Phone Call'}>{lang === 'ar' ? 'اتصال هاتفي مجاني' : 'Free Phone Call'}</option>
                  <option value={lang === 'ar' ? 'اجتماع أونلاين' : 'Online'}>{lang === 'ar' ? 'اجتماع أونلاين مجاني' : 'Free Online Meeting'}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 dark:text-gray-300 mb-2 tracking-wide">
                  {lang === 'ar' ? 'التفاصيل' : 'Tell Us About Your Project'}
                </label>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder={lang === 'ar' ? 'صف احتياجاتك...' : 'Describe your needs...'} rows={4} className="w-full border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg p-3 focus:border-primary dark:focus:border-blue-400 focus:ring-2 focus:ring-primary focus:ring-opacity-10 outline-none resize-none transition-all text-sm"></textarea>
              </div>

              <button type="submit" className="w-full bg-gold dark:bg-yellow-500 text-primary-dark dark:text-gray-900 py-4 rounded-lg font-cond text-base font-bold uppercase hover:bg-yellow-300 dark:hover:bg-yellow-600 transition-all transform hover:shadow-lg mt-6">
                🚀 {lang === 'ar' ? 'أرسل الآن' : 'Send Request'}
              </button>
              <p className="text-center text-xs text-gray-600 dark:text-gray-400 mt-3">
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
