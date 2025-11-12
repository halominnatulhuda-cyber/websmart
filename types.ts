// types.ts

// Kept for SearchModal functionality
export interface SearchResult {
  title: string;
  keywords: string[];
  tags: string[];
  targetId: string;
}

export type GalleryCategory = 'fasilitas' | 'event' | 'lainnya';

export interface GalleryItem {
  id: string;
  kategori: GalleryCategory;
  judul: string;
  deskripsi: string;
  gambar: string; // URL to image
}

// FIX: Added missing type definitions for School, QuickAccessButton, etc.
export interface QuickAccessButton {
  id: string;
  label: string;
  targetId: string;
  bgColor: string;
  hoverBgColor: string;
}

export interface SchoolAchievement {
  title: string;
  level: string;
  date: string;
  description: string;
  image: string;
}

export interface FeaturedProgram {
  title: string;
  description: string;
  icon: string;
}

export interface SchoolStatistics {
  students: number;
  alumni: number;
  teachers: number;
  achievements: number;
  extracurriculars: number;
}

export interface SchoolSummary {
  foundedYear: number;
  headmaster: string;
}

export interface School {
  id: string;
  name: string;
  description: string;
  logo: string;
  accentColor: string;
  textColor: string;
  summary: SchoolSummary;
  statistics: SchoolStatistics;
  youtubeUrl: string;
  youtubeThumbnail: string;
  vision: string;
  mission: string[];
  featuredPrograms: FeaturedProgram[];
  gallery: string[];
  achievements: SchoolAchievement[];
}
