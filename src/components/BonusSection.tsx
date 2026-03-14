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
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const trigger = window.innerHeight * 0.8;
      setIsOpen(rect.top <= trigger);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="mt-10 w-full max-w-[1000px] mx-auto relative z-10" style={{ aspectRatio: '16/9' }}>
      {/* Screen content */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] md:w-[55%] pointer-events-none transition-all duration-700 z-[1]`}
        style={{ marginTop: '-15.5%', opacity: isOpen ? 1 : 0, filter: isOpen ? 'blur(0px)' : 'blur(10px)' }}>
        <img src="https://i.postimg.cc/vBQgBNKG/Design-sem-nome-(8).webp" alt="Área de Membros" className="w-full block rounded-t-lg" loading="lazy" />
      </div>
      {/* Screen frame */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72%] pointer-events-none z-[2]" style={{ marginTop: '-12%' }}>
        <img
          src="/images/macbook-tela.png"
          alt="Tela do MacBook"
          className="w-full block transition-all duration-700"
          style={{
            transform: isOpen
              ? 'perspective(2800px) rotateX(0deg)'
              : 'perspective(2800px) translateY(-5%) rotateX(-90deg)',
            transformOrigin: 'center bottom',
          }}
        />
      </div>
      {/* Base */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] pointer-events-none z-[3]" style={{ marginTop: '10%' }}>
        <img src="/images/macbook-base.png" alt="Base do MacBook" className="w-full block" />
      </div>
    </div>
  );
};

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
