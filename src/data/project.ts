export interface Project {
  id: number;
  title: string;
  image: string;
  slug: string;
  category: string;
  description?: string;
}

export const projects: Project[] = [
  // Page 1 Projects
  {
    id: 1,
    title: "Luxury Marble Kitchen Design",
    image: "/assets/images/project/project-page-1-image-1.jpg",
    slug: "luxury-marble-kitchen",
    category: "Kitchen",
    description: "Elegant marble kitchen with modern appliances and premium finishes"
  },
  {
    id: 2,
    title: "Modern Spiral Staircase",
    image: "/assets/images/project/project-page-1-image-2.jpg",
    slug: "modern-spiral-staircase",
    category: "Interior",
    description: "Stunning spiral staircase with marble flooring and contemporary design"
  },
  {
    id: 3,
    title: "Contemporary Kitchen Island",
    image: "/assets/images/project/project-page-1-image-3.jpg",
    slug: "contemporary-kitchen-island",
    category: "Kitchen",
    description: "Sleek kitchen island featuring premium marble countertops"
  },
  {
    id: 4,
    title: "Elegant Dining Space",
    image: "/assets/images/project/project-page-1-image-4.jpg",
    slug: "elegant-dining-space",
    category: "Dining",
    description: "Sophisticated dining area with marble table and modern seating"
  },
  {
    id: 5,
    title: "Boutique Hotel Park Lane",
    image: "/assets/images/project/project-page-1-image-5.jpg",
    slug: "boutique-hotel-park-lane",
    category: "Commercial",
    description: "Luxurious hotel interior with premium marble installations"
  },
  {
    id: 6,
    title: "Minimalist Kitchen Design",
    image: "/assets/images/project/project-page-1-image-6.jpg",
    slug: "minimalist-kitchen-design",
    category: "Kitchen",
    description: "Clean and modern kitchen with white marble accents"
  },
  // Page 2 Projects
  {
    id: 7,
    title: "Classic Marble Bathroom",
    image: "/assets/images/project/project-page-2-image-1.jpg",
    slug: "classic-marble-bathroom",
    category: "Bathroom",
    description: "Timeless bathroom design with marble walls and flooring"
  },
  {
    id: 8,
    title: "Executive Office Space",
    image: "/assets/images/project/project-page-2-image-2.jpg",
    slug: "executive-office-space",
    category: "Commercial",
    description: "Professional office interior with marble reception desk"
  },
  {
    id: 9,
    title: "Luxury Living Room",
    image: "/assets/images/project/project-page-2-image-3.jpg",
    slug: "luxury-living-room",
    category: "Living Room",
    description: "Elegant living space featuring marble fireplace and flooring"
  },
  {
    id: 10,
    title: "Modern Dining Hall",
    image: "/assets/images/project/project-page-2-image-4.jpg",
    slug: "modern-dining-hall",
    category: "Dining",
    description: "Contemporary dining area with marble table centerpiece"
  },
  {
    id: 11,
    title: "Spa Bathroom Retreat",
    image: "/assets/images/project/project-page-2-image-5.jpg",
    slug: "spa-bathroom-retreat",
    category: "Bathroom",
    description: "Serene bathroom with natural marble and modern fixtures"
  },
  {
    id: 12,
    title: "Grand Entrance Hall",
    image: "/assets/images/project/project-page-2-image-6.jpg",
    slug: "grand-entrance-hall",
    category: "Interior",
    description: "Impressive entrance with marble flooring and elegant staircase"
  }
];

export const projectCategories = [
  "All Projects",
  "Kitchen",
  "Bathroom",
  "Living Room",
  "Dining",
  "Interior",
  "Commercial"
];
