export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqCategories = ["Genel", "Hizmetler", "Fiyatlandırma", "Süreç", "Teknik"];

export const faqData: FAQ[] = [
  {
    id: "1",
    question: "CreativeHub hangi hizmetleri sunuyor?",
    answer: "Marka stratejisi, kreatif tasarım, dijital pazarlama, sosyal medya yönetimi, web geliştirme ve video prodüksiyon alanlarında kapsamlı hizmetler sunuyoruz. Her proje için özel çözümler üretiyoruz.",
    category: "Genel"
  },
  {
    id: "2",
    question: "Proje süresi ne kadar?",
    answer: "Proje süresi, projenin kapsamına göre değişiklik gösterir. Logo tasarımı gibi küçük projeler 1-2 hafta sürerken, kapsamlı web geliştirme projeleri 2-3 ay sürebilir. İlk görüşmede size detaylı bir zaman çizelgesi sunuyoruz.",
    category: "Süreç"
  },
  {
    id: "3",
    question: "Fiyatlandırma nasıl çalışıyor?",
    answer: "Her proje benzersiz olduğu için standart fiyat listemiz yoktur. Projenizin kapsamını dinledikten sonra size özel bir teklif hazırlıyoruz. Ücretsiz danışma görüşmesi için bizimle iletişime geçebilirsiniz.",
    category: "Fiyatlandırma"
  },
  {
    id: "4",
    question: "Revizyonlar dahil mi?",
    answer: "Evet, tüm paketlerimizde belirli sayıda revizyon hakkı bulunur. Standart projelerimizde 2-3 revizyon hakkı sunuyoruz. Ek revizyonlar için makul ücretler talep edilir.",
    category: "Hizmetler"
  },
  {
    id: "5",
    question: "Küçük işletmelerle de çalışıyor musunuz?",
    answer: "Kesinlikle! Startup'lardan büyük şirketlere kadar her ölçekte işletmeyle çalışıyoruz. Bütçenize uygun çözümler üretmek için elimizden geleni yapıyoruz.",
    category: "Genel"
  },
  {
    id: "6",
    question: "Hangi sektörlerde deneyiminiz var?",
    answer: "E-ticaret, teknoloji, finans, sağlık, eğitim, perakende ve daha birçok sektörde deneyimimiz var. Son 10 yılda 150'den fazla farklı sektörden müşteriyle çalıştık.",
    category: "Genel"
  },
  {
    id: "7",
    question: "Dijital pazarlama hizmetleriniz neleri kapsıyor?",
    answer: "SEO, Google Ads, sosyal medya reklamları, e-posta pazarlama, içerik pazarlama ve analytics hizmetlerini kapsıyoruz. Size özel bir dijital pazarlama stratejisi geliştiriyoruz.",
    category: "Hizmetler"
  },
  {
    id: "8",
    question: "Web sitesi teslim sonrası destek sağlıyor musunuz?",
    answer: "Evet, tüm web projelerimizde 1 aylık ücretsiz destek süresi sunuyoruz. Sonrasında aylık bakım paketlerimizden birini tercih edebilir veya talep bazında destek alabilirsiniz.",
    category: "Teknik"
  },
  {
    id: "9",
    question: "Aylık paket hizmetleriniz var mı?",
    answer: "Evet, özellikle sosyal medya yönetimi ve dijital pazarlama hizmetlerimizde aylık paket seçeneklerimiz bulunuyor. Detaylar için fiyatlandırma sayfamızı ziyaret edebilirsiniz.",
    category: "Fiyatlandırma"
  },
  {
    id: "10",
    question: "Proje başlamadan önce ne yapmalıyım?",
    answer: "İlk olarak iletişim formumuzu doldurun veya bizi arayın. Ücretsiz danışma toplantısında projenizi detaylı şekilde konuşur, hedeflerinizi anlar ve size en uygun çözümü sunarız. Teklifi onayladıktan sonra çalışmaya başlarız.",
    category: "Süreç"
  },
  {
    id: "11",
    question: "Sosyal medya yönetiminde hangi platformları kapsıyorsunuz?",
    answer: "Instagram, Facebook, Twitter, LinkedIn, TikTok ve YouTube gibi tüm popüler platformlarda hizmet veriyoruz. Markanıza ve hedef kitlenize göre en uygun platformları belirliyoruz.",
    category: "Hizmetler"
  },
  {
    id: "12",
    question: "Video prodüksiyon hizmetleriniz neleri içeriyor?",
    answer: "Tanıtım filmleri, reklam çekimleri, sosyal medya videoları, animasyon, kurumsal videolar ve ürün çekimlerini kapsıyoruz. Senaryodan son montaja kadar tüm süreci yönetiyoruz.",
    category: "Hizmetler"
  },
  {
    id: "13",
    question: "Hosting ve domain hizmeti veriyor musunuz?",
    answer: "Web geliştirme projelerimizde hosting ve domain satın alma konusunda size yardımcı oluyoruz ve öneriler sunuyoruz. İsteğe bağlı olarak yönetimli hosting hizmeti de sağlıyoruz.",
    category: "Teknik"
  },
  {
    id: "14",
    question: "Sözleşme süreleri nasıl işliyor?",
    answer: "Proje bazlı işlerde sözleşme proje tamamlanana kadar geçerlidir. Aylık paket hizmetlerimizde ise genellikle 6-12 aylık sözleşmeler yapıyoruz. Esneklik sağlayabiliyoruz.",
    category: "Süreç"
  },
  {
    id: "15",
    question: "İptal politikanız nedir?",
    answer: "Proje başlangıcından sonraki ilk 2 hafta içinde yapılan iptallerde %50 iade sağlanır. İşin belirli bir aşamasına gelindikten sonra yapılan çalışmalar ücretlendirilir. Detaylar sözleşmede belirtilir.",
    category: "Fiyatlandırma"
  }
];
