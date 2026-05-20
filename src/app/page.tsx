import NavBar from "@/components/layout/nav";
import SaleAnnouncement from "@/components/announcements/sale";
import HeroSection from "@/components/page/sections/hero/hero-section";
import TestimonialSlider from "@/components/carousels/testimonials";
import Faq from "@/components/page/sections/accordions/faq";
import PressBanner from "@/components/banners/press/banner";
import DermatologistSection from "@/components/page/sections/experts-reviewed";
import ResultsCarousel from '@/components/carousels/results';
import TherapySection from "@/components/page/sections/accordions/results";
import RealResultsCarousel from "@/components/carousels/real-results";
import IngredientsCarousel from "@/components/carousels/ingredients";
import HairGrowthComparison from "@/components/page/sections/hair-growth-comparison";
import StatsSection from "@/components/page/sections/stats-section";
import UsageCarousel from "@/components/carousels/usage";

export default function Home() {
  return (
    <div className="bg-ghost-white">
      <SaleAnnouncement />
      <NavBar />
      <HeroSection />
      <TestimonialSlider />
      <Faq />
      <PressBanner />
      <ResultsCarousel />
      <TherapySection />
      <IngredientsCarousel />
      <UsageCarousel />
      <RealResultsCarousel />
      <HairGrowthComparison />
      {/* <DermatologistSection /> */}
      <StatsSection />

    </div>
  );
}
