const bonuses = [
  {
    label: "Bônus 1",
    title: "Todas as edições do",
    highlight: "Livro de Enoque",
    description: "Retratando a Queda dos Anjos Caídos Completo.",
    oldPrice: "R$ 159,00",
    image: "https://i.postimg.cc/3R5rcKKL/Design-sem-nome-(5).png",
    reverse: false,
  },
  {
    label: "Bônus 2",
    title: "Prepare-se para a",
    highlight: "Nova Ordem Mundial",
    description: "O grande livro da maçonaria retrata sobre os segredos da sociedade.",
    oldPrice: "R$ 110,00",
    image: "https://i.postimg.cc/KjQZjBtr/Design-sem-nome-(4).png",
    reverse: true,
  },
  {
    label: "Bônus 3",
    title: "Descalcificação da",
    highlight: "Glândula Pineal",
    description: "Ative Seu Verdadeiro Potencial Espiritual.",
    oldPrice: "R$ 143,00",
    image: "https://i.postimg.cc/nLQc2stH/Design-sem-nome-(3).png",
    reverse: false,
  },
];

const BonusSection = () => {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-20" style={{ backgroundColor: '#000000' }}>
      <div className="relative z-10 max-w-6xl mx-auto px-5">
        {/* Header */}
        <header className="text-center mb-16">
          <h2 className="text-[30px] md:text-[45px] font-semibold leading-tight text-foreground">
            + 3 Bônus exclusivos para quem adquirir o Kit nessa página
          </h2>
        </header>

        {/* Cards */}
        <div className="flex flex-col gap-10 md:gap-14">
          {bonuses.map((bonus, i) => (
            <article
              key={i}
              className={`glass-card rounded-[32px] p-6 md:p-12 flex flex-col ${bonus.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}
            >
              {/* Texto */}
              <div className="flex-1 flex flex-col items-start w-full">
                <span className="bg-white/10 text-foreground text-[12px] md:text-[17px] font-semibold uppercase px-6 py-2 rounded-full mb-6 inline-block">
                  {bonus.label}
                </span>
                <h3 className="text-[30px] md:text-[40px] font-semibold leading-tight text-foreground mb-5">
                  {bonus.title}{' '}
                  <span className="text-[#9D4EDD]">{bonus.highlight}</span>
                </h3>
                <p className="text-[16px] md:text-[20px] text-muted-foreground mb-8 leading-relaxed">
                  {bonus.description}
                </p>
                <div className="bg-gradient-to-r from-[#4B0082] to-[#8A2BE2] px-7 py-3.5 rounded-xl text-[20px] md:text-[25px] font-semibold text-foreground shadow-sm">
                  <s className="opacity-50 text-sm md:text-base font-medium align-middle mr-2">
                    {bonus.oldPrice}
                  </s>
                  por R$ 0,00
                </div>
              </div>

              {/* Imagem */}
              <div className="flex-1 w-full relative group">
                <div className="absolute inset-0 bg-black/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
                <img
                  src={bonus.image}
                  alt={bonus.highlight}
                  className="w-full h-auto object-cover rounded-2xl shadow-xl border border-white/10 relative z-10"
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        .glass-card {
          position: relative;
          background: rgba(20, 20, 20, 0.1);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
        }

        .glass-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 32px;
          padding: 2px;
          background: conic-gradient(
            from var(--angle),
            rgba(138, 43, 226, 0.05) 0%,
            rgba(138, 43, 226, 0.05) 90%,
            #8A2BE2 95%,
            #d8a8ff 100%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          animation: spin-border 8s linear infinite;
        }

        @keyframes spin-border {
          to {
            --angle: 360deg;
          }
        }

        .glass-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px 0 rgba(138, 43, 226, 0.15);
          background: rgba(30, 30, 30, 0.15);
        }

        .glass-card:hover::after {
          animation-duration: 4s;
        }
      `}</style>
    </section>
  );
};

export default BonusSection;
