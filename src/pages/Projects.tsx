import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import RightIcon from "@/components/shared/RightIcon";
import { projects } from "@/data/project";
import SectionLabel from "@/components/shared/SectionLabel";

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Calculate pagination
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  return (
    <Layout>
      <Helmet>
        <title>Projects| Marble & Tiles</title>
        <meta name="description" content="Explore our portfolio of luxury marble and stone projects." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative w-full h-[400px] flex items-center justify-center bg-black">
        <div
          className="absolute inset-0 z-0 opacity-60"
          style={{
            backgroundImage: `url(/assets/marble-warehouse.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white container-luxury w-full"
        >
          <h1 className="text-3xl md:text-6xl font-bold mb-4 tracking-wide">Projects</h1>
          <div className="flex items-center justify-center gap-2 text-[16px] font-bold uppercase tracking-widest text-white">
            <Link to="/" className="hover:text-[#ba9a67] transition-colors">Home</Link>
            <span className="text-[#ba9a67]">{">"}</span>
            <span className="text-white">Projects</span>
          </div>
        </motion.div>
      </div>

      {/* Projects Section */}
      <section className="py-24 bg-background">
        <div className="container-luxury">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <SectionLabel text="OUR BEST PROJECTS" />
            <h2 className="text-3xl md:text-[60px] font-bold text-[#1a1a1a] leading-[1] capitalize transition-all duration-400">
              Explore Our Selection<br />
              Our Latest Projects
            </h2>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/projects/${project.slug}`}
                  className="group relative h-[300px] md:h-[450px] overflow-hidden block"
                >
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay - appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#545658] via-[#545658]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content - appears on hover at bottom left */}
                  <div className="absolute bottom-0 left-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white text-2xl md:text-[28px] font-bold mb-4 leading-[1] hover:text-[#ba9a67]">
                      {project.title}
                    </h3>
                    <div
                      className="group inline-flex items-center gap-2 px-2 py-0.5 rounded-md text-[12.5px] font-bold uppercaset text-white transition-all duration-300 border border-transparent hover:bg-[#ba9a67] hover:text-white">
                      READ MORE
                      <span className="flex items-center justify-center w-6 h-6 bg-[#ba9a67] text-white rounded-[4px]">
                        <RightIcon />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded text-white text-base md:text-lg font-bold transition-all ${currentPage === 1
                  ? 'bg-[#666666] cursor-not-allowed opacity-50'
                  : 'bg-[#1a1a1a] hover:bg-[#c6a87c]'
                  }`}
              >
                «
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded text-base md:text-lg font-bold transition-all ${currentPage === page
                    ? 'bg-[#c6a87c] text-white'
                    : 'bg-white text-[#1a1a1a] border border-[#e5e5e5] hover:bg-[#c6a87c] hover:text-white'
                    }`}
                >
                  {page}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded text-white text-base md:text-lg font-bold transition-all ${currentPage === totalPages
                  ? 'bg-[#666666] cursor-not-allowed opacity-50'
                  : 'bg-[#1a1a1a] hover:bg-[#c6a87c]'
                  }`}
              >
                »
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
