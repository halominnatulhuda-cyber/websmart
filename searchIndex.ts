import { SCHOOL_DATA } from './constants';

export interface SearchResult {
  title: string;
  keywords: string[];
  tags: string[];
  targetId: string;
  page: string; // '/' for the main page, or e.g., '/prestasi' for others
  schoolId?: string; // To select the correct tab in the viewpager
}

export const searchIndex: SearchResult[] = [];

SCHOOL_DATA.forEach(school => {
  // Main school entry
  searchIndex.push({
    title: school.name,
    keywords: [school.name, school.description],
    tags: [school.id.split('-')[0].toUpperCase()],
    targetId: 'school-view-pager',
    page: '/',
    schoolId: school.id
  });

  // Visi
  searchIndex.push({
    title: `Visi - ${school.name}`,
    keywords: ['visi', 'tujuan', 'cita-cita', school.name],
    tags: [school.id.split('-')[0].toUpperCase(), 'Visi'],
    targetId: 'school-view-pager',
    page: '/',
    schoolId: school.id
  });

  // Misi
  searchIndex.push({
    title: `Misi - ${school.name}`,
    keywords: ['misi', 'langkah', 'strategi', school.name],
    tags: [school.id.split('-')[0].toUpperCase(), 'Misi'],
    targetId: 'school-view-pager',
    page: '/',
    schoolId: school.id
  });

  // Program Unggulan
  searchIndex.push({
    title: `Program Unggulan - ${school.name}`,
    keywords: ['program', 'unggulan', 'keunggulan', 'ekstrakurikuler', school.name],
    tags: [school.id.split('-')[0].toUpperCase(), 'Program'],
    targetId: 'school-view-pager',
    page: '/',
    schoolId: school.id
  });

  // Prestasi
  searchIndex.push({
    title: `Prestasi - ${school.name}`,
    keywords: ['prestasi', 'juara', 'penghargaan', 'pencapaian', school.name],
    tags: [school.id.split('-')[0].toUpperCase(), 'Prestasi'],
    targetId: 'school-view-pager',
    page: '/',
    schoolId: school.id
  });
  
  // Galeri
  searchIndex.push({
    title: `Galeri - ${school.name}`,
    keywords: ['galeri', 'foto', 'kegiatan', 'gambar', school.name],
    tags: [school.id.split('-')[0].toUpperCase(), 'Galeri'],
    targetId: 'school-view-pager',
    page: '/',
    schoolId: school.id
  });
});
