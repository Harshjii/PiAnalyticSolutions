import { Helmet } from '@dr.pogodin/react-helmet';
import { MapPin, Phone, Mail, Building2 } from 'lucide-react';
import StaticMap from '@/components/StaticMap';

const ADDRESS = 'B 30 Ozone City, Mahua Khera 119-Aligarh, Uttar Pradesh, India, 202001';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact — Pi Analytic Solutions</title>
        <meta
          name="description"
          content="Get in touch with Pi Analytic Solutions. Visit us at B 30 Ozone City, Mahua Khera 119-Aligarh, Uttar Pradesh, India."
        />
      </Helmet>

      <main id="main-content">
        {/* Page Header */}
        <section
          style={{
            background: 'hsl(var(--background))',
            borderBottom: '1px solid hsl(var(--border))',
            padding: 'clamp(48px, 8vw, 80px) 0 clamp(36px, 6vw, 60px)',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'hsl(var(--primary))',
                marginBottom: '16px',
              }}
            >
              Get In Touch
            </p>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 700,
                color: 'hsl(var(--foreground))',
                lineHeight: 1.1,
                marginBottom: '20px',
              }}
            >
              Contact Us
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.1rem',
                color: 'hsl(var(--muted-foreground))',
                maxWidth: '560px',
                lineHeight: 1.7,
              }}
            >
              We'd love to hear from you. Reach out to discuss your project or visit us at our registered office.
            </p>
          </div>
        </section>

        {/* Contact Details + Map */}
        <section style={{ padding: 'clamp(40px, 7vw, 80px) 0', background: 'hsl(var(--background))' }}>
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '0 24px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '60px',
              alignItems: 'start',
            }}
          >
            {/* Left: Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'hsl(var(--foreground))',
                  marginBottom: '8px',
                }}
              >
                Our Office
              </h2>

              {/* Company Name */}
              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  padding: '20px 24px',
                  background: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '12px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: 'hsl(var(--primary) / 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Building2 size={18} style={{ color: 'hsl(var(--primary))' }} />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'hsl(var(--muted-foreground))',
                      marginBottom: '4px',
                    }}
                  >
                    Company
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: 'hsl(var(--foreground))',
                      lineHeight: 1.4,
                    }}
                  >
                    Pi Analytic Solutions Private Limited
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8rem',
                      color: 'hsl(var(--muted-foreground))',
                      marginTop: '4px',
                    }}
                  >
                    CIN: U62090UP2025PTC234247
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8rem',
                      color: 'hsl(var(--muted-foreground))',
                      marginTop: '2px',
                    }}
                  >
                    GSTIN: 09AAQCP2600J1Z8
                  </p>
                </div>
              </div>

              {/* Address */}
              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  padding: '20px 24px',
                  background: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '12px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: 'hsl(var(--primary) / 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={18} style={{ color: 'hsl(var(--primary))' }} />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'hsl(var(--muted-foreground))',
                      marginBottom: '4px',
                    }}
                  >
                    Registered Address
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      color: 'hsl(var(--foreground))',
                      lineHeight: 1.6,
                    }}
                  >
                    B 30 Ozone City, Mahua Khera 119
                    <br />
                    Aligarh, Uttar Pradesh
                    <br />
                    India — 202001
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      marginTop: '10px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'hsl(var(--primary))',
                      textDecoration: 'none',
                      borderBottom: '1px solid hsl(var(--primary) / 0.4)',
                      paddingBottom: '1px',
                    }}
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              {/* Email */}
              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  padding: '20px 24px',
                  background: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '12px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: 'hsl(var(--primary) / 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={18} style={{ color: 'hsl(var(--primary))' }} />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'hsl(var(--muted-foreground))',
                      marginBottom: '4px',
                    }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:IshanAgrawal@pianalyticsolutions.com"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      color: 'hsl(var(--foreground))',
                      textDecoration: 'none',
                    }}
                  >
                    IshanAgrawal@pianalyticsolutions.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  padding: '20px 24px',
                  background: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '12px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: 'hsl(var(--primary) / 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={18} style={{ color: 'hsl(var(--primary))' }} />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'hsl(var(--muted-foreground))',
                      marginBottom: '4px',
                    }}
                  >
                    Phone
                  </p>
                  <a
                    href="tel:+919599744898"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      color: 'hsl(var(--foreground))',
                      textDecoration: 'none',
                    }}
                  >
                    +91 95997 44898
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Map */}
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'hsl(var(--foreground))',
                  marginBottom: '24px',
                }}
              >
                Find Us
              </h2>
              <StaticMap
                location={ADDRESS}
                height={480}
                zoom={15}
                className="shadow-lg"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
