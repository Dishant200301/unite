import { Link } from "react-router-dom";
import { useRef } from "react";
import SectionLabel from "@/components/shared/SectionLabel";
import RightIcon from "@/components/shared/RightIcon";


const posts = [
  {
    id: 1,
    title: "2025 Outdoor Tile Trends: Beauty Meets Durability",
    image: "/assets/images/blog/blog-page-1-image-1.jpg",
    date: "September 10, 2025",
    comments: 0,
    tags: ["OUTDOOR", "TILES"],
    slug: "outdoor-tile-trends",
  },
  {
    id: 2,
    title: "Marble In Luxury Architecture: A Symbol of Elegance",
    image: "/assets/images/blog/blog-page-1-image-2.jpg",
    date: "September 8, 2025",
    comments: 0,
    tags: ["ARCHITECTURE", "MARBLE"],
    slug: "marble-architecture",
  },
  {
    id: 3,
    title: "How to Choose the Right Floor Tiles for Every Space",
    image: "/assets/images/blog/blog-page-1-image-3.jpg",
    date: "September 1, 2025",
    comments: 0,
    tags: ["FLOORING", "TILES"],
    slug: "floor-tiles-guide",
  },
  {
    id: 4,
    title: "Using Marble in Kitchen Design: Elegant and Timeless",
    image: "/assets/images/blog/blog-page-1-image-4.jpg",
    date: "September 5, 2025",
    comments: 0,
    tags: ["KITCHEN", "MARBLE"],
    slug: "marble-kitchen-design",
  },
  {
    id: 5,
    title: "How to Properly Clean and Maintain Marble Surfaces",
    image: "/assets/images/blog/blog-page-2-image-1.png",
    date: "August 28, 2025",
    comments: 0,
    tags: ["MAINTENANCE", "MARBLE"],
    slug: "marble-maintenance",
  },
  {
    id: 6,
    title: "10 Luxury Tile Ideas to Elevate Your Living Room",
    image: "/assets/images/blog/blog-page-2-image-2.png",
    date: "August 25, 2025",
    comments: 0,
    tags: ["LIVING ROOM", "TILES"],
    slug: "luxury-tile-ideas",
  },
];

export default function BlogSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="pt-20 pb-0 lg:pt-32 lg:pb-10 bg-background">
      <div className="container-luxury">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <SectionLabel text="RECENT BLOG" />
            <h2 className="heading-primary text-2xl md:text-4xl lg:text-[48px] leading-[1.1] font-bold mt-4 max-w-3xl">
              Stay Informed With Latest News And Insights
            </h2>
          </div>
          <Link to="/blog" className="btn-primary w-fit font-bold">
            BROWSE ALL
            <RightIcon />
          </Link>
        </div>

        {/* Blog Horizontal Scroll - Show 3 at a time */}
        <div className="relative -mx-0 lg:mx-0">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide cursor-grab active:cursor-grabbing snap-x snap-mandatory px-2 lg:px-0"
            style={{
              scrollSnapType: 'x mandatory',
              scrollPaddingLeft: '0px'
            }}
          >
            {posts.map((post, index) => {
              // Alternating pattern: Chota, Bada, Chota, Bada, Chota, Bada
              // index 0,2,4 = Small (Chota)
              // index 1,3,5 = Large (Bada)
              const isLargeCard = index % 2 === 1;

              return (
                <article
                  key={post.id}
                  className="flex-shrink-0 group blog-card snap-start w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <Link to={`/blog/${post.slug}`}>
                    {/* Image */}
                    <div className={`relative overflow-hidden mb-4 ${isLargeCard
                      ? 'h-[300px] lg:h-[400px]'
                      : 'h-[200px] lg:h-[300px]'
                      }`}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors" />

                      {/* Tags */}
                      <div className="absolute bottom-4 left-4 flex gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-gold text-white text-[11px] uppercase tracking-wide px-3 py-1 font-bold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-charcoal text-xl lg:text-[28px] font-bold leading-tight mb-3 group-hover:text-gold transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-stone-gray text-[13px]">
                      {post.date} · {post.comments} comments
                    </p>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        /* Show 3 cards at a time on desktop */
        @media (min-width: 1024px) {
          .scrollbar-hide {
            scroll-snap-type: x mandatory;
          }
        }
      `}</style>
    </section>
  );
}
