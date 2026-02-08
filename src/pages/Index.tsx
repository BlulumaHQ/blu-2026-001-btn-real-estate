import { Link } from "react-router-dom";
import { ArrowRight, Building2, FileCheck, Compass, PencilRuler, HardHat, TrendingUp } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import heroImg from "@/assets/hero-hotel.jpg";
import lobbyImg from "@/assets/project-hotel-lobby.jpg";
import vancouverImg from "@/assets/project-vancouver.jpg";
import resortImg from "@/assets/project-resort.jpg";

const pillars = [
  { icon: TrendingUp, title: "Density Strategy", desc: "Maximize development potential through proforma-driven density analysis and highest-and-best-use studies." },
  { icon: FileCheck, title: "Entitlements & Planning", desc: "Navigate rezoning, permits, and municipal approvals with proven local expertise." },
  { icon: PencilRuler, title: "Design Efficiencies", desc: "Coordinate architecture and hospitality planning to eliminate waste and protect margins." },
  { icon: Compass, title: "Program Mix", desc: "Optimize room counts, amenity packages, and revenue centres for peak asset performance." },
  { icon: HardHat, title: "Disciplined Execution", desc: "Bridge the advisory-to-delivery gap with hands-on build-team coordination." },
];

const projects = [
  { img: lobbyImg, title: "Boutique Hotel Repositioning", location: "Vancouver, BC", tag: "300%+ Value Increase" },
  { img: vancouverImg, title: "Urban Mixed-Use Development", location: "Metro Vancouver", tag: "Entitlements Secured" },
  { img: resortImg, title: "Waterfront Resort Strategy", location: "British Columbia", tag: "Proforma Optimised" },
];

const stats = [
  { value: "300%+", label: "Property Value Increases" },
  { value: "100+", label: "Years Combined Experience" },
  { value: "50+", label: "Hospitality Projects" },
];

const Index = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center">
      <img src={heroImg} alt="Luxury hotel development" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative container mx-auto px-6 py-32">
        <AnimatedSection className="max-w-3xl">
          <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-6">
            BTN Hospitality Consultancy — Vancouver
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary-foreground leading-[1.1] mb-6 text-balance">
            Unlocking Hospitality Asset Value Through Integrated Strategy & Execution
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-xl mb-10 leading-relaxed">
            We partner with landowners to unlock maximum value from underutilised land through a proforma-first approach—every decision anchored to capital and returns.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold uppercase tracking-wide rounded hover:bg-gold-light transition-colors"
            >
              Engage BTN <ArrowRight size={18} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-bold uppercase tracking-wide rounded hover:border-primary-foreground/60 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Stats bar */}
    <section className="gradient-navy">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((s) => (
            <AnimatedSection key={s.label}>
              <div className="text-4xl lg:text-5xl font-black text-accent mb-2">{s.value}</div>
              <div className="text-primary-foreground/70 text-sm font-semibold uppercase tracking-widest">{s.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Proforma-first positioning */}
    <section className="py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">Our Approach</p>
          <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-6">
            Proforma-First. Every Decision Anchored to Value.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Most consultants advise. We deliver. BTN bridges the gap between strategy and execution, ensuring every recommendation is tested against your proforma before a single dollar is committed.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <div className="bg-background rounded-lg p-8 h-full border border-border hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 rounded-lg gradient-navy flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <p.icon className="text-primary-foreground" size={22} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Projects */}
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">Track Record</p>
          <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-6">
            Proven Results. Local Alliances.
          </h2>
          <p className="text-muted-foreground text-lg">
            Our Vancouver-based team brings deep local relationships with architects, municipalities, and capital partners to deliver outsized results.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <AnimatedSection key={proj.title} delay={i * 0.1}>
              <div className="group rounded-lg overflow-hidden bg-background border border-border hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-accent/10 text-accent rounded mb-3">
                    {proj.tag}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-1">{proj.title}</h3>
                  <p className="text-muted-foreground text-sm">{proj.location}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="gradient-navy py-24">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl lg:text-4xl font-black text-primary-foreground mb-6">
            Ready to Unlock Your Asset's Full Potential?
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-10">
            Let's discuss how BTN's integrated, proforma-first approach can transform your land into a high-performing hospitality asset.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-accent-foreground font-bold uppercase tracking-wide rounded hover:bg-gold-light transition-colors text-lg"
          >
            Engage BTN <ArrowRight size={20} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Index;
