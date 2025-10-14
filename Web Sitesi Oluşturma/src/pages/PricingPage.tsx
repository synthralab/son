import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { pricingPlans, digitalMarketingPlans, socialMediaPlans } from "../data/pricingData";
import { motion } from "motion/react";
import SEO from "../components/SEO";
import CTA from "../components/CTA";

export default function PricingPage() {
  return (
    <>
      <SEO
        title="Fiyatlandırma - CreativeHub Reklam Ajansı"
        description="Marka kimliği, dijital pazarlama ve sosyal medya yönetimi hizmetlerimiz için fiyatlandırma paketleri."
        keywords="reklam ajansı fiyatları, dijital pazarlama fiyat, sosyal medya yönetimi fiyat, marka kimliği fiyat"
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
            <h1 className="mb-6">Fiyatlandırma</h1>
            <p className="text-muted-foreground text-lg">
              İhtiyaçlarınıza uygun paketler ve esnek fiyatlandırma seçenekleri. 
              Tüm paketlerimizde kalite garantisi ve profesyonel destek.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="branding" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="branding">Marka Kimliği</TabsTrigger>
              <TabsTrigger value="digital">Dijital Pazarlama</TabsTrigger>
              <TabsTrigger value="social">Sosyal Medya</TabsTrigger>
            </TabsList>

            {/* Branding Plans */}
            <TabsContent value="branding">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className={`relative h-full ${plan.highlighted ? 'border-primary shadow-xl scale-105' : ''}`}>
                      {plan.highlighted && (
                        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          En Popüler
                        </Badge>
                      )}
                      <CardHeader className="text-center pb-8">
                        <CardTitle className="mb-2">{plan.name}</CardTitle>
                        <CardDescription className="mb-4">{plan.description}</CardDescription>
                        <div className="mb-2">
                          <span className="text-4xl">{plan.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{plan.period}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 mb-8">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button asChild className="w-full" variant={plan.highlighted ? "default" : "outline"}>
                          <Link to="/iletisim">{plan.ctaText}</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Digital Marketing Plans */}
            <TabsContent value="digital">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {digitalMarketingPlans.map((plan, index) => (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className={`relative h-full ${plan.highlighted ? 'border-primary shadow-xl scale-105' : ''}`}>
                      {plan.highlighted && (
                        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          En Popüler
                        </Badge>
                      )}
                      <CardHeader className="text-center pb-8">
                        <CardTitle className="mb-2">{plan.name}</CardTitle>
                        <CardDescription className="mb-4">{plan.description}</CardDescription>
                        <div className="mb-2">
                          <span className="text-4xl">{plan.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{plan.period}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 mb-8">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button asChild className="w-full" variant={plan.highlighted ? "default" : "outline"}>
                          <Link to="/iletisim">{plan.ctaText}</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Social Media Plans */}
            <TabsContent value="social">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {socialMediaPlans.map((plan, index) => (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className={`relative h-full ${plan.highlighted ? 'border-primary shadow-xl scale-105' : ''}`}>
                      {plan.highlighted && (
                        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          En Popüler
                        </Badge>
                      )}
                      <CardHeader className="text-center pb-8">
                        <CardTitle className="mb-2">{plan.name}</CardTitle>
                        <CardDescription className="mb-4">{plan.description}</CardDescription>
                        <div className="mb-2">
                          <span className="text-4xl">{plan.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{plan.period}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 mb-8">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button asChild className="w-full" variant={plan.highlighted ? "default" : "outline"}>
                          <Link to="/iletisim">{plan.ctaText}</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Fiyatlandırma Hakkında</h2>
            <p className="text-muted-foreground">
              Sık sorulan sorular ve cevapları
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2">Ödeme nasıl yapılır?</h3>
                <p className="text-muted-foreground text-sm">
                  Banka havalesi, kredi kartı veya çek ile ödeme kabul ediyoruz. 
                  Aylık paketlerde otomatik ödeme seçeneği de mevcuttur.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2">Sözleşme süresi var mı?</h3>
                <p className="text-muted-foreground text-sm">
                  Proje bazlı işlerde sözleşme yoktur. Aylık paketlerde minimum 3 ay taahhüt istiyoruz 
                  ancak esnek seçenekler sunuyoruz.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2">Özel paket oluşturulabilir mi?</h3>
                <p className="text-muted-foreground text-sm">
                  Evet! İhtiyaçlarınıza özel paketler oluşturabiliriz. 
                  İletişime geçin, size özel bir teklif hazırlayalım.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/sss">Tüm Soruları Görüntüle</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTA
        title="Hangi Paketin Size Uygun Olduğundan Emin Değil misiniz?"
        description="Ücretsiz danışmanlık görüşmesi için bizimle iletişime geçin. İhtiyaçlarınızı analiz edelim ve size en uygun çözümü sunalım."
        buttonText="Ücretsiz Danışma Al"
      />
    </>
  );
}
