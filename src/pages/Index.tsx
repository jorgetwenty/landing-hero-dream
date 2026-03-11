import HeroSection from "@/components/HeroSection";
import WisdomCards from "@/components/WisdomCards";
import GuaranteeSection from "@/components/GuaranteeSection";
import TestimonialsTicker from "@/components/TestimonialsTicker";
import ForWhoSection from "@/components/ForWhoSection";
import FAQSection from "@/components/FAQSection";
import GridSection from "@/components/GridSection";
import BonusSection from "@/components/BonusSection";

const Index = () => {
  return (
    <main className="bg-background">
      <HeroSection />
      <WisdomCards />
      <GuaranteeSection />
      <TestimonialsTicker />
      <ForWhoSection />
      <GridSection />
      <BonusSection />
      <FAQSection />
    </main>
  );
};

export default Index;
