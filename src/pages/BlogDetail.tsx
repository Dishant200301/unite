import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Newsletter from "@/components/shared/Newsletter";
import { blogPosts, categories, popularTags } from "@/data/blog";

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogPosts.find((p) => p.slug === slug);
  const [searchQuery, setSearchQuery] = useState("");

  // Get recent posts (excluding current)
  const recentPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 4);

  if (!blog) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-light text-charcoal mb-4">
              Blog Not Found
            </h1>
            <Link to="/blog" className="text-gold hover:underline">
              Back to Blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Find previous and next posts
  const currentIndex = blogPosts.findIndex((b) => b.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <Layout>
      <Helmet>
        <title>{blog.title} | Marble & Tiles Blog</title>
        <meta name="description" content={blog.excerpt} />
      </Helmet>

      {/* Hero Section with Breadcrumb */}
      <section className="relative h-[300px] md:h-[350px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/assets/marble-warehouse.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center container-luxury w-full"
        >
          <nav className="flex items-center justify-center gap-2 text-white/90 text-[13px] font-bold uppercase tracking-wide flex-wrap">
            <Link to="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span className="text-gold">&gt;</span>
            <Link to="/blog" className="hover:text-gold transition-colors">
              Posts
            </Link>
            <span className="text-gold">&gt;</span>
            <span className="hover:text-gold transition-colors cursor-pointer">
              {blog.tags[0] || "Blog"}
            </span>
            <span className="text-gold">&gt;</span>
            <span className="text-white max-w-[300px] truncate">
              {blog.title}
            </span>
          </nav>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 xl:gap-16">
            {/* Mobile Search - Visible on Mobile & Tablet */}
            <div className="block lg:hidden lg:mb-8 lg:border-b lg:border-border lg:pb-8">
              <h4 className="text-xl font-bold text-charcoal mb-4">Search</h4>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border border-border px-4 py-3 pr-10 text-sm bg-transparent focus:border-gold focus:outline-none transition-colors"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-gray" />
              </div>
            </div>
            {/* Left Column - Blog Content */}
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Meta Info */}
              <div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-4 text-sm">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="bg-gold text-white font-bold uppercase px-3 py-1 text-[11px]">
                    {blog.tags[0]}
                  </span>
                  {blog.tags.slice(0, 1).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gold text-white font-bold uppercase px-3 py-1 text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-stone-gray">
                  {blog.date} • {blog.comments} comments
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-charcoal leading-tight">
                {blog.title}
              </h1>

              {/* Excerpt */}
              <p className="text-stone-gray text-base leading-relaxed">
                {blog.excerpt}
              </p>

              {/* Featured Image */}
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="space-y-6 text-charcoal">
                <p className="text-stone-gray text-[15px] leading-[1.8]">
                  {blog.content}
                </p>

                <p className="text-stone-gray text-[15px] leading-[1.8]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <h2 className="text-2xl md:text-[28px] font-bold text-charcoal pt-4">
                  Key Considerations
                </h2>

                <p className="text-stone-gray text-[15px] leading-[1.8]">
                  When selecting materials for your project, consider durability, maintenance requirements, and aesthetic appeal. Each material has unique characteristics that make it suitable for different applications.
                </p>

                <ul className="space-y-2 pl-6 text-stone-gray text-[15px]">
                  <li className="list-disc">Quality and durability of materials</li>
                  <li className="list-disc">Maintenance and care requirements</li>
                  <li className="list-disc">Budget and long-term value</li>
                  <li className="list-disc">Aesthetic compatibility with your design</li>
                  <li className="list-disc">Professional installation recommendations</li>
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 pt-6 border-t border-border">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-border px-4 py-2 text-sm font-bold text-stone-gray hover:border-gold hover:text-gold transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Previous / Next Navigation */}
              <div className="flex flex-col sm:flex-row justify-between gap-6 pt-8 border-t border-border">
                {prevPost ? (
                  <Link
                    to={`/blog/${prevPost.slug}`}
                    className="group flex items-start gap-3"
                  >
                    <ChevronLeft className="w-5 h-5 text-stone-gray group-hover:text-gold transition-colors mt-1" />
                    <div>
                      <span className="text-xs uppercase text-stone-gray tracking-wide">
                        Previous Post
                      </span>
                      <p className="text-charcoal font-light group-hover:text-gold transition-colors">
                        {prevPost.title}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}
                {nextPost && (
                  <Link
                    to={`/blog/${nextPost.slug}`}
                    className="group flex items-start gap-3 text-right sm:text-right"
                  >
                    <div>
                      <span className="text-xs uppercase text-stone-gray tracking-wide">
                        Next Post
                      </span>
                      <p className="text-charcoal font-light group-hover:text-gold transition-colors">
                        {nextPost.title}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-stone-gray group-hover:text-gold transition-colors mt-1" />
                  </Link>
                )}
              </div>

              {/* Comment Form */}
              <div className="pt-12">
                <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-2">
                  Leave A Reply
                </h3>
                <p className="text-stone-gray text-sm mb-8">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="Name *"
                      required
                      className="w-full border border-border px-4 py-3 text-sm bg-transparent focus:border-gold focus:outline-none transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email *"
                      required
                      className="w-full border border-border px-4 py-3 text-sm bg-transparent focus:border-gold focus:outline-none transition-colors"
                    />
                    <input
                      type="url"
                      placeholder="Your Website"
                      className="w-full border border-border px-4 py-3 text-sm bg-transparent focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                  <textarea
                    placeholder="Message Here.."
                    rows={5}
                    required
                    className="w-full border border-border px-4 py-3 text-sm bg-transparent focus:border-gold focus:outline-none transition-colors resize-none"
                  />
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="save-info"
                      className="w-4 h-4 accent-gold"
                    />
                    <label
                      htmlFor="save-info"
                      className="text-stone-gray text-sm"
                    >
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="bg-charcoal text-white uppercase text-xs font-bold tracking-wider px-8 py-4 hover:bg-gold transition-colors flex items-center gap-2"
                  >
                    Post Comment
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </motion.article>

            {/* Right Column - Sidebar */}
            <aside className="lg:sticky lg:top-24 lg:self-start space-y-8">
              {/* Search */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="hidden lg:block border-b border-border pb-8"
              >
                <h4 className="text-xl font-bold text-charcoal mb-4">Search</h4>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full border border-border px-4 py-3 pr-10 text-sm bg-transparent focus:border-gold focus:outline-none transition-colors"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-gray" />
                </div>
              </motion.div>

              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="hidden lg:block border-b border-border pb-8"
              >
                <h4 className="text-xl font-bold text-charcoal mb-4">
                  Categories
                </h4>
                <ul className="space-y-3">
                  {categories.map((category) => (
                    <li key={category}>
                      <Link
                        to="/blog"
                        className="text-stone-gray hover:text-gold transition-colors text-[15px]"
                      >
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
                className="border-b border-border pb-8"
              >
                <h4 className="text-xl font-bold text-charcoal mb-4">
                  Recent Posts
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                  {recentPosts.map((post) => (
                    <Link
                      key={post.slug}
                      to={`/blog/${post.slug}`}
                      className="flex gap-4 group"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-20 h-20 object-cover shrink-0"
                      />
                      <div>
                        <h5 className="text-charcoal text-sm font-bold leading-snug group-hover:text-gold transition-colors line-clamp-2">
                          {post.title}
                        </h5>
                        <p className="text-stone-gray text-xs mt-1">
                          {post.date} • {post.comments} comments
                        </p>
                      </div>
                    </Link>
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
                <h4 className="text-xl font-bold text-charcoal mb-4">
                  Popular Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border px-3 py-1.5 text-xs font-bold text-stone-gray hover:border-gold hover:text-gold transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>

      <Newsletter />
    </Layout>
  );
}
