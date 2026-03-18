import { lazy, Suspense, useState, useCallback } from "react";
import HeroSection from "@/components/HeroSection";
import Preloader from "@/components/Preloader";

const WisdomCards = lazy(() => import("@/components/WisdomCards"));
const ForWhoSection = lazy(() => import("@/components/ForWhoSection"));
const BookPartsCarousel = lazy(() => import("@/components/BookPartsCarousel"));
const BonusSection = lazy(() => import("@/components/BonusSection"));
const MacbookReveal = lazy(() => import("@/components/MacbookReveal"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const TestimonialsTicker = lazy(() => import("@/components/TestimonialsTicker"));
const GuaranteeSection = lazy(() => import("@/components/GuaranteeSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const Footer = lazy(() => import("@/components/Footer"));

const LazySection = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div className="min-h-[200px]" />}>
    {children}
  </Suspense>
);

const Index = () => {
  const [loading, setLoading] = useState(true);
  const handleComplete = useCallback(() => setLoading(false), []);

  return (
    <main className="bg-background">
      {loading && <Preloader onComplete={handleComplete} />}
      <HeroSection />
      <LazySection><WisdomCards /></LazySection>
      <LazySection><ForWhoSection /></LazySection>
      <LazySection><BookPartsCarousel /></LazySection>
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
