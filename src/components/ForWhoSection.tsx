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
          end: `+=${checkItems.length * 150}`,
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
          index * 1.2
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
            index * 1.2 + 0.3
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen py-16 md:py-24 flex flex-col justify-center items-center px-4 overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Spline 3D Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <iframe
          src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
          title="Spline 3D Background"
        />
      </div>

      {/* Ambient purple glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0 bg-purple-900/10" />

      <div className="w-full max-w-4xl mx-auto relative z-10">
        {/* Headline */}
        <h2 className="wisdom-headline">
          Para quem é esse kit de livros da
          <br />
          Sabedoria Oculta?
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
                backgroundColor: "#0a0a0a",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#111111";
                e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#0a0a0a";
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
              <p className="text-gray-200 text-sm md:text-base font-medium">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
