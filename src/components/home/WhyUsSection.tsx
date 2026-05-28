import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const pillars = [
  {
    num: '01',
    title: 'Proven Expertise',
    body: 'Over 8 years delivering complex technology solutions across industries. Our team brings deep domain knowledge and hands-on experience with the latest technologies.',
  },
  {
    num: '02',
    title: 'End-to-End Solutions',
    body: 'From strategy and architecture to development, deployment, and ongoing support — we own the full lifecycle so you never have to stitch together multiple vendors.',
  },
  {
    num: '03',
    title: 'Agile Delivery',
    body: 'Iterative development with transparent communication at every sprint. We adapt quickly to changing requirements and deliver working software on schedule.',
  },
];

export default function WhyUsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      aria-label="Why choose Pi Analytic"
      style={{
        borderTop: '1px solid var(--hairline-strong)',
        background: 'var(--void-800)',
      }}
    >
      {/* Section header */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.32, 0.72, 0.24, 1] as const }}
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '72px 48px 0',
          borderBottom: '1px solid var(--hairline-subtle)',
          paddingBottom: '48px',
        }}
        className="why-header"
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
          Why Choose Us
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
          The partner you need to build what matters
        </h2>
      </motion.div>

      {/* Pillars grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          maxWidth: '1440px',
          margin: '0 auto',
        }}
        className="pillars-grid"
      >
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.num}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.32, 0.72, 0.24, 1] as const }}
            style={{
              padding: '56px 48px',
              borderRight: i < pillars.length - 1 ? '1px solid var(--hairline-subtle)' : 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
            className="pillar-col"
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '11px',
                fontWeight: 300,
                letterSpacing: 'var(--tracking-label)',
                textTransform: 'uppercase',
                color: 'var(--amber-primary)',
                lineHeight: 1,
              }}
            >
              {pillar.num}
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '22px',
                fontWeight: 300,
                letterSpacing: 'var(--tracking-display)',
                lineHeight: 1.1,
                color: 'var(--screen-primary)',
              }}
            >
              {pillar.title}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: 1.5,
                color: 'var(--screen-secondary)',
                maxWidth: '38ch',
              }}
            >
              {pillar.body}
            </p>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .why-header { padding: 48px 24px 32px !important; }
          .pillars-grid { grid-template-columns: 1fr !important; }
          .pillar-col {
            border-right: none !important;
            border-bottom: 1px solid var(--hairline-subtle) !important;
            padding: 36px 24px !important;
          }
          .pillar-col:last-child { border-bottom: none !important; }
        }
        @media (max-width: 480px) {
          .why-header { padding: 40px 20px 28px !important; }
          .pillar-col { padding: 28px 20px !important; }
        }
      `}</style>
    </section>
  );
}
