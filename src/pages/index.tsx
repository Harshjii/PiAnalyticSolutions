import { Helmet } from '@dr.pogodin/react-helmet';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import StatsSection from '@/components/home/StatsSection';
import WhyUsSection from '@/components/home/WhyUsSection';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Pi Analytic Solutions — Enterprise IT Consulting & Software Development</title>
        <meta
          name="description"
          content="Pi Analytic Solutions delivers enterprise software, AI/ML systems, cloud infrastructure, and digital transformation for startups and global enterprises."
        />
        <meta property="og:title" content="Pi Analytic Solutions — Enterprise IT Consulting" />
        <meta
          property="og:description"
          content="Transforming ideas into scalable solutions. End-to-end technology consulting from concept to deployment."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <WhyUsSection />
      </main>
    </>
  );
}
