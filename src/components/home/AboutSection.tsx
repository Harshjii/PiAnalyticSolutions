import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      aria-label="About Pi Analytic Solutions"
      className="border-t border-[var(--hairline-subtle)] py-20 lg:py-28 px-6 md:px-12"
      style={{ background: 'var(--void-800)' }}
    >
      <div
        ref={ref}
        className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        {/* Left Column: Team image */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0.24, 1] }}
          className="lg:col-span-5 w-full h-[350px] lg:h-[450px] relative overflow-hidden border border-[var(--hairline-subtle)] group"
        >
          <div className="absolute inset-0 bg-gradient-to-bl from-[rgba(212,160,23,0.03)] to-transparent pointer-events-none" />
          <img
            src="/assets/team_workspace_tech.png"
            alt="Pi Analytic Solutions Professional tech team meeting"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4 flex gap-1">
            <span className="w-1.5 h-1.5 bg-[var(--amber-primary)]" />
            <span className="w-1.5 h-1.5 bg-[var(--screen-tertiary)]" />
          </div>
        </motion.div>

        {/* Right Column: Copy */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.32, 0.72, 0.24, 1] }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <div className="kit-eyebrow kit-eyebrow--amber mb-6">
            Who We Are
          </div>
          
          <h2 className="font-section-heading text-white mb-6">
            Who We Are
          </h2>

          <div className="border-t border-[var(--hairline-subtle)] pt-6 flex flex-col gap-6">
            <p className="font-body-text text-[var(--screen-secondary)] leading-relaxed">
              Founded in 2025, Pi Analytic Solutions is a technology consulting and software development company based in Aligarh, Uttar Pradesh. We help startups, businesses, and government organizations solve real business challenges through innovative technology.
            </p>
            <p className="font-body-text text-[var(--screen-secondary)] leading-relaxed">
              Our focus is to build reliable, secure, and scalable digital solutions that improve productivity, simplify operations, and support long-term business growth.
            </p>
            
            <div className="mt-4">
              <Link
                to="/about"
                className="font-btn-text inline-flex items-center justify-center bg-transparent text-white px-6 py-3.5 border border-white transition-all duration-300 hover:bg-white hover:text-[var(--void-900)]"
              >
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
