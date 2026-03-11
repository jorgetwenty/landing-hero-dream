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

        <button
          className="hero-btn relative inline-flex items-center justify-center overflow-hidden cursor-pointer text-white font-semibold text-lg md:text-[21px] rounded-[15.623px] px-[50px] py-[20px] min-w-[220px] transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.02] hover:brightness-110 active:scale-95 border-none"
          style={{
            background: "radial-gradient(67.54% 100.03% at 50% 0%, #E8D5FF 0%, #C9A0FF 25.48%, #8A2BE2 62.5%, #4A0E8F 100%)",
            boxShadow: "0 5.98px 23.203px 0 rgba(138, 43, 226, 0.20), 0 14.352px 53.701px 0 rgba(138, 43, 226, 0.50)",
            fontFamily: "'Sora', 'Inter', sans-serif",
          }}
        >
          <span className="inline-block transition-transform duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hero-btn-text">
            Quero começar
          </span>
        </button>
      </div>

      <style>{`
        .hero-btn::after {
          content: "Boa escolha...";
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateY(100%);
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          pointer-events: none;
          z-index: 2;
          font-family: 'Sora', 'Inter', sans-serif;
          font-weight: 600;
        }
        .hero-btn:hover .hero-btn-text {
          transform: translateY(-250%);
        }
        .hero-btn:hover::after {
          transform: translateY(0%);
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
