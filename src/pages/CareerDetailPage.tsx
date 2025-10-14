import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Briefcase, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { jobPositions } from "../data/careerData";
import { motion } from "motion/react";
import SEO from "../components/SEO";

export default function CareerDetailPage() {
  const { id } = useParams<{ id: string }>();
  const job = jobPositions.find(j => j.id === id);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4">Pozisyon Bulunamadı</h2>
          <Button asChild>
            <Link to="/kariyer">Kariyer Sayfasına Dön</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${job.title} - CreativeHub Kariyer`}
        description={job.description}
        keywords={`${job.title} iş ilanı, ${job.department} kariyer, ${job.location}`}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/kariyer">
              <ArrowLeft className="mr-2" size={16} />
              Tüm Pozisyonlar
            </Link>
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">{job.department}</Badge>
              <Badge variant="outline">{job.type}</Badge>
              {job.isActive && <Badge className="bg-green-500">Aktif</Badge>}
            </div>

            <h1 className="mb-4">{job.title}</h1>

            <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                {job.location}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} />
                {job.experience}
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={20} />
                {job.type}
              </div>
            </div>

            <p className="text-muted-foreground text-lg">
              {job.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Job Details */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Responsibilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="mb-4">Sorumluluklar</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Qualifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="mb-4">Aranan Nitelikler</h2>
                <ul className="space-y-3">
                  {job.qualifications.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="mb-4">Sunduğumuz Faydalar</h2>
                <ul className="space-y-3">
                  {job.benefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="mb-4">Başvuru Yap</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Bu pozisyon için başvurmak ister misiniz? İletişim formumuz üzerinden 
                    özgeçmişinizi ve motivasyon mektubunuzu gönderebilirsiniz.
                  </p>
                  <Button asChild className="w-full mb-3">
                    <Link to="/iletisim">Başvuru Yap</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href="mailto:kariyer@creativehub.com">E-posta Gönder</a>
                  </Button>

                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Başvuru süreciyle ilgili sorularınız için:
                    </p>
                    <a 
                      href="mailto:kariyer@creativehub.com" 
                      className="text-sm text-primary hover:underline mt-2 block"
                    >
                      kariyer@creativehub.com
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
