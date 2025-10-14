import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ScrollProgress from "./components/ScrollProgress";
import LiveChat from "./components/LiveChat";
import CookieConsent from "./components/CookieConsent";
import Breadcrumb from "./components/Breadcrumb";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import PortfolioPage from "./pages/PortfolioPage";
import PortfolioDetailPage from "./pages/PortfolioDetailPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import FAQPage from "./pages/FAQPage";
import CareerPage from "./pages/CareerPage";
import CareerDetailPage from "./pages/CareerDetailPage";
import PricingPage from "./pages/PricingPage";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminBlogPage from "./pages/admin/AdminBlogPage";
import { Toaster } from "./components/ui/sonner";
import { CMSProvider, useCMS } from "./contexts/CMSContext";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useCMS();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  if (isAdminRoute) {
    return (
      <>
        <Routes>
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/blog"
            element={
              <ProtectedRoute>
                <AdminBlogPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Routes>
        <Toaster />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <ScrollToTop />
      <Navigation />
      <Breadcrumb />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hizmetler" element={<ServicesPage />} />
        <Route path="/hizmetler/:id" element={<ServiceDetailPage />} />
        <Route path="/portfoy" element={<PortfolioPage />} />
        <Route path="/portfoy/:id" element={<PortfolioDetailPage />} />
        <Route path="/hakkimizda" element={<AboutPage />} />
        <Route path="/iletisim" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/sss" element={<FAQPage />} />
        <Route path="/kariyer" element={<CareerPage />} />
        <Route path="/kariyer/:id" element={<CareerDetailPage />} />
        <Route path="/fiyatlandirma" element={<PricingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <BackToTop />
      <LiveChat />
      <CookieConsent />
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <CMSProvider>
      <Router>
        <AppContent />
      </Router>
    </CMSProvider>
  );
}
