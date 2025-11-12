// Fix: Define and export all necessary types for the application.
export interface Achievement {
  image: string;
  title: string;
  level: string;
  date: string;
  description: string;
}

export interface FeaturedProgram {
  icon: string;
  title: string;
  description: string;
}

export interface School {
  id: string;
  name: string;
  logo: string;
  description: string;
  summary: {
    foundedYear: number;
    headmaster: string;
  };
  vision: string;
  mission: string[];
  featuredPrograms: FeaturedProgram[];
  statistics: {
    students: number;
    alumni: number;
    teachers: number;
    achievements: number;
    extracurriculars: number;
  };
  mainImage: string;
  youtubeThumbnail: string;
  youtubeUrl: string;
  gallery: string[];
  achievements: Achievement[];
  detailsUrl: string;
  accentColor: string;
  textColor: string;
}

export interface QuickAccessButton {
  id: string;
  label: string;
  targetId: string;
  bgColor: string;
  hoverBgColor: string;
}
