import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { 
  Code2, 
  Globe, 
  Smartphone, 
  Brain, 
  Cloud, 
  Briefcase, 
  Activity, 
  BarChart3, 
  MapPin, 
  Wallet, 
  CheckCircle2 
} from 'lucide-react';

const ease = [0.32, 0.72, 0.24, 1] as const;

const servicesList = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    desc: 'Tailor-made software solutions designed according to your business needs.',
  },
  {
    icon: Globe,
    title: 'Website Development',
    desc: 'Modern, responsive, and high-performance websites for businesses.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Android and iOS applications with smooth user experience and strong security.',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    desc: 'Smart automation, predictive systems, and AI-based business solutions.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    desc: 'Cloud setup, migration, and scalable infrastructure solutions.',
  },
  {
    icon: Briefcase,
    title: 'ERP Solutions',
    desc: 'Integrated systems for managing business operations like finance, HR, sales, and inventory.',
  },
  {
    icon: Activity,
    title: 'BPM Solutions',
    desc: 'Workflow automation and process optimization solutions.',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    desc: 'Data-driven insights to improve business decisions and performance.',
  },
  {
    icon: MapPin,
    title: 'Geo Tagging Solutions',
    desc: 'Location-based tracking systems for field operations and monitoring.',
  },
  {
    icon: Wallet,
    title: 'Accounting Solutions',
    desc: 'Digital accounting systems for smooth financial management.',
  },
];

const whyChooseList = [
  'Custom-built solutions',
  'Scalable architecture',
  'Secure systems',
  'Modern technologies',
  'Dedicated support',
  'Business-focused approach',
];

const processSteps = [
  { icon: '🔍', title: 'Requirement Analysis' },
  { icon: '📋', title: 'Planning' },
  { icon: '💻', title: 'Development' },
  { icon: '🧪', title: 'Testing' },
  { icon: '🚀', title: 'Deployment' },
  { icon: '🤝', title: 'Support' },
];

