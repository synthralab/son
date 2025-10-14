import { Link } from "react-router-dom";
import { 
  MessageSquare, 
  Zap, 
  BarChart3, 
  Smartphone, 
  PenTool, 
  Camera,
  ArrowRight 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import SEO from "../components/SEO";
import { useCMS } from "../contexts/CMSContext";
import { motion } from "motion/react";

const iconMap: Record<string, any> = {
  MessageSquare,
  Zap,
  BarChart3,
  Smartphone,
  PenTool,
  Camera
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ServicesPage() {
  const { servicesData } = useCMS();

  return (
    <>
      <SEO
        title="Hizmetlerimiz - SynthraLab Digital & AI Studio"
        description="AI Chatbot, İş Süreçleri Otomasyonu, Veri Analizi, Web & Mobil Uygulama, AI İçerik Üretimi ve Görüntü İşleme hizmetleri."
        keywords="AI chatbot, otomasyon, veri analizi, web geliştirme, AI içerik, görüntü işleme"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-white mb-6 text-4xl sm:text-5xl lg:text-6xl">
              AI Destekli Dijital Çözümler
            </h1>
            <p className="text-white/90 text-lg sm:text-xl">
              Yapay zeka teknolojileriyle işinizi dönüştürüyor, 
              süreçlerinizi otomatikleştiriyor ve verilerinizi değere çeviriyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {servicesData.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              
              return (
                <motion.div key={service.id} variants={item}>
                  <Link to={`/hizmetler/${service.id}`}>
                    <Card className="h-full border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 group bg-card/80 backdrop-blur-sm">
                      <CardHeader>
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          {IconComponent && <IconComponent className="text-white" size={24} />}
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="leading-relaxed mb-4">
                          {service.shortDescription}
                        </CardDescription>
                        
                        {/* Technologies */}
                        {service.technologies && service.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {service.technologies.slice(0, 3).map((tech, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-16"
          >
            <h2 className="mb-4">Projeniz için özel çözüm mü arıyorsunuz?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Uzman ekibimiz, işinize özel AI ve otomasyon çözümleri geliştirmek için hazır.
            </p>
            <Button asChild size="lg" className="shadow-lg shadow-primary/20">
              <Link to="/iletisim">
                Ücretsiz Danışmanlık Alın
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
