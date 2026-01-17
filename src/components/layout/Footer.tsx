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
      <div className="container-luxury relative pt-12 md:pt-20 lg:pt-0 pb-8 md:pb-12 lg:pb-0 text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0">

          {/* Left Column: Brand + Description + Social Icons */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start lg:pr-10 lg:border-r border-white/10 lg:pt-20 lg:pb-16">
            {/* Logo & Brand Name */}
            <div className="flex items-center gap-3 mb-6">
              <img src="/assets/logo.png" alt="unita" className="h-9 w-auto" />
              <span className="text-white text-2xl lg:text-[28px] font-light tracking-wide">
                unite
              </span>
            </div>

            {/* Description */}
            <p className="text-white/80 text-[16px] leading-[26px] font-light mb-8 max-w-[320px]">
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
          <div className="lg:col-span-4 lg:px-10 lg:border-r border-white/10 lg:pt-20 lg:pb-16 text-center lg:text-left">
            <h3 className="text-white text-lg lg:text-[24px] font-bold mb-8">
              Quick Links
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
              {/* Left List */}
              <ul className="space-y-3">
                {["About Us", "Services", "Our Team", "Blog", "Contact Us"].map((item) => (
                  <li key={item}>
                    <Link
                      to="/"
                      className="text-white text-[16px] font-bold hover:text-gold transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Right List - Starts with "Our Product" behaving like a header/item */}
              <div className="mt-8 md:mt-0">
                <ul className="space-y-3">
                  {/* Pseudo-header item */}
                  <li>
                    <Link
                      to="/products"
                      className="text-white text-[16px] font-bold hover:text-gold transition-colors"
                    >
                      Our Product
                    </Link>
                  </li>
                  {/* Product items */}
                  {["Travertine Bianco", "Calacatta", "Macael White"].map((item) => (
                    <li key={item}>
                      <Link
                        to="/products"
                        className="text-white text-[15px] font-bold hover:text-gold transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Info */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-center lg:pt-20 lg:pb-16">
            <div className="flex flex-col items-center lg:items-start">
              {/* Phone */}
              <a
                href="tel:+0844560789"
                className="block text-gold text-xl lg:text-[28px] font-semibold mb-4 hover:underline"
              >
                +(084) 456-0789
              </a>

              {/* Email */}
              <a
                href="mailto:Support@Example.com"
                className="block text-white text-xl lg:text-[28px] font-semibold mb-6 hover:text-gold transition-colors"
              >
                Support@Example.com
              </a>

              {/* Address */}
              <div className="flex items-start justify-center lg:justify-start gap-3 text-center lg:text-left">
                <MapPin className="w-5 h-5 text-white/70 mt-1 flex-shrink-0" />
                <p className="text-white text-[15px] lg:text-[18px] leading-[24px] font-light">
                  2972 Westmer Rd. Santa Ana,<br />Illinois 85486
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="relative border-t border-white/10">
        <div className="container-luxury py-8">
          <p className="text-white/80 text-[16px] font-bold text-center">
            © Copyright {new Date().getFullYear()} <a href="https://tryzeniq.com/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">TryzenIQ</a>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
