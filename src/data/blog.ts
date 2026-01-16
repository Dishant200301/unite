export interface BlogPost {
  id: number;
  title: string;
  image: string;
  date: string;
  comments: number;
  tags: string[];
  slug: string;
  excerpt: string;
  content?: string;
  author?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "2025 Outdoor Tile Trends: Beauty Meets Durability",
    image: "/assets/images/blog/blog-page-1-image-1.jpg",
    date: "September 10, 2025",
    comments: 0,
    tags: ["OUTDOOR", "TILES"],
    slug: "outdoor-tile-trends",
    excerpt: "Discover the latest trends in outdoor tiling that combine aesthetic appeal with long-lasting durability for your exterior spaces.",
    author: "Admin",
    content: "Discover the latest trends in outdoor tiling that combine aesthetic appeal with long-lasting durability for your exterior spaces. From natural stone looks to modern geometric patterns, outdoor tiles are evolving to meet both functional and aesthetic needs."
  },
  {
    id: 2,
    title: "Marble In Luxury Architecture: A Symbol of Elegance",
    image: "/assets/images/blog/blog-page-1-image-2.jpg",
    date: "September 8, 2025",
    comments: 0,
    tags: ["ARCHITECTURE", "MARBLE"],
    slug: "marble-architecture",
    excerpt: "Explore how marble continues to define luxury in modern architectural masterpieces around the world.",
    author: "Admin",
    content: "Explore how marble continues to define luxury in modern architectural masterpieces around the world. From classic Italian Carrara to exotic varieties, marble remains the material of choice for prestigious projects."
  },
  {
    id: 3,
    title: "How to Choose the Right Floor Tiles for Every Space",
    image: "/assets/images/blog/blog-page-1-image-3.jpg",
    date: "September 1, 2025",
    comments: 0,
    tags: ["FLOORING", "TILES"],
    slug: "floor-tiles-guide",
    excerpt: "Select the perfect floor tiles for every room in your home with our comprehensive guide.",
    author: "Admin",
    content: "Select the perfect floor tiles for every room in your home with our comprehensive guide. Consider factors like durability, slip resistance, and aesthetic appeal when making your selection."
  },
  {
    id: 4,
    title: "Using Marble in Kitchen Design: Elegant and Timeless",
    image: "/assets/images/blog/blog-page-1-image-4.jpg",
    date: "September 5, 2025",
    comments: 0,
    tags: ["KITCHEN", "MARBLE"],
    slug: "marble-kitchen-design",
    excerpt: "Discover the timeless beauty and practical benefits of incorporating marble into your kitchen design.",
    author: "Admin",
    content: "Discover the timeless beauty and practical benefits of incorporating marble into your kitchen design. Marble countertops and backsplashes add sophistication and value to any kitchen."
  },
  {
    id: 5,
    title: "How to Properly Clean and Maintain Marble Surfaces",
    image: "/assets/images/blog/blog-page-2-image-1.png",
    date: "August 28, 2025",
    comments: 0,
    tags: ["MAINTENANCE", "MARBLE"],
    slug: "marble-maintenance",
    excerpt: "Learn the best practices for cleaning and maintaining your marble surfaces to keep them looking pristine.",
    author: "Admin",
    content: "Learn the best practices for cleaning and maintaining your marble surfaces to keep them looking pristine. Proper care ensures your marble investment lasts for generations."
  },
  {
    id: 6,
    title: "10 Luxury Tile Ideas to Elevate Your Living Room",
    image: "/assets/images/blog/blog-page-2-image-2.png",
    date: "August 25, 2025",
    comments: 0,
    tags: ["LIVING ROOM", "TILES"],
    slug: "luxury-tile-ideas",
    excerpt: "Transform your living space with these stunning tile design ideas that exude luxury and sophistication.",
    author: "Admin",
    content: "Transform your living space with these stunning tile design ideas that exude luxury and sophistication. From large format tiles to intricate mosaics, discover options for every style."
  },
  {
    id: 7,
    title: "Natural vs. Engineered Marble: Which One Should You Choose?",
    image: "/assets/images/blog/blog-page-2-image-3.png",
    date: "August 20, 2025",
    comments: 0,
    tags: ["MARBLE", "NATURAL STONE"],
    slug: "natural-vs-engineered-marble",
    excerpt: "Compare natural and engineered marble to make an informed decision for your next project.",
    author: "Admin",
    content: "Compare natural and engineered marble to make an informed decision for your next project. Each option has unique benefits depending on your specific needs and budget."
  },
  {
    id: 8,
    title: "Top Interior Design Trends with Marble in 2025",
    image: "/assets/images/blog/blog-page-2-image-4.png",
    date: "August 15, 2025",
    comments: 0,
    tags: ["INTERIOR DESIGN", "MARBLE"],
    slug: "marble-design-trends-2025",
    excerpt: "Stay ahead of the curve with the latest interior design trends featuring marble this year.",
    author: "Admin",
    content: "Stay ahead of the curve with the latest interior design trends featuring marble this year. Bold veining, mixed materials, and sustainable sourcing are leading the way."
  },
  {
    id: 9,
    title: "Sustainable Tile Options for Eco-Friendly Homes",
    image: "/assets/images/blog/blog-page-3-image-1.png",
    date: "August 10, 2025",
    comments: 0,
    tags: ["SUSTAINABLE TILE", "FLOORING"],
    slug: "sustainable-tile-options",
    excerpt: "Explore environmentally friendly tile options that don't compromise on style or quality.",
    author: "Admin",
    content: "Explore environmentally friendly tile options that don't compromise on style or quality. Recycled materials and sustainable manufacturing processes are making eco-friendly tiles more accessible."
  },
  {
    id: 10,
    title: "Professional Service: Why Hire Experts for Marble Installation",
    image: "/assets/images/blog/blog-page-3-image-2.png",
    date: "August 5, 2025",
    comments: 0,
    tags: ["PROFESSIONAL SERVICE", "MARBLE"],
    slug: "professional-marble-installation",
    excerpt: "Understand the importance of hiring professional installers for your marble projects.",
    author: "Admin",
    content: "Understand the importance of hiring professional installers for your marble projects. Expert installation ensures longevity, proper sealing, and flawless results."
  },
  {
    id: 11,
    title: "Counter Top Materials: A Comprehensive Comparison",
    image: "/assets/images/blog/blog-page-3-image-4.png",
    date: "August 1, 2025",
    comments: 0,
    tags: ["COUNTER TOP", "KITCHEN"],
    slug: "counter-top-comparison",
    excerpt: "Compare different counter top materials to find the perfect fit for your kitchen or bathroom.",
    author: "Admin",
    content: "Compare different counter top materials to find the perfect fit for your kitchen or bathroom. From marble to quartz, each material offers unique advantages."
  },
  {
    id: 12,
    title: "Floor Design Ideas That Work Everywhere",
    image: "/assets/images/blog/blog-page-4-image-3.png",
    date: "July 28, 2025",
    comments: 0,
    tags: ["FLOOR DESIGN", "EVERYWHERE"],
    slug: "floor-design-ideas",
    excerpt: "Versatile floor design ideas that complement any space in your home or office.",
    author: "Admin",
    content: "Versatile floor design ideas that complement any space in your home or office. Timeless patterns and neutral tones ensure your floors never go out of style."
  },
];

export const categories = [
  "Architecture",
  "Bathroom",
  "Flooring",
  "Interior Design",
  "Kitchen",
  "Living Room",
  "Maintenance"
];

export const popularTags = [
  "Architecture",
  "Counter Top",
  "Everywhere",
  "Floor Design",
  "Interior Design",
  "Luxury Design",
  "Maintenance",
  "Natural Stone",
  "Professional Service",
  "Project Design",
  "Service Design",
  "Sustainable Tile"
];
