import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        <Link to="/" className="flex items-center gap-2">
          <span
            className={`text-2xl font-black tracking-tight transition-colors ${
              scrolled ? "text-primary" : "text-primary-foreground"
            }`}
          >
            BTN
          </span>
          <span
            className={`hidden sm:inline text-sm font-medium tracking-wide uppercase transition-colors ${
              scrolled ? "text-muted-foreground" : "text-primary-foreground/70"
            }`}
          >
            Hospitality
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-semibold tracking-wide uppercase transition-colors hover:text-accent ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              } ${location.pathname === item.path ? "text-accent" : ""}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 px-6 py-2.5 text-sm font-bold uppercase tracking-wide rounded bg-accent text-accent-foreground hover:bg-gold-light transition-colors"
          >
            Engage BTN
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={scrolled ? "text-foreground" : "text-primary-foreground"} size={24} />
          ) : (
            <Menu className={scrolled ? "text-foreground" : "text-primary-foreground"} size={24} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden gradient-navy overflow-hidden"
          >
            <nav className="flex flex-col items-center gap-6 py-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-primary-foreground text-lg font-semibold uppercase tracking-wide hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="px-8 py-3 text-sm font-bold uppercase tracking-wide rounded bg-accent text-accent-foreground"
              >
                Engage BTN
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
