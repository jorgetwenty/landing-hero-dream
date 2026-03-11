import HeroSection from "@/components/HeroSection";
import WisdomCards from "@/components/WisdomCards";
import GuaranteeSection from "@/components/GuaranteeSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsTicker from "@/components/TestimonialsTicker";
import ForWhoSection from "@/components/ForWhoSection";
import FAQSection from "@/components/FAQSection";
import BonusSection from "@/components/BonusSection";

const Index = () => {
  return (
    <main className="bg-background">
      <HeroSection />
      <WisdomCards />
      <TestimonialsTicker />
      <ForWhoSection />
      <BonusSection />
      <FAQSection />
      <PricingSection />
      <GuaranteeSection />
    </main>
  );
};

export default Index;
