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
import AboutPage from "@/components/sections/AboutUs";
import AboutUs from "@/components/sections/AboutUs";
import GalleryPage from "@/components/sections/GalleryPage";
import TestimonialSection from "@/components/sections/TestimonialSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <CustomerDilemma />
      <SolutionSection />
      <FeaturesSection />
      <DistributionFlow />
      <IncentivesSection />
      <IndustriesSection />
      <DeploymentSection />
      <GalleryPage/>
      <AboutUs />
      <TestimonialSection/>
      <ContactSection />
    </>
  );
}
