import Hero from "../components/Hero";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import CTA from "../components/CTA";
import SEO from "../components/SEO";

export default function HomePage() {
  return (
    <>
      <SEO />
      <Hero />
      <Services />
      <Stats />
      <Portfolio />
      <Testimonials />
      <Newsletter />
      <CTA />
    </>
  );
}
