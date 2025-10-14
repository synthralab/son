import { useCMS } from "../../contexts/CMSContext";
import AdminLayout from "../../components/admin/AdminLayout";
import { Card } from "../../components/ui/card";
import { FileText, Briefcase, Wrench, HelpCircle, Users, DollarSign, TrendingUp, Eye } from "lucide-react";
import { motion } from "motion/react";

export default function AdminDashboard() {
  const { blogData, portfolioData, servicesData, faqData, careerData } = useCMS();

  const stats = [
    {
      icon: FileText,
      label: "Blog Yazıları",
      value: blogData.length,
      color: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-500/20",
    },
    {
      icon: Briefcase,
      label: "Portföy Projeleri",
      value: portfolioData.length,
      color: "from-purple-500 to-pink-500",
      iconBg: "bg-purple-500/20",
    },
    {
      icon: Wrench,
      label: "Hizmetler",
      value: servicesData.length,
      color: "from-green-500 to-emerald-500",
      iconBg: "bg-green-500/20",
    },
    {
      icon: HelpCircle,
      label: "FAQ Soruları",
      value: faqData.length,
      color: "from-yellow-500 to-orange-500",
      iconBg: "bg-yellow-500/20",
    },
    {
      icon: Users,
      label: "Kariyer İlanları",
      value: careerData.length,
      color: "from-red-500 to-rose-500",
      iconBg: "bg-red-500/20",
    },
    {
      icon: DollarSign,
      label: "Fiyat Kategorisi",
      value: 3,
      color: "from-indigo-500 to-purple-500",
      iconBg: "bg-indigo-500/20",
    },
  ];

  return (
    <AdminLayout>
      {/* Header */}
      <div className="mb-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-2"
        >
          Dashboard
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/60"
        >
          Hoş geldiniz! İçerik yönetim panelinize genel bakış
        </motion.p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="backdrop-blur-xl bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-2xl ${stat.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <stat.icon className="text-white" size={32} />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">{stat.label}</p>
                  <p className="text-4xl font-bold text-white">{stat.value}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-white mb-4">Hızlı İşlemler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card className="backdrop-blur-xl bg-white/5 border-white/10 p-6">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="text-green-400" size={24} />
              <h3 className="text-xl font-semibold text-white">Son Aktiviteler</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <FileText className="text-blue-400" size={20} />
                <div className="flex-1">
                  <p className="text-white text-sm">Blog yazısı eklendi</p>
                  <p className="text-white/40 text-xs">5 dakika önce</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <Briefcase className="text-purple-400" size={20} />
                <div className="flex-1">
                  <p className="text-white text-sm">Portföy güncellendi</p>
                  <p className="text-white/40 text-xs">2 saat önce</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <Wrench className="text-green-400" size={20} />
                <div className="flex-1">
                  <p className="text-white text-sm">Hizmet eklendi</p>
                  <p className="text-white/40 text-xs">1 gün önce</p>
                </div>
              </div>
            </div>
          </Card>

          {/* System Info */}
          <Card className="backdrop-blur-xl bg-white/5 border-white/10 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-indigo-400" size={24} />
              <h3 className="text-xl font-semibold text-white">Sistem Bilgisi</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white/60">Depolama Kullanımı</span>
                  <span className="text-white">
                    {Math.round(JSON.stringify({ blogData, portfolioData, servicesData, faqData, careerData }).length / 1024)} KB
                  </span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-1/4"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div>
                  <p className="text-white/60 text-xs mb-1">Toplam İçerik</p>
                  <p className="text-2xl font-bold text-white">
                    {blogData.length + portfolioData.length + servicesData.length + faqData.length + careerData.length}
                  </p>
                </div>
                <div>
                  <p className="text-white/60 text-xs mb-1">Son Güncelleme</p>
                  <p className="text-sm text-white">Bugün</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </motion.div>

      {/* Welcome Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 p-6 rounded-2xl backdrop-blur-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-white/10"
      >
        <h3 className="text-xl font-semibold text-white mb-2">💡 İpucu</h3>
        <p className="text-white/80">
          Sol menüden içeriklerinizi yönetebilir, Export butonu ile yedeğinizi alabilir ve Import ile başka bir bilgisayara taşıyabilirsiniz.
          Tüm değişiklikler otomatik olarak kaydedilir!
        </p>
      </motion.div>
    </AdminLayout>
  );
}
