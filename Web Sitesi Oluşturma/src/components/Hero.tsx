import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAtMjBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTE2IDM0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wLTIwYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      </div>

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white mb-6"
            >
              <Sparkles size={16} />
              <span className="text-sm font-medium">Digital & AI Studio</span>
            </motion.div>

            <h1 className="text-white mb-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Yapay Zeka ile
              <span className="block bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Geleceği İnşa Edin
              </span>
            </h1>
            
            <p className="text-white/90 mb-8 text-lg sm:text-xl leading-relaxed">
              AI destekli çözümler ve dijital teknolojilerle işinizi dönüştürüyoruz. 
              Otomasyon, analiz ve yenilikçi yazılımlarla rakiplerinizin önüne geçin.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-1">250+</div>
                <div className="text-white/70 text-sm">Proje</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-1">150+</div>
                <div className="text-white/70 text-sm">Mutlu Müşteri</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-1">8+</div>
                <div className="text-white/70 text-sm">Yıl Tecrübe</div>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="text-lg bg-white text-indigo-600 hover:bg-white/90 shadow-2xl shadow-black/20"
              >
                <Link to="/iletisim">
                  Projeni Başlat
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
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
            </div>
          </motion.div>

          {/* Right Content - Hero Image & Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl mb-6"
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                alt="Creative team collaboration"
                className="w-full h-auto"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent"></div>
              
              {/* Floating Badge on Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">İş Ortağınız Hazır!</p>
                    <p className="text-white/70 text-sm">Hemen başlayalım</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <Zap className="text-yellow-300" size={20} />,
                  title: "Hızlı Teslimat",
                  desc: "7-14 gün içinde",
                },
                {
                  icon: <TrendingUp className="text-green-300" size={20} />,
                  title: "ROI Artışı",
                  desc: "%200'e kadar",
                },
                {
                  icon: <Sparkles className="text-pink-300" size={20} />,
                  title: "Yaratıcı Çözümler",
                  desc: "Özel tasarımlar",
                },
                {
                  icon: <ArrowRight className="text-blue-300" size={20} />,
                  title: "7/24 Destek",
                  desc: "Kesintisiz hizmet",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="mb-2">{item.icon}</div>
                  <h4 className="text-white font-semibold mb-1 text-sm">{item.title}</h4>
                  <p className="text-white/70 text-xs">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
}
