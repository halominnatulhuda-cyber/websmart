import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PendaftaranPage from './components/AboutPage'; // Renamed internally to PendaftaranPage
import Footer from './components/Footer';
import { SearchResult } from './searchIndex';
import { NavItem } from './navigation';

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
  
  const handleNavClick = (item: NavItem) => {
    if (item.type === 'link' && item.href) {
      window.open(item.href, '_blank', 'noopener,noreferrer');
      return;
    }
    
    const id = item.targetId;
    if (!id) return;
    
    if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    
    if (id === 'contact') {
      const footer = document.getElementById('contact');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    scrollToId(id, 100);
  };
  
  const handleSearchNavigation = (result: SearchResult) => {
    setTimeout(() => {
        scrollToId(result.targetId);
    }, 0);
  };

  return (
    <div className="bg-stone-50 text-gray-800">
      <Header onNavigate={handleNavClick} onSearchResultClick={handleSearchNavigation} />
      <Hero onButtonClick={() => scrollToId('pendaftaran')} />
      <main>
        <PendaftaranPage />
      </main>
      <Footer />
    </div>
  );
};

export default App;