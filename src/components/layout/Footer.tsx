import { Link } from "react-router-dom";
import { MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

// Custom X (Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/assets/footer-image.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/90" />
      </div>

      {/* Main Content */}
      <div className="container-luxury relative pt-12 md:pt-20 pb-8 md:pb-12 text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Left Column: Brand + Description + Social Icons */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            {/* Logo & Brand Name */}
            <div className="flex items-center gap-3 mb-6">
              <img src="/assets/logo.png" alt="unita" className="h-9 w-auto" />
              <span className="text-white text-2xl lg:text-[26px] font-light tracking-wide">
                unita
              </span>
            </div>

            {/* Description */}
            <p className="text-white/70 text-[15px] leading-[26px] font-light mb-8 max-w-[320px]">
              Unita, founded in 1998, is a professional and leading manufacturer and Provider for natural stone products, including granites, marbles, slates, sandstones and lime stones from and abroad.
            </p>

            {/* Social Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center text-white/70 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center text-white/70 hover:text-gold transition-colors"
                aria-label="X (Twitter)"
              >
                <XIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center text-white/70 hover:text-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center text-white/70 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Middle Columns: Quick Links + Products */}
          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Quick Links */}
            <div>
              <h3 className="text-white text-lg lg:text-[20px] font-semibold mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {["About Us", "Services", "Our Team", "Blog", "Contact Us"].map((item) => (
                  <li key={item}>
                    <Link
                      to="/"
                      className="text-white/70 text-[15px] font-light hover:text-gold transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-white text-lg lg:text-[20px] font-semibold mb-6">
                Our Product
              </h3>
              <ul className="space-y-3">
                {["Travertine Bianco", "Calacatta", "Macael White"].map((item) => (
                  <li key={item}>
                    <Link
                      to="/products"
                      className="text-white/70 text-[15px] font-light hover:text-gold transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Contact Info */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            {/* Phone */}
            <a
              href="tel:+0844560789"
              className="block text-gold text-xl lg:text-[24px] font-semibold mb-4 hover:underline"
            >
              +(084) 456-0789
            </a>

            {/* Email */}
            <a
              href="mailto:Support@Example.com"
              className="block text-white text-xl lg:text-[24px] font-semibold mb-6 hover:text-gold transition-colors"
            >
              Support@Example.com
            </a>

            {/* Address */}
            <div className="flex items-start justify-center lg:justify-start gap-3 text-center lg:text-left">
              <MapPin className="w-5 h-5 text-white/70 mt-1 flex-shrink-0" />
              <p className="text-white/70 text-[15px] leading-[24px] font-light">
                2972 Westmer Rd. Santa Ana,<br />Illinois 85486
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-white/60 text-[15px] font-light text-center">
            © Copyright {new Date().getFullYear()} <span className="text-gold">TryzenIQ</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
