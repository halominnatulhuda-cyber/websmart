document.addEventListener('DOMContentLoaded', () => {
    const navMap = {
        'beranda': 'index.html',
        'ai-santri': 'ai/index.html',
        'prestasi-siswa': 'prestasi/index.html#prestasi-siswa',
        'prestasi-yayasan': 'prestasi/index.html#prestasi-yayasan',
        'unit-sd': 'unit/index.html#sd',
        'unit-smp': 'unit/index.html#smp',
        'unit-smk': 'unit/index.html#smk',
        'unit-yayasan': 'unit/index.html#yayasan',
        'galeri-fasilitas': 'galeri/index.html#fasilitas',
        'galeri-event': 'galeri/index.html#event',
        'galeri-lainnya': 'galeri/index.html#lainnya',
        'daftar-daftar': 'daftar/index.html#daftar',
        'daftar-ketentuan': 'daftar/index.html#ketentuan',
        'daftar-biaya': 'daftar/index.html#biaya',
        'kontak': 'index.html#footer',
        'login': 'login/index.html'
    };

    function getBasePath() {
        const path = window.location.pathname;
        const segments = path.split('/').filter(Boolean);
        const mainIndex = segments.indexOf('main');

        if (mainIndex === -1) {
             // Fallback for running locally (e.g. file:///)
             // Adjust based on the actual folder names you might use locally
             if (path.includes('/unit/') || path.includes('/ai/') || path.includes('/galeri/') || path.includes('/prestasi/') || path.includes('/daftar/') || path.includes('/login/')) {
                 return '../';
             }
             return './';
        }
        
        const depth = segments.length - mainIndex - 2; // -2 because we count from inside /main
        if (depth < 0) return './';

        return '../'.repeat(depth) || './';
    }

    function handleNavigation(event) {
        event.preventDefault();
        const navKey = event.currentTarget.dataset.nav;
        const targetPath = navMap[navKey];

        if (!targetPath) {
            console.error(`Navigation key "${navKey}" not found in navMap.`);
            return;
        }

        const basePath = getBasePath();
        const fullUrlString = basePath + targetPath;

        const url = new URL(fullUrlString, window.location.href);
        const currentUrl = new URL(window.location.href);
        
        // In a React SPA, pathname is always the same. We check the conceptual target path.
        const targetIsSamePage = url.pathname === currentUrl.pathname;

        if (targetIsSamePage && url.hash) {
            const element = document.getElementById(url.hash.substring(1));
            if (element) {
                 const headerOffset = 80; // height of fixed header
                 const elementPosition = element.getBoundingClientRect().top;
                 const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                 window.scrollTo({
                     top: offsetPosition > 0 ? offsetPosition : 0,
                     behavior: 'smooth'
                 });
            } else {
                 console.warn(`Anchor ${url.hash} not found on this page.`);
            }
        } else {
            window.location.href = url.href;
        }

        if (document.body.classList.contains('mobile-menu-open')) {
            closeMobileMenu();
        }
    }

    // This script might not be directly used by React components, but we keep it updated.
    // React components have their own onClick handlers.
    document.querySelectorAll('[data-nav]').forEach(el => {
        el.addEventListener('click', handleNavigation);
    });

    // --- Mobile menu logic (can be co-opted by React if needed) ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenuCloseButton = document.getElementById('mobile-menu-close-button');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuContainer = document.getElementById('mobile-menu');
    const mobileMenu = mobileMenuContainer ? mobileMenuContainer.querySelector('div:last-child') : null;

    function openMobileMenu() {
        if (!mobileMenuContainer || !mobileMenu) return;
        document.body.classList.add('mobile-menu-open');
        mobileMenuContainer.classList.remove('hidden');
        setTimeout(() => {
            if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('opacity-0');
            if (mobileMenu) mobileMenu.classList.remove('translate-x-full');
        }, 10);
    }
    
    function closeMobileMenu() {
        if (!mobileMenuContainer || !mobileMenu) return;
        document.body.classList.remove('mobile-menu-open');
        if(mobileMenuOverlay) mobileMenuOverlay.classList.add('opacity-0');
        if(mobileMenu) mobileMenu.classList.add('translate-x-full');
        setTimeout(() => {
            if(mobileMenuContainer) mobileMenuContainer.classList.add('hidden');
        }, 300);
    }

    if (mobileMenuButton) mobileMenuButton.addEventListener('click', openMobileMenu);
    if (mobileMenuCloseButton) mobileMenuCloseButton.addEventListener('click', closeMobileMenu);
    if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', closeMobileMenu);

    document.querySelectorAll('.mobile-dropdown-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const dropdownContent = button.nextElementSibling;
            const icon = button.querySelector('svg');
            if (dropdownContent && icon) {
                dropdownContent.classList.toggle('hidden');
                icon.classList.toggle('rotate-180');
            }
        });
    });
});