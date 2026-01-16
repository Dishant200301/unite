import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Play } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionLabel from "@/components/shared/SectionLabel";
import Newsletter from "@/components/shared/Newsletter";
import { useState } from "react";
import VideoSection from "@/components/home/VideoSection";
import AwardsSection from "@/components/home/AwardsSection";
import AboutSection from "@/components/home/AboutSection";
import AboutProcessSection from "@/components/home/AboutProcessSection";
import AboutTestimonialsSection from "@/components/home/AboutTestimonialsSection";

const stats = [
  { number: "2+", label: "Projects Completed" },
  { number: "6+", label: "Satisfied Clients" },
  { number: "0+", label: "Years of Experience" },
];

const processSteps = [
  {
    number: "01",
    title: "Stone Block Processing",
    description: "Raw marble blocks are carefully inspected and processed.",
    image: "/assets/service-cutting.jpg",
  },
  {
    number: "02",
    title: "Resin Treatment",
    description: "Each stone undergoes specialized resin treatment.",
    image: "/assets/marble-warehouse.jpg",
  },
  {
    number: "03",
    title: "Stone Slab Finishing",
    description: "Expert craftsmen apply finishing techniques.",
    image: "/assets/service-flooring.jpg",
  },
  {
    number: "04",
    title: "Cut Slab To Size",
    description: "Precision cutting for seamless installation.",
    image: "/assets/service-cutting.jpg",
  },
];

const awards = [
  { category: "LUXURY STONE EXPO", title: "Best New Building In Germany", year: "2024" },
  { category: "ARCHITECTURAL DESIGN", title: "Best Architectural Firm", year: "2023" },
  { category: "SUSTAINABLE STONE", title: "Excellence In Sustainability", year: "2022" },
  { category: "INNOVATION AWARD", title: "Community Impact Award", year: "2021" },
  { category: "HERITAGE DESIGN", title: "Lifetime Achievement Award", year: "2020" },
  { category: "CRAFTSMANSHIP", title: "Grand Award Winner", year: "2019" },
];

const testimonials = [
  {
    name: "Alex Martin",
    content: "Extremely helpful team. Understood the requirements very well.",
    rating: 5,
  },
  {
    name: "Ryan Archer",
    content: "Outstanding quality and professional service throughout.",
    rating: 5,
  },
  {
    name: "Alina Blake",
    content: "The marble selection process was seamless and expert-guided.",
    rating: 5,
  },
];

export default function About() {
  const [hoveredAward, setHoveredAward] = useState<number | null>(null);

  return (
    <Layout>
      <Helmet>
        <title>About Us | Marble & Tiles</title>
        <meta name="description" content="Learn about Marble & Tiles - 25+ years of experience in luxury marble and natural stone solutions." />
      </Helmet>

      <PageHero
        title="About Us"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "About Us" },
        ]}
      />
      <main className="overflow-hidden">
        {/* About Section */}
        <AboutSection />
        <VideoSection />
        {/* Process Section */}
        <AboutProcessSection />
        {/* Awards Section */}
        <AwardsSection />
        {/* Testimonials Section */}
        <AboutTestimonialsSection />
        <Newsletter />
      </main>
    </Layout>
  );
}
