
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import ProgramsSection from "@/components/home/ProgramsSection";
import StatsSection from "@/components/home/StatsSection";

const Home = () => {
  return (
    <PageLayout>
      <HeroSection />
      <IntroSection />
      <ProgramsSection />
      <TestimonialsCarousel />
      <StatsSection />
    </PageLayout>
  );
};

export default Home;
