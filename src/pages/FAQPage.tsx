import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "../components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Button } from "../components/ui/button";
import { faqData, faqCategories } from "../data/faqData";
import { motion } from "motion/react";
import SEO from "../components/SEO";
import CTA from "../components/CTA";

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Genel");

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "Genel" ? true : faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEO
        title="Sık Sorulan Sorular - CreativeHub"
        description="CreativeHub hizmetleri, fiyatlandırma, süreç ve teknik konularda sık sorulan sorular ve cevapları."
        keywords="faq, sık sorulan sorular, reklam ajansı fiyatları, hizmet süreci"
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
            <h1 className="mb-6">Sık Sorulan Sorular</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Hizmetlerimiz, süreçlerimiz ve fiyatlandırmamız hakkında en çok merak edilen soruların cevapları burada.
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Soru ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {faqCategories.map((category) => (
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

      {/* FAQ List */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length > 0 ? (
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <AccordionItem value={faq.id} className="border border-border rounded-lg px-6">
                    <AccordionTrigger className="hover:no-underline">
                      <span className="text-left">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">Aradığınız kriterlere uygun soru bulunamadı.</p>
              <Button variant="outline" onClick={() => {
                setSearchTerm("");
                setActiveCategory("Genel");
              }}>
                Filtreleri Temizle
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Sorunuzun Cevabını Bulamadınız mı?</h2>
          <p className="text-muted-foreground mb-8">
            Ekibimiz size yardımcı olmak için burada. Bize ulaşın, size özel çözümler sunalım.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <a href="#iletisim">İletişime Geçin</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="tel:+902125550123">Bizi Arayın</a>
            </Button>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
