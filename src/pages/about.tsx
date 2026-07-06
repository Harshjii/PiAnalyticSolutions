import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const ease = [0.32, 0.72, 0.24, 1] as const;

export default function AboutPage() {
  const storyRef = useRef<HTMLDivElement>(null);
  const storyInView = useInView(storyRef, { once: true, margin: '-80px' });

  const missionRef = useRef<HTMLDivElement>(null);
  const missionInView = useInView(missionRef, { once: true, margin: '-80px' });

  const valuesRef = useRef<HTMLDivElement>(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: '-80px' });

  const approachRef = useRef<HTMLDivElement>(null);
  const approachInView = useInView(approachRef, { once: true, margin: '-80px' });

  const founderRef = useRef<HTMLDivElement>(null);
  const founderInView = useInView(founderRef, { once: true, margin: '-80px' });

  return (
    <>
      <Helmet>
        <title>About Us — Pi Analytic Solutions</title>
        <link rel="canonical" href="https://www.pianalyticsolutions.com/about" />
        <meta
          name="description"
          content="Founded in 2025, Pi Analytic Solutions delivers innovative technology solutions that help businesses grow, simplify operations, and achieve digital transformation."
        />
      </Helmet>

      {/* Main Container - retaining the brand's dark theme layout */}
      <div 
        style={{ background: 'var(--void-900)', color: 'var(--screen-primary)', fontFamily: 'Poppins, sans-serif' }}
        className="min-h-screen selection:bg-[var(--amber-primary)] selection:text-black"
      >
        
        {/* 1. HERO SECTION */}
        <section 
          className="relative min-h-[60vh] flex items-center justify-center px-6 md:px-12 py-20 text-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('/assets/about_hero.png')" }}
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
              Who We Are
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="text-white font-bold leading-tight mb-6"
              style={{ fontSize: 'clamp(32px, 6vw, 48px)' }}
            >
              About Pi Analytic Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="text-gray-300 font-normal mb-8 max-w-2xl leading-relaxed"
              style={{ fontSize: 'clamp(16px, 3vw, 20px)' }}
            >
              Delivering innovative technology solutions that help businesses grow, simplify operations, and achieve digital transformation.
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
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 2. OUR STORY SECTION */}
        <section 
          id="story"
          className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto"
        >
          <div ref={storyRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease }}
              className="lg:col-span-7"
            >
              <span className="text-[var(--amber-primary)] text-xs font-semibold uppercase tracking-widest block mb-4">Our History</span>
              <h2 
                className="font-bold text-white mb-6 animate-pulse-slow"
                style={{ fontSize: '38px' }}
              >
                Our Story
              </h2>
              <div className="border-t-2 border-[var(--amber-primary)] w-16 mb-6" />
              <p className="mb-6 leading-relaxed text-[var(--screen-secondary)]" style={{ fontSize: '18px' }}>
                Founded in 2025, Pi Analytic Solutions was established with a vision to make technology simple, practical, and accessible for businesses. We help startups, enterprises, government organizations, and international clients solve real business challenges through smart digital solutions.
              </p>
              <p className="leading-relaxed text-[var(--screen-secondary)]" style={{ fontSize: '18px' }}>
                Our goal is to deliver reliable, secure, and scalable technology that improves efficiency, supports business growth, and creates long-term value.
              </p>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15, ease }}
              className="lg:col-span-5 h-[350px] lg:h-[450px] relative overflow-hidden border border-[var(--hairline-subtle)]"
            >
              <img
                src="/assets/about_story.png"
                alt="Pi Analytic Solutions brainstorming team discussion"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* 3. OUR MISSION & VISION SECTION (Light/Alternative Dark Section) */}
        <section 
          className="py-20 px-6 md:px-12"
          style={{ background: 'var(--void-800)' }}
        >
          <div ref={missionRef} className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease }}
              className="bg-[var(--void-900)] p-8 md:p-10 border border-[var(--hairline-subtle)] flex flex-col items-start hover:border-[var(--amber-primary)] transition-all duration-300"
            >
              <div className="text-4xl mb-6 bg-[var(--void-800)] w-16 h-16 flex items-center justify-center border border-[var(--hairline-subtle)]">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">Mission</h3>
              <p className="text-[var(--screen-secondary)] leading-relaxed" style={{ fontSize: '18px' }}>
                To simplify business challenges through innovative, secure, and scalable technology solutions while building long-term relationships based on trust, quality, and innovation.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15, ease }}
              className="bg-[var(--void-900)] p-8 md:p-10 border border-[var(--hairline-subtle)] flex flex-col items-start hover:border-[var(--amber-primary)] transition-all duration-300"
            >
              <div className="text-4xl mb-6 bg-[var(--void-800)] w-16 h-16 flex items-center justify-center border border-[var(--hairline-subtle)]">👁️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
              <p className="text-[var(--screen-secondary)] leading-relaxed" style={{ fontSize: '18px' }}>
                To become a trusted technology partner by delivering future-ready digital solutions that empower businesses and create lasting impact.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 4. OUR CORE VALUES SECTION */}
        <section 
          className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto"
        >
          <div ref={valuesRef} className="flex flex-col">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease }}
              className="mb-12"
            >
              <span className="text-[var(--amber-primary)] text-xs font-semibold uppercase tracking-widest block mb-4">Our Principles</span>
              <h2 className="font-bold text-white mb-2" style={{ fontSize: '38px' }}>
                Our Core Values
              </h2>
              <div className="border-t-2 border-[var(--amber-primary)] w-16 mt-4" />
            </motion.div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Innovation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1, ease }}
                className="bg-[var(--void-800)] p-8 border border-[var(--hairline-subtle)] hover:border-[var(--amber-primary)] transition-all duration-300"
              >
                <div className="text-3xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                <p className="text-[var(--screen-secondary)] leading-relaxed" style={{ fontSize: '18px' }}>
                  We continuously adopt modern technologies to build smarter and future-ready solutions.
                </p>
              </motion.div>

              {/* Integrity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2, ease }}
                className="bg-[var(--void-800)] p-8 border border-[var(--hairline-subtle)] hover:border-[var(--amber-primary)] transition-all duration-300"
              >
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-white mb-3">Integrity</h3>
                <p className="text-[var(--screen-secondary)] leading-relaxed" style={{ fontSize: '18px' }}>
                  We believe in honesty, transparency, and building strong client relationships.
                </p>
              </motion.div>

              {/* Excellence */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3, ease }}
                className="bg-[var(--void-800)] p-8 border border-[var(--hairline-subtle)] hover:border-[var(--amber-primary)] transition-all duration-300"
              >
                <div className="text-3xl mb-4">⭐</div>
                <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
                <p className="text-[var(--screen-secondary)] leading-relaxed" style={{ fontSize: '18px' }}>
                  We focus on delivering high-quality solutions with attention to every detail.
                </p>
              </motion.div>

              {/* Customer Success */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4, ease }}
                className="bg-[var(--void-800)] p-8 border border-[var(--hairline-subtle)] hover:border-[var(--amber-primary)] transition-all duration-300"
              >
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-3">Customer Success</h3>
                <p className="text-[var(--screen-secondary)] leading-relaxed" style={{ fontSize: '18px' }}>
                  Our clients' success is our biggest achievement. Every solution we build is designed to create real business value.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. OUR WORKING APPROACH SECTION (Light/Alternative Dark Section) */}
        <section 
          className="py-20 px-6 md:px-12"
          style={{ background: 'var(--void-800)' }}
        >
          <div ref={approachRef} className="max-w-[1440px] mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={approachInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease }}
              className="mb-16 text-center"
            >
              <span className="text-[var(--amber-primary)] text-xs font-semibold uppercase tracking-widest block mb-4">Workflow</span>
              <h2 className="font-bold text-white mb-2" style={{ fontSize: '38px' }}>
                How We Work
              </h2>
              <div className="border-t-2 border-[var(--amber-primary)] w-16 mx-auto mt-4" />
            </motion.div>

            {/* Timeline steps */}
            <div className="relative border-l-2 border-[var(--amber-primary)]/30 ml-4 md:ml-12 pl-8 md:pl-12 flex flex-col gap-12">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={approachInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1, ease }}
                className="relative"
              >
                <div className="absolute -left-[42px] md:-left-[58px] top-1 bg-[var(--void-900)] text-[var(--amber-primary)] border-2 border-[var(--amber-primary)] w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm shadow">
                  1
                </div>
                <h3 className="text-xl font-bold text-white mb-2">🔍 Understand Requirements</h3>
                <p className="text-[var(--screen-secondary)] max-w-3xl" style={{ fontSize: '18px' }}>
                  We listen carefully to understand your business goals and challenges.
                </p>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={approachInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2, ease }}
                className="relative"
              >
                <div className="absolute -left-[42px] md:-left-[58px] top-1 bg-[var(--void-900)] text-[var(--amber-primary)] border-2 border-[var(--amber-primary)] w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm shadow">
                  2
                </div>
                <h3 className="text-xl font-bold text-white mb-2">📋 Planning & Strategy</h3>
                <p className="text-[var(--screen-secondary)] max-w-3xl" style={{ fontSize: '18px' }}>
                  We create a clear roadmap for successful project execution.
                </p>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={approachInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3, ease }}
                className="relative"
              >
                <div className="absolute -left-[42px] md:-left-[58px] top-1 bg-[var(--void-900)] text-[var(--amber-primary)] border-2 border-[var(--amber-primary)] w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm shadow">
                  3
                </div>
                <h3 className="text-xl font-bold text-white mb-2">💻 Design & Development</h3>
                <p className="text-[var(--screen-secondary)] max-w-3xl" style={{ fontSize: '18px' }}>
                  Our team develops secure, scalable, and user-friendly digital solutions.
                </p>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={approachInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4, ease }}
                className="relative"
              >
                <div className="absolute -left-[42px] md:-left-[58px] top-1 bg-[var(--void-900)] text-[var(--amber-primary)] border-2 border-[var(--amber-primary)] w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm shadow">
                  4
                </div>
                <h3 className="text-xl font-bold text-white mb-2">✅ Testing & Quality Assurance</h3>
                <p className="text-[var(--screen-secondary)] max-w-3xl" style={{ fontSize: '18px' }}>
                  Every project is tested thoroughly for performance, security, and reliability.
                </p>
              </motion.div>

              {/* Step 5 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={approachInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5, ease }}
                className="relative"
              >
                <div className="absolute -left-[42px] md:-left-[58px] top-1 bg-[var(--void-900)] text-[var(--amber-primary)] border-2 border-[var(--amber-primary)] w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm shadow">
                  5
                </div>
                <h3 className="text-xl font-bold text-white mb-2">🚀 Deployment</h3>
                <p className="text-[var(--screen-secondary)] max-w-3xl" style={{ fontSize: '18px' }}>
                  We launch your solution smoothly with complete support.
                </p>
              </motion.div>

              {/* Step 6 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={approachInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6, ease }}
                className="relative"
              >
                <div className="absolute -left-[42px] md:-left-[58px] top-1 bg-[var(--void-900)] text-[var(--amber-primary)] border-2 border-[var(--amber-primary)] w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm shadow">
                  6
                </div>
                <h3 className="text-xl font-bold text-white mb-2">🤝 Support & Maintenance</h3>
                <p className="text-[var(--screen-secondary)] max-w-3xl" style={{ fontSize: '18px' }}>
                  We provide continuous updates and technical assistance whenever needed.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 6. FOUNDER & CEO SECTION */}
        <section 
          className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto"
        >
          <div ref={founderRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Circular Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={founderInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-[var(--void-800)] ring-4 ring-[var(--amber-primary)]/20 group">
                <img
                  src="/assets/ajay_agrawal.png"
                  alt="Ajay Agrawal portrait, Founder & CEO of Pi Analytic Solutions"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Right Bio */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={founderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15, ease }}
              className="lg:col-span-7"
            >
              <span className="text-[var(--amber-primary)] text-xs font-semibold uppercase tracking-widest block mb-4">Leadership</span>
              <h2 className="font-bold text-white mb-6" style={{ fontSize: '38px' }}>
                Founder & CEO
              </h2>
              <div className="border-t-2 border-[var(--amber-primary)] w-16 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Ajay Agrawal</h3>
              <p className="mb-6 leading-relaxed text-[var(--screen-secondary)]" style={{ fontSize: '18px' }}>
                Ajay Agrawal is an M.Tech Mechanical Engineer with over 35 years of leadership experience in engineering and education. His vision is to combine technology, innovation, and practical business solutions to help organizations grow and succeed.
              </p>
              <p className="leading-relaxed text-[var(--screen-secondary)]" style={{ fontSize: '18px' }}>
                Under his leadership, Pi Analytic Solutions is committed to delivering reliable, high-quality, and future-ready digital solutions while maintaining the highest standards of professionalism and customer satisfaction.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 7. LET'S BUILD SOMETHING GREAT TOGETHER (Final CTA) */}
        <section 
          className="relative py-20 px-6 md:px-12 text-center bg-cover bg-center overflow-hidden border-t border-[var(--hairline-subtle)]"
          style={{ backgroundImage: "url('/assets/about_cta.png')" }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#000000]/80 z-0" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <h2
              className="font-bold text-white mb-6 leading-tight"
              style={{ fontSize: 'clamp(28px, 5vw, 40px)' }}
            >
              Let's Turn Your Ideas into Reality
            </h2>
            <p
              className="text-gray-300 font-normal mb-8 max-w-2xl leading-relaxed"
              style={{ fontSize: '18px' }}
            >
              Whether you're a startup, an established business, or a government organization, Pi Analytic Solutions is ready to help you build innovative digital solutions that support your growth and success.
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
