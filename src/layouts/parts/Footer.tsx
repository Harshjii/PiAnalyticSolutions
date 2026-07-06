import { Link } from 'react-router-dom';

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
      {/* CTA section — Section 8 specifications */}
      <div
        className="footer-cta-section"
        style={{
          padding: '80px 48px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          maxWidth: '1440px',
          margin: '0 auto',
          width: '100%',
          borderBottom: '1px solid var(--hairline-subtle)',
        }}
      >
        <div className="kit-eyebrow kit-eyebrow--amber mb-4">
          Get Started
        </div>
        <h2
          className="font-section-heading text-white mb-6"
          style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700 }}
        >
          Let's Build Something Great Together
        </h2>
        <p
          className="font-body-text text-[var(--screen-secondary)] mb-8 max-w-3xl leading-relaxed"
          style={{ fontSize: '18px' }}
        >
          Whether you're a startup, a growing business, or a government organization, Pi Analytic Solutions is ready to turn your ideas into reliable digital solutions. Let's work together to build technology that supports your business goals.
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <Link
            to="/contact"
            className="font-btn-text inline-flex items-center justify-center bg-[var(--amber-primary)] text-[var(--void-900)] px-6 py-3.5 border border-[var(--amber-primary)] transition-all duration-300 hover:bg-transparent hover:text-white"
          >
            Contact Us Today
          </Link>
          <Link
            to="/contact"
            className="font-btn-text inline-flex items-center justify-center bg-transparent text-white px-6 py-3.5 border border-white transition-all duration-300 hover:bg-white hover:text-[var(--void-900)]"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>

      <div
        className="footer-directory"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '48px',
          padding: '64px 48px',
          maxWidth: '1440px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* Col 1: Logo & Info */}
        <div className="flex flex-col items-start gap-4">
          <Link to="/" aria-label="Pi Analytic Solutions — home">
            <img
              src="/assets/jii.jpeg"
              alt="Pi Analytic Solutions"
              style={{
                height: '48px',
                width: 'auto',
                objectFit: 'contain',
              }}
            />
          </Link>
          <p className="font-body text-sm text-[var(--screen-secondary)] mt-2">
            Building smart, secure, and scalable digital solutions for startups, businesses, and government organizations.
          </p>
          <p className="font-body text-xs text-[var(--screen-tertiary)] mt-2">
            📍 Aligarh, Uttar Pradesh, India
          </p>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h3 className="font-body text-xs font-semibold uppercase tracking-wider text-[var(--screen-tertiary)] mb-4">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3 list-none p-0 m-0">
            <li>
              <Link
                to="/"
                className="font-body text-sm text-[var(--screen-secondary)] hover:text-[var(--amber-primary)] transition-colors duration-200 no-underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="font-body text-sm text-[var(--screen-secondary)] hover:text-[var(--amber-primary)] transition-colors duration-200 no-underline"
              >
                About Us
              </Link>
            </li>
            <li>
              <a
                href="#services"
                className="font-body text-sm text-[var(--screen-secondary)] hover:text-[var(--amber-primary)] transition-colors duration-200 no-underline"
              >
                Services
              </a>
            </li>
            <li>
              <Link
                to="/contact"
                className="font-body text-sm text-[var(--screen-secondary)] hover:text-[var(--amber-primary)] transition-colors duration-200 no-underline"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="font-body text-sm text-[var(--screen-secondary)] hover:text-[var(--amber-primary)] transition-colors duration-200 no-underline"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Contact Information */}
        <div>
          <h3 className="font-body text-xs font-semibold uppercase tracking-wider text-[var(--screen-tertiary)] mb-4">
            Contact Information
          </h3>
          <ul className="flex flex-col gap-3 list-none p-0 m-0">
            <li className="font-body text-sm text-[var(--screen-secondary)]">
              📞 <a href="tel:+919599744898" className="text-inherit no-underline hover:text-[var(--amber-primary)] transition-colors duration-200">+91 95997 44898</a>
            </li>
            <li className="font-body text-sm text-[var(--screen-secondary)] break-all">
              📧 <a href="mailto:IshanAgrawal@pianalyticsolutions.com" className="text-inherit no-underline hover:text-[var(--amber-primary)] transition-colors duration-200">IshanAgrawal@pianalyticsolutions.com</a>
            </li>
            <li className="font-body text-sm text-[var(--screen-secondary)] mt-2">
              <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--screen-tertiary)] mb-2">Follow Us</span>
              <a
                href="https://linkedin.com/company/pianalytic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-inherit no-underline hover:text-[var(--amber-primary)] transition-colors duration-200"
              >
                LinkedIn <span className="text-[10px]">↗</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom strip */}
      <div
        style={{
          borderTop: '1px solid var(--hairline-subtle)',
          padding: '0 48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          minHeight: '64px',
          maxWidth: '1440px',
          margin: '0 auto',
          width: '100%',
        }}
        className="footer-bottom-strip flex-wrap gap-4 py-4 lg:py-0"
      >
        <span className="font-body text-xs text-[var(--screen-tertiary)]">
          © 2026 Pi Analytic Solutions Pvt Ltd
        </span>
        <span className="font-body text-xs text-[var(--screen-tertiary)]">
          All rights reserved
        </span>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-cta-section {
            padding: 56px 24px !important;
          }
          .footer-directory {
            padding: 48px 24px !important;
            gap: 36px !important;
          }
          .footer-bottom-strip {
            padding: 16px 24px !important;
          }
        }
      `}</style>
    </footer>
  );
}
