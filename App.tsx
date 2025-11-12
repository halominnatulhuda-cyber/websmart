import React, { useState, useEffect } from 'react';
import { SCHOOL_DATA } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import SchoolViewPager from './components/SchoolViewPager';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import { SearchResult } from './searchIndex';
import { GalleryItem } from './types';

// Image Modal Component with details
const ImageModal: React.FC<{ item: GalleryItem; onClose: () => void }> = ({ item, onClose }) => {
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
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <style>{`
        @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
      `}</style>
      <div 
        className="relative max-w-4xl w-full text-white flex flex-col items-center" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center mb-4 px-4">
          <h2 className="text-xl lg:text-2xl font-bold font-lora">{item.title}</h2>
        </div>
        
        <img
          src={item.url}
          alt={item.title}
          className="max-w-full max-h-[65vh] object-contain rounded-lg shadow-2xl"
        />

        <div className="text-center mt-4 px-4 max-w-2xl">
          <p className="text-sm text-gray-200">{item.description}</p>
          <p className="text-xs text-gray-400 mt-2">{item.date}</p>
        </div>
      </div>
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
  const [modalData, setModalData] = useState<GalleryItem | null>(null);
  const [activeSchoolId, setActiveSchoolId] = useState<string>(SCHOOL_DATA[0].id);

  const schoolIds = SCHOOL_DATA.map(s => s.id);

  const openModal = (item: GalleryItem) => setModalData(item);
  const closeModal = () => setModalData(null);
  
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
    // Check if the ID belongs to a school unit
    if (schoolIds.includes(id)) {
      setActiveSchoolId(id);
      scrollToId('school-view-pager');
      return;
    }

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
    // For now, all pages are the current page. Future-proofed for multi-page apps.
    if (result.page !== '/') {
      window.location.href = `${result.page}#${result.targetId}`;
      return;
    }

    if (result.schoolId) {
      setActiveSchoolId(result.schoolId);
    }
    
    // Use a timeout to allow React to re-render with the new active school before scrolling
    setTimeout(() => {
        scrollToId(result.targetId);
    }, 0);
  };

  return (
    <div className="bg-stone-50 text-gray-800">
      <Header onScroll={handleNavClick} onSearchResultClick={handleSearchNavigation} />
      <Hero onButtonClick={() => scrollToId('school-view-pager')} />
      <main>
        <SchoolViewPager 
          onImageClick={openModal}
          activeSchoolId={activeSchoolId}
          setActiveSchoolId={setActiveSchoolId}
        />
        <CtaSection />
      </main>
      <Footer />
      {modalData && <ImageModal item={modalData} onClose={closeModal} />}
    </div>
  );
};

export default App;