export interface ServiceDetail {
  slug: string;
  title: string;
  heroImage: string;
  description: string;
  description2?: string;
  sections: {
    timelessElegance: {
      image: string;
      title: string;
      description: string;
      bottomDescription?: string;
      features: string[];
    };
    lastingStrength: {
      image: string;
      title: string;
      description: string;
      bottomDescription?: string;
      features: string[];
    };
    expertGuidance: {
      title: string;
      description: string;
    };
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "trade-stone-application",
    title: "Trade Stone Application",
    heroImage: "/assets/images/service/service-1.png",
    description: "Commercial Stone Services specialize in the supply, installation, and maintenance of natural and engineered stone surfaces for commercial spaces. These services cater to businesses, offices, hotels, retail spaces, restaurants, and public facilities, providing both aesthetic and functional stone solutions.",
    description2: "Renowned for their durability and natural beauty, marble tiles are perfect for living rooms, bathrooms, kitchens, and feature walls. Available in polished or honed finishes, they can create either a high-gloss, refined surface or a soft, matte appearance.",
    sections: {
      timelessElegance: {
        image: "/assets/images/service/service-1.png",
        title: "Timeless Elegance",
        description: "Discover a curated collection of premium marble and tiles that blend natural beauty with modern durability. From luxurious marble surfaces that elevate every space to versatile tiles designed for style and practicality, we provide solutions that suit both classic and contemporary interiors.",
        bottomDescription: "Transform your spaces into masterpieces with Marble & Tiles – where design meets perfection.",
        features: [
          "Wide variety of colors, textures, and finishes",
          "High-quality materials sourced with care",
          "Perfect balance of aesthetics and functionality",
          "Ideal for flooring, walls, kitchens, bathrooms, and beyond"
        ]
      },
      lastingStrength: {
        image: "/assets/images/service/service-1.png",
        title: "Lasting Strength",
        description: "Marble is one of the most timeless and versatile natural stones, widely used in architecture, interior design, and construction. Its unique veining, luxurious appearance, and durability make it a preferred choice for both residential and commercial projects.",
        bottomDescription: "With its timeless appeal, marble remains a symbol of quality and sophistication, making it an essential material in stone trade and applications worldwide.",
        features: [
          "Carefully selected and crafted.",
          "Perfect for floors, walls, and countertops.",
          "Adds property value and prestige",
          "Suitable for both modern and traditional designs"
        ]
      },
      expertGuidance: {
        title: "Expert Guidance",
        description: "Consider how the surface will be used daily. For example, a busy kitchen may benefit from low-maintenance granite, while a feature wall can showcase the dramatic veining of marble. Natural stone is an investment in beauty and longevity. Consulting with design experts or stone suppliers can help match the right material to your vision and practical needs."
      }
    },
    faqs: [
      {
        question: "Do You Recommend Ordering Extra Stone For Projects?",
        answer: "Our interior design services cover everything you need to create a stunning and functional space. From initial concept development and space planning to selecting color schemes, furniture, and custom designs, we bring your vision to life."
      },
      {
        question: "How Do I Order A Product Which Is Out Of Stock?",
        answer: "If a product is out of stock, you can place a backorder directly through our website or contact our support team. We generally restock within 2-3 weeks and will keep you updated on the estimated delivery timeline for your specific order."
      },
      {
        question: "What's The Difference Between Porcelain And Stone?",
        answer: "Natural stone is quarried from the earth, offering unique veining and textures that cannot be replicated. Porcelain is a manufactured material known for its durability and low maintenance, but it lacks the organic, one-of-a-kind variation found in genuine marble or granite."
      },
      {
        question: "My Shipment Included Damaged Stone. What Can I Do?",
        answer: "We take great care in packaging, but damage can occasionally occur during transit. If you receive damaged tiles, please document the damage with photos and contact our customer service team within 48 hours. We will promptly arrange for a replacement or refund."
      }
    ]
  },
  {
    slug: "natural-stone-selection",
    title: "Natural Stone Selection",
    heroImage: "/assets/images/service/service-2.png",
    description: "Natural stone is a timeless choice that brings beauty, strength, and elegance to any space. Our expert team helps you select the perfect stone for your project, ensuring quality and aesthetic appeal.",
    description2: "Renowned for their durability and natural beauty, marble tiles are perfect for living rooms, bathrooms, kitchens, and feature walls. Available in polished or honed finishes, they can create either a high-gloss, refined surface or a soft, matte appearance.",
    sections: {
      timelessElegance: {
        image: "/assets/images/service/service-2.png",
        title: "Timeless Elegance",
        description: "Explore our extensive collection of natural stones sourced from the finest quarries worldwide. Each slab is unique, offering a distinct pattern and color palette that adds character and exclusivity to your project.",
        bottomDescription: "Transform your spaces into masterpieces with Marble & Tiles – where design meets perfection.",
        features: [
          "Granite, marble, limestone, and travertine options",
          "Unique patterns and natural variations",
          "Durable and long-lasting materials",
          "Expert guidance on stone selection"
        ]
      },
      lastingStrength: {
        image: "/assets/images/service/service-2.png",
        title: "Lasting Strength",
        description: "Every stone is carefully inspected and selected to meet our high standards of quality and beauty. We ensure that our materials not only look stunning but also stand the test of time in any application.",
        bottomDescription: "With its timeless appeal, marble remains a symbol of quality and sophistication, making it an essential material in stone trade and applications worldwide.",
        features: [
          "Rigorous quality control processes",
          "Certified stone suppliers",
          "Sustainable sourcing practices",
          "Comprehensive warranty coverage"
        ]
      },
      expertGuidance: {
        title: "Expert Guidance",
        description: "Our stone experts provide personalized guidance to help you choose the right material for your specific needs, considering factors like durability, maintenance, and aesthetic preferences. We help you navigate the vast selection to find the perfect match for your vision."
      }
    },
    faqs: [
      {
        question: "How do I choose the right natural stone?",
        answer: "Consider the location, usage, maintenance requirements, and aesthetic preferences. High-traffic areas may require harder stones like granite, while marble serves beautifully in bathrooms and focal points. Our experts can guide you through the selection process."
      },
      {
        question: "What's the difference between marble and granite?",
        answer: "Marble is generally softer and has a more elegant, veiled appearance, making it ideal for bathrooms and fireplaces. Granite is harder, more resistant to heat and scratches, and is often preferred for kitchen countertops and high-traffic areas."
      },
      {
        question: "Do you offer stone samples?",
        answer: "Yes, we provide samples so you can see and feel the stone before making your final decision. Viewing samples in your own space helps you understand how the light affects the color and texture throughout the day."
      },
      {
        question: "How should I maintain natural stone?",
        answer: "Regular cleaning with pH-neutral cleaners and periodic sealing will keep your natural stone looking beautiful for years. Avoid harsh chemicals or acidic cleaners, as they can damage the surface and sealant over time."
      }
    ]
  },
  {
    slug: "custom-cutting-finishing",
    title: "Custom Cutting & Finishing",
    heroImage: "/assets/images/service/service-3.png",
    description: "From clean cuts to smooth edges and flawless finishes, our team delivers results that enhance both aesthetics and function. We use state-of-the-art equipment for precision cutting and finishing.",
    description2: "Renowned for their durability and natural beauty, marble tiles are perfect for living rooms, bathrooms, kitchens, and feature walls. Available in polished or honed finishes, they can create either a high-gloss, refined surface or a soft, matte appearance.",
    sections: {
      timelessElegance: {
        image: "/assets/images/service/service-3.png",
        title: "Timeless Elegance",
        description: "Advanced cutting technology ensures perfect dimensions and clean edges for every project. Our computer-guided systems allow for intricate designs and tight tolerances that manual methods simply cannot achieve.",
        bottomDescription: "Transform your spaces into masterpieces with Marble & Tiles – where design meets perfection.",
        features: [
          "CNC cutting for complex shapes",
          "Waterjet cutting technology",
          "Precise measurements and templates",
          "Custom edge profiles available"
        ]
      },
      lastingStrength: {
        image: "/assets/images/service/service-3.png",
        title: "Lasting Strength",
        description: "Professional finishing techniques bring out the natural beauty of stone while ensuring durability. Whether you prefer a mirror-like polish or a textured leather finish, our artisans deliver consistent, high-quality results.",
        bottomDescription: "With its timeless appeal, marble remains a symbol of quality and sophistication, making it an essential material in stone trade and applications worldwide.",
        features: [
          "Polished, honed, and brushed finishes",
          "Custom edge treatments",
          "Sealing and protection",
          "Quality inspection at every stage"
        ]
      },
      expertGuidance: {
        title: "Expert Guidance",
        description: "Whether you need countertops, flooring, or custom stone features, our fabrication team works closely with you to achieve the perfect result. We consider all technical aspects to ensure successful installation and long-term performance."
      }
    },
    faqs: [
      {
        question: "What edge profiles do you offer?",
        answer: "We offer a variety of edge profiles including bullnose, beveled, ogee, and custom designs. The right edge profile can enhance the style of your countertop and complement your overall design theme."
      },
      {
        question: "How long does custom fabrication take?",
        answer: "Typically 1-2 weeks depending on the complexity of the project and current workload. We strive to meet your project timeline while maintaining our rigorous quality standards for every piece."
      },
      {
        question: "Can you match existing stone?",
        answer: "Yes, we can work with samples to match existing stone as closely as possible. While natural variations exist, we use our extensive network to find the best possible match for your restoration or addition."
      },
      {
        question: "Do you provide installation services?",
        answer: "Yes, we offer professional installation services to ensure perfect results. Our experienced installers handle your custom-cut stone with care, ensuring a flawless fit and finish in your home or business."
      }
    ]
  },
  {
    slug: "industrial-marble-flooring",
    title: "Industrial Marble Flooring",
    heroImage: "/assets/images/service/service-4.png",
    description: "Industrial marble flooring combines strength, durability, and timeless elegance, making it a premium choice for commercial and high-traffic areas.",
    description2: "Renowned for their durability and natural beauty, marble tiles are perfect for living rooms, bathrooms, kitchens, and feature walls. Available in polished or honed finishes, they can create either a high-gloss, refined surface or a soft, matte appearance.",
    sections: {
      timelessElegance: {
        image: "/assets/images/service/service-4.png",
        title: "Timeless Elegance",
        description: "Heavy-duty marble flooring designed to withstand high traffic while maintaining its beauty. We select materials that offer superior density and wear resistance, ideal for lobbies, malls, and public buildings.",
        bottomDescription: "Transform your spaces into masterpieces with Marble & Tiles – where design meets perfection.",
        features: [
          "High-traffic rated materials",
          "Slip-resistant finishes available",
          "Large format tiles for fewer seams",
          "Easy to clean and maintain"
        ]
      },
      lastingStrength: {
        image: "/assets/images/service/service-4.png",
        title: "Lasting Strength",
        description: "Expert installation ensures long-lasting performance and stunning visual impact. Our teams follow strict industry standards for substrate preparation and mortar application to prevent failures.",
        bottomDescription: "With its timeless appeal, marble remains a symbol of quality and sophistication, making it an essential material in stone trade and applications worldwide.",
        features: [
          "Experienced installation teams",
          "Proper substrate preparation",
          "Precision leveling and alignment",
          "Minimal downtime for businesses"
        ]
      },
      expertGuidance: {
        title: "Expert Guidance",
        description: "We coordinate all aspects of your flooring project, from material selection to final installation, ensuring a smooth process and exceptional results. Our project managers keep you informed and ensure deadlines and budgets are met."
      }
    },
    faqs: [
      {
        question: "Is marble suitable for high-traffic areas?",
        answer: "Yes, with proper selection and finishing, marble can perform excellently in commercial settings. We recommend honed finishes and harder marble varieties to minimize wear patterns and maintenance in busy areas."
      },
      {
        question: "How do you minimize business disruption?",
        answer: "We work flexible hours and plan installations in phases to minimize impact on your operations. Our team creates a detailed schedule to ensure your business continues to function smoothly during the project."
      },
      {
        question: "What maintenance is required?",
        answer: "Regular cleaning and periodic resealing will keep your marble floors looking pristine. We provide a comprehensive maintenance guide and can recommend professional services for large-scale commercial floor care."
      },
      {
        question: "Can damaged marble be repaired?",
        answer: "Yes, we offer repair and restoration services for damaged marble flooring. From crack repair to diamond polishing, we can restore your floor's shine and structural integrity."
      }
    ]
  },
  {
    slug: "laminate-tiles-flooring",
    title: "Laminate Tiles Smart Flooring",
    heroImage: "/assets/images/service/service-5.png",
    description: "Designed to mimic the natural beauty of wood and stone, these tiles bring a modern aesthetic while delivering durability and easy maintenance.",
    description2: "Renowned for their durability and natural beauty, marble tiles are perfect for living rooms, bathrooms, kitchens, and feature walls. Available in polished or honed finishes, they can create either a high-gloss, refined surface or a soft, matte appearance.",
    sections: {
      timelessElegance: {
        image: "/assets/images/service/service-5.png",
        title: "Timeless Elegance",
        description: "Realistic wood and stone looks with the practical benefits of laminate technology. High-quality photographic layers ensure natural grains and textures are replicated with stunning accuracy.",
        bottomDescription: "Transform your spaces into masterpieces with Marble & Tiles – where design meets perfection.",
        features: [
          "Wide range of styles and colors",
          "Scratch and stain resistant",
          "Water-resistant options available",
          "Easy DIY installation"
        ]
      },
      lastingStrength: {
        image: "/assets/images/service/service-5.png",
        title: "Lasting Strength",
        description: "Advanced manufacturing creates durable, beautiful flooring that stands up to daily life. Multi-layer construction provides stability, impact resistance, and long-term performance even in busy households.",
        bottomDescription: "With its timeless appeal, marble remains a symbol of quality and sophistication, making it an essential material in stone trade and applications worldwide.",
        features: [
          "AC rating for durability",
          "Click-lock installation system",
          "Underlayment for sound reduction",
          "Fade-resistant surface"
        ]
      },
      expertGuidance: {
        title: "Expert Guidance",
        description: "Laminate flooring is ideal for living rooms, bedrooms, kitchens, and commercial spaces where you want the look of natural materials with easier maintenance. We help you choose the right AC rating and style for your specific application."
      }
    },
    faqs: [
      {
        question: "How does laminate compare to real wood?",
        answer: "Laminate is more affordable, easier to maintain, and more resistant to scratches and moisture than real wood. While it mimics the look, it offers superior durability for active households with pets or children."
      },
      {
        question: "Can I install laminate myself?",
        answer: "Yes, our click-lock system makes DIY installation straightforward with basic tools. The floating floor method requires no glue or nails, allowing for a quick and clean installation process."
      },
      {
        question: "Is laminate suitable for kitchens?",
        answer: "Yes, especially water-resistant varieties designed for high-moisture areas. Modern laminate technology has improved spill resistance, making it a viable and stylish option for kitchen floors."
      },
      {
        question: "How long does laminate flooring last?",
        answer: "With proper care, quality laminate can last 15-25 years or more. Following manufacturer maintenance guidelines and using appropriate cleaning products will ensure your floor preserves its beauty for decades."
      }
    ]
  },
  {
    slug: "stone-outdoor-paving",
    title: "Stone Outdoor & Paving",
    heroImage: "/assets/images/service/service-6.png",
    description: "We specialize in creating timeless outdoor spaces with premium stonework and paving solutions that enhance your property's beauty and value.",
    description2: "Renowned for their durability and natural beauty, marble tiles are perfect for living rooms, bathrooms, kitchens, and feature walls. Available in polished or honed finishes, they can create either a high-gloss, refined surface or a soft, matte appearance.",
    sections: {
      timelessElegance: {
        image: "/assets/images/service/service-6.png",
        title: "Timeless Elegance",
        description: "Transform your outdoor spaces with durable, beautiful stone paving and features. Create inviting patios and walkways that seamlessly connect your home to nature with our premium stone selections.",
        bottomDescription: "Transform your spaces into masterpieces with Marble & Tiles – where design meets perfection.",
        features: [
          "Patios, walkways, and driveways",
          "Pool decks and outdoor kitchens",
          "Weather-resistant materials",
          "Custom patterns and designs"
        ]
      },
      lastingStrength: {
        image: "/assets/images/service/service-6.png",
        title: "Lasting Strength",
        description: "Proper installation techniques ensure your outdoor stonework withstands the elements for decades. We prioritize foundational integrity and drainage to prevent settling, heaving, or water damage.",
        bottomDescription: "With its timeless appeal, marble remains a symbol of quality and sophistication, making it an essential material in stone trade and applications worldwide.",
        features: [
          "Proper drainage planning",
          "Frost-resistant materials",
          "Stable base preparation",
          "Professional sealing"
        ]
      },
      expertGuidance: {
        title: "Expert Guidance",
        description: "Our design team works with your landscape to create cohesive outdoor living spaces that blend natural stone with your existing architecture and plantings. We consider sun exposure, climate, and usage to recommend the best materials."
      }
    },
    faqs: [
      {
        question: "What stone is best for outdoor use?",
        answer: "Granite, bluestone, and certain sandstones are excellent for outdoor applications due to their durability. These stones resist weathering, fading, and freeze-thaw cycles better than softer alternatives."
      },
      {
        question: "How do you prevent weed growth?",
        answer: "Proper base preparation and polymeric sand in joints help prevent weed growth. This advanced jointing sand hardens upon wetting, creating a durable barrier against weeds and insects while remaining flexible."
      },
      {
        question: "Can stone paving handle freeze-thaw cycles?",
        answer: "Yes, when properly installed with appropriate materials and drainage, stone paving is highly resilient. We ensure sufficient depth and flexible joints to accommodate thermal expansion and contraction."
      },
      {
        question: "How do you maintain outdoor stone?",
        answer: "Regular cleaning and periodic resealing protect outdoor stone from stains and weathering. Sweeping debris and washing with mild detergents keeps surfaces safe and attractive season after season."
      }
    ]
  },
  {
    slug: "stone-maintenance-restoration",
    title: "Stone Maintenance & Restoration",
    heroImage: "/assets/images/service/service-7.png",
    description: "From premium stone installation to restoration and maintenance, our team delivers unmatched quality to keep your stone surfaces looking beautiful.",
    description2: "Renowned for their durability and natural beauty, marble tiles are perfect for living rooms, bathrooms, kitchens, and feature walls. Available in polished or honed finishes, they can create either a high-gloss, refined surface or a soft, matte appearance.",
    sections: {
      timelessElegance: {
        image: "/assets/images/service/service-7.png",
        title: "Timeless Elegance",
        description: "Expert maintenance services to preserve the beauty and integrity of your stone surfaces. We use specialized equipment and pH-balanced products to clean without damaging the stone's delicate surface.",
        bottomDescription: "Transform your spaces into masterpieces with Marble & Tiles – where design meets perfection.",
        features: [
          "Deep cleaning and stain removal",
          "Polishing and refinishing",
          "Crack and chip repair",
          "Sealing and protection"
        ]
      },
      lastingStrength: {
        image: "/assets/images/service/service-7.png",
        title: "Lasting Strength",
        description: "Bring old, damaged, or dull stone back to its original glory with our restoration expertise. We can remove scratches, etching, and wear patterns, restoring the natural luster and value of your investment.",
        bottomDescription: "With its timeless appeal, marble remains a symbol of quality and sophistication, making it an essential material in stone trade and applications worldwide.",
        features: [
          "Lippage removal and leveling",
          "Color enhancement",
          "Grout cleaning and repair",
          "Historic stone restoration"
        ]
      },
      expertGuidance: {
        title: "Expert Guidance",
        description: "Regular maintenance programs help protect your investment and extend the life of your stone surfaces, preventing costly repairs down the road. We can create a custom schedule based on your specific stone type and usage levels."
      }
    },
    faqs: [
      {
        question: "How often should stone be sealed?",
        answer: "Most stone should be resealed every 1-3 years depending on use and traffic. Porous stones like limestone may need more frequent application, while dense granites can last longer between treatments."
      },
      {
        question: "Can you remove etching from marble?",
        answer: "Yes, we can polish out etching and restore the surface to its original finish. Etching is caused by acidic substances eating into the calcium carbonate, but professional honing and polishing can eliminate these dull spots."
      },
      {
        question: "Do you offer maintenance contracts?",
        answer: "Yes, we provide scheduled maintenance programs for commercial and residential clients. These programs ensure your stone is consistently cared for, reducing long-term restoration costs and maintaining a pristine appearance."
      },
      {
        question: "Can all stone damage be repaired?",
        answer: "Most damage can be repaired or significantly improved. We assess each situation individually. Cracks, chips, and stains often have specialized repair methods that can make them virtually invisible."
      }
    ]
  },
  {
    slug: "consultation-design-support",
    title: "Consultation & Design Support",
    heroImage: "/assets/images/service/service-8.png",
    description: "With years of expertise and the finest materials, we turn natural stone into timeless design. Our consultation services ensure your project achieves the perfect balance of beauty and functionality.",
    description2: "Renowned for their durability and natural beauty, marble tiles are perfect for living rooms, bathrooms, kitchens, and feature walls. Available in polished or honed finishes, they can create either a high-gloss, refined surface or a soft, matte appearance.",
    sections: {
      timelessElegance: {
        image: "/assets/images/service/service-8.png",
        title: "Timeless Elegance",
        description: "Professional design consultation to help you make the best choices for your project. We leverage deep industry knowledge to recommend stones that not only fit your aesthetic but also perform well in your specific environment.",
        bottomDescription: "Transform your spaces into masterpieces with Marble & Tiles – where design meets perfection.",
        features: [
          "Material selection guidance",
          "Color and pattern coordination",
          "Budget planning assistance",
          "3D visualization available"
        ]
      },
      lastingStrength: {
        image: "/assets/images/service/service-8.png",
        title: "Lasting Strength",
        description: "Comprehensive planning ensures your project runs smoothly from concept to completion. We anticipate potential challenges and provide solutions proactively, minimizing delays and cost overruns.",
        bottomDescription: "With its timeless appeal, marble remains a symbol of quality and sophistication, making it an essential material in stone trade and applications worldwide.",
        features: [
          "Timeline development",
          "Contractor coordination",
          "Technical specifications",
          "Quality control oversight"
        ]
      },
      expertGuidance: {
        title: "Expert Guidance",
        description: "Every project is unique. Our designers work closely with you to understand your vision and translate it into reality with the perfect stone selections and installation approach. We are your partners in creating exceptional spaces."
      }
    },
    faqs: [
      {
        question: "Is there a consultation fee?",
        answer: "Initial consultations are complimentary. Detailed design services may have associated fees. We believe in providing value upfront, allowing you to understand our capabilities and how we can support your vision."
      },
      {
        question: "Can you work with my architect or designer?",
        answer: "Absolutely! We collaborate with design professionals to ensure seamless project execution. Our technical expertise complements their design vision, ensuring the selected materials are specified and installed correctly."
      },
      {
        question: "Do you provide samples for review?",
        answer: "Yes, we can provide samples and create sample boards for your review. seeing physical samples is crucial for making informed decisions about color, texture, and finish."
      },
      {
        question: "How long does the design process take?",
        answer: "Typically 1-2 weeks for initial concepts, with refinements as needed. We work at your pace to ensure every detail is perfect before moving to the implementation phase."
      }
    ]
  }
];
