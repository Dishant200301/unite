import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, ChevronDown, ArrowRight, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import RightIcon from "../shared/RightIcon";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "ABOUT US", path: "/about" },
  { label: "SERVICES", path: "/services" },
  { label: "PRODUCTS", path: "/products" },
  { label: "PROJECTS", path: "/projects" },
  { label: "BLOG", path: "/blog" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }
    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0  z-50 transition-all duration-300 ${isScrolled
          ? "bg-charcoal/95 backdrop-blur-3xl shadow-lg"
          : "bg-transparent"
          }`}
      >
        <div className="container-luxury h-[70px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1">
            <img src="/assets/logo.png" alt="Unite" className="h-10 md:h-14 w-auto" />
            <span className="text-white text-2xl md:text-3xl font-bold tracking-wide">
              Unite
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[13.5px] font-bold tracking-wide transition-opacity hover:opacity-70 flex items-center gap-1 ${location.pathname === item.path
                  ? "text-gold"
                  : "text-white"
                  }`}
              >
                {item.label}

              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="hidden xl:flex items-center gap-6">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-white" />
              <div className="text-right">
                <p className="text-white/70 text-[11px] font-light">Call Us Phone</p>
                <p className="text-gold text-[14px] font-light">+(480) 123 678 900</p>
              </div>
            </div>
            <Link
              to="/contact"
              className="btn-gold h-[50px] px-6 font-bold"
            >
              CONTACT US
              <RightIcon />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 hidden" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px]"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Side Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 z-50 w-[70%] md:w-[35%] bg-white shadow-2xl overflow-y-auto"
            >
              <div className="p-6">
                {/* Menu Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="relative">
                    <span className="text-[14px] font-light text-charcoal uppercase tracking-widest pb-2">
                      Main Menu
                    </span>
                    <div className="absolute -bottom-2 left-0 w-12 h-[2px] bg-[#ba9a67]" />
                  </div>
                  <button onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="w-5 h-5 text-charcoal" />
                  </button>
                </div>

                {/* Nav Items */}
                <nav className="flex flex-col">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between py-3 border-b border-gray-200 group"
                    >
                      <span className={`text-[14px] font-semibold ${location.pathname === item.path ? "text-[#ba9a67]" : "text-charcoal"}`}>
                        {item.label}
                      </span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#ba9a67] transition-colors" />
                    </Link>
                  ))}
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between py-4 border-b border-gray-100 group"
                  >
                    <span className={`text-[14px] font-bold ${location.pathname === "/contact" ? "text-[#ba9a67]" : "text-charcoal"}`}>
                      CONTACT US
                    </span>
                    {/* Contact Us usually doesn't have a chevron in some designs, but for consistency with 'exactly same caret' layout if interpreted as 'all have arrows', I'll add it. 
                        Looking at the image again, 'Contact us' is at the bottom. If 'Contact us' in the image has no arrow, I should omit it. 
                        The user said 'exactly same caret', which implies the arrow style. 
                        Safe bet is to include it for navigation items. */}
                  </Link>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
