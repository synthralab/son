export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string; // Full-time, Part-time, Remote
  experience: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
  isActive: boolean;
}

export const jobPositions: JobPosition[] = [
  {
    id: "senior-dijital-pazarlama-uzmani",
    title: "Senior Dijital Pazarlama Uzmanı",
    department: "Dijital Pazarlama",
    location: "İstanbul / Hibrit",
    type: "Tam Zamanlı",
    experience: "5+ yıl",
    description: "Müşterilerimiz için dijital pazarlama stratejileri geliştiren ve uygulayan, deneyimli bir dijital pazarlama uzmanı arıyoruz.",
    responsibilities: [
      "Dijital pazarlama stratejileri oluşturmak ve uygulamak",
      "SEO, SEM ve sosyal medya kampanyaları yönetmek",
      "Google Ads ve Facebook Ads kampanyaları kurmak ve optimize etmek",
      "Performans raporları hazırlamak ve sunmak",
      "Ekip üyelerine mentorluk yapmak",
      "Müşterilerle düzenli iletişim kurmak"
    ],
    qualifications: [
      "Dijital pazarlama alanında en az 5 yıl deneyim",
      "Google Ads ve Analytics sertifikaları",
      "SEO ve SEM konusunda derin bilgi",
      "Analitik düşünme ve problem çözme yeteneği",
      "Mükemmel iletişim becerileri",
      "İngilizce bilgisi"
    ],
    benefits: [
      "Rekabetçi maaş",
      "Hibrit çalışma modeli",
      "Özel sağlık sigortası",
      "Eğitim ve gelişim desteği",
      "Yıllık performans primi",
      "Esnek çalışma saatleri"
    ],
    isActive: true
  },
  {
    id: "grafik-tasarimci",
    title: "Grafik Tasarımcı",
    department: "Kreatif",
    location: "İstanbul",
    type: "Tam Zamanlı",
    experience: "2-4 yıl",
    description: "Yaratıcı projelerimizde görev alacak, trend takipçisi ve özgün tasarımlar yapabilen bir grafik tasarımcı arıyoruz.",
    responsibilities: [
      "Logo, kurumsal kimlik ve marka tasarımları yapmak",
      "Sosyal medya görselleri oluşturmak",
      "Basılı materyaller (broşür, katalog, vb.) tasarlamak",
      "Web ve mobil arayüz tasarımlarına katkı sağlamak",
      "Müşteri brief'lerine uygun tasarım alternatifleri sunmak"
    ],
    qualifications: [
      "Grafik tasarım veya ilgili bir bölümden mezun",
      "Adobe Creative Suite (Photoshop, Illustrator, InDesign) uzmanı",
      "Güçlü portfolyo",
      "Yaratıcı düşünme yeteneği",
      "Takım çalışmasına yatkın",
      "Detaylara özen gösteren"
    ],
    benefits: [
      "Yaratıcı ve dinamik çalışma ortamı",
      "Eğitim ve gelişim fırsatları",
      "Özel sağlık sigortası",
      "Çalışan indirim programları",
      "Yemek kartı",
      "Doğum günü ve özel günlerde izin"
    ],
    isActive: true
  },
  {
    id: "sosyal-medya-uzmani",
    title: "Sosyal Medya Uzmanı",
    department: "Dijital Pazarlama",
    location: "İstanbul / Hibrit",
    type: "Tam Zamanlı",
    experience: "2-3 yıl",
    description: "Müşterilerimizin sosyal medya hesaplarını yönetecek, içerik üretecek ve topluluk yönetimi yapacak bir sosyal medya uzmanı arıyoruz.",
    responsibilities: [
      "Sosyal medya içerik planlaması yapmak",
      "İçerik üretimi ve paylaşımı",
      "Topluluk yönetimi ve etkileşim",
      "Sosyal medya reklamları yönetmek",
      "Performans analizi ve raporlama",
      "Trend takibi ve yaratıcı fikir üretimi"
    ],
    qualifications: [
      "Sosyal medya yönetimi konusunda en az 2 yıl deneyim",
      "Instagram, Facebook, Twitter, LinkedIn konusunda uzman",
      "İçerik yazarlığı becerileri",
      "Sosyal medya analitik araçlarını kullanabilen",
      "Yaratıcı ve proaktif",
      "Güncel trendleri takip eden"
    ],
    benefits: [
      "Rekabetçi maaş paketi",
      "Hibrit çalışma imkanı",
      "Sağlık sigortası",
      "Yıllık bonus",
      "Profesyonel gelişim fırsatları",
      "Genç ve dinamik ekip"
    ],
    isActive: true
  },
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    department: "Teknoloji",
    location: "İstanbul / Remote",
    type: "Tam Zamanlı",
    experience: "3-5 yıl",
    description: "Modern web teknolojileri kullanarak kullanıcı dostu arayüzler geliştiren bir frontend developer arıyoruz.",
    responsibilities: [
      "React/Next.js ile web uygulamaları geliştirmek",
      "Responsive ve performanslı arayüzler oluşturmak",
      "Backend ekibi ile API entegrasyonları yapmak",
      "Kod kalitesi ve best practices'i sağlamak",
      "UX/UI ekibiyle işbirliği yapmak"
    ],
    qualifications: [
      "React ve modern JavaScript (ES6+) konusunda deneyim",
      "HTML5, CSS3, Tailwind CSS bilgisi",
      "Git ve version control sistemleri",
      "RESTful API entegrasyonu deneyimi",
      "Responsive design prensipleri",
      "İngilizce doküman okuma yeteneği"
    ],
    benefits: [
      "Tam remote çalışma imkanı",
      "Yüksek maaş paketi",
      "Özel sağlık sigortası",
      "Eğitim ve konferans desteği",
      "MacBook Pro",
      "Esnek çalışma saatleri"
    ],
    isActive: true
  },
  {
    id: "video-produksiyon-uzmani",
    title: "Video Prodüksiyon Uzmanı",
    department: "Kreatif",
    location: "İstanbul",
    type: "Tam Zamanlı",
    experience: "3-5 yıl",
    description: "Video çekimi ve post-prodüksiyon konusunda deneyimli, yaratıcı bir video prodüksiyon uzmanı arıyoruz.",
    responsibilities: [
      "Tanıtım filmleri ve reklam çekimleri yapmak",
      "Video kurgu ve post-prodüksiyon",
      "Motion graphics ve animasyon",
      "Senaryo ve story board hazırlığı",
      "Ekipman yönetimi",
      "Müşteri çekimlerinde yer almak"
    ],
    qualifications: [
      "Video prodüksiyon alanında en az 3 yıl deneyim",
      "Adobe Premiere, After Effects, DaVinci Resolve bilgisi",
      "Kamera ve lighting ekipmanları konusunda deneyim",
      "Hikaye anlatma yeteneği",
      "Yaratıcı ve detay odaklı",
      "Takım çalışmasına yatkın"
    ],
    benefits: [
      "Profesyonel stüdyo ve ekipman",
      "Rekabetçi maaş",
      "Sağlık sigortası",
      "Proje bazlı bonus",
      "Yaratıcı özgürlük",
      "Gelişim fırsatları"
    ],
    isActive: true
  },
  {
    id: "stajyer-grafik-tasarimci",
    title: "Stajyer Grafik Tasarımcı",
    department: "Kreatif",
    location: "İstanbul",
    type: "Staj",
    experience: "Mezun veya son sınıf öğrencisi",
    description: "Tasarım alanında kariyer yapmak isteyen, öğrenmeye açık ve tutkulu stajyer grafik tasarımcılar arıyoruz.",
    responsibilities: [
      "Senior tasarımcılara destek olmak",
      "Sosyal medya görselleri hazırlamak",
      "Tasarım projelerinde yardımcı olmak",
      "Brief'leri anlamak ve görselleştirmek",
      "Ekip toplantılarına katılmak"
    ],
    qualifications: [
      "Grafik tasarım bölümü son sınıf öğrencisi veya yeni mezun",
      "Temel Adobe programları bilgisi (Photoshop, Illustrator)",
      "Portfolyo (okul projeleri dahil)",
      "Öğrenmeye açık ve hevesli",
      "İletişim becerileri güçlü",
      "Yaratıcı düşünebilen"
    ],
    benefits: [
      "Profesyonel ekipten öğrenme fırsatı",
      "Staj ücreti",
      "SGK",
      "Sertifika",
      "Gerçek projelerde çalışma deneyimi",
      "İş imkanı"
    ],
    isActive: true
  }
];
