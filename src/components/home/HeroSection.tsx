import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function HeroSection() {
  return (
    <section
      aria-label="Pi Analytic Solutions — hero"
      style={{
        display: 'grid',
        gridTemplateColumns: '55fr 45fr',
        minHeight: 'calc(100vh - 64px)',
      }}
    >
      {/* LEFT: Text column */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '64px 56px 64px 48px',
          borderRight: '1px solid var(--hairline-subtle)',
        }}
        className="hero-text-col"
      >
        {/* Zone A: Eyebrow + Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0.24, 1] }}
          style={{ flexShrink: 0 }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: 'var(--tracking-label)',
              textTransform: 'uppercase',
              color: 'var(--screen-tertiary)',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '16px',
                height: '1px',
                background: 'var(--amber-primary)',
                flexShrink: 0,
              }}
            />
            Enterprise IT Consulting
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px, 6.5vw, 104px)',
              fontWeight: 300,
              letterSpacing: 'var(--tracking-display)',
              lineHeight: 0.95,
              color: 'var(--screen-primary)',
            }}
          >
            Transforming<br />Ideas Into<br />Scalable<br />Solutions
          </h1>
        </motion.div>

        {/* Zone B: Structural void */}
        <div style={{ flex: 1, minHeight: '80px' }} role="presentation" aria-hidden="true" />

        {/* Zone C: Body + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.32, 0.72, 0.24, 1] }}
          style={{
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '1px',
              background: 'var(--hairline-subtle)',
              marginBottom: '32px',
            }}
            role="presentation"
            aria-hidden="true"
          />
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: 1.5,
              color: 'var(--screen-secondary)',
              maxWidth: '52ch',
              marginBottom: '16px',
            }}
          >
            Pi Analytic Solutions builds enterprise-grade software, AI/ML systems, and digital infrastructure for startups and global enterprises.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: 1.5,
              color: 'var(--screen-secondary)',
              maxWidth: '52ch',
            }}
          >
            From concept to deployment — we deliver end-to-end technology solutions that scale with your ambition.
          </p>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: 'var(--tracking-label)',
              textTransform: 'uppercase',
              textDecoration: 'none',
              background: 'var(--amber-primary)',
              color: 'var(--void-900)',
              border: '1px solid var(--amber-primary)',
              padding: '14px 32px',
              borderRadius: '0px',
              marginTop: '32px',
              alignSelf: 'flex-start',
              transition: 'opacity 200ms var(--ease-cinema)',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
          >
            Book a Consultation
          </Link>
        </motion.div>
      </div>

      {/* RIGHT: Image column */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.32, 0.72, 0.24, 1] }}
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'var(--void-700)',
          minHeight: 'calc(100vh - 64px)',
        }}
        className="hero-image-col"
        role="img"
        aria-label="Technology data visualization"
      >
        <img
          src="/assets/images.png"
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            borderRadius: '0px',
            position: 'absolute',
            inset: 0,
          }}
        />
        {/* Subtle dark overlay for depth */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 100%)',
          }}
          aria-hidden="true"
        />
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          section[aria-label="Pi Analytic Solutions — hero"] {
            grid-template-columns: 1fr !important;
            grid-template-rows: 56vw auto !important;
            min-height: auto !important;
          }
          .hero-image-col {
            min-height: 56vw !important;
            height: 56vw !important;
            order: -1 !important;
            border-bottom: 1px solid var(--hairline-subtle) !important;
          }
          .hero-text-col {
            border-right: none !important;
            padding: 48px 24px 56px !important;
          }
        }
        @media (max-width: 600px) {
          .hero-text-col { padding: 40px 20px 48px !important; }
          section[aria-label="Pi Analytic Solutions — hero"] {
            grid-template-rows: 64vw auto !important;
          }
          .hero-image-col {
            min-height: 64vw !important;
            height: 64vw !important;
          }
        }
      `}</style>
    </section>
  );
}
