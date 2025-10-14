import { useEffect, useState } from "react";
import { Users, Award, Target, Zap } from "lucide-react";
import { motion } from "motion/react";

const statsData = [
  {
    icon: Users,
    end: 150,
    suffix: "+",
    label: "Mutlu Müşteri",
    color: "from-blue-400 to-indigo-500"
  },
  {
    icon: Award,
    end: 25,
    suffix: "+",
    label: "Ödül",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: Target,
    end: 500,
    suffix: "+",
    label: "Başarılı Proje",
    color: "from-green-400 to-teal-500"
  },
  {
    icon: Zap,
    end: 10,
    suffix: "+",
    label: "Yıllık Deneyim",
    color: "from-purple-400 to-pink-500"
  }
];

function Counter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
}

export default function Stats() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4 text-4xl sm:text-5xl">
            Rakamlarla Başarı
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Yılların deneyimi ve yüzlerce başarılı projeyle markaların dijital dönüşümüne öncülük ediyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              className="text-center group"
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                <stat.icon className="text-white" size={36} />
              </div>
              <div className="mb-2 text-white text-4xl sm:text-5xl font-bold">
                <Counter end={stat.end} />
                {stat.suffix}
              </div>
              <p className="text-white/80 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Decorative Line */}
        <div className="mt-16 flex justify-center">
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
