import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import RoomsSection from "@/components/sections/RoomsSection";
import ActivitiesSection from "@/components/sections/ActivitiesSection";
import RestaurantSection from "@/components/sections/RestaurantSection";
import PackagesSection from "@/components/sections/PackagesSection";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <RoomsSection />
      <ActivitiesSection />
      <RestaurantSection />
      <PackagesSection />
      <GallerySection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
