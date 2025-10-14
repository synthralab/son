import { Users, Award, Target, Zap } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "150+",
    label: "Mutlu Müşteri"
  },
  {
    icon: Award,
    value: "25+",
    label: "Ödül"
  },
  {
    icon: Target,
    value: "500+",
    label: "Başarılı Proje"
  },
  {
    icon: Zap,
    value: "10+",
    label: "Yıllık Deneyim"
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">Hakkımızda</h2>
            <p className="text-muted-foreground mb-4">
              SynthraLab, yapay zeka ve dijital teknolojiler alanında uzmanlaşmış bir yazılım stüdyosudur. 
              İşletmelerin dijital dönüşümünü AI destekli çözümlerle hızlandırıyor, 
              tekrarlayan işlemleri otomatikleştiriyor ve veri odaklı karar almalarını sağlıyoruz.
            </p>
            <p className="text-muted-foreground mb-4">
              Stratejik düşünce, yaratıcı mükemmellik ve teknolojiyi bir araya getirerek, 
              müşterilerimizin dijital dünyada öne çıkmasını sağlıyoruz.
            </p>
            <p className="text-muted-foreground">
              Vizyonumuz, her markanın benzersiz hikayesini en etkili şekilde anlatmak 
              ve hedef kitleleriyle kalıcı bağlar kurmalarına yardımcı olmaktır.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-background rounded-lg p-6 text-center border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-primary" size={24} />
                </div>
                <div className="mb-2">{stat.value}</div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
