// types.ts
export interface FoundationAchievement {
  year: number;
  award: string;
  organizer: string;
  description: string;
  image: string; // Certificate or photo
  logo: string; // Organizer's logo
}

export type AchievementCategory = 'Akademik' | 'Seni' | 'Teknologi' | 'Olahraga';

export interface StudentAchievement {
  id: string;
  name: string;
  achievement: string;
  year: number;
  category: AchievementCategory;
  image: string;
  story: string;
}

export interface AchievementArticle {
    id: string;
    title: string;
    date: string;
    image: string;
    teaser: string;
    fullContent: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    role: string;
}

// FIX: Add QuickAccessButton interface to resolve error in QuickAccess.tsx
export interface QuickAccessButton {
  id: string;
  label: string;
  targetId: string;
  bgColor: string;
  hoverBgColor: string;
}

// FIX: Add FeaturedProgram interface to resolve error in SchoolSection.tsx
export interface FeaturedProgram {
  icon: string;
  title: string;
  description: string;
}

// FIX: Add SchoolAchievement interface for use within the School type
export interface SchoolAchievement {
  image: string;
  title: string;
  level: string;
  date: string;
  description: string;
}

// FIX: Add School interface to resolve errors in SchoolSection.tsx and SchoolViewPager.tsx
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
  achievements: SchoolAchievement[];
}
