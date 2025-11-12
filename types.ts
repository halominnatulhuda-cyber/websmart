// types.ts

// FIX: Add QuickAccessButton type to resolve import error.
export interface QuickAccessButton {
  id: string;
  href: string;
  label: string;
  bgColor: string;
  hoverBgColor: string;
}

// Kept for SearchModal functionality
export interface SearchResult {
  title: string;
  keywords: string[];
  tags: string[];
  targetId: string;
}

// FIX: Added missing type definitions for FeaturedProgram to resolve import errors.
export interface FeaturedProgram {
  icon: string;
  title: string;
  description: string;
}

// FIX: Added missing type definitions for Achievement to resolve import errors.
export interface Achievement {
  image: string;
  title: string;
  level: string;
  date: string;
  description: string;
}

// FIX: Added missing type definitions for School to resolve import errors.
export interface School {
  id: string;
  name: string;
  logo: string;
  description: string;
  accentColor: string;
  textColor: string;
  summary: {
    foundedYear: number;
    headmaster: string;
  };
  statistics: {
    students: number;
    alumni: number;
    teachers: number;
    achievements: number;
    extracurriculars: number;
  };
  youtubeUrl: string;
  youtubeThumbnail: string;
  vision: string;
  mission: string[];
  featuredPrograms: FeaturedProgram[];
  gallery: string[];
  achievements: Achievement[];
}