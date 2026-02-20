import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import lobbyImg from "@/assets/project-hotel-lobby.jpg";
import vancouverImg from "@/assets/project-vancouver.jpg";
import resortImg from "@/assets/project-resort.jpg";

const projects = [
  {
    img: lobbyImg,
    title: "Boutique Hotel Repositioning",
    location: "Vancouver, BC",
    type: "Repositioning & Brand Strategy",
    stats: [{ value: "300%+", label: "Value increase over existing use" }],
    desc: "BTN was engaged to assess and reposition an underperforming hospitality asset in Vancouver's core. Through a proforma-led approach, BTN identified the highest-value brand alignment, negotiated franchise terms, and coordinated the entitlements pathway. The result was a dramatically improved asset value and a clear execution roadmap for the owner.",
    disclaimer: "Outcome reflects specific site conditions, market timing, and approvals feasibility.",
  },
  {
    img: vancouverImg,
    title: "Urban Mixed-Use Hotel Development",
    location: "Metro Vancouver",
    type: "Entitlements & Execution Planning",
    stats: [{ value: "Rezoning", label: "Secured for hospitality use" }],
    desc: "A landowner with a strategically located Metro Vancouver site engaged BTN to evaluate hospitality viability and structure an entitlements pathway. BTN led the proforma modelling, brand positioning, and municipal engagement strategy—resulting in a successful rezoning outcome and a financeable development concept aligned to market demand.",
    disclaimer: "Each entitlements outcome depends on site specifics, municipal context, and project scope.",
  },
  {
    img: resortImg,
    title: "Waterfront Resort Strategy",
    location: "British Columbia",
    type: "Proforma Strategy & Brand Positioning",
    stats: [{ value: "5×", label: "Projected value uplift over base use" }],
    desc: "BTN engaged with a waterfront landowner to evaluate resort hotel viability and develop a credible investment thesis. The engagement included highest-and-best-use analysis, brand identification, proforma stress-testing, and an execution framework aligned to the site's permitting constraints and BC resort development context.",
    disclaimer: "Projected outcomes are illustrative and subject to market conditions, approvals, and execution variables.",
  },
];

const Projects = () => (
  <>
    {/* Hero */}
    <section className="gradient-navy pt-36 pb-24">
      <div className="container mx-auto px-6">
        <AnimatedSection className="max-w-3xl">
          <p className="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-5">Projects</p>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-7">
            Demonstrated outcomes across hospitality development.
          </h1>
          <p className="text-white/65 text-lg leading-relaxed">
            BTN's track record spans repositioning, entitlements, brand strategy, and execution planning across Metro Vancouver and British Columbia.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Projects */}
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="space-y-20">
          {projects.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.05}>
              <div className={`grid lg:grid-cols-2 gap-14 items-center ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-accent/10 text-accent rounded mb-5">
                    {p.type}
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-black text-foreground mb-3 leading-tight">{p.title}</h2>
                  <p className="text-muted-foreground text-sm mb-7">{p.location}</p>

                  {/* Stat highlight block */}
                  {p.stats.map((s) => (
                    <div key={s.label} className="inline-block bg-surface border border-border rounded-xl px-6 py-4 mb-7">
                      <div className="text-4xl lg:text-5xl font-black text-accent leading-none mb-1">{s.value}</div>
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{s.label}</div>
                    </div>
                  ))}

                  <p className="text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
                  <p className="text-xs text-muted-foreground/60 italic">{p.disclaimer}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Disclaimer */}
    <section className="py-12 bg-surface border-t border-border">
      <div className="container mx-auto px-6">
        <p className="text-xs text-muted-foreground/60 leading-relaxed max-w-3xl mx-auto text-center">
          Examples and outcomes are illustrative; results vary by asset, market conditions, timing, approvals feasibility, and execution scope.
        </p>
      </div>
    </section>

    {/* CTA */}
    <section className="gradient-navy py-28">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
            Evaluate your site—proforma first.
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-accent text-accent-foreground font-bold uppercase tracking-wide rounded hover:opacity-90 transition-opacity text-base"
          >
            Start a Conversation <ArrowRight size={20} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Projects;
