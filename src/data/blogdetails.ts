import projectKitchen from "/assets/project-kitchen.jpg";
import projectBathroom from "/assets/project-bathroom.jpg";
import projectDining from "/assets/project-dining.jpg";
import projectStaircase from "/assets/project-staircase.jpg";

export interface BlogDetail {
  slug: string;
  title: string;
  heroImage: string;
  featuredImage: string;
  category: string;
  tags: string[];
  date: string;
  commentsCount: number;
  excerpt: string;
  content: {
    type: "paragraph" | "heading" | "image" | "quote" | "list";
    value: string | string[];
    author?: string;
  }[];
  relatedPosts: {
    slug: string;
    title: string;
    image: string;
    date: string;
    commentsCount: number;
  }[];
}

export const categories = [
  "Architecture",
  "Bathroom",
  "Flooring",
  "Interior Design",
  "Kitchen",
  "Living Room",
  "Maintenance",
  "Marble",
  "Outdoor",
];

export const popularTags = [
  "Architecture",
  "Cleaning Tips",
  "Design Ideas",
  "Durable Design",
  "Kitchen Design",
  "Luxury Design",
  "Maintenance",
  "Marble Care",
  "Marble Countertops",
  "Marble Mosaic",
  "Marble Trends",
  "Natural Marble",
];

