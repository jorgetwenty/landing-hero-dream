import React, { useState, useRef, useCallback } from "react";

const cards = [
  {
    nome: "Desperte Sua Glândula Pineal",
    descricao: "Ative sua glândula pineal para despertar a visão interior e atrair clareza, sucesso e prosperidade.",
    foto: "/images/card-pineal.png",
    imagePosition: "sm:object-center",
    mobileImagePosition: "object-[50%_20%]",
  },
  {
    nome: "Mistérios da Maçonaria Revelados",
    descricao: "Desvende os mistérios, símbolos e o real funcionamento da Maçonaria, uma das sociedades mais enigmáticas da história.",
    foto: "/images/card-numerologia.png",
    imagePosition: "sm:object-top",
    mobileImagePosition: "object-[50%_30%]",
  },
  {
    nome: "A Ciência Oculta da Numerologia",
    descricao: "Aprenda a calcular seu número de destino e entender como os números influenciam sua vida, decisões e propósito.",
    foto: "/images/card-maconaria.png",
    imagePosition: "object-center",
  },
  {
    nome: "Eleve sua Frequência Energética",
    descricao: "Domine técnicas para elevar sua frequência energética, limpar sua vibração e atrair abundância diária.",
    foto: "/images/card-frequencia.webp",
    imagePosition: "object-top",
  },
  {
    nome: "O Verdadeiro Conhecimento de Jesus",
    descricao: "Descubra qual foi o conhecimento de Jesus e os ensinamentos ocultos que transformaram a história.",
    foto: "/images/card-jesus.webp",
    imagePosition: "object-top",
  },
  {
    nome: "A Verdade Sobre as Pirâmides",
    descricao: "Descubra o verdadeiro segredo que as pirâmides escondem e o conhecimento ancestral por trás delas.",
    foto: "/images/card-piramides.webp",
    imagePosition: "sm:object-[50%_60%]",
    mobileImagePosition: "object-[50%_60%]",
  },
  {
    nome: "Os segredos do Vaticano",
    descricao: "Entenda e ative os 7 chakras para equilibrar corpo e alma, desvendando os segredos do seu corpo energético.",
    foto: "/images/card-chakras.webp",
    imagePosition: "sm:object-[50%_20%]",
    mobileImagePosition: "object-[50%_20%]",
  },
];

interface CardProps {
  nome: string;
  descricao: string;
  foto: string;
  imagePosition?: string;
  mobileImagePosition?: string;
}

