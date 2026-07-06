import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const IndianRailwaysLogo = () => (
  <svg className="w-12 h-12 text-[var(--amber-primary)] opacity-80 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="3" strokeDasharray="6 3" />
    <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="2" />
    <path d="M30 65 L70 65 M35 55 L65 55 M40 45 L60 45" stroke="currentColor" strokeWidth="2" />
    <path d="M42 35 L58 35 M50 25 V65" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const AndhraPradeshLogo = () => (
  <svg className="w-12 h-12 text-[var(--amber-primary)] opacity-80 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="3" />
    <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
    {Array.from({ length: 16 }).map((_, i) => {
      const angle = (i * 360) / 16;
      return (
        <line
          key={i}
          x1="50"
          y1="16"
          x2="50"
          y2="24"
          transform={`rotate(${angle} 50 50)`}
          stroke="currentColor"
          strokeWidth="2"
        />
      );
    })}
    <circle cx="50" cy="50" r="16" stroke="currentColor" strokeWidth="2" />
    <circle cx="50" cy="50" r="8" fill="currentColor" />
  </svg>
);

const GovtProjectsLogo = () => (
  <svg className="w-12 h-12 text-[var(--amber-primary)] opacity-80 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 12 L85 28 V60 C85 78 70 90 50 94 C30 90 15 78 15 60 V28 L50 12 Z" stroke="currentColor" strokeWidth="3" fill="none" />
    <circle cx="50" cy="46" r="18" stroke="currentColor" strokeWidth="2" />
    {Array.from({ length: 8 }).map((_, i) => {
      const angle = (i * 360) / 8;
      return (
        <line
          key={i}
          x1="50"
          y1="28"
          x2="50"
          y2="46"
          transform={`rotate(${angle} 50 46)`}
          stroke="currentColor"
          strokeWidth="1.5"
        />
      );
    })}
    <path d="M35 72 L65 72 M42 78 L58 78" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const InternationalClientsLogo = () => (
  <svg className="w-12 h-12 text-[var(--amber-primary)] opacity-80 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="2" />
    <ellipse cx="50" cy="50" rx="42" ry="16" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="50" cy="50" rx="16" ry="42" stroke="currentColor" strokeWidth="1.5" />
    <line x1="50" y1="8" x2="50" y2="92" stroke="currentColor" strokeWidth="1.5" />
    <line x1="8" y1="50" x2="92" y2="50" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="50" cy="20" r="4" fill="currentColor" />
    <circle cx="50" cy="80" r="4" fill="currentColor" />
    <circle cx="20" cy="50" r="4" fill="currentColor" />
    <circle cx="80" cy="50" r="4" fill="currentColor" />
    <circle cx="50" cy="50" r="5" fill="currentColor" />
  </svg>
);

const clients = [
  {
    name: 'Indian Railways',
    type: 'Government Enterprise',
    logo: IndianRailwaysLogo,
  },
  {
    name: 'Government of Andhra Pradesh',
    type: 'State Government Projects',
    logo: AndhraPradeshLogo,
  },
  {
    name: 'Government Projects',
    type: 'National Digital Infrastructure',
    logo: GovtProjectsLogo,
  },
  {
    name: 'International Clients',
    type: 'Australia, Europe & North America',
    logo: InternationalClientsLogo,
  },
];

export default function TrustedBySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      aria-label="Trusted by Organizations"
      className="border-t border-[var(--hairline-strong)] py-14 lg:py-18 px-6 md:px-12"
      style={{ background: 'var(--void-800)' }}
    >
      <div ref={ref} className="max-w-[1440px] mx-auto">
        {/* Split layout: Text on left, Grid of Clients on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0.24, 1] }}
            className="lg:col-span-5"
          >
            <div className="kit-eyebrow kit-eyebrow--amber mb-6">
              Our Partnerships
            </div>
            <h2 className="font-section-heading text-white mb-6">
              Trusted by Businesses & Government Organizations
            </h2>
            <div className="border-t border-[var(--hairline-subtle)] pt-6">
              <p className="font-body-text text-[var(--screen-secondary)] leading-relaxed">
                We proudly work with startups, private businesses, government organizations, and international clients by delivering reliable and innovative technology solutions.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {clients.map((client, i) => {
              const LogoComponent = client.logo;
              return (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.32, 0.72, 0.24, 1] }}
                  className="p-8 border border-[var(--hairline-subtle)] bg-[var(--void-900)] hover:border-[var(--amber-primary)] transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="flex justify-between items-start mb-6">
                    <LogoComponent />
                    <span className="font-mono text-[10px] text-[var(--screen-tertiary)] tracking-wider">
                      PARTNER // 0{i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-service-heading text-white mb-2 transition-colors duration-300 group-hover:text-[var(--amber-primary)]">
                      {client.name}
                    </h3>
                    <p className="text-sm font-body text-[var(--screen-tertiary)] uppercase tracking-wider">
                      {client.type}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
