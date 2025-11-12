import React from 'react';
import Header from './components/Header';
import LoginPage from './components/AboutPage'; // AboutPage is repurposed as LoginPage
import Footer from './components/Footer';
import { SearchResult } from './searchIndex';

// Centralized navigation map based on user's rules
const navMap: { [key: string]: string } = {
  'beranda': '/',
  'ai-santri': '/ai/',
  'prestasi-siswa': '/prestasi/#prestasi-siswa',
  'prestasi-yayasan': '/prestasi/#prestasi-yayasan',
  'unit-sd': '/unit/#sd',
  'unit-smp': '/unit/#smp',
  'unit-smk': '/unit/#smk',
  'unit-yayasan': '/unit/#yayasan',
  'galeri-fasilitas': '/galeri/#fasilitas',
  'galeri-event': '/galeri/#event',
  'galeri-lainnya': '/galeri/#lainnya',
  'pendaftaran-daftar': '/daftar/#daftar',
  'pendaftaran-ketentuan': '/daftar/#ketentuan',
  'pendaftaran-biaya': '/daftar/#biaya',
  'kontak': '/#footer',
  'login': '/login/'
};


const App: React.FC = () => {

  // Smart navigation handler
  const handleNavigation = (navKey: string) => {
    const target = navMap[navKey];
    if (!target) {
      console.warn(`Navigation key "${navKey}" not found in navMap.`);
      return;
    }

    // Use a dummy base URL as the second argument to correctly parse relative URLs
    const url = new URL(target, window.location.origin);

    if (url.pathname === window.location.pathname) {
      // Same page, so scroll
      if (url.hash) {
        const elementId = url.hash.substring(1);
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Scroll to top if it's a link to the homepage from the homepage
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // Different page, navigate
      window.location.href = target;
    }
  };
  
  const handleSearchNavigation = (result: SearchResult) => {
    // Basic fallback for search - can be enhanced later to use navKey
    if (result.targetId) {
        const element = document.getElementById(result.targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  return (
    <div className="bg-stone-50 text-gray-800 flex flex-col min-h-screen">
      <Header onNavigate={handleNavigation} onSearchResultClick={handleSearchNavigation} />
      <main className="flex-grow pt-20">
        <LoginPage />
      </main>
      <Footer />
    </div>
  );
};

export default App;