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
          Descubra os Códigos proibidos que despertam uma energia brutal dentro de você capaz de mudar seu corpo, sua mente e seu destino em poucos dias.
        </h1>

        <button
          className="group cursor-pointer font-bold transition-all duration-200 px-5 py-2.5 rounded-full border border-transparent flex items-center text-[15px] outline-none active:scale-95"
          style={{
            background: "linear-gradient(135deg, #8a2be2, #6a1bb4)",
            color: "#fff",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "linear-gradient(135deg, #9b3ff3, #7b2cc5)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "linear-gradient(135deg, #8a2be2, #6a1bb4)")}
        >
          <span>QUERO COMEÇAR AGORA</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 74 74"
            height="34"
            width="34"
            className="ml-2.5 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
          >
            <circle strokeWidth="3" stroke="white" r="35.5" cy="37" cx="37" />
            <path
              fill="white"
              d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
