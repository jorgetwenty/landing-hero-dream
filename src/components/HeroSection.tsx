import { useRef, useEffect } from "react";
import logo from "@/assets/logo.png";

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
          height: '120px',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.85) 80%, rgba(0,0,0,1) 100%)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
        }}
      />

      {/* Logo topo centro */}
      <div className="absolute top-8 left-0 right-0 flex justify-center z-10">
        <img src={logo} alt="Logo" className="h-10 md:h-14 w-auto" />
      </div>

      {/* Texto + Botão inferior esquerdo */}
      <div className="absolute bottom-12 md:bottom-16 left-6 md:left-16 z-10 max-w-xl">
        <h1
          className="text-white text-2xl md:text-4xl lg:text-[42px] leading-tight md:leading-[1.2] mb-8"
          style={{ fontFamily: "'SF Pro Display', 'Inter', sans-serif", fontWeight: 400 }}
        >
          Descubra os Códigos proibidos que despertam uma energia brutal dentro de você.
        </h1>

        <a
          href="https://checkout4.xgrow.com/pt/c573c0c6-f642-4a4a-ae09-3f2edd1c67e2/NzUyMzA="
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
        `}</style>
      </div>
    </section>
  );
};

export default HeroSection;
