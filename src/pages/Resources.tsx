import { FileText, Building2, Home, Users } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const resources = [
  {
    title: "Hotel Development Policy",
    desc: "Updated City of Vancouver policy (April 2025).",
    link: "https://vancouver.ca/news-calendar/updated-policy-for-new-hotel-developments-april-2025.aspx",
    button: "Read Policy",
    icon: Building2,
  },
  {
    title: "Transit-Oriented Areas (TOA)",
    desc: "Provincial guidelines and rezoning policies.",
    link: "https://guidelines.vancouver.ca/policy-rezoning-transit-oriented-areas.pdf",
    button: "View PDF",
    icon: FileText,
  },
  {
    title: "Seniors Housing Strategy",
    desc: "City of Vancouver's official strategy and updates.",
    link: "https://vancouver.ca/people-programs/seniors-housing-strategy.aspx",
    button: "Read Strategy",
    icon: Home,
  },
  {
    title: "Hotel Community Impact",
    desc: "Detailed impact report for April 2025.",
    link: "/assets/Hotel Community Impact_April 2025.pdf",
    button: "Download PDF",
    icon: Users,
    download: true,
  },
];

const Resources = () => (
  <div className="bg-background">
    {/* Hero */}
    <section className="gradient-navy text-primary-foreground pt-36 pb-20">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Development Resources
          </h1>
          <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Key policy documents and urban planning guidelines for Vancouver.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Resource Grid */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid sm:grid-cols-2 gap-6">
          {resources.map((r, i) => (
            <AnimatedSection key={r.title} delay={i * 0.1}>
              <a
                href={r.link}
                target="_blank"
                rel="noopener noreferrer"
                {...(r.download ? { download: true } : {})}
                className="group block h-full rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-5 inline-flex items-center justify-center w-11 h-11 rounded-md bg-muted text-primary">
                  <r.icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {r.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-accent group-hover:gap-2.5 transition-all">
                  {r.button}
                  <ArrowUpRight size={14} />
                </span>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Resources;
