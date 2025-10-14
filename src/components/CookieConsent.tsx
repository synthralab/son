import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // 1 saniye sonra banner'ı göster
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
        >
          <Card className="shadow-2xl border-2">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Cookie className="text-primary" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2">Çerez Kullanımı</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Web sitemizde deneyiminizi iyileştirmek için çerezler kullanıyoruz. 
                    Sitemizi kullanmaya devam ederek çerez kullanımını kabul etmiş olursunuz.
                    {" "}
                    <Link to="/sss" className="text-primary hover:underline">
                      Daha fazla bilgi
                    </Link>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button onClick={handleAccept} size="sm" className="w-full sm:w-auto">
                      Kabul Et
                    </Button>
                    <Button 
                      onClick={handleDecline} 
                      variant="outline" 
                      size="sm"
                      className="w-full sm:w-auto"
                    >
                      Reddet
                    </Button>
                  </div>
                </div>
                <button
                  onClick={handleDecline}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Kapat"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