export default function ServicesPage() {
  const overviewRef = useRef<HTMLDivElement>(null);
  const overviewInView = useInView(overviewRef, { once: true, margin: '-80px' });

  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: '-80px' });

  const whyRef = useRef<HTMLDivElement>(null);
  const whyInView = useInView(whyRef, { once: true, margin: '-80px' });

  const processRef = useRef<HTMLDivElement>(null);
  const processInView = useInView(processRef, { once: true, margin: '-80px' });

  return (
    <>
      <Helmet>
        <title>Our Services — Pi Analytic Solutions</title>
        <link rel="canonical" href="https://www.pianalyticsolutions.com/services" />
        <meta
          name="description"
          content="Pi Analytic Solutions delivers modern, scalable, and secure technology solutions for startups, enterprises, and government organizations."
        />
      </Helmet>

      {/* Main Services Page Wrapper in Dark Theme */}
      <div 
        style={{ background: 'var(--void-900)', color: 'var(--screen-primary)', fontFamily: 'Poppins, sans-serif' }}
        className="min-h-screen selection:bg-[var(--amber-primary)] selection:text-black"
      >
        
        {/* 1. HERO SECTION */}
        <section 
          className="relative min-h-[60vh] flex items-center justify-center px-6 md:px-12 py-20 text-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('/assets/services_hero.png')" }}
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
              What We Offer
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="text-white font-bold leading-tight mb-6"
              style={{ fontSize: 'clamp(32px, 6vw, 48px)' }}
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="text-gray-300 font-normal mb-8 max-w-2xl leading-relaxed"
              style={{ fontSize: 'clamp(16px, 3vw, 20px)' }}
            >
              We provide end-to-end digital solutions that help businesses grow, automate processes, and improve efficiency.
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
                Book a Free Consultation
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 2. SERVICES OVERVIEW SECTION */}
        <section 
          ref={overviewRef} 
          className="py-20 px-6 md:px-12 max-w-[1200px] mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={overviewInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="flex flex-col items-center"
          >
            <span className="text-[var(--amber-primary)] text-xs font-semibold uppercase tracking-widest block mb-4">Overview</span>
            <h2 className="text-3xl font-bold text-white mb-6">Innovative Technology Partner</h2>
            <div className="border-t-2 border-[var(--amber-primary)] w-16 mb-8" />
            <p className="leading-relaxed text-[var(--screen-secondary)] max-w-3xl" style={{ fontSize: '18px' }}>
              Pi Analytic Solutions delivers modern, scalable, and secure technology solutions for startups, enterprises, and government organizations. We focus on building solutions that solve real business problems and improve operational performance.
            </p>
          </motion.div>
        </section>

        {/* 3. SERVICES CARDS (MAIN SECTION) */}
        <section 
          className="py-20 px-6 md:px-12 bg-[var(--void-800)]"
        >
          <div ref={gridRef} className="max-w-[1440px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease }}
              className="mb-16 text-center"
            >
              <span className="text-[var(--amber-primary)] text-xs font-semibold uppercase tracking-widest block mb-4 font-[Poppins]">Portfolio</span>
              <h2 className="font-bold text-white mb-2" style={{ fontSize: '38px' }}>
                Key Capabilities
              </h2>
              <div className="border-t-2 border-[var(--amber-primary)] w-16 mx-auto mt-4" />
            </motion.div>

            {/* Responsive grid of 10 service cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesList.map((srv, idx) => {
                const IconComponent = srv.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 24 }}
                    animate={gridInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: idx * 0.05, ease }}
                    className="bg-[var(--void-900)] p-8 border border-[var(--hairline-subtle)] hover:border-[var(--amber-primary)] transition-all duration-300 group flex flex-col items-start rounded-none"
                  >
                    <div className="w-12 h-12 bg-[var(--void-800)] border border-[var(--hairline-subtle)] text-[var(--amber-primary)] flex items-center justify-center mb-6 group-hover:bg-[var(--amber-primary)] group-hover:text-black transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 
                      className="font-semibold text-white mb-4 group-hover:text-[var(--amber-primary)] transition-colors duration-300"
                      style={{ fontSize: '22px' }}
                    >
                      {srv.title}
                    </h3>
                    <p className="text-[var(--screen-secondary)] leading-relaxed flex-grow" style={{ fontSize: '18px' }}>
                      {srv.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. WHY OUR SERVICES */}
        <section 
          className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto"
        >
          <div ref={whyRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={whyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease }}
              className="lg:col-span-6"
            >
              <span className="text-[var(--amber-primary)] text-xs font-semibold uppercase tracking-widest block mb-4">Value Proposition</span>
              <h2 className="font-bold text-white mb-6" style={{ fontSize: '38px' }}>
                Why Choose Our Services
              </h2>
              <div className="border-t-2 border-[var(--amber-primary)] w-16 mb-8" />
              <p className="text-[var(--screen-secondary)] leading-relaxed mb-6" style={{ fontSize: '18px' }}>
                We bring a blend of senior leadership, state-of-the-art tech stacks, and modular architectures to ensure that your business stays ahead of the technology curve.
              </p>
              <p className="text-[var(--screen-secondary)] leading-relaxed" style={{ fontSize: '18px' }}>
                Every solution we engineer undergoes extensive code reviews, threat-modeling security assessments, and unit-testing coverage.
              </p>
            </motion.div>

            {/* Right Checklist */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={whyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15, ease }}
              className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {whyChooseList.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-[var(--void-800)] p-6 border border-[var(--hairline-subtle)] flex items-start gap-4 hover:border-[var(--amber-primary)] transition-all duration-300"
                >
                  <CheckCircle2 className="w-6 h-6 text-[var(--amber-primary)] shrink-0 mt-1" />
                  <span className="text-white font-medium" style={{ fontSize: '18px' }}>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 5. PROCESS SECTION (Short Timeline) */}
        <section 
          className="py-20 px-6 md:px-12"
          style={{ background: 'var(--void-800)' }}
        >
          <div ref={processRef} className="max-w-[1440px] mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease }}
              className="mb-16 text-center"
            >
              <span className="text-[var(--amber-primary)] text-xs font-semibold uppercase tracking-widest block mb-4">Methodology</span>
              <h2 className="font-bold text-white mb-2" style={{ fontSize: '38px' }}>
                How We Deliver
              </h2>
              <div className="border-t-2 border-[var(--amber-primary)] w-16 mx-auto mt-4" />
            </motion.div>

            {/* Horizontal Timeline steps for Desktop, stacked for Mobile */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease }}
                  className="bg-[var(--void-900)] p-6 border border-[var(--hairline-subtle)] hover:border-[var(--amber-primary)] transition-all duration-300 text-center flex flex-col items-center relative group"
                >
                  {/* Step Connector Line */}
                  {idx < 5 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-[var(--hairline-subtle)] group-hover:bg-[var(--amber-primary)] transition-colors duration-300 z-10" />
                  )}
                  
                  <div className="text-4xl mb-4 bg-[var(--void-800)] w-16 h-16 rounded-full flex items-center justify-center border border-[var(--hairline-subtle)] transition-colors duration-300 group-hover:border-[var(--amber-primary)]">
                    {step.icon}
                  </div>
                  
                  <p className="text-xs text-[var(--amber-primary)] font-semibold uppercase tracking-wider mb-2">Step 0{idx + 1}</p>
                  <h3 className="text-white font-medium" style={{ fontSize: '18px' }}>
                    {step.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. FINAL CTA SECTION */}
        <section 
          className="relative py-20 px-6 md:px-12 text-center bg-cover bg-center overflow-hidden border-t border-[var(--hairline-subtle)]"
          style={{ backgroundImage: "url('/assets/services_cta.png')" }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#000000]/80 z-0" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <h2
              className="font-bold text-white mb-6 leading-tight"
              style={{ fontSize: 'clamp(28px, 5vw, 40px)' }}
            >
              Let’s Build Your Digital Solution Together
            </h2>
            <p
              className="text-gray-300 font-normal mb-8 max-w-2xl leading-relaxed"
              style={{ fontSize: '18px' }}
            >
              Have an idea? We help you turn it into a powerful digital product.
            </p>
            
            <Link
              to="/contact"
              className="font-btn-text inline-flex items-center justify-center bg-[var(--amber-primary)] text-[var(--void-900)] px-8 py-4 border border-[var(--amber-primary)] transition-all duration-300 hover:bg-transparent hover:text-white hover:border-white rounded-none"
            >
              Contact Us
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
