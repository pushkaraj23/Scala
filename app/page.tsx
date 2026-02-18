import { getGalleryImages } from "@/lib/gallery";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import CustomerDilemma from "@/components/sections/CustomerDilemma";
import SolutionSection from "@/components/sections/SolutionSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import DistributionFlow from "@/components/sections/DistributionFlow";
import IncentivesSection from "@/components/sections/IncentivesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import DeploymentSection from "@/components/sections/DeploymentSection";
import ContactSection from "@/components/sections/ContactSection";
import AboutUs from "@/components/sections/AboutUs";
import GalleryPage from "@/components/sections/GalleryPage";
import TestimonialSection from "@/components/sections/TestimonialSection";
import VideoSection from "@/components/sections/VideoSection";
import PricingSection from "@/components/sections/PricingSection";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import FAQSection from "@/components/sections/FAQSection";

export default function Home() {
  const galleryImages = getGalleryImages();

  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <VideoSection />
      <DistributionFlow />
      <IndustriesSection />
      <PricingSection />
      <IncentivesSection />
      <IntegrationsSection />
      <DeploymentSection />
      <TestimonialSection />
      <GalleryPage images={galleryImages} />
      <AboutUs />
      <FAQSection />
      <ContactSection />
    </>
  );
}
