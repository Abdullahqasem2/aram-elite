import TopBar from './components/TopBar';
import Nav from './components/Nav';
import Hero from './components/Hero';
import PhotoShowcase from './components/PhotoShowcase';
import HowItWorks from './components/HowItWorks';
import ConsultBanner from './components/ConsultBanner';
import Stats from './components/Stats';
import Services from './components/Services';
import LightingSpecialty from './components/LightingSpecialty';
import WhatsAppNudge from './components/WhatsAppNudge';
import OrderStrip from './components/OrderStrip';
import WhyUs from './components/WhyUs';
import Companies from './components/Companies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="overflow-x-hidden dark:bg-gray-900 dark:text-white transition-colors">
          <TopBar />
          <Nav />
          <Hero />
          <PhotoShowcase />
          <Stats />
          <HowItWorks />
          <ConsultBanner />
          <WhatsAppNudge />
          <Services />
          <LightingSpecialty />
          <WhatsAppNudge variant="secondary" />
          <OrderStrip />
          <WhyUs />
          <Companies />
          <Contact />
          <Footer />
          <WhatsAppFloat />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
