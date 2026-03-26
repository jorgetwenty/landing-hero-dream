import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="w-full py-16 md:py-24 px-4 bg-white">
      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-12 sm:mb-20 max-w-3xl mx-auto leading-tight">
        Veja Algumas Das Partes do Livro da <span className="text-[#9D4EDD]">Sabedoria Oculta</span>
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
                className="flex-shrink-0 basis-[75%] sm:basis-[50%] md:basis-[40%] rounded-2xl overflow-hidden shadow-2xl transition-opacity duration-300 cursor-pointer"
                style={{ opacity: selectedIndex === i ? 1 : 0.5 }}
                onClick={() => setLightboxIndex(i)}
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
              className={`h-8 min-w-[2rem] rounded-full transition-all duration-300 flex items-center justify-center ${
                selectedIndex === i ? "bg-purple-500 w-8" : "bg-gray-300 w-8"
              }`}
              aria-label={`Ir para slide ${i + 1}`}
            >
              <span className={`block rounded-full ${selectedIndex === i ? "bg-purple-500 w-6 h-2" : "bg-gray-300 w-2 h-2"}`} />
            </button>
          ))}
        </div>
      </div>
      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
            }}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-purple-600/80 hover:bg-purple-500 transition-colors text-white"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <img
            src={images[lightboxIndex].src}
            alt={images[lightboxIndex].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
            }}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-purple-600/80 hover:bg-purple-500 transition-colors text-white"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl font-light"
            aria-label="Fechar"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
};

export default BookPartsCarousel;
