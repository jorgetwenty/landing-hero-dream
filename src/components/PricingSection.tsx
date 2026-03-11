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
          className="group relative inline-flex items-center justify-center gap-3 bg-white text-black font-bold text-[22px] px-12 py-5 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto mb-8"
          style={{ boxShadow: '0 0 30px rgba(255,255,255,0.1)' }}
        >
          <span>COMPRAR AGORA</span>
          <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 448 512">
            <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
          </svg>
        </a>

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
