import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const steps = [
  {
    num: '01',
    title: 'Requirement Discussion',
    desc: 'We understand your business goals, challenges, and project requirements.',
  },
  {
    num: '02',
    title: 'Planning & Strategy',
    desc: 'Our team prepares the best technology plan and project roadmap.',
  },
  {
    num: '03',
    title: 'Design & Development',
    desc: 'We design and develop secure, user-friendly, and scalable digital solutions.',
  },
  {
    num: '04',
    title: 'Testing',
    desc: 'Every solution is tested carefully to ensure quality and smooth performance.',
  },
  {
    num: '05',
    title: 'Deployment',
    desc: 'We launch your project with complete technical support.',
  },
  {
    num: '06',
    title: 'Support & Maintenance',
    desc: 'We continue to provide updates, improvements, and technical assistance whenever required.',
  },
];

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      aria-label="Our Process"
      className="border-t border-[var(--hairline-subtle)] py-20 lg:py-28 px-6 md:px-12"
      style={{ background: 'var(--void-900)' }}
    >
      <div ref={ref} className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0.24, 1] }}
          className="mb-16 max-w-3xl"
        >
          <div className="kit-eyebrow kit-eyebrow--amber mb-6">
            Our Process
          </div>
          <h2 className="font-section-heading text-white mb-6">
            How We Work
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.32, 0.72, 0.24, 1] }}
              className="p-8 border border-[var(--hairline-subtle)] bg-[var(--void-800)] relative overflow-hidden group h-full flex flex-col justify-between"
            >
              {/* Massive background number */}
              <div
                className="absolute right-4 top-2 font-mono text-[90px] font-bold select-none pointer-events-none opacity-5 transition-opacity duration-300 group-hover:opacity-10"
                style={{ color: 'var(--amber-primary)', lineHeight: 1 }}
              >
                {step.num}
              </div>

              <div className="relative z-10">
                <span className="font-mono text-xs text-[var(--amber-primary)] block mb-6 tracking-widest">
                  STEP // {step.num}
                </span>
                <h3 className="font-service-heading text-white mb-4 transition-colors duration-300 group-hover:text-[var(--amber-primary)]">
                  {step.title}
                </h3>
                <p className="font-body-text text-[var(--screen-secondary)] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
