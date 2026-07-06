import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'var(--void-900)',
          borderBottom: '1px solid var(--hairline-subtle)',
          height: '64px',
        }}
        role="navigation"
        aria-label="Primary navigation"
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 48px',
            height: '64px',
            maxWidth: '1440px',
            margin: '0 auto',
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            aria-label="Pi Analytic Solutions — home"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            <img
              src="/assets/jii.jpeg"
              alt="Pi Analytic Solutions"
              style={{
                height: '44px',
                width: 'auto',
                objectFit: 'contain',
                objectPosition: 'left center',
                flexShrink: 0,
              }}
            />
          </Link>

          {/* Desktop nav links */}
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
            className="nav-desktop-links"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  aria-current={location.pathname === link.href ? 'page' : undefined}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: 'var(--tracking-label)',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    color: location.pathname === link.href
                      ? 'var(--amber-primary)'
                      : 'var(--screen-secondary)',
                    transition: 'color 200ms var(--ease-cinema)',
                  }}
                  onMouseEnter={(e) => {
                    if (location.pathname !== link.href) {
                      (e.target as HTMLElement).style.color = 'var(--screen-primary)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== link.href) {
                      (e.target as HTMLElement).style.color = 'var(--screen-secondary)';
                    }
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <Link
            to="/contact"
            className="nav-cta-btn"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: 'var(--tracking-label)',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: 'var(--void-900)',
              background: 'var(--amber-primary)',
              border: '1px solid var(--amber-primary)',
              padding: '10px 20px',
              borderRadius: '0px',
              transition: 'opacity 200ms var(--ease-cinema)',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
          >
            Book Consultation
          </Link>

          {/* Mobile toggle */}
          <button
            className="nav-mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              color: 'var(--screen-primary)',
            }}
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="1.5" />
                <line x1="20" y1="4" x2="4" y2="20" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <line x1="3" y1="7" x2="21" y2="7" stroke="currentColor" strokeWidth="1.5" />
                <line x1="3" y1="13" x2="21" y2="13" stroke="currentColor" strokeWidth="1.5" />
                <line x1="3" y1="19" x2="15" y2="19" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0.24, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 49,
              background: 'var(--void-900)',
              display: 'flex',
              flexDirection: 'column',
              padding: '80px 32px 48px',
            }}
          >
            <nav aria-label="Mobile navigation">
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.4, ease: [0.32, 0.72, 0.24, 1] }}
                    style={{ borderBottom: '1px solid var(--hairline-subtle)' }}
                  >
                    <Link
                      to={link.href}
                      style={{
                        display: 'block',
                        padding: '20px 0',
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(28px, 7vw, 48px)',
                        fontWeight: 300,
                        letterSpacing: 'var(--tracking-display)',
                        textDecoration: 'none',
                        color: location.pathname === link.href
                          ? 'var(--amber-primary)'
                          : 'var(--screen-primary)',
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                style={{ marginTop: '40px' }}
              >
                <Link
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    fontWeight: 500,
                    letterSpacing: 'var(--tracking-label)',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    color: 'var(--void-900)',
                    background: 'var(--amber-primary)',
                    padding: '14px 32px',
                    borderRadius: '0px',
                  }}
                >
                  Book Consultation
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop-links { display: none !important; }
          .nav-cta-btn { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
        }
        @media (max-width: 600px) {
          .nav-strip-inner { padding: 0 20px !important; }
        }
      `}</style>
    </>
  );
}
