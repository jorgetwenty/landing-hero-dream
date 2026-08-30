import { useEffect, useRef, useState } from "react";

interface AnimatedCheckProps {
  /** Atraso em ms para escalonar vários checks */
  delay?: number;
  /** Tamanho em px */
  size?: number;
}

/**
 * Check animado com "explosão" de partículas.
 * Dispara automaticamente quando entra na viewport (desktop e mobile).
 */
const AnimatedCheck = ({ delay = 0, size = 44 }: AnimatedCheckProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeout: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timeout = setTimeout(() => setActive(true), delay);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timeout) clearTimeout(timeout);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`animated-check shrink-0 ${active ? "is-active" : ""}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg className="ac-check" viewBox="0 0 64 64">
        <g transform="translate(32,32)">
          {/* Raios da explosão */}
          <g strokeLinecap="round" strokeWidth={3}>
            <polyline
              className="ac-stroke ac-stroke--1"
              stroke="#16A34A"
              points="-30 -30,-42 -42"
              strokeDasharray="17 17"
              strokeDashoffset="17"
            />
            <polyline
              className="ac-stroke ac-stroke--2"
              stroke="#4ADE80"
              points="38 -38,54 -54"
              strokeDasharray="22.63 22.63"
              strokeDashoffset="22.63"
            />
            <polyline
              className="ac-stroke ac-stroke--3"
              stroke="#22C55E"
              points="-28 28,-40 40"
              strokeDasharray="17 17"
              strokeDashoffset="17"
            />
            <polyline
              className="ac-stroke ac-stroke--4"
              stroke="#86EFAC"
              points="32 32,44 44"
              strokeDasharray="17 17"
              strokeDashoffset="17"
            />
          </g>

          {/* Partículas */}
          <g>
            <circle className="ac-move ac-move--1" fill="#22C55E" r="3" cx="4" cy="-44" opacity="0" />
            <circle className="ac-move ac-move--2" fill="#16A34A" r="3" cx="-44" cy="-8" opacity="0" />
            <circle className="ac-move ac-move--3" fill="#4ADE80" r="3" cx="52" cy="12" opacity="0" />
            <circle className="ac-move ac-move--4" fill="#86EFAC" r="2" cx="-2" cy="40" opacity="0" />
            <circle className="ac-move ac-move--5" fill="#16A34A" r="3" cx="-12" cy="46" opacity="0" />
          </g>

          {/* Contorno que some */}
          <g className="ac-scale-out" fill="none" stroke="#A7C4B5" strokeWidth={2}>
            <circle r="30" />
            <polygon points="-10 -4,-16 2,-4 14,16 -6,10 -12,-4 2" />
          </g>

          {/* Círculo verde + check que aparecem */}
          <g className="ac-fade" opacity="0">
            <circle className="ac-scale-in ac-scale-in--1" fill="#DCFCE7" r="30.9" />
            <circle className="ac-scale-in ac-scale-in--2" fill="#22C55E" r="31" />
            <polygon
              className="ac-scale-in ac-scale-in--3"
              fill="#ffffff"
              stroke="#22C55E"
              strokeWidth={2}
              points="-10 -4,-16 2,-4 14,16 -6,10 -12,-4 2"
            />
          </g>
        </g>
      </svg>

      <style>{`
        .animated-check {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .animated-check .ac-check {
          overflow: visible;
          width: 100%;
          height: auto;
        }
        .animated-check .ac-move,
        .animated-check .ac-scale-in,
        .animated-check .ac-scale-out,
        .animated-check .ac-stroke {
          animation-duration: 1s;
          animation-timing-function: cubic-bezier(0.37, 0, 0.63, 1);
          animation-fill-mode: forwards;
        }
        .animated-check .ac-fade {
          transition: opacity 0.3s;
        }
        .animated-check .ac-move {
          animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1);
        }

        .animated-check.is-active .ac-fade { opacity: 1; transition-duration: 0s; }
        .animated-check.is-active .ac-move--1 { animation-name: ac-move1; }
        .animated-check.is-active .ac-move--2 { animation-name: ac-move2; }
        .animated-check.is-active .ac-move--3 { animation-name: ac-move3; }
        .animated-check.is-active .ac-move--4 { animation-name: ac-move4; }
        .animated-check.is-active .ac-move--5 { animation-name: ac-move5; }
        .animated-check.is-active .ac-scale-in { transform: scale(1); }
        .animated-check.is-active .ac-scale-in--1 { animation-name: ac-scale-in1; }
        .animated-check.is-active .ac-scale-in--2 { animation-name: ac-scale-in2; }
        .animated-check.is-active .ac-scale-in--3 { animation-name: ac-scale-in3; }
        .animated-check.is-active .ac-scale-out { animation-name: ac-scale-out; }
        .animated-check.is-active .ac-stroke--1 { animation-name: ac-stroke1; }
        .animated-check.is-active .ac-stroke--2 { animation-name: ac-stroke2; }
        .animated-check.is-active .ac-stroke--3 { animation-name: ac-stroke3; }
        .animated-check.is-active .ac-stroke--4 { animation-name: ac-stroke4; }

        @keyframes ac-move1 {
          from { animation-timing-function: steps(1, end); opacity: 0; transform: translate(0, 16px); }
          31% { opacity: 1; transform: translate(0, 16px); }
          75% { opacity: 1; transform: translate(0, 0); }
          92.75%, to { opacity: 0; transform: translate(0, 0); }
        }
        @keyframes ac-move2 {
          from { animation-timing-function: steps(1, end); opacity: 0; transform: translate(22px, 0); }
          35.25% { opacity: 1; transform: translate(22px, 0); }
          75% { opacity: 1; transform: translate(0, 0); }
          92.75%, to { opacity: 0; transform: translate(0, 0); }
        }
        @keyframes ac-move3 {
          from { animation-timing-function: steps(1, end); opacity: 0; transform: translate(-27px, 0); }
          44% { opacity: 1; transform: translate(-27px, 0); }
          82.25% { opacity: 1; transform: translate(0, 0); }
          to { opacity: 0; transform: translate(0, 0); }
        }
        @keyframes ac-move4 {
          from { animation-timing-function: steps(1, end); opacity: 0; transform: translate(0, -11px); }
          44% { opacity: 1; transform: translate(0, -11px); }
          82.25% { opacity: 1; transform: translate(0, 0); }
          to { opacity: 0; transform: translate(0, 0); }
        }
        @keyframes ac-move5 {
          from { animation-timing-function: steps(1, end); opacity: 0; transform: translate(0, -23px); }
          22% { opacity: 1; transform: translate(0, -23px); }
          61.75% { opacity: 1; transform: translate(0, 0); }
          79.5%, to { opacity: 0; transform: translate(0, 0); }
        }
        @keyframes ac-scale-in1 {
          from { transform: scale(0); }
          26.5%, to { transform: scale(1); }
        }
        @keyframes ac-scale-in2 {
          from, 13.25% { transform: scale(0); }
          44% { transform: scale(1.05); }
          48.5%, to { transform: scale(1); }
        }
        @keyframes ac-scale-in3 {
          from, 35.25% { transform: scale(0); }
          66.25% { transform: scale(1.05); }
          70.5%, to { transform: scale(1); }
        }
        @keyframes ac-scale-out {
          from { transform: scale(1); }
          31%, to { transform: scale(0); }
        }
        @keyframes ac-stroke1 {
          from, 20.5% { stroke-dashoffset: 17; }
          41% { stroke-dashoffset: 0; }
          61.75%, to { stroke-dashoffset: -17; }
        }
        @keyframes ac-stroke2 {
          from, 29.5% { stroke-dashoffset: 22.63; }
          50% { stroke-dashoffset: 0; }
          70.5%, to { stroke-dashoffset: -22.63; }
        }
        @keyframes ac-stroke3 {
          from, 38% { stroke-dashoffset: 17; }
          58.75% { stroke-dashoffset: 0; }
          79.5%, to { stroke-dashoffset: -17; }
        }
        @keyframes ac-stroke4 {
          from, 22% { stroke-dashoffset: 17; }
          42.75% { stroke-dashoffset: 0; }
          63.25%, to { stroke-dashoffset: -17; }
        }
      `}</style>
    </div>
  );
};

export default AnimatedCheck;
