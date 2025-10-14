import { Facebook, Twitter, Linkedin, Link2, Check } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner@2.0.3";
import { useState } from "react";

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
}

export default function SocialShare({ url, title, description }: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const fullUrl = `${window.location.origin}${url}`;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
  };

  const handleShare = (platform: string, link: string) => {
    window.open(link, "_blank", "width=600,height=400");
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      toast.success("Link kopyalandı!");
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error("Link kopyalanamadı");
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground mr-2">Paylaş:</span>
      
      <Button
        variant="outline"
        size="icon"
        onClick={() => handleShare("facebook", shareLinks.facebook)}
        className="rounded-full"
        aria-label="Facebook'ta paylaş"
      >
        <Facebook size={18} />
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={() => handleShare("twitter", shareLinks.twitter)}
        className="rounded-full"
        aria-label="Twitter'da paylaş"
      >
        <Twitter size={18} />
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={() => handleShare("linkedin", shareLinks.linkedin)}
        className="rounded-full"
        aria-label="LinkedIn'de paylaş"
      >
        <Linkedin size={18} />
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={handleCopyLink}
        className="rounded-full"
        aria-label="Linki kopyala"
      >
        {copied ? <Check size={18} /> : <Link2 size={18} />}
      </Button>
    </div>
  );
}
