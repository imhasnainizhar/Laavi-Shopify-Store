import NavBar from "@/components/layout/nav";
import SaleAnnouncement from "@/components/announcements/sale";
import HeroSection from "@/components/page/sections/hero/hero-section";
import TestimonialSlider from "@/components/ui/carousels/testimonials";
import Faq from "@/components/page/sections/faq";
import PressBanner from "@/components/banners/press/banner";

export default function Home() {
  return (
    <div className="bg-ghost-white">
      <SaleAnnouncement />
      <NavBar />
      <HeroSection />
      <TestimonialSlider />
      <Faq />
      <PressBanner />
    </div>
  );
}
