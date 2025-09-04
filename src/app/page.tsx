"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Mail, Shield, Wrench, Cog, Flame, Eye, Layers, Clock, Cpu, Users, GraduationCap, Building2, Factory, School, ShieldAlert, ChevronRight, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

function Section({ id, className = "", children }: { id?: string; className?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={`relative z-10 w-full ${className}`}>
      {children}
    </section>
  );
}

function FeatureCard({ icon: Icon, title, children }: { icon: LucideIcon; title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="glass rounded-xl p-5 border soft-border text-sm/6"
    >
      <div className="flex items-center gap-3 mb-2">
        <Icon className="size-5 text-[--color-fire-400]" />
        <h4 className="font-semibold text-base">{title}</h4>
      </div>
      <div className="text-[--color-muted]">{children}</div>
    </motion.div>
  );
}

function BenefitCard({ icon: Icon, title, children }: { icon: LucideIcon; title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl p-5 border soft-border bg-[--color-surface]"
    >
      <div className="flex items-center gap-3 mb-2">
        <Icon className="size-5 text-[--color-tech-500]" />
        <h4 className="font-semibold text-base">{title}</h4>
      </div>
      <div className="text-[--color-muted]">{children}</div>
    </motion.div>
  );
}

function VideoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4" onClick={onClose}>
      <div className="w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden border soft-border" onClick={(e) => e.stopPropagation()}>
        <video className="w-full h-full object-cover" autoPlay muted loop controls poster="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1600&auto=format&fit=crop">
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default function Home() {
  const [isVideoOpen, setVideoOpen] = useState(false);

  return (
    <div className="relative">
      <div className="page-bg" />

      <VideoModal open={isVideoOpen} onClose={() => setVideoOpen(false)} />

      {/* Hero */}
      <Section id="hero" className="px-6 md:px-10 max-w-7xl mx-auto pt-20 md:pt-28 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight"
            >
              FireSafeX: The Future of Fire Safety Training
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg text-[--color-muted]"
            >
              Immersive. Realistic. Cost‑effective. Experience true readiness.
            </motion.p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={() => setVideoOpen(true)} className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-gradient-to-r from-[--color-fire-500] to-[--color-fire-400] text-white font-medium cursor-pointer shadow-sm">
                <Play className="size-4 text-white" /> Watch Trailer
              </button>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg px-4 py-2 border soft-border soft-border-hover transition cursor-pointer">
                <Mail className="size-4" /> Get in Touch
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-[--color-fire-500]/30 to-[--color-tech-500]/20 blur-2xl" />
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden border soft-border">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1600&auto=format&fit=crop"
              >
                <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </Section>

      {/* Problem */}
      <Section id="problem" className="px-6 md:px-10 max-w-7xl mx-auto py-16 md:py-24">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl md:text-4xl font-bold">The Critical Gaps in Current Fire Safety Training</motion.h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureCard icon={Flame} title="Limited Real‑World Practice">Training rarely replicates the stress and nuance of real fires.</FeatureCard>
          <FeatureCard icon={Wrench} title="Resource Intensiveness">Expensive consumables and heavy logistics drain budgets.</FeatureCard>
          <FeatureCard icon={Cog} title="Tedious Setup & Management">Coordinating equipment and schedules slows programs.</FeatureCard>
          <FeatureCard icon={Shield} title="Safety Constraints">Realistic practice is limited by risk and compliance.</FeatureCard>
        </div>
      </Section>

      {/* Missing Link */}
      <Section id="missing-link" className="px-6 md:px-10 max-w-7xl mx-auto py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl md:text-4xl font-bold">Current solutions lack realism — <span className="text-[--color-fire-400]">FireSafeX</span> bridges the gap.</h3>
            <p className="mt-4 text-[--color-muted]">We combine real equipment ergonomics with immersive virtual fires to deliver true skill transfer.</p>
          </div>
          <div className="relative">
            <div className="aspect-video w-full rounded-2xl overflow-hidden border soft-border glass grid place-items-center">
              <Sparkles className="size-10 text-[--color-tech-500]" />
            </div>
          </div>
        </div>
      </Section>

      {/* Solution */}
      <Section id="solution" className="px-6 md:px-10 max-w-7xl mx-auto py-16 md:py-24">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl md:text-4xl font-bold">FireSafeX: Bridging the Reality Gap</motion.h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureCard icon={Layers} title="Realistic Equipment Handling">Train with a smart extinguisher that mirrors real weight and feel.</FeatureCard>
          <FeatureCard icon={Flame} title="Immersive Virtual Fires">True-to-life spread, smoke, and visibility under pressure.</FeatureCard>
          <FeatureCard icon={ShieldAlert} title="Zero Risk, Zero Waste">Practice without harm, emissions, or consumables.</FeatureCard>
          <FeatureCard icon={Clock} title="Portable & Efficient">Setup anywhere in minutes for rapid sessions.</FeatureCard>
        </div>
      </Section>

      {/* Core Components */}
      <Section id="components" className="px-6 md:px-10 max-w-7xl mx-auto py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="glass rounded-2xl p-6 border soft-border">
            <h3 className="text-xl md:text-2xl font-semibold">Smart Fire Extinguisher</h3>
            <div className="mt-4">
              <img
                src="https://images.unsplash.com/photo-1602205764667-e4a893d394c7?q=80&w=1200&auto=format&fit=crop"
                alt="Extinguisher placeholder"
                className="w-full h-48 object-cover rounded-lg border soft-border"
              />
            </div>
            <ul className="mt-4 space-y-2 text-[--color-muted] list-disc pl-5">
              <li>Lightweight, balanced design</li>
              <li>Haptic feedback and trigger sensors</li>
              <li>Wireless, low-latency tracking</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6 border soft-border">
            <h3 className="text-xl md:text-2xl font-semibold">Mixed Reality Application</h3>
            <div className="mt-4">
              <img
                src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop"
                alt="Headset placeholder"
                className="w-full h-48 object-cover rounded-lg border soft-border"
              />
            </div>
            <ul className="mt-4 space-y-2 text-[--color-muted] list-disc pl-5">
              <li>Immersive environments and realistic physics</li>
              <li>AI guidance and adaptive scenarios</li>
              <li>Performance scoring and debrief</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Training Journey */}
      <Section id="journey" className="px-6 md:px-10 max-w-7xl mx-auto py-16 md:py-24">
        <h3 className="text-2xl md:text-4xl font-bold">Training Journey</h3>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <BenefitCard icon={GraduationCap} title="Learn">Understand equipment and best practices.</BenefitCard>
          <BenefitCard icon={Flame} title="Simulate">Practice on varied fire types and scenarios.</BenefitCard>
          <BenefitCard icon={Eye} title="Evaluate">Track performance and readiness.</BenefitCard>
          <BenefitCard icon={Users} title="Ask the Expert">Live debrief and Q&A.
          </BenefitCard>
        </div>
      </Section>

      {/* Benefits */}
      <Section id="benefits" className="px-6 md:px-10 max-w-7xl mx-auto py-16 md:py-24">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl md:text-4xl font-bold">Unlocking Transformative Benefits</motion.h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <BenefitCard icon={Flame} title="Unparalleled Realism">High-fidelity visuals and physics for real skill transfer.</BenefitCard>
          <BenefitCard icon={Shield} title="Safe & Repeatable">Practice indefinitely without risk.</BenefitCard>
          <BenefitCard icon={Cpu} title="Cost‑Efficient">No consumables or complex logistics.</BenefitCard>
          <BenefitCard icon={Clock} title="Portable & Scalable">Train anywhere, anytime.</BenefitCard>
          <BenefitCard icon={Sparkles} title="Engaging & Effective">Gamified, guided, and memorable.</BenefitCard>
          <BenefitCard icon={Layers} title="Data‑Driven">Performance insights and analytics.</BenefitCard>
        </div>
      </Section>

      {/* Who Benefits */}
      <Section id="who" className="px-6 md:px-10 max-w-7xl mx-auto py-16 md:py-24">
        <h3 className="text-2xl md:text-4xl font-bold">Who Benefits</h3>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm/6 text-[--color-muted]">
          <div className="glass rounded-lg p-4 border soft-border">
            <Building2 className="size-5 mb-2 text-foreground/80" /> Corporate Offices
          </div>
          <div className="glass rounded-lg p-4 border soft-border">
            <Factory className="size-5 mb-2 text-foreground/80" /> Industrial Plants
          </div>
          <div className="glass rounded-lg p-4 border soft-border">
            <School className="size-5 mb-2 text-foreground/80" /> Schools & Campuses
          </div>
          <div className="glass rounded-lg p-4 border soft-border">
            <Shield className="size-5 mb-2 text-foreground/80" /> Fire Safety Orgs
          </div>
        </div>
      </Section>

      {/* Vision / Roadmap */}
      <Section id="vision" className="px-6 md:px-10 max-w-7xl mx-auto py-16 md:py-24">
        <h3 className="text-2xl md:text-4xl font-bold">Our Vision for the Future</h3>
        <ol className="mt-6 space-y-4">
          <li className="flex items-start gap-3"><ChevronRight className="mt-1 size-4 text-[--color-tech-500]" /> AI Analytics</li>
          <li className="flex items-start gap-3"><ChevronRight className="mt-1 size-4 text-[--color-tech-500]" /> Multi‑user Drills</li>
          <li className="flex items-start gap-3"><ChevronRight className="mt-1 size-4 text-[--color-tech-500]" /> Custom Scenarios</li>
          <li className="flex items-start gap-3"><ChevronRight className="mt-1 size-4 text-[--color-tech-500]" /> Global Certification</li>
        </ol>
      </Section>

      {/* Final CTA */}
      <Section id="cta" className="px-6 md:px-10 max-w-7xl mx-auto py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-4xl font-bold">FireSafeX = Real Equipment + Virtual Fire</h3>
            <p className="mt-3 text-[--color-muted]">The Next Generation of Fire Safety Training.</p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-gradient-to-r from-[--color-fire-500] to-[--color-fire-400] text-white font-medium cursor-pointer shadow-sm">
              Request Demo
            </a>
            <button onClick={() => setVideoOpen(true)} className="inline-flex items-center gap-2 rounded-lg px-4 py-2 border soft-border soft-border-hover transition cursor-pointer">
              <Play className="size-4" /> Watch Trailer
            </button>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer id="contact" className="border-t soft-border mt-10">
        <div className="px-6 md:px-10 max-w-7xl mx-auto py-10 text-sm/6 text-[--color-muted] flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex gap-6">
            <a className="hover:text-foreground cursor-pointer" href="#about">About</a>
            <a className="hover:text-foreground cursor-pointer" href="#contact">Contact</a>
            <a className="hover:text-foreground cursor-pointer" href="#privacy">Privacy</a>
            <a className="hover:text-foreground cursor-pointer" href="#terms">Terms</a>
          </div>
          <div className="opacity-70">© {new Date().getFullYear()} FireSafeX</div>
        </div>
      </footer>
    </div>
  );
}
