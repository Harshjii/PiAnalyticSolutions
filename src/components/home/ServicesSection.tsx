import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const services = [
  {
    num: '01',
    title: 'Custom Software Development',
    desc: 'We build customized software solutions that match your business requirements and improve operational efficiency.',
  },
  {
    num: '02',
    title: 'Website Development',
    desc: 'We design modern, responsive, and user-friendly websites that create a strong online presence for your business.',
  },
  {
    num: '03',
    title: 'Mobile Application Development',
    desc: 'We develop secure and high-performance Android and iOS applications with a smooth user experience.',
  },
  {
    num: '04',
    title: 'AI & Machine Learning',
    desc: 'We create intelligent solutions that automate processes and help businesses make better decisions.',
  },
  {
    num: '05',
    title: 'ERP Solutions',
    desc: 'Manage finance, HR, inventory, sales, and business operations from one integrated platform.',
  },
  {
    num: '06',
    title: 'BPM Solutions',
    desc: 'Improve workflow, increase productivity, and automate business processes efficiently.',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="services"
      aria-label="Our Services"
      className="border-t border-[var(--hairline-subtle)] py-20 lg:py-28 px-6 md:px-12"
      style={{ background: 'var(--void-900)' }}
    >
      <div ref={sectionRef} className="max-w-[1440px] mx-auto">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0.24, 1] }}
          className="mb-16 max-w-3xl"
        >
          <div className="kit-eyebrow kit-eyebrow--amber mb-6">
            What We Offer
          </div>
          <h2 className="font-section-heading text-white mb-6">
            Our Services
          </h2>
          <p className="font-body-text text-[var(--screen-secondary)] leading-relaxed">
            We provide complete technology solutions designed to help businesses innovate, grow, and succeed in today's digital world.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.32, 0.72, 0.24, 1] }}
              className="p-8 border border-[var(--hairline-subtle)] bg-[var(--void-800)] hover:border-[var(--amber-primary)] transition-all duration-300 flex flex-col justify-between group h-full"
            >
              <div>
                <span className="font-mono text-xs text-[var(--amber-primary)] block mb-6 tracking-widest">
                  SERVICE // {service.num}
                </span>
                <h3 className="font-service-heading text-white mb-4 transition-colors duration-300 group-hover:text-[var(--amber-primary)]">
                  {service.title}
                </h3>
                <p className="font-body-text text-[var(--screen-secondary)] mb-8 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div>
                <Link
                  to="/contact"
                  className="font-btn-text inline-flex items-center gap-2 text-white group-hover:text-[var(--amber-primary)] transition-colors duration-300"
                >
                  Enquire Now <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">↗</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.32, 0.72, 0.24, 1] }}
          className="mt-16 text-center"
        >
          <Link
            to="/about"
            className="font-btn-text inline-flex items-center justify-center bg-[var(--amber-primary)] text-[var(--void-900)] px-8 py-4 border border-[var(--amber-primary)] transition-all duration-300 hover:bg-transparent hover:text-white"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
