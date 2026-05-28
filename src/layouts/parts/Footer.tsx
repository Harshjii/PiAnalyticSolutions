import { Link } from 'react-router-dom';

const contactLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/pianalytic',
    external: true,
  },
  {
    label: '+91 95997 44898',
    href: 'tel:+919599744898',
    external: false,
  },
  {
    label: 'IshanAgrawal@pianalyticsolutions.com',
    href: 'mailto:IshanAgrawal@pianalyticsolutions.com',
    external: false,
  },
];

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        background: 'var(--void-900)',
        borderTop: '1px solid var(--hairline-subtle)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top band: logo left / contact links right */}
      <div
        className="footer-top-band"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: '48px 48px 0',
          maxWidth: '1440px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          aria-label="Pi Analytic Solutions — home"
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          <img
            src="/assets/jii.jpeg"
            alt="Pi Analytic Solutions"
            style={{
              height: '56px',
              width: 'auto',
              objectFit: 'contain',
              objectPosition: 'left center',
              flexShrink: 0,
            }}
          />
        </Link>

        {/* Contact links panel */}
        <nav
          aria-label="Contact and social links"
          className="footer-contact-panel"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            minWidth: '280px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: 'var(--tracking-label)',
              textTransform: 'uppercase',
              color: 'var(--screen-tertiary)',
              marginBottom: '12px',
            }}
          >
            Stay in touch
          </p>
          <ul
            style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              width: '100%',
              borderTop: '1px solid var(--hairline-subtle)',
            }}
          >
            {contactLinks.map((link) => (
              <li
                key={link.href}
                style={{ borderBottom: '1px solid var(--hairline-subtle)' }}
              >
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '24px',
                      padding: '13px 0',
                      textDecoration: 'none',
                      color: 'var(--screen-secondary)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: 1,
                      transition: 'color 200ms var(--ease-cinema)',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--screen-primary)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--screen-secondary)'; }}
                  >
                    <span>{link.label}</span>
                    <span
                      aria-hidden="true"
                      style={{
                        fontSize: '13px',
                        color: 'var(--screen-tertiary)',
                        flexShrink: 0,
                        transition: 'color 200ms var(--ease-cinema), transform 200ms var(--ease-cinema)',
                        display: 'inline-block',
                      }}
                    >
                      ↗
                    </span>
                  </a>
                ) : (
                  <a
                    href={link.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '24px',
                      padding: '13px 0',
                      textDecoration: 'none',
                      color: 'var(--screen-secondary)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: 1,
                      transition: 'color 200ms var(--ease-cinema)',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--screen-primary)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--screen-secondary)'; }}
                  >
                    <span>{link.label}</span>
                    <span aria-hidden="true" style={{ fontSize: '13px', color: 'var(--screen-tertiary)' }}>↗</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* CTA section — oversized invitation */}
      <div
        className="footer-cta-section"
        style={{
          padding: '96px 48px 80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          maxWidth: '1440px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '13px',
            fontWeight: 400,
            color: 'var(--screen-tertiary)',
            marginBottom: '12px',
            lineHeight: 1.5,
          }}
        >
          Let's build something great together
        </p>
        <Link
          to="/contact"
          aria-label="Ready to build something great — open contact form"
          style={{ textDecoration: 'none', display: 'block' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(64px, 9vw, 144px)',
              fontWeight: 300,
              letterSpacing: 'var(--tracking-display)',
              lineHeight: 0.95,
              color: 'var(--screen-primary)',
              transition: 'color 400ms var(--ease-cinema)',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--amber-primary)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--screen-primary)'; }}
          >
            Ready to build<br />something great?
          </h2>
        </Link>
      </div>

      {/* Bottom strip */}
      <div
        style={{
          borderTop: '1px solid var(--hairline-subtle)',
          padding: '0 48px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          alignItems: 'center',
          minHeight: '52px',
          maxWidth: '1440px',
          margin: '0 auto',
          width: '100%',
        }}
        className="footer-bottom-strip"
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            fontWeight: 400,
            color: 'var(--screen-tertiary)',
            padding: '14px 0',
          }}
        >
          © 2026 Pi Analytic Solutions Pvt Ltd
        </span>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            fontWeight: 400,
            color: 'var(--screen-tertiary)',
            padding: '14px 0',
          }}
        >
          <Link
            to="/contact"
            style={{
              color: 'var(--screen-tertiary)',
              textDecoration: 'none',
              transition: 'color 200ms var(--ease-cinema)',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--screen-secondary)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--screen-tertiary)'; }}
          >
            Privacy Policy
          </Link>
        </span>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            fontWeight: 400,
            color: 'var(--screen-tertiary)',
            padding: '14px 0 14px 24px',
            borderLeft: '1px solid var(--hairline-subtle)',
            textAlign: 'right',
          }}
        >
          All rights reserved
        </span>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-top-band {
            flex-direction: column !important;
            gap: 40px !important;
            padding: 40px 24px 0 !important;
          }
          .footer-contact-panel {
            align-items: flex-start !important;
            width: 100% !important;
            min-width: 0 !important;
          }
          .footer-cta-section {
            padding: 56px 24px 48px !important;
          }
          .footer-bottom-strip {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: auto auto !important;
            padding: 0 24px !important;
          }
        }
        @media (max-width: 480px) {
          .footer-top-band { padding: 32px 20px 0 !important; }
          .footer-cta-section { padding: 48px 20px 40px !important; }
          .footer-bottom-strip { padding: 0 20px !important; }
        }
      `}</style>
    </footer>
  );
}
