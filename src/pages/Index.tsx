import { lazy, Suspense } from "react";
import HeroSection from "@/components/HeroSection";

const WisdomCards = lazy(() => import("@/components/WisdomCards"));
const ForWhoSection = lazy(() => import("@/components/ForWhoSection"));
const BookPartsCarousel = lazy(() => import("@/components/BookPartsCarousel"));
const BonusSection = lazy(() => import("@/components/BonusSection"));
const MacbookReveal = lazy(() => import("@/components/MacbookReveal"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const TestimonialsTicker = lazy(() => import("@/components/TestimonialsTicker"));
const GuaranteeSection = lazy(() => import("@/components/GuaranteeSection"));
const CosmicSection = lazy(() => import("@/components/CosmicSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const Footer = lazy(() => import("@/components/Footer"));

const LazySection = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div className="min-h-[200px]" />}>
    {children}
  </Suspense>
);

const Index = () => {
  return (
    <main className="bg-background">
      <HeroSection />
      <div className="h-32 bg-gradient-to-b from-black to-white" />
      <LazySection><ForWhoSection /></LazySection>
      <LazySection><WisdomCards /></LazySection>
      <LazySection><BookPartsCarousel /></LazySection>
      <LazySection><CosmicSection /></LazySection>
      <LazySection><BonusSection /></LazySection>
      <LazySection><MacbookReveal /></LazySection>
      <LazySection><PricingSection /></LazySection>
      <LazySection><TestimonialsTicker /></LazySection>
      <LazySection><GuaranteeSection /></LazySection>
      <LazySection><FAQSection /></LazySection>
      <LazySection><Footer /></LazySection>
    </main>
  );
};

export default Index;
