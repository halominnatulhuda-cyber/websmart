// Sistem Navigasi Otomatis Berbasis Peta (navMap)
// File ini berfungsi sebagai satu-satunya sumber kebenaran (single source of truth)
// untuk semua item navigasi di seluruh website.

export interface NavItem {
  key: string;
  name: string;
  type: 'scroll' | 'link';
  targetId?: string;
  href?: string;
}

export interface NavDropdown {
  key: string;
  name: string;
  type: 'dropdown';
  subItems: NavItem[];
}

// NOTE: Karena ini adalah Single Page Application, semua targetId akan merujuk ke ID elemen di halaman utama.
// Jika di masa depan aplikasi diubah menjadi Multi Page, cukup ubah targetId menjadi path halaman yang sesuai.
export const navigationData: (NavItem | NavDropdown)[] = [
  {
    key: 'beranda',
    name: 'BERANDA',
    type: 'scroll',
    targetId: 'home',
  },
  // Tautan ke halaman "AI Santri", "Prestasi", "Unit", dan "Galeri" saat ini tidak ada.
  // Sebagai placeholder, tautan ini akan mengarah ke bagian pendaftaran.
  // Jika halaman-halaman tersebut dibuat, cukup ubah targetId di sini.
  {
    key: 'ai-santri',
    name: 'AI SANTRI',
    type: 'scroll',
    targetId: 'pendaftaran', // Placeholder
  },
  {
    key: 'prestasi',
    name: 'PRESTASI',
    type: 'dropdown',
    subItems: [
      { key: 'prestasi-siswa', name: 'Siswa', type: 'scroll', targetId: 'pendaftaran' }, // Placeholder
      { key: 'prestasi-yayasan', name: 'Yayasan', type: 'scroll', targetId: 'pendaftaran' }, // Placeholder
    ],
  },
  {
    key: 'unit',
    name: 'UNIT',
    type: 'dropdown',
    subItems: [
      { key: 'unit-sd', name: 'SD', type: 'scroll', targetId: 'pendaftaran' }, // Placeholder
      { key: 'unit-smp', name: 'SMP', type: 'scroll', targetId: 'pendaftaran' }, // Placeholder
      { key: 'unit-smk', name: 'SMK', type: 'scroll', targetId: 'pendaftaran' }, // Placeholder
      { key: 'unit-yayasan', name: 'Yayasan', type: 'scroll', targetId: 'pendaftaran' }, // Placeholder
    ],
  },
  {
    key: 'galeri',
    name: 'GALERI',
    type: 'dropdown',
    subItems: [
      { key: 'galeri-fasilitas', name: 'Fasilitas', type: 'scroll', targetId: 'pendaftaran' }, // Placeholder
      { key: 'galeri-event', name: 'Event', type: 'scroll', targetId: 'pendaftaran' }, // Placeholder
      { key: 'galeri-lainnya', name: 'Lainnya', type: 'scroll', targetId: 'pendaftaran' }, // Placeholder
    ],
  },
  {
    key: 'pendaftaran-dropdown',
    name: 'PENDAFTARAN',
    type: 'dropdown',
    subItems: [
        // 'daftar' merujuk ke tab 'form' di komponen Pendaftaran
        { key: 'pendaftaran-daftar', name: 'Daftar', type: 'scroll', targetId: 'pendaftaran' },
        // 'ketentuan' merujuk ke tab 'ketentuan'
        { key: 'pendaftaran-ketentuan', name: 'Ketentuan', type: 'scroll', targetId: 'pendaftaran' },
        // 'biaya' merujuk ke tab 'biaya'
        { key: 'pendaftaran-biaya', name: 'Biaya', type: 'scroll', targetId: 'pendaftaran' },
    ]
  },
  {
    key: 'kontak',
    name: 'KONTAK',
    type: 'scroll',
    targetId: 'contact', // Ini akan scroll ke footer
  },
  {
    key: 'login',
    name: 'LOGIN',
    type: 'link',
    href: 'https://minnatulhuda.login',
  }
];
