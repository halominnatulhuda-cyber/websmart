export const USERS = {
  "users": [
    {
      "id_role": "KS",
      "username": "kepsek1",
      "password": "kepsek123",
      "status": "kepala_sekolah",
      "nama": "KH. Abdurrahman",
      "data_file": "kepsek.json"
    },
    {
      "id_role": "AD",
      "username": "admin1",
      "password": "admin123",
      "status": "admin",
      "nama": "Admin Pondok",
      "data_file": "admin.json"
    },
    {
      "id_role": "GR",
      "username": "guru1",
      "password": "12345",
      "status": "guru",
      "nama": "Ustadz Ahmad",
      "mapel": "Fiqih",
      "data_file": "guru.json"
    },
    {
      "id_role": "SW",
      "username": "siswa1",
      "password": "54321",
      "status": "siswa",
      "nama": "Muhammad Iqbal",
      "kelas": "9A",
      "data_file": "siswa.json"
    }
  ]
};

export const GURU_DATA = {
  "profil": {
    "nama": "Ustadz Ahmad",
    "mapel": "Fiqih",
    "nip": "G-2025-01"
  },
  "jadwal_mengajar": [
    { "hari": "Senin", "jam": "07.00-09.00", "kelas": "9A" },
    { "hari": "Rabu", "jam": "10.00-12.00", "kelas": "9B" }
  ],
  "daftar_penilaian": [
    { "nama_siswa": "Ali", "nilai": 88 },
    { "nama_siswa": "Fatimah", "nilai": 92 }
  ]
};

export const SISWA_DATA = {
  "profil": {
    "nama": "Muhammad Iqbal",
    "kelas": "9A",
    "nis": "SW-1234"
  },
  "jadwal_pelajaran": [
    { "hari": "Senin", "mapel": "Fiqih", "guru": "Ust. Ahmad" },
    { "hari": "Selasa", "mapel": "Hadits", "guru": "Ust. Rahman" }
  ],
  "nilai": [
    { "mapel": "Fiqih", "nilai": 90 },
    { "mapel": "Hadits", "nilai": 85 }
  ]
};

export const ADMIN_DATA = {
  "profil": {
    "nama": "Admin Pondok",
    "jabatan": "Admin Utama",
    "id_admin": "AD-001"
  },
  "fitur": [
    "Kelola Data Guru",
    "Kelola Data Siswa",
    "Kelola Jadwal",
    "Kelola Nilai"
  ]
};

export const KEPSEK_DATA = {
  "profil": {
    "nama": "KH. Abdurrahman",
    "jabatan": "Kepala Sekolah",
    "id_kepsek": "KS-001"
  },
  "akses": "full",
  "fitur": [
    "Lihat Semua Data",
    "Verifikasi Penilaian",
    "Kelola Struktur Yayasan",
    "Analisis Prestasi"
  ]
};

