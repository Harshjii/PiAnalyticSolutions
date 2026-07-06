import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const stats = [
  { label: 'Projects Delivered', number: '50+', prefix: '' },
  { label: 'Client Retention', number: '95', unit: '%', prefix: '' },
  { label: 'Years Leadership Experience', number: '35+', prefix: '' },
  { label: 'Founded', number: '2025', prefix: '' },
];

function StatRow({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.32, 0.72, 0.24, 1] }}
      role="listitem"
      className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 sm:py-8 gap-4 sm:gap-0 border-b border-[var(--hairline-subtle)]"
    >
      <span className="font-body text-sm font-semibold uppercase tracking-wider text-[var(--screen-secondary)] max-w-xs">
        {stat.label}
      </span>
      <div
        className="flex items-baseline gap-1"
        role="text"
        aria-label={`${stat.label}: ${stat.number}${stat.unit ?? ''}`}
      >
        <span className="font-display font-bold text-6xl md:text-7xl lg:text-8xl tracking-tight text-white">
          {stat.number}
        </span>
        {stat.unit && (
          <span className="font-display font-bold text-5xl md:text-6xl text-[var(--screen-tertiary)]">
            {stat.unit}
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      aria-label="Key achievements"
      className="py-14 lg:py-18 px-6 md:px-12 border-t border-[var(--hairline-subtle)]"
      style={{ background: 'var(--void-900)' }}
    >
      <div ref={ref} className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0.24, 1] }}
          className="mb-16 max-w-3xl"
        >
          <div className="kit-eyebrow kit-eyebrow--amber mb-6">
            Our Accomplishments
          </div>
          <h2 className="font-section-heading text-white mb-6">
            Our Achievements
          </h2>
        </motion.div>

        {/* Stats List */}
        <div className="flex flex-col border-t border-[var(--hairline-subtle)]">
          {stats.map((stat, i) => (
            <StatRow key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
