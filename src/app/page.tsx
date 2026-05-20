import NavBar from "@/components/layout/nav";
import SaleAnnouncement from "@/components/announcements/sale";
import HeroSection from "@/components/page/sections/hero/hero-section";
import TestimonialSlider from "@/components/carousels/testimonials";
import PressBanner from "@/components/banners/press/banner";
import DermatologistSection from "@/components/page/sections/experts-reviewed";
import ResultsCarousel from '@/components/carousels/results';
import TherapySection from "@/components/page/sections/accordions/results";
import RealResultsCarousel from "@/components/carousels/real-results";
import IngredientsCarousel from "@/components/carousels/ingredients";
import HairGrowthComparison from "@/components/page/sections/hair-growth-comparison";
import StatsSection from "@/components/page/sections/stats-section";
import UsageCarousel from "@/components/carousels/usage";
import LavviGrowthProtocol from "@/components/page/sections/growth-protocol";
import RealResultsVidCarousel from "@/components/carousels/vid-real-results";
import TrustPilotReviews from "@/components/carousels/trust-pilot-reviews";
import BestSellingProductsCarousel from "@/components/carousels/best-sellings";
import GrowthFaqSection from "@/components/page/sections/accordions/growth-faq";
import FaqSection from "@/components/page/sections/accordions/faq";

export default function Home() {
  return (
    <div className="bg-ghost-white">
      <SaleAnnouncement />
      <NavBar />
      <HeroSection />
      <TestimonialSlider />
      <GrowthFaqSection />
      <PressBanner />
      <ResultsCarousel />
      <TherapySection />
      <IngredientsCarousel />
      <UsageCarousel />
      <RealResultsCarousel />
      <LavviGrowthProtocol />
      <RealResultsVidCarousel />
      {/* <DermatologistSection /> */}
      <TrustPilotReviews />
      <StatsSection />
      <HairGrowthComparison />
      <BestSellingProductsCarousel />
      <FaqSection />
    </div>
  );
}
