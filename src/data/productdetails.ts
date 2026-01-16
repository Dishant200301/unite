export interface ProductReview {
  id: string;
  author: string;
  avatar?: string;
  date: string;
  rating: number;
  content: string;
}

export interface ProductDetail {
  slug: string;
  name: string;
  price: number;
  salePrice?: number;
  priceMax?: number;
  brand: string;
  stock: boolean;
  rating: number;
  reviewCount: number;
  sku: string;
  categories: string[];
  tags: string[];
  images: string[];
  shortDescription: string;
  description: string;
  additionalInfo: {
    weight: string;
    dimensions: string;
  };
  reviews: ProductReview[];
  relatedProducts: string[];
  isOnSale: boolean;
  discount?: number;
}

export const productDetails: ProductDetail[] = [
  {
    slug: "sleek-cotton-bag",
    name: "Sleek Cotton Bag",
    price: 6.11,
    priceMax: 987.14,
    brand: "NaturaStone",
    stock: true,
    rating: 4.25,
    reviewCount: 5,
    sku: "sleek-cotton-bag-15026910",
    categories: ["Outdoor Paving", "Residential Projects"],
    tags: ["Onyx", "Wall Cladding"],
    images: ["/assets/images/product/product-1.jpg", "/assets/images/product/product-2.jpg", "/assets/images/product/product-3.jpg", "/assets/images/product/product-4.jpg"],
    shortDescription: "Synthetic textiles are man-made fabrics produced through chemical processes, typically derived from petroleum-based products. Unlike natural fibers such as cotton or wool, synthetic fibers are created using polymers that are spun into threads and woven or knitted into fabric.",
    description: "Synthetic textiles are man-made fabrics produced through chemical processes, typically derived from petroleum-based products. Unlike natural fibers such as cotton or wool, synthetic fibers are created using polymers that are spun into threads and woven or knitted into fabric. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
    additionalInfo: {
      weight: "2.5 kg",
      dimensions: "60 × 40 × 2 cm"
    },
    reviews: [
      {
        id: "1",
        author: "John Smith",
        date: "January 15, 2025",
        rating: 5,
        content: "Excellent quality marble! The finish is absolutely stunning and the delivery was prompt."
      },
      {
        id: "2",
        author: "Sarah Johnson",
        date: "January 10, 2025",
        rating: 4,
        content: "Beautiful stone, exactly as pictured. Would recommend for any luxury project."
      },
      {
        id: "3",
        author: "Michael Brown",
        date: "December 28, 2024",
        rating: 4,
        content: "Great product, very satisfied with the purchase. The veining pattern is unique."
      },
      {
        id: "4",
        author: "Emily Davis",
        date: "December 20, 2024",
        rating: 5,
        content: "Perfect for my kitchen countertop renovation. Highly recommend NaturaStone products!"
      },
      {
        id: "5",
        author: "David Wilson",
        date: "December 15, 2024",
        rating: 3,
        content: "Good quality but shipping took longer than expected."
      }
    ],
    relatedProducts: ["sleek-copper-hat", "durable-concrete-plate", "intelligent-paper-car", "aerodynamic-silk-bottle"],
    isOnSale: true,
    discount: 20
  },
  {
    slug: "durable-concrete-plate",
    name: "Durable Concrete Plate",
    price: 89.00,
    salePrice: 59.89,
    brand: "NaturaStone",
    stock: true,
    rating: 4,
    reviewCount: 5,
    sku: "durable-concrete-plate-15026911",
    categories: ["Outdoor Paving"],
    tags: ["Granite", "Flooring"],
    images: ["/assets/images/product/product-5.jpg", "/assets/images/product/product-6.jpg", "/assets/images/product/product-7.jpg", "/assets/images/product/product-8.jpg"],
    shortDescription: "Premium concrete plate designed for outdoor applications with exceptional durability and weather resistance.",
    description: "Our Durable Concrete Plate is engineered for maximum longevity in outdoor environments. Made from high-grade materials, this plate offers superior resistance to weathering, heavy foot traffic, and environmental stress. Perfect for patios, walkways, and commercial outdoor spaces.",
    additionalInfo: {
      weight: "4.2 kg",
      dimensions: "80 × 60 × 3 cm"
    },
    reviews: [
      {
        id: "1",
        author: "Robert Chen",
        date: "January 12, 2025",
        rating: 4,
        content: "Solid quality, perfect for my patio renovation project."
      }
    ],
    relatedProducts: ["sleek-cotton-bag", "practical-bronze-plate", "gorgeous-marble-table", "incredible-wool-gloves"],
    isOnSale: true,
    discount: 20
  },
  {
    slug: "aerodynamic-silk-bottle",
    name: "Aerodynamic Silk Bottle",
    price: 8.41,
    priceMax: 976.84,
    brand: "NaturaStone",
    stock: true,
    rating: 4.5,
    reviewCount: 3,
    sku: "aerodynamic-silk-bottle-15026912",
    categories: ["Kitchen Countertops"],
    tags: ["Marble", "Premium"],
    images: ["/assets/images/product/product-9.jpg", "/assets/images/product/product-10.jpg", "/assets/images/product/product-11.jpg", "/assets/images/product/product-12.jpg"],
    shortDescription: "Elegant marble surface with silk-like finish, perfect for luxury kitchen installations.",
    description: "The Aerodynamic Silk Bottle collection features premium marble with an exceptionally smooth finish that resembles fine silk. This sophisticated material elevates any kitchen space with its natural elegance and timeless beauty.",
    additionalInfo: {
      weight: "3.8 kg",
      dimensions: "100 × 50 × 2.5 cm"
    },
    reviews: [],
    relatedProducts: ["sleek-cotton-bag", "gorgeous-marble-table", "incredible-granite-bag", "practical-paper-table"],
    isOnSale: true,
    discount: 20
  },
  {
    slug: "practical-paper-table",
    name: "Practical Paper Table",
    price: 2.34,
    priceMax: 980.04,
    brand: "NaturaStone",
    stock: true,
    rating: 4,
    reviewCount: 8,
    sku: "practical-paper-table-15026913",
    categories: ["Wall Cladding"],
    tags: ["Quartz", "Modern"],
    images: ["/assets/images/product/product-9.jpg", "/assets/images/product/product-10.jpg", "/assets/images/product/product-11.jpg", "/assets/images/product/product-12.jpg"],
    shortDescription: "Versatile stone surface ideal for wall cladding with contemporary design aesthetics.",
    description: "Our Practical Paper Table stone collection offers versatility and modern appeal for wall cladding applications. The subtle texture and neutral tones complement any interior design scheme while providing lasting durability.",
    additionalInfo: {
      weight: "2.1 kg",
      dimensions: "45 × 30 × 1.5 cm"
    },
    reviews: [],
    relatedProducts: ["durable-aluminum-wallet", "practical-copper-watch", "sleek-cotton-bag", "incredible-wool-gloves"],
    isOnSale: true,
    discount: 20
  },
  {
    slug: "gorgeous-marble-table",
    name: "Gorgeous Marble Table",
    price: 708.11,
    brand: "NaturaStone",
    stock: true,
    rating: 4,
    reviewCount: 2,
    sku: "gorgeous-marble-table-15026914",
    categories: ["Residential Projects"],
    tags: ["Luxury", "Marble"],
    images: ["/assets/images/product/product-2-1.jpg", "/assets/images/product/product-2-2.jpg", "/assets/images/product/product-2-3.jpg", "/assets/images/product/product-2-4.jpg"],
    shortDescription: "Exquisite marble table surface with stunning natural veining patterns.",
    description: "The Gorgeous Marble Table showcases nature's artistry with its unique veining patterns and luxurious finish. Each piece is one-of-a-kind, making it a statement piece for discerning homeowners who appreciate natural beauty.",
    additionalInfo: {
      weight: "45 kg",
      dimensions: "180 × 90 × 4 cm"
    },
    reviews: [],
    relatedProducts: ["aerodynamic-silk-bottle", "incredible-granite-bag", "sleek-copper-hat", "durable-concrete-plate"],
    isOnSale: false
  },
  {
    slug: "incredible-wool-gloves",
    name: "Incredible Wool Gloves",
    price: 485.37,
    brand: "NaturaStone",
    stock: true,
    rating: 4.5,
    reviewCount: 5,
    sku: "incredible-wool-gloves-15026915",
    categories: ["Outdoor Paving"],
    tags: ["Travertine", "Natural"],
    images: ["/assets/images/product/product-1.jpg", "/assets/images/product/product-2.jpg", "/assets/images/product/product-3.jpg", "/assets/images/product/product-4.jpg"],
    shortDescription: "Premium natural stone with wool-like texture for sophisticated outdoor spaces.",
    description: "Incredible Wool Gloves collection features stone with a unique textured surface reminiscent of fine wool. This distinctive appearance adds character and warmth to outdoor paving projects while maintaining excellent durability.",
    additionalInfo: {
      weight: "3.5 kg",
      dimensions: "70 × 50 × 2.5 cm"
    },
    reviews: [],
    relatedProducts: ["durable-concrete-plate", "practical-bronze-plate", "intelligent-paper-car", "sandstone-desert"],
    isOnSale: false
  },
  {
    slug: "incredible-granite-bag",
    name: "Incredible Granite Bag",
    price: 140.08,
    brand: "NaturaStone",
    stock: true,
    rating: 4.5,
    reviewCount: 4,
    sku: "incredible-granite-bag-15026916",
    categories: ["Kitchen Countertops"],
    tags: ["Granite", "Durable"],
    images: ["/assets/images/product/product-9.jpg", "/assets/images/product/product-10.jpg", "/assets/images/product/product-11.jpg", "/assets/images/product/product-12.jpg"],
    shortDescription: "High-quality granite surface perfect for kitchen countertops and heavy-use areas.",
    description: "Our Incredible Granite Bag offers exceptional durability and timeless elegance. This granite variety is specifically selected for its superior hardness and beautiful natural patterns, making it ideal for kitchen applications.",
    additionalInfo: {
      weight: "4.0 kg",
      dimensions: "90 × 60 × 3 cm"
    },
    reviews: [],
    relatedProducts: ["aerodynamic-silk-bottle", "gorgeous-marble-table", "quartz-premium-white", "practical-paper-table"],
    isOnSale: false
  },
  {
    slug: "practical-bronze-plate",
    name: "Practical Bronze Plate",
    price: 39.72,
    priceMax: 892.13,
    brand: "NaturaStone",
    stock: true,
    rating: 5,
    reviewCount: 7,
    sku: "practical-bronze-plate-15026917",
    categories: ["Wall Cladding"],
    tags: ["Bronze", "Accent"],
    images: ["/assets/images/product/product-5.jpg", "/assets/images/product/product-6.jpg", "/assets/images/product/product-7.jpg", "/assets/images/product/product-8.jpg"],
    shortDescription: "Stunning bronze-toned stone for accent walls and decorative applications.",
    description: "The Practical Bronze Plate features warm bronze undertones that add depth and sophistication to any wall cladding project. Its unique coloration makes it perfect for creating focal points in residential and commercial spaces.",
    additionalInfo: {
      weight: "2.8 kg",
      dimensions: "55 × 40 × 2 cm"
    },
    reviews: [],
    relatedProducts: ["durable-aluminum-wallet", "practical-paper-table", "practical-copper-watch", "limestone-natural"],
    isOnSale: true,
    discount: 20
  },
  {
    slug: "practical-copper-watch",
    name: "Practical Copper Watch",
    price: 23.19,
    brand: "NaturaStone",
    stock: false,
    rating: 4.5,
    reviewCount: 3,
    sku: "practical-copper-watch-15026918",
    categories: ["Residential Projects"],
    tags: ["Copper", "Decorative"],
    images: ["/assets/images/product/product-2-1.jpg", "/assets/images/product/product-2-2.jpg", "/assets/images/product/product-2-3.jpg", "/assets/images/product/product-2-4.jpg"],
    shortDescription: "Decorative stone with copper accents for unique residential applications.",
    description: "Practical Copper Watch stone features subtle copper veining that catches light beautifully. This decorative stone is perfect for creating unique focal points in residential settings.",
    additionalInfo: {
      weight: "1.8 kg",
      dimensions: "40 × 30 × 1.5 cm"
    },
    reviews: [],
    relatedProducts: ["gorgeous-marble-table", "practical-small1103-hat", "durable-aluminum-wallet", "limestone-natural"],
    isOnSale: false
  },
  {
    slug: "intelligent-paper-car",
    name: "Intelligent Paper Car",
    price: 95.83,
    priceMax: 963.10,
    brand: "NaturaStone",
    stock: true,
    rating: 4,
    reviewCount: 6,
    sku: "intelligent-paper-car-15026919",
    categories: ["Outdoor Paving"],
    tags: ["Modern", "Paving"],
    images: ["/assets/images/product/product-1.jpg", "/assets/images/product/product-2.jpg", "/assets/images/product/product-3.jpg", "/assets/images/product/product-4.jpg"],
    shortDescription: "Modern paving solution with intelligent design for outdoor spaces.",
    description: "Intelligent Paper Car paving stones combine modern aesthetics with practical functionality. Their unique design allows for creative pattern installations while ensuring excellent durability for outdoor use.",
    additionalInfo: {
      weight: "3.2 kg",
      dimensions: "65 × 45 × 2.5 cm"
    },
    reviews: [],
    relatedProducts: ["durable-concrete-plate", "incredible-wool-gloves", "sandstone-desert", "travertine-classic"],
    isOnSale: true,
    discount: 20
  },
  {
    slug: "sleek-copper-hat",
    name: "Sleek Copper Hat",
    price: 701.59,
    brand: "NaturaStone",
    stock: true,
    rating: 4,
    reviewCount: 3,
    sku: "sleek-copper-hat-15026920",
    categories: ["Outdoor Paving"],
    tags: ["Premium", "Copper"],
    images: ["/assets/images/product/product-1.jpg", "/assets/images/product/product-2.jpg", "/assets/images/product/product-3.jpg", "/assets/images/product/product-4.jpg"],
    shortDescription: "Premium copper-toned paving for sophisticated outdoor designs.",
    description: "Sleek Copper Hat paving stones offer a unique copper aesthetic for discerning outdoor design projects. Their rich coloration and sleek finish make them stand out in any landscape design.",
    additionalInfo: {
      weight: "4.5 kg",
      dimensions: "85 × 60 × 3 cm"
    },
    reviews: [],
    relatedProducts: ["sleek-cotton-bag", "durable-concrete-plate", "incredible-wool-gloves", "intelligent-paper-car"],
    isOnSale: false
  },
  {
    slug: "durable-aluminum-wallet",
    name: "Durable Aluminum Wallet",
    price: 739.02,
    brand: "NaturaStone",
    stock: true,
    rating: 4.5,
    reviewCount: 4,
    sku: "durable-aluminum-wallet-15026921",
    categories: ["Wall Cladding"],
    tags: ["Modern", "Industrial"],
    images: ["/assets/images/product/product-9.jpg", "/assets/images/product/product-10.jpg", "/assets/images/product/product-11.jpg", "/assets/images/product/product-12.jpg"],
    shortDescription: "Industrial-style stone cladding with aluminum-like finish.",
    description: "Durable Aluminum Wallet stone cladding brings an industrial edge to modern interiors. Its unique finish mimics brushed aluminum while maintaining the natural beauty and durability of stone.",
    additionalInfo: {
      weight: "3.0 kg",
      dimensions: "60 × 45 × 2 cm"
    },
    reviews: [],
    relatedProducts: ["practical-bronze-plate", "practical-paper-table", "granite-supreme", "onyx-luxe"],
    isOnSale: false
  },
  {
    slug: "practical-small1103-hat",
    name: "Practical Small1103 Hat",
    price: 2.38,
    priceMax: 935.18,
    brand: "NaturaStone",
    stock: true,
    rating: 4,
    reviewCount: 2,
    sku: "practical-small1103-hat-15026922",
    categories: ["Residential Projects"],
    tags: ["Compact", "Versatile"],
    images: ["/assets/images/product/product-2-1.jpg", "/assets/images/product/product-2-2.jpg", "/assets/images/product/product-2-3.jpg", "/assets/images/product/product-2-4.jpg"],
    shortDescription: "Compact and versatile stone tiles for various residential applications.",
    description: "Practical Small1103 Hat offers versatility in a compact format. These tiles are perfect for detailed work, borders, and smaller residential projects where precision matters.",
    additionalInfo: {
      weight: "0.8 kg",
      dimensions: "20 × 20 × 1 cm"
    },
    reviews: [],
    relatedProducts: ["practical-copper-watch", "gorgeous-marble-table", "limestone-natural", "sandstone-desert"],
    isOnSale: true,
    discount: 20
  },
  {
    slug: "marble-elegance-slab",
    name: "Marble Elegance Slab",
    price: 1250.00,
    brand: "NaturaStone",
    stock: true,
    rating: 5,
    reviewCount: 12,
    sku: "marble-elegance-slab-15026923",
    categories: ["Kitchen Countertops"],
    tags: ["Luxury", "Premium"],
    images: ["/assets/images/product/product-5.jpg", "/assets/images/product/product-6.jpg", "/assets/images/product/product-7.jpg", "/assets/images/product/product-8.jpg"],
    shortDescription: "Premium marble slab with elegant veining patterns, perfect for luxury countertops.",
    description: "Marble Elegance Slab represents the pinnacle of natural stone luxury. Each slab features unique veining patterns that tell a geological story millions of years in the making. Perfect for those who demand the finest.",
    additionalInfo: {
      weight: "65 kg",
      dimensions: "200 × 100 × 3 cm"
    },
    reviews: [],
    relatedProducts: ["quartz-premium-white", "gorgeous-marble-table", "aerodynamic-silk-bottle", "onyx-luxe"],
    isOnSale: false
  },
  {
    slug: "travertine-classic",
    name: "Travertine Classic",
    price: 89.50,
    salePrice: 71.60,
    brand: "NaturaStone",
    stock: true,
    rating: 4.5,
    reviewCount: 8,
    sku: "travertine-classic-15026924",
    categories: ["Outdoor Paving"],
    tags: ["Classic", "Natural"],
    images: ["/assets/images/product/product-9.jpg", "/assets/images/product/product-10.jpg", "/assets/images/product/product-11.jpg", "/assets/images/product/product-12.jpg"],
    shortDescription: "Classic travertine tiles with natural beauty for flooring and outdoor applications.",
    description: "Travertine Classic brings timeless elegance to any space. This natural stone has been prized for centuries for its unique texture and warm tones. Ideal for both interior flooring and outdoor applications.",
    additionalInfo: {
      weight: "2.5 kg",
      dimensions: "40 × 40 × 2 cm"
    },
    reviews: [],
    relatedProducts: ["incredible-wool-gloves", "durable-concrete-plate", "sandstone-desert", "intelligent-paper-car"],
    isOnSale: true,
    discount: 20
  },
  {
    slug: "granite-supreme",
    name: "Granite Supreme",
    price: 445.00,
    brand: "NaturaStone",
    stock: true,
    rating: 4.5,
    reviewCount: 6,
    sku: "granite-supreme-15026925",
    categories: ["Wall Cladding"],
    tags: ["Granite", "Commercial"],
    images: ["/assets/images/product/product-2-1.jpg", "/assets/images/product/product-2-2.jpg", "/assets/images/product/product-2-3.jpg", "/assets/images/product/product-2-4.jpg"],
    shortDescription: "High-quality granite with exceptional durability for high-traffic areas.",
    description: "Granite Supreme offers unmatched durability and beauty for commercial and residential applications. Its exceptional hardness makes it ideal for high-traffic areas while maintaining its stunning appearance.",
    additionalInfo: {
      weight: "5.2 kg",
      dimensions: "100 × 60 × 3 cm"
    },
    reviews: [],
    relatedProducts: ["durable-aluminum-wallet", "incredible-granite-bag", "onyx-luxe", "practical-bronze-plate"],
    isOnSale: false
  },
  {
    slug: "quartz-premium-white",
    name: "Quartz Premium White",
    price: 520.00,
    salePrice: 416.00,
    brand: "NaturaStone",
    stock: true,
    rating: 5,
    reviewCount: 15,
    sku: "quartz-premium-white-15026926",
    categories: ["Kitchen Countertops"],
    tags: ["Quartz", "Modern"],
    images: ["/assets/images/product/product-1.jpg", "/assets/images/product/product-2.jpg", "/assets/images/product/product-3.jpg", "/assets/images/product/product-4.jpg"],
    shortDescription: "Engineered quartz with pristine white finish, non-porous and easy to maintain.",
    description: "Quartz Premium White combines the beauty of natural stone with the practical benefits of engineered surfaces. Its non-porous nature makes it hygienic and easy to maintain, perfect for busy kitchens.",
    additionalInfo: {
      weight: "4.8 kg",
      dimensions: "120 × 60 × 2 cm"
    },
    reviews: [],
    relatedProducts: ["marble-elegance-slab", "aerodynamic-silk-bottle", "incredible-granite-bag", "gorgeous-marble-table"],
    isOnSale: true,
    discount: 20
  },
  {
    slug: "limestone-natural",
    name: "Limestone Natural",
    price: 125.00,
    brand: "NaturaStone",
    stock: true,
    rating: 4,
    reviewCount: 4,
    sku: "limestone-natural-15026927",
    categories: ["Residential Projects"],
    tags: ["Natural", "Warm"],
    images: ["/assets/images/product/product-5.jpg", "/assets/images/product/product-6.jpg", "/assets/images/product/product-7.jpg", "/assets/images/product/product-8.jpg"],
    shortDescription: "Natural limestone with soft tones for creating warm and inviting spaces.",
    description: "Limestone Natural brings warmth and character to any space. Its soft, neutral tones create a welcoming atmosphere while its natural texture adds depth and interest to floors and walls.",
    additionalInfo: {
      weight: "3.0 kg",
      dimensions: "50 × 50 × 2 cm"
    },
    reviews: [],
    relatedProducts: ["practical-copper-watch", "practical-small1103-hat", "gorgeous-marble-table", "sandstone-desert"],
    isOnSale: false
  },
  {
    slug: "onyx-luxe",
    name: "Onyx Luxe",
    price: 2100.00,
    brand: "NaturaStone",
    stock: true,
    rating: 5,
    reviewCount: 3,
    sku: "onyx-luxe-15026928",
    categories: ["Wall Cladding"],
    tags: ["Luxury", "Translucent"],
    images: ["/assets/images/product/product-9.jpg", "/assets/images/product/product-10.jpg", "/assets/images/product/product-11.jpg", "/assets/images/product/product-12.jpg"],
    shortDescription: "Rare onyx stone with translucent properties for backlit feature walls.",
    description: "Onyx Luxe represents the ultimate in luxury stone. Its translucent qualities allow for stunning backlit installations that transform any space into a work of art. Extremely rare and highly prized.",
    additionalInfo: {
      weight: "6.0 kg",
      dimensions: "80 × 60 × 2 cm"
    },
    reviews: [],
    relatedProducts: ["marble-elegance-slab", "granite-supreme", "durable-aluminum-wallet", "gorgeous-marble-table"],
    isOnSale: false
  },
  {
    slug: "sandstone-desert",
    name: "Sandstone Desert",
    price: 78.00,
    salePrice: 62.40,
    brand: "NaturaStone",
    stock: true,
    rating: 4,
    reviewCount: 7,
    sku: "sandstone-desert-15026929",
    categories: ["Outdoor Paving"],
    tags: ["Natural", "Warm"],
    images: ["/assets/images/product/product-2-1.jpg", "/assets/images/product/product-2-2.jpg", "/assets/images/product/product-2-3.jpg", "/assets/images/product/product-2-4.jpg"],
    shortDescription: "Warm sandstone tiles with natural desert tones for outdoor spaces.",
    description: "Sandstone Desert captures the warmth and beauty of sun-baked landscapes. These tiles bring natural desert tones to outdoor spaces, creating a connection with nature that is both calming and inspiring.",
    additionalInfo: {
      weight: "2.2 kg",
      dimensions: "45 × 45 × 2 cm"
    },
    reviews: [],
    relatedProducts: ["travertine-classic", "incredible-wool-gloves", "intelligent-paper-car", "limestone-natural"],
    isOnSale: true,
    discount: 20
  }
];
