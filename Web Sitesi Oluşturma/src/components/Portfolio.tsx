import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { portfolioData } from "../data/portfolioData";
import { motion } from "motion/react";

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
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 }
};

export default function Portfolio() {
  const featuredProjects = portfolioData.slice(0, 6);

  return (
    <section id="portfolio" className="py-24 bg-muted/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Portföyümüz
          </span>
          <h2 className="mb-4 text-4xl sm:text-5xl">
            Başarı Hikayeleri
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Gerçekleştirdiğimiz projelerle markalar için fark yarattık. İşte başarı hikayelerimizden bazıları.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Link to={`/portfoy/${project.id}`}>
                <Card 
                  className="group overflow-hidden border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 cursor-pointer bg-card/80 backdrop-blur-sm h-full"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/20 backdrop-blur-md text-white border-white/30">
                        {project.category}
                      </Badge>
                    </div>

                    {/* Hover Icon */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <ExternalLink className="text-white" size={18} />
                      </div>
                    </div>
                    
                    {/* Project Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white mb-2 group-hover:text-primary-foreground transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
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
          <Button asChild size="lg" variant="outline" className="group">
            <Link to="/portfoy">
              Tüm Projeleri Görüntüle
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
