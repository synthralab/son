import { Link } from "react-router-dom";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { jobPositions } from "../data/careerData";
import { motion } from "motion/react";
import SEO from "../components/SEO";

const benefits = [
  {
    title: "Hibrit Çalışma",
    description: "Ofiste ve uzaktan çalışma seçenekleri"
  },
  {
    title: "Eğitim Desteği",
    description: "Kişisel ve profesyonel gelişim fırsatları"
  },
  {
    title: "Sağlık Sigortası",
    description: "Özel sağlık sigortası paketi"
  },
  {
    title: "Esnek Saatler",
    description: "İş-yaşam dengesini destekliyoruz"
  },
  {
    title: "Genç Ekip",
    description: "Dinamik ve yaratıcı çalışma ortamı"
  },
  {
    title: "Performans Primi",
    description: "Başarıya göre ek ödüller"
  }
];

export default function CareerPage() {
  const activeJobs = jobPositions.filter(job => job.isActive);

  return (
    <>
      <SEO
        title="Kariyer - CreativeHub'da Çalış"
        description="CreativeHub ekibine katılın. Açık pozisyonlar, çalışan hakları ve kariyer fırsatları."
        keywords="iş ilanı, kariyer, reklam ajansı iş, grafik tasarımcı iş, dijital pazarlama iş"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="mb-6">Ekibimize Katılın</h1>
            <p className="text-muted-foreground text-lg">
              Yaratıcı, tutkulu ve yenilikçi ekibimizin bir parçası olun. 
              CreativeHub'da kariyer fırsatlarını keşfedin ve yeteneklerinizi geliştirin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Neden CreativeHub?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Çalışanlarımızın mutluluğu ve gelişimi bizim için öncelik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Açık Pozisyonlar</h2>
            <p className="text-muted-foreground">
              {activeJobs.length} açık pozisyon bulunmaktadır
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {activeJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary">{job.department}</Badge>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>
                    <CardTitle>{job.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {job.experience} deneyim
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {job.description}
                    </p>

                    <Button asChild className="w-full">
                      <Link to={`/kariyer/${job.id}`}>
                        Detayları Gör
                        <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spontaneous Application */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Briefcase className="mx-auto mb-6 text-primary" size={48} />
          <h2 className="mb-4">Aradığınız Pozisyonu Bulamadınız mı?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Yetenekli ve tutkulu insanlarla tanışmayı her zaman isteriz. 
            Özgeçmişinizi gönderin, uygun bir pozisyon açıldığında size ulaşalım.
          </p>
          <Button asChild size="lg">
            <Link to="/iletisim">Spontan Başvuru Yap</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
