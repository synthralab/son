import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: "default" | "secondary";
}

export default function CTA({
  title = "Projeniz İçin Hemen Başlayalım",
  description = "Markanızı bir sonraki seviyeye taşımak için bizimle iletişime geçin. Ücretsiz danışmanlık için formu doldurun.",
  buttonText = "Ücretsiz Teklif Alın",
  buttonLink = "/iletisim",
  variant = "default"
}: CTAProps) {
  return (
    <section className={`py-24 relative overflow-hidden ${variant === "default" ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white" : "bg-muted/50"}`}>
      {variant === "default" && (
        <>
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAtMjBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTE2IDM0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wLTIwYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{
              y: [0, 20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"
            animate={{
              y: [0, -20, 0],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {variant === "default" && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white mb-6">
              <Sparkles size={16} />
              <span className="text-sm font-medium">Ücretsiz Danışmanlık</span>
            </div>
          )}

          <h2 className={`mb-6 text-4xl sm:text-5xl ${variant === "default" ? "text-white" : ""}`}>
            {title}
          </h2>
          
          <p className={`${variant === "default" ? "text-white/90" : "text-muted-foreground"} mb-8 text-lg max-w-2xl mx-auto leading-relaxed`}>
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className={`text-lg shadow-2xl ${
                variant === "default"
                  ? "bg-white text-indigo-600 hover:bg-white/90"
                  : "shadow-primary/20"
              }`}
            >
              <Link to={buttonLink}>
                {buttonText}
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>

            {variant === "default" && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white"
              >
                <Link to="/portfoy">
                  Çalışmalarımız
                </Link>
              </Button>
            )}
          </div>

          {/* Trust Indicators */}
          {variant === "default" && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>7-14 Gün Teslimat</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>%100 Müşteri Memnuniyeti</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Sınırsız Revizyon</span>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
