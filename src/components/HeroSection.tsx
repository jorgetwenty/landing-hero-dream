import { useRef, useEffect } from "react";
import logo from "@/assets/logo.png";

const avatars = [
  { src: "https://i.postimg.cc/sXRBYx6r/attractive-young-man-is-relaxing-home.jpg", alt: "Aluno 1" },
  { src: "https://i.postimg.cc/k4dVQGj0/happy-successful-woman-posing-with-folded-arms.jpg", alt: "Aluna 2" },
  { src: "https://i.postimg.cc/fLh3cyH7/middle-aged-man-wearing-smiling-rusty-colored-background.jpg", alt: "Aluno 3" },
  { src: "https://i.postimg.cc/B6G8Tbhd/portrait-beautiful-woman.jpg", alt: "Aluna 4" },
  { src: "https://i.postimg.cc/Y9w460nM/vertical-view-handsome-man-sitting-chair-leaned-table-smiling-looking-camera-image-cozy-kitchen.jpg", alt: "Aluno 5" },
];

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
<video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero-video.webm"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay escuro para legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-[1]" />

      {/* Cinematic bottom fade overlay */}
      <div
        className="absolute bottom-0 left-0 w-full z-[2] pointer-events-none"
        style={{
          height: '140px',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.65) 75%, rgba(0,0,0,1) 100%)',
        }}
      />

      {/* Logo topo centro */}
      <div className="absolute top-8 left-0 right-0 flex justify-center z-10">
        <img src={logo} alt="Logo" className="h-10 md:h-14 w-auto" />
      </div>

      {/* Preço inferior direito com card glassmorphism */}
      <div className="absolute bottom-12 md:bottom-16 right-6 md:right-16 z-10 text-right">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 px-6 py-5 md:px-8 md:py-6" style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
          {/* Animated gradient shimmer */}
          <div className="absolute inset-0 opacity-30 pointer-events-none price-shimmer" />
          {/* Subtle purple glow border */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: 'inset 0 0 30px rgba(168,85,247,0.08), 0 0 40px rgba(168,85,247,0.1)' }} />
          <span className="relative text-white text-lg md:text-xl font-semibold line-through decoration-red-500 decoration-[3px]">DE R$97</span>
          <p className="relative text-white text-sm md:text-base font-semibold mt-2 tracking-widest uppercase">Por Apenas</p>
          <div className="relative flex items-baseline justify-end gap-1 mt-1">
            <span className="text-white text-3xl md:text-5xl font-bold">R$</span>
            <span className="text-white text-7xl md:text-9xl font-black tracking-tighter leading-none" style={{ fontFamily: "'SF Pro Display', 'Inter', sans-serif", textShadow: '0 0 40px rgba(168, 85, 247, 0.4)' }}>27</span>
          </div>
        </div>
      </div>

      <style>{`
        .price-shimmer {
          background: linear-gradient(
            105deg,
            transparent 20%,
            rgba(168, 85, 247, 0.15) 35%,
            rgba(216, 180, 254, 0.1) 50%,
            rgba(168, 85, 247, 0.15) 65%,
            transparent 80%
          );
          background-size: 200% 100%;
          animation: price-shimmer-move 3s ease-in-out infinite;
        }
        @keyframes price-shimmer-move {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>

      {/* Texto + Botão inferior esquerdo */}
      <div className="absolute bottom-12 md:bottom-16 left-6 md:left-16 z-10 max-w-xl">
        {/* Avatars de depoimento */}
        <div className="flex items-center mb-5">
          {avatars.map((avatar, i) => (
            <div key={i} className="imgg">
              <img src={avatar.src} alt={avatar.alt} className="w-10 h-10 md:w-12 md:h-12 object-cover" width="48" height="48" loading="lazy" />
            </div>
          ))}
          <span className="ml-6 text-white/70 text-sm font-medium whitespace-nowrap">+22000 alunos</span>
        </div>

        <h1
          className="text-white text-lg md:text-2xl lg:text-[28px] leading-snug md:leading-[1.2] mb-3 font-semibold"
          style={{ fontFamily: "'SF Pro Display', 'Inter', sans-serif" }}
        >
          Eles esconderam o maior poder da sua vida. Agora é sua chance de desbloquear.
        </h1>
        <p
          className="text-white text-sm md:text-[15px] lg:text-base leading-relaxed mb-8 max-w-lg font-normal"
          style={{ fontFamily: "'SF Pro Display', 'Inter', sans-serif" }}
        >
          Durante anos, te ensinaram a aceitar pouco… a viver limitado… a ser fraco. Mentiram. Existe uma energia dentro de você capaz de mudar seu corpo, sua mente e seu destino. E agora, você vai reativá-la.
        </p>

        <a
          href="https://pay.cakto.com.br/7exfjyy_807964"
          target="_blank"
          rel="noopener noreferrer"
          className="shiny-cta-hero"
        >
          <span>Quero começar</span>
        </a>

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

          .imgg {
            margin-right: -15px;
            transition: 0.5s ease all;
          }

          .imgg:hover {
            margin-left: 10px;
            filter: grayscale(100%);
          }

          .imgg img {
            border-radius: 200px;
            border: solid 1px rgba(255, 255, 255, 0.38);
            transition: 0.5s ease all;
          }
        `}</style>
      </div>
    </section>
  );
};

export default HeroSection;
