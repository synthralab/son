import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const breadcrumbNameMap: Record<string, string> = {
  "/": "Ana Sayfa",
  "/hizmetler": "Hizmetler",
  "/portfoy": "Portföy",
  "/blog": "Blog",
  "/kariyer": "Kariyer",
  "/hakkimizda": "Hakkımızda",
  "/iletisim": "İletişim",
  "/fiyatlandirma": "Fiyatlandırma",
  "/sss": "Sık Sorulan Sorular",
};

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav className="bg-muted/30 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link
              to="/"
              className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
            >
              <Home size={16} />
              <span className="hidden sm:inline">Ana Sayfa</span>
            </Link>
          </li>

          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            const name = breadcrumbNameMap[routeTo] || pathname;

            return (
              <li key={routeTo} className="flex items-center gap-2">
                <ChevronRight size={16} className="text-muted-foreground" />
                {isLast ? (
                  <span className="text-foreground font-medium truncate max-w-[200px]">
                    {decodeURIComponent(name)}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-muted-foreground hover:text-primary transition-colors truncate max-w-[200px]"
                  >
                    {decodeURIComponent(name)}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
