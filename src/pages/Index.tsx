import HeroSection from "@/components/HeroSection";
import WisdomCards from "@/components/WisdomCards";
import GuaranteeSection from "@/components/GuaranteeSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsTicker from "@/components/TestimonialsTicker";
import ForWhoSection from "@/components/ForWhoSection";
import FAQSection from "@/components/FAQSection";
import BonusSection from "@/components/BonusSection";
import BookPartsCarousel from "@/components/BookPartsCarousel";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background">
      <HeroSection />
      <WisdomCards />
      <ForWhoSection />
      <BookPartsCarousel />
      <BonusSection />
      <PricingSection />
      <TestimonialsTicker />
      <GuaranteeSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
