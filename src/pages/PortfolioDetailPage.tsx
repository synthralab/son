import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { portfolioData } from "../data/portfolioData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import CTA from "../components/CTA";

export default function PortfolioDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = portfolioData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4">Proje Bulunamadı</h2>
          <Button asChild>
            <Link to="/portfoy">Portföye Dön</Link>
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
            <Link to="/portfoy">
              <ArrowLeft className="mr-2" size={16} />
              Tüm Projeler
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <Badge variant="secondary" className="mb-4">{project.category}</Badge>
              <h1 className="mb-4">{project.title}</h1>
              <p className="text-muted-foreground mb-6">{project.description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Müşteri</p>
                  <p>{project.client}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Yıl</p>
                  <p>{project.year}</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="outline">{tag}</Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="mb-4">Zorluk</h3>
                <p className="text-muted-foreground">{project.challenge}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="mb-4">Çözüm</h3>
                <p className="text-muted-foreground">{project.solution}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center">Elde Edilen Sonuçlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.results.map((result, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                <p className="text-lg">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 1 && (
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center">Proje Görselleri</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((image, index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={image}
                    alt={`${project.title} - ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA
        title="Benzer Sonuçlar İster misiniz?"
        description="Projeniz için de başarı hikayesi yaratmak üzere hemen iletişime geçin."
      />
    </>
  );
}
