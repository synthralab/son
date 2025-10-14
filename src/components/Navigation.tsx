import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import SiteSearch from "./SiteSearch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path;
  const isActiveSection = (paths: string[]) => paths.some(path => location.pathname.startsWith(path));

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/50">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <h2 className="text-primary font-bold leading-none group-hover:text-primary/80 transition-colors">SynthraLab</h2>
                <span className="text-xs text-muted-foreground">AI Studio</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/"
              className={`transition-colors ${
                isActive("/") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Ana Sayfa
            </Link>
            <Link
              to="/hizmetler"
              className={`transition-colors ${
                isActiveSection(["/hizmetler"])
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Hizmetler
            </Link>
            <Link
              to="/portfoy"
              className={`transition-colors ${
                isActiveSection(["/portfoy"])
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Portföy
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                Kurumsal
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/hakkimizda">Hakkımızda</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/blog">Blog</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/kariyer">Kariyer</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/sss">S.S.S</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/fiyatlandirma"
              className={`transition-colors ${
                isActive("/fiyatlandirma") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Fiyatlandırma
            </Link>
            
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Ara"
            >
              <Search size={20} />
            </button>
            
            <ThemeToggle />
            
            <Button asChild>
              <Link to="/iletisim">İletişim</Link>
            </Button>
          </div>
          
          <SiteSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {/* Mobile Logo */}
            <div className="flex items-center gap-3 px-3 py-4 mb-2 border-b border-border/50">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/50">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <h2 className="text-primary font-bold leading-none">SynthraLab</h2>
                <span className="text-xs text-muted-foreground">AI Studio</span>
              </div>
            </div>

            <Link
              to="/"
              onClick={closeMenu}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                isActive("/") ? "bg-accent text-primary" : "text-foreground hover:bg-accent"
              }`}
            >
              Ana Sayfa
            </Link>
            <Link
              to="/hizmetler"
              onClick={closeMenu}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                isActiveSection(["/hizmetler"])
                  ? "bg-accent text-primary"
                  : "text-foreground hover:bg-accent"
              }`}
            >
              Hizmetler
            </Link>
            <Link
              to="/portfoy"
              onClick={closeMenu}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                isActiveSection(["/portfoy"])
                  ? "bg-accent text-primary"
                  : "text-foreground hover:bg-accent"
              }`}
            >
              Portföy
            </Link>
            <Link
              to="/hakkimizda"
              onClick={closeMenu}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                isActive("/hakkimizda") ? "bg-accent text-primary" : "text-foreground hover:bg-accent"
              }`}
            >
              Hakkımızda
            </Link>
            <Link
              to="/blog"
              onClick={closeMenu}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                isActiveSection(["/blog"]) ? "bg-accent text-primary" : "text-foreground hover:bg-accent"
              }`}
            >
              Blog
            </Link>
            <Link
              to="/kariyer"
              onClick={closeMenu}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                isActiveSection(["/kariyer"]) ? "bg-accent text-primary" : "text-foreground hover:bg-accent"
              }`}
            >
              Kariyer
            </Link>
            <Link
              to="/sss"
              onClick={closeMenu}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                isActive("/sss") ? "bg-accent text-primary" : "text-foreground hover:bg-accent"
              }`}
            >
              S.S.S
            </Link>
            <Link
              to="/fiyatlandirma"
              onClick={closeMenu}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                isActive("/fiyatlandirma") ? "bg-accent text-primary" : "text-foreground hover:bg-accent"
              }`}
            >
              Fiyatlandırma
            </Link>
            <Link
              to="/iletisim"
              onClick={closeMenu}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                isActive("/iletisim") ? "bg-accent text-primary" : "text-foreground hover:bg-accent"
              }`}
            >
              İletişim
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