// Fix: Add and export SCHOOL_DATA constant to resolve import errors.
export const SCHOOL_DATA = [
  {
    id: 'sd-minnatul-huda',
    name: 'SD IT Minnatul Huda',
    logo: 'https://imgur.com/4hdcTD7.png',
    description: 'Mencetak generasi Rabbani yang cerdas, kreatif, dan berakhlak mulia.',
    summary: {
      foundedYear: 2010,
      headmaster: 'Ustadzah Fatimah, S.Pd.I',
    },
    vision: 'Menjadi sekolah dasar Islam terpadu unggulan yang menghasilkan generasi Qur\'ani, cerdas, mandiri, dan berakhlakul karimah.',
    mission: [
      'Menyelenggarakan pendidikan yang memadukan kurikulum nasional dengan nilai-nilai Islam.',
      'Mengembangkan potensi siswa di bidang akademik, non-akademik, dan keagamaan.',
      'Membina siswa agar memiliki karakter Islami yang kuat.',
      'Menciptakan lingkungan belajar yang nyaman, aman, dan Islami.',
    ],
    featuredPrograms: [
      { icon: 'book', title: 'Tahfidz Al-Quran', description: 'Program menghafal Al-Quran dengan target minimal 3 juz setelah lulus.' },
      { icon: 'globe', title: 'Bilingual Program', description: 'Pembiasaan penggunaan Bahasa Arab dan Inggris dalam kegiatan sehari-hari.' },
      { icon: 'lab', title: 'Fun Science Club', description: 'Klub sains untuk menumbuhkan rasa ingin tahu dan kreativitas siswa.' },
    ],
    statistics: {
      students: 350,
      alumni: 500,
      teachers: 30,
      achievements: 45,
      extracurriculars: 12,
    },
    mainImage: 'https://i.imgur.com/A6tFm2k.jpeg',
    youtubeThumbnail: 'https://i.imgur.com/hX8eL6k.jpeg',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    gallery: [
      'https://i.imgur.com/pYxCR2Z.jpeg',
      'https://i.imgur.com/xO9f0fS.jpeg',
      'https://i.imgur.com/qR1p8Zg.jpeg',
      'https://i.imgur.com/oV2D8vJ.jpeg',
      'https://i.imgur.com/nJ5J0fL.jpeg',
      'https://i.imgur.com/iJ6m1wR.jpeg',
    ],
    achievements: [
      { image: 'https://i.imgur.com/T0YV8yD.png', title: 'Juara 1 Lomba Cerdas Cermat PAI', level: 'Tingkat Kabupaten', date: '2023', description: 'Tim Cerdas Cermat PAI berhasil meraih juara pertama.' },
      { image: 'https://i.imgur.com/uR2Zf8J.png', title: 'Juara 2 Olimpiade Sains Nasional', level: 'Tingkat Provinsi', date: '2022', description: 'Mewakili provinsi dalam ajang OSN tingkat nasional.' },
    ],
    detailsUrl: '#',
    accentColor: 'border-blue-500',
    textColor: 'text-blue-600',
  },
  {
    id: 'smp-minnatul-huda',
    name: 'SMP BP Minnatul Huda',
    logo: 'https://imgur.com/4hdcTD7.png',
    description: 'Membentuk pribadi tangguh, berprestasi, dan berlandaskan iman & takwa.',
    summary: {
      foundedYear: 2005,
      headmaster: 'Ustadz Abdullah, M.Pd',
    },
    vision: 'Terwujudnya generasi muda Islam yang unggul dalam prestasi, kokoh dalam iman, dan santun dalam perilaku.',
    mission: [
      'Melaksanakan pembelajaran aktif, inovatif, kreatif, efektif, dan menyenangkan (PAIKEM).',
      'Mengintegrasikan pendidikan karakter dalam semua aspek kegiatan sekolah.',
      'Mengembangkan bakat dan minat siswa melalui kegiatan ekstrakurikuler yang beragam.',
      'Membangun kemitraan yang sinergis dengan orang tua dan masyarakat.',
    ],
    featuredPrograms: [
      { icon: 'speaker', title: 'Public Speaking & Leadership', description: 'Program pelatihan kepemimpinan dan kemampuan berbicara di depan umum.' },
      { icon: 'computer', title: 'Digital Literacy', description: 'Pembekalan keterampilan teknologi informasi dan komunikasi yang relevan.' },
      { icon: 'leaf', title: 'Pesantren Alam', description: 'Kegiatan belajar di alam terbuka untuk membentuk karakter dan kemandirian.' },
    ],
    statistics: {
      students: 420,
      alumni: 1200,
      teachers: 45,
      achievements: 78,
      extracurriculars: 18,
    },
    mainImage: 'https://i.imgur.com/A6tFm2k.jpeg',
    youtubeThumbnail: 'https://i.imgur.com/hX8eL6k.jpeg',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    gallery: [
      'https://i.imgur.com/pYxCR2Z.jpeg',
      'https://i.imgur.com/xO9f0fS.jpeg',
      'https://i.imgur.com/qR1p8Zg.jpeg',
      'https://i.imgur.com/oV2D8vJ.jpeg',
      'https://i.imgur.com/nJ5J0fL.jpeg',
      'https://i.imgur.com/iJ6m1wR.jpeg',
    ],
    achievements: [
      { image: 'https://i.imgur.com/T0YV8yD.png', title: 'Medali Emas Kejuaraan Pencak Silat', level: 'Tingkat Nasional', date: '2023', description: 'Atlet pencak silat meraih medali emas di kejuaraan nasional.' },
      { image: 'https://i.imgur.com/uR2Zf8J.png', title: 'Finalis Lomba Robotik', level: 'Tingkat Nasional', date: '2023', description: 'Tim robotik sekolah berhasil masuk babak final.' },
    ],
    detailsUrl: '#',
    accentColor: 'border-green-500',
    textColor: 'text-green-600',
  },
  {
    id: 'smk-minnatul-huda',
    name: 'SMK Minnatul Huda',
    logo: 'https://imgur.com/4hdcTD7.png',
    description: 'Menyiapkan lulusan yang kompeten, profesional, dan siap kerja di era global.',
    summary: {
      foundedYear: 2012,
      headmaster: 'Bapak H. Muhammad Yusuf, S.T.',
    },
    vision: 'Menjadi SMK rujukan yang menghasilkan lulusan berdaya saing tinggi, berjiwa wirausaha, dan berakhlak mulia.',
    mission: [
      'Menyelenggarakan pendidikan kejuruan yang berbasis industri (link and match).',
      'Membekali siswa dengan kompetensi teknis dan soft skills yang dibutuhkan dunia kerja.',
      'Mengembangkan jiwa entrepreneurship melalui program teaching factory.',
      'Menanamkan nilai-nilai profesionalisme, integritas, dan etos kerja Islami.',
    ],
    featuredPrograms: [
      { icon: 'tools', title: 'Teknik Kendaraan Ringan', description: 'Jurusan unggulan dengan fasilitas bengkel modern dan kerjasama industri.' },
      { icon: 'computer', title: 'Rekayasa Perangkat Lunak', description: 'Mencetak programmer muda yang siap bersaing di industri teknologi.' },
      { icon: 'briefcase', title: 'Akuntansi & Keuangan Lembaga', description: 'Program keahlian yang menghasilkan tenaga akuntan yang handal.' },
    ],
    statistics: {
      students: 500,
      alumni: 800,
      teachers: 55,
      achievements: 62,
      extracurriculars: 15,
    },
    mainImage: 'https://i.imgur.com/A6tFm2k.jpeg',
    youtubeThumbnail: 'https://i.imgur.com/hX8eL6k.jpeg',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    gallery: [
      'https://i.imgur.com/pYxCR2Z.jpeg',
      'https://i.imgur.com/xO9f0fS.jpeg',
      'https://i.imgur.com/qR1p8Zg.jpeg',
      'https://i.imgur.com/oV2D8vJ.jpeg',
      'https://i.imgur.com/nJ5J0fL.jpeg',
      'https://i.imgur.com/iJ6m1wR.jpeg',
    ],
    achievements: [
      { image: 'https://i.imgur.com/T0YV8yD.png', title: 'Juara 1 Lomba Kompetensi Siswa (LKS)', level: 'Tingkat Provinsi', date: '2023', description: 'Siswa jurusan TKJ memenangkan LKS bidang Networking Support.' },
      { image: 'https://i.imgur.com/uR2Zf8J.png', title: 'Best Enterprise Award', level: 'Student Company Competition', date: '2022', description: 'Perusahaan siswa (SC) kami memenangkan penghargaan bisnis terbaik.' },
    ],
    detailsUrl: '#',
    accentColor: 'border-red-500',
    textColor: 'text-red-600',
  },
  {
    id: 'yayasan-minnatul-huda',
    name: 'Yayasan Minnatul Huda',
    logo: 'https://imgur.com/4hdcTD7.png',
    description: 'Mengabdi untuk umat, membangun peradaban melalui pendidikan Islam.',
    summary: {
      foundedYear: 1998,
      headmaster: 'KH. Abdurrahman',
    },
    vision: 'Menjadi lembaga penggerak kemajuan pendidikan Islam yang kontributif bagi masyarakat, bangsa, dan agama.',
    mission: [
      'Menyediakan layanan pendidikan Islam yang berkualitas dan terjangkau untuk semua kalangan.',
      'Mengelola dan mengembangkan unit-unit pendidikan secara profesional dan amanah.',
      'Berperan aktif dalam kegiatan sosial dan dakwah di masyarakat.',
      'Membangun jaringan kerjasama dengan berbagai lembaga untuk kemajuan pendidikan.',
    ],
    featuredPrograms: [
      { icon: 'heart', title: 'Program Beasiswa Santri', description: 'Memberikan bantuan pendidikan bagi santri berprestasi dan kurang mampu.' },
      { icon: 'users', title: 'Pengembangan Masyarakat', description: 'Program pemberdayaan ekonomi dan sosial untuk masyarakat sekitar pesantren.' },
      { icon: 'book', title: 'Kajian Islam Rutin', description: 'Mengadakan majelis ilmu dan kajian kitab kuning yang terbuka untuk umum.' },
    ],
    statistics: {
      students: 1270,
      alumni: 3500,
      teachers: 130,
      achievements: 185,
      extracurriculars: 45,
    },
    mainImage: 'https://i.imgur.com/A6tFm2k.jpeg',
    youtubeThumbnail: 'https://i.imgur.com/hX8eL6k.jpeg',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    gallery: [
      'https://i.imgur.com/pYxCR2Z.jpeg',
      'https://i.imgur.com/xO9f0fS.jpeg',
      'https://i.imgur.com/qR1p8Zg.jpeg',
      'https://i.imgur.com/oV2D8vJ.jpeg',
      'https://i.imgur.com/nJ5J0fL.jpeg',
      'https://i.imgur.com/iJ6m1wR.jpeg',
    ],
    achievements: [
      { image: 'https://i.imgur.com/T0YV8yD.png', title: 'Lembaga Pendidikan Islam Terbaik', level: 'Anugerah Pendidikan', date: '2021', description: 'Mendapat penghargaan sebagai lembaga pendidikan dengan tata kelola terbaik.' },
      { image: 'https://i.imgur.com/uR2Zf8J.png', title: 'Program Sosial Terinspiratif', level: 'Community Choice Award', date: '2020', description: 'Program beasiswa santri mendapat apresiasi dari masyarakat luas.' },
    ],
    detailsUrl: '#',
    accentColor: 'border-amber-500',
    textColor: 'text-amber-600',
  }
];
