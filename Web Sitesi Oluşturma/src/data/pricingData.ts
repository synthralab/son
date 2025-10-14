export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  highlighted: boolean;
  ctaText: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Başlangıç",
    description: "Küçük işletmeler ve yeni başlayanlar için ideal",
    price: "15.000₺",
    period: "tek seferlik",
    features: [
      "Logo Tasarımı",
      "Temel Kurumsal Kimlik",
      "Kartvizit Tasarımı",
      "2 Revizyon Hakkı",
      "Dosya Teslimi (AI, PDF, PNG)",
      "30 Gün Destek"
    ],
    highlighted: false,
    ctaText: "Başlayın"
  },
  {
    id: "professional",
    name: "Profesyonel",
    description: "Büyüyen işletmeler için kapsamlı paket",
    price: "35.000₺",
    period: "tek seferlik",
    features: [
      "Kapsamlı Marka Kimliği",
      "Logo ve Kurumsal Kimlik",
      "Kartvizit, Antetli Kağıt, Zarf",
      "Sosyal Medya Şablonları",
      "Marka Rehberi",
      "5 Revizyon Hakkı",
      "3 Ay Destek",
      "Öncelikli İletişim"
    ],
    highlighted: true,
    ctaText: "Popüler Seçim"
  },
  {
    id: "enterprise",
    name: "Kurumsal",
    description: "Büyük şirketler için özel çözümler",
    price: "Özel Fiyat",
    period: "projeye özel",
    features: [
      "360° Marka Stratejisi",
      "Tüm Kurumsal Kimlik Elemanları",
      "Web Sitesi Tasarımı",
      "Ambalaj Tasarımı",
      "Sınırsız Revizyon",
      "Özel Danışmanlık",
      "1 Yıl Destek",
      "Öncelikli Proje Yönetimi"
    ],
    highlighted: false,
    ctaText: "İletişime Geçin"
  }
];

export const digitalMarketingPlans: PricingPlan[] = [
  {
    id: "basic-digital",
    name: "Temel",
    description: "Dijital varlığınızı başlatmak için",
    price: "8.000₺",
    period: "/ay",
    features: [
      "SEO Optimizasyonu",
      "Google My Business Yönetimi",
      "Aylık Performans Raporu",
      "Temel Anahtar Kelime Araştırması",
      "On-Page SEO",
      "E-posta Desteği"
    ],
    highlighted: false,
    ctaText: "Başlayın"
  },
  {
    id: "growth-digital",
    name: "Büyüme",
    description: "Hızlı büyüme için tam paket",
    price: "18.000₺",
    period: "/ay",
    features: [
      "SEO + Google Ads",
      "Sosyal Medya Reklamları",
      "İçerik Pazarlama",
      "E-posta Pazarlama",
      "Detaylı Analytics",
      "Haftalık Raporlar",
      "Strateji Toplantıları",
      "Öncelikli Destek"
    ],
    highlighted: true,
    ctaText: "En Popüler"
  },
  {
    id: "premium-digital",
    name: "Premium",
    description: "Sınırsız büyüme için",
    price: "35.000₺",
    period: "/ay",
    features: [
      "Tüm Dijital Kanallar",
      "Özel Kampanya Stratejileri",
      "Influencer Marketing",
      "Video Reklam Prodüksiyonu",
      "A/B Testing",
      "Gerçek Zamanlı Dashboard",
      "Haftalık Strateji Görüşmeleri",
      "7/24 Destek"
    ],
    highlighted: false,
    ctaText: "İletişime Geçin"
  }
];

export const socialMediaPlans: PricingPlan[] = [
  {
    id: "basic-social",
    name: "Starter",
    description: "Tek platform yönetimi",
    price: "5.000₺",
    period: "/ay",
    features: [
      "1 Platform (Instagram veya Facebook)",
      "12 Gönderi/Ay",
      "İçerik Planlaması",
      "Temel Grafik Tasarım",
      "Aylık Rapor",
      "E-posta Desteği"
    ],
    highlighted: false,
    ctaText: "Başlayın"
  },
  {
    id: "pro-social",
    name: "Professional",
    description: "Çoklu platform yönetimi",
    price: "12.000₺",
    period: "/ay",
    features: [
      "3 Platform Yönetimi",
      "20 Gönderi/Ay",
      "Story ve Reels",
      "İleri Seviye Tasarım",
      "Topluluk Yönetimi",
      "Hashtag Stratejisi",
      "Haftalık Rapor",
      "Öncelikli Destek"
    ],
    highlighted: true,
    ctaText: "Popüler"
  },
  {
    id: "agency-social",
    name: "Kurumsal",
    description: "Tam hizmet sosyal medya",
    price: "25.000₺",
    period: "/ay",
    features: [
      "Tüm Platformlar",
      "Sınırsız Gönderi",
      "Video İçerik Üretimi",
      "Influencer İşbirlikleri",
      "Sosyal Medya Reklamları",
      "Crisis Management",
      "Gerçek Zamanlı Analiz",
      "7/24 Destek"
    ],
    highlighted: false,
    ctaText: "İletişime Geçin"
  }
];
