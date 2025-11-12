// FIX: Restore SCHOOL_DATA constant as it is used by the SchoolViewPager component.
import { School } from './types';

export const SCHOOL_DATA: School[] = [
  // SD
  {
    id: 'sd-minnatul-huda',
    name: 'SD Minnatul Huda',
    description: 'Mencetak generasi cerdas, berakhlak, dan berprestasi sejak dini.',
    logo: 'https://imgur.com/4hdcTD7.png',
    accentColor: 'border-blue-500',
    textColor: 'text-blue-600',
    summary: {
      foundedYear: 2010,
      headmaster: 'Budi Santoso, S.Pd.',
    },
    statistics: {
      students: 350,
      alumni: 1200,
      teachers: 25,
      achievements: 150,
      extracurriculars: 12,
    },
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeThumbnail: 'https://i.imgur.com/g8vX2S3.jpeg',
    vision: 'Menjadi sekolah dasar Islam unggulan yang menghasilkan generasi Qur\'ani, cerdas, kreatif, dan berakhlak mulia.',
    mission: [
      'Menyelenggarakan pendidikan yang berkualitas dengan kurikulum terpadu.',
      'Membina siswa untuk memiliki hafalan Al-Quran dan pemahaman Islam yang baik.',
      'Mengembangkan potensi siswa melalui kegiatan ekstrakurikuler yang beragam.',
      'Menciptakan lingkungan belajar yang nyaman, aman, dan Islami.',
    ],
    featuredPrograms: [
      { icon: 'book', title: 'Tahfidz Al-Quran', description: 'Program hafalan Al-Quran dengan target minimal 2 juz setelah lulus.' },
      { icon: 'globe', title: 'Kelas Bahasa Asing', description: 'Pembelajaran Bahasa Arab dan Inggris secara intensif sejak dini.' },
      { icon: 'leaf', title: 'Pendidikan Karakter', description: 'Pembinaan akhlak mulia melalui kegiatan harian dan teladan guru.' },
    ],
    gallery: [
      'https://i.imgur.com/9h2UPxN.jpeg',
      'https://i.imgur.com/3yPQuAb.jpeg',
      'https://i.imgur.com/s6rfT3m.jpeg',
      'https://i.imgur.com/Jvj2cT5.jpeg',
      'https://i.imgur.com/JcMbfd4.jpeg',
      'https://i.imgur.com/k2j1J9d.jpeg',
    ],
    achievements: [
      { image: 'https://i.imgur.com/6oEmx0a.jpeg', title: 'Juara 1 Lomba Cerdas Cermat PAI', level: 'Kabupaten', date: '2023', description: 'Meraih juara pertama dalam kompetisi tingkat kabupaten.' },
      { image: 'https://i.imgur.com/b3X0aXl.jpeg', title: 'Olimpiade Sains Nasional', level: 'Provinsi', date: '2023', description: 'Medali perak dalam bidang Matematika.' },
    ],
  },
  // SMP
  {
    id: 'smp-minnatul-huda',
    name: 'SMP Minnatul Huda',
    description: 'Membentuk pribadi tangguh, berwawasan luas, dan berpegang teguh pada nilai Islam.',
    logo: 'https://imgur.com/4hdcTD7.png',
    accentColor: 'border-green-500',
    textColor: 'text-green-600',
    summary: {
      foundedYear: 2005,
      headmaster: 'Siti Aminah, M.Pd.',
    },
    statistics: {
      students: 450,
      alumni: 2500,
      teachers: 35,
      achievements: 210,
      extracurriculars: 18,
    },
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeThumbnail: 'https://i.imgur.com/sC3a3qP.jpeg',
    vision: 'Terwujudnya insan akademis, religius, dan berdaya saing global.',
    mission: [
      'Menyelenggarakan pembelajaran aktif, inovatif, kreatif, efektif, dan menyenangkan (PAIKEM).',
      'Mengintegrasikan nilai-nilai Islam dalam setiap mata pelajaran.',
      'Mengembangkan bakat dan minat siswa di bidang akademik dan non-akademik.',
      'Membekali siswa dengan keterampilan teknologi informasi dan komunikasi.',
    ],
    featuredPrograms: [
      { icon: 'lab', title: 'Riset Ilmiah Remaja', description: 'Mengembangkan kemampuan berpikir kritis dan penelitian sejak dini.' },
      { icon: 'speaker', title: 'Public Speaking & Leadership', description: 'Melatih kepercayaan diri dan kemampuan memimpin siswa.' },
      { icon: 'computer', title: 'Kelas Robotik & Coding', description: 'Mempersiapkan siswa menghadapi tantangan era digital.' },
    ],
    gallery: [
        'https://i.imgur.com/jB1tW8d.jpeg',
        'https://i.imgur.com/Y3v1Z8D.jpeg',
        'https://i.imgur.com/O1zY3fM.jpeg',
        'https://i.imgur.com/1B2x3H4.jpeg',
        'https://i.imgur.com/zW5f6eA.jpeg',
        'https://i.imgur.com/7gH8jKl.jpeg',
    ],
    achievements: [
      { image: 'https://i.imgur.com/dK5k3lO.jpeg', title: 'Juara Debat Bahasa Inggris', level: 'Provinsi', date: '2023', description: 'Tim debat kami berhasil menjadi yang terbaik di tingkat provinsi.' },
      { image: 'https://i.imgur.com/5gT6hYj.jpeg', title: 'Karya Ilmiah Remaja Terbaik', level: 'Nasional', date: '2022', description: 'Penelitian tentang energi terbarukan mendapat penghargaan nasional.' },
    ],
  },
  // SMK
  {
    id: 'smk-minnatul-huda',
    name: 'SMK Minnatul Huda',
    description: 'Menyiapkan lulusan yang kompeten, siap kerja, dan berjiwa wirausaha.',
    logo: 'https://imgur.com/4hdcTD7.png',
    accentColor: 'border-yellow-500',
    textColor: 'text-yellow-600',
    summary: {
      foundedYear: 2008,
      headmaster: 'Ahmad Fauzi, S.T.',
    },
    statistics: {
      students: 500,
      alumni: 1800,
      teachers: 40,
      achievements: 180,
      extracurriculars: 15,
    },
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeThumbnail: 'https://i.imgur.com/i9k2dF0.jpeg',
    vision: 'Menjadi SMK rujukan yang menghasilkan tenaga kerja profesional dan berakhlak mulia yang mampu bersaing di dunia industri.',
    mission: [
      'Menyelenggarakan pendidikan kejuruan yang relevan dengan kebutuhan industri.',
      'Membangun kerjasama strategis dengan dunia usaha dan industri.',
      'Membekali siswa dengan sertifikasi kompetensi berstandar nasional.',
      'Menumbuhkan jiwa kewirausahaan dan kemandirian pada siswa.',
    ],
    featuredPrograms: [
      { icon: 'tools', title: 'Teknik Kendaraan Ringan', description: 'Program keahlian dengan fasilitas bengkel modern dan kerjasama industri.' },
      { icon: 'computer', title: 'Rekayasa Perangkat Lunak', description: 'Mencetak programmer muda yang siap terjun ke industri teknologi.' },
      { icon: 'briefcase', title: 'Akuntansi & Keuangan Lembaga', description: 'Menyiapkan tenaga akuntan yang handal dan profesional.' },
    ],
    gallery: [
        'https://i.imgur.com/a9c8b7e.jpeg',
        'https://i.imgur.com/k3l4m5n.jpeg',
        'https://i.imgur.com/o6p7q8r.jpeg',
        'https://i.imgur.com/s9t0u1v.jpeg',
        'https://i.imgur.com/x2y3z4w.jpeg',
        'https://i.imgur.com/1a2b3c4.jpeg',
    ],
    achievements: [
      { image: 'https://i.imgur.com/4d5e6f7.jpeg', title: 'Lomba Kompetensi Siswa (LKS) Otomotif', level: 'Nasional', date: '2023', description: 'Juara 3 tingkat nasional dalam bidang teknik otomotif.' },
      { image: 'https://i.imgur.com/8g9h0i1.jpeg', title: 'Startup Competition', level: 'Regional', date: '2023', description: 'Aplikasi buatan siswa RPL memenangkan kompetisi startup regional.' },
    ],
  },
   // Yayasan
   {
    id: 'yayasan-minnatul-huda',
    name: 'Yayasan Minnatul Huda',
    description: 'Menaungi dan mengembangkan pendidikan Islam yang berkualitas untuk masyarakat.',
    logo: 'https://imgur.com/4hdcTD7.png',
    accentColor: 'border-emerald-500',
    textColor: 'text-emerald-600',
    summary: {
      foundedYear: 1999,
      headmaster: 'KH. Abdullah Mubarok',
    },
    statistics: {
      students: 1300,
      alumni: 5500,
      teachers: 100,
      achievements: 540,
      extracurriculars: 45,
    },
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeThumbnail: 'https://i.imgur.com/j2k3l4m.jpeg',
    vision: 'Menjadi lembaga pendidikan Islam terdepan dalam mencetak generasi pemimpin yang beriman, bertakwa, dan bermanfaat bagi umat.',
    mission: [
      'Menyediakan sarana dan prasarana pendidikan yang modern dan representatif.',
      'Mengembangkan sumber daya manusia (guru dan staf) yang profesional dan berdedikasi.',
      'Melaksanakan program pengabdian masyarakat sebagai wujud kepedulian sosial.',
      'Menjalin sinergi dengan orang tua, masyarakat, dan pemerintah dalam memajukan pendidikan.',
    ],
    featuredPrograms: [
      { icon: 'heart', title: 'Program Beasiswa Yatim & Dhuafa', description: 'Memberikan akses pendidikan berkualitas bagi anak-anak yang membutuhkan.' },
      { icon: 'users', title: 'Kajian Islam & Pengabdian Masyarakat', description: 'Aktif menyebarkan syiar Islam dan membantu masyarakat sekitar.' },
      { icon: 'briefcase', title: 'Pengembangan Usaha Produktif', description: 'Unit usaha untuk menunjang kemandirian dan operasional yayasan.' },
    ],
    gallery: [
        'https://i.imgur.com/5n6o7p8.jpeg',
        'https://i.imgur.com/9q0r1s2.jpeg',
        'https://i.imgur.com/3t4u5v6.jpeg',
        'https://i.imgur.com/7w8x9y0.jpeg',
        'https://i.imgur.com/a1b2c3d.jpeg',
        'https://i.imgur.com/e4f5g6h.jpeg',
    ],
    achievements: [
      { image: 'https://i.imgur.com/i7j8k9l.jpeg', title: 'Penghargaan Lembaga Pendidikan Inspiratif', level: 'Provinsi', date: '2022', description: 'Dianugerahi sebagai yayasan dengan kontribusi signifikan pada pendidikan.' },
      { image: 'https://i.imgur.com/m0n1p2q.jpeg', title: 'Program Kemanusiaan Terbaik', level: 'Nasional', date: '2021', description: 'Program sosial yayasan mendapat apresiasi tingkat nasional.' },
    ],
  },
];
