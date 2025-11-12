import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutPage from './components/AboutPage';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import { SearchResult } from './searchIndex';

const App: React.FC = () => {
  const scrollToId = (id: string, headerOffset: number = 80) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition > 0 ? offsetPosition : 0,
        behavior: 'smooth'
      });
    }
  };
  
  const handleSearchNavigation = (result: SearchResult) => {
    // Diasumsikan pencarian hanya menavigasi dalam halaman saat ini.
    // Jika hasil pencarian bisa berada di halaman lain, logika tambahan diperlukan di sini.
    setTimeout(() => {
        scrollToId(result.targetId);
    }, 0);
  };

  return (
    <div className="bg-stone-50 text-gray-800">
      <Header onSearchResultClick={handleSearchNavigation} />
      <Hero onButtonClick={() => scrollToId('profile')} />
      <main>
        <AboutPage />
      </main>
      <CtaSection />
      <Footer />
    </div>
  );
};

export default App;