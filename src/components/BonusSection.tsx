const bonuses = [
  {
    label: "Bônus 1",
    title: "Todas as edições do",
    highlight: "Livro de Enoque",
    description: "Retratando a Queda dos Anjos Caídos Completo.",
    oldPrice: "R$ 159,00",
    image: "https://i.postimg.cc/xCbj6wv5/image.png",
    reverse: false,
  },
  {
    label: "Bônus 2",
    title: "Prepare-se para a",
    highlight: "Nova Ordem Mundial",
    description: "O grande livro da maçonaria retrata sobre os segredos da sociedade.",
    oldPrice: "R$ 110,00",
    image: "https://i.postimg.cc/Vvqf8XVy/image.png",
    reverse: true,
  },
  {
    label: "Bônus 3",
    title: "Descalcificação da",
    highlight: "Glândula Pineal",
    description: "Ative Seu Verdadeiro Potencial Espiritual.",
    oldPrice: "R$ 143,00",
    image: "https://i.postimg.cc/pLX2whQy/image.png",
    reverse: false,
  },
];

const BonusSection = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24" style={{ backgroundColor: 'hsl(0 0% 4%)' }}>
      {/* Blobs decorativos roxos */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background: 'rgba(138, 43, 226, 0.15)',
          top: '10%',
          left: -100,
          filter: 'blur(80px)',
          animation: 'float 10s ease-in-out infinite alternate',
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 500,
          height: 500,
          background: 'rgba(100, 50, 200, 0.12)',
          bottom: '20%',
          right: -150,
          filter: 'blur(80px)',
          animation: 'float 10s ease-in-out infinite alternate',
          animationDelay: '-5s',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5">
        {/* Header */}
        <header className="text-center mb-16">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-lg"
            style={{
              background: "linear-gradient(81deg, #FFF 25.49%, #939DB8 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            + 3 Bônus exclusivos para quem adquirir o Kit nessa página
          </h2>
        </header>

        {/* Cards */}
        <div className="flex flex-col gap-10 md:gap-14">
          {bonuses.map((bonus, i) => (
            <article
              key={i}
              className={`rounded-[32px] p-6 md:p-12 flex flex-col ${bonus.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12 transition-transform duration-300 hover:-translate-y-1`}
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(138, 43, 226, 0.2)',
                boxShadow: '0 8px 32px rgba(138, 43, 226, 0.08)',
              }}
            >
              {/* Texto */}
              <div className="flex-1 flex flex-col items-start w-full">
                <span
                  className="text-xs md:text-sm font-semibold uppercase px-6 py-2 rounded-full mb-6 inline-block"
                  style={{
                    background: 'rgba(138, 43, 226, 0.15)',
                    color: 'hsl(270 80% 75%)',
                  }}
                >
                  {bonus.label}
                </span>
                <h3
                  className="text-[26px] md:text-[36px] font-semibold leading-tight text-foreground mb-5"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {bonus.title}{' '}
                  <span style={{ color: 'hsl(270 80% 70%)' }}>{bonus.highlight}</span>
                </h3>
                <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                  {bonus.description}
                </p>
                <div
                  className="px-7 py-3.5 rounded-xl text-lg md:text-xl font-semibold text-foreground"
                  style={{
                    background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.3), rgba(74, 14, 143, 0.5))',
                  }}
                >
                  <s className="opacity-50 text-sm md:text-base font-medium align-middle mr-2">
                    {bonus.oldPrice}
                  </s>
                  por R$ 0,00
                </div>
              </div>

              {/* Imagem */}
              <div className="flex-1 w-full relative group">
                <div className="absolute inset-0 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" style={{ background: 'rgba(138, 43, 226, 0.08)' }} />
                <img
                  src={bonus.image}
                  alt={bonus.highlight}
                  className="w-full h-auto object-cover rounded-2xl shadow-xl relative z-10"
                  style={{ border: '1px solid rgba(138, 43, 226, 0.2)' }}
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -50px) scale(1.1); }
          100% { transform: translate(-20px, 20px) scale(0.9); }
        }
      `}</style>
    </section>
  );
};

export default BonusSection;
