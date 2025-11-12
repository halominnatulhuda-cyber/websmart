// FIX: Add missing type definitions used across components.
export interface QuickAccessButton {
  id: string;
  label: string;
  targetId: string;
  bgColor: string;
  hoverBgColor: string;
}

export interface FeaturedProgram {
  icon: string;
  title: string;
  description: string;
}

export interface Achievement {
  image: string;
  title: string;
  level: string;
  date: string;
  description: string;
}

export interface School {
  id: string;
  name: string;
  description: string;
  logo: string;
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
