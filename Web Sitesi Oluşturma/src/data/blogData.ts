export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
}

export const blogCategories = ["Tümü", "Dijital Pazarlama", "Tasarım", "Sosyal Medya", "Teknoloji", "Trendler"];

export const blogData: BlogPost[] = [
  {
    id: "dijital-pazarlama-trendleri-2025",
    title: "2025'te Dijital Pazarlama Trendleri",
    excerpt: "Gelecek yılın dijital pazarlama dünyasını şekillendirecek en önemli trendler ve markaların bu değişime nasıl hazırlanması gerektiği.",
    content: `
# 2025'te Dijital Pazarlama Trendleri

Dijital pazarlama dünyası hızla değişiyor. 2025 yılında markaların öne çıkması için takip etmesi gereken en önemli trendleri derledik.

## 1. Yapay Zeka Destekli Kişiselleştirme

Yapay zeka, artık dijital pazarlamanın ayrılmaz bir parçası. Müşterilere kişiselleştirilmiş deneyimler sunmak için AI kullanımı katlanarak artıyor.

## 2. Video İçerik Hakimiyeti

Video içerik, özellikle kısa format videolar, sosyal medyada en çok etkileşim alan içerik türü olmaya devam ediyor. TikTok ve Instagram Reels bu trendin öncüsü.

## 3. Sesli Arama Optimizasyonu

Sesli asistanların yaygınlaşmasıyla birlikte, sesli arama için optimize edilmiş içerikler giderek önem kazanıyor.

## 4. Sürdürülebilirlik ve Sosyal Sorumluluk

Tüketiciler, markaların değerlerini ve topluma katkılarını önemsemeye devam ediyor. Otantik sosyal sorumluluk kampanyaları markayı farklılaştırıyor.

## Sonuç

Bu trendleri takip eden ve stratejilerine entegre eden markalar, 2025'te rakiplerinin önünde olacak.
    `,
    author: {
      name: "Ayşe Yılmaz",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      role: "Dijital Strateji Uzmanı"
    },
    date: "15 Aralık 2024",
    readTime: "5 dk",
    category: "Dijital Pazarlama",
    tags: ["Dijital Pazarlama", "Trendler", "AI", "Video"],
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NjAzMjAyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "sosyal-medyada-basari-rehberi",
    title: "Sosyal Medyada Başarı için 10 Altın Kural",
    excerpt: "Sosyal medya stratejinizi güçlendirecek ve takipçi etkileşiminizi artıracak pratik ipuçları.",
    content: `
# Sosyal Medyada Başarı için 10 Altın Kural

Sosyal medyada başarılı olmak için takip edilmesi gereken temel kurallar ve stratejiler.

## 1. Tutarlı Olun

Düzenli içerik paylaşımı, takipçilerinizle güçlü bir bağ kurmanın anahtarıdır.

## 2. Etkileşimi Önceliklendirin

Yorumlara yanıt verin, sorular sorun ve topluluğunuzla aktif olarak etkileşime geçin.

## 3. Görsel İçeriğe Yatırım Yapın

Kaliteli görseller ve videolar, sosyal medyada öne çıkmanın en etkili yollarından biridir.

## 4. Hikaye Anlatın

İnsanlar hikayelerle bağlantı kurar. Markanızın hikayesini otantik bir şekilde anlatın.

## 5. Analiz Edin ve Optimize Edin

Verilerinizi düzenli olarak analiz edin ve stratejinizi sürekli geliştirin.
    `,
    author: {
      name: "Mehmet Kaya",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      role: "Sosyal Medya Uzmanı"
    },
    date: "10 Aralık 2024",
    readTime: "4 dk",
    category: "Sosyal Medya",
    tags: ["Sosyal Medya", "Strategi", "İçerik", "Engagement"],
    image: "https://images.unsplash.com/photo-1703355685952-03ed19f70f51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBtZWV0aW5nJTIwcm9vbXxlbnwxfHx8fDE3NjAzMzc0Njd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "minimalist-tasarim-trendi",
    title: "Minimalist Tasarımın Gücü",
    excerpt: "Daha az, nasıl daha çok olabiliyor? Modern tasarımda minimalizmin önemi ve uygulama örnekleri.",
    content: `
# Minimalist Tasarımın Gücü

Minimalist tasarım, sadece bir estetik tercihi değil, aynı zamanda güçlü bir iletişim stratejisidir.

## Minimalizm Neden Etkili?

Basit ve temiz tasarımlar, mesajınızın daha net iletilmesini sağlar. Kullanıcılar karmaşık görseller yerine anlaşılır içerikleri tercih eder.

## Minimalist Tasarımın Temel İlkeleri

1. **Boşluk Kullanımı**: Beyaz (negatif) alan, tasarımınızın nefes almasını sağlar
2. **Sınırlı Renk Paleti**: Az sayıda renk kullanımı tutarlılık yaratır
3. **Basit Tipografi**: Okunabilir ve temiz fontlar
4. **Fonksiyonellik**: Her element bir amaca hizmet etmelidir

## Başarılı Örnekler

Apple, Tesla ve birçok modern marka minimalist tasarımla güçlü marka kimlikleri oluşturdu.
    `,
    author: {
      name: "Zeynep Demir",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      role: "Baş Tasarımcı"
    },
    date: "5 Aralık 2024",
    readTime: "6 dk",
    category: "Tasarım",
    tags: ["Tasarım", "Minimalizm", "UX", "UI"],
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2MDMyMDIyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "seo-temelleri",
    title: "SEO'nun Temelleri: Başlangıç Rehberi",
    excerpt: "Arama motoru optimizasyonuna yeni başlayanlar için kapsamlı bir rehber. Temel kavramlar ve uygulamalar.",
    content: `
# SEO'nun Temelleri: Başlangıç Rehberi

SEO, dijital başarının temel taşlarından biridir. Bu rehberde SEO'nun temellerini öğreneceksiniz.

## SEO Nedir?

SEO (Search Engine Optimization), web sitenizin arama motorlarında daha üst sıralarda çıkmasını sağlayan optimizasyon çalışmalarıdır.

## Temel SEO Faktörleri

### 1. Anahtar Kelime Araştırması
Hedef kitlenizin ne aradığını anlamak kritik önem taşır.

### 2. İçerik Kalitesi
Değerli, orijinal ve kullanıcı odaklı içerikler oluşturun.

### 3. Teknik SEO
Site hızı, mobil uyumluluk ve yapısal veriler önemlidir.

### 4. Backlink Profili
Kaliteli sitelerden gelen linkler otoritenizi artırır.

## Başlangıç İçin İpuçları

- Google Search Console kullanın
- Sayfa hızını optimize edin
- Meta açıklamalarını özenle yazın
- İç linkleme stratejisi oluşturun
    `,
    author: {
      name: "Can Öztürk",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      role: "SEO Uzmanı"
    },
    date: "1 Aralık 2024",
    readTime: "7 dk",
    category: "Dijital Pazarlama",
    tags: ["SEO", "Dijital Pazarlama", "Google", "İçerik"],
    image: "https://images.unsplash.com/photo-1542627088-6603b66e5c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0aGlua2luZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc2MDI3ODcwNXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "influencer-pazarlama-stratejileri",
    title: "Influencer Pazarlama: Doğru Stratejiler",
    excerpt: "Influencer pazarlama kampanyalarınızı başarılı kılacak stratejiler ve dikkat edilmesi gereken noktalar.",
    content: `
# Influencer Pazarlama: Doğru Stratejiler

Influencer pazarlama, doğru yapıldığında markanız için güçlü bir büyüme kanalı olabilir.

## Doğru Influencer Seçimi

Takipçi sayısından çok etkileşim oranı ve hedef kitle uyumu önemlidir.

### Mikro vs Makro Influencerlar

- **Mikro Influencerlar**: Daha niş ve engaged kitle
- **Makro Influencerlar**: Geniş erişim, marka bilinirliği

## Kampanya Planlaması

1. Hedeflerinizi netleştirin
2. Bütçenizi belirleyin
3. İçerik stratejisi oluşturun
4. Performansı ölçün

## Otantiklik Çok Önemli

Influencerların markanızı gerçekten sevmesi ve kullanması, kampanyanın başarısını doğrudan etkiler.

## ROI Ölçümü

- Engagement metrikleri
- Trafik artışı
- Satış dönüşümleri
- Marka bahsetme sayısı
    `,
    author: {
      name: "Ayşe Yılmaz",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      role: "Dijital Strateji Uzmanı"
    },
    date: "25 Kasım 2024",
    readTime: "5 dk",
    category: "Sosyal Medya",
    tags: ["Influencer Marketing", "Sosyal Medya", "Strateji"],
    image: "https://images.unsplash.com/photo-1668453814676-c8093305fae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeSUyMHN0dWRpb3xlbnwxfHx8fDE3NjAzMzYwNDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "web-tasarim-hatalari",
    title: "Web Tasarımında Yapılan 7 Yaygın Hata",
    excerpt: "Web sitenizi ziyaretçilerinizi kaçıran tasarım hatalarından arındırın. İşte en sık yapılan hatalar ve çözümleri.",
    content: `
# Web Tasarımında Yapılan 7 Yaygın Hata

Web siteniz markanızın dijital vitrinidir. Bu yaygın hatalardan kaçının.

## 1. Yavaş Yükleme Hızı

Kullanıcılar 3 saniyeden fazla beklemez. Sayfanızı optimize edin.

## 2. Mobil Uyumsuzluk

Trafiğin %60'ı mobil cihazlardan gelir. Responsive tasarım şart.

## 3. Karmaşık Navigasyon

Kullanıcılar istediklerini 3 tıklamada bulabilmeli.

## 4. Zayıf CTA'lar

Call-to-action butonlarınız net, görünür ve ikna edici olmalı.

## 5. Kötü Tipografi

Okunabilir fontlar ve uygun boyutlar kullanın.

## 6. Fazla Bilgi Yükü

Sayfalarınızı gereksiz içerikle doldurmayın.

## 7. Erişilebilirlik Sorunları

Herkes sitenizi rahatça kullanabilmeli.

## Sonuç

Bu hataları düzelterek kullanıcı deneyimini önemli ölçüde iyileştirebilirsiniz.
    `,
    author: {
      name: "Zeynep Demir",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      role: "Baş Tasarımcı"
    },
    date: "20 Kasım 2024",
    readTime: "6 dk",
    category: "Tasarım",
    tags: ["Web Tasarım", "UX", "Best Practices"],
    image: "https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2MDM5NzUyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];
