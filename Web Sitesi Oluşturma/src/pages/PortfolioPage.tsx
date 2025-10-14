import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { portfolioData } from "../data/portfolioData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import CTA from "../components/CTA";
import SEO from "../components/SEO";
import { motion } from "motion/react";

export default function PortfolioPage() {
  const categories = ["Tümü", ...Array.from(new Set(portfolioData.map(p => p.category)))];
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filteredProjects = activeCategory === "Tümü"
    ? portfolioData
    : portfolioData.filter(p => p.category === activeCategory);

  return (
    <>
      <SEO
        title="Portföy - CreativeHub Başarı Hikayeleri"
        description="Gerçekleştirdiğimiz projeler ve başarı hikayeleri. Marka stratejisi, dijital pazarlama ve tasarım çalışmalarımız."
        keywords="reklam ajansı portföy, başarılı projeler, case study, marka projeleri"
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
            <h1 className="mb-6">Portföyümüz</h1>
            <p className="text-muted-foreground text-lg">
              Gerçekleştirdiğimiz projelerle markalar için fark yarattık. 
              İşte başarı hikayelerimizden bazıları ve elde ettiğimiz sonuçlar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/portfoy/${project.id}`}>
                  <Card
                    className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary">{project.category}</Badge>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p className="text-sm opacity-90 mb-2">{project.client} • {project.year}</p>
                        <h3 className="text-white mb-3">{project.title}</h3>
                        <span className="inline-flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                          Detayları Gör
                          <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Sıradaki Başarı Hikayesi Sizin Olsun"
        description="Markanız için de etkileyici sonuçlar elde edelim. Projeniz hakkında konuşmak için iletişime geçin."
      />
    </>
  );
}
