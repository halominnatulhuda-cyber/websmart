// constants.ts
// FIX: Import the 'School' type.
import { School } from './types';

// FIX: Added missing SCHOOL_DATA to resolve export error.
export const SCHOOL_DATA: School[] = [
  {
    id: 'sd-minnatul-huda',
    name: 'SD Minnatul Huda',
    logo: 'https://imgur.com/4hdcTD7.png',
    description: 'Menanamkan dasar-dasar keislaman dan ilmu pengetahuan sejak dini.',
    accentColor: 'border-green-500',
    textColor: 'text-green-600',
    summary: {
      foundedYear: 2010,
      headmaster: 'Ibu Siti Aminah, S.Pd.I.',
    },
    statistics: {
      students: 300,
      alumni: 1200,
      teachers: 25,
      achievements: 80,
      extracurriculars: 10,
    },
    youtubeUrl: 'https://www.youtube.com/channel/UCEr0gTEOM5_4rG1csp2Eusg',
    youtubeThumbnail: 'https://picsum.photos/seed/sd-video/1280/720',
    vision: 'Membentuk generasi Qur\'ani yang ceria, kreatif, dan berakhlak mulia.',
    mission: [
      'Menyelenggarakan pembelajaran yang aktif, inovatif, dan menyenangkan.',
      'Mengintegrasikan nilai-nilai Islam dalam setiap aspek pembelajaran.',
      'Mengembangkan bakat dan minat siswa melalui kegiatan ekstrakurikuler.',
    ],
    featuredPrograms: [
      { icon: 'heart', title: 'Pendidikan Karakter', description: 'Pembiasaan akhlak mulia dalam kegiatan sehari-hari.' },
      { icon: 'leaf', title: 'Sekolah Adiwiyata', description: 'Program peduli lingkungan untuk menumbuhkan cinta alam.' },
      { icon: 'speaker', title: 'Public Speaking', description: 'Melatih keberanian dan kemampuan berbicara di depan umum.' },
    ],
    gallery: [
      'https://picsum.photos/seed/sd-gal1/400/300',
      'https://picsum.photos/seed/sd-gal2/400/300',
      'https://picsum.photos/seed/sd-gal3/400/300',
      'https://picsum.photos/seed/sd-gal4/400/300',
      'https://picsum.photos/seed/sd-gal5/400/300',
      'https://picsum.photos/seed/sd-gal6/400/300',
    ],
    achievements: [
      { image: 'https://picsum.photos/seed/ach-sd1/100/100', title: 'Juara 1 Lomba Menggambar', level: 'Kecamatan', date: '2023', description: 'Kreativitas siswa SD dalam lomba seni rupa.' },
      { image: 'https://picsum.photos/seed/ach-sd2/100/100', title: 'Peringkat 3 Lomba Hafalan Surat', level: 'Kabupaten', date: '2024', description: 'Prestasi dalam bidang hafalan Al-Qur\'an Juz 30.' },
    ],
  },
  {
    id: 'smp-minnatul-huda',
    name: 'SMP Minnatul Huda',
    logo: 'https://imgur.com/4hdcTD7.png',
    description: 'Mencetak generasi unggul berlandaskan Iman, Taqwa, dan Akhlakul Karimah.',
    accentColor: 'border-blue-500',
    textColor: 'text-blue-600',
    summary: {
      foundedYear: 2005,
      headmaster: 'Bpk. Ahmad Fauzi, M.Pd.',
    },
    statistics: {
      students: 450,
      alumni: 2500,
      teachers: 35,
      achievements: 120,
      extracurriculars: 15,
    },
    youtubeUrl: 'https://www.youtube.com/channel/UCEr0gTEOM5_4rG1csp2Eusg',
    youtubeThumbnail: 'https://picsum.photos/seed/smp-video/1280/720',
    vision: 'Menjadi lembaga pendidikan Islam terdepan yang menghasilkan lulusan cerdas, berakhlak mulia, dan mampu bersaing di tingkat global.',
    mission: [
      'Menyelenggarakan pendidikan berkualitas yang memadukan ilmu pengetahuan dan teknologi dengan nilai-nilai Islam.',
      'Membentuk karakter siswa yang mandiri, kreatif, dan bertanggung jawab.',
      'Mengembangkan potensi siswa di bidang akademik dan non-akademik.',
      'Menciptakan lingkungan belajar yang kondusif, aman, dan Islami.',
    ],
    featuredPrograms: [
      { icon: 'book', title: 'Tahfidz Al-Qur\'an', description: 'Program intensif menghafal Al-Qur\'an dengan target minimal 3 juz.' },
      { icon: 'globe', title: 'Bilingual Program', description: 'Pembelajaran dengan pengantar Bahasa Arab dan Bahasa Inggris.' },
      { icon: 'lab', title: 'Sains & Robotika', description: 'Ekstrakurikuler untuk mengembangkan minat di bidang teknologi dan sains.' },
    ],
    gallery: [
      'https://picsum.photos/seed/smp-gal1/400/300',
      'https://picsum.photos/seed/smp-gal2/400/300',
      'https://picsum.photos/seed/smp-gal3/400/300',
      'https://picsum.photos/seed/smp-gal4/400/300',
      'https://picsum.photos/seed/smp-gal5/400/300',
      'https://picsum.photos/seed/smp-gal6/400/300',
    ],
    achievements: [
      { image: 'https://picsum.photos/seed/ach-smp1/100/100', title: 'Juara 1 Lomba Cerdas Cermat PAI', level: 'Kabupaten', date: '2023', description: 'Tim SMP MH berhasil meraih juara pertama tingkat kabupaten.' },
      { image: 'https://picsum.photos/seed/ach-smp2/100/100', title: 'Medali Emas Olimpiade Sains', level: 'Provinsi', date: '2024', description: 'Ananda Fulan meraih medali emas bidang Fisika.' },
    ],
  },
  {
    id: 'smk-minnatul-huda',
    name: 'SMK Minnatul Huda',
    logo: 'https://imgur.com/4hdcTD7.png',
    description: 'Siap kerja, cerdas, dan berakhlak mulia dengan keahlian profesional.',
    accentColor: 'border-amber-500',
    textColor: 'text-amber-600',
    summary: {
      foundedYear: 2008,
      headmaster: 'Bpk. Drs. H. Subhan.',
    },
    statistics: {
      students: 500,
      alumni: 1800,
      teachers: 40,
      achievements: 95,
      extracurriculars: 12,
    },
    youtubeUrl: 'https://www.youtube.com/channel/UCEr0gTEOM5_4rG1csp2Eusg',
    youtubeThumbnail: 'https://picsum.photos/seed/smk-video/1280/720',
    vision: 'Menjadi SMK unggulan yang menghasilkan lulusan kompeten, berjiwa wirausaha, dan berlandaskan nilai-nilai Islam.',
    mission: [
      'Menyelenggarakan pendidikan kejuruan yang relevan dengan kebutuhan industri.',
      'Membekali siswa dengan keterampilan teknis dan soft skills yang mumpuni.',
      'Menjalin kerjasama strategis dengan dunia usaha dan industri.',
    ],
    featuredPrograms: [
      { icon: 'computer', title: 'Teknik Komputer & Jaringan', description: 'Jurusan unggulan dengan sertifikasi internasional.' },
      { icon: 'briefcase', title: 'Akuntansi & Keuangan Lembaga', description: 'Mempersiapkan tenaga ahli di bidang keuangan.' },
      { icon: 'tools', title: 'Teknik Kendaraan Ringan', description: 'Bengkel modern dan kerjasama dengan industri otomotif.' },
    ],
    gallery: [
      'https://picsum.photos/seed/smk-gal1/400/300',
      'https://picsum.photos/seed/smk-gal2/400/300',
      'https://picsum.photos/seed/smk-gal3/400/300',
      'https://picsum.photos/seed/smk-gal4/400/300',
      'https://picsum.photos/seed/smk-gal5/400/300',
      'https://picsum.photos/seed/smk-gal6/400/300',
    ],
    achievements: [
      { image: 'https://picsum.photos/seed/ach-smk1/100/100', title: 'Juara 2 Lomba Kompetensi Siswa', level: 'Provinsi', date: '2023', description: 'Kompetensi di bidang TKJ tingkat provinsi Jawa Barat.' },
      { image: 'https://picsum.photos/seed/ach-smk2/100/100', title: 'Best Enterprise Award', level: 'Nasional', date: '2024', description: 'Penghargaan untuk produk wirausaha siswa.' },
    ],
  },
  {
    id: 'yayasan-minnatul-huda',
    name: 'Yayasan Minnatul Huda',
    logo: 'https://imgur.com/4hdcTD7.png',
    description: 'Menaungi dan mengembangkan pendidikan Islam yang berkualitas untuk masyarakat.',
    accentColor: 'border-red-500',
    textColor: 'text-red-600',
    summary: {
      foundedYear: 2000,
      headmaster: 'KH. Abdullah Syarif',
    },
    statistics: {
      students: 1250,
      alumni: 5500,
      teachers: 100,
      achievements: 300,
      extracurriculars: 25,
    },
    youtubeUrl: 'https://www.youtube.com/channel/UCEr0gTEOM5_4rG1csp2Eusg',
    youtubeThumbnail: 'https://picsum.photos/seed/yayasan-video/1280/720',
    vision: 'Menjadi pusat peradaban Islam melalui pendidikan, dakwah, dan sosial yang rahmatan lil \'alamin.',
    mission: [
      'Menyediakan sarana dan prasarana pendidikan yang representatif.',
      'Mengembangkan sumber daya manusia yang profesional dan berdedikasi.',
      'Memberikan kontribusi nyata bagi kemajuan umat dan bangsa.',
    ],
    featuredPrograms: [
      { icon: 'users', title: 'Program Beasiswa', description: 'Bantuan pendidikan untuk siswa berprestasi dan kurang mampu.' },
      { icon: 'globe', title: 'Kajian Umum', description: 'Pengajian rutin untuk masyarakat umum setiap akhir pekan.' },
      { icon: 'heart', title: 'Santunan Yatim & Dhuafa', description: 'Program sosial untuk membantu sesama yang membutuhkan.' },
    ],
    gallery: [
      'https://picsum.photos/seed/yayasan-gal1/400/300',
      'https://picsum.photos/seed/yayasan-gal2/400/300',
      'https://picsum.photos/seed/yayasan-gal3/400/300',
      'https://picsum.photos/seed/yayasan-gal4/400/300',
      'https://picsum.photos/seed/yayasan-gal5/400/300',
      'https://picsum.photos/seed/yayasan-gal6/400/300',
    ],
    achievements: [
      { image: 'https://picsum.photos/seed/ach-yayasan1/100/100', title: 'Penghargaan Lembaga Inspiratif', level: 'Nasional', date: '2022', description: 'Diakui sebagai lembaga pendidikan dengan program sosial terbaik.' },
      { image: 'https://picsum.photos/seed/ach-yayasan2/100/100', title: 'Akreditasi A "Unggul"', level: 'Nasional', date: '2023', description: 'Seluruh unit sekolah di bawah yayasan mendapatkan akreditasi A.' },
    ],
  }
];