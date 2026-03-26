import { Check } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const list = listRef.current;
    if (!section || !list) return;

    const checkItems = list.querySelectorAll(".check-item");

    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(checkItems, { opacity: 0, y: 40, visibility: "hidden" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: list,
          start: "top 70%",
          end: `+=${checkItems.length * 60}`,
          scrub: 0.5,
        },
      });

      checkItems.forEach((item, index) => {
        const checkIcon = item.querySelector(".check-icon-bg");

        tl.to(
          item,
          {
            opacity: 1,
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          index * 0.6
        );

        if (checkIcon) {
          tl.from(
            checkIcon,
            {
              scale: 0,
              rotation: -45,
              opacity: 0,
              duration: 0.6,
              ease: "back.out(2)",
            },
            index * 0.6 + 0.15
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen py-16 md:py-24 flex flex-col justify-center items-center px-4 overflow-hidden bg-white"
    >
      {/* Spline 3D Background - screen blend makes black transparent on white */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none" style={{ mixBlendMode: 'screen' }}>
        <iframe
          src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
          title="Spline 3D Background"
          loading="lazy"
        />
      </div>

      {/* Subtle purple ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0 bg-purple-200/20" />

      <div className="w-full max-w-4xl mx-auto relative z-10">
        {/* Headline */}
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-12 sm:mb-20 max-w-3xl mx-auto leading-tight">
          Para quem é esse kit de livros da
          <br />
          <span className="caixa-destaque">
            <span className="texto-gradiente">Sabedoria Oculta?</span>
          </span>
        </h2>

        {/* Items List */}
        <div ref={listRef} className="flex flex-col gap-2 md:gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="check-item flex items-center p-3 md:p-5 rounded-xl cursor-default border border-transparent transition-all duration-300 hover:translate-x-[5px]"
              style={{
                opacity: 0,
                visibility: "hidden",
                transform: "translateY(30px)",
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(243, 240, 255, 0.9)";
                e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.85)";
                e.currentTarget.style.borderColor = "transparent";
              }}
            >
              {/* Check icon with neon glow */}
              <div
                className="check-icon-bg flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center mr-3 md:mr-4 relative z-20"
                style={{
                  background: "linear-gradient(135deg, #c084fc 0%, #7e22ce 100%)",
                  boxShadow:
                    "0 0 10px #a855f7, 0 0 25px rgba(168, 85, 247, 0.7), inset 0 0 8px rgba(255, 255, 255, 0.4)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <Check className="w-3.5 h-3.5 md:w-5 md:h-5 text-white drop-shadow-md" strokeWidth={3} />
              </div>

              {/* Text */}
              <p className="text-gray-700 text-sm md:text-base font-medium">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <a
            href="#pricing"
            className="shiny-cta-forwho"
          >
            <span>Quero começar agora</span>
          </a>
        </div>
      </div>

      <style>{`
        @property --forwho-gradient-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }
        .shiny-cta-forwho {
          --forwho-gradient-angle: 0deg;
          position: relative;
          overflow: hidden;
          border-radius: 9999px;
          padding: 1rem 2.5rem;
          font-size: 1.125rem;
          line-height: 1.2;
          font-weight: 600;
          color: #ffffff;
          background: linear-gradient(#000000, #000000) padding-box,
            conic-gradient(from var(--forwho-gradient-angle), transparent 0%, #a855f7 5%, #d8b4fe 15%, #a855f7 30%, transparent 40%, transparent 100%) border-box;
          border: 2px solid transparent;
          box-shadow: inset 0 0 0 1px #1a1818;
          cursor: pointer;
          isolation: isolate;
          font-family: 'Inter', 'Helvetica Neue', sans-serif;
          z-index: 10;
          animation: forwho-border-spin 2.5s linear infinite;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.15s;
        }
        @keyframes forwho-border-spin { to { --forwho-gradient-angle: 360deg; } }
        .shiny-cta-forwho:active { transform: translateY(1px); }
        .shiny-cta-forwho::before {
          content: '';
          pointer-events: none;
          position: absolute;
          left: 50%; top: 50%;
          transform: translate(-50%, -50%);
          z-index: 0;
          --size: calc(100% - 6px);
          width: var(--size); height: var(--size);
          background: radial-gradient(circle at 2px 2px, white 0.5px, transparent 0) padding-box;
          background-size: 4px 4px;
          background-repeat: space;
          mask-image: conic-gradient(from calc(var(--forwho-gradient-angle) + 45deg), black, transparent 10% 90%, black);
          border-radius: inherit;
          opacity: 0.4;
        }
        .shiny-cta-forwho::after {
          content: '';
          pointer-events: none;
          position: absolute;
          left: 50%; top: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
          width: 100%; aspect-ratio: 1;
          background: linear-gradient(-50deg, transparent, #a855f7, transparent);
          mask-image: radial-gradient(circle at bottom, transparent 40%, black);
          opacity: 0.6;
          animation: forwho-shimmer 4s linear infinite;
        }
        @keyframes forwho-shimmer { to { transform: translate(-50%, -50%) rotate(360deg); } }
        .shiny-cta-forwho span { position: relative; z-index: 2; display: inline-block; }
        .shiny-cta-forwho span::before {
          content: '';
          pointer-events: none;
          position: absolute;
          left: 50%; top: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
          --size: calc(100% + 1rem);
          width: var(--size); height: var(--size);
          box-shadow: inset 0 -1ex 2rem 4px #a855f7;
          opacity: 0;
          border-radius: inherit;
          animation: forwho-breathe 4.5s linear infinite;
        }
        @keyframes forwho-breathe {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.20); }
        }
      `}</style>
    </section>
  );
};

export default ForWhoSection;
