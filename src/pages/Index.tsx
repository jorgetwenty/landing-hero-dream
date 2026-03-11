import HeroSection from "@/components/HeroSection";
import WisdomCards from "@/components/WisdomCards";
import GuaranteeSection from "@/components/GuaranteeSection";
import TestimonialsTicker from "@/components/TestimonialsTicker";
import ForWhoSection from "@/components/ForWhoSection";

const Index = () => {
  return (
    <main className="bg-background">
      <HeroSection />
      <WisdomCards />
      <GuaranteeSection />
      <TestimonialsTicker />
      <ForWhoSection />
    </main>
  );
};

export default Index;
