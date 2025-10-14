import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { toast } from "sonner@2.0.3";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    value: "+90 (212) 555 0123"
  },
  {
    icon: Mail,
    title: "E-posta",
    value: "info@synthralab.com"
  },
  {
    icon: MapPin,
    title: "Adres",
    value: "Levent, İstanbul, Türkiye"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Lütfen tüm zorunlu alanları doldurun.");
      return;
    }

    // Simulate form submission
    toast.success("Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">İletişime Geçin</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Projeleriniz hakkında konuşmak için bize ulaşın. Ekibimiz size en kısa sürede dönüş yapacaktır.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Bize Mesaj Gönderin</CardTitle>
                <CardDescription>
                  Formu doldurun, size en kısa sürede geri dönelim.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block mb-2">
                        Ad Soyad *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Adınız Soyadınız"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-2">
                        Telefon
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+90 (5xx) xxx xx xx"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2">
                      E-posta *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="ornek@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2">
                      Mesajınız *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Projeniz hakkında bize bilgi verin..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    Mesaj Gönder
                    <Send className="ml-2" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="mb-1">{info.title}</h4>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h4 className="mb-2 text-primary-foreground">Çalışma Saatlerimiz</h4>
                <p className="text-primary-foreground/90 text-sm">
                  Pazartesi - Cuma<br />
                  09:00 - 18:00
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
