import Contact from "../components/Contact";
import SEO from "../components/SEO";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "motion/react";

export default function ContactPage() {
  return (
    <>
      <SEO
        title="İletişim - CreativeHub Reklam Ajansı"
        description="CreativeHub ile iletişime geçin. Projeniz için ücretsiz danışmanlık alın. Telefon: +90 (212) 555 0123"
        keywords="reklam ajansı iletişim, CreativeHub iletişim, reklam ajansı istanbul iletişim"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="mb-6">İletişim</h1>
            <p className="text-muted-foreground text-lg">
              Projeleriniz hakkında konuşmak, sorularınızı yanıtlamak ve size yardımcı olmak için buradayız. 
              Bizimle iletişime geçin, en kısa sürede size dönüş yapalım.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-96 bg-muted/50 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="mx-auto mb-4 text-muted-foreground" size={48} />
            <p className="text-muted-foreground">Harita Yüklenemiyor</p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-32 relative z-10">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-primary" size={24} />
                </div>
                <h4 className="mb-2">Telefon</h4>
                <p className="text-muted-foreground text-sm mb-2">+90 (212) 555 0123</p>
                <p className="text-muted-foreground text-sm">+90 (212) 555 0124</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-primary" size={24} />
                </div>
                <h4 className="mb-2">E-posta</h4>
                <p className="text-muted-foreground text-sm mb-2">info@creativehub.com</p>
                <p className="text-muted-foreground text-sm">destek@creativehub.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-primary" size={24} />
                </div>
                <h4 className="mb-2">Çalışma Saatleri</h4>
                <p className="text-muted-foreground text-sm mb-2">Pazartesi - Cuma</p>
                <p className="text-muted-foreground text-sm">09:00 - 18:00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <Contact />

      {/* Office Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Ofisimize Gelin</h2>
            <p className="text-muted-foreground mb-6">
              İstanbul'un kalbinde, modern ofisimizde sizleri ağırlamaktan mutluluk duyarız. 
              Randevu almak için lütfen önceden iletişime geçin.
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin size={20} />
              <p>Levent Mahallesi, Büyükdere Caddesi No: 123, Levent, İstanbul</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
