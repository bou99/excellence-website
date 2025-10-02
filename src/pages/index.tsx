import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ParcoursSection from "@/components/ParcoursSection";
import ResearchSection from "@/components/ResearchSection";
import EventsSection from "@/components/EventsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ParcoursSection />
      <ResearchSection />
      <EventsSection />
      {/* <TestimonialsSection /> */}
      <PartnersSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
