import { Helmet } from '@dr.pogodin/react-helmet';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import StatsSection from '@/components/home/StatsSection';
import WhyUsSection from '@/components/home/WhyUsSection';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Pi Analytic Solutions | Enterprise IT & Software Dev</title>
        <link rel="canonical" href="https://www.pianalyticsolutions.com/" />
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
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': 'Pi Analytic Solutions Private Limited',
            'alternateName': [
              'Pi Analytic Solutions',
              'Pi Analytics Solutions',
              'Pi Analytics Solution',
              'Pi Analytic Solution',
              'pianalyticsolutions'
            ],
            'url': 'https://www.pianalyticsolutions.com',
            'logo': 'https://www.pianalyticsolutions.com/assets/jii.jpeg',
            'contactPoint': {
              '@type': 'ContactPoint',
              'telephone': '+91-95997-44898',
              'contactType': 'customer service',
              'email': 'IshanAgrawal@pianalyticsolutions.com',
              'areaServed': 'IN',
              'availableLanguage': 'en',
            },
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': 'B 30 Ozone City, Mahua Khera 119-Aligarh',
              'addressLocality': 'Aligarh',
              'addressRegion': 'Uttar Pradesh',
              'postalCode': '202001',
              'addressCountry': 'IN',
            },
            'sameAs': [
              'https://linkedin.com/company/pianalytic',
            ],
          })}
        </script>
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
