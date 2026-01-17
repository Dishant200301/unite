import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import marbleWarehouse from "/assets/marble-warehouse.jpg";
import { motion } from "framer-motion";

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
      <section className="relative h-[400px] flex items-center justify-center bg-black">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center px-4"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wide text-white">
            {title}
          </h1>
          <nav className="flex flex-wrap items-center justify-center gap-2 text-[14px] md:text-[16px] font-bold uppercase tracking-widest text-white">
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.label} className="flex items-center gap-2">
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-[#ba9a67] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <span className="text-[#ba9a67]">&gt;</span>
                )}
              </span>
            ))}
          </nav>
        </motion.div>
      </section>
    </>
  );
}
