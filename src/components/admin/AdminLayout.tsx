import { ReactNode } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  FileText, 
  Briefcase, 
  Wrench, 
  HelpCircle, 
  Users, 
  DollarSign,
  LogOut,
  Download,
  Upload,
  RotateCcw,
  Sparkles
} from "lucide-react";
import { Button } from "../ui/button";
import { useCMS } from "../../contexts/CMSContext";
import { toast } from "sonner@2.0.3";
import { motion } from "motion/react";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, exportData, resetData } = useCMS();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
    toast.success("Çıkış yapıldı");
  };

  const handleExport = () => {
    exportData();
    toast.success("Data başarıyla export edildi!");
  };

  const handleImport = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const jsonData = event.target?.result as string;
            const { importData } = useCMS();
            importData(jsonData);
            toast.success("Data başarıyla import edildi!");
            window.location.reload();
          } catch (error) {
            toast.error("Import başarısız!");
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  const handleReset = () => {
    if (confirm("Tüm data silinip varsayılana dönecek. Emin misiniz?")) {
      resetData();
      toast.success("Data sıfırlandı!");
      window.location.reload();
    }
  };

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
    { icon: FileText, label: "Blog", path: "/admin/blog" },
    { icon: Briefcase, label: "Portföy", path: "/admin/portfolio" },
    { icon: Wrench, label: "Hizmetler", path: "/admin/services" },
    { icon: HelpCircle, label: "FAQ", path: "/admin/faq" },
    { icon: Users, label: "Kariyer", path: "/admin/career" },
    { icon: DollarSign, label: "Fiyatlandırma", path: "/admin/pricing" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="flex min-h-screen relative z-10">
        {/* Sidebar */}
        <motion.aside 
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          className="w-72 p-6 backdrop-blur-xl bg-white/5 border-r border-white/10"
        >
          {/* Logo */}
          <Link to="/admin" className="flex items-center gap-3 mb-8 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/50">
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h2 className="text-white text-xl font-bold leading-none">SynthraLab</h2>
              <p className="text-white/60 text-xs">Admin Panel</p>
            </div>
          </Link>

          {/* Menu */}
          <nav className="space-y-2 mb-8">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/50"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <item.icon size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Utility Buttons */}
          <div className="space-y-2 pt-6 border-t border-white/10">
            <Button
              onClick={handleExport}
              variant="outline"
              className="w-full justify-start gap-3 bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white"
              size="sm"
            >
              <Download size={16} />
              Export Data
            </Button>
            <Button
              onClick={handleImport}
              variant="outline"
              className="w-full justify-start gap-3 bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white"
              size="sm"
            >
              <Upload size={16} />
              Import Data
            </Button>
            <Button
              onClick={handleReset}
              variant="outline"
              className="w-full justify-start gap-3 bg-white/5 border-white/10 text-red-400 hover:bg-red-500/20 hover:text-red-300 hover:border-red-500/50"
              size="sm"
            >
              <RotateCcw size={16} />
              Reset Data
            </Button>
          </div>

          {/* Logout */}
          <div className="mt-auto pt-6">
            <Button
              onClick={handleLogout}
              variant="outline"
              className="w-full justify-start gap-3 bg-white/5 border-white/10 text-white hover:bg-red-500/20 hover:text-red-300 hover:border-red-500/50"
            >
              <LogOut size={20} />
              Çıkış Yap
            </Button>
          </div>
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
