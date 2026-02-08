import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="gradient-navy text-primary-foreground">
    <div className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-black tracking-tight mb-4">BTN</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
            Boutique hospitality consultancy unlocking maximum value from underutilised land and assets through integrated strategy and disciplined execution.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-accent">Navigate</h4>
          <nav className="flex flex-col gap-3">
            <Link to="/" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Home</Link>
            <Link to="/services" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Services</Link>
            <Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Contact</Link>
          </nav>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-accent">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
            <span>(778) 688-6089</span>
            <span>73 East 6th Avenue, Vancouver V5T 1J3</span>
            <a href="https://www.BTNpro.ca" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
              www.BTNpro.ca
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} BTN Hospitality Consultancy. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
