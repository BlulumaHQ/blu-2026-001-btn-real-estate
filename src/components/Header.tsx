import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "#" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "#" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? "shadow-sm border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight text-primary">
            BTN
          </span>
          <span className="hidden sm:inline text-sm font-medium tracking-wide uppercase text-muted-foreground">
            Hospitality
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`text-sm font-semibold tracking-wide uppercase transition-colors hover:text-accent text-foreground ${
                location.pathname === item.path && item.path !== "#" ? "text-accent" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 px-6 py-2.5 text-sm font-bold uppercase tracking-wide rounded bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
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
            <X className="text-foreground" size={24} />
          ) : (
            <Menu className="text-foreground" size={24} />
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
            className="md:hidden bg-white border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col items-center gap-6 py-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-foreground text-lg font-semibold uppercase tracking-wide hover:text-accent transition-colors"
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
