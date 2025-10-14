import { Link } from "react-router-dom";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import SEO from "../components/SEO";
import { motion } from "motion/react";

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Sayfa Bulunamadı - 404"
        description="Aradığınız sayfa bulunamadı veya taşınmış olabilir."
      />

      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
              <div className="h-1 w-32 bg-primary mx-auto mb-8"></div>
            </div>

            {/* Error Message */}
            <h2 className="mb-4">Sayfa Bulunamadı</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
              Aradığınız sayfa mevcut değil, taşınmış veya silinmiş olabilir.
              Ana sayfaya dönerek devam edebilirsiniz.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/">
                  <Home className="mr-2" size={20} />
                  Ana Sayfaya Dön
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/blog">
                  <Search className="mr-2" size={20} />
                  Blog'a Göz At
                </Link>
              </Button>
            </div>

            {/* Quick Links */}
            <div className="mt-12 pt-12 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Popüler Sayfalar
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  to="/hizmetler"
                  className="text-sm text-primary hover:underline"
                >
                  Hizmetler
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link
                  to="/portfoy"
                  className="text-sm text-primary hover:underline"
                >
                  Portföy
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link
                  to="/hakkimizda"
                  className="text-sm text-primary hover:underline"
                >
                  Hakkımızda
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link
                  to="/iletisim"
                  className="text-sm text-primary hover:underline"
                >
                  İletişim
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
