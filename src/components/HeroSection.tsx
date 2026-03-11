import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero-video.webm"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.55)]" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-6 max-w-4xl font-hero text-5xl font-bold leading-tight tracking-tight text-[hsl(var(--hero-text))] sm:text-6xl md:text-7xl lg:text-8xl">
          Crie Algo <span className="text-primary">Extraordinário</span>
        </h1>
        <p className="mb-10 max-w-2xl text-lg text-[hsl(var(--hero-subtitle))] sm:text-xl md:text-2xl">
          Transforme suas ideias em experiências digitais que inspiram e conectam.
        </p>
        <div className="flex gap-4">
          <Button size="lg" className="rounded-full px-8 text-lg font-semibold">
            Começar Agora
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-[hsl(var(--hero-text)/0.3)] px-8 text-lg text-[hsl(var(--hero-text))] hover:bg-[hsl(var(--hero-text)/0.1)]"
          >
            Saiba Mais
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-[hsl(var(--hero-subtitle))]" />
      </div>
    </section>
  );
};

export default HeroSection;
