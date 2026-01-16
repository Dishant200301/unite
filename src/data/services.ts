export interface Service {
  id: number;
  number: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 1,
    number: "01",
    title: "Trade Stone Application",
    description: "Discover a curated collection of premium marble and tiles that blend natural beauty with modern design standards.",
    image: "/assets/images/service/service-1.png",
    slug: "trade-stone-application",
    icon: "boxes",
  },
  {
    id: 2,
    number: "02",
    title: "Natural Stone Selection",
    description: "Natural stone is a timeless choice that brings beauty, strength, and elegance to any space.",
    image: "/assets/images/service/service-2.png",
    slug: "natural-stone-selection",
    icon: "grid",
  },
  {
    id: 3,
    number: "03",
    title: "Custom Cutting & Finishing",
    description: "From clean cuts to smooth edges and flawless finishes, our team delivers results that enhance both aesthetics and function.",
    image: "/assets/images/service/service-3.png",
    slug: "custom-cutting-finishing",
    icon: "scissors",
  },
  {
    id: 4,
    number: "04",
    title: "Industrial Marble Flooring",
    description: "Industrial marble flooring combines strength, durability, and timeless elegance, making it a premium choice.",
    image: "/assets/images/service/service-4.png",
    slug: "industrial-marble-flooring",
    icon: "building",
  },
  {
    id: 5,
    number: "05",
    title: "Laminate Tiles Smart Flooring",
    description: "Designed to mimic the natural beauty of wood and stone, these tiles bring a modern aesthetic while delivering durability.",
    image: "/assets/images/service/service-5.png",
    slug: "laminate-tiles-flooring",
    icon: "layers",
  },
  {
    id: 6,
    number: "06",
    title: "Stone Outdoor & Paving",
    description: "We specialize in creating timeless outdoor spaces with premium stonework and paving solutions.",
    image: "/assets/images/service/service-6.png",
    slug: "stone-outdoor-paving",
    icon: "hammer",
  },
  {
    id: 7,
    number: "07",
    title: "Stone Maintenance & Restoration",
    description: "From premium stone installation to restoration and maintenance, our team delivers unmatched quality.",
    image: "/assets/images/service/service-7.png",
    slug: "stone-maintenance-restoration",
    icon: "brush",
  },
  {
    id: 8,
    number: "08",
    title: "Consultation & Design Support",
    description: "With years of expertise and the finest materials, we turn natural stone into timeless design.",
    image: "/assets/images/service/service-8.png",
    slug: "consultation-design-support",
    icon: "settings",
  },
];
