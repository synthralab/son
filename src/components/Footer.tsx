import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/50">
                <svg
                  className="w-7 h-7 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <h3 className="text-white text-xl font-bold leading-none">
                  SynthraLab
                </h3>
                <span className="text-sm text-white/60">
                  AI Studio
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Yapay zeka ve dijital teknolojilerle geleceği inşa
              ediyoruz. İşinizi bir sonraki seviyeye taşıyoruz.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>7/24 AI Destek</span>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-white font-semibold">
              Hızlı Bağlantılar
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white text-sm transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  to="/hizmetler"
                  className="text-gray-400 hover:text-white text-sm transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link
                  to="/portfoy"
                  className="text-gray-400 hover:text-white text-sm transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Portföy
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-white text-sm transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/kariyer"
                  className="text-gray-400 hover:text-white text-sm transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Kariyer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-white font-semibold">
              Hizmetler
            </h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">
                • Marka Stratejisi
              </li>
              <li className="text-gray-400 text-sm">
                • Kreatif Tasarım
              </li>
              <li className="text-gray-400 text-sm">
                • Dijital Pazarlama
              </li>
              <li className="text-gray-400 text-sm">
                • Video Prodüksiyon
              </li>
              <li className="text-gray-400 text-sm">
                • Web Geliştirme
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-white font-semibold">
              Bizi Takip Edin
            </h4>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-indigo-500 hover:to-purple-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-pink-500 hover:to-red-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-blue-400 hover:to-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-800 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={18} />
              </a>
            </div>
            <div className="text-sm text-gray-400">
              <p className="mb-1 font-medium text-white">
                İletişim
              </p>
              <p>info@creativehub.com</p>
              <p>+90 212 XXX XX XX</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} CreativeHub. Tüm hakları
              saklıdır.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link
                to="/sss"
                className="hover:text-white transition-colors"
              >
                Gizlilik Politikası
              </Link>
              <Link
                to="/sss"
                className="hover:text-white transition-colors"
              >
                Kullanım Koşulları
              </Link>
              <Link
                to="/sss"
                className="hover:text-white transition-colors"
              >
                KVKK
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}