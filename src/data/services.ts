import { images } from './images';

export interface Bilingual {
  en: string;
  ar: string;
}

export interface ServiceData {
  id: string;
  img: string;
  alt: string;
  kicker: Bilingual;
  title: Bilingual;
  desc: Bilingual;
  items: Bilingual[];
  ctaTitle: Bilingual;
  ctaDesc: Bilingual;
  waMessage: Bilingual;
  gold?: boolean;
}

export const PHONE = '+966502080228';
export const PHONE_DISPLAY = '+966 50 208 0228';
export const WA_BASE = 'https://wa.me/966502080228';

export const services: ServiceData[] = [
  {
    id: 'contracting',
    img: images.facade1,
    alt: 'General contracting and construction services in Riyadh — مقاولات عامة في الرياض',
    kicker: { en: 'General Contracting', ar: 'المقاولات العامة' },
    title: {
      en: 'General Contracting in Riyadh — At Every Scale',
      ar: 'مقاولات عامة في الرياض — لجميع الأحجام',
    },
    desc: {
      en: 'From ground-up construction to turnkey delivery, our licensed teams execute residential and commercial projects with precision — on time and on budget.',
      ar: 'من التأسيس حتى التسليم على المفتاح، تنفذ فرقنا المرخصة المشاريع السكنية والتجارية بدقة والتزام بالوقت والميزانية.',
    },
    items: [
      { en: 'Turnkey construction', ar: 'بناء تسليم مفتاح' },
      { en: 'Residential buildings & villas', ar: 'مبانٍ سكنية وفلل' },
      { en: 'Commercial & office buildings', ar: 'مبانٍ تجارية ومكتبية' },
      { en: 'Malls & retail centers', ar: 'مولات ومراكز تجارية' },
      { en: 'Structural & concrete works', ar: 'أعمال إنشائية وخرسانية' },
      { en: 'Steel structures', ar: 'هياكل معدنية' },
      { en: 'Electromechanical (MEP) works', ar: 'أعمال كهروميكانيكية (MEP)' },
      { en: 'Finishing works', ar: 'أعمال التشطيبات' },
      { en: 'Additions & extensions', ar: 'ملاحق وتوسعات' },
      { en: 'Project management & supervision', ar: 'إدارة مشاريع وإشراف هندسي' },
    ],
    ctaTitle: { en: 'Planning a construction project?', ar: 'تخطط لمشروع بناء؟' },
    ctaDesc: {
      en: 'Get a FREE site visit and a detailed quote from our engineers — no obligation, available 24/7.',
      ar: 'احصل على زيارة موقع مجانية وعرض سعر مفصل من مهندسينا — دون أي التزام، متاحون 24/7.',
    },
    waMessage: {
      en: 'Hello Aram Elite, I need a FREE site visit for a general contracting project.',
      ar: 'مرحباً أرام إيليت، أرغب بزيارة موقع مجانية لمشروع مقاولات عامة.',
    },
  },
  {
    id: 'design',
    img: images.design,
    alt: 'Interior and exterior design in Riyadh — تصميم داخلي وخارجي في الرياض',
    kicker: { en: 'Interior & Exterior Design', ar: 'التصميم الداخلي والخارجي' },
    title: {
      en: 'Specialized Interior & Exterior Design',
      ar: 'تصميم داخلي وخارجي متخصص',
    },
    desc: {
      en: 'Our designers turn spaces into experiences — modern, classic or fully bespoke, visualized in 3D before a single tile is laid.',
      ar: 'مصممونا يحوّلون المساحات إلى تجارب — طرازات عصرية أو كلاسيكية أو حسب الطلب، مع تصور ثلاثي الأبعاد كامل قبل بدء التنفيذ.',
    },
    items: [
      { en: 'Interior design & décor', ar: 'تصميم داخلي وديكور' },
      { en: 'Exterior facade design', ar: 'تصميم واجهات خارجية' },
      { en: '3D visualization & renders', ar: 'تصور ثلاثي الأبعاد' },
      { en: 'Space planning', ar: 'تخطيط المساحات' },
      { en: 'Lighting design', ar: 'تصميم الإضاءة' },
      { en: 'Gypsum & ceiling designs', ar: 'تصاميم الجبس والأسقف' },
      { en: 'Furniture & material selection', ar: 'اختيار الأثاث والخامات' },
      { en: 'Landscape & garden design', ar: 'تنسيق الحدائق واللاندسكيب' },
      { en: 'Facade cladding & stone', ar: 'كلادينج وحجر الواجهات' },
    ],
    ctaTitle: { en: 'Imagine your space, redesigned.', ar: 'تخيّل مساحتك بتصميم جديد.' },
    ctaDesc: {
      en: 'Book a FREE design consultation and site visit — our designers come to you.',
      ar: 'احجز استشارة تصميم وزيارة موقع مجانية — مصممونا يصلون إليك.',
    },
    waMessage: {
      en: 'Hello Aram Elite, I need a FREE design consultation and site visit.',
      ar: 'مرحباً أرام إيليت، أرغب باستشارة تصميم وزيارة موقع مجانية.',
    },
  },
  {
    id: 'renovation',
    img: images.renovation,
    alt: 'Villa and home renovation in Riyadh — ترميم وتجديد فلل ومنازل في الرياض',
    kicker: { en: 'Renovation & Remodeling', ar: 'الترميم والتجديد' },
    title: {
      en: 'Renovation Specialists — At Every Scale',
      ar: 'متخصصون في الترميم والتجديد — بجميع الأحجام',
    },
    desc: {
      en: 'From refreshing a single room to fully transforming villas and commercial buildings — minimal disruption, maximum impact.',
      ar: 'من تجديد غرفة واحدة إلى تحويل كامل للفلل والمباني التجارية — بأقل إزعاج وأعلى جودة.',
    },
    items: [
      { en: 'Full home & villa renovation', ar: 'ترميم منازل وفلل كامل' },
      { en: 'Kitchen remodeling', ar: 'تجديد المطابخ' },
      { en: 'Bathroom remodeling', ar: 'تجديد الحمامات' },
      { en: 'Commercial fit-out', ar: 'تجهيز وتشطيب تجاري' },
      { en: 'Facade renovation', ar: 'تجديد الواجهات' },
      { en: 'Painting & finishing', ar: 'دهانات وتشطيبات' },
      { en: 'Flooring & tiling', ar: 'أرضيات وبلاط' },
      { en: 'Waterproofing & insulation', ar: 'عزل مائي وحراري' },
      { en: 'Structural repair & restoration', ar: 'معالجة وترميم إنشائي' },
    ],
    ctaTitle: { en: 'Your property deserves a new life.', ar: 'عقارك يستحق حياة جديدة.' },
    ctaDesc: {
      en: 'Send us photos on WhatsApp or book a FREE assessment visit — get your renovation plan today.',
      ar: 'أرسل لنا الصور عبر واتساب أو احجز زيارة تقييم مجانية — واحصل على خطة الترميم اليوم.',
    },
    waMessage: {
      en: 'Hello Aram Elite, I need a FREE assessment visit for a renovation project.',
      ar: 'مرحباً أرام إيليت، أرغب بزيارة تقييم مجانية لمشروع ترميم.',
    },
  },
  {
    id: 'maintenance',
    img: images.maintenance,
    alt: 'Maintenance contracts for homes, villas, malls and facilities in Riyadh — عقود صيانة سنوية في الرياض',
    kicker: { en: 'Maintenance & Facility Management', ar: 'الصيانة وإدارة المرافق' },
    title: {
      en: 'Maintenance for Homes, Villas, Mansions, Malls & Facilities',
      ar: 'صيانة المنازل والفلل والقصور والمولات والمرافق',
    },
    desc: {
      en: 'Per-visit service for urgent fixes, or annual maintenance contracts with scheduled preventive care, 24/7 priority response and preferential rates.',
      ar: 'خدمة بالزيارة للأعطال الطارئة، أو عقود صيانة سنوية تشمل صيانة وقائية دورية وأولوية استجابة 24/7 وأسعاراً تفضيلية.',
    },
    items: [
      { en: 'Annual maintenance contracts (AMC)', ar: 'عقود صيانة سنوية' },
      { en: 'Per-visit maintenance', ar: 'صيانة بالزيارة' },
      { en: 'AC & HVAC maintenance', ar: 'صيانة التكييف والتبريد' },
      { en: 'Electrical maintenance', ar: 'صيانة كهربائية' },
      { en: 'Plumbing & water systems', ar: 'سباكة وشبكات مياه' },
      { en: 'Swimming pool maintenance', ar: 'صيانة المسابح' },
      { en: 'Mall & commercial maintenance', ar: 'صيانة المولات والمنشآت التجارية' },
      { en: 'Facility management', ar: 'إدارة المرافق' },
      { en: 'Preventive maintenance programs', ar: 'برامج صيانة وقائية' },
      { en: 'Emergency repairs 24/7', ar: 'إصلاحات طارئة 24/7' },
    ],
    ctaTitle: { en: 'Never worry about maintenance again.', ar: 'لا تقلق بشأن الصيانة بعد اليوم.' },
    ctaDesc: {
      en: 'Get a FREE site visit and a tailored annual maintenance contract quote — response within the hour, 24/7.',
      ar: 'احصل على زيارة مجانية وعرض سعر لعقد صيانة سنوي مصمم لمنشأتك — استجابة خلال ساعة، 24/7.',
    },
    waMessage: {
      en: 'Hello Aram Elite, I need a FREE site visit and a quote for a maintenance contract.',
      ar: 'مرحباً أرام إيليت، أرغب بزيارة مجانية وعرض سعر لعقد صيانة.',
    },
  },
  {
    id: 'luxury',
    img: images.gypsum3,
    alt: 'Luxury mansion design and construction in Riyadh — تصميم وبناء قصور فاخرة في الرياض',
    kicker: { en: 'Luxury Mansions & High-End Facilities', ar: 'القصور الفاخرة والمنشآت الراقية' },
    title: {
      en: '40 Years Designing, Building & Maintaining Luxury Mansions',
      ar: '40 عاماً في تصميم وبناء وصيانة القصور الفاخرة',
    },
    desc: {
      en: 'Trusted by high-profile clients for four decades. Access to the rarest, finest materials on the global market — Italian marble, exotic woods, bespoke finishes — delivered with absolute discretion.',
      ar: 'محل ثقة كبار الشخصيات منذ أربعة عقود. وصول لأندر وأفخم المواد في السوق العالمي — رخام إيطالي، أخشاب نادرة، تشطيبات حسب الطلب — مع سرية تامة.',
    },
    items: [
      { en: 'Bespoke mansion design & build', ar: 'تصميم وبناء قصور حسب الطلب' },
      { en: 'Rarest & finest materials sourcing', ar: 'توريد أندر وأفخم المواد' },
      { en: 'Italian marble & natural stone', ar: 'رخام إيطالي وأحجار طبيعية' },
      { en: 'Smart home & automation', ar: 'أنظمة القصر الذكي' },
      { en: 'Luxury landscape & pools', ar: 'لاندسكيب ومسابح فاخرة' },
      { en: 'Majlis & reception halls', ar: 'مجالس وقاعات استقبال' },
      { en: 'Dedicated mansion maintenance teams', ar: 'فرق صيانة متكاملة للقصور' },
      { en: 'Absolute privacy & discretion', ar: 'خصوصية وسرية تامة' },
    ],
    ctaTitle: { en: 'An address worthy of your legacy.', ar: 'عنوان يليق بإرثك.' },
    ctaDesc: {
      en: 'Request a private, confidential consultation with our senior team — 40 years of trust at your service.',
      ar: 'اطلب استشارة خاصة وسرية مع فريقنا الأول — 40 عاماً من الثقة في خدمتك.',
    },
    waMessage: {
      en: 'Hello Aram Elite, I would like a private consultation regarding a luxury mansion project.',
      ar: 'مرحباً أرام إيليت، أرغب باستشارة خاصة بخصوص مشروع قصر فاخر.',
    },
    gold: true,
  },
  {
    id: 'sports',
    img: images.sports,
    alt: 'Sports facilities construction in Riyadh — إنشاء ملاعب ومنشآت رياضية في الرياض',
    kicker: { en: 'Sports Facilities', ar: 'المنشآت الرياضية' },
    title: {
      en: 'Sports Facilities — Pitches, Pools & Stadiums',
      ar: 'منشآت رياضية — ملاعب ومسابح واستادات',
    },
    desc: {
      en: 'Design and construction of sports facilities at any scale — from private home gyms and pools to FIFA-standard pitches and full stadiums.',
      ar: 'تصميم وإنشاء المنشآت الرياضية بأي حجم — من الصالات والمسابح الخاصة إلى الملاعب بمعايير فيفا والاستادات المتكاملة.',
    },
    items: [
      { en: 'Football pitches & stadiums', ar: 'ملاعب كرة قدم واستادات' },
      { en: 'FIFA-standard turf', ar: 'عشب بمعايير فيفا' },
      { en: 'LED floodlighting', ar: 'إضاءة فيضانية LED' },
      { en: 'Swimming pools & aquatic centers', ar: 'مسابح ومراكز مائية' },
      { en: 'Gyms & fitness facilities', ar: 'صالات رياضية ولياقة' },
      { en: 'Changing rooms & grandstands', ar: 'غرف تبديل ومدرجات' },
      { en: 'Drainage & irrigation systems', ar: 'أنظمة صرف وري' },
      { en: 'Sports facility maintenance contracts', ar: 'عقود صيانة المنشآت الرياضية' },
    ],
    ctaTitle: { en: 'Build your sports facility right.', ar: 'أنشئ منشأتك الرياضية بالشكل الصحيح.' },
    ctaDesc: {
      en: 'Get a FREE site visit and feasibility assessment for your sports project.',
      ar: 'احصل على زيارة موقع مجانية وتقييم جدوى لمشروعك الرياضي.',
    },
    waMessage: {
      en: 'Hello Aram Elite, I need a FREE site visit for a sports facility project.',
      ar: 'مرحباً أرام إيليت، أرغب بزيارة موقع مجانية لمشروع منشأة رياضية.',
    },
  },
];
