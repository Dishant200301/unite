import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import RightIcon from "@/components/shared/RightIcon";
import { blogPosts, categories, popularTags } from "@/data/blog";
import SectionLabel from "@/components/shared/SectionLabel";

const recentPosts = [
  {
    id: 1,
    title: "How to Choose the Right Floor Tiles for Every Space",
    date: "September 10, 2025",
    image: "/assets/project-dining.jpg"
  },
  {
    id: 2,
    title: "Using Marble in Kitchen Design: Elegant and Timeless",
    date: "September 5, 2025",
    image: "/assets/project-kitchen.jpg"
  }
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  // Filter posts based on search query
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) {
      return blogPosts;
    }

    const query = searchQuery.toLowerCase();
    return blogPosts.filter((post) => {
      const titleMatch = post.title.toLowerCase().includes(query);
      const excerptMatch = post.excerpt.toLowerCase().includes(query);
      const tagsMatch = post.tags.some(tag => tag.toLowerCase().includes(query));

      return titleMatch || excerptMatch || tagsMatch;
    });
  }, [searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Reset to page 1 when search changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);
  return (
    <Layout>
      <Helmet>
        <title>Blog | Marble & Tiles</title>
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
          <h1 className="text-3xl md:text-6xl font-bold mb-4 tracking-wide">Blog </h1>
          <div className="flex items-center justify-center gap-2 text-[16px] font-bold uppercase tracking-widest text-white">
            <Link to="/" className="hover:text-[#ba9a67] transition-colors">Home</Link>
            <span className="text-[#ba9a67]">{">"}</span>
            <span className="text-white">Blog </span>
          </div>
        </motion.div>
      </div>

      <div className="container-luxury py-24">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] lg:grid-cols-[1fr_400px] gap-y-12 md:gap-2">

          {/* Main Content */}
          {/* Mobile Search - Visible only on mobile */}
          <div className="block md:hidden mb-12">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-0 relative pb-3 ">
              Search
            </h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-[50px] border border-[#e5e5e5] px-5 text-sm text-[#666666] focus:outline-none focus:border-[#c6a87c] transition-colors"
              />
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-[#1a1a1a] hover:text-gold transition-colors"
              >
                {searchQuery ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="space-y-16">
            {currentPosts.length > 0 ? (
              currentPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="w-full md:w-[93%] h-[300px] md:h-[460px] overflow-hidden mb-6">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700"
                      />
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-[13px] mb-3 font-light">
                      <div className="flex gap-2">
                        {post.tags.map((tag, i) => (
                          <span key={tag} className="text-gold uppercase tracking-wider">
                            {tag}{i < post.tags.length - 1 && ", "}
                          </span>
                        ))}
                      </div>
                      <span className="text-[#e5e5e5]">|</span>
                      <span className="text-[#666666] font-normal">{post.date}</span>
                      <span className="text-[#e5e5e5]">|</span>
                      <span className="text-[#666666] font-normal">{post.comments} Comments</span>
                    </div>

                    <h2 className="text-2xl md:text-[32px] leading-[1.2] font-bold text-[#1a1a1a] mb-4 hover:text-gold transition-colors">
                      <span>{post.title}</span>
                    </h2>

                    <p className="text-[#666666] leading-[26px] mb-6 max-w-[95%] font-light">
                      {post.excerpt}
                    </p>

                    <div
                      className="group inline-flex items-center gap-2 px-2 py-0.5 rounded-md text-[12.5px] font-bold uppercaset transition-all duration-300 border border-transparent hover:bg-[#ba9a67] hover:text-white text-[#1a1a1a]"
                    >
                      READ MORE
                      <span className="flex items-center justify-center w-6 h-6 bg-[#ba9a67] text-white rounded-[4px] transition-colors group-hover:bg-[#ba9a67] group-hover:text-white">
                        <RightIcon />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))
            ) : (
              <div className="text-center py-20">
                <h3 className="text-2xl text-[#666666] mb-4">No blog posts found</h3>
                <p className="text-[#999999]">Try searching with different keywords</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-3 pt-0">
                {/* Previous Button - Double Left Arrow */}
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

                {/* Next Button - Double Right Arrow */}
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

          {/* Sidebar */}
          <aside className="space-y-12 md:sticky md:top-20 self-start">

            {/* Search */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hidden md:block"
            >
              <h3 className="text-2xl md:text-[32px] font-bold text-[#1a1a1a] mb-0 relative pb-3 ">
                Search
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-[50px] border border-[#e5e5e5] px-5 text-sm text-[#666666] focus:outline-none focus:border-[#c6a87c] transition-colors"
                />
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-[#1a1a1a] hover:text-gold transition-colors"
                >
                  {searchQuery ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  )}
                </button>
              </div>
            </motion.div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl md:text-[32px] font-bold text-[#1a1a1a] mb-6 relative pb-3">
                Categories
              </h3>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category}>
                    <Link to="#" className="text-[#666666] text-[15px] hover:text-[#c6a87c] transition-colors block py-1 border-b border-dashed border-[#e5e5e5]">
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Recent Posts */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-[32px] font-bold text-[#1a1a1a] mb-4 relative pb-3 ">
                Recent Posts
              </h3>
              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex gap-4 group">
                    <div className="w-[80px] h-[80px] flex-shrink-0 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500" />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-[#1a1a1a] leading-tight mb-2 group-hover:text-[#c6a87c] transition-colors">
                        <Link to="#">{post.title}</Link>
                      </h4>
                      <span className="text-[12px] text-[#999999]">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Popular Tags */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl md:text-[32px] font-bold text-[#1a1a1a] mb-4 relative pb-3 ">
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <Link
                    key={tag}
                    to="#"
                    className="text-[12px] text-[#666666] font-bold border border-[#e5e5e5] px-3 py-1.5 hover:bg-[#c6a87c] hover:text-white hover:border-[#c6a87c] transition-all"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </motion.div>

          </aside>
        </div>
      </div>

      {/* Do You Need Anything Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white text-center border-t border-[#f0f0f0]"
      >
        <div className="container-luxury">
          <div className="flex justify-center mb-3">
            <SectionLabel text="PREMIUM SUPPORT" />
          </div>
          <h2 className="text-3xl md:text-[40px] lg:text-[50px] font-bold text-[#1a1a1a] mb-8">
            Do You Need Anything?
          </h2>
          <p className="text-[#666666] max-w-2xl mx-auto mb-10 leading-relaxed">
            Receive updates, hot deals, tutorials, discounts sent straight to your inbox every month
          </p>

          <div className="max-w-xl mx-auto relative">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border-b border-[#e5e5e5] py-3 text-sm placeholder:text-[#999999] focus:outline-none focus:border-[#c6a87c] transition-colors text-center"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#c6a87c] w-8 h-8 flex items-center justify-center text-white text-xs hover:bg-[#b09268] transition-colors">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
}
