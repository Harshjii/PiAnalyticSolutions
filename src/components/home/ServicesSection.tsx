import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const services = [
  { name: 'Software Development', desc: 'Custom enterprise applications built for scale' },
  { name: 'AI / ML Solutions', desc: 'Intelligent systems that learn and adapt' },
  { name: 'Web Development', desc: 'High-performance web platforms and portals' },
  { name: 'Mobile App Development', desc: 'Native and cross-platform mobile experiences' },
  { name: 'Data Analytics', desc: 'Insights-driven decision making at every level' },
  { name: 'Cloud Solutions', desc: 'Scalable cloud architecture and migration' },
  { name: 'IT Consulting + Project Management', desc: 'Strategic guidance from concept to delivery' },
];

function ServiceRow({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.32, 0.72, 0.24, 1] as const }}
    >
      <Link
        to="/contact"
        aria-label={`${service.name} — enquire`}
        className="svc-row-link"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          padding: '22px 20px',
          borderBottom: '1px solid var(--hairline-subtle)',
          textDecoration: 'none',
          color: 'inherit',
          transition: 'background-color 200ms var(--ease-cinema)',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.backgroundColor = 'var(--void-800)';
          const name = el.querySelector('.svc-name') as HTMLElement;
          const arrow = el.querySelector('.svc-arrow') as HTMLElement;
          if (name) name.style.color = 'var(--screen-primary)';
          if (arrow) { arrow.style.color = 'var(--amber-primary)'; arrow.style.transform = 'translate(3px, -3px)'; }
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.backgroundColor = 'transparent';
          const name = el.querySelector('.svc-name') as HTMLElement;
          const arrow = el.querySelector('.svc-arrow') as HTMLElement;
          if (name) name.style.color = 'var(--screen-secondary)';
          if (arrow) { arrow.style.color = 'var(--screen-tertiary)'; arrow.style.transform = 'none'; }
        }}
      >
        <span
          className="svc-name"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(18px, 2.2vw, 32px)',
            fontWeight: 300,
            letterSpacing: 'var(--tracking-display)',
            lineHeight: 1.1,
            color: 'var(--screen-secondary)',
            transition: 'color 200ms var(--ease-cinema)',
          }}
        >
          {service.name}
        </span>
        <span
          className="svc-arrow"
          aria-hidden="true"
          style={{
            fontSize: '20px',
            lineHeight: 1,
            color: 'var(--screen-tertiary)',
            flexShrink: 0,
            transition: 'color 200ms var(--ease-cinema), transform 200ms var(--ease-cinema)',
            display: 'inline-block',
            marginTop: '-2px',
          }}
        >
          ↗
        </span>
      </Link>
    </motion.li>
  );
}

export default function ServicesSection() {
  const headlineRef = useRef<HTMLDivElement>(null);
  const headlineInView = useInView(headlineRef, { once: true, margin: '-80px' });

  return (
    <section
      aria-label="Our services"
      style={{
        background: 'var(--void-900)',
        display: 'grid',
        gridTemplateColumns: '5fr 7fr',
        padding: '100px 0 120px',
      }}
      className="services-section"
    >
      {/* LEFT: Editorial column */}
      <div
        style={{
          paddingLeft: '48px',
          paddingRight: '0',
          display: 'grid',
          gridTemplateRows: 'auto 1fr',
          alignContent: 'start',
        }}
        className="services-left"
      >
        {/* Headline row */}
        <motion.div
          ref={headlineRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headlineInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0.24, 1] as const }}
          style={{ paddingBottom: 0, paddingRight: '48px' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: 'var(--tracking-label)',
              textTransform: 'uppercase',
              color: 'var(--amber-primary)',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span style={{ display: 'inline-block', width: '20px', height: '1px', background: 'var(--amber-primary)', flexShrink: 0 }} />
            What We Do
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 5.5vw, 88px)',
              fontWeight: 300,
              letterSpacing: 'var(--tracking-display)',
              lineHeight: 0.95,
              color: 'var(--screen-primary)',
            }}
          >
            Our<br />Services
          </h2>
        </motion.div>

        {/* Body copy — inset ~33% */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={headlineInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.32, 0.72, 0.24, 1] as const }}
          style={{
            paddingLeft: '33%',
            paddingRight: '48px',
            paddingTop: '56px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '32px',
          }}
          className="services-body-block"
        >
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
            From AI-powered platforms to cloud infrastructure — we cover the full technology stack so you can focus on what matters most.
          </p>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: 'var(--tracking-label)',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: 'var(--screen-secondary)',
              borderBottom: '1px solid var(--hairline-subtle)',
              paddingBottom: '3px',
              transition: 'color 200ms var(--ease-cinema), border-color 200ms var(--ease-cinema)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = 'var(--amber-primary)';
              el.style.borderColor = 'var(--amber-primary)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = 'var(--screen-secondary)';
              el.style.borderColor = 'var(--hairline-subtle)';
            }}
          >
            Get in touch →
          </Link>
        </motion.div>
      </div>

      {/* RIGHT: Service ledger */}
      <div
        style={{
          borderLeft: '1px solid var(--hairline-subtle)',
          paddingTop: 'clamp(160px, 18vw, 280px)',
          display: 'flex',
          flexDirection: 'column',
        }}
        className="services-right"
      >
        <ul
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            borderTop: '1px solid var(--hairline-subtle)',
            width: '100%',
          }}
          aria-label="Service offerings"
        >
          {services.map((service, i) => (
            <ServiceRow key={service.name} service={service} index={i} />
          ))}
        </ul>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-section {
            grid-template-columns: 1fr !important;
            padding: 48px 0 64px !important;
          }
          .services-left {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .services-body-block {
            padding-left: 0 !important;
            padding-right: 0 !important;
            padding-top: 32px !important;
          }
          .services-right {
            border-left: none !important;
            border-top: 1px solid var(--hairline-strong) !important;
            padding-top: 0 !important;
            margin-top: 48px !important;
          }
          .svc-row-link {
            padding: 18px 20px !important;
          }
        }
        @media (min-width: 769px) {
          .svc-row-link {
            padding: 28px 48px 28px 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
