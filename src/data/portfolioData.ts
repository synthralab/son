export interface Portfolio {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  gallery: string[];
  tags: string[];
}

export const portfolioData: Portfolio[] = [
  {
    id: "dijital-donusum-kampanyasi",
    title: "Dijital Dönüşüm Kampanyası",
    category: "Dijital Pazarlama",
    client: "TechCorp A.Ş.",
    year: "2024",
    description: "Büyük bir teknoloji şirketi için gerçekleştirdiğimiz 360 derece dijital dönüşüm kampanyası.",
    challenge: "TechCorp, dijital kanallardan yeterli dönüşüm alamıyor ve marka bilinirliği düşüktü.",
    solution: "SEO optimizasyonu, hedefli Google Ads kampanyaları ve sosyal medya stratejisi ile kapsamlı bir dijital pazarlama planı uyguladık.",
    results: [
      "Web trafiğinde %250 artış",
      "Dönüşüm oranında %180 iyileşme",
      "Sosyal medya etkileşiminde %320 artış",
      "Marka bilinirliğinde %200 artış"
    ],
    image: "https://images.unsplash.com/photo-1759393851741-674ee71fb498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwY2FtcGFpZ258ZW58MXx8fHwxNzYwMzU2MDUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1759393851741-674ee71fb498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwY2FtcGFpZ258ZW58MXx8fHwxNzYwMzU2MDUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1758873272869-9130397ff7d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZHZlcnRpc2luZyUyMGFnZW5jeSUyMG9mZmljZXxlbnwxfHx8fDE3NjAzOTc1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    tags: ["Dijital Pazarlama", "SEO", "Google Ads", "Sosyal Medya"]
  },
  {
    id: "marka-yenileme-projesi",
    title: "Marka Yenileme Projesi",
    category: "Marka Stratejisi",
    client: "RetailMax",
    year: "2024",
    description: "Köklü bir perakende markası için kapsamlı yeniden markalaşma projesi.",
    challenge: "Eski marka kimliği günümüz tüketicilerine hitap etmiyordu ve rakiplerden geri kalınmıştı.",
    solution: "Kapsamlı pazar araştırması sonucu yeni marka stratejisi, logo ve görsel kimlik tasarımı yaptık.",
    results: [
      "Modern ve çağdaş marka kimliği",
      "Hedef kitleyle %90 uyumluluk",
      "Mağaza trafiğinde %40 artış",
      "Sosyal medyada viral olma"
    ],
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBicmFuZCUyMHN0cmF0ZWd5JTIwbWVldGluZ3xlbnwxfHx8fDE3NjAzOTc1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBicmFuZCUyMHN0cmF0ZWd5JTIwbWVldGluZ3xlbnwxfHx8fDE3NjAzOTc1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    tags: ["Marka Stratejisi", "Logo Tasarımı", "Kurumsal Kimlik"]
  },
  {
    id: "e-ticaret-platformu",
    title: "E-Ticaret Platformu",
    category: "Web Geliştirme",
    client: "FashionHub",
    year: "2024",
    description: "Modern ve kullanıcı dostu e-ticaret platformu geliştirme projesi.",
    challenge: "Eski web sitesi yavaş, mobil uyumsuz ve kullanıcı deneyimi kötüydü.",
    solution: "React ve modern teknolojilerle hızlı, responsive ve kullanıcı dostu yeni platform geliştirdik.",
    results: [
      "Sayfa yükleme hızında %70 iyileşme",
      "Mobil dönüşümlerde %150 artış",
      "Sepet terk oranında %45 azalma",
      "Kullanıcı memnuniyetinde %85 artış"
    ],
    image: "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3ZWIlMjBkZXZlbG9wZXIlMjBjb2Rpbmd8ZW58MXx8fHwxNzYwMzk3NTI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3ZWIlMjBkZXZlbG9wZXIlMjBjb2Rpbmd8ZW58MXx8fHwxNzYwMzk3NTI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    tags: ["Web Geliştirme", "E-Ticaret", "React", "UX Design"]
  },
  {
    id: "viral-sosyal-medya-kampanyasi",
    title: "Viral Sosyal Medya Kampanyası",
    category: "Sosyal Medya",
    client: "FoodDelight",
    year: "2023",
    description: "Yeni ürün lansmanı için viral sosyal medya kampanyası.",
    challenge: "Yeni ürünün hedef kitleye ulaşması ve bilinirliğinin artırılması gerekiyordu.",
    solution: "Influencer işbirlikleri, yaratıcı içerikler ve hedefli sosyal medya reklamları ile kampanya yürüttük.",
    results: [
      "10M+ organik erişim",
      "500K+ etkileşim",
      "Ürün stokları 3 günde tükendi",
      "Marka takipçilerinde %400 artış"
    ],
    image: "https://images.unsplash.com/photo-1759393852314-59dc00faeed3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnQlMjBjcmVhdGlvbnxlbnwxfHx8fDE3NjAzOTc1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1759393852314-59dc00faeed3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnQlMjBjcmVhdGlvbnxlbnwxfHx8fDE3NjAzOTc1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    tags: ["Sosyal Medya", "Influencer Marketing", "Viral Kampanya"]
  },
  {
    id: "kurumsal-tanitim-filmi",
    title: "Kurumsal Tanıtım Filmi",
    category: "Video Prodüksiyon",
    client: "InnovateGroup",
    year: "2023",
    description: "Şirketin değerlerini ve vizyonunu anlatan etkileyici kurumsal film.",
    challenge: "Şirketin global pazardaki konumunu güçlendirmek ve yatırımcı ilgisi çekmek.",
    solution: "Profesyonel çekim ekibi ile yurtdışı lokasyonlarda kurumsal tanıtım filmi çektik.",
    results: [
      "Uluslararası festivallerde 3 ödül",
      "YouTube'da 2M+ görüntülenme",
      "Yatırımcı toplantılarında %95 beğeni",
      "B2B satışlarda önemli artış"
    ],
    image: "https://images.unsplash.com/photo-1759417501792-0d188b64b774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBzdHVkaW8lMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYwMzk3NTI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1759417501792-0d188b64b774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBzdHVkaW8lMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYwMzk3NTI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    tags: ["Video Prodüksiyon", "Kurumsal Film", "Tanıtım"]
  },
  {
    id: "mobil-uygulama-tasarimi",
    title: "Mobil Uygulama Tasarımı",
    category: "Kreatif Tasarım",
    client: "FitLife App",
    year: "2023",
    description: "Fitness uygulaması için modern ve kullanıcı dostu arayüz tasarımı.",
    challenge: "Karmaşık özellikleri basit ve anlaşılır bir arayüzde sunmak.",
    solution: "UX araştırması ve kullanıcı testleri ile sezgisel arayüz tasarladık.",
    results: [
      "App Store'da 4.8 yıldız",
      "100K+ aktif kullanıcı",
      "Kullanım süresinde %200 artış",
      "Günlük aktif kullanıcıda %150 artış"
    ],
    image: "https://images.unsplash.com/photo-1622513347372-25663cf6e309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwc3R1ZGlvJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MDM5NzUyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1622513347372-25663cf6e309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwc3R1ZGlvJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MDM5NzUyOHww&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    tags: ["UI/UX Design", "Mobil Uygulama", "Product Design"]
  }
];
