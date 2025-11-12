import { aboutPageData } from './about-data';

export interface SearchResult {
  title: string;
  keywords: string[];
  tags: string[];
  targetId: string;
  page: string;
}

export const searchIndex: SearchResult[] = [
  {
    title: 'Profil Yayasan Minnatul Huda',
    keywords: ['profil', 'tentang kami', 'sejarah'],
    tags: ['Profil', 'Yayasan'],
    targetId: 'profile',
    page: '/',
  },
  {
    title: 'Visi & Misi',
    keywords: ['visi', 'misi', 'tujuan', 'cita-cita'],
    tags: ['Visi', 'Misi'],
    targetId: 'visi-misi',
    page: '/',
  },
  {
    title: 'Nilai Inti (Core Values)',
    keywords: ['nilai', 'values', 'taqwa', 'amanah', 'disiplin', 'peduli'],
    tags: ['Nilai Inti'],
    targetId: 'nilai-inti',
    page: '/',
  },
  {
    title: 'Kurikulum Pendidikan',
    keywords: ['kurikulum', 'pendidikan', 'sistem belajar'],
    tags: ['Kurikulum'],
    targetId: 'kurikulum',
    page: '/',
  },
  {
    title: 'Tim Kami',
    keywords: ['tim', 'pengurus', 'kepala sekolah', 'pimpinan'],
    tags: ['Tim'],
    targetId: 'tim-kami',
    page: '/',
  },
];

// Add team members to search index
aboutPageData.team.forEach(member => {
  searchIndex.push({
    title: `${member.name} - ${member.role}`,
    keywords: [member.name, member.role],
    tags: ['Tim'],
    targetId: 'tim-kami',
    page: '/',
  });
});
