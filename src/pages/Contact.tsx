import { useState, FormEvent } from "react";
import { Phone, MapPin, Globe } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent", description: "Thank you — we'll be in touch shortly." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="gradient-navy pt-32 pb-20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl">
            <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">Get In Touch</p>
            <h1 className="text-4xl lg:text-5xl font-black text-primary-foreground leading-tight mb-6">
              Discuss Your Land Asset With BTN
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl leading-relaxed">
              Whether you're exploring feasibility or ready to move, our team is here to help you unlock maximum value from your hospitality asset.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16">
            {/* Info */}
            <AnimatedSection>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-navy flex items-center justify-center shrink-0">
                    <Phone className="text-primary-foreground" size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Phone</h3>
                    <a href="tel:7786886089" className="text-muted-foreground hover:text-primary transition-colors">(778) 688-6089</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-navy flex items-center justify-center shrink-0">
                    <MapPin className="text-primary-foreground" size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">73 East 6th Avenue<br />Vancouver, BC V5T 1J3</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-navy flex items-center justify-center shrink-0">
                    <Globe className="text-primary-foreground" size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Website</h3>
                    <a href="https://www.BTNpro.ca" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      www.BTNpro.ca
                    </a>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-lg overflow-hidden border border-border mt-8">
                  <iframe
                    title="BTN Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.6!2d-123.1!3d49.265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s73+East+6th+Avenue+Vancouver!5e0!3m2!1sen!2sca!4v1700000000000"
                    width="100%"
                    height="260"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.1}>
              <form onSubmit={handleSubmit} className="bg-surface rounded-xl p-8 lg:p-10 border border-border space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                      placeholder="(xxx) xxx-xxxx"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
                    placeholder="Tell us about your project or asset..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wide rounded-lg hover:bg-navy-light transition-colors"
                >
                  Send Message
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
