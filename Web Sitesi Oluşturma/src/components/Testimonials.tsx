import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    position: "CTO",
    company: "TechVenture A.Ş.",
    content: "SynthraLab'ın AI chatbot çözümü müşteri hizmetlerimizi tamamen dönüştürdü. %80 maliyet tasarrufu ve anlık yanıt süreleriyle müşteri memnuniyetimiz %40 arttı. Harika bir ekip!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
  },
  {
    name: "Zeynep Kaya",
    position: "Dijital Dönüşüm Müdürü",
    company: "E-Commerce Pro",
    content: "Otomasyon çözümleri sayesinde manuel veri girişinden kurtulduk. Ekibimiz artık stratejik işlere odaklanabiliyor. SynthraLab'ın teknoloji uzmanlığı etkileyici.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  },
  {
    name: "Can Demir",
    position: "CEO",
    company: "DataInsights Ltd.",
    content: "Veri analizi platformu işimizi oyun değiştiriciye çevirdi. Artık gerçek zamanlı kararlar alabiliyoruz. AI destekli tahminler satışlarımızı %150 artırdı!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
  },
  {
    name: "Elif Öztürk",
    position: "Pazarlama Direktörü",
    company: "Growth Startup",
    content: "AI içerik üretimi ile sosyal medya yönetimi çok daha kolay. Günde 30 dakika harcayarak profesyonel içerikler üretebiliyoruz. Zaman kazancı inanılmaz!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    name: "Mehmet Aksoy",
    position: "Operasyon Müdürü",
    company: "ManufactureTech",
    content: "Görüntü işleme AI'ımız kalite kontrol sürecimizi otomatikleştirdi. İnsan hatası %95 azaldı. Üretim hızımız ikiye katlandı. Teknoloji harika!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Referanslar
          </span>
          <h2 className="mb-4 text-4xl sm:text-5xl">
            Müşterilerimiz Ne Diyor
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            AI çözümlerimizle işlerini dönüştüren markalardan gerçek geri bildirimler
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="h-full border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      {/* Quote Icon with Gradient */}
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Quote className="text-white" size={24} />
                      </div>
                      
                      <p className="text-muted-foreground mb-6 min-h-[120px] leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                          />
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-card"></div>
                        </div>
                        <div>
                          <h4 className="text-foreground font-semibold">{testimonial.name}</h4>
                          <p className="text-muted-foreground text-sm">
                            {testimonial.position}
                          </p>
                          <p className="text-primary text-sm font-medium">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="text-yellow-500 fill-yellow-500" size={16} />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
