import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import VideoSection from "@/components/home/VideoSection";
import ProcessSection from "@/components/home/ProcessSection";
import StonesSection from "@/components/home/StonesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import AwardsSection from "@/components/home/AwardsSection";
import BlogSection from "@/components/home/BlogSection";
import Newsletter from "@/components/shared/Newsletter";
import HomeContactSection from "@/components/home/HomeContactSection";
import ReadyToStart from "@/components/home/ReadyToStart";

export default function Index() {
  return (
    <Layout>
      <Helmet>
        <title>Marble & Tiles | Luxury Stone for Modern Design</title>
        <meta
          name="description"
          content="Transform your environment with our exquisite range of high-quality marble and tiles, crafted to perfection. 25+ years of experience in luxury stone."
        />
      </Helmet>
      <main className="overflow-hidden">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <VideoSection />
        <ProcessSection />
        <StonesSection />
        <ProjectsSection />
        <ReadyToStart />
        <TestimonialsSection />
        <AwardsSection />
        <HomeContactSection />
        <BlogSection />
        <Newsletter />
      </main>
    </Layout>
  );
}
