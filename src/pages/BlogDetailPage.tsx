import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { blogData } from "../data/blogData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";
import SEO from "../components/SEO";
import SocialShare from "../components/SocialShare";
import ReadingProgress from "../components/ReadingProgress";

export default function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();
  const post = blogData.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4">Blog Yazısı Bulunamadı</h2>
          <Button asChild>
            <Link to="/blog">Blog'a Dön</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedPosts = blogData
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <ReadingProgress />
      <SEO
        title={`${post.title} - CreativeHub Blog`}
        description={post.excerpt}
        keywords={post.tags.join(", ")}
        ogImage={post.image}
        ogType="article"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/blog">
              <ArrowLeft className="mr-2" size={16} />
              Blog'a Dön
            </Link>
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-4">{post.category}</Badge>
            <h1 className="mb-6">{post.title}</h1>

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p>{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">{post.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  {post.readTime}
                </div>
              </div>
            </div>

            <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
              <ImageWithFallback
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg max-w-none mb-12"
          >
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
          </motion.div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="outline">{tag}</Badge>
            ))}
          </div>

          {/* Share Buttons */}
          <div className="border-t border-b border-border py-6 mb-12">
            <SocialShare
              url={`/blog/${post.id}`}
              title={post.title}
              description={post.excerpt}
            />
          </div>

          {/* Author Bio */}
          <div className="bg-muted/50 rounded-lg p-6 mb-12">
            <div className="flex items-start gap-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="mb-1">{post.author.name}</h3>
                <p className="text-muted-foreground mb-2">{post.author.role}</p>
                <p className="text-sm">
                  CreativeHub'da {post.author.role.toLowerCase()} olarak çalışıyor ve 
                  dijital dünyadaki gelişmeleri yakından takip ediyor.
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="mb-6">İlgili Yazılar</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`}>
                    <div className="group">
                      <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                        <ImageWithFallback
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
