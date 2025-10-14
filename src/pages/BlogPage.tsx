import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { useCMS } from "../contexts/CMSContext";
import { blogCategories } from "../data/blogData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";
import SEO from "../components/SEO";

export default function BlogPage() {
  const { blogData } = useCMS();
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filteredPosts = activeCategory === "Tümü"
    ? blogData
    : blogData.filter(post => post.category === activeCategory);

  return (
    <>
      <SEO
        title="Blog - CreativeHub Reklam Ajansı"
        description="Dijital pazarlama, tasarım ve sosyal medya hakkında güncel içerikler, ipuçları ve trendler."
        keywords="dijital pazarlama blog, tasarım blog, sosyal medya ipuçları, reklam trendi"
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
            <h1 className="mb-6">Blog</h1>
            <p className="text-muted-foreground text-lg">
              Dijital pazarlama, tasarım ve teknoloji dünyasından güncel içerikler, 
              uzman görüşleri ve pratik ipuçları.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((category) => (
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

      {/* Blog Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.id}`}>
                  <Card className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative aspect-video overflow-hidden">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary">{post.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-8 h-8 rounded-full"
                          />
                          <div className="text-sm">
                            <p>{post.author.name}</p>
                          </div>
                        </div>
                        
                        <ArrowRight 
                          size={20} 
                          className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
