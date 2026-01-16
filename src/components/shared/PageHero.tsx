import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import marbleWarehouse from "/assets/marble-warehouse.jpg";

interface PageHeroProps {
  title: string;
  breadcrumbs: { label: string; path?: string }[];
  backgroundImage?: string;
}

export default function PageHero({
  title,
  breadcrumbs,
  backgroundImage = marbleWarehouse,
}: PageHeroProps) {
  return (
    <>
      <Helmet>
        <title>{title} | Marble & Tiles</title>
      </Helmet>
      <section className="relative h-[300px] md:h-[420px] flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative text-center px-4">
          <h1 className="text-2xl md:text-4xl lg:text-[64px] font-bold text-white mb-4">
            {title}
          </h1>
          <nav className="flex flex-wrap items-center justify-center gap-2 text-white/80 text-xs md:text-[16px] font-bold uppercase tracking-wide">
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.label} className="flex items-center gap-2">
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-gold transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <span className="text-gold">&gt;</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </section>
    </>
  );
}
