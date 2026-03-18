import { useEffect, useState } from "react";
import logo from "@/assets/logo-branca-2.webp";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [logoReady, setLogoReady] = useState(false);

  // Wait for logo to load before starting animation
  useEffect(() => {
    const img = new Image();
    img.src = logo;
    if (img.complete) {
      setLogoReady(true);
    } else {
      img.onload = () => setLogoReady(true);
      img.onerror = () => setLogoReady(true); // proceed anyway
    }
  }, []);

  useEffect(() => {
    if (!logoReady) return;

    const duration = 2600;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));

      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setExiting(true), 200);
        setTimeout(onComplete, 800);
      }
    };

    requestAnimationFrame(tick);
  }, [onComplete, logoReady]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500 ${
        exiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="w-[280px] sm:w-[360px] flex flex-col items-center gap-6">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-8 md:h-10 w-auto" fetchPriority="high" />

        <div className="w-full flex items-center gap-5">
        {/* Bar container */}
        <div className="flex-1 h-[3px] bg-white/10 rounded-full overflow-hidden relative">
          {/* Glow under bar */}
          <div
            className="absolute top-0 left-0 h-full rounded-full blur-sm"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #7B2FBE, #9D4EDD, #C084FC)",
              transition: "width 80ms linear",
            }}
          />
          {/* Actual bar */}
          <div
            className="absolute top-0 left-0 h-full rounded-full"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #7B2FBE, #9D4EDD, #C084FC)",
              transition: "width 80ms linear",
            }}
          />
        </div>

        {/* Percentage */}
        <span
          className="text-white/90 text-sm font-mono tabular-nums w-[3ch] text-right"
          style={{ fontFeatureSettings: "'tnum'" }}
        >
          {progress}
        </span>
        <span className="text-white/40 text-sm font-mono -ml-4">%</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
