import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const clients = [
  {
    name: 'Indian Railways',
    type: 'Government Enterprise',
  },
  {
    name: 'Government of Andhra Pradesh',
    type: 'State Government Projects',
  },
  {
    name: 'Government Projects',
    type: 'National Digital Infrastructure',
  },
  {
    name: 'International Clients',
    type: 'Australia, Europe & North America',
  },
];

export default function TrustedBySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      aria-label="Trusted by Organizations"
      className="border-t border-[var(--hairline-strong)] py-20 lg:py-28 px-6 md:px-12"
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
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.32, 0.72, 0.24, 1] }}
                className="p-8 border border-[var(--hairline-subtle)] bg-[var(--void-900)] hover:border-[var(--amber-primary)] transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="flex justify-between items-start mb-6">
                  {/* Glowing node point */}
                  <span className="w-2.5 h-2.5 bg-[var(--amber-primary)] relative flex">
                    <span className="animate-ping absolute inline-flex h-full w-full bg-[var(--amber-primary)] opacity-75"></span>
                  </span>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
