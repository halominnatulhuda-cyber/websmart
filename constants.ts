// FIX: Import the newly created School type
import { FoundationAchievement, StudentAchievement, AchievementArticle, Testimonial, School } from './types';

export const FOUNDATION_ACHIEVEMENTS: FoundationAchievement[] = [
  {
    year: 2023,
    award: 'Penghargaan Layanan Pendidikan Nasional',
    organizer: 'Kementerian Pendidikan & Kebudayaan',
    description: 'Diakui atas kontribusi luar biasa dalam meningkatkan kualitas dan aksesibilitas pendidikan di tingkat nasional.',
    image: 'https://picsum.photos/seed/cert1/800/600',
    logo: 'https://picsum.photos/seed/logo1/40'
  },
  {
    year: 2022,
    award: 'Inovasi Digital Learning Award',
    organizer: 'Asosiasi Guru Teknologi Indonesia',
    description: 'Pemenang penghargaan untuk implementasi platform pembelajaran digital yang inovatif dan efektif selama pandemi.',
    image: 'https://picsum.photos/seed/cert2/800/600',
    logo: 'https://picsum.photos/seed/logo2/40'
  },
  {
    year: 2021,
    award: 'Yayasan Pendidikan Terbaik se-Kota',
    organizer: 'Dinas Pendidikan Kota',
    description: 'Terpilih sebagai yayasan dengan manajemen terbaik, fasilitas terlengkap, dan dampak sosial positif tertinggi di kota.',
    image: 'https://picsum.photos/seed/cert3/800/600',
    logo: 'https://picsum.photos/seed/logo3/40'
  },
  {
    year: 2020,
    award: 'Program Pemberdayaan Masyarakat',
    organizer: 'Lembaga Filantropi Nasional',
    description: 'Mendapatkan apresiasi untuk program beasiswa dan pelatihan keterampilan yang memberdayakan masyarakat sekitar.',
    image: 'https://picsum.photos/seed/cert4/800/600',
    logo: 'https://picsum.photos/seed/logo4/40'
  }
];

export const STUDENT_ACHIEVEMENTS: StudentAchievement[] = [
  { id: 'sa1', name: 'Anisa Rahma', achievement: 'Juara 1 Olimpiade Sains Nasional (OSN)', year: 2023, category: 'Akademik', image: 'https://picsum.photos/seed/student1/400/500', story: 'Anisa mendedikasikan waktu 6 bulan untuk riset intensif di bidang biologi, yang membawanya meraih medali emas di ajang paling bergengsi.' },
  { id: 'sa2', name: 'Tim Robotika "Elang V.2"', achievement: 'Medali Perak Kontes Robot Internasional', year: 2023, category: 'Teknologi', image: 'https://picsum.photos/seed/student2/400/500', story: 'Tim kami berhasil merancang robot pemadam api yang mampu bernavigasi secara otonom, mengalahkan puluhan tim dari negara lain.' },
  { id: 'sa3', name: 'Budi Santoso', achievement: 'Juara 1 Lomba Desain Grafis Nasional', year: 2022, category: 'Seni', image: 'https://picsum.photos/seed/student3/400/500', story: 'Dengan tema "Indonesia Maju", karya Budi berhasil memukau juri karena visualnya yang kuat dan pesan yang mendalam.' },
  { id: 'sa4', name: 'Tim Sepak Bola U-17', achievement: 'Juara Liga Pendidikan Regional', year: 2023, category: 'Olahraga', image: 'https://picsum.photos/seed/student4/400/500', story: 'Kerja keras dan kekompakan tim membawa kami menjadi juara regional setelah melalui pertandingan final yang dramatis.' },
  { id: 'sa5', name: 'Siti Aisyah', achievement: 'Juara 3 Lomba Menulis Cerpen Nasional', year: 2022, category: 'Seni', image: 'https://picsum.photos/seed/student5/400/500', story: 'Cerpen Siti yang berjudul "Senja di Ujung Desa" menyentuh hati para juri dengan alur cerita yang tak terduga dan kaya akan nilai moral.' },
  { id: 'sa6', name: 'Andi Pratama', achievement: 'Finalis Kompetisi "Young Coder 2023"', year: 2023, category: 'Teknologi', image: 'https://picsum.photos/seed/student6/400/500', story: 'Andi mengembangkan aplikasi mobile untuk membantu petani memantau kondisi cuaca dan irigasi secara real-time.' },
  { id: 'sa7', name: 'Tim Debat Bahasa Inggris', achievement: 'Juara 1 Kompetisi Debat Provinsi', year: 2022, category: 'Akademik', image: 'https://picsum.photos/seed/student7/400/500', story: 'Dengan argumen yang tajam dan terstruktur, tim kami berhasil mempertahankan gelar juara provinsi untuk kedua kalinya.' },
  { id: 'sa8', name: 'Rina Wijaya', achievement: 'Juara 2 Kejuaraan Bulu Tangkis Nasional', year: 2023, category: 'Olahraga', image: 'https://picsum.photos/seed/student8/400/500', story: 'Perjuangan Rina dari babak kualifikasi hingga final menjadi inspirasi bagi seluruh siswa di sekolah.' },
];