export const blogDetails: BlogDetail[] = [
  {
    slug: "outdoor-tile-trends",
    title: "2025 Outdoor Tile Trends: Beauty Meets Durability",
    heroImage: projectDining,
    featuredImage: projectBathroom,
    category: "Outdoor",
    tags: ["Durable Design", "Luxury Design", "Marble Trends"],
    date: "September 10, 2025",
    commentsCount: 6,
    excerpt:
      "Check out the top outdoor tile trends of 2025 that combine style, strength, and long-lasting performance.",
    content: [
      {
        type: "paragraph",
        value:
          "Bathroom renovations offer an exciting opportunity to add a modern touch to one of the most personal and special spaces in our homes. The shower area, which serves as a captivating focal point, requires careful consideration in terms of both functionality and aesthetics. In this regard, choosing a marble shower tray can elevate the elegance of your bathroom. In this blog post, we will explore the numerous advantages of installing a marble shower tray and how it can enhance the overall design of your bathroom.",
      },
      {
        type: "heading",
        value: "Luxurious and Timeless Appeal:",
      },
      {
        type: "paragraph",
        value:
          "Marble has long been associated with luxury and sophistication. By incorporating a marble shower tray, you can infuse your bathroom with a sense of opulence. The natural texture and unique patterns of marble grant your bathroom a stunning appearance. Being a timeless material, marble never goes out of style, ensuring that your bathroom aesthetics remain contemporary.",
      },
      {
        type: "image",
        value: projectStaircase,
      },
      {
        type: "heading",
        value: "Easy Maintenance:",
      },
      {
        type: "paragraph",
        value:
          "Bathrooms require regular cleaning to maintain a hygienic environment. Marble shower trays offer advantages in terms of cleaning as well. Thanks to their smooth surfaces, stains and dirt can be easily wiped away. With just a mild cleaning agent and a damp cloth, you can keep your marble shower tray shiny and clean. Additionally, the natural properties of marble help prevent the formation of bacteria and mold.",
      },
      {
        type: "quote",
        value:
          "Extremely helpful team. Understood the requirements very well and provided dedicated support in selecting design of tiles. The prices of the Marble & Tiles were better than all the places where I checked.",
        author: "Aaliyah Brown",
      },
      {
        type: "heading",
        value: "Investment Value:",
      },
      {
        type: "paragraph",
        value:
          "Bathroom renovations are significant investments that can increase the value of your home. By incorporating a marble shower tray, you can add sophistication and quality to your bathroom, thus enhancing its value. Marble's association with luxury and its popularity among homebuyers can leave a positive impression. Therefore, choosing a marble shower tray can not only benefit you now but also protect your investment in the long run.",
      },
    ],
    relatedPosts: [
      {
        slug: "floor-tiles-guide",
        title: "How to Choose the Right Floor Tiles for Every Space",
        image: projectDining,
        date: "September 1, 2025",
        commentsCount: 4,
      },
      {
        slug: "marble-kitchen-design",
        title: "Using Marble in Kitchen Design: Elegant and Timeless",
        image: projectKitchen,
        date: "September 5, 2025",
        commentsCount: 8,
      },
    ],
  },
  {
    slug: "marble-architecture",
    title: "Marble in Luxury Architecture: A Symbol of Elegance",
    heroImage: projectBathroom,
    featuredImage: projectStaircase,
    category: "Architecture",
    tags: ["Architecture", "Luxury Design", "Natural Marble"],
    date: "September 8, 2025",
    commentsCount: 4,
    excerpt:
      "Discover how marble has been a cornerstone of luxury architecture for centuries and continues to define elegance.",
    content: [
      {
        type: "paragraph",
        value:
          "Throughout history, marble has been the material of choice for the world's most iconic architectural masterpieces. From ancient Greek temples to modern luxury residences, this natural stone continues to symbolize elegance, permanence, and refined taste.",
      },
      {
        type: "heading",
        value: "A Legacy of Grandeur:",
      },
      {
        type: "paragraph",
        value:
          "The Parthenon, Taj Mahal, and countless Renaissance sculptures stand as testament to marble's enduring appeal. Today's architects continue this tradition, incorporating marble into contemporary designs that bridge the gap between classical beauty and modern functionality.",
      },
      {
        type: "image",
        value: projectBathroom,
      },
      {
        type: "heading",
        value: "Modern Applications:",
      },
      {
        type: "paragraph",
        value:
          "In contemporary architecture, marble finds its place in statement walls, grand foyers, luxury bathrooms, and kitchen islands. Its versatility allows designers to create both minimalist modern spaces and ornate traditional interiors with equal success.",
      },
      {
        type: "quote",
        value:
          "Marble transforms ordinary spaces into extraordinary experiences. Its natural variations ensure that each installation is truly unique.",
        author: "Marcus Chen, Architect",
      },
    ],
    relatedPosts: [
      {
        slug: "outdoor-tile-trends",
        title: "2025 Outdoor Tile Trends: Beauty Meets Durability",
        image: projectDining,
        date: "September 10, 2025",
        commentsCount: 6,
      },
    ],
  },
  {
    slug: "marble-kitchen-design",
    title: "Using Marble in Kitchen Design: Elegant and Timeless",
    heroImage: projectKitchen,
    featuredImage: projectKitchen,
    category: "Kitchen",
    tags: ["Kitchen Design", "Marble Countertops", "Design Ideas"],
    date: "September 5, 2025",
    commentsCount: 8,
    excerpt:
      "Learn how to incorporate marble into your kitchen design for a look that's both elegant and functional.",
    content: [
      {
        type: "paragraph",
        value:
          "The kitchen has evolved from a purely functional space to the heart of the modern home. Marble, with its timeless elegance and practical durability, has become the go-to choice for homeowners seeking to elevate their culinary spaces.",
      },
      {
        type: "heading",
        value: "Countertop Excellence:",
      },
      {
        type: "paragraph",
        value:
          "Marble countertops offer an unmatched combination of beauty and functionality. The cool surface is perfect for pastry work, while the natural patterns create a stunning focal point that draws the eye and sparks conversation.",
      },
      {
        type: "list",
        value: [
          "Heat resistance for hot pots and pans",
          "Cool surface ideal for baking",
          "Each slab is unique with natural veining",
          "Increases property value",
        ],
      },
      {
        type: "heading",
        value: "Care and Maintenance:",
      },
      {
        type: "paragraph",
        value:
          "While marble requires some care to maintain its beauty, the effort is well worth the result. Regular sealing, prompt cleanup of spills, and the use of cutting boards will keep your marble surfaces looking pristine for decades.",
      },
    ],
    relatedPosts: [
      {
        slug: "marble-architecture",
        title: "Marble in Luxury Architecture: A Symbol of Elegance",
        image: projectBathroom,
        date: "September 8, 2025",
        commentsCount: 4,
      },
    ],
  },
  {
    slug: "floor-tiles-guide",
    title: "How to Choose the Right Floor Tiles for Every Space",
    heroImage: projectDining,
    featuredImage: projectDining,
    category: "Flooring",
    tags: ["Flooring", "Design Ideas", "Durable Design"],
    date: "September 1, 2025",
    commentsCount: 4,
    excerpt:
      "A comprehensive guide to selecting the perfect floor tiles for different areas of your home.",
    content: [
      {
        type: "paragraph",
        value:
          "Choosing the right floor tiles can transform your space from ordinary to extraordinary. With countless options available in materials, sizes, colors, and patterns, making the right choice requires understanding both aesthetic preferences and practical requirements.",
      },
      {
        type: "heading",
        value: "Consider the Space:",
      },
      {
        type: "paragraph",
        value:
          "Different areas of your home have different requirements. High-traffic areas like hallways need durable, scratch-resistant tiles, while bathrooms require slip-resistant surfaces. Kitchens benefit from easy-to-clean materials that can handle spills and stains.",
      },
      {
        type: "list",
        value: [
          "Living areas: Focus on aesthetics and comfort",
          "Bathrooms: Prioritize slip resistance and water resistance",
          "Kitchens: Choose easy-to-clean, durable options",
          "Outdoor: Weather-resistant and UV-stable materials",
        ],
      },
      {
        type: "heading",
        value: "Material Matters:",
      },
      {
        type: "paragraph",
        value:
          "From natural stone to porcelain, each material offers unique benefits. Natural marble and granite provide unmatched beauty, while porcelain offers durability and lower maintenance. Consider your lifestyle, budget, and design goals when making your selection.",
      },
    ],
    relatedPosts: [
      {
        slug: "outdoor-tile-trends",
        title: "2025 Outdoor Tile Trends: Beauty Meets Durability",
        image: projectDining,
        date: "September 10, 2025",
        commentsCount: 6,
      },
    ],
  },
];

export function getBlogBySlug(slug: string): BlogDetail | undefined {
  return blogDetails.find((blog) => blog.slug === slug);
}

export function getRecentPosts(excludeSlug?: string, limit: number = 4) {
  return blogDetails
    .filter((blog) => blog.slug !== excludeSlug)
    .slice(0, limit);
}
