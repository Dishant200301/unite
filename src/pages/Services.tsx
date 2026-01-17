import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Box, Grid3x3, Scissors, Building2, Layers, Hammer, Paintbrush, Settings } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Newsletter from "@/components/shared/Newsletter";
import { services } from "@/data/services";
import RightIcon from "@/components/shared/RightIcon";
import SectionLabel from "@/components/shared/SectionLabel";

// Helper to render icons based on string
const getIcon = (iconName: string) => {
  switch (iconName) {
    case "boxes": return <Box strokeWidth={1.5} className="w-8 h-8 text-charcoal" />;
    case "grid": return <Grid3x3 strokeWidth={1.5} className="w-8 h-8 text-charcoal" />;
    case "scissors": return <Scissors strokeWidth={1.5} className="w-8 h-8 text-charcoal" />;
    case "building": return <Building2 strokeWidth={1.5} className="w-8 h-8 text-charcoal" />;
    case "layers": return <Layers strokeWidth={1.5} className="w-8 h-8 text-charcoal" />;
    case "hammer": return <Hammer strokeWidth={1.5} className="w-8 h-8 text-charcoal" />;
    case "brush": return <Paintbrush strokeWidth={1.5} className="w-8 h-8 text-charcoal" />;
    case "settings": return <Settings strokeWidth={1.5} className="w-8 h-8 text-charcoal" />;
    default: return <Box strokeWidth={1.5} className="w-8 h-8 text-charcoal" />;
  }
};

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/marble-warehouse.jpg"
            alt="Services Hero"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white container-luxury w-full"
        >
          <h1 className="text-3xl md:text-6xl font-bold mb-4 tracking-wide">Services</h1>
          <div className="flex items-center justify-center gap-2 text-[16px] font-bold uppercase tracking-widest text-white">
            <Link to="/" className="hover:text-[#ba9a67] transition-colors">Home</Link>
            <span className="text-[#ba9a67]">{">"}</span>
            <span className="text-white">Services</span>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-24 bg-[#f9f9f9]">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-3">
              <SectionLabel text="WHAT WE OFFER" />
            </div>
            <h2 className="text-3xl md:text-3xl lg:text-6xl font-bold">
              Providing The Best<br />Marble Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white group pb-2"
              >
                {/* Image with Icon */}
                <div className="relative h-[240px] overflow-hidden mb-8">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                  {/* Icon in bottom-left with white background */}
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white flex items-center justify-center shadow-sm z-10">
                    {getIcon(service.icon)}
                  </div>
                </div>

                {/* Content */}
                <div className="px-4 pr-2 pb-2 relative">
                  {/* Heading and Number Row */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-bold text-charcoal leading-tight max-w-[70%] line-clamp-2">
                      {service.title}
                    </h3>
                    <span className="text-5xl font-bold text-gray-100 leading-none select-none">
                      {service.number}
                    </span>
                  </div>

                  <p className="text-[#666] text-[16px] leading-relaxed mb-6 line-clamp-3 max-w-[95%] ">
                    {service.description}
                  </p>

                  {/* Read More Button - Matching Home Section Style */}
                  <Link
                    to={`/services/${service.slug}`}
                    className="group inline-flex items-center gap-2 px-2 py-0.5 rounded-md text-[12.5px] font-bold uppercase transition-all duration-300 border border-transparent hover:bg-[#ba9a67] hover:text-white text-[#1a1a1a]"
                  >
                    READ MORE
                    <span className="flex items-center justify-center w-6 h-6 bg-[#ba9a67] text-white rounded-[4px] transition-colors">
                      <RightIcon />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <Newsletter />
    </Layout>
  );
}