export const ACHIEVEMENT_ARTICLES: AchievementArticle[] = [
    {
        id: 'art1',
        title: 'Dari Bengkel ke Panggung Nasional: Cerita Tim Robotika',
        date: '15 Oktober 2023',
        image: 'https://picsum.photos/seed/article1/800/500',
        teaser: 'Bermula dari sebuah bengkel sederhana, tim robotika SMK Minnatul Huda berhasil menciptakan inovasi yang membawa mereka ke panggung nasional. Bagaimana kisahnya?',
        fullContent: 'Perjalanan Tim Robotika "Elang V.2" adalah bukti nyata bahwa keterbatasan bukanlah penghalang untuk berprestasi. Dengan dana terbatas, mereka memanfaatkan barang-barang bekas dan komponen sederhana untuk membangun prototipe pertama mereka. Dibimbing oleh Pak Rahmat, guru TIK, mereka menghabiskan waktu berjam-jam setelah sekolah untuk menyempurnakan robot mereka. Kerja keras itu terbayar saat mereka lolos seleksi regional, dan puncaknya adalah meraih medali perak di tingkat internasional, membuktikan bahwa semangat dan inovasi bisa mengalahkan segalanya.'
    },
    {
        id: 'art2',
        title: 'Menang OSN, Tapi Tetap Rendah Hati — Profil Anisa Rahma',
        date: '28 September 2023',
        image: 'https://picsum.photos/seed/article2/800/500',
        teaser: 'Anisa Rahma, peraih medali emas OSN Biologi, membuktikan bahwa kecerdasan harus diimbangi dengan akhlak yang mulia. Mari kenal lebih dekat sosok inspiratif ini.',
        fullContent: 'Anisa Rahma bukan hanya seorang juara, tetapi juga seorang teman yang baik dan siswa yang rajin. Di balik prestasinya yang gemilang, ia adalah sosok yang gemar membantu teman-temannya yang kesulitan belajar. "Ilmu itu akan lebih berkah jika dibagikan," katanya. Ia bercita-cita menjadi seorang peneliti untuk menemukan obat bagi penyakit-penyakit langka. Kisah Anisa mengajarkan kita bahwa prestasi sejati adalah ketika kita bisa bermanfaat bagi orang lain.'
    },
    {
        id: 'art3',
        title: 'Inovasi Pembelajaran Yayasan Jadi Sorotan Media',
        date: '10 Agustus 2023',
        image: 'https://picsum.photos/seed/article3/800/500',
        teaser: 'Program "Digital Madrasah" yang diinisiasi oleh Yayasan Minnatul Huda mendapatkan liputan khusus dari media nasional sebagai terobosan dalam pendidikan.',
        fullContent: 'Program "Digital Madrasah" mengintegrasikan teknologi ke dalam kurikulum pesantren. Siswa tidak hanya belajar kitab kuning, tetapi juga belajar coding, desain grafis, dan digital marketing. Tujuannya adalah mencetak generasi santri yang tidak gagap teknologi dan siap bersaing di era digital. Inovasi ini dianggap sebagai model percontohan bagi lembaga pendidikan Islam lainnya di Indonesia.'
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: "Prestasi bukan sekadar piala, tapi bukti dari kerja keras, doa yang tak putus, dan keyakinan bahwa setiap anak memiliki potensi untuk bersinar.",
        author: "KH. Abdullah Said",
        role: "Pimpinan Yayasan"
    },
    {
        quote: "Melihat siswa kami berdiri di panggung juara adalah kebahagiaan terbesar. Di Minnatul Huda, kami tidak hanya mengajar, kami membimbing mimpi.",
        author: "Bambang Sutrisno, M.Pd",
        role: "Kepala SMP Minnatul Huda"
    },
    {
        quote: "Kemenangan terbesar adalah ketika kita berhasil mengalahkan rasa malas dan keraguan dalam diri kita sendiri. Teruslah berjuang, karena setiap usaha adalah prestasi.",
        author: "Anisa Rahma",
        role: "Alumni Berprestasi"
    }
];

