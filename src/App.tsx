import TopBar from './components/TopBar';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ConsultBanner from './components/ConsultBanner';
import Stats from './components/Stats';
import Services from './components/Services';
import OrderStrip from './components/OrderStrip';
import WhyUs from './components/WhyUs';
import Companies from './components/Companies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="overflow-x-hidden dark:bg-gray-900 dark:text-white transition-colors">
        <TopBar />
        <Nav />
        <Hero />
        <ConsultBanner />
        <Stats />
        <Services />
        <OrderStrip />
        <WhyUs />
        <Companies />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
