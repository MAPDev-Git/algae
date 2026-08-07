import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HiddenCrisis from './components/HiddenCrisis'
import AlgaeRevolution from './components/AlgaeRevolution'
import SynergyEngine from './components/SynergyEngine'
import ComparisonTable from './components/ComparisonTable'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import LegalPages from './components/LegalPages'

function App() {
  const [currentRoute, setCurrentRoute] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['privacy', 'terms', 'cookies'].includes(hash)) {
        setCurrentRoute(hash);
        window.scrollTo(0, 0);
      } else {
        setCurrentRoute('');
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // check on load
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentRoute) {
    return (
      <>
        <Navbar />
        <LegalPages page={currentRoute} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Hero />
      <HiddenCrisis />
      <AlgaeRevolution />
      <SynergyEngine />
      <ComparisonTable />
      <Testimonials />
      <FAQ />
      <Pricing />
      <Footer />
    </>
  )
}

export default App
