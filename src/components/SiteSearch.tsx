import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";
import { blogData } from "../data/blogData";
import { portfolioData } from "../data/portfolioData";
import { servicesData } from "../data/servicesData";
import { Badge } from "./ui/badge";

interface SearchResult {
  type: "blog" | "portfolio" | "service";
  id: string;
  title: string;
  description: string;
  url: string;
}

interface SiteSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SiteSearch({ isOpen, onClose }: SiteSearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchQuery = query.toLowerCase();
    const allResults: SearchResult[] = [];

    // Blog araması
    blogData.forEach((post) => {
      if (
        post.title.toLowerCase().includes(searchQuery) ||
        post.excerpt.toLowerCase().includes(searchQuery) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery))
      ) {
        allResults.push({
          type: "blog",
          id: post.id,
          title: post.title,
          description: post.excerpt,
          url: `/blog/${post.id}`,
        });
      }
    });

    // Portföy araması
    portfolioData.forEach((project) => {
      if (
        project.title.toLowerCase().includes(searchQuery) ||
        project.description.toLowerCase().includes(searchQuery) ||
        project.category.toLowerCase().includes(searchQuery)
      ) {
        allResults.push({
          type: "portfolio",
          id: project.id,
          title: project.title,
          description: project.description,
          url: `/portfoy/${project.id}`,
        });
      }
    });

    // Hizmet araması
    servicesData.forEach((service) => {
      if (
        service.title.toLowerCase().includes(searchQuery) ||
        service.shortDescription.toLowerCase().includes(searchQuery) ||
        service.fullDescription.toLowerCase().includes(searchQuery)
      ) {
        allResults.push({
          type: "service",
          id: service.id,
          title: service.title,
          description: service.shortDescription,
          url: `/hizmetler/${service.id}`,
        });
      }
    });

    setResults(allResults.slice(0, 10));
  }, [query]);

  const getTypeBadge = (type: string) => {
    const badges = {
      blog: { label: "Blog", variant: "default" as const },
      portfolio: { label: "Portföy", variant: "secondary" as const },
      service: { label: "Hizmet", variant: "outline" as const },
    };
    return badges[type as keyof typeof badges];
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[600px]">
        <DialogHeader>
          <DialogTitle>Site İçinde Ara</DialogTitle>
          <DialogDescription>
            Blog yazıları, projeler ve hizmetler arasında arama yapın
          </DialogDescription>
        </DialogHeader>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <Input
            placeholder="Blog, hizmet veya proje arayın..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 pr-10"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X size={20} />
            </button>
          )}
        </div>

        <div className="mt-4 space-y-2 overflow-y-auto max-h-[400px]">
          {results.length === 0 && query && (
            <p className="text-center text-muted-foreground py-8">
              Sonuç bulunamadı
            </p>
          )}

          {results.length === 0 && !query && (
            <p className="text-center text-muted-foreground py-8">
              Aramaya başlamak için yazmaya başlayın
            </p>
          )}

          {results.map((result) => {
            const badge = getTypeBadge(result.type);
            return (
              <Link
                key={`${result.type}-${result.id}`}
                to={result.url}
                onClick={onClose}
                className="block p-4 rounded-lg hover:bg-accent transition-colors"
              >
                <div className="flex items-start gap-3">
                  <Badge variant={badge.variant} className="mt-1">
                    {badge.label}
                  </Badge>
                  <div className="flex-1 min-w-0">
                    <h4 className="mb-1 truncate">{result.title}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {result.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            <kbd className="px-2 py-1 bg-muted rounded">Esc</kbd> ile kapat
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
