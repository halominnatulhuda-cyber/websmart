import { GALLERY_DATA } from './constants';
import { SearchResult } from './types';

export const searchIndex: SearchResult[] = [];

// Index Gallery Data
GALLERY_DATA.forEach(item => {
  searchIndex.push({
    title: item.judul,
    keywords: [item.kategori, ...item.judul.toLowerCase().split(' '), ...item.deskripsi.toLowerCase().split(' ').slice(0, 5)],
    tags: [item.kategori.charAt(0).toUpperCase() + item.kategori.slice(1)],
    targetId: 'gallery-page',
  });
});
