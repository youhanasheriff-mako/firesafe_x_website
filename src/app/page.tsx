'use client';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Search,
  ShoppingBag,
  ChevronRight,
  Shield,
  Zap,
  Battery,
  Gauge,
  Play,
  GraduationCap,
  Flame,
  BarChart3,
  Bot,
  Sparkles,
  Building2,
  Factory,
  School,
} from 'lucide-react';

function Section({
  id,
  className = '',
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`relative w-full ${className}`}>
      {children}
    </section>
  );
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      role="navigation"
      aria-label="Primary"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
        scrolled
          ? 'backdrop-blur bg-white/80 dark:bg-black/60 border-b soft-border text-white'
          : 'bg-transparent text-white'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 h-12 md:h-[48px] flex items-center justify-between">
        <a
          href="#hero"
          className="text-sm font-semibold tracking-tight"
          aria-label="FireSafeX home"
        >
          FireSafeX
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:underline underline-offset-4" href="#overview">
            Overview
          </a>
          <a className="hover:underline underline-offset-4" href="#features">
            Features
          </a>
          <a className="hover:underline underline-offset-4" href="#gallery">
            Gallery
          </a>
          <a className="hover:underline underline-offset-4" href="#tech">
            Tech Specs
          </a>
          <a className="hover:underline underline-offset-4" href="#buy">
            Buy
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className="p-2 rounded-full hover:bg-white/10 md:hover:bg-black/5 dark:hover:bg-white/10 transition"
          >
            <Search className="size-4" />
          </button>
          <button
            aria-label="Bag"
            className="p-2 rounded-full hover:bg-white/10 md:hover:bg-black/5 dark:hover:bg-white/10 transition"
          >
            <ShoppingBag className="size-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const [videoOpen, setVideoOpen] = useState(false);

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: prefersReducedMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease: 'easeOut' },
  } as const;

  return (
    <div className="relative">
      <NavBar />

      {/* Hero */}
      <Section
        id="hero"
        className="relative min-h-[92vh] md:min-h-screen overflow-hidden"
      >
        {/* Background video (desktop) */}
        <div aria-hidden className="absolute inset-0 hidden md:block">
          <video
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            autoPlay={!prefersReducedMotion}
            poster="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2400&auto=format&fit=crop"
          >
            <source
              src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/10" />
        </div>
        {/* Static image fallback (mobile) */}
        <div className="absolute inset-0 md:hidden">
          <img
            src="https://picsum.photos/seed/firesafex-hero/1600/1200"
            alt=""
            aria-hidden
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/10" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 pt-28 md:pt-40 pb-20">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-white text-[42px] sm:text-[56px] md:text-[80px] lg:text-[96px] font-semibold tracking-tight"
          >
            FireSafeX: The Future of Fire Safety Training
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
            className="mt-3 text-neutral-200 text-[18px] md:text-[20px] max-w-2xl"
          >
            Immersive. Realistic. Cost‑effective. Experience true readiness.
          </motion.p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#overview"
              className="inline-flex items-center rounded-lg px-5 py-2.5 bg-[--color-accent] border border-white/30 text-white text-sm font-medium transition-transform hover:scale-[1.02] shadow-sm hover:border-white/50"
            >
              Request Demo
            </a>
            <a
              href="#features"
              className="inline-flex items-center rounded-lg px-5 py-2.5 border border-white/30 text-white text-sm font-medium transition-colors hover:border-white/50"
            >
              Learn more
            </a>
            <button
              onClick={() => setVideoOpen(true)}
              className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 border border-white/30 text-white text-sm font-medium transition-colors hover:border-white/50"
              aria-label="Watch trailer"
            >
              <Play className="size-4" /> Watch trailer
            </button>
          </div>
        </div>
      </Section>

      {/* Overview / Feature highlight */}
      <Section id="overview" className="mx-auto max-w-[1200px] px-6 py-[100px]">
        <motion.h2
          {...fadeUp}
          className="text-[40px] md:text-[48px] font-semibold text-center"
        >
          The Critical Gaps in Current Fire Safety Training
        </motion.h2>
        <motion.p
          {...fadeUp}
          className="mt-4 text-[--color-muted] text-xl text-center max-w-3xl mx-auto"
        >
          Traditional fire extinguisher training often falls short, creating a
          significant gap between theoretical knowledge and practical
          competence.
        </motion.p>
        <motion.div
          {...fadeUp}
          className="mt-12 overflow-hidden rounded-3xl border soft-border"
        >
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2400&auto=format&fit=crop"
            alt="Immersive training experience"
            className="w-full h-[360px] md:h-[520px] object-cover"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </motion.div>
      </Section>

      {/* Grid features */}
      <Section id="features" className="mx-auto max-w-[1200px] px-6 py-[100px]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Shield,
              title: 'Limited Real‑World Practice',
              desc: 'Most individuals lack hands‑on experience with fire extinguishers, leaving them unprepared for actual emergencies.',
            },
            {
              icon: Battery,
              title: 'Resource Intensiveness',
              desc: 'Traditional methods waste extinguishers, flammable objects, and fuel — driving up costs.',
            },
            {
              icon: Gauge,
              title: 'Tedious Setup & Management',
              desc: 'Realistic scenarios are complex and time‑consuming to stage, reducing frequency and accessibility.',
            },
          ].map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-2xl border soft-border p-6 hover:shadow-sm transition-transform hover:-translate-y-1 bg-[--color-surface]"
            >
              <Icon className="size-5 mb-3 text-[--color-accent]" />
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="mt-2 text-[--color-muted] text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Missing Link */}
      <Section
        id="missing-link"
        className="mx-auto max-w-[1200px] px-6 py-[100px]"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h3
              {...fadeUp}
              className="text-[28px] md:text-[36px] font-semibold"
            >
              The Critical Gap in Fire Safety Training
            </motion.h3>
            <motion.p
              {...fadeUp}
              className="mt-4 text-[--color-muted] max-w-3xl"
            >
              Current fire safety training suffers from a fundamental disconnect between theory and practice. 
              Generic controllers and classroom simulations fail to prepare individuals for the reality of handling 
              actual fire extinguishers in emergency situations.
            </motion.p>
            <motion.p
              {...fadeUp}
              className="mt-3 text-[--color-muted] max-w-3xl"
            >
              Traditional training methods rely on outdated approaches that don&apos;t translate to real-world scenarios. 
              Generic controllers lack the authentic feel, weight, and operation of actual fire extinguishers, 
              preventing trainees from developing proper muscle memory and confidence.
            </motion.p>
            <motion.p
              {...fadeUp}
              className="mt-3 text-[--color-muted] max-w-3xl"
            >
              Meanwhile, live fire training, while realistic, poses significant safety risks and incurs high costs, 
              making frequent practice sessions impractical for most organizations.
            </motion.p>
          </div>
          <motion.div
            {...fadeUp}
            className="rounded-2xl overflow-hidden border soft-border"
          >
            <img
              src="https://picsum.photos/seed/missing-link/1200/800"
              alt="Illustration representing the gap between virtual controllers and real fire extinguisher handling"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>
      </Section>

      {/* Solution */}
      <Section id="solution" className="mx-auto max-w-[1200px] px-6 py-[100px]">
        <motion.h2
          {...fadeUp}
          className="text-[32px] md:text-[40px] font-semibold"
        >
          FireSafeX: Bridging the Reality Gap
        </motion.h2>
        <motion.p {...fadeUp} className="mt-3 text-[--color-muted] max-w-3xl">
          FireSafeX addresses these challenges head‑on with a groundbreaking
          solution: an immersive mixed reality application integrated with a
          real fire extinguisher. This innovative approach provides an
          unparalleled training experience that is both effective and efficient.
        </motion.p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Shield,
              title: 'Realistic Equipment Handling',
              desc: 'Trainees use a device that feels and operates like a real extinguisher.',
            },
            {
              icon: Flame,
              title: 'Immersive Virtual Fires',
              desc: 'Fires appear virtually within the trainee’s actual environment for true realism.',
            },
            {
              icon: Sparkles,
              title: 'Zero Risk, Zero Waste',
              desc: 'No fuel or flammables needed — safe and eco‑friendly.',
            },
            {
              icon: Battery,
              title: 'Portable & Efficient',
              desc: 'Plug‑and‑play setup, easily transportable, minimal supervision required.',
            },
          ].map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-2xl border soft-border p-6 bg-[--color-surface]"
            >
              <Icon className="size-5 mb-3 text-[--color-accent]" />
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="mt-2 text-[--color-muted] text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Immersive gallery (edge-to-edge) */}
      <Section id="gallery" className="py-[100px]">
        <div className="space-y-16">
          {[
            {
              id: 1,
              title: "Realistic Equipment Handling",
              subtitle: "Functions like a real extinguisher",
              description: "Experience authentic pin removal, squeeze grip, and aiming with haptic feedback that simulates recoil and discharge feel."
            },
            {
              id: 2,
              title: "Immersive Virtual Fires",
              subtitle: "Fires appear in the real physical environment",
              description: "Any space becomes a fire safety dojo with dynamic simulations and diverse fire emergencies for hands-on practice."
            },
            {
              id: 3,
              title: "Zero Risk, Zero Waste",
              subtitle: "Safe, eco-friendly, no consumables",
              description: "Completely safe and repeatable training with no risks, unlimited practice, and cost-efficient operations."
            }
          ].map(({ id, title, subtitle, description }) => (
            <div key={id} className="relative">
              <img
                src={`https://picsum.photos/seed/firesafex-gallery-${id}/2400/1200`}
                alt={`Product gallery ${id}`}
                className="w-full h-[360px] md:h-[560px] object-cover"
                loading="lazy"
                decoding="async"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-x-6 md:inset-x-10 top-1/2 -translate-y-1/2 max-w-[600px]">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8 }}
                  className="text-white"
                >
                  <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-[--color-accent]/20 text-white backdrop-blur mb-4">
                    <ChevronRight className="size-3" /> Key Feature {id}
                  </div>
                  <h3 className="text-[28px] md:text-[36px] font-semibold mb-2">{title}</h3>
                  <p className="text-[16px] md:text-[18px] text-white/90 mb-3">{subtitle}</p>
                  <p className="text-[14px] md:text-[16px] text-white/80 max-w-[500px] leading-relaxed">{description}</p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Core Components */}
      <Section
        id="components"
        className="mx-auto max-w-[1200px] px-6 py-[100px]"
      >
        <h2 className="text-[32px] md:text-[40px] font-semibold">
          Core Components: The Technology Behind FireSafeX
        </h2>
        <p className="mt-3 text-[--color-muted] max-w-3xl">
          FireSafeX combines cutting-edge hardware and software to deliver an unparalleled fire safety training experience. 
          Our dual-component system bridges the gap between virtual simulation and real-world application.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl border soft-border p-6 bg-[--color-surface]">
            <h3 className="text-xl font-medium">
              1. The Smart Fire Extinguisher
            </h3>
            <div className="mt-4 rounded-xl overflow-hidden border soft-border">
              <img
                src="https://images.unsplash.com/photo-1602205764667-e4a893d394c7?q=80&w=1200&auto=format&fit=crop"
                alt="Smart fire extinguisher placeholder"
                className="w-full h-48 object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <ul className="mt-4 space-y-2 text-[--color-muted] list-disc pl-5 text-sm">
              <li>
                <strong>Authentic Feel:</strong> Weighted design that replicates the heft and balance of a real fire extinguisher
              </li>
              <li>
                <strong>Realistic Operation:</strong> Pin removal, squeeze grip, and aiming mechanics that mirror actual extinguisher use
              </li>
              <li>
                <strong>Haptic Feedback:</strong> Advanced vibration system simulates recoil and discharge sensations for complete immersion
              </li>
              <li>
                <strong>Smart Sensors:</strong> Precision tracking of grip pressure, aim direction, and operational technique
              </li>
              <li>
                <strong>Wireless Connectivity:</strong> Seamless real-time communication with MR headset for instant response
              </li>
            </ul>
            <p className="mt-3 text-[--color-muted] text-sm">
              Portable, rechargeable, and designed for repeated use across diverse training scenarios without consumables or maintenance.
            </p>
          </div>
          <div className="rounded-2xl border soft-border p-6 bg-[--color-surface]">
            <h3 className="text-xl font-medium">
              2. The Mixed Reality Application
            </h3>
            <div className="mt-4 rounded-xl overflow-hidden border soft-border">
              <img
                src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop"
                alt="Mixed reality headset placeholder"
                className="w-full h-48 object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <ul className="mt-4 space-y-2 text-[--color-muted] list-disc pl-5 text-sm">
              <li>
                <strong>Spatial Fire Simulation:</strong> Virtual fires appear directly in your physical environment using advanced AR technology
              </li>
              <li>
                <strong>Interactive 3D Lessons:</strong> Comprehensive modules covering fire classes, safety protocols, and equipment operation
              </li>
              <li>
                <strong>Dynamic Scenarios:</strong> Diverse emergency situations from kitchen fires to industrial incidents
              </li>
              <li>
                <strong>AI Fire Safety Expert:</strong> Conversational 3D character providing real-time guidance and instant answers
              </li>
              <li>
                <strong>Performance Analytics:</strong> Detailed tracking of technique, response time, and decision-making accuracy
              </li>
            </ul>
            <p className="mt-3 text-[--color-muted] text-sm">
              Transform any space into a comprehensive fire safety training facility with unlimited scenarios and zero safety risks.
            </p>
          </div>
        </div>
      </Section>

      {/* Training Journey */}
      <Section id="journey" className="mx-auto max-w-[1200px] px-6 py-[100px]">
        <h2 className="text-[32px] md:text-[40px] font-semibold">
          Your FireSafeX Training Journey
        </h2>
        <p className="mt-3 text-[--color-muted] max-w-3xl">
          Experience a comprehensive 4-step training methodology that transforms theoretical knowledge into practical expertise. 
          From foundational learning to real-world application, each step builds upon the previous to ensure complete fire safety mastery.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-2xl border soft-border p-6 bg-[--color-surface]">
            <GraduationCap className="size-5 mb-3 text-[--color-accent]" />
            <h3 className="font-medium">Step 1: Learn the Fundamentals</h3>
            <p className="mt-2 text-sm text-[--color-muted]">
              Master fire safety theory through immersive 3D lessons. Learn about different fire classes, 
              extinguisher types, safety protocols, and emergency procedures. Build a solid foundation 
              of knowledge before moving to practical application.
            </p>
          </div>
          <div className="rounded-2xl border soft-border p-6 bg-[--color-surface]">
            <Flame className="size-5 mb-3 text-[--color-accent]" />
            <h3 className="font-medium">Step 2: Practice in Virtual Reality</h3>
            <p className="mt-2 text-sm text-[--color-muted]">
              Enter immersive mixed reality environments where virtual fires appear in your real space. 
              Practice with the smart extinguisher replica, experiencing authentic pin removal, grip, 
              and aiming while confronting diverse fire scenarios safely.
            </p>
          </div>
          <div className="rounded-2xl border soft-border p-6 bg-[--color-surface]">
            <BarChart3 className="size-5 mb-3 text-[--color-accent]" />
            <h3 className="font-medium">Step 3: Receive Real-Time Feedback</h3>
            <p className="mt-2 text-sm text-[--color-muted]">
              Get instant, AI-powered analysis of your performance. Detailed reports track your technique, 
              response time, decision-making accuracy, and equipment handling. Identify strengths and 
              areas for improvement with personalized recommendations.
            </p>
          </div>
          <div className="rounded-2xl border soft-border p-6 bg-[--color-surface]">
            <Bot className="size-5 mb-3 text-[--color-accent]" />
            <h3 className="font-medium">Step 4: Consult the AI Expert</h3>
            <p className="mt-2 text-sm text-[--color-muted]">
              Access our conversational 3D AI fire safety expert for instant guidance. Ask specific questions, 
              clarify procedures, and receive expert advice tailored to your training needs. 
              Continuous learning support ensures mastery of fire safety skills.
            </p>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section id="benefits" className="mx-auto max-w-[1200px] px-6 py-[100px]">
        <h2 className="text-[32px] md:text-[40px] font-semibold">
          Why Choose FireSafeX?
        </h2>
        <p className="mt-3 text-[--color-muted] max-w-3xl">
          Experience the future of fire safety training with revolutionary benefits that transform 
          how organizations prepare their teams for emergency situations.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Shield,
              title: 'Enhanced Safety',
              desc: 'Train in completely safe environments without risk of injury, property damage, or exposure to real fire hazards.',
            },
            {
              icon: Gauge,
              title: 'Cost-Effective Training',
              desc: 'Eliminate ongoing costs of consumables, maintenance, and facility requirements while scaling to unlimited trainees.',
            },
            {
              icon: Sparkles,
              title: 'Realistic Experience',
              desc: 'Experience authentic fire extinguisher operation with haptic feedback and true-to-life equipment handling.',
            },
            {
              icon: Zap,
              title: 'Improved Learning Outcomes',
              desc: 'Achieve better knowledge retention and skill development through immersive, hands-on mixed reality training.',
            },
            {
              icon: Battery,
              title: 'Accessibility & Convenience',
              desc: 'Deploy training anywhere, anytime, without weather dependencies or complex logistics.',
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border soft-border p-6 bg-[--color-surface]"
            >
              <Icon className="size-5 mb-3 text-[--color-accent]" />
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="mt-2 text-[--color-muted] text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Who Benefits */}
      <Section id="who" className="mx-auto max-w-[1200px] px-6 py-[100px]">
        <h2 className="text-[32px] md:text-[40px] font-semibold">
          Who Benefits from FireSafeX?
        </h2>
        <p className="mt-3 text-[--color-muted] max-w-3xl">
          FireSafeX transforms fire safety training across diverse sectors, providing tailored solutions 
          for organizations committed to protecting their people and assets.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          <div className="rounded-2xl border soft-border p-6 bg-[--color-surface]">
            <Building2 className="size-5 mb-3 text-[--color-accent]" />
            <h3 className="font-medium">Corporate Offices</h3>
            <p className="mt-2 text-[--color-muted]">
              Empower employees with practical fire safety skills, ensuring workplace safety 
              compliance and building confidence in emergency response.
            </p>
          </div>
          <div className="rounded-2xl border soft-border p-6 bg-[--color-surface]">
            <Factory className="size-5 mb-3 text-[--color-accent]" />
            <h3 className="font-medium">Industrial Facilities</h3>
            <p className="mt-2 text-[--color-muted]">
              Train workers in high-risk environments with realistic scenarios, 
              preparing them for rapid and precise emergency response.
            </p>
          </div>
          <div className="rounded-2xl border soft-border p-6 bg-[--color-surface]">
            <School className="size-5 mb-3 text-[--color-accent]" />
            <h3 className="font-medium">Educational Institutions</h3>
            <p className="mt-2 text-[--color-muted]">
              Provide comprehensive fire safety education for students and staff, 
              creating safer learning environments through practical training.
            </p>
          </div>
          <div className="rounded-2xl border soft-border p-6 bg-[--color-surface]">
            <Shield className="size-5 mb-3 text-[--color-accent]" />
            <h3 className="font-medium">Fire Safety Organizations</h3>
            <p className="mt-2 text-[--color-muted]">
              Enhance training programs with cutting-edge technology, 
              standardizing effective fire safety education across all locations.
            </p>
          </div>
        </div>
      </Section>

      {/* Vision */}
      <Section id="vision" className="mx-auto max-w-[1200px] px-6 py-[100px]">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-[32px] md:text-[40px] font-semibold">
              The Future of Fire Safety Training
            </h2>
            <p className="mt-3 text-[--color-muted] max-w-3xl">
              Our roadmap focuses on continuous innovation, expanding FireSafeX capabilities 
              to revolutionize fire safety education worldwide and set new industry standards.
            </p>
            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <ChevronRight className="mt-1 size-4 text-[--color-accent]" />
                <div>
                  <div className="font-medium">Advanced AI Analytics</div>
                  <div className="text-[--color-muted]">
                    Enhanced performance tracking with predictive analytics and 
                    personalized learning paths for optimal skill development.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ChevronRight className="mt-1 size-4 text-[--color-accent]" />
                <div>
                  <div className="font-medium">Multi-User Collaborative Training</div>
                  <div className="text-[--color-muted]">
                    Team-based emergency scenarios enabling coordinated response 
                    training and leadership skill development.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ChevronRight className="mt-1 size-4 text-[--color-accent]" />
                <div>
                  <div className="font-medium">Industry-Specific Scenarios</div>
                  <div className="text-[--color-muted]">
                    Specialized training modules for healthcare, aviation, manufacturing, 
                    and other high-risk industries with unique fire safety requirements.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ChevronRight className="mt-1 size-4 text-[--color-accent]" />
                <div>
                  <div className="font-medium">
                    Global Certification Standards
                  </div>
                  <div className="text-[--color-muted]">
                    Establishing FireSafeX as the worldwide benchmark for 
                    fire safety training certification and competency assessment.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            {...fadeUp}
            className="rounded-2xl overflow-hidden border soft-border"
          >
            <img
              src="https://picsum.photos/seed/missing-link/1200/800"
              alt="Illustration representing the gap between virtual controllers and real fire extinguisher handling"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>
      </Section>

      {/* Technical specifications */}
      <Section id="tech" className="mx-auto max-w-[1200px] px-6 py-[100px]">
        <h2 className="text-[32px] md:text-[40px] font-semibold">
          Technical Specifications
        </h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between border-b soft-border py-3">
              <dt className="text-[--color-muted]">Tracking</dt>
              <dd>6‑DoF wireless, sub‑10ms latency</dd>
            </div>
            <div className="flex justify-between border-b soft-border py-3">
              <dt className="text-[--color-muted]">Haptics</dt>
              <dd>Linear actuator feedback, adjustable</dd>
            </div>
            <div className="flex justify-between border-b soft-border py-3">
              <dt className="text-[--color-muted]">Battery</dt>
              <dd>Up to 8 hours per charge</dd>
            </div>
            <div className="flex justify-between border-b soft-border py-3">
              <dt className="text-[--color-muted]">Connectivity</dt>
              <dd>Wi‑Fi 6 / BLE 5.2</dd>
            </div>
          </dl>
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between border-b soft-border py-3">
              <dt className="text-[--color-muted]">Compatibility</dt>
              <dd>Major MR headsets</dd>
            </div>
            <div className="flex justify-between border-b soft-border py-3">
              <dt className="text-[--color-muted]">Materials</dt>
              <dd>Aluminum alloy, soft‑touch composite</dd>
            </div>
            <div className="flex justify-between border-b soft-border py-3">
              <dt className="text-[--color-muted]">Weight</dt>
              <dd>1.2 kg</dd>
            </div>
            <div className="flex justify-between border-b soft-border py-3">
              <dt className="text-[--color-muted]">Dimensions</dt>
              <dd>450 × 120 × 90 mm</dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* Call to action */}
      <Section id="buy" className="mx-auto max-w-[1200px] px-6 py-[120px]">
        <div className="rounded-3xl border soft-border p-8 md:p-12 bg-[--color-surface] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-[28px] md:text-[36px] font-semibold">
              FireSafeX = Real Equipment + Virtual Fire
            </h3>
            <p className="mt-2 text-[--color-muted]">
              The Next Generation of Fire Safety Training
            </p>
            <p className="mt-2 text-[--color-muted] text-sm max-w-2xl">
              We believe true readiness comes from real experience. FireSafeX
              delivers that experience safely and effectively.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="#"
              className="inline-flex items-center rounded-lg px-5 py-2.5 bg-[--color-accent] border soft-border text-black text-sm font-medium transition-transform hover:scale-[1.02] shadow-sm"
            >
              Request demo
            </a>
            <a
              href="#tech"
              className="inline-flex items-center rounded-lg px-5 py-2.5 border soft-border text-sm font-medium hover:shadow-sm"
            >
              Learn more
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t soft-border">
        <div className="mx-auto max-w-[1200px] px-6 py-10 text-[13px] text-[--color-muted] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex gap-6">
            <a className="hover:underline underline-offset-4" href="#">
              Privacy Policy
            </a>
            <a className="hover:underline underline-offset-4" href="#">
              Terms of Use
            </a>
            <a className="hover:underline underline-offset-4" href="#">
              Contact
            </a>
          </div>
          <div className="opacity-70">
            © {new Date().getFullYear()} FireSafeX. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Simple non-intrusive trailer modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/60 p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden border soft-border"
            onClick={e => e.stopPropagation()}
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              controls
              playsInline
              poster="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1600&auto=format&fit=crop"
            >
              <source
                src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
