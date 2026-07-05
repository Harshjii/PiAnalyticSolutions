import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const principles = [
  {
    label: 'Mission',
    body: 'We transform complex business challenges into elegant, scalable technology solutions — delivering measurable outcomes for startups and global enterprises alike.',
  },
  {
    label: 'Approach',
    body: 'Every engagement begins with deep discovery. We map your systems, understand your constraints, and architect solutions that grow with your business — not against it.',
  },
  {
    label: 'Quality',
    body: 'We hold our work to enterprise standards regardless of project size. Rigorous testing, clean architecture, and thorough documentation are non-negotiable.',
  },
  {
    label: 'Partnership',
    body: 'We operate as an extension of your team — transparent communication, shared ownership of outcomes, and a long-term commitment to your success.',
  },
];

const services = [
  'Custom Software Development',
  'AI / ML Systems',
  'Cloud Infrastructure & DevOps',
  'Data Engineering & Analytics',
  'Digital Transformation Consulting',
  'Enterprise System Integration',
];

const stats = [
  { label: 'Projects Delivered', value: '50', unit: '+' },
  { label: 'Client Retention', value: '95', unit: '%' },
  { label: 'Years of Expertise', value: '8', unit: '+' },
];

const ease = [0.32, 0.72, 0.24, 1] as const;

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About — Pi Analytic Solutions</title>
        <link rel="canonical" href="https://www.pianalyticsolutions.com/about" />
        <meta
          name="description"
          content="Pi Analytic Solutions is an enterprise IT consulting and software development firm based in Aligarh, India. We transform ideas into scalable technology solutions."
        />
        <meta property="og:title" content="About — Pi Analytic Solutions" />
        <meta
          property="og:description"
          content="Enterprise software, AI/ML, cloud infrastructure, and digital transformation — delivered with precision."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main id="main-content">

        {/* ── PAGE INTRO ── */}
        <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 pt-12 md:pt-20" aria-label="About Pi Analytic Solutions">

          {/* Opening rule */}
          <div className="w-full h-px bg-[var(--hairline-strong)] mb-8" role="presentation" />

          {/* Eyebrow row */}
          <div className="flex items-center justify-between pb-8 border-b border-[var(--hairline-subtle)]">
            <p className="flex items-center gap-2.5 text-[11px] font-medium tracking-widest uppercase text-[var(--amber-primary)]">
              <span className="inline-block w-5 h-px bg-[var(--amber-primary)] shrink-0" />
              About Us
            </p>
            <span className="text-[11px] font-medium tracking-widest uppercase text-[var(--screen-tertiary)]">
              Est. 2025
            </span>
          </div>

          {/* Mission + Principles grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr]">

            {/* Mission */}
            <motion.div
              className="flex flex-col pt-10 pb-10 lg:pb-20 lg:pr-12 border-b border-[var(--hairline-subtle)] lg:border-b-0 lg:border-r lg:border-[var(--hairline-subtle)]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <h1 className="font-[var(--font-display)] text-[clamp(28px,5vw,56px)] font-light tracking-tight leading-[0.95] text-[var(--screen-primary)] mb-8 max-w-[16ch]">
                Precision engineering for ambitious ideas
              </h1>
              <p className="font-[var(--font-body)] text-base leading-relaxed text-[var(--screen-secondary)] max-w-[52ch] mb-5">
                Pi Analytic Solutions is a technology consulting and software development firm headquartered in Aligarh, Uttar Pradesh. We partner with founders, product teams, and enterprise leaders to build systems that scale.
              </p>
              <p className="font-[var(--font-body)] text-base leading-relaxed text-[var(--screen-secondary)] max-w-[52ch]">
                From AI-powered analytics to cloud-native infrastructure, we bring deep technical expertise and a commitment to outcomes that matter.
              </p>
            </motion.div>

            {/* Principles */}
            <motion.div
              className="pt-10 pb-10 lg:pb-20 lg:pl-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease }}
            >
              <p className="text-[11px] font-medium tracking-widest uppercase text-[var(--screen-tertiary)] mb-6 pb-4 border-b border-[var(--hairline-subtle)]">
                How we work
              </p>
              <ul className="list-none m-0 p-0">
                {principles.map((p, i) => (
                  <motion.li
                    key={p.label}
                    className={`grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] gap-x-6 sm:gap-x-8 py-6 ${i < principles.length - 1 ? 'border-b border-[var(--hairline-subtle)]' : ''}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.07, ease }}
                  >
                    <span className="text-[11px] font-medium tracking-widest uppercase text-[var(--amber-primary)] pt-0.5 self-start">
                      {p.label}
                    </span>
                    <p className="font-[var(--font-body)] text-[15px] leading-relaxed text-[var(--screen-secondary)]">
                      {p.body}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* ── BRAND IDENTITY STRIP ── */}
        <div className="border-t border-b border-[var(--hairline-strong)] bg-[var(--void-800)]">
          <div className="flex flex-wrap items-stretch">

            {/* Logo */}
            <div className="flex items-center justify-center px-8 sm:px-12 py-6 border-b border-r border-[var(--hairline-subtle)]">
              <img
                src="/assets/jii.jpeg"
                alt="Pi Analytic Solutions"
                className="h-10 w-auto object-contain shrink-0"
              />
            </div>

            {/* Wordmark */}
            <div className="flex flex-col items-start justify-center gap-1.5 px-6 sm:px-10 py-6 border-b border-r border-[var(--hairline-subtle)] flex-1 min-w-[180px]">
              <span className="text-[11px] font-medium tracking-widest uppercase text-[var(--screen-tertiary)]">
                Full Name
              </span>
              <span className="font-[var(--font-display)] text-[clamp(18px,3vw,48px)] font-light tracking-tight leading-none text-[var(--screen-primary)]">
                Pi Analytic Solutions
              </span>
            </div>

            {/* Incorporated */}
            <div className="flex flex-col items-start justify-center gap-2 px-6 sm:px-10 py-6 border-b border-r border-[var(--hairline-subtle)]">
              <span className="text-[11px] font-medium tracking-widest uppercase text-[var(--screen-tertiary)]">
                Incorporated
              </span>
              <span className="font-[var(--font-display)] text-[clamp(18px,2.5vw,36px)] font-light tracking-tight leading-none text-[var(--screen-secondary)]">
                2025
              </span>
            </div>

            {/* CIN */}
            <div className="flex flex-col items-start justify-center gap-1.5 px-6 sm:px-10 py-6 border-b border-[var(--hairline-subtle)]">
              <span className="text-[11px] font-medium tracking-widest uppercase text-[var(--screen-tertiary)]">
                CIN
              </span>
              <span className="font-[var(--font-body)] text-[12px] sm:text-[13px] font-medium tracking-[0.04em] text-[var(--screen-secondary)] break-all">
                U62090UP2025PTC234247
              </span>
            </div>
          </div>
        </div>

        {/* ── STATS LEDGER ── */}
        <section className="bg-[var(--void-900)] border-b border-[var(--hairline-subtle)]" aria-label="Key figures">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">

            {/* Headline */}
            <div className="py-12 md:py-16 border-b border-[var(--hairline-subtle)]">
              <p className="flex items-center gap-2.5 text-[11px] font-medium tracking-widest uppercase text-[var(--amber-primary)] mb-5">
                <span className="inline-block w-5 h-px bg-[var(--amber-primary)] shrink-0" />
                By the numbers
              </p>
              <h2 className="font-[var(--font-display)] text-[clamp(24px,4vw,64px)] font-light tracking-tight leading-[1.05] text-[var(--screen-primary)] max-w-[22ch]">
                Delivering results that speak for themselves
              </h2>
            </div>

            {/* Stat rows */}
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className={`flex items-start justify-between py-6 md:py-8 ${i < stats.length - 1 ? 'border-b border-[var(--hairline-subtle)]' : ''}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
              >
                <span className="text-[11px] font-medium tracking-widest uppercase text-[var(--screen-tertiary)] max-w-[120px] sm:max-w-[160px] pt-2 shrink-0">
                  {stat.label}
                </span>
                <div
                  className="flex items-baseline shrink-0 whitespace-nowrap self-start"
                  style={{ gap: '0.08em' }}
                  aria-label={`${stat.label}: ${stat.value}${stat.unit}`}
                >
                  <span className="font-[var(--font-display)] text-[clamp(48px,10vw,144px)] font-light tracking-tight leading-[0.95] text-[var(--screen-primary)]">
                    {stat.value}
                  </span>
                  <span className="font-[var(--font-display)] text-[clamp(36px,7vw,112px)] font-light tracking-tight leading-[0.95] text-[var(--screen-secondary)]">
                    {stat.unit}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── SERVICES LEDGER ── */}
        <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12" aria-label="Our capabilities">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] py-16 md:py-24">

            {/* Left: headline */}
            <div className="lg:pr-12 pb-12 lg:pb-0">
              <p className="flex items-center gap-2.5 text-[11px] font-medium tracking-widest uppercase text-[var(--amber-primary)] mb-6">
                <span className="inline-block w-5 h-px bg-[var(--amber-primary)] shrink-0" />
                What we do
              </p>
              <h2 className="font-[var(--font-display)] text-[clamp(28px,4.5vw,72px)] font-light tracking-tight leading-[0.95] text-[var(--screen-primary)] mb-8">
                End-to-end technology capabilities
              </h2>
              <p className="font-[var(--font-body)] text-base leading-relaxed text-[var(--screen-secondary)] max-w-[48ch] mb-8">
                From initial architecture to production deployment, we cover the full technology stack — so you work with one trusted partner, not a fragmented vendor ecosystem.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-[11px] font-medium tracking-widest uppercase no-underline text-[var(--screen-secondary)] border-b border-[var(--hairline-subtle)] pb-0.5 transition-colors duration-200 hover:text-[var(--amber-primary)] hover:border-[var(--amber-primary)]"
              >
                Start a project →
              </Link>
            </div>

            {/* Right: service list */}
            <div className="border-t border-[var(--hairline-strong)] lg:border-t-0 lg:border-l lg:border-[var(--hairline-subtle)] pt-0 lg:pt-[clamp(80px,10vw,160px)]">
              <ul className="list-none m-0 p-0 border-t border-[var(--hairline-subtle)] w-full">
                {services.map((service, i) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06, ease }}
                  >
                    <Link
                      to="/contact"
                      className="group flex items-center justify-between gap-6 px-5 sm:px-10 py-5 sm:py-6 border-b border-[var(--hairline-subtle)] no-underline text-inherit transition-colors duration-200 hover:bg-[var(--void-800)]"
                    >
                      <span className="font-[var(--font-display)] text-[clamp(15px,2vw,28px)] font-light tracking-tight leading-[1.1] text-[var(--screen-secondary)] transition-colors duration-200 group-hover:text-[var(--screen-primary)]">
                        {service}
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-lg leading-none text-[var(--screen-tertiary)] shrink-0 transition-all duration-200 group-hover:text-[var(--amber-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 inline-block"
                      >
                        ↗
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── CEO / LEADERSHIP SECTION ── */}
        <section
          className="border-t border-[var(--hairline-strong)] bg-[var(--void-800)]"
          aria-label="Leadership"
        >
          {/* Section header row */}
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 pt-10 pb-6 flex items-center justify-between border-b border-[var(--hairline-subtle)]">
            <span className="text-[11px] font-medium tracking-widest uppercase text-[var(--screen-tertiary)]">
              Leadership
            </span>
            <span className="text-[11px] font-medium tracking-widest uppercase text-[var(--screen-tertiary)]">
              Founder &amp; CEO
            </span>
          </div>

          {/* Full-width bio column */}
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
            <motion.div
              className="flex flex-col gap-6 py-10 lg:py-14 max-w-[860px]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              {/* Eyebrow */}
              <p className="flex items-center gap-2.5 text-[11px] font-medium tracking-widest uppercase text-[var(--amber-primary)]">
                <span className="inline-block w-5 h-px bg-[var(--amber-primary)] shrink-0" />
                Founder &amp; CEO
              </p>

              {/* Name at display scale */}
              <h2 className="font-[var(--font-display)] text-[clamp(32px,4vw,64px)] font-light tracking-tight leading-[0.95] text-[var(--screen-primary)]">
                Ajay Agrawal
              </h2>

              {/* Credential strip */}
              <div className="flex flex-wrap gap-x-8 gap-y-2 pb-6 border-b border-[var(--hairline-subtle)]">
                {['M.Tech Mechanical Engineer', '35+ Years Experience', 'Educator & Innovator'].map((tag) => (
                  <span key={tag} className="text-[11px] font-medium tracking-widest uppercase text-[var(--screen-tertiary)]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bio paragraphs */}
              <p className="font-[var(--font-body)] text-[15px] leading-relaxed text-[var(--screen-secondary)]">
                With a distinguished career spanning over 35 years, Ajay Agrawal brings together deep technical expertise, academic excellence, and a passion for innovation. An accomplished M.Tech Mechanical Engineer, he began his professional journey in the railway manufacturing sector — contributing to the design and development of railway coaches with a strong focus on engineering precision, quality, and operational efficiency.
              </p>
              <p className="font-[var(--font-body)] text-[15px] leading-relaxed text-[var(--screen-secondary)]">
                Driven by a commitment to knowledge sharing and talent development, he transitioned into academia and served as a respected educator across various engineering colleges for more than two decades. Throughout his teaching career, he mentored countless aspiring engineers — combining practical industry exposure with strong theoretical foundations to shape future professionals.
              </p>
              <p className="font-[var(--font-body)] text-[15px] leading-relaxed text-[var(--screen-secondary)]">
                Today, as the founder and leader of Pi Analytic Solutions, he leverages his extensive engineering background, analytical mindset, and leadership experience to deliver innovative, data-driven solutions for modern business challenges. His vision is rooted in bridging technology, analytics, and real-world problem-solving to help organisations achieve sustainable growth and operational excellence.
              </p>
              <p className="font-[var(--font-body)] text-[15px] leading-relaxed text-[var(--screen-secondary)]">
                Under his leadership, the company continues to foster a culture of innovation, integrity, and continuous learning — empowering clients with intelligent solutions tailored to an evolving digital landscape.
              </p>

              {/* Key facts — horizontal ledger */}
              <div className="flex flex-wrap gap-0 border-t border-[var(--hairline-subtle)] mt-2">
                {[
                  { label: 'Experience', value: '35+ years' },
                  { label: 'Background', value: 'Engineering & Academia' },
                  { label: 'Speciality', value: 'Data-driven solutions' },
                ].map((fact, i) => (
                  <div
                    key={fact.label}
                    className={`flex flex-col gap-1.5 py-5 pr-10 ${i > 0 ? 'pl-10 border-l border-[var(--hairline-subtle)]' : ''}`}
                  >
                    <span className="text-[11px] font-medium tracking-widest uppercase text-[var(--screen-tertiary)]">
                      {fact.label}
                    </span>
                    <span className="text-[13px] font-medium tracking-wide uppercase text-[var(--screen-secondary)]">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Contact link */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-[11px] font-medium tracking-widest uppercase no-underline text-[var(--screen-secondary)] border-b border-[var(--hairline-subtle)] pb-0.5 self-start transition-colors duration-200 hover:text-[var(--amber-primary)] hover:border-[var(--amber-primary)]"
              >
                Work with us →
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── CLOSING CTA ── */}
        <div className="border-t border-[var(--hairline-strong)] max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 py-14 md:py-20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-10">
          <div className="flex flex-col gap-3 flex-1">
            <span className="text-[11px] font-medium tracking-widest uppercase text-[var(--screen-tertiary)]">
              Ready to build
            </span>
            <h2 className="font-[var(--font-display)] text-[clamp(24px,3.5vw,56px)] font-light tracking-tight leading-[0.95] text-[var(--screen-primary)] max-w-[18ch]">
              Let's turn your vision into reality
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-widest uppercase no-underline bg-[var(--amber-primary)] text-[var(--void-900)] border border-[var(--amber-primary)] px-8 py-3.5 shrink-0 self-start sm:self-end transition-opacity duration-200 hover:opacity-85 whitespace-nowrap"
          >
            Get in touch →
          </Link>
        </div>

      </main>
    </>
  );
}
