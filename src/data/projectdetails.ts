export interface ProjectDetail {
  id: number;
  slug: string;
  title: string;
  heroImage: string;
  category: string;
  client: string;
  location: string;
  size: string;
  year: string;
  architect: string;
  overview: string[];
  overviewChallenges: {
    description: string;
    challenges: string[];
  };
  fullImage: string;
  gallery?: string[];
  relatedProjects: {
    id: number;
    title: string;
    image: string;
    slug: string;
  }[];
}

export const projectDetails: ProjectDetail[] = [
  {
    id: 1,
    slug: "luxury-marble-kitchen",
    title: "Luxury Modern Villa",
    heroImage: "/assets/images/project/project-page-1-image-1.jpg",
    category: "Kitchen Design",
    client: "Private Client",
    location: "New York, USA",
    size: "450 sq ft",
    year: "2024",
    architect: "Studio Architecture",
    overview: [
      "This luxury modern villa showcases the perfect blend of contemporary design and timeless marble elegance. The project features premium Italian marble throughout, creating a sophisticated and luxurious living space that exemplifies modern architectural excellence. Every detail has been carefully considered to ensure both aesthetic appeal and functional excellence. Our team worked meticulously to select the finest marble slabs, ensuring each piece complements the overall design vision. The installation process required precision craftsmanship and attention to detail at every stage. From the grand entrance to the intimate living spaces, marble surfaces create a cohesive and elegant atmosphere. The natural veining patterns add unique character to each room.",
      "The project timeline spanned several months, allowing our craftsmen to execute every detail with precision and care. We collaborated closely with the client and architects to ensure the final result exceeded all expectations. Advanced installation techniques were employed to achieve seamless joints and perfect alignment throughout the space. The marble surfaces were treated with premium sealants to ensure long-lasting beauty and durability."
    ],
    overviewChallenges: {
      description: "The main challenge was to integrate modern design elements while maintaining the classic elegance of marble throughout this expansive villa. We needed to ensure proper lighting to highlight the natural beauty of the stone while creating a warm, inviting atmosphere in every space. Coordinating the delivery and installation of large marble slabs required careful planning and logistics management. Our team had to work around existing architectural features while ensuring structural integrity. The veining patterns needed to be matched across multiple surfaces to create visual continuity.",
      challenges: [
        "SEAMLESS MARBLE INSTALLATION",
        "PRECISION IN STONE CUTTING",
        "MATCHING VEINING PATTERNS",
        "WATERPROOFING AND SEALING",
        "COORDINATING WITH OTHER TRADES",
        "MAINTAINING CONSISTENT QUALITY"
      ]
    },
    fullImage: "/assets/images/project/project-page-1-image-2.jpg",
    gallery: [
      "/assets/images/project/project-page-1-image-1.jpg",
      "/assets/images/project/project-page-1-image-2.jpg",
      "/assets/images/project/project-page-1-image-3.jpg",
      "/assets/images/project/project-page-1-image-4.jpg",
      "/assets/images/project/project-page-1-image-5.jpg",
      "/assets/images/project/project-page-1-image-6.jpg"
    ],
    relatedProjects: [
      {
        id: 2,
        title: "Urban Art Gallery",
        image: "/assets/images/project/project-page-1-image-3.jpg",
        slug: "modern-spiral-staircase"
      },
      {
        id: 3,
        title: "Mountain Retreat Chalet",
        image: "/assets/images/project/project-page-1-image-4.jpg",
        slug: "contemporary-kitchen-island"
      },
      {
        id: 4,
        title: "Riverside Apartment Complex",
        image: "/assets/images/project/project-page-1-image-5.jpg",
        slug: "elegant-dining-space"
      }
    ]
  },
  {
    id: 2,
    slug: "modern-spiral-staircase",
    title: "Modern Spiral Staircase",
    heroImage: "/assets/images/project/project-page-1-image-2.jpg",
    category: "Interior Design",
    client: "Commercial Property",
    location: "Los Angeles, USA",
    size: "800 sq ft",
    year: "2024",
    architect: "Modern Design Co.",
    overview: [
      "A stunning spiral staircase featuring premium marble flooring and contemporary design elements. This project demonstrates the perfect harmony between structural engineering and aesthetic design, creating a focal point that elevates the entire space. The curved marble installation required exceptional skill and precision from our master craftsmen. Each step was carefully measured and cut to ensure perfect alignment and safety. The natural beauty of the marble enhances the architectural drama of the spiral design. Sophisticated lighting was integrated to highlight the flowing lines and elegant curves. This installation showcases how marble can be used in innovative ways to create breathtaking architectural features.",
      "Throughout the construction process, we maintained the highest standards of quality and safety. The finished staircase has become an iconic feature of the building, admired by all who visit. This project demonstrates our expertise in handling complex marble installations that push the boundaries of traditional design. The seamless integration of form and function creates a truly remarkable architectural achievement."
    ],
    overviewChallenges: {
      description: "Creating a spiral staircase with marble required precise calculations and expert craftsmanship. The challenge was to ensure structural integrity while maintaining the flowing, elegant design. Each curved step needed custom fabrication to achieve the perfect radius and alignment. Our team coordinated closely with structural engineers to ensure proper weight distribution and support. The installation demanded meticulous attention to detail at every stage to achieve flawless results.",
      challenges: [
        "STRUCTURAL ENGINEERING",
        "CURVED MARBLE INSTALLATION",
        "SAFETY COMPLIANCE",
        "LIGHTING INTEGRATION",
        "WEIGHT DISTRIBUTION",
        "SEAMLESS TRANSITIONS"
      ]
    },
    fullImage: "/assets/images/project/project-page-2-image-1.jpg",
    gallery: [
      "/assets/images/project/project-page-2-image-1.jpg",
      "/assets/images/project/project-page-2-image-2.jpg",
      "/assets/images/project/project-page-2-image-3.jpg",
      "/assets/images/project/project-page-2-image-4.jpg",
      "/assets/images/project/project-page-2-image-5.jpg",
      "/assets/images/project/project-page-2-image-6.jpg"
    ],
    relatedProjects: [
      {
        id: 1,
        title: "Luxury Modern Villa",
        image: "/assets/images/project/project-page-1-image-1.jpg",
        slug: "luxury-marble-kitchen"
      },
      {
        id: 3,
        title: "Contemporary Kitchen Island",
        image: "/assets/images/project/project-page-1-image-3.jpg",
        slug: "contemporary-kitchen-island"
      },
      {
        id: 4,
        title: "Elegant Dining Space",
        image: "/assets/images/project/project-page-1-image-4.jpg",
        slug: "elegant-dining-space"
      }
    ]
  },
  {
    id: 3,
    slug: "contemporary-kitchen-island",
    title: "Contemporary Kitchen Island",
    heroImage: "/assets/images/project/project-page-1-image-3.jpg",
    category: "Kitchen Design",
    client: "Residential",
    location: "Miami, USA",
    size: "350 sq ft",
    year: "2024",
    architect: "Kitchen Concepts",
    overview: [
      "This contemporary kitchen island features a sleek marble countertop that serves as both a functional workspace and a stunning centerpiece. The design emphasizes clean lines and modern aesthetics while showcasing the natural beauty of premium marble. Our team carefully selected marble slabs with distinctive veining patterns that add visual interest to the space. The large format installation required expert handling and precise measurements to achieve seamless results. Advanced edge profiling techniques create a refined and sophisticated appearance. The marble surface provides an ideal workspace for food preparation while maintaining its luxurious aesthetic appeal.",
      "The finished kitchen island has transformed the space into a modern culinary haven. The marble countertop is both beautiful and durable, designed to withstand daily use while maintaining its elegant appearance. Premium sealants protect the surface from stains and moisture. This project exemplifies our commitment to combining aesthetic excellence with practical functionality in residential kitchen design."
    ],
    overviewChallenges: {
      description: "The primary challenge was creating a large, seamless marble surface for the island while ensuring proper support and durability for daily use. We needed to coordinate the installation with cabinetry and plumbing work to achieve perfect integration. The marble slabs required precise cutting and edge finishing to meet the exact specifications. Our team implemented advanced techniques to ensure the countertop could withstand the demands of a busy kitchen environment.",
      challenges: [
        "LARGE FORMAT INSTALLATION",
        "EDGE PROFILING",
        "UNDERMOUNT SINK INTEGRATION",
        "SEAM MATCHING",
        "HEAT RESISTANCE",
        "STAIN PROTECTION"
      ]
    },
    fullImage: "/assets/images/project/project-page-2-image-2.jpg",
    gallery: [
      "/assets/images/project/project-page-2-image-1.jpg",
      "/assets/images/project/project-page-2-image-2.jpg",
      "/assets/images/project/project-page-2-image-3.jpg",
      "/assets/images/project/project-page-2-image-4.jpg",
      "/assets/images/project/project-page-2-image-5.jpg",
      "/assets/images/project/project-page-2-image-6.jpg"
    ],
    relatedProjects: [
      {
        id: 1,
        title: "Luxury Modern Villa",
        image: "/assets/images/project/project-page-1-image-1.jpg",
        slug: "luxury-marble-kitchen"
      },
      {
        id: 2,
        title: "Modern Spiral Staircase",
        image: "/assets/images/project/project-page-1-image-2.jpg",
        slug: "modern-spiral-staircase"
      },
      {
        id: 5,
        title: "Boutique Hotel Park Lane",
        image: "/assets/images/project/project-page-1-image-5.jpg",
        slug: "boutique-hotel-park-lane"
      }
    ]
  },
  {
    id: 4,
    slug: "elegant-dining-space",
    title: "Elegant Dining Space",
    heroImage: "/assets/images/project/project-page-1-image-4.jpg",
    category: "Dining",
    client: "Private Residence",
    location: "Chicago, USA",
    size: "400 sq ft",
    year: "2024",
    architect: "Interior Concepts",
    overview: [
      "This elegant dining space showcases sophisticated marble table and modern seating arrangements. The project features premium marble surfaces that create a refined atmosphere perfect for entertaining. Our team carefully selected materials that complement the overall interior design while providing durability for daily use. The installation required precise measurements and expert craftsmanship to achieve the desired aesthetic. Natural lighting enhances the beauty of the marble surfaces throughout the space. Every detail was considered to create a harmonious and inviting dining environment.",
      "The finished dining area has become the centerpiece of the home, perfect for both intimate family meals and elegant dinner parties. The marble surfaces are easy to maintain while providing lasting beauty. This project demonstrates our expertise in creating functional yet luxurious dining spaces."
    ],
    overviewChallenges: {
      description: "Creating a cohesive dining space required careful coordination of marble table installation with lighting and furniture placement. We needed to ensure the marble surfaces could withstand daily use while maintaining their elegant appearance. The challenge was balancing aesthetic appeal with practical functionality for a busy family dining area.",
      challenges: [
        "MARBLE TABLE INSTALLATION",
        "LIGHTING COORDINATION",
        "FURNITURE INTEGRATION",
        "SURFACE PROTECTION",
        "COLOR MATCHING",
        "SPACE OPTIMIZATION"
      ]
    },
    fullImage: "/assets/images/project/project-page-1-image-4.jpg",
    relatedProjects: [
      {
        id: 1,
        title: "Luxury Modern Villa",
        image: "/assets/images/project/project-page-1-image-1.jpg",
        slug: "luxury-marble-kitchen"
      },
      {
        id: 3,
        title: "Contemporary Kitchen Island",
        image: "/assets/images/project/project-page-1-image-3.jpg",
        slug: "contemporary-kitchen-island"
      },
      {
        id: 6,
        title: "Minimalist Kitchen Design",
        image: "/assets/images/project/project-page-1-image-6.jpg",
        slug: "minimalist-kitchen-design"
      }
    ]
  },
  {
    id: 5,
    slug: "boutique-hotel-park-lane",
    title: "Boutique Hotel Park Lane",
    heroImage: "/assets/images/project/project-page-1-image-5.jpg",
    category: "Commercial",
    client: "Park Lane Hotels",
    location: "London, UK",
    size: "2000 sq ft",
    year: "2024",
    architect: "Luxury Hospitality Design",
    overview: [
      "This luxurious hotel interior features premium marble installations throughout the lobby and common areas. The project showcases our expertise in large-scale commercial installations with attention to every detail. We selected the finest marble materials to create an atmosphere of elegance and sophistication. The installation required coordination with multiple trades and strict adherence to project timelines. Each marble surface was carefully positioned to maximize visual impact and durability. The result is a stunning hotel interior that impresses guests from the moment they arrive.",
      "The completed project has elevated the hotel's reputation and guest experience. The marble installations require minimal maintenance while providing lasting beauty. This project demonstrates our capability to handle complex commercial installations with precision and professionalism."
    ],
    overviewChallenges: {
      description: "Managing a large-scale commercial installation required careful planning and coordination with hotel operations. We needed to complete the work within tight timelines while maintaining the highest quality standards. The challenge was installing premium marble surfaces in high-traffic areas while ensuring long-term durability and ease of maintenance.",
      challenges: [
        "LARGE SCALE INSTALLATION",
        "TIMELINE MANAGEMENT",
        "HIGH TRAFFIC DURABILITY",
        "MULTIPLE TRADE COORDINATION",
        "QUALITY CONTROL",
        "MINIMAL DISRUPTION"
      ]
    },
    fullImage: "/assets/images/project/project-page-1-image-5.jpg",
    relatedProjects: [
      {
        id: 8,
        title: "Executive Office Space",
        image: "/assets/images/project/project-page-2-image-2.jpg",
        slug: "executive-office-space"
      },
      {
        id: 12,
        title: "Grand Entrance Hall",
        image: "/assets/images/project/project-page-2-image-6.jpg",
        slug: "grand-entrance-hall"
      },
      {
        id: 1,
        title: "Luxury Modern Villa",
        image: "/assets/images/project/project-page-1-image-1.jpg",
        slug: "luxury-marble-kitchen"
      }
    ]
  },
  {
    id: 6,
    slug: "minimalist-kitchen-design",
    title: "Minimalist Kitchen Design",
    heroImage: "/assets/images/project/project-page-1-image-6.jpg",
    category: "Kitchen",
    client: "Modern Living",
    location: "San Francisco, USA",
    size: "380 sq ft",
    year: "2024",
    architect: "Minimal Design Studio",
    overview: [
      "This minimalist kitchen design features clean lines and white marble accents that create a serene and modern cooking space. The project emphasizes simplicity and functionality while showcasing the natural beauty of premium marble. Our team carefully selected materials that complement the minimalist aesthetic while providing practical benefits. The installation required precision to achieve the seamless look that defines minimalist design. Every surface was finished to perfection with attention to detail. The result is a kitchen that is both beautiful and highly functional.",
      "The completed kitchen has transformed the space into a calm and efficient cooking environment. The white marble surfaces are easy to clean and maintain their pristine appearance. This project showcases our ability to work within specific design philosophies while delivering exceptional results."
    ],
    overviewChallenges: {
      description: "Creating a minimalist kitchen required achieving perfect alignment and seamless transitions between marble surfaces. We needed to ensure all installations were flawless as any imperfection would be highly visible in the clean design. The challenge was maintaining the minimalist aesthetic while incorporating all necessary functional elements.",
      challenges: [
        "SEAMLESS INSTALLATIONS",
        "PERFECT ALIGNMENT",
        "MINIMALIST AESTHETIC",
        "FUNCTIONAL INTEGRATION",
        "WHITE MARBLE MAINTENANCE",
        "CLEAN LINES"
      ]
    },
    fullImage: "/assets/images/project/project-page-1-image-6.jpg",
    relatedProjects: [
      {
        id: 1,
        title: "Luxury Modern Villa",
        image: "/assets/images/project/project-page-1-image-1.jpg",
        slug: "luxury-marble-kitchen"
      },
      {
        id: 3,
        title: "Contemporary Kitchen Island",
        image: "/assets/images/project/project-page-1-image-3.jpg",
        slug: "contemporary-kitchen-island"
      },
      {
        id: 4,
        title: "Elegant Dining Space",
        image: "/assets/images/project/project-page-1-image-4.jpg",
        slug: "elegant-dining-space"
      }
    ]
  },
  {
    id: 7,
    slug: "classic-marble-bathroom",
    title: "Classic Marble Bathroom",
    heroImage: "/assets/images/project/project-page-2-image-1.jpg",
    category: "Bathroom",
    client: "Luxury Homes",
    location: "Boston, USA",
    size: "200 sq ft",
    year: "2024",
    architect: "Bath Design Experts",
    overview: [
      "This timeless bathroom design features marble walls and flooring that create a spa-like atmosphere. The project showcases classic design principles combined with modern functionality. Our team selected premium marble materials that provide both beauty and durability in a moisture-rich environment. The installation required specialized techniques to ensure proper waterproofing and longevity. Every surface was carefully sealed and finished to prevent water damage. The result is a bathroom that exudes elegance and provides a relaxing retreat.",
      "The completed bathroom has become a favorite space in the home, offering a luxurious bathing experience. The marble surfaces are properly maintained and continue to look beautiful. This project demonstrates our expertise in bathroom installations where both aesthetics and functionality are critical."
    ],
    overviewChallenges: {
      description: "Installing marble in a bathroom environment required special attention to waterproofing and moisture protection. We needed to ensure all surfaces were properly sealed while maintaining the elegant appearance. The challenge was creating a beautiful space that could withstand constant exposure to water and humidity.",
      challenges: [
        "WATERPROOFING",
        "MOISTURE PROTECTION",
        "PROPER SEALING",
        "DRAINAGE INTEGRATION",
        "SLIP RESISTANCE",
        "VENTILATION COORDINATION"
      ]
    },
    fullImage: "/assets/images/project/project-page-2-image-1.jpg",
    relatedProjects: [
      {
        id: 11,
        title: "Spa Bathroom Retreat",
        image: "/assets/images/project/project-page-2-image-5.jpg",
        slug: "spa-bathroom-retreat"
      },
      {
        id: 1,
        title: "Luxury Modern Villa",
        image: "/assets/images/project/project-page-1-image-1.jpg",
        slug: "luxury-marble-kitchen"
      },
      {
        id: 9,
        title: "Luxury Living Room",
        image: "/assets/images/project/project-page-2-image-3.jpg",
        slug: "luxury-living-room"
      }
    ]
  },
  {
    id: 8,
    slug: "executive-office-space",
    title: "Executive Office Space",
    heroImage: "/assets/images/project/project-page-2-image-2.jpg",
    category: "Commercial",
    client: "Corporate Interiors",
    location: "New York, USA",
    size: "1500 sq ft",
    year: "2024",
    architect: "Office Design Group",
    overview: [
      "This professional office interior features a marble reception desk and accent walls that create an impressive first impression. The project combines functionality with sophisticated design to reflect the company's professional image. Our team selected marble materials that convey strength and elegance while being practical for daily use. The installation required coordination with office systems and minimal disruption to business operations. Every detail was executed to create a cohesive and professional environment. The result is an office space that impresses clients and inspires employees.",
      "The completed office has enhanced the company's professional image and created a productive work environment. The marble installations are durable and easy to maintain in a busy office setting. This project showcases our ability to deliver commercial projects on time and within budget."
    ],
    overviewChallenges: {
      description: "Completing an office installation while minimizing disruption to business operations required careful planning and scheduling. We needed to work efficiently while maintaining the highest quality standards. The challenge was creating an impressive space within commercial budget constraints and tight timelines.",
      challenges: [
        "MINIMAL DISRUPTION",
        "TIMELINE ADHERENCE",
        "BUDGET MANAGEMENT",
        "SYSTEMS INTEGRATION",
        "PROFESSIONAL FINISH",
        "DURABILITY REQUIREMENTS"
      ]
    },
    fullImage: "/assets/images/project/project-page-2-image-2.jpg",
    relatedProjects: [
      {
        id: 5,
        title: "Boutique Hotel Park Lane",
        image: "/assets/images/project/project-page-1-image-5.jpg",
        slug: "boutique-hotel-park-lane"
      },
      {
        id: 12,
        title: "Grand Entrance Hall",
        image: "/assets/images/project/project-page-2-image-6.jpg",
        slug: "grand-entrance-hall"
      },
      {
        id: 1,
        title: "Luxury Modern Villa",
        image: "/assets/images/project/project-page-1-image-1.jpg",
        slug: "luxury-marble-kitchen"
      }
    ]
  },
  {
    id: 9,
    slug: "luxury-living-room",
    title: "Luxury Living Room",
    heroImage: "/assets/images/project/project-page-2-image-3.jpg",
    category: "Living Room",
    client: "Elite Residences",
    location: "Beverly Hills, USA",
    size: "600 sq ft",
    year: "2024",
    architect: "Luxury Living Design",
    overview: [
      "This elegant living space features a marble fireplace and flooring that create a sophisticated and welcoming atmosphere. The project showcases how marble can transform a living room into a luxurious retreat. Our team selected materials that complement the overall design while providing durability for daily living. The installation required precision to ensure perfect alignment and seamless transitions. Natural light enhances the beauty of the marble surfaces throughout the day. The result is a living room that is both impressive and comfortable.",
      "The completed living room has become the heart of the home, perfect for relaxation and entertaining. The marble surfaces are easy to maintain while providing timeless elegance. This project demonstrates our expertise in creating living spaces that combine luxury with livability."
    ],
    overviewChallenges: {
      description: "Creating a luxurious yet comfortable living space required balancing aesthetic appeal with practical considerations. We needed to install heavy marble features while protecting existing structures. The challenge was achieving a cohesive design that integrated the marble elements with other interior features.",
      challenges: [
        "FIREPLACE INSTALLATION",
        "STRUCTURAL SUPPORT",
        "DESIGN INTEGRATION",
        "HEAVY MATERIAL HANDLING",
        "FLOOR LEVELING",
        "AESTHETIC BALANCE"
      ]
    },
    fullImage: "/assets/images/project/project-page-2-image-3.jpg",
    relatedProjects: [
      {
        id: 1,
        title: "Luxury Modern Villa",
        image: "/assets/images/project/project-page-1-image-1.jpg",
        slug: "luxury-marble-kitchen"
      },
      {
        id: 4,
        title: "Elegant Dining Space",
        image: "/assets/images/project/project-page-1-image-4.jpg",
        slug: "elegant-dining-space"
      },
      {
        id: 10,
        title: "Modern Dining Hall",
        image: "/assets/images/project/project-page-2-image-4.jpg",
        slug: "modern-dining-hall"
      }
    ]
  },
  {
    id: 10,
    slug: "modern-dining-hall",
    title: "Modern Dining Hall",
    heroImage: "/assets/images/project/project-page-2-image-4.jpg",
    category: "Dining",
    client: "Contemporary Homes",
    location: "Seattle, USA",
    size: "500 sq ft",
    year: "2024",
    architect: "Modern Space Design",
    overview: [
      "This contemporary dining area features a marble table centerpiece that anchors the space with elegance and style. The project combines modern design principles with timeless marble beauty. Our team selected materials that create visual interest while providing practical benefits for dining. The installation required careful coordination with lighting and furniture to achieve the desired effect. Every detail was considered to create a harmonious dining environment. The result is a space that is perfect for both casual meals and formal entertaining.",
      "The completed dining hall has exceeded expectations, providing a beautiful and functional space for gathering. The marble table is both stunning and practical for daily use. This project showcases our ability to create dining spaces that are both modern and timeless."
    ],
    overviewChallenges: {
      description: "Installing a large marble dining table required careful planning for support and stability. We needed to ensure the table could accommodate daily use while maintaining its pristine appearance. The challenge was creating a modern aesthetic while ensuring the marble elements would stand the test of time.",
      challenges: [
        "TABLE SUPPORT STRUCTURE",
        "LARGE FORMAT MARBLE",
        "MODERN AESTHETIC",
        "LIGHTING COORDINATION",
        "SEATING INTEGRATION",
        "DURABILITY ASSURANCE"
      ]
    },
    fullImage: "/assets/images/project/project-page-2-image-4.jpg",
    relatedProjects: [
      {
        id: 4,
        title: "Elegant Dining Space",
        image: "/assets/images/project/project-page-1-image-4.jpg",
        slug: "elegant-dining-space"
      },
      {
        id: 9,
        title: "Luxury Living Room",
        image: "/assets/images/project/project-page-2-image-3.jpg",
        slug: "luxury-living-room"
      },
      {
        id: 3,
        title: "Contemporary Kitchen Island",
        image: "/assets/images/project/project-page-1-image-3.jpg",
        slug: "contemporary-kitchen-island"
      }
    ]
  },
  {
    id: 11,
    slug: "spa-bathroom-retreat",
    title: "Spa Bathroom Retreat",
    heroImage: "/assets/images/project/project-page-2-image-5.jpg",
    category: "Bathroom",
    client: "Wellness Homes",
    location: "Scottsdale, USA",
    size: "250 sq ft",
    year: "2024",
    architect: "Spa Design Specialists",
    overview: [
      "This serene bathroom features natural marble and modern fixtures that create a spa-like retreat at home. The project emphasizes relaxation and wellness through thoughtful material selection and design. Our team chose marble varieties that promote a calming atmosphere while providing durability. The installation incorporated advanced waterproofing techniques to ensure longevity. Every element was carefully positioned to maximize the sense of tranquility. The result is a bathroom that offers a daily escape from the stresses of modern life.",
      "The completed spa bathroom has transformed the daily routine into a luxurious experience. The marble surfaces are easy to maintain while continuing to provide a serene environment. This project demonstrates our expertise in creating wellness-focused spaces that prioritize both beauty and functionality."
    ],
    overviewChallenges: {
      description: "Creating a spa-like atmosphere required careful selection of marble varieties and finishes that promote relaxation. We needed to ensure all installations met the highest standards for moisture resistance. The challenge was balancing the serene aesthetic with the practical requirements of a functional bathroom.",
      challenges: [
        "SPA ATMOSPHERE CREATION",
        "MOISTURE MANAGEMENT",
        "NATURAL STONE SELECTION",
        "FIXTURE INTEGRATION",
        "AMBIENT LIGHTING",
        "WELLNESS FOCUS"
      ]
    },
    fullImage: "/assets/images/project/project-page-2-image-5.jpg",
    relatedProjects: [
      {
        id: 7,
        title: "Classic Marble Bathroom",
        image: "/assets/images/project/project-page-2-image-1.jpg",
        slug: "classic-marble-bathroom"
      },
      {
        id: 1,
        title: "Luxury Modern Villa",
        image: "/assets/images/project/project-page-1-image-1.jpg",
        slug: "luxury-marble-kitchen"
      },
      {
        id: 9,
        title: "Luxury Living Room",
        image: "/assets/images/project/project-page-2-image-3.jpg",
        slug: "luxury-living-room"
      }
    ]
  },
  {
    id: 12,
    slug: "grand-entrance-hall",
    title: "Grand Entrance Hall",
    heroImage: "/assets/images/project/project-page-2-image-6.jpg",
    category: "Interior",
    client: "Prestige Properties",
    location: "Dubai, UAE",
    size: "800 sq ft",
    year: "2024",
    architect: "Grand Design International",
    overview: [
      "This impressive entrance features marble flooring and an elegant staircase that creates a stunning first impression. The project showcases our ability to work on grand-scale installations with intricate details. Our team selected premium marble materials that convey luxury and sophistication. The installation required precise measurements and expert craftsmanship to achieve the dramatic effect. Every surface was finished to perfection with attention to detail. The result is an entrance hall that sets the tone for the entire property.",
      "The completed entrance hall has become a signature feature of the property, impressing all who visit. The marble installations are durable and maintain their beauty with minimal maintenance. This project demonstrates our capability to execute complex, high-end installations that exceed client expectations."
    ],
    overviewChallenges: {
      description: "Creating a grand entrance required managing large-scale marble installations with complex patterns and designs. We needed to ensure structural support for heavy materials while achieving the desired aesthetic. The challenge was coordinating multiple elements including flooring, stairs, and accent walls into a cohesive design.",
      challenges: [
        "LARGE SCALE INSTALLATION",
        "PATTERN COORDINATION",
        "STAIRCASE INTEGRATION",
        "STRUCTURAL SUPPORT",
        "DRAMATIC EFFECT",
        "PRECISION CRAFTSMANSHIP"
      ]
    },
    fullImage: "/assets/images/project/project-page-2-image-6.jpg",
    relatedProjects: [
      {
        id: 2,
        title: "Modern Spiral Staircase",
        image: "/assets/images/project/project-page-1-image-2.jpg",
        slug: "modern-spiral-staircase"
      },
      {
        id: 5,
        title: "Boutique Hotel Park Lane",
        image: "/assets/images/project/project-page-1-image-5.jpg",
        slug: "boutique-hotel-park-lane"
      },
      {
        id: 8,
        title: "Executive Office Space",
        image: "/assets/images/project/project-page-2-image-2.jpg",
        slug: "executive-office-space"
      }
    ]
  }
];

export const getProjectBySlug = (slug: string): ProjectDetail | undefined => {
  return projectDetails.find(project => project.slug === slug);
};
