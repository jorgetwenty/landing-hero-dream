import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/images/livro-parte-1.webp", alt: "Parte do Livro 1" },
  { src: "/images/livro-parte-2.webp", alt: "Parte do Livro 2" },
  { src: "/images/livro-parte-3.webp", alt: "Parte do Livro 3" },
  { src: "/images/livro-parte-4.webp", alt: "Parte do Livro 4" },
  { src: "/images/livro-parte-5.webp", alt: "Parte do Livro 5" },
  { src: "/images/livro-parte-6.webp", alt: "Parte do Livro 6" },
];

const BookPartsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Register onSelect
  if (emblaApi) {
    emblaApi.on("select", onSelect);
  }

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="w-full py-16 md:py-24 px-4" style={{ backgroundColor: "#050505" }}>
      <h2 className="text-center text-2xl md:text-4xl font-bold text-foreground mb-12 px-6">
        Partes do Livro da Sabedoria Oculta
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Prev button */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-purple-600/80 hover:bg-purple-500 transition-colors text-white -ml-2 md:-ml-6"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Next button */}
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-purple-600/80 hover:bg-purple-500 transition-colors text-white -mr-2 md:-mr-6"
          aria-label="Próximo"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Carousel */}
        <div className="overflow-hidden px-8 md:px-16" ref={emblaRef}>
          <div className="flex gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 basis-[75%] sm:basis-[50%] md:basis-[40%] rounded-2xl overflow-hidden shadow-2xl transition-opacity duration-300"
                style={{ opacity: selectedIndex === i ? 1 : 0.5 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto rounded-2xl"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                selectedIndex === i ? "bg-purple-500 w-6" : "bg-white/30"
              }`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookPartsCarousel;
