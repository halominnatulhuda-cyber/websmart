import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import GalleryPage from './components/AboutPage';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

import { SearchResult, GalleryItem } from './types';

// A simple lightbox component defined within App.tsx to avoid creating new files.
const Lightbox: React.FC<{ item: GalleryItem; onClose: () => void }> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-2 sm:p-4 animate-fade-in-fast"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white text-5xl leading-none font-bold hover:opacity-80 transition-opacity z-10 p-2"
        aria-label="Close"
      >
        &times;
      </button>
      
      {/* Main content container */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col items-center gap-3 text-white" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Text */}
        <div className="text-center flex-shrink-0 px-2">
          <h3 className="text-xl md:text-2xl font-bold font-lora">{item.judul}</h3>
          <p className="text-sm uppercase tracking-wider text-gray-300">{item.kategori}</p>
        </div>
        
        {/* Image (takes remaining space) */}
        <div className="flex-1 w-full min-h-0 max-h-[70vh]">
            <img 
                src={item.gambar} 
                alt={item.judul} 
                className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
        </div>
        
        {/* Footer Text */}
        <p className="text-center text-gray-200 text-sm sm:text-base max-w-3xl flex-shrink-0 mt-1 px-2">
          {item.deskripsi}
        </p>
      </div>
    </div>
  );
};


const App: React.FC = () => {
  const [activeGalleryItem, setActiveGalleryItem] = useState<GalleryItem | null>(null);

  const handleScrollTo = useCallback((id: string) => {
    // Use a timeout to ensure the DOM is updated if the school changes
    setTimeout(() => {
      const element = document.getElementById(id);
      
      if (element) {
        const headerOffset = 80; // height of fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 50);
  }, []);


  const handleSearchResultClick = (result: SearchResult) => {
    handleScrollTo(result.targetId);
  };
  
  const handleGalleryImageClick = (item: GalleryItem) => {
    setActiveGalleryItem(item);
  };

  return (
    <>
      <Header onScroll={handleScrollTo} onSearchResultClick={handleSearchResultClick} />
      <main id="home" className="bg-stone-50 text-gray-800 pt-20">
        <GalleryPage onImageClick={handleGalleryImageClick} />
        <CtaSection />
      </main>
      <Footer />
      
      {activeGalleryItem && <Lightbox item={activeGalleryItem} onClose={() => setActiveGalleryItem(null)} />}
    </>
  );
};

export default App;