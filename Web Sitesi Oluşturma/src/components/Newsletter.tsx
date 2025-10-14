import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner@2.0.3";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast.error("Lütfen geçerli bir e-posta adresi girin.");
      return;
    }

    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Başarıyla abone oldunuz! E-posta adresinizi doğrulayın.");
    setEmail("");
    setLoading(false);
  };

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
            <Mail className="text-primary-foreground" size={32} />
          </div>
          <h2 className="mb-4 text-primary-foreground">Bültenimize Abone Olun</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Dijital pazarlama ipuçları, tasarım trendleri ve özel fırsatlardan haberdar olmak için 
            e-posta listemize katılın.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="E-posta adresiniz"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              disabled={loading}
            />
            <Button
              type="submit"
              variant="secondary"
              disabled={loading}
            >
              {loading ? "Gönderiliyor..." : "Abone Ol"}
              <Send className="ml-2" size={16} />
            </Button>
          </div>
          <p className="text-primary-foreground/60 text-sm mt-3 text-center">
            Spam göndermiyoruz. İstediğiniz zaman abonelikten çıkabilirsiniz.
          </p>
        </form>
      </div>
    </section>
  );
}
