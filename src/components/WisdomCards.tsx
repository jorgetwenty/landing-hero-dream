import React, { useState, useRef, useCallback } from "react";

const cards = [
  {
    nome: "Desperte Sua Glândula Pineal",
    descricao: "Ative sua glândula pineal para despertar a visão interior e atrair clareza, sucesso e prosperidade.",
    foto: "/images/card-pineal.png",
    imagePosition: "object-center",
  },
  {
    nome: "A Ciência da Numerologia",
    descricao: "Calcule e entenda a numerologia para descobrir seu número guia, alcançando autoconhecimento e sucesso.",
    foto: "/images/card-numerologia.png",
    imagePosition: "object-top",
  },
  {
    nome: "Mistérios da Maçonaria Revelados",
    descricao: "Desvende os mistérios, símbolos e o real funcionamento da Maçonaria, uma das sociedades mais enigmáticas da história.",
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
    imagePosition: "object-center",
  },
  {
    nome: "Libere os 7 Chakras",
    descricao: "Entenda e ative os 7 chakras para equilibrar corpo e alma, desvendando os segredos do seu corpo energético.",
    foto: "/images/card-chakras.webp",
    imagePosition: "object-top",
  },
];

interface CardProps {
  nome: string;
  descricao: string;
  foto: string;
  imagePosition?: string;
}

const WisdomCard = ({ nome, descricao, foto, imagePosition = "object-top" }: CardProps) => {
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
            <stop offset="100%" stopColor="#000000" />
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
        className="relative w-full h-[480px] sm:h-[520px] lg:h-[560px] bg-card border border-[#4B0082]/50 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background pointer-events-none" />

        {/* Image */}
        <div className="relative h-[55%] w-full overflow-hidden bg-muted">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <img
            src={foto}
            alt={nome}
            className={`w-full h-full object-cover ${imagePosition} transition-all duration-700 group-hover:scale-110`}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Content */}
        <div className="relative p-6 sm:p-8 flex flex-col flex-grow z-20">
          <h3 className="font-hero text-xl sm:text-2xl font-bold text-foreground leading-tight mb-3 mt-1">
            {nome}
          </h3>
          <div className="w-12 h-1 bg-[#9D4EDD] mb-4 group-hover:w-full transition-all duration-1000" />
          <p className="text-muted-foreground text-sm leading-relaxed">
            {descricao}
          </p>
        </div>

        {/* Glass sweep effect */}
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

const WisdomCards = () => {
  return (
    <section className="bg-black py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-12 sm:mb-20 max-w-3xl mx-auto leading-tight">
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
      </div>

      <style>{`
        .group:hover rect {
          stroke-dashoffset: 0;
        }
      `}</style>
    </section>
  );
};

export default WisdomCards;
