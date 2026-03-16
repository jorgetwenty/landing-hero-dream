import { FC, useEffect, useRef, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const bonusImages = [
  { src: "https://i.postimg.cc/FKGtZnGQ/Gemini-Generated-Image-3iwmvz3iwmvz3iwm.png", alt: "Bônus 1" },
  { src: "https://i.postimg.cc/C1K36H6N/Gemini-Generated-Image-6v6elg6v6elg6v6e.png", alt: "Bônus 2" },
  { src: "https://i.postimg.cc/wvBCbcb5/Gemini-Generated-Image-8r1p0p8r1p0p8r1p-(1).png", alt: "Bônus 3" },
  { src: "https://i.postimg.cc/RF0kbQbT/Gemini-Generated-Image-aqgzd7aqgzd7aqgz.png", alt: "Bônus 4" },
  { src: "https://i.postimg.cc/631ks2Dv/Gemini-Generated-Image-mlh6f7mlh6f7mlh6.png", alt: "Bônus 5" },
];

const BonusCarousel: FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const getSlideClass = (index: number) => {
    if (!emblaApi) return "bonus-slide-other";
    const total = bonusImages.length;
    const diff = ((index - selectedIndex) % total + total) % total;
    if (diff === 0) return "bonus-slide-active";
    if (diff === 1) return "bonus-slide-next";
    if (diff === total - 1) return "bonus-slide-prev";
    return "bonus-slide-other";
  };

  return (
    <div className="w-full max-w-5xl mx-auto relative z-10">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {bonusImages.map((img, i) => (
            <div
              key={i}
              className={`flex-shrink-0 basis-[60%] sm:basis-[45%] md:basis-[35%] px-3 transition-all duration-500 ${getSlideClass(i)}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {bonusImages.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              selectedIndex === i ? "bg-[#b026ff] w-6" : "bg-white/30"
            }`}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const MacbookReveal: FC = () => {
  const macbookRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const abreFechaMac = () => {
      const scope = macbookRef.current;
      if (!scope) return;
      const telamac = scope.querySelector('.tela img') as HTMLImageElement | null;
      const carrosseltela = scope.querySelector('.carrosseltela') as HTMLDivElement | null;
      if (!telamac || !carrosseltela) return;
      const alturaGatilho = window.innerHeight * 0.8;
      const topoTela = telamac.getBoundingClientRect();
      if (topoTela.top <= alturaGatilho) {
        telamac.classList.add('telaaberta');
        carrosseltela.classList.add('carrosseltelavisivel');
      } else {
        telamac.classList.remove('telaaberta');
        carrosseltela.classList.remove('carrosseltelavisivel');
      }
    };
    window.addEventListener('scroll', abreFechaMac, { passive: true });
    abreFechaMac();
    return () => window.removeEventListener('scroll', abreFechaMac);
  }, []);

  return (
    <section ref={macbookRef} className="macbook-section mt-10 w-full relative z-10">
      <div className="macbook-wrapper">
        <div className="carrosseltela">
          <img src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1000&auto=format&fit=crop" alt="Conteúdo da Tela" loading="lazy" />
        </div>
        <div className="tela">
          <img src="https://i.postimg.cc/brwPBW6q/Group-1-9.png" alt="Tela do MacBook" loading="lazy" />
        </div>
        <div className="base">
          <img src="https://i.postimg.cc/wvVHFgQm/inferior-macbook-1-1-2.png" alt="Base do MacBook" loading="lazy" />
        </div>
      </div>
      <style>{`
        .macbook-section { display:flex; justify-content:center; align-items:center; padding:2rem 0; }
        .macbook-wrapper { position:relative; width:100%; max-width:1000px; aspect-ratio:16/9; --macbook-group-top:50%; }
        .base,.tela,.carrosseltela { position:absolute; top:var(--macbook-group-top); left:50%; transform:translateX(-50%) translateY(-50%); pointer-events:none; transition:all 0.7s ease; }
        .base { z-index:3; width:80%; margin-top:10%; }
        .tela { z-index:2; width:72%; margin-top:-12%; }
        .carrosseltela { z-index:1; width:55%; margin-top:-15.5%; opacity:0; filter:blur(10px); }
        .base img,.tela img,.carrosseltela img { width:100%; display:block; }
        .tela img { transform:perspective(2800px) translateX(0%) translateY(-5%) rotateX(-90deg) translateZ(0); transform-origin:center bottom; transition:all 0.7s ease; }
        .tela img.telaaberta { transform:perspective(2800px) translateX(0%) translateY(0%) rotateX(0deg) translateZ(0); }
        .carrosseltela.carrosseltelavisivel { opacity:1; filter:blur(0px); }
        .carrosseltela img { border-radius:8px 8px 0 0; }
        @media(max-width:1024px){ .base{width:90%} .tela{width:82%;margin-top:-14%} .carrosseltela{width:62.5%;margin-top:-17.5%} }
        @media(max-width:768px){ .base{width:100%} .tela{width:90%;margin-top:-15%} .carrosseltela{width:68.5%;margin-top:-18.5%} }
      `}</style>
    </section>
  );
};

const BonusSection = () => {
  return (
    <section className="bg-black text-foreground py-20 px-4 md:px-8 flex flex-col items-center overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
          <span className="text-[#b026ff]">Bônus</span> Exclusivos
        </h2>
      </div>

      {/* Carousel */}
      <BonusCarousel />

      {/* MacBook Animation */}
      <MacbookReveal />

      <style>{`
        .bonus-slide-active { filter:blur(0); transform:scale(1); }
        .bonus-slide-prev { filter:blur(10px); transform:scale(0.5); }
        .bonus-slide-next { filter:blur(3px); transform:scale(0.7); }
        .bonus-slide-other { filter:blur(3px); transform:scale(0.7); }
      `}</style>
    </section>
  );
};

export default BonusSection;
