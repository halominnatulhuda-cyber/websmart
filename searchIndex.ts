export interface SearchResult {
  title: string;
  keywords: string[];
  tags: string[];
  targetId: string;
  page: string;
}

export const searchIndex: SearchResult[] = [
  {
    title: 'Formulir Pendaftaran Siswa Baru',
    keywords: ['form', 'formulir', 'daftar', 'pendaftaran', 'siswa baru', 'registrasi'],
    tags: ['Pendaftaran', 'Formulir'],
    targetId: 'pendaftaran',
    page: '/',
  },
  {
    title: 'Ketentuan & Syarat Pendaftaran',
    keywords: ['ketentuan', 'syarat', 'peraturan', 'dokumen', 'berkas', 'prosedur'],
    tags: ['Pendaftaran', 'Ketentuan'],
    targetId: 'pendaftaran',
    page: '/',
  },
  {
    title: 'Rincian Biaya Pendidikan',
    keywords: ['biaya', 'spp', 'uang pangkal', 'pembayaran', 'harga', 'tarif', 'keuangan'],
    tags: ['Pendaftaran', 'Biaya'],
    targetId: 'pendaftaran',
    page: '/',
  },
  {
    title: 'Biaya Pendaftaran SD Minnatul Huda',
    keywords: ['biaya sd', 'spp sd', 'uang sekolah dasar'],
    tags: ['Biaya', 'SD'],
    targetId: 'pendaftaran',
    page: '/',
  },
  {
    title: 'Biaya Pendaftaran SMP Minnatul Huda',
    keywords: ['biaya smp', 'spp smp', 'uang sekolah menengah pertama'],
    tags: ['Biaya', 'SMP'],
    targetId: 'pendaftaran',
    page: '/',
  },
  {
    title: 'Biaya Pendaftaran SMK Minnatul Huda',
    keywords: ['biaya smk', 'spp smk', 'uang sekolah menengah kejuruan'],
    tags: ['Biaya', 'SMK'],
    targetId: 'pendaftaran',
    page: '/',
  },
  {
    title: 'Kontak Panitia Pendaftaran',
    keywords: ['kontak', 'telepon', 'alamat', 'email', 'panitia', 'ppdb'],
    tags: ['Kontak'],
    targetId: 'contact',
    page: '/',
  }
];