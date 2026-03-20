import { useState, useEffect } from "react";

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-[10px]">
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#9333ea] mt-[2px] shrink-0">
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
    <div className="flex-1 leading-snug">{children}</div>
  </li>
);

const TimeBox = ({ value, label }: { value: string; label: string }) => (
  <div className="bg-[#0b0510] border border-[#2e144a] rounded-[6px] w-[42px] h-[46px] flex flex-col items-center justify-center shadow-inner">
    <span className="text-white font-black leading-none text-[22px] tracking-tight">{value}</span>
    <span className="text-[#a88ebf] font-bold text-[8px] mt-[2px] uppercase">{label}</span>
  </div>
);

const PaymentLogos = () => (
  <div className="flex items-center justify-center gap-[14px] mt-5 opacity-60 text-white fill-white">
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path fill="currentColor" d="M7.6 2.3L2 8.3L12 18.5L22 8.3L16.4 2.3H7.6ZM12 4L14.7 6.8L12 9.6L9.3 6.8L12 4ZM5.6 8.3L8.3 11.1L5.6 13.9L2.9 11.1L5.6 8.3ZM18.4 8.3L21.1 11.1L18.4 13.9L15.7 11.1L18.4 8.3ZM12 12.6L14.7 15.4L12 18.2L9.3 15.4L12 12.6Z" />
    </svg>
    <svg className="w-[26px] h-4" viewBox="0 0 32 20">
      <circle cx="10" cy="10" r="10" fill="currentColor" fillOpacity="0.8" />
      <circle cx="22" cy="10" r="10" fill="currentColor" fillOpacity="0.8" />
    </svg>
    <span className="font-black italic text-[15px] tracking-tighter">VISA</span>
    <span className="font-extrabold italic text-[14px] lowercase">elo</span>
    <svg className="w-[22px] h-4" viewBox="0 0 24 16">
      <rect x="0" y="0" width="24" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="0" y1="5" x2="24" y2="5" stroke="currentColor" strokeWidth="2" />
    </svg>
    <div className="flex items-center gap-[2px]">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C12 2 5 8 5 14C5 17.866 8.134 21 12 21C15.866 21 19 17.866 19 14C19 11 17 9 17 9C17 9 18 11 18 13C18 16.313 15.313 19 12 19C8.687 19 6 16.313 6 13C6 8 12 4 12 4Z" />
        <path d="M12 8C12 8 9 11 9 14C9 15.657 10.343 17 12 17C13.657 17 15 15.657 15 14C15 12 13 10 13 10C13 10 14 11 14 12C14 13.104 13.104 14 12 14C10.895 14 10 13.104 10 12C10 10 12 8 12 8Z" opacity="0.6" />
      </svg>
      <span className="font-bold text-[11px] tracking-tighter">hotmart</span>
    </div>
  </div>
);

