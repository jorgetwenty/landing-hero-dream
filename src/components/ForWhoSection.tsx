import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const items = [
  "Para quem está pronto para rasgar o véu da ilusão e enxergar a verdade.",
  "Para quem cansou de sobreviver e está pronto para prosperar de verdade.",
  "Para quem sabe que sabedoria é o único poder que não se perde.",
  "Para o inconformado com a mediocridade do mundo comum.",
  "Para quem sabe que há algo além da matéria esperando para ser acessado.",
  "Para quem deseja despertar dons adormecidos e acessar seu real potencial.",
  "Para quem sente que o mundo esconde códigos esperando para serem decifrados.",
];

const ForWhoSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleItems((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-black py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h2
          className="text-center text-3xl md:text-5xl font-bold leading-tight mb-16"
          style={{
            background: "linear-gradient(81deg, #FFF 25.49%, #939DB8 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Para quem é esse kit de livros da Sabedoria Oculta?
        </h2>

        {/* Items */}
        <div className="space-y-5">
          {items.map((item, i) => {
            const isVisible = visibleItems.includes(i);
            return (
              <div
                key={i}
                ref={(el) => (itemRefs.current[i] = el)}
                data-index={i}
                className="relative group"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateX(0)"
                    : "translateX(-60px)",
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.05}s`,
                }}
              >
                <div className="flex items-center gap-5 px-6 py-5 rounded-2xl border border-transparent hover:border-[#8a2be2]/30 bg-gradient-to-r from-[#0d0d0d] to-transparent hover:from-[#1a0a2e] hover:to-[#0d0d0d] transition-all duration-500 cursor-default">
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #8a2be2, #b100ff)",
                      boxShadow: isVisible
                        ? "0 0 20px rgba(177, 0, 255, 0.4)"
                        : "none",
                      transition: "box-shadow 0.6s ease",
                    }}
                  >
                    <Check className="w-5 h-5 text-white" strokeWidth={3} />
                  </div>

                  {/* Text */}
                  <p className="text-[#c8c0d8] text-base md:text-lg font-medium group-hover:text-white transition-colors duration-300">
                    {item}
                  </p>
                </div>

                {/* Glow line on hover */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#8a2be2]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
