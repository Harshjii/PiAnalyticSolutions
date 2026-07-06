import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function HeroSection() {
  return (
    <section
      aria-label="Pi Analytic Solutions — hero"
      className="relative min-h-[calc(100vh-64px)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-6 md:px-12 py-12 lg:py-0 overflow-hidden"
      style={{ background: 'var(--void-900)' }}
    >
      {/* Left Column: Copy */}
      <div className="lg:col-span-7 flex flex-col justify-center h-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0.24, 1] }}
        >
          <div className="kit-eyebrow kit-eyebrow--amber mb-6">
            Pi Analytic Solutions
          </div>
          <h1 className="font-hero-heading text-white mb-6">
            Transforming Ideas into<br />Smart Digital Solutions
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.32, 0.72, 0.24, 1] }}
          className="border-t border-[var(--hairline-subtle)] pt-6"
        >
          <p className="font-body-text text-[var(--screen-secondary)] mb-8 max-w-xl">
            Pi Analytic Solutions helps startups, businesses, and government organizations build smart, secure, and scalable digital solutions. We specialize in Custom Software Development, Website Development, Mobile Applications, ERP, BPM, AI Solutions, Cloud Services, Geo-Tagging, Accounting Solutions, and Digital Transformation.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Link
              to="/contact"
              className="font-btn-text inline-flex items-center justify-center bg-[var(--amber-primary)] text-[var(--void-900)] px-6 py-3.5 border border-[var(--amber-primary)] transition-all duration-300 hover:bg-transparent hover:text-white"
            >
              Book a Free Consultation
            </Link>
            <a
              href="#services"
              className="font-btn-text inline-flex items-center justify-center bg-transparent text-white px-6 py-3.5 border border-white transition-all duration-300 hover:bg-white hover:text-[var(--void-900)]"
            >
              Explore Our Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right Column: High-tech visual */}
      <div className="lg:col-span-5 w-full h-[350px] lg:h-[80%] relative z-10 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.32, 0.72, 0.24, 1] }}
          className="relative w-full h-full border border-[var(--hairline-subtle)] overflow-hidden group"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(212,160,23,0.05)] to-transparent pointer-events-none" />
          
          <img
            src="/assets/hero_office_tech.png"
            alt="Modern Office with software developers discussing projects"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Decorative tech grid details */}
          <div className="absolute top-4 left-4 flex gap-1">
            <span className="w-1.5 h-1.5 bg-[var(--amber-primary)]" />
            <span className="w-1.5 h-1.5 bg-[var(--screen-tertiary)]" />
            <span className="w-1.5 h-1.5 bg-[var(--screen-tertiary)]" />
          </div>
          <div className="absolute bottom-4 right-4 text-[10px] font-mono text-[var(--screen-tertiary)] tracking-wider">
            SYSTEM_ACTIVE // 2026
          </div>
        </motion.div>
      </div>
    </section>
  );
}