const WisdomCard = ({ nome, descricao, foto, imagePosition = "sm:object-top", mobileImagePosition = "" }: CardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    const rotateX = (y - 0.5) * 15;
    const rotateY = (x - 0.5) * -15;
    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: "none",
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "all 0.5s ease",
    });
  }, []);

  return (
    <div
      className="relative group cursor-default"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated border SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-30 overflow-visible">
        <defs>
          <linearGradient id={`stroke-grad-${foto}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9D4EDD" />
            <stop offset="50%" stopColor="#4B0082" />
            <stop offset="100%" stopColor="#e5e7eb" />
          </linearGradient>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          rx="16"
          fill="none"
          stroke={`url(#stroke-grad-${foto})`}
          strokeWidth="4"
          className="transition-all duration-1000 ease-in-out"
          style={{ strokeDasharray: "2000", strokeDashoffset: "2000" }}
        />
      </svg>

      {/* Outer glow */}
      <div className="absolute -inset-1 bg-[#9D4EDD] rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-700" />

      <div
        ref={ref}
        style={style}
        className="relative w-full h-[480px] sm:h-[520px] lg:h-[560px] bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xl flex flex-col"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none" />

        {/* Image */}
        <div className="relative h-[55%] w-full overflow-hidden bg-gray-100">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
          <img
            src={foto}
            alt={nome}
            width="400"
            height="300"
            className={`w-full h-full object-cover ${mobileImagePosition} ${imagePosition} transition-all duration-700 group-hover:scale-110`}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Content */}
        <div className="relative p-6 sm:p-8 flex flex-col flex-grow z-20">
          <h3 className="font-sans text-xl sm:text-2xl font-bold text-gray-900 leading-tight mb-3 mt-1">
            {nome}
          </h3>
          <div className="w-12 h-1 bg-[#9D4EDD] mb-4 group-hover:w-full transition-all duration-1000" />
          <p className="text-gray-600 text-sm leading-relaxed">
            {descricao}
          </p>
        </div>

        {/* Glass sweep effect */}
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-black/5 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

const WisdomCards = () => {
  return (
    <section className="relative bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background-light pointer-events-none" />
      
      {/* Rotating purple blur */}
      <div className="purple-glow-orb-light pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-12 sm:mb-20 max-w-3xl mx-auto leading-tight">
          Veja o que você vai aprender com o livro da{" "}
          <span className="text-[#9D4EDD]">Sabedoria Oculta</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <div key={i} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]">
              <WisdomCard {...card} />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <a
            href="#pricing"
            className="shiny-cta-wisdom"
          >
            <span>Quero começar agora</span>
          </a>
        </div>
      </div>

      <style>{`
        @property --wisdom-gradient-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        .shiny-cta-wisdom {
          --wisdom-gradient-angle: 0deg;
          position: relative;
          overflow: hidden;
          border-radius: 9999px;
          padding: 1rem 2.5rem;
          font-size: 1.125rem;
          line-height: 1.2;
          font-weight: 600;
          color: #ffffff;
          background: linear-gradient(#000000, #000000) padding-box,
            conic-gradient(
              from var(--wisdom-gradient-angle),
              transparent 0%, #a855f7 5%, #d8b4fe 15%, #a855f7 30%, transparent 40%, transparent 100%
            ) border-box;
          border: 2px solid transparent;
          box-shadow: inset 0 0 0 1px #1a1818;
          cursor: pointer;
          isolation: isolate;
          font-family: 'Inter', 'Helvetica Neue', sans-serif;
          z-index: 0;
          animation: wisdom-border-spin 2.5s linear infinite;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.15s;
        }

        @keyframes wisdom-border-spin {
          to { --wisdom-gradient-angle: 360deg; }
        }

        .shiny-cta-wisdom:active {
          transform: translateY(1px);
        }

        .shiny-cta-wisdom::before {
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
          mask-image: conic-gradient(from calc(var(--wisdom-gradient-angle) + 45deg), black, transparent 10% 90%, black);
          border-radius: inherit;
          opacity: 0.4;
        }

        .shiny-cta-wisdom::after {
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
          animation: wisdom-shimmer 4s linear infinite;
        }

        @keyframes wisdom-shimmer {
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .shiny-cta-wisdom span {
          position: relative;
          z-index: 2;
          display: inline-block;
        }

        .shiny-cta-wisdom span::before {
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
          animation: wisdom-breathe 4.5s linear infinite;
        }

        @keyframes wisdom-breathe {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.20); }
        }
      `}</style>

      <style>{`
        .group:hover rect {
          stroke-dashoffset: 0;
        }
        
        .grid-background-light::before {
          content: "";
          opacity: 0.15;
          background-color: transparent;
          background-image: linear-gradient(90deg, #c4b5fd, #c4b5fd 1px, transparent 1px, transparent 11px), 
                            linear-gradient(0deg, #c4b5fd, #c4b5fd 1px, transparent 1px, transparent 11px);
          background-size: 50px 50px;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }
        
        .grid-background-light::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          background-image: radial-gradient(transparent 0%, #ffffff 70%);
          width: 100%;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }
        
        .purple-glow-orb-light {
          position: absolute;
          top: 50%;
          left: 60%;
          transform: translate(-50%, -50%);
          width: 1154px;
          height: 600px;
          background: conic-gradient(from 0deg, #e9d5ff, #c4b5fd, #ddd6fe, #e9d5ff);
          border-radius: 50%;
          filter: blur(180px);
          z-index: 0;
          animation: purple-turn 10s linear infinite;
          transform-origin: center;
          opacity: 0.3;
        }
        
        @keyframes purple-turn {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default WisdomCards;
