import heroBg from "@/assets/hero-proteina.png.asset.json";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[560px] w-full overflow-hidden bg-black">
      {/* Background image */}
      <img
        src={heroBg.url}
        alt="Suplementos proteicos da nossa loja"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-end pb-14 md:pb-24">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-10">
          <p className="mb-3 text-[11px] md:text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
            Sua rotina merece mais
          </p>
          <h1 className="font-hero max-w-2xl text-3xl md:text-6xl font-black leading-tight text-white">
            Prazer e <span className="texto-gradiente">saúde</span> na sua rotina
          </h1>
          <p className="mt-3 max-w-xl text-sm md:text-lg leading-relaxed text-white/85">
            Somos uma loja que está no mercado há mais de [XX] anos, vendendo para
            quem quer unir prazer e saúde no dia a dia.
          </p>
          <a href="#sobre" className="shiny-cta-hero mt-8">
            <span>Quero começar</span>
          </a>
        </div>
      </div>

      <style>{`
        @property --hero-gradient-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        .shiny-cta-hero {
          --hero-gradient-angle: 0deg;
          position: relative;
          overflow: hidden;
          border-radius: 9999px;
          padding: 1rem 2.25rem;
          font-size: 1.125rem;
          line-height: 1.2;
          font-weight: 600;
          color: #ffffff;
          background: linear-gradient(#000000, #000000) padding-box,
            conic-gradient(
              from var(--hero-gradient-angle),
              transparent 0%, #a855f7 5%, #d8b4fe 15%, #a855f7 30%, transparent 40%, transparent 100%
            ) border-box;
          border: 2px solid transparent;
          box-shadow: inset 0 0 0 1px #1a1818;
          cursor: pointer;
          isolation: isolate;
          font-family: 'Inter', 'Helvetica Neue', sans-serif;
          z-index: 0;
          animation: hero-border-spin 2.5s linear infinite;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.15s;
        }
        @keyframes hero-border-spin {
          to { --hero-gradient-angle: 360deg; }
        }
        .shiny-cta-hero:active {
          transform: translateY(1px);
        }
        .shiny-cta-hero::before {
          content: '';
          pointer-events: none;
          position: absolute;
          left: 50%; top: 50%;
          transform: translate(-50%, -50%);
          z-index: 0;
          --size: calc(100% - 6px);
          --position: 2px;
          --space: 4px;
          width: var(--size); height: var(--size);
          background: radial-gradient(circle at var(--position) var(--position), white 0.5px, transparent 0) padding-box;
          background-size: var(--space) var(--space);
          background-repeat: space;
          mask-image: conic-gradient(from calc(var(--hero-gradient-angle) + 45deg), black, transparent 10% 90%, black);
          border-radius: inherit;
          opacity: 0.4;
        }
        .shiny-cta-hero::after {
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
          animation: hero-shimmer 4s linear infinite;
        }
        @keyframes hero-shimmer {
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .shiny-cta-hero span {
          position: relative;
          z-index: 2;
          display: inline-block;
        }
        .shiny-cta-hero span::before {
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
          animation: hero-breathe 4.5s linear infinite;
        }
        @keyframes hero-breathe {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.20); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;