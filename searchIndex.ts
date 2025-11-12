
import { STUDENT_ACHIEVEMENTS, ACHIEVEMENT_ARTICLES } from './constants';

export interface SearchResult {
  title: string;
  keywords: string[];
  tags: string[];
  targetId: string;
  page: string; // '/' for the main page
}

export const searchIndex: SearchResult[] = [];

// Index Student Achievements
STUDENT_ACHIEVEMENTS.forEach(ach => {
  searchIndex.push({
    title: `${ach.name} - ${ach.achievement}`,
    keywords: ['siswa', 'santri', 'prestasi', 'juara', ach.name, ach.achievement, ach.category, String(ach.year)],
    tags: ['Siswa', ach.category],
    targetId: 'prestasi-siswa',
    page: '/',
  });
});

// Index Achievement Articles
ACHIEVEMENT_ARTICLES.forEach(article => {
    searchIndex.push({
      title: article.title,
      keywords: ['artikel', 'cerita', 'inspirasi', 'berita', ...article.title.split(' ')],
      tags: ['Cerita', 'Inspirasi'],
      targetId: 'cerita-inspiratif',
      page: '/',
    });
  });

// General search terms
searchIndex.push({
    title: 'Statistik Prestasi',
    keywords: ['statistik', 'angka', 'data', 'total', 'jumlah'],
    tags: ['Statistik'],
    targetId: 'statistik',
    page: '/',
});

searchIndex.push({
    title: 'Testimoni & Kutipan',
    keywords: ['testimoni', 'kutipan', 'inspirasi', 'motivasi'],
    tags: ['Testimoni'],
    targetId: 'testimoni',
    page: '/',
});
