export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
  technologies?: string[];
}

export const servicesData: Service[] = [
  {
    id: "ai-chatbot-gelistirme",
    title: "AI Chatbot Geliştirme",
    shortDescription: "Müşteri hizmetlerinizi 7/24 otomatikleştiren, akıllı ve öğrenen chatbot çözümleri.",
    fullDescription: "Yapay zeka destekli chatbot'larımız, müşterilerinizle doğal dil işleme teknolojisiyle iletişim kurar. WhatsApp, web sitesi ve sosyal medya entegrasyonuyla kesintisiz destek sağlar.",
    icon: "MessageSquare",
    features: [
      "Doğal dil işleme (NLP) ile anlama",
      "Çoklu dil desteği",
      "WhatsApp Business API entegrasyonu",
      "Web sitesi ve sosyal medya entegrasyonu",
      "Özel veri seti eğitimi",
      "Gerçek zamanlı öğrenme",
      "CRM entegrasyonu",
      "Sentiment analizi"
    ],
    benefits: [
      "%80'e kadar destek maliyeti azaltma",
      "7/24 kesintisiz müşteri hizmeti",
      "Anında yanıt süreleri",
      "İnsan ekibinizin yük azaltma",
      "Müşteri memnuniyeti artışı",
      "Veri toplama ve analiz"
    ],
    technologies: ["OpenAI GPT-4", "LangChain", "Python", "Node.js", "WebSocket"]
  },
  {
    id: "otomasyon-cozumleri",
    title: "İş Süreçleri Otomasyonu",
    shortDescription: "Manuel işlerinizi otomatikleştirerek zaman ve maliyet tasarrufu sağlayan akıllı sistemler.",
    fullDescription: "RPA (Robotic Process Automation) ve AI teknolojileriyle tekrar eden işlemleri otomatikleştiriyoruz. Veri girişi, rapor oluşturma, fatura işlemleri ve daha fazlası.",
    icon: "Zap",
    features: [
      "RPA (Robotic Process Automation)",
      "Veri girişi otomasyonu",
      "E-posta otomasyonu",
      "Rapor oluşturma otomasyonu",
      "Fatura ve muhasebe otomasyonu",
      "API entegrasyonları",
      "Workflow yönetimi",
      "Hata bildirimi ve loglama"
    ],
    benefits: [
      "%90'a kadar zaman tasarrufu",
      "İnsan hatasını minimize etme",
      "Maliyet düşürme",
      "Çalışan verimliliği artışı",
      "7/24 kesintisiz çalışma",
      "Ölçeklenebilir süreçler"
    ],
    technologies: ["Python", "UiPath", "Power Automate", "Zapier", "n8n", "Make"]
  },
  {
    id: "veri-analizi-ai",
    title: "Veri Analizi & AI Raporlama",
    shortDescription: "Verilerinizi anlamlı içgörülere dönüştüren, AI destekli analiz ve görselleştirme platformları.",
    fullDescription: "Büyük veri setlerinizi analiz eder, trendleri belirler ve geleceğe yönelik tahminler yapar. Interactive dashboard'lar ve otomatik raporlarla karar alma sürecinizi hızlandırıyoruz.",
    icon: "BarChart3",
    features: [
      "Büyük veri (Big Data) analizi",
      "Predictive analytics (Tahminsel analiz)",
      "Real-time dashboard'lar",
      "Otomatik rapor oluşturma",
      "Veri görselleştirme",
      "Anomali tespiti",
      "Sentiment analysis",
      "A/B testing analizi"
    ],
    benefits: [
      "Veri odaklı karar verme",
      "Gelecek trendlerini tahmin etme",
      "Müşteri davranış analizi",
      "Performans optimizasyonu",
      "Risk azaltma",
      "ROI artışı"
    ],
    technologies: ["Python", "TensorFlow", "Power BI", "Tableau", "Apache Spark", "PostgreSQL"]
  },
  {
    id: "web-mobil-uygulama",
    title: "Web & Mobil Uygulama Geliştirme",
    shortDescription: "Modern, hızlı ve kullanıcı dostu web siteleri ve mobil uygulamalar.",
    fullDescription: "React, Next.js ve React Native kullanarak performanslı ve ölçeklenebilir uygulamalar geliştiriyoruz. SEO optimizasyonu, responsive tasarım ve PWA desteği.",
    icon: "Smartphone",
    features: [
      "Modern web uygulamaları (React, Next.js)",
      "Mobil uygulamalar (iOS & Android)",
      "Progressive Web Apps (PWA)",
      "E-ticaret platformları",
      "Admin panelleri",
      "API geliştirme",
      "SEO optimizasyonu",
      "Cloud hosting"
    ],
    benefits: [
      "Hızlı yükleme süreleri",
      "Mobile-first tasarım",
      "Ölçeklenebilir mimari",
      "Güvenli ve stabil",
      "Kolay yönetim paneli",
      "7/24 teknik destek"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"]
  },
  {
    id: "ai-icerik-uretimi",
    title: "AI İçerik Üretimi",
    shortDescription: "GPT-4 ve DALL-E kullanarak otomatik metin, görsel ve video içerik üretimi.",
    fullDescription: "Yapay zeka ile blog yazıları, sosyal medya içerikleri, ürün açıklamaları ve görsel materyaller oluşturuyoruz. Marka sesinizi koruyarak hızlı ve kaliteli içerik üretimi.",
    icon: "PenTool",
    features: [
      "AI ile blog yazısı oluşturma",
      "Sosyal medya içerik üretimi",
      "Ürün açıklaması yazımı",
      "SEO uyumlu içerik",
      "Görsel oluşturma (DALL-E, Midjourney)",
      "Video scriptleri",
      "E-posta kampanya içerikleri",
      "Çoklu dil desteği"
    ],
    benefits: [
      "%10x hızlı içerik üretimi",
      "Tutarlı marka sesi",
      "SEO optimizasyonu",
      "Maliyet tasarrufu",
      "Ölçeklenebilir içerik",
      "Yaratıcı çeşitlilik"
    ],
    technologies: ["OpenAI GPT-4", "DALL-E 3", "Midjourney", "Stable Diffusion", "LangChain"]
  },
  {
    id: "ai-goruntu-isleme",
    title: "AI Görüntü & Video İşleme",
    shortDescription: "Yapay zeka ile görüntü analizi, nesne tespiti, yüz tanıma ve video işleme çözümleri.",
    fullDescription: "Computer vision teknolojileriyle görüntü ve video analizleri yapıyor, otomatik etiketleme, kalite kontrol ve güvenlik sistemleri geliştiriyoruz.",
    icon: "Camera",
    features: [
      "Nesne tespiti (Object detection)",
      "Yüz tanıma sistemleri",
      "OCR (Optik karakter tanıma)",
      "Görüntü kalite kontrolü",
      "Video analizi",
      "Otomatik etiketleme",
      "Background removal",
      "Image enhancement"
    ],
    benefits: [
      "Otomatik kalite kontrol",
      "Güvenlik artışı",
      "İşgücü tasarrufu",
      "Hata oranı azaltma",
      "Hızlı işlem süreleri",
      "Ölçeklenebilir sistemler"
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenCV", "YOLO", "MediaPipe", "Python"]
  }
];
