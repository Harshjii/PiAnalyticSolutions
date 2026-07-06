import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const pillars = [
  {
    num: '01',
    title: 'Customer-Focused Approach',
    body: 'We understand your business needs and deliver solutions that create real value.',
  },
  {
    num: '02',
    title: 'Customized Solutions',
    body: 'Every business is different, so we build technology according to your specific requirements.',
  },
  {
    num: '03',
    title: 'Modern Technologies',
    body: 'We use the latest technologies to build secure, scalable, and future-ready solutions.',
  },
  {
    num: '04',
    title: 'Quality Assurance',
    body: 'Every project goes through proper testing to ensure quality, reliability, and performance.',
  },
  {
    num: '05',
    title: 'On-Time Delivery',
    body: 'We value your time and complete projects within the committed timeline.',
  },
  {
    num: '06',
    title: 'Long-Term Support',
    body: 'We provide continuous support and maintenance even after project completion.',
  },
];

export default function WhyUsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      aria-label="Why choose Pi Analytic"
      className="border-t border-[var(--hairline-strong)] py-20 lg:py-28 px-6 md:px-12"
      style={{ background: 'var(--void-800)' }}
    >
      <div ref={ref} className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0.24, 1] }}
          className="why-header mb-16 max-w-3xl"
        >
          <div className="kit-eyebrow kit-eyebrow--amber mb-6">
            Why Choose Us
          </div>
          <h2 className="font-section-heading text-white mb-6">
            Why Choose Us
          </h2>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.32, 0.72, 0.24, 1] }}
              className="p-8 border border-[var(--hairline-subtle)] bg-[var(--void-900)] hover:border-[var(--amber-primary)] transition-all duration-300 flex flex-col justify-start group h-full"
            >
              <span className="font-mono text-xs text-[var(--amber-primary)] block mb-6 tracking-widest">
                PILLAR // {pillar.num}
              </span>
              <h3 className="font-service-heading text-white mb-4 transition-colors duration-300 group-hover:text-[var(--amber-primary)]">
                {pillar.title}
              </h3>
              <p className="font-body-text text-[var(--screen-secondary)] leading-relaxed">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
