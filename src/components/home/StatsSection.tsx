import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const stats = [
  { label: 'Projects Delivered', number: '200+', prefix: '' },
  { label: 'Enterprise Clients', number: '50+', prefix: '' },
  { label: 'Years Experience', number: '8+', prefix: '' },
  { label: 'Client Satisfaction', number: '98', unit: '%', prefix: '' },
];

function StatRow({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.32, 0.72, 0.24, 1] as const }}
      role="listitem"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '32px 0',
        borderBottom: index < stats.length - 1 ? '1px solid var(--hairline-subtle)' : 'none',
        position: 'relative',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '12px',
          fontWeight: 500,
          letterSpacing: 'var(--tracking-label)',
          textTransform: 'uppercase',
          color: 'var(--screen-tertiary)',
          lineHeight: 1.4,
          maxWidth: '160px',
          paddingTop: '8px',
          flexShrink: 0,
        }}
      >
        {stat.label}
      </span>
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '0.08em',
          flexShrink: 0,
          whiteSpace: 'nowrap',
          alignSelf: 'flex-start',
        }}
        role="text"
        aria-label={`${stat.label}: ${stat.number}${stat.unit ?? ''}`}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(64px, 11vw, 176px)',
            fontWeight: 300,
            letterSpacing: 'var(--tracking-display)',
            lineHeight: 0.95,
            color: 'var(--screen-primary)',
          }}
        >
          {stat.number}
        </span>
        {stat.unit && (
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(56px, 9vw, 144px)',
              fontWeight: 300,
              letterSpacing: 'var(--tracking-display)',
              lineHeight: 0.95,
              color: 'var(--screen-secondary)',
            }}
          >
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
      style={{
        background: 'var(--void-900)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--hairline-subtle)',
      }}
    >
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 48px',
          display: 'grid',
          gridTemplateRows: 'auto repeat(4, 1fr)',
          minHeight: '100vh',
        }}
        className="stats-inner"
      >
        {/* Headline row */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0.24, 1] as const }}
          style={{
            padding: '72px 0 48px',
            borderBottom: '1px solid var(--hairline-subtle)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: 'var(--tracking-label)',
              textTransform: 'uppercase',
              color: 'var(--amber-primary)',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span style={{ display: 'inline-block', width: '20px', height: '1px', background: 'var(--amber-primary)', flexShrink: 0 }} />
            By the Numbers
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4.5vw, 72px)',
              fontWeight: 300,
              letterSpacing: 'var(--tracking-display)',
              lineHeight: 1.05,
              color: 'var(--screen-primary)',
              maxWidth: '22ch',
            }}
          >
            Delivering results that speak for themselves
          </h2>
        </motion.div>

        {/* Stat rows */}
        {stats.map((stat, i) => (
          <StatRow key={stat.label} stat={stat} index={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-inner {
            padding: 0 20px !important;
            min-height: auto !important;
            grid-template-rows: auto repeat(4, auto) !important;
          }
        }
        @media (max-width: 480px) {
          .stats-inner { padding: 0 16px !important; }
        }
      `}</style>
    </section>
  );
}
