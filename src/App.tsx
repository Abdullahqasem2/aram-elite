import TopBar from './components/TopBar';
import Nav from './components/Nav';
import Hero from './components/Hero';
import DesignDecorServices from './components/DesignDecorServices';
import PhotoShowcase from './components/PhotoShowcase';
import HowItWorks from './components/HowItWorks';
import ConsultBanner from './components/ConsultBanner';
import Stats from './components/Stats';
import ServiceSection from './components/ServiceSection';
import { services } from './data/services';
import LightingSpecialty from './components/LightingSpecialty';
import WhatsAppNudge from './components/WhatsAppNudge';
import OrderStrip from './components/OrderStrip';
import WhyUs from './components/WhyUs';
import Companies from './components/Companies';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';

const byId = (id: string) => services.find((s) => s.id === id)!;

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="relative min-h-screen overflow-x-hidden text-gray-900 dark:text-gray-100 transition-colors">
          <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-50">
            <TopBar />
            <Nav overHero />
          </header>
            <Hero />
          </div>

          <ConsultBanner />

          {/* Main services — one full section per sector, each with its own CTA */}
          <div id="services">
            <ServiceSection service={byId('contracting')} />
            <ServiceSection service={byId('design')} altBg />
            <DesignDecorServices />
            <ServiceSection service={byId('renovation')} altBg />
            <WhatsAppNudge />
            <ServiceSection service={byId('maintenance')} />
            <ServiceSection service={byId('luxury')} altBg />
            <LightingSpecialty />
            <ServiceSection service={byId('sports')} />
          </div>

          <PhotoShowcase />
          <Stats />
          <HowItWorks />
          <WhatsAppNudge variant="secondary" />
          <OrderStrip />
          <WhyUs />
          <Companies />
          <Faq />
          <Contact />
          <Footer />
          <WhatsAppFloat />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
