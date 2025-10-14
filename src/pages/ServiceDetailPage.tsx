import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { servicesData } from "../data/servicesData";
import CTA from "../components/CTA";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4">Hizmet Bulunamadı</h2>
          <Button asChild>
            <Link to="/hizmetler">Hizmetlere Dön</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/hizmetler">
              <ArrowLeft className="mr-2" size={16} />
              Tüm Hizmetler
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6">{service.title}</h1>
              <p className="text-muted-foreground text-lg mb-8">
                {service.fullDescription}
              </p>
              <Button asChild size="lg">
                <Link to="/iletisim">Teklif Alın</Link>
              </Button>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <ImageWithFallback
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center">Neler Sunuyoruz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="text-primary" size={14} />
                    </div>
                    <p>{feature}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Çalışma Sürecimiz</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {service.title} hizmetimizde izlediğimiz adım adım süreç
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.process.map((step, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Sağladığımız Faydalar</h2>
            <p className="text-muted-foreground mb-12">
              {service.title} hizmetimizle markanıza katacağımız değerler
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {service.benefits.map((benefit, index) => (
                <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                  {benefit}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Bu Hizmet İçin Teklif Alın"
        description="Size özel hazırlanacak teklif ve çalışma planı için iletişime geçin."
        buttonText="Hemen Başlayın"
      />
    </>
  );
}
