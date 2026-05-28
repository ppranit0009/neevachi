import { HeroSection } from "@/components/HeroSection";
import { HeroServicesSection } from "@/components/HeroServicesSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CTASection } from "@/components/CTASection";
import { TrustSection } from "@/components/TrustSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <HeroServicesSection />
        <IndustriesSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TrustSection />
        <ProjectsSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
