import React, { useState, useCallback } from 'react';

// Import Components
import Header from './components/Header';
import Chat from './components/Chat';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';

// Import types and data
import { SearchResult } from './types';

const App: React.FC = () => {
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

    const handleSearchClick = useCallback(() => {
        setIsSearchModalOpen(true);
    }, []);

    const handleSearchClose = useCallback(() => {
        setIsSearchModalOpen(false);
    }, []);
    
    const handleSearchResultClick = (result: SearchResult) => {
        const element = document.getElementById(result.targetId);
        if (element) {
            const headerOffset = 80; 
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
            window.scrollTo({
                 top: offsetPosition,
                 behavior: "smooth"
            });
        }
    };

    return (
        <div className="bg-white text-gray-800">
            <Header onSearchClick={handleSearchClick} />
            
            <SearchModal 
                isOpen={isSearchModalOpen}
                onClose={handleSearchClose}
                onResultClick={handleSearchResultClick}
            />
            
            <main className="pt-20">
                <section id="ai" className="py-16 md:py-24 bg-dots-pattern">
                    <div className="container mx-auto px-4 h-[85vh] max-h-[800px] flex justify-center">
                         <Chat />
                    </div>
                </section>
                
                <div id="cta">
                    <CtaSection />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default App;