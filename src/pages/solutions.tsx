import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { 
  CheckCircle2, 
  TrendingUp, 
  Rocket, 
  Layers, 
  Landmark, 
  Cpu, 
  Database,
  RefreshCw
} from 'lucide-react';

const ease = [0.32, 0.72, 0.24, 1] as const;

const solutionsData = [
  {
    icon: TrendingUp,
    title: 'Business Solutions',
    desc: 'We help businesses automate daily operations, improve productivity, and simplify complex processes through customized digital solutions designed for long-term success.',
    image: '/assets/sol_business.png',
  },
  {
    icon: Rocket,
    title: 'Startup Solutions',
    desc: 'From idea validation to product launch, we help startups build scalable websites, mobile applications, and software solutions that support rapid growth and innovation.',
    image: '/assets/sol_startup.png',
  },
  {
    icon: Layers,
    title: 'Enterprise Solutions',
    desc: 'Our enterprise solutions are designed to manage large-scale business operations through ERP systems, workflow automation, cloud infrastructure, and secure software development.',
    image: '/assets/sol_enterprise.png',
  },
  {
    icon: Landmark,
    title: 'Government Solutions',
    desc: 'We develop secure, reliable, and scalable digital solutions for government organizations, helping improve public services, data management, workflow automation, and operational efficiency.',
    image: '/assets/sol_government.png',
  },
  {
    icon: RefreshCw,
    title: 'Digital Transformation',
    desc: 'We help organizations modernize their business processes by replacing manual systems with smart digital platforms that improve efficiency, accuracy, and collaboration.',
    image: '/assets/sol_digital.png',
  },
  {
    icon: Cpu,
    title: 'AI & Automation Solutions',
    desc: 'Using Artificial Intelligence and automation, we help businesses reduce manual work, improve decision-making, and increase overall productivity through intelligent digital systems.',
    image: '/assets/sol_ai.png',
  },
  {
    icon: Database,
    title: 'Cloud & Data Solutions',
    desc: 'Our cloud and data solutions provide secure infrastructure, reliable storage, analytics, and business intelligence to help organizations make informed decisions and scale confidently.',
    image: '/assets/sol_cloud.png',
  },
];

const whySolutionsList = [
  'Customized for Every Business',
  'Secure & Reliable',
  'Scalable Architecture',
  'Latest Technologies',
  'Easy to Use',
  'Long-Term Support',
];

const industriesList = [
  { name: 'Government', desc: 'Secure platforms for public administrative workflows and digitizing civic records.' },
  { name: 'Railways', desc: 'Scale systems for asset tracking, inventory control, and scheduling logistics.' },
  { name: 'Business & Trade', desc: 'Point-of-Sale systems, customer portals, and multi-channel order orchestration.' },
  { name: 'Enterprises', desc: 'Custom enterprise software, ERP configurations, and global DevOps management.' },
  { name: 'Small & Medium Businesses', desc: 'Cost-efficient cloud storage, financial accounting systems, and CRM systems.' },
];

export default function SolutionsPage() {
  const whyRef = useRef<HTMLDivElement>(null);
  const whyInView = useInView(whyRef, { once: true, margin: '-80px' });

  const industriesRef = useRef<HTMLDivElement>(null);
  const industriesInView = useInView(industriesRef, { once: true, margin: '-80px' });

  return (
    <>
      <Helmet>
        <title>Our Solutions — Pi Analytic Solutions</title>
        <link rel="canonical" href="https://www.pianalyticsolutions.com/solutions" />
        <meta
          name="description"
          content="We deliver innovative technology solutions that help startups, businesses, enterprises, and government organizations solve real challenges, improve efficiency, and achieve sustainable growth."
        />
      </Helmet>

      {/* Main Container - Retaining Dark Brand Theme */}
      <div 
        style={{ background: 'var(--void-900)', color: 'var(--screen-primary)', fontFamily: 'Poppins, sans-serif' }}
        className="min-h-screen selection:bg-[var(--amber-primary)] selection:text-black"
      >
        
        {/* 1. HERO SECTION */}
        <section 
          className="relative min-h-[60vh] flex items-center justify-center px-6 md:px-12 py-20 text-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('/assets/solutions_hero.png')" }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#000000]/75 z-0" />
          
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="text-[var(--amber-primary)] text-xs font-semibold uppercase tracking-widest mb-4"
            >
              Tailored Engineering
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="text-white font-bold leading-tight mb-6"
              style={{ fontSize: 'clamp(32px, 6vw, 48px)' }}
            >
              Smart Solutions for Every Business
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="text-gray-300 font-normal mb-8 max-w-2xl leading-relaxed"
              style={{ fontSize: 'clamp(16px, 3vw, 20px)' }}
            >
              We deliver innovative technology solutions that help startups, businesses, enterprises, and government organizations solve real challenges, improve efficiency, and achieve sustainable growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
            >
              <Link
                to="/contact"
                className="font-btn-text inline-flex items-center justify-center bg-[var(--amber-primary)] text-[var(--void-900)] px-8 py-4 border border-[var(--amber-primary)] transition-all duration-300 hover:bg-transparent hover:text-white hover:border-white rounded-none"
              >
                Talk to Our Experts
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 2. alternatinG SOLUTIONS SHOWCASE */}
        <section className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto flex flex-col gap-28">
          {solutionsData.map((sol, idx) => {
            const isEven = idx % 2 === 0;
            const IconComp = sol.icon;
            
            // Create a local reference for scroll animation
            const rowRef = useRef<HTMLDivElement>(null);
            const rowInView = useInView(rowRef, { once: true, margin: '-80px' });

            return (
              <div 
                ref={rowRef}
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image Block */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  animate={rowInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, ease }}
                  className={`lg:col-span-5 h-[300px] lg:h-[400px] relative overflow-hidden border border-[var(--hairline-subtle)] ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--void-900)]/80 via-transparent to-transparent" />
                </motion.div>

                {/* Content Block */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  animate={rowInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1, ease }}
                  className={`lg:col-span-7 flex flex-col items-start ${
                    isEven ? 'lg:order-2 lg:pl-12' : 'lg:order-1 lg:pr-12'
                  }`}
                >
                  <div className="w-12 h-12 bg-[var(--void-800)] border border-[var(--hairline-subtle)] text-[var(--amber-primary)] flex items-center justify-center mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h2 
                    className="font-bold text-white mb-6 font-[Poppins]"
                    style={{ fontSize: '38px' }}
                  >
                    {sol.title}
                  </h2>
                  <div className="border-t-2 border-[var(--amber-primary)] w-16 mb-6" />
                  <p className="leading-relaxed text-[var(--screen-secondary)]" style={{ fontSize: '18px' }}>
                    {sol.desc}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </section>

        {/* 3. WHY OUR SOLUTIONS */}
        <section 
          className="py-20 px-6 md:px-12"
          style={{ background: 'var(--void-800)' }}
        >
          <div ref={whyRef} className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={whyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease }}
              className="lg:col-span-6"
            >
              <span className="text-[var(--amber-primary)] text-xs font-semibold uppercase tracking-widest block mb-4">Core Strengths</span>
              <h2 className="font-bold text-white mb-6" style={{ fontSize: '38px' }}>
                Why Our Solutions?
              </h2>
              <div className="border-t-2 border-[var(--amber-primary)] w-16 mb-8" />
              <p className="text-[var(--screen-secondary)] leading-relaxed mb-6" style={{ fontSize: '18px' }}>
                We do not believe in one-size-fits-all. Every system we launch is designed to adapt to your scaling requirements, keeping operational overhead low and data security tight.
              </p>
            </motion.div>

            {/* Right Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={whyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15, ease }}
              className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {whySolutionsList.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-[var(--void-900)] p-6 border border-[var(--hairline-subtle)] flex items-center gap-4 hover:border-[var(--amber-primary)] transition-all duration-300"
                >
                  <CheckCircle2 className="w-6 h-6 text-[var(--amber-primary)] shrink-0" />
                  <span className="text-white font-medium" style={{ fontSize: '18px' }}>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 4. INDUSTRIES WE SUPPORT */}
        <section 
          className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto"
        >
          <div ref={industriesRef} className="flex flex-col">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={industriesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease }}
              className="mb-16 text-center"
            >
              <span className="text-[var(--amber-primary)] text-xs font-semibold uppercase tracking-widest block mb-4">Sectors</span>
              <h2 className="font-bold text-white mb-2" style={{ fontSize: '38px' }}>
                Industries We Support
              </h2>
              <div className="border-t-2 border-[var(--amber-primary)] w-16 mx-auto mt-4" />
            </motion.div>

            {/* Glassmorphic Grid of industries */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industriesList.map((ind, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={industriesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease }}
                  className="bg-[var(--void-800)] p-8 border border-[var(--hairline-subtle)] hover:border-[var(--amber-primary)] transition-all duration-300 flex flex-col justify-between"
                  style={{ borderRadius: '12px', padding: '24px' }}
                >
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{ind.name}</h3>
                    <p className="text-[var(--screen-secondary)] leading-relaxed" style={{ fontSize: '18px' }}>
                      {ind.desc}
                    </p>
                  </div>
                  <div className="border-t border-[var(--hairline-subtle)] mt-6 pt-4 flex justify-between items-center text-xs text-[var(--amber-primary)] font-semibold uppercase tracking-wider">
                    <span>Active Support</span>
                    <span>→</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. FINAL CTA SECTION */}
        <section 
          className="relative py-20 px-6 md:px-12 text-center bg-cover bg-center overflow-hidden border-t border-[var(--hairline-subtle)]"
          style={{ backgroundImage: "url('/assets/solutions_cta.png')" }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#000000]/80 z-0" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <h2
              className="font-bold text-white mb-6 leading-tight"
              style={{ fontSize: 'clamp(28px, 5vw, 40px)' }}
            >
              Let's Build the Right Solution for Your Business
            </h2>
            <p
              className="text-gray-300 font-normal mb-8 max-w-2xl leading-relaxed"
              style={{ fontSize: '18px' }}
            >
              Every business is unique, and so are its challenges. Our team is ready to understand your requirements and deliver the right technology solution to help your business grow.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="font-btn-text inline-flex items-center justify-center bg-[var(--amber-primary)] text-[var(--void-900)] px-6 py-3.5 border border-[var(--amber-primary)] transition-all duration-300 hover:bg-transparent hover:text-white hover:border-white rounded-none"
              >
                Contact Us
              </Link>
              <Link
                to="/contact"
                className="font-btn-text inline-flex items-center justify-center bg-transparent text-white px-6 py-3.5 border border-white transition-all duration-300 hover:bg-[var(--amber-primary)] hover:text-[var(--void-900)] hover:border-[var(--amber-primary)] rounded-none"
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
