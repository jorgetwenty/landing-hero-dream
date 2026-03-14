import { FC, useEffect, useRef, useState } from 'react';

interface SmallCardProps {
  title: string;
  description: string;
  imageSrc: string;
  badgeText: string;
}

const SmallCard: FC<SmallCardProps> = ({ title, description, imageSrc, badgeText }) => (
  <div className="bonus-card-wrapper relative group">
    {/* Animated border */}
    <div className="bonus-animated-border" />
    
    <div className="relative rounded-xl p-8 flex flex-col h-full overflow-hidden z-10"
      style={{
        background: 'rgba(17, 10, 26, 0.4)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-purple-500/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex justify-start mb-4">
        <span className="bg-[#b026ff] text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(176,38,255,0.4)]">
          {badgeText}
        </span>
      </div>

      <div className="h-36 w-full mb-6 flex items-center justify-center">
        <img 
          src={imageSrc} 
          alt={title} 
          className="h-full w-auto object-contain drop-shadow-[0_0_15px_rgba(176,38,255,0.15)] group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <h3 className="text-[1.35rem] font-medium text-foreground mb-4 tracking-tight leading-snug">{title}</h3>
      <p className="text-foreground text-[0.95rem] leading-relaxed font-light">{description}</p>
    </div>
  </div>
);

const MacbookReveal: FC = () => {
  const macbookRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const abreFechaMac = () => {
      const scope = macbookRef.current;
      if (!scope) return;

      const telamac = scope.querySelector('.tela img') as HTMLImageElement | null;
      const carrosseltela = scope.querySelector('.carrosseltela') as HTMLDivElement | null;
      if (!telamac || !carrosseltela) return;

      const alturaJanela = window.innerHeight;
      const alturaGatilho = alturaJanela * 0.8;
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
          <img
            src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1000&auto=format&fit=crop"
            alt="Conteúdo da Tela"
            loading="lazy"
          />
        </div>

        <div className="tela">
          <img
            src="https://i.postimg.cc/brwPBW6q/Group-1-9.png"
            alt="Tela do MacBook"
            loading="lazy"
          />
        </div>

        <div className="base">
          <img
            src="https://i.postimg.cc/wvVHFgQm/inferior-macbook-1-1-2.png"
            alt="Base do MacBook"
            loading="lazy"
          />
        </div>
      </div>

      <style>{`
        .macbook-section {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }

        .macbook-wrapper {
          position: relative;
          width: 100%;
          max-width: 1000px;
          aspect-ratio: 16/9;
          --macbook-group-top: 42%;
        }

        .base, .tela, .carrosseltela {
          position: absolute;
          top: var(--macbook-group-top);
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          pointer-events: none;
          transition: all 0.7s ease;
        }

        .base {
          z-index: 3;
          width: 80%;
          margin-top: 10%;
        }

        .tela {
          z-index: 2;
          width: 72%;
          margin-top: -12%;
        }

        .carrosseltela {
          z-index: 1;
          width: 55%;
          margin-top: -15.5%;
          opacity: 0;
          filter: blur(10px);
        }

        .base img, .tela img, .carrosseltela img {
          width: 100%;
          display: block;
        }

        .tela img {
          transform: perspective(2800px) translateX(0%) translateY(-5%) rotateX(-90deg) translateZ(0);
          transform-origin: center bottom;
          transition: all 0.7s ease;
        }

        .tela img.telaaberta {
          transform: perspective(2800px) translateX(0%) translateY(0%) rotateX(0deg) translateZ(0);
        }

        .carrosseltela.carrosseltelavisivel {
          opacity: 1;
          filter: blur(0px);
        }

        .carrosseltela img {
          border-radius: 8px 8px 0 0;
        }

        @media (max-width: 1024px) {
          .base { width: 90%; }
          .tela { width: 82%; margin-top: -14%; }
          .carrosseltela { width: 62.5%; margin-top: -17.5%; }
        }

        @media (max-width: 768px) {
          .base { width: 100%; }
          .tela { width: 90%; margin-top: -15%; }
          .carrosseltela { width: 68.5%; margin-top: -18.5%; }
        }
      `}</style>
    </section>
  );
};



const BonusSection = () => {
  return (
    <section className="min-h-screen bg-black text-foreground py-20 px-4 md:px-8 flex flex-col items-center overflow-hidden">
      
      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
          <span className="text-[#b026ff]">3 Bônus</span> Exclusivos + Área de membros!
        </h2>
      </div>

      {/* Grid of 3 Small Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] w-full mx-auto relative z-10">
        <SmallCard 
          badgeText="Bônus 1"
          title="Todas as edições do Livro de Enoque" 
          description="Retratando a Queda dos Anjos Caídos Completo."
          imageSrc="https://i.postimg.cc/yxGkLY8g/Design-sem-nome-(5).webp"
        />
        <SmallCard 
          badgeText="Bônus 2"
          title="Prepare-se para a Nova Ordem Mundial" 
          description="O grande livro da maçonaria retrata sobre os segredos da sociedade."
          imageSrc="https://i.postimg.cc/jq3wxv4W/Design-sem-nome-(4).webp"
        />
        <SmallCard 
          badgeText="Bônus 3"
          title="Descalcificação da Glândula Pineal" 
          description="Ative Seu Verdadeiro Potencial Espiritual."
          imageSrc="https://i.postimg.cc/X7ZZpFsK/Design-sem-nome-(3).webp"
        />
      </div>

      {/* MacBook Animation */}
      <MacbookReveal />

      <style>{`
        @property --bonus-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        .bonus-card-wrapper {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
        }

        .bonus-animated-border {
          position: absolute;
          inset: 0;
          border-radius: 12px;
          padding: 1.5px;
          background: conic-gradient(
            from var(--bonus-angle),
            transparent 0%,
            #b026ff 10%,
            #d8b4fe 20%,
            #b026ff 35%,
            transparent 50%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: bonus-border-spin 3s linear infinite;
          z-index: 5;
        }

        .bonus-card-wrapper:nth-child(2) .bonus-animated-border {
          animation-direction: reverse;
        }

        @keyframes bonus-border-spin {
          to { --bonus-angle: 360deg; }
        }
      `}</style>
    </section>
  );
};

export default BonusSection;