// FIX: Add SCHOOL_DATA constant to resolve error in SchoolViewPager.tsx
export const SCHOOL_DATA: School[] = [
  {
    id: 'sd-minnatul-huda',
    name: 'SD Minnatul Huda',
    description: "Membentuk generasi Qur'ani yang cerdas, kreatif, dan berakhlak mulia.",
    logo: 'https://imgur.com/4hdcTD7.png',
    accentColor: 'border-blue-500',
    textColor: 'text-blue-600',
    summary: {
      foundedYear: 2005,
      headmaster: 'Drs. H. Ahmad Fauzi',
    },
    statistics: {
      students: 450,
      alumni: 2500,
      teachers: 30,
      achievements: 75,
      extracurriculars: 15,
    },
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeThumbnail: 'https://picsum.photos/seed/sd-yt/800/450',
    vision: 'Menjadi sekolah dasar unggulan yang menghasilkan lulusan beriman, bertakwa, cerdas, terampil, dan berwawasan global.',
    mission: [
      'Menyelenggarakan pendidikan yang berkualitas dengan kurikulum terpadu.',
      'Mengembangkan potensi siswa di bidang akademik dan non-akademik.',
      'Membina akhlak mulia dan karakter Islami pada setiap siswa.',
      'Menciptakan lingkungan belajar yang nyaman, aman, dan menyenangkan.',
    ],
    featuredPrograms: [
      { icon: 'book', title: 'Tahfidz Al-Quran', description: 'Program hafalan Al-Quran dengan target minimal 2 juz saat lulus.' },
      { icon: 'computer', title: 'Kelas Digital', description: 'Pembelajaran interaktif menggunakan teknologi terkini.' },
      { icon: 'leaf', title: 'Program Adiwiyata', description: 'Mendidik siswa untuk peduli dan berbudaya lingkungan.' },
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
      { image: 'https://picsum.photos/seed/sd-ach1/100/100', title: 'Juara 1 Lomba Cerdas Cermat', level: 'Kabupaten', date: '2023', description: 'Tim Cerdas Cermat SD MH berhasil meraih juara pertama tingkat kabupaten.' },
      { image: 'https://picsum.photos/seed/sd-ach2/100/100', title: 'Medali Emas OSN Matematika', level: 'Provinsi', date: '2023', description: 'Siswa kami meraih medali emas dalam Olimpiade Sains Nasional tingkat provinsi.' },
    ],
  },
  {
    id: 'smp-minnatul-huda',
    name: 'SMP Minnatul Huda',
    description: 'Mencetak generasi pemimpin masa depan yang berlandaskan iman dan takwa.',
    logo: 'https://imgur.com/4hdcTD7.png',
    accentColor: 'border-green-500',
    textColor: 'text-green-600',
    summary: {
      foundedYear: 1998,
      headmaster: 'Bambang Sutrisno, M.Pd',
    },
    statistics: {
      students: 600,
      alumni: 4000,
      teachers: 45,
      achievements: 150,
      extracurriculars: 20,
    },
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeThumbnail: 'https://picsum.photos/seed/smp-yt/800/450',
    vision: 'Terwujudnya insan kamil yang unggul dalam prestasi, berakhlak mulia, dan mampu bersaing di era globalisasi.',
    mission: [
      'Melaksanakan pembelajaran aktif, inovatif, kreatif, efektif, dan menyenangkan (PAIKEM).',
      'Mengoptimalkan program pembinaan akhlak dan ibadah.',
      'Mengembangkan bakat dan minat siswa melalui kegiatan ekstrakurikuler.',
      'Menjalin kerjasama yang harmonis dengan orang tua dan masyarakat.',
    ],
    featuredPrograms: [
      { icon: 'globe', title: 'Program Bilingual', description: 'Pembiasaan penggunaan Bahasa Arab dan Inggris dalam percakapan sehari-hari.' },
      { icon: 'lab', title: 'Riset Ilmiah Remaja', description: 'Mendorong siswa untuk melakukan penelitian dan menghasilkan karya ilmiah.' },
      { icon: 'users', title: 'Latihan Dasar Kepemimpinan', description: 'Membentuk karakter pemimpin yang bertanggung jawab dan amanah.' },
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
      { image: 'https://picsum.photos/seed/smp-ach1/100/100', title: 'Juara Umum Pramuka', level: 'Nasional', date: '2022', description: 'Kontingen Pramuka SMP MH menjadi juara umum dalam Jambore Nasional.' },
      { image: 'https://picsum.photos/seed/smp-ach2/100/100', title: 'Best Speaker English Debate', level: 'Provinsi', date: '2023', description: 'Siswa kami dinobatkan sebagai pembicara terbaik dalam kompetisi debat Bahasa Inggris.' },
    ],
  },
  {
    id: 'smk-minnatul-huda',
    name: 'SMK Minnatul Huda',
    description: 'Menyiapkan lulusan yang kompeten, profesional, dan siap kerja di dunia industri.',
    logo: 'https://imgur.com/4hdcTD7.png',
    accentColor: 'border-red-500',
    textColor: 'text-red-600',
    summary: {
      foundedYear: 2002,
      headmaster: 'Ir. H. Joko Susilo',
    },
    statistics: {
      students: 750,
      alumni: 3500,
      teachers: 60,
      achievements: 200,
      extracurriculars: 18,
    },
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeThumbnail: 'https://picsum.photos/seed/smk-yt/800/450',
    vision: 'Menjadi SMK rujukan yang menghasilkan tenaga kerja terampil, mandiri, berjiwa wirausaha, dan berakhlak mulia.',
    mission: [
      'Menyelenggarakan pendidikan kejuruan yang relevan dengan kebutuhan industri.',
      'Membekali siswa dengan keterampilan soft skills dan hard skills yang seimbang.',
      'Mengembangkan teaching factory sebagai pusat pembelajaran berbasis produksi.',
      'Membangun jejaring kerjasama yang kuat dengan dunia usaha dan industri.',
    ],
    featuredPrograms: [
      { icon: 'tools', title: 'Teknik Kendaraan Ringan', description: 'Jurusan unggulan dengan fasilitas bengkel modern dan kerjasama industri.' },
      { icon: 'computer', title: 'Rekayasa Perangkat Lunak', description: 'Mencetak programmer muda yang siap bersaing di industri digital.' },
      { icon: 'briefcase', title: 'Praktik Kerja Industri', description: 'Program magang wajib di perusahaan ternama selama 6 bulan.' },
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
      { image: 'https://picsum.photos/seed/smk-ach1/100/100', title: 'Juara 1 LKS Otomotif', level: 'Nasional', date: '2023', description: 'Siswa jurusan TKR menjadi yang terbaik dalam Lomba Kompetensi Siswa.' },
      { image: 'https://picsum.photos/seed/smk-ach2/100/100', title: 'Startup Award 2022', level: 'Nasional', date: '2022', description: 'Tim RPL memenangkan penghargaan untuk aplikasi mobile inovatif mereka.' },
    ],
  },
    {
    id: 'yayasan-minnatul-huda',
    name: 'Yayasan Minnatul Huda',
    description: 'Payung besar yang menaungi dan mengembangkan pendidikan Islam berkualitas.',
    logo: 'https://imgur.com/4hdcTD7.png',
    accentColor: 'border-amber-500',
    textColor: 'text-amber-600',
    summary: {
      foundedYear: 1995,
      headmaster: 'KH. Abdullah Said',
    },
    statistics: {
      students: 1800,
      alumni: 9500,
      teachers: 135,
      achievements: 425,
      extracurriculars: 53,
    },
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeThumbnail: 'https://picsum.photos/seed/yayasan-yt/800/450',
    vision: 'Menjadi lembaga pendidikan Islam terdepan dalam mencetak generasi rabbani yang bermanfaat bagi umat dan bangsa.',
    mission: [
      'Menyediakan sarana dan prasarana pendidikan yang representatif dan modern.',
      'Mengembangkan sumber daya manusia yang profesional dan berdedikasi tinggi.',
      'Membangun sistem manajemen pendidikan yang efektif dan efisien.',
      'Melaksanakan program pemberdayaan masyarakat di bidang pendidikan dan sosial.',
    ],
    featuredPrograms: [
      { icon: 'heart', title: 'Program Beasiswa Yatim & Dhuafa', description: 'Memberikan akses pendidikan gratis bagi anak-anak yang membutuhkan.' },
      { icon: 'speaker', title: 'Kajian Islam Rutin', description: 'Program dakwah dan penguatan spiritual untuk masyarakat umum.' },
      { icon: 'users', title: 'Pengembangan Kompetensi Guru', description: 'Pelatihan dan workshop rutin untuk meningkatkan kualitas pengajar.' },
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
      { image: 'https://picsum.photos/seed/yayasan-ach1/100/100', title: 'Penghargaan Filantropi Islam', level: 'Nasional', date: '2021', description: 'Diakui sebagai lembaga filantropi pendidikan Islam terbaik oleh Baznas.' },
      { image: 'https://picsum.photos/seed/yayasan-ach2/100/100', title: 'Lembaga Pendidikan Inspiratif', level: 'Nasional', date: '2020', description: 'Penghargaan dari Kemendikbud atas inovasi dalam pembelajaran.' },
    ],
  },
];