import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export default function SEO({
  title = "SynthraLab - Digital & AI Studio",
  description = "Yapay zeka ve dijital teknolojilerle işinizi dönüştürüyoruz. AI chatbot, otomasyon, veri analizi ve web geliştirme çözümleri.",
  keywords = "AI chatbot, yapay zeka, otomasyon, veri analizi, web geliştirme, dijital dönüşüm, AI studio",
  ogImage = "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop",
  ogType = "website",
  canonicalUrl = "https://synthralab.com"
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    };

    // Standard meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);

    // Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("og:type", ogType, true);
    updateMetaTag("og:url", canonicalUrl, true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // Structured Data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "AdvertisingAgency",
      "name": "CreativeHub",
      "description": description,
      "url": canonicalUrl,
      "logo": "https://creativehub.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Levent Mahallesi, Büyükdere Caddesi No: 123",
        "addressLocality": "İstanbul",
        "addressCountry": "TR"
      },
      "telephone": "+90-212-555-0123",
      "email": "info@creativehub.com",
      "sameAs": [
        "https://facebook.com/creativehub",
        "https://instagram.com/creativehub",
        "https://twitter.com/creativehub",
        "https://linkedin.com/company/creativehub"
      ]
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.setAttribute("type", "application/ld+json");
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, ogImage, ogType, canonicalUrl]);

  return null;
}
