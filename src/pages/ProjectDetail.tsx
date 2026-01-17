import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Check, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import RightIcon from "@/components/shared/RightIcon";
import { getProjectBySlug } from "@/data/projectdetails";

export default function ProjectDetail() {
    const { slug } = useParams<{ slug: string }>();
    const project = getProjectBySlug(slug || "");

    if (!project) {
        return (
            <Layout>
                <div className="container-luxury py-24 text-center">
                    <h1 className="text-4xl font-medium mb-4">Project Not Found</h1>
                    <Link to="/projects" className="text-gold hover:underline">
                        Return to Projects
                    </Link>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <Helmet>
                <title>{project.title} | Marble & Tiles</title>
            </Helmet>

            {/* Hero Section */}
            <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center bg-black">
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
                    <h1 className="text-2xl md:text-[40px] lg:text-[60px] font-bold mb-2">{project.title}</h1>
                    <nav className="relative flex items-center justify-center gap-2 pt-4 text-white text-[12px] md:text-[16px] font-bold uppercase tracking-widest">
                        <Link to="/" className="hover:text-gold transition-colors">HOME</Link>
                        <span className="text-gold">{">"}</span>
                        <Link to="/projects" className="hover:text-gold transition-colors">PROJECTS</Link>
                        <span className="text-gold">{">"}</span>
                        <span className="line-clamp-1">PROJECT DETAILS</span>
                    </nav>
                </motion.div>
            </div>

            {/* Main Content */}
            <section className="py-16 bg-background overflow-hidden">
                <div className="container-luxury">
                    {/* Hero Image with Project Overview */}
                    {/* Hero Image with Project Overview */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full h-auto lg:h-[700px] mb-20 flex flex-col lg:block"
                    >
                        {/* Full Image */}
                        <img
                            src={project.heroImage}
                            alt={project.title}
                            className="w-full h-[300px] lg:h-full object-cover"
                        />

                        {/* Project Overview Box - Positioned at bottom-right inside image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative lg:absolute bottom-0 right-0 bg-white pt-6 md:pt-6 lg:pt-6 p-2 md:p-2 lg:p-8 w-full lg:w-[380px]"
                        >
                            <h3 className="text-[20px] font-bold text-[#1a1a1a] mb-6 pb-4 border-b border-[#e5e5e5]">
                                Project Overview
                            </h3>
                            <div className="space-y-3">
                                <div className="flex justify-between py-2 border-b border-dashed border-[#e5e5e5]">
                                    <span className="text-[16px] text-black font-bold">Project</span>
                                    <span className="text-[14px] text-[#1a1a1a] font-medium">:</span>
                                    <span className="text-[16px] text-[#5e5d5c] font-medium">{project.title}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-dashed border-[#e5e5e5]">
                                    <span className="text-[16px] text-black font-bold">Category</span>
                                    <span className="text-[14px] text-[#1a1a1a] font-medium">:</span>
                                    <span className="text-[16px] text-[#5e5d5c] font-medium">{project.category}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-dashed border-[#e5e5e5]">
                                    <span className="text-[16px] text-black font-bold">Clients</span>
                                    <span className="text-[14px] text-[#1a1a1a] font-medium">:</span>
                                    <span className="text-[16px] text-[#5e5d5c] font-medium">{project.client}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-dashed border-[#e5e5e5]">
                                    <span className="text-[16px] text-black font-bold">Date</span>
                                    <span className="text-[14px] text-[#1a1a1a] font-medium">:</span>
                                    <span className="text-[16px] text-[#5e5d5c] font-medium">{project.year}</span>
                                </div>
                                <div className="flex justify-between py-2">
                                    <span className="text-[16px] text-black font-bold">Status</span>
                                    <span className="text-[14px] text-[#1a1a1a] font-medium">:</span>
                                    <span className="text-[16px] text-[#5e5d5c] font-medium">Completed</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Project Overview Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-[36px] font-bold text-[#1a1a1a] mb-6">
                            Project Overview
                        </h2>
                        <div className="space-y-4">
                            {project.overview.map((paragraph, index) => (
                                <p key={index} className="text-[#666666] text-[16px] leading-[28px]">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </motion.div>

                    {/* Overview & Challenges Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-[36px] font-bold text-[#1a1a1a] mb-6">
                            Overview & Challenges
                        </h2>
                        <p className="text-[#666666] text-[16px] leading-[28px] mb-8">
                            {project.overviewChallenges.description}
                        </p>

                        {/* Challenges List */}
                        <div className="grid md:grid-cols-2 gap-4">
                            {project.overviewChallenges.challenges.map((challenge, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ba9a67] flex-shrink-0 mt-1" />
                                    <span className="text-black text-[15px] font-bold">{challenge}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Product Gallery Section */}
                    {project.gallery && project.gallery.length > 0 && (
                        <div className="mb-16">
                            <h2 className="text-3xl md:text-[36px] font-bold text-[#1a1a1a] mb-8">
                                Project Gallery
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {project.gallery.map((image, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className="group relative overflow-hidden aspect-[4/3]"
                                    >
                                        <img
                                            src={image}
                                            alt={`${project.title} - Image ${index + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Full Width Image */}
                    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mb-16">
                        <img
                            src={project.fullImage}
                            alt={project.title}
                            className="w-full h-[300px] lg:h-[600px] object-cover"
                        />
                    </div>

                    {/* Explore Recent Projects */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center gap-3 mb-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#ba9a67]">
                                <path d="M0 0 L0 8 M0 0 L8 0" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
                            </svg>
                            <p className="text-black text-[14px] font-bold uppercase tracking-[0em]">
                                MORE PROJECTS
                            </p>
                        </div>
                        <h2 className="text-3xl md:text-[40px] lg:text-[50px] font-bold text-[#1a1a1a] mb-12 text-center">
                            Explore Recent Projects
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {project.relatedProjects.map((relatedProject) => (
                                <div key={relatedProject.id} className="group">
                                    <div className="w-full h-[300px] md:h-[300px] lg:h-[550px] overflow-hidden mb-6">
                                        <img
                                            src={relatedProject.image}
                                            alt={relatedProject.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    <h4 className="text-[#1a1a1a] text-2xl md:text-[22px] lg:text-[28px] font-bold mb-4 leading-tight">
                                        {relatedProject.title}
                                    </h4>

                                    <Link
                                        to={`/projects/${relatedProject.slug}`}
                                        className="inline-flex items-center gap-2 px-2 py-0.5 rounded-md text-[12.5px] font-bold uppercase transition-all duration-300 border border-transparent hover:bg-[#ba9a67] hover:text-white text-[#1a1a1a]"
                                    >
                                        READ MORE
                                        <span className="flex items-center justify-center w-6 h-6 bg-[#ba9a67] text-white rounded-[4px]">
                                            <RightIcon />
                                        </span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
}
