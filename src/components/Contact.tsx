import React, { useState } from 'react';

const Contact: React.FC = () => {
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
    alert('Thank you! We will contact you within 1 hour.');
    setFormData({ name: '', phone: '', company: '', service: '', consultation: '', message: '' });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-800 px-6 py-16" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <span className="inline-block bg-accent text-white font-cond text-xs font-bold uppercase px-3.5 py-1 rounded mb-3">Order Now</span>
          <h2 className="font-cond text-4xl md:text-5xl font-bold text-primary-dark mb-2">Get Your Free Consultation Today</h2>
          <p className="font-arabic text-lg font-bold text-gray-700 dark:text-gray-300">احصل على استشارتك المجانية اليوم</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Contact Methods */}
          <div>
            <div className="space-y-4 mb-8">
              <a href="tel:+966XXXXXXXXX" className="flex items-center gap-4 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4.5 hover:border-primary dark:hover:border-blue-400 transition">
                <span className="text-3xl">📞</span>
                <div>
                  <p className="font-cond text-base font-bold text-primary dark:text-blue-300">Call Us Directly <span className="bg-green dark:bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded">FREE</span></p>
                  <p className="font-arabic text-sm text-gray-600 dark:text-gray-400">اتصل بنا مباشرة — مجاناً</p>
                  <p className="text-xl font-bold text-primary dark:text-blue-400 mt-1">+966 XX XXX XXXX</p>
                </div>
              </a>

              <a href="https://wa.me/966XXXXXXXXX" className="flex items-center gap-4 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4.5 hover:border-primary dark:hover:border-blue-400 transition">
                <span className="text-3xl">💬</span>
                <div>
                  <p className="font-cond text-base font-bold text-primary dark:text-blue-300">WhatsApp Us <span className="bg-green dark:bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded">FREE</span></p>
                  <p className="font-arabic text-sm text-gray-600 dark:text-gray-400">واتساب — استشارة مجانية</p>
                  <p className="text-sm text-primary dark:text-blue-400 mt-1">Message us on WhatsApp for fast reply</p>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4.5">
                <span className="text-3xl">🏠</span>
                <div>
                  <p className="font-cond text-base font-bold text-primary dark:text-blue-300">Free On-Site Visit <span className="bg-green dark:bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded">FREE</span></p>
                  <p className="font-arabic text-sm text-gray-600 dark:text-gray-400">زيارة موقعك مجاناً في الرياض</p>
                  <p className="text-sm text-primary dark:text-blue-400 mt-1">We come to you anywhere in Riyadh</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-primary-dark text-white rounded-lg p-4.5">
                <span className="text-3xl">🕐</span>
                <div>
                  <p className="font-cond text-base font-bold text-gold">Working Hours</p>
                  <p className="text-sm mt-1">Sun – Thu: 8:00 AM – 7:00 PM</p>
                  <p className="text-xs text-gold font-semibold mt-1">24/7 Emergency Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-8">
            <p className="font-cond text-2xl font-bold text-primary dark:text-blue-300 mb-1">Order a Service</p>
            <p className="font-arabic text-base text-gray-600 dark:text-gray-300 mb-5">اطلب خدمة أو احجز استشارة مجانية</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-600 dark:text-gray-400 mb-1.5">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" className="w-full border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white rounded p-3 focus:border-primary dark:focus:border-blue-400 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-600 dark:text-gray-400 mb-1.5">Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+966" className="w-full border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white rounded p-3 focus:border-primary dark:focus:border-blue-400 outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 dark:text-gray-400 mb-1.5">Company / Property Name</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Optional" className="w-full border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white rounded p-3 focus:border-primary dark:focus:border-blue-400 outline-none" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 dark:text-gray-400 mb-1.5">Service Needed</label>
                <select name="service" value={formData.service} onChange={handleChange} required className="w-full border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white rounded p-3 focus:border-primary dark:focus:border-blue-400 outline-none">
                  <option value="">-- Select a service --</option>
                  <optgroup label="🏗 General Contracting">
                    <option>Turnkey Building</option>
                    <option>Shopping Center</option>
                  </optgroup>
                  <optgroup label="🔧 Maintenance">
                    <option>Annual Maintenance</option>
                    <option>Emergency Maintenance</option>
                  </optgroup>
                  <optgroup label="🎨 Renovation">
                    <option>Interior Design</option>
                    <option>Home Renovation</option>
                  </optgroup>
                  <optgroup label="🏟 Sports">
                    <option>Stadium Build</option>
                    <option>Pool Build</option>
                  </optgroup>
                  <optgroup label="♛ Luxury">
                    <option>Palace Design</option>
                    <option>Luxury Villa</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 dark:text-gray-400 mb-1.5">Consultation Type</label>
                <select name="consultation" value={formData.consultation} onChange={handleChange} required className="w-full border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white rounded p-3 focus:border-primary dark:focus:border-blue-400 outline-none">
                  <option>Free On-Site Visit</option>
                  <option>Free Phone Call</option>
                  <option>Free Online Meeting</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 dark:text-gray-400 mb-1.5">Tell Us About Your Project</label>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Describe briefly..." rows={4} className="w-full border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white rounded p-3 focus:border-primary dark:focus:border-blue-400 outline-none resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-accent dark:bg-red-600 text-white py-4 rounded font-cond text-lg font-bold uppercase hover:bg-red-700 dark:hover:bg-red-700 transition">🚀 Submit & Get My Free Consultation</button>
              <p className="text-center text-xs text-gray-600 dark:text-gray-400"><span className="text-green font-bold">✓</span> We respond within 1 hour<br/><span className="text-green font-bold">✓</span> Your information is private</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
