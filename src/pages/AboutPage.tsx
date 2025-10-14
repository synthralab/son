import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import Stats from "../components/Stats";
import CTA from "../components/CTA";
import SEO from "../components/SEO";
import { Card, CardContent } from "../components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";
import { motion } from "motion/react";

const values = [
  {
    icon: Target,
    title: "Hedef Odaklı",
    description: "Müşterilerimizin hedeflerine ulaşması için stratejik ve ölçülebilir çözümler üretiyoruz."
  },
  {
    icon: Eye,
    title: "Yaratıcı Vizyon",
    description: "Her projede özgün ve yenilikçi fikirlerle markaları farklılaştırıyoruz."
  },
  {
    icon: Award,
    title: "Mükemmellik",
    description: "İşimizin her aşamasında en yüksek kalite standartlarını koruyoruz."
  },
  {
    icon: Users,
    title: "İşbirliği",
    description: "Müşterilerimizle güçlü ortaklıklar kurarak birlikte başarıya ulaşıyoruz."
  }
];

const team = [
  {
    name: "Ayşe Yılmaz",
    position: "Kurucu & CEO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  },
  {
    name: "Mehmet Kaya",
    position: "Kreatif Direktör",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  },
  {
    name: "Zeynep Demir",
    position: "Dijital Strateji Direktörü",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
  },
  {
    name: "Can Öztürk",
    position: "Teknik Direktör",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
  }
];

export default function AboutPage() {
  return (
    <>
      <SEO
        title="Hakkımızda - CreativeHub Reklam Ajansı"
        description="10 yılı aşkın deneyimimizle markalara yaratıcı çözümler sunuyoruz. Ekibimiz, değerlerimiz ve vizyonumuz hakkında bilgi edinin."
        keywords="reklam ajansı istanbul, yaratıcı ajans, CreativeHub hakkında, reklam ajansı ekip"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mb-6">Hakkımızda</h1>
              <p className="text-muted-foreground text-lg mb-4">
                CreativeHub, 2014 yılında kurulan ve markalara yaratıcı çözümler sunan 
                lider bir reklam ajansıdır. 10 yılı aşkın deneyimimizle, yerel ve global 
                markaların dijital dönüşümüne öncülük ediyoruz.
              </p>
              <p className="text-muted-foreground text-lg mb-4">
                Tutkulu ekibimiz, stratejik düşünce, yaratıcı mükemmellik ve teknolojik 
                yetkinliği bir araya getirerek müşterilerimizin hedeflerine ulaşmasını sağlıyor.
              </p>
              <p className="text-muted-foreground text-lg">
                Vizyonumuz, her markanın benzersiz hikayesini en etkili şekilde anlatmak 
                ve hedef kitleleriyle kalıcı bağlar kurmalarına yardımcı olmaktır.
              </p>
            </motion.div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1702468049239-49fd1cf99d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwdGVhbSUyMHdvcmtpbmd8ZW58MXx8fHwxNzYwMzczNDM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="CreativeHub Ekibi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Değerlerimiz</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              İş yapış şeklimizi ve kararlarımızı yönlendiren temel değerlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="mb-4">Misyonumuz</h2>
                <p className="text-muted-foreground">
                  Markaların dijital dünyada güçlü, farklı ve akılda kalıcı olmasını sağlamak. 
                  Yaratıcı stratejiler ve yenilikçi çözümlerle müşterilerimizin işlerini büyütmek 
                  ve sürdürülebilir başarılar elde etmelerini sağlamak.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h2 className="mb-4">Vizyonumuz</h2>
                <p className="text-muted-foreground">
                  Türkiye'nin en yenilikçi ve etkileyici reklam ajansı olmak. Global pazarda 
                  tanınan, yerel ve uluslararası markaların tercih ettiği, sektörde standartları 
                  belirleyen bir ajans haline gelmek.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Ekibimiz</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Alanında uzman, tutkulu ve yaratıcı profesyonellerden oluşan ekibimiz
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mb-1">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
