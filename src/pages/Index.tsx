import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TrustBar from "@/components/TrustBar";
import GuaranteeSection from "@/components/GuaranteeSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TrustBar />
      <PortfolioSection />
      <GuaranteeSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
