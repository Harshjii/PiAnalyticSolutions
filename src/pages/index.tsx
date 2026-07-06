import { Helmet } from '@dr.pogodin/react-helmet';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import ProcessSection from '@/components/home/ProcessSection';
import TrustedBySection from '@/components/home/TrustedBySection';
import StatsSection from '@/components/home/StatsSection';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Pi Analytic Solutions | Transforming Ideas into Smart Digital Solutions</title>
        <link rel="canonical" href="https://www.pianalyticsolutions.com/" />
        <meta
          name="description"
          content="Pi Analytic Solutions helps startups, businesses, and government organizations build smart, secure, and scalable digital solutions. Custom Software Development, AI, ERP, BPM, Geo-Tagging, and Digital Transformation."
        />
        <meta property="og:title" content="Pi Analytic Solutions — Transforming Ideas into Smart Digital Solutions" />
        <meta
          property="og:description"
          content="We build reliable, secure, and scalable digital solutions that improve productivity, simplify operations, and support long-term business growth."
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
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <ProcessSection />
        <TrustedBySection />
        <StatsSection />
      </main>
    </>
  );
}
