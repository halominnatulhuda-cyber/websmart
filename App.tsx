
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PrestasiPage from './components/AboutPage'; // Renamed internally, file is the same
import Footer from './components/Footer';
import { SearchResult } from './searchIndex';

// Image Modal Component for lightbox effect
const ImageModal: React.FC<{ imageUrl: string; onClose: () => void }> = ({ imageUrl, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 animate-fade-in-fast"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <img
        src={imageUrl}
        alt="Tampilan diperbesar"
        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-fade-in-zoom"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
      />
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 text-white text-5xl font-light hover:text-gray-300 transition-colors"
        aria-label="Tutup"
      >
        &times;
      </button>
    </div>
  );
};


const App: React.FC = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (imageUrl: string) => setModalImage(imageUrl);
  const closeModal = () => setModalImage(null);
  
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
  
  const handleNavClick = (id: string) => {
    if (id === '#') return; // Do nothing for dummy links

    if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    
    if (id === 'contact') {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
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
      <Header onScroll={handleNavClick} onSearchResultClick={handleSearchNavigation} />
      <Hero onButtonClick={() => scrollToId('prestasi-siswa')} />
      <main className="overflow-x-hidden">
        <PrestasiPage onImageClick={openModal} />
      </main>
      <Footer />
      {modalImage && <ImageModal imageUrl={modalImage} onClose={closeModal} />}
    </div>
  );
};

export default App;
