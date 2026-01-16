export interface Product {
  id: string;
  slug: string;
  title: string;
  price: number;
  salePrice?: number;
  priceMax?: number;
  rating: number;
  reviewCount: number;
  image: string;
  description: string;
  isOnSale: boolean;
  discount?: number;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "durable-concrete-plate",
    title: "Durable Concrete Plate",
    price: 89.00,
    salePrice: 59.89,
    rating: 4,
    reviewCount: 5,
    image: "/assets/images/product/product-1.jpg",
    description: "Synthetic textiles are man-made fabrics produced through chemical processes, typically derived from petroleum-based products. Unlike natural fibers such as cotton or wool, synthetic fibers are created using polymers.",
    isOnSale: true,
    discount: 20,
    category: "Outdoor Paving"
  },
  {
    id: "2",
    slug: "aerodynamic-silk-bottle",
    title: "Aerodynamic Silk Bottle",
    price: 8.41,
    priceMax: 976.84,
    rating: 4.5,
    reviewCount: 3,
    image: "/assets/images/product/product-2.jpg",
    description: "Synthetic textiles are man-made fabrics produced through chemical processes, typically derived from petroleum-based products. Unlike natural fibers such as cotton or wool, synthetic fibers are created using polymers.",
    isOnSale: true,
    discount: 20,
    category: "Kitchen Countertops"
  },
  {
    id: "3",
    slug: "practical-paper-table",
    title: "Practical Paper Table",
    price: 2.34,
    priceMax: 980.04,
    rating: 4,
    reviewCount: 8,
    image: "/assets/images/product/product-3.jpg",
    description: "Synthetic textiles are man-made fabrics produced through chemical processes, typically derived from petroleum-based products. Unlike natural fibers such as cotton or wool, synthetic fibers are created using polymers.",
    isOnSale: true,
    discount: 20,
    category: "Wall Cladding"
  },
  {
    id: "4",
    slug: "gorgeous-marble-table",
    title: "Gorgeous Marble Table",
    price: 708.11,
    rating: 4,
    reviewCount: 2,
    image: "/assets/images/product/product-4.jpg",
    description: "Synthetic textiles are man-made fabrics produced through chemical processes, typically derived from petroleum-based products. Unlike natural fibers such as cotton or wool, synthetic fibers are created using polymers.",
    isOnSale: false,
    category: "Residential Projects"
  },
  {
    id: "5",
    slug: "incredible-wool-gloves",
    title: "Incredible Wool Gloves",
    price: 485.37,
    rating: 4.5,
    reviewCount: 5,
    image: "/assets/images/product/product-5.jpg",
    description: "Synthetic textiles are man-made fabrics produced through chemical processes, typically derived from petroleum-based products. Unlike natural fibers such as cotton or wool, synthetic fibers are created using polymers.",
    isOnSale: false,
    category: "Outdoor Paving"
  },
  {
    id: "6",
    slug: "incredible-granite-bag",
    title: "Incredible Granite Bag",
    price: 140.08,
    rating: 4.5,
    reviewCount: 4,
    image: "/assets/images/product/product-6.jpg",
    description: "Synthetic textiles are man-made fabrics produced through chemical processes, typically derived from petroleum-based products. Unlike natural fibers such as cotton or wool, synthetic fibers are created using polymers.",
    isOnSale: false,
    category: "Kitchen Countertops"
  },
  {
    id: "7",
    slug: "practical-bronze-plate",
    title: "Practical Bronze Plate",
    price: 39.72,
    priceMax: 892.13,
    rating: 5,
    reviewCount: 7,
    image: "/assets/images/product/product-7.jpg",
    description: "Synthetic textiles are man-made fabrics produced through chemical processes, typically derived from petroleum-based products. Unlike natural fibers such as cotton or wool, synthetic fibers are created using polymers.",
    isOnSale: true,
    discount: 20,
    category: "Wall Cladding"
  },
  {
    id: "8",
    slug: "practical-copper-watch",
    title: "Practical Copper Watch",
    price: 23.19,
    rating: 4.5,
    reviewCount: 3,
    image: "/assets/images/product/product-8.jpg",
    description: "Synthetic textiles are man-made fabrics produced through chemical processes, typically derived from petroleum-based products. Unlike natural fibers such as cotton or wool, synthetic fibers are created using polymers.",
    isOnSale: false,
    category: "Residential Projects"
  },
  {
    id: "9",
    slug: "intelligent-paper-car",
    title: "Intelligent Paper Car",
    price: 95.83,
    priceMax: 963.10,
    rating: 4,
    reviewCount: 6,
    image: "/assets/images/product/product-9.jpg",
    description: "Synthetic textiles are man-made fabrics produced through chemical processes, typically derived from petroleum-based products. Unlike natural fibers such as cotton or wool, synthetic fibers are created using polymers.",
    isOnSale: true,
    discount: 20,
    category: "Outdoor Paving"
  },
  {
    id: "10",
    slug: "sleek-cotton-bag",
    title: "Sleek Cotton Bag",
    price: 6.11,
    priceMax: 987.14,
    rating: 4,
    reviewCount: 5,
    image: "/assets/images/product/product-10.jpg",
    description: "Synthetic textiles are man-made fabrics produced through chemical processes, typically derived from petroleum-based products. Unlike natural fibers such as cotton or wool, synthetic fibers are created using polymers.",
    isOnSale: true,
    discount: 20,
    category: "Kitchen Countertops"
  },
  {
    id: "11",
    slug: "durable-aluminum-wallet",
    title: "Durable Aluminum Wallet",
    price: 739.02,
    rating: 4.5,
    reviewCount: 4,
    image: "/assets/images/product/product-11.jpg",
    description: "Synthetic textiles are man-made fabrics produced through chemical processes, typically derived from petroleum-based products. Unlike natural fibers such as cotton or wool, synthetic fibers are created using polymers.",
    isOnSale: false,
    category: "Wall Cladding"
  },
  {
    id: "12",
    slug: "practical-small1103-hat",
    title: "Practical Small1103 Hat",
    price: 2.38,
    priceMax: 935.18,
    rating: 4,
    reviewCount: 2,
    image: "/assets/images/product/product-12.jpg",
    description: "Synthetic textiles are man-made fabrics produced through chemical processes, typically derived from petroleum-based products. Unlike natural fibers such as cotton or wool, synthetic fibers are created using polymers.",
    isOnSale: true,
    discount: 20,
    category: "Residential Projects"
  },
  {
    id: "13",
    slug: "sleek-copper-hat",
    title: "Sleek Copper Hat",
    price: 701.59,
    rating: 4,
    reviewCount: 3,
    image: "/assets/images/product/product-2-1.jpg",
    description: "Synthetic textiles are man-made fabrics produced through chemical processes, typically derived from petroleum-based products. Unlike natural fibers such as cotton or wool, synthetic fibers are created using polymers.",
    isOnSale: false,
    category: "Outdoor Paving"
  },
  {
    id: "14",
    slug: "marble-elegance-slab",
    title: "Marble Elegance Slab",
    price: 1250.00,
    rating: 5,
    reviewCount: 12,
    image: "/assets/images/product/product-2-2.jpg",
    description: "Premium marble slab with elegant veining patterns, perfect for luxury countertops and wall features.",
    isOnSale: false,
    category: "Kitchen Countertops"
  },
  {
    id: "15",
    slug: "travertine-classic",
    title: "Travertine Classic",
    price: 89.50,
    salePrice: 71.60,
    rating: 4.5,
    reviewCount: 8,
    image: "/assets/images/product/product-2-3.jpg",
    description: "Classic travertine tiles with natural beauty, ideal for flooring and outdoor applications.",
    isOnSale: true,
    discount: 20,
    category: "Outdoor Paving"
  },
  {
    id: "16",
    slug: "granite-supreme",
    title: "Granite Supreme",
    price: 445.00,
    rating: 4.5,
    reviewCount: 6,
    image: "/assets/images/product/product-2-4.jpg",
    description: "High-quality granite with exceptional durability, suitable for high-traffic areas.",
    isOnSale: false,
    category: "Wall Cladding"
  },
  {
    id: "17",
    slug: "quartz-premium-white",
    title: "Quartz Premium White",
    price: 520.00,
    salePrice: 416.00,
    rating: 5,
    reviewCount: 15,
    image: "/assets/images/product/product-2-5.jpg",
    description: "Engineered quartz with pristine white finish, non-porous and easy to maintain.",
    isOnSale: true,
    discount: 20,
    category: "Kitchen Countertops"
  },
  {
    id: "18",
    slug: "limestone-natural",
    title: "Limestone Natural",
    price: 125.00,
    rating: 4,
    reviewCount: 4,
    image: "/assets/images/product/product-2-6.jpg",
    description: "Natural limestone with soft tones, perfect for creating warm and inviting spaces.",
    isOnSale: false,
    category: "Residential Projects"
  },
  {
    id: "19",
    slug: "onyx-luxe",
    title: "Onyx Luxe",
    price: 2100.00,
    rating: 5,
    reviewCount: 3,
    image: "/assets/images/product/product-2-7.jpg",
    description: "Rare onyx stone with translucent properties, ideal for backlit feature walls.",
    isOnSale: false,
    category: "Wall Cladding"
  },
  {
    id: "20",
    slug: "sandstone-desert",
    title: "Sandstone Desert",
    price: 78.00,
    salePrice: 62.40,
    rating: 4,
    reviewCount: 7,
    image: "/assets/images/product/product-2-8.jpg",
    description: "Warm sandstone tiles bringing natural desert tones to any outdoor space.",
    isOnSale: true,
    discount: 20,
    category: "Outdoor Paving"
  }
];
