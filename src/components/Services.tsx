import { Link } from "react-router-dom";
import { Lightbulb, Palette, TrendingUp, Video, Globe, Megaphone, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "motion/react";

const services = [
  {
    icon: Lightbulb,
    title: "Marka Stratejisi",
    description: "Markanızın kimliğini oluşturuyor ve hedef kitlenizle güçlü bir bağ kurmanıza yardımcı oluyoruz.",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: Palette,
    title: "Kreatif Tasarım",
    description: "Görsel iletişimde fark yaratan özgün ve etkileyici tasarım çözümleri sunuyoruz.",
    gradient: "from-pink-400 to-purple-500",
  },
  {
    icon: TrendingUp,
    title: "Dijital Pazarlama",
    description: "SEO, SEM ve sosyal medya stratejileriyle dijital varlığınızı güçlendiriyoruz.",
    gradient: "from-green-400 to-teal-500",
  },
  {
    icon: Video,
    title: "Video Prodüksiyon",
    description: "Hikayenizi en etkili şekilde anlatan profesyonel video içerikler üretiyoruz.",
    gradient: "from-red-400 to-pink-500",
  },
  {
    icon: Globe,
    title: "Web Geliştirme",
    description: "Modern, hızlı ve kullanıcı dostu web siteleri ve uygulamalar tasarlıyoruz.",
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    icon: Megaphone,
    title: "Sosyal Medya Yönetimi",
    description: "Sosyal medya hesaplarınızı profesyonelce yönetiyor ve etkileşim oranlarınızı artırıyoruz.",
    gradient: "from-purple-400 to-indigo-500",
  }
];

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

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Hizmetlerimiz
          </span>
          <h2 className="mb-4 text-4xl sm:text-5xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Size Nasıl Yardımcı Olabiliriz?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Markanızın başarısı için ihtiyaç duyduğunuz tüm yaratıcı ve stratejik hizmetleri sunuyoruz.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="border-border hover:border-primary/50 transition-all duration-300 h-full group hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="text-white" size={24} />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="shadow-lg shadow-primary/20">
            <Link to="/hizmetler">
              Tüm Hizmetleri Görüntüle
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
