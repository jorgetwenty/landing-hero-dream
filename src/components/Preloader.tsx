import { useEffect, useState } from "react";
import logo from "@/assets/logo-branca.webp";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 100);
    const t2 = setTimeout(() => setPhase("exit"), 2400);
    const t3 = setTimeout(onComplete, 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-600 ${
        phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Orbital rings */}
      <div className="absolute w-48 h-48 md:w-64 md:h-64">
        <div
          className={`absolute inset-0 rounded-full border border-purple-500/30 transition-all duration-1000 ${
            phase === "enter" ? "scale-0 opacity-0" : "scale-100 opacity-100"
          }`}
          style={{ animation: "preloader-orbit 3s linear infinite" }}
        />
        <div
          className={`absolute inset-[-16px] rounded-full border border-purple-400/20 transition-all duration-1000 delay-200 ${
            phase === "enter" ? "scale-0 opacity-0" : "scale-100 opacity-100"
          }`}
          style={{ animation: "preloader-orbit 4s linear infinite reverse" }}
        />
        <div
          className={`absolute inset-[-32px] rounded-full border border-purple-300/10 transition-all duration-1000 delay-300 ${
            phase === "enter" ? "scale-0 opacity-0" : "scale-100 opacity-100"
          }`}
          style={{ animation: "preloader-orbit 5s linear infinite" }}
        />
      </div>

      {/* Glowing particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-1.5 h-1.5 rounded-full bg-purple-400 transition-opacity duration-700 ${
            phase === "enter" ? "opacity-0" : "opacity-100"
          }`}
          style={{
            animation: `preloader-particle-${i} 2.5s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      {/* Logo with reveal */}
      <div className="relative z-10">
        {/* Glow behind logo */}
        <div
          className={`absolute inset-0 blur-3xl bg-purple-600/40 rounded-full scale-150 transition-opacity duration-1000 ${
            phase === "enter" ? "opacity-0" : "opacity-60"
          }`}
        />

        {/* Logo with clip-path reveal */}
        <img
          src={logo}
          alt="Logo"
          className={`relative h-8 md:h-12 w-auto transition-all duration-1000 ${
            phase === "enter"
              ? "opacity-0 scale-75 blur-sm"
              : phase === "exit"
              ? "opacity-0 scale-110 blur-sm"
              : "opacity-100 scale-100 blur-0"
          }`}
          style={{
            filter:
              phase === "hold"
                ? "drop-shadow(0 0 20px rgba(168,85,247,0.6)) drop-shadow(0 0 40px rgba(168,85,247,0.3))"
                : "none",
          }}
        />
      </div>

      {/* Scan line */}
      <div
        className={`absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent transition-opacity duration-500 ${
          phase === "hold" ? "opacity-100" : "opacity-0"
        }`}
        style={{ animation: "preloader-scan 2s ease-in-out infinite" }}
      />

      <style>{`
        @keyframes preloader-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes preloader-scan {
          0%, 100% { top: 30%; }
          50% { top: 70%; }
        }

        ${[...Array(6)]
          .map(
            (_, i) => `
          @keyframes preloader-particle-${i} {
            0%, 100% {
              transform: translate(${Math.cos((i * Math.PI) / 3) * 80}px, ${Math.sin((i * Math.PI) / 3) * 80}px) scale(0.5);
              opacity: 0.3;
            }
            50% {
              transform: translate(${Math.cos((i * Math.PI) / 3) * 120}px, ${Math.sin((i * Math.PI) / 3) * 120}px) scale(1);
              opacity: 1;
            }
          }
        `
          )
          .join("")}
      `}</style>
    </div>
  );
};

export default Preloader;