const PricingSection = () => {
  const [timeLeft, setTimeLeft] = useState(10 * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  const days = Math.floor(timeLeft / (3600 * 24)).toString().padStart(2, "0");
  const hours = Math.floor((timeLeft % (3600 * 24)) / 3600).toString().padStart(2, "0");
  const minutes = Math.floor((timeLeft % 3600) / 60).toString().padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");

  return (
    <section className="relative w-full bg-black flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 font-sans selection:bg-[#c084fc] selection:text-white overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 pricing-grid-bg pointer-events-none" />

      <div className="max-w-[1000px] w-full flex flex-col md:flex-row gap-8 justify-center items-center md:items-stretch relative z-10">

        {/* CARTÃO ESQUERDO */}
        <div className="w-full md:w-[460px] rounded-[32px] p-8 md:p-10 bg-gradient-to-bl from-[#f3e8ff] via-[#e9d5ff] to-[#d8b4fe] shadow-xl relative shrink-0">
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] leading-[1.1] font-bold text-[#3b0764] mb-6 tracking-tight pr-4">
            O que você vai receber hoje:
          </h2>

          <p className="text-[#3b0764] text-[15px] sm:text-[16px] md:text-[17px] font-medium mb-6 leading-snug opacity-90">
            Ao acessar o Livro da Sabedoria Oculta, você também recebe gratuitamente:
          </p>

          <ul className="flex flex-col gap-6 text-[#3b0764] text-[15px] sm:text-[16px] md:text-[17px]">
            <ListItem>
              <span className="block font-extrabold mb-1">Áudio de Reprogramação da Consciência</span>
              <span className="block font-medium text-[13px] sm:text-[14px] md:text-[15px] leading-snug opacity-80">
                Um áudio guiado criado para ajudar você a reprogramar padrões mentais, elevar sua frequência e fortalecer seu foco mental.
              </span>
            </ListItem>
            <ListItem>
              <span className="block font-extrabold mb-1">Manual de Ativação da Consciência</span>
              <span className="block font-medium text-[13px] sm:text-[14px] md:text-[15px] leading-snug opacity-80">
                Um guia prático com técnicas simples para despertar sua percepção espiritual e acessar estados mais elevados de consciência.
              </span>
            </ListItem>
            <ListItem>
              <span className="block font-extrabold mb-1">Teste dos Arquétipos Espirituais</span>
              <span className="block font-medium text-[13px] sm:text-[14px] md:text-[15px] leading-snug opacity-80">
                Descubra qual arquétipo governa sua energia e como ele influencia sua forma de pensar, agir e manifestar sua realidade.
              </span>
            </ListItem>
            <ListItem>
              <span className="block font-extrabold mb-1">Escudo Energético</span>
              <span className="block font-medium text-[13px] sm:text-[14px] md:text-[15px] leading-snug opacity-80">
                Aprenda práticas simples para proteger sua energia e evitar influências negativas que drenam sua força mental e emocional.
              </span>
            </ListItem>
            <ListItem>
              <span className="block font-extrabold mb-1">Guia dos Símbolos de Poder</span>
              <span className="block font-medium text-[13px] sm:text-[14px] md:text-[15px] leading-snug opacity-80">
                Descubra o significado de símbolos antigos ligados à consciência, espiritualidade e conhecimento oculto.
              </span>
            </ListItem>
          </ul>
        </div>

        {/* CARTÃO DIREITO */}
        <div className="w-full md:w-[420px] rounded-[40px] bg-[#0b0510] overflow-hidden shadow-2xl relative shrink-0 border border-[#2e144a] flex flex-col">

          {/* Ambient Glow */}
          <div className="absolute bottom-[-10%] left-0 right-0 h-[40%] bg-[#c084fc] opacity-[0.15] blur-[80px] pointer-events-none" />

          {/* Header com Gradiente e Notch */}
          <div className="bg-gradient-to-b from-[#c084fc] via-[#4c1d95] to-[#0b0510] pt-12 pb-6 px-4 relative flex flex-col items-center shrink-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[22px] bg-[#120f16] rounded-b-[16px]" />

            {/* Contador */}
            <div className="flex items-center gap-3">
              <span className="text-white font-extrabold text-[13px] leading-[1.1] text-right">
                O preço vai<br />aumentar em:
              </span>
              <div className="flex items-center gap-1">
                <TimeBox value={days} label="DIAS" />
                <span className="text-black font-bold text-lg mb-3">:</span>
                <TimeBox value={hours} label="HRS" />
                <span className="text-black font-bold text-lg mb-3">:</span>
                <TimeBox value={minutes} label="MIN" />
                <span className="text-black font-bold text-lg mb-3">:</span>
                <TimeBox value={seconds} label="SEG" />
              </div>
            </div>
          </div>

          {/* Conteúdo Principal */}
          <div className="px-6 pb-10 flex-1 flex flex-col items-center relative z-10 w-full mt-2">

            {/* Logo */}
            <div className="mb-6 flex flex-col items-center w-full">
              <img
                src="/images/logo-sabedoria.png"
                alt="Livro da Sabedoria Oculta"
                className="w-[360px] max-w-[90%] object-contain"
              />
            </div>

            {/* Preço */}
            <div className="text-center w-full mt-2">
              <div className="text-white font-bold text-[20px] sm:text-[22px]">
                De: <span className="text-[#ff0000] line-through decoration-[3px]">R$ 197,00</span>
              </div>
              <div className="flex items-baseline justify-center mt-1">
                <span className="text-white text-[32px] sm:text-[40px] font-bold mr-1">R$</span>
                <span className="text-white text-[60px] sm:text-[78px] font-black tracking-tighter leading-none">37,00</span>
              </div>
            </div>

            <style>{`
              .shimmer-effect {
                position: relative;
                overflow: hidden;
              }
              .shimmer-effect::before {
                content: "";
                height: 100%;
                width: 100px;
                position: absolute;
                top: 0;
                left: -150px;
                opacity: 0;
                background: #ffffff;
                box-shadow: 0 0 30px 20px #ffffffaa;
                transform: skewX(-20deg);
                mix-blend-mode: plus-lighter;
                pointer-events: none;
                animation: brilho 3s linear infinite;
              }
              @keyframes brilho {
                0% { opacity: 0; left: -150px; }
                20% { opacity: 0.3; }
                50% { opacity: 0.5; left: 50%; }
                80% { opacity: 0.3; }
                100% { opacity: 0; left: 150%; }
              }
              @keyframes container-pointing {
                0% { transform: translateX(0px); }
                100% { transform: translateX(6px); }
              }
              .arrow-container {
                transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
              }
              .group:hover .arrow-container {
                animation: container-pointing 0.7s cubic-bezier(0.36, 0, 0.64, 1) infinite alternate;
                animation-delay: 0.4s;
              }
              .inner-button {
                background: radial-gradient(67.54% 100.03% at 50% 0%, #faf5ff 0%, #e9d5ff 25.48%, #c084fc 62.5%, #9333ea 100%);
                box-shadow: 0 5.98px 23.203px 0 rgba(147, 51, 234, 0.15), 0 14.352px 53.701px 0 rgba(147, 51, 234, 0.35);
                border: 1.196px solid rgba(255, 255, 255, 0.5);
              }
            `}</style>

            {/* Botão CTA */}
            <a
              href="https://pay.cakto.com.br/7exfjyy_807964"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[95%] mt-7 group cursor-pointer border bg-[#120f16] border-[#2e144a] gap-3 h-[68px] flex items-center p-[10px] rounded-full transition-all duration-500 hover:shadow-2xl hover:shadow-[#9333ea]/20 no-underline"
            >
              <span className="inner-button shimmer-effect flex-1 text-white cursor-pointer h-full rounded-full flex items-center justify-center text-[15px] sm:text-[16px] md:text-[18px] font-black tracking-tight transition-all duration-300 active:scale-95 active:translate-y-[1px]">
                COMPRAR AGORA!
              </span>
              <span className="arrow-container group-hover:ml-2 w-[48px] h-[48px] flex shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-[#1c1823] text-zinc-300 shadow-sm overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-700 ease-in-out group-hover:rotate-180 group-hover:text-[#c084fc]"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </a>

            {/* Ícones de Pagamento */}
            <PaymentLogos />

            {/* Texto de Escassez */}
            <div className="text-[#a88ebf] text-[13px] text-center mt-6 leading-tight">
              Mas você precisa agir agora porque este<br />
              preço <span className="border-b border-[#a88ebf] pb-[1px]">irá aumentar em breve...</span>
            </div>

            {/* Barra de Progresso */}
            <div className="w-[90%] mt-6 relative">
              <div className="w-full h-[10px] bg-[#251438] rounded-full overflow-hidden">
                <div className="w-[98%] h-full bg-gradient-to-r from-[#4c1d95] to-[#c084fc] rounded-full relative">
                  <div className="absolute right-0 top-0 bottom-0 w-12 bg-white/20 blur-[2px] rounded-full" />
                </div>
              </div>
              <div className="text-center text-white font-bold text-[11px] mt-2 tracking-wide">
                98% das vagas preenchidas
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .pricing-grid-bg::before {
          content: "";
          opacity: 0.3;
          background-color: transparent;
          background-image: linear-gradient(90deg, #d9d9d9, #d9d9d9 1px, transparent 1px, transparent 11px), 
                            linear-gradient(0deg, #d9d9d9, #d9d9d9 1px, transparent 1px, transparent 11px);
          background-size: 50px 50px;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }
        .pricing-grid-bg::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          background-image: radial-gradient(transparent 0%, #000 70%);
          width: 100%;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
};

export default PricingSection;
