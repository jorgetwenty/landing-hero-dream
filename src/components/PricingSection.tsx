const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none" className="flex-shrink-0 mt-1">
    <rect width="27" height="26" rx="13" fill="url(#checkGrad)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.6226 8.13156C19.0078 8.3753 19.1159 8.87509 18.8641 9.24786L13.1974 17.6349C13.0639 17.8326 12.8475 17.9636 12.6055 17.9935C12.3634 18.0234 12.12 17.9491 11.9394 17.7903L8.27277 14.5645C7.93223 14.2649 7.90714 13.7549 8.21672 13.4253C8.5263 13.0958 9.05334 13.0715 9.39388 13.3711L12.3373 15.9606L17.4691 8.36521C17.721 7.99244 18.2374 7.88783 18.6226 8.13156Z"
      fill="#0D1214"
    />
    <defs>
      <linearGradient id="checkGrad" x1="0" y1="13" x2="27" y2="13" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="#D8B4FE" />
      </linearGradient>
    </defs>
  </svg>
);

const benefits = [
  "O livro da Sabedoria em português VOL. 1",
  "Acesso Vitalício",
  "Bônus Platinum #1 O Livro de Enoque",
  "Bônus Especial #2 A Nova Ordem Mundial",
  "Bônus Premium #3 Glândula Pineal",
];

const PricingSection = () => {
  return (
    <section className="relative w-full py-16 md:py-24 px-4 sm:px-6 flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#050505' }}>
      {/* Glow effect */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[600px] rounded-full pointer-events-none z-0"
        style={{
          background: '#9333ea',
          filter: 'blur(150px)',
          opacity: 0.4,
          mixBlendMode: 'screen',
          animation: 'pricingGlow 5s infinite ease-in-out',
        }}
      />

      <style>{`
        @keyframes pricingGlow {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.05); }
        }
      `}</style>

      {/* Glass card */}
      <div
        className="relative z-10 w-full max-w-4xl px-6 py-12 md:px-16 md:py-20 flex flex-col items-center text-center"
        style={{
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.10)',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        {/* Subtitle */}
        <h3 className="text-lg md:text-xl font-semibold tracking-wide text-gray-300 mb-2">
          <span className="text-purple-400">//</span>{' '}
          <span className="text-white">Oferta única para quem busca sabedoria secreta</span>
        </h3>

        {/* Title */}
        <h2 className="text-4xl md:text-[44px] font-bold leading-tight tracking-tight mb-12 text-white">
          Acesso Completo ao Conhecimento Oculto + 3 bônus
        </h2>

        {/* Benefits list */}
        <ul className="flex flex-col gap-6 text-left w-full max-w-2xl mx-auto mb-14">
          {benefits.map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <CheckIcon />
              <span className="text-xl md:text-[25px] font-normal leading-snug text-white">{item}</span>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <hr className="w-full border-t border-white/10 mb-12" />

        {/* Product mockup */}
        <img
          src="/images/produto-mockup.png"
          alt="Mockup do Produto"
          className="w-full max-w-2xl mx-auto rounded-lg shadow-2xl mb-12"
        />

        {/* Pricing */}
        <div className="mb-8">
          <h3 className="text-[35px] md:text-[42px] font-semibold text-gray-300 tracking-tight leading-none mb-2">
            VALOR TOTAL <s className="text-gray-400" style={{ textDecorationColor: '#f87171', textDecorationThickness: '2px' }}>R$ 97,00</s>
          </h3>
          <h1 className="text-[70px] md:text-[130px] lg:text-[153px] font-bold text-white leading-none tracking-tight -mb-2 md:-mb-6">
            R$ 27,00
          </h1>
          <p className="text-xl md:text-2xl font-medium text-purple-400 mt-6 md:mt-10">
            Apenas hoje por R$ 27 à vista. <span className="text-white">Só HOJE. Amanhã? Já era!</span>
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="https://checkout4.xgrow.com/pt/c573c0c6-f642-4a4a-ae09-3f2edd1c67e2/NzUyMzA="
          target="_blank"
          rel="noopener noreferrer"
          className="shiny-cta-pricing mb-8"
        >
          <span>COMPRAR AGORA</span>
        </a>

        <style>{`
          @property --pricing-gradient-angle {
            syntax: "<angle>";
            initial-value: 0deg;
            inherits: false;
          }

          .shiny-cta-pricing {
            --pricing-gradient-angle: 0deg;
            position: relative;
            overflow: hidden;
            border-radius: 9999px;
            padding: 1.25rem 2.5rem;
            font-size: 1.125rem;
            line-height: 1.2;
            font-weight: 600;
            color: #ffffff;
            background: linear-gradient(#000000, #000000) padding-box,
              conic-gradient(
                from var(--pricing-gradient-angle),
                transparent 0%, #a855f7 5%, #d8b4fe 15%, #a855f7 30%, transparent 40%, transparent 100%
              ) border-box;
            border: 2px solid transparent;
            box-shadow: inset 0 0 0 1px #1a1818;
            cursor: pointer;
            isolation: isolate;
            font-family: 'Inter', 'Helvetica Neue', sans-serif;
            z-index: 0;
            animation: pricing-border-spin 2.5s linear infinite;
            text-decoration: none;
            display: inline-block;
            transition: transform 0.15s;
          }

          @keyframes pricing-border-spin {
            to { --pricing-gradient-angle: 360deg; }
          }

          .shiny-cta-pricing:active {
            transform: translateY(1px);
          }

          .shiny-cta-pricing::before {
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
            mask-image: conic-gradient(from calc(var(--pricing-gradient-angle) + 45deg), black, transparent 10% 90%, black);
            border-radius: inherit;
            opacity: 0.4;
          }

          .shiny-cta-pricing::after {
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
            animation: pricing-shimmer 4s linear infinite;
          }

          @keyframes pricing-shimmer {
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }

          .shiny-cta-pricing span {
            position: relative;
            z-index: 2;
            display: inline-block;
          }

          .shiny-cta-pricing span::before {
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
            animation: pricing-breathe 4.5s linear infinite;
          }

          @keyframes pricing-breathe {
            0%, 100% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-50%, -50%) scale(1.20); }
          }
        `}</style>

        {/* Payment methods */}
        <img
          src="/images/formas-pagamento.webp"
          alt="Formas de Pagamento Seguras"
          className="h-5 object-contain opacity-80"
        />
      </div>
    </section>
  );
};

export default PricingSection;
