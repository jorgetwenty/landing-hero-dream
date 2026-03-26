import { FC, useEffect, useRef } from 'react';

const MacbookReveal: FC = () => {
  const macbookRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const abreFechaMac = () => {
      const scope = macbookRef.current;
      if (!scope) return;
      const telamac = scope.querySelector('.tela img') as HTMLImageElement | null;
      const carrosseltela = scope.querySelector('.carrosseltela') as HTMLDivElement | null;
      if (!telamac || !carrosseltela) return;
      const alturaGatilho = window.innerHeight * 0.8;
      const topoTela = telamac.getBoundingClientRect();
      if (topoTela.top <= alturaGatilho) {
        telamac.classList.add('telaaberta');
        carrosseltela.classList.add('carrosseltelavisivel');
      } else {
        telamac.classList.remove('telaaberta');
        carrosseltela.classList.remove('carrosseltelavisivel');
      }
    };
    window.addEventListener('scroll', abreFechaMac, { passive: true });
    abreFechaMac();
    return () => window.removeEventListener('scroll', abreFechaMac);
  }, []);

  return (
    <section ref={macbookRef} className="bg-white macbook-section w-full relative z-10">
      <div className="macbook-wrapper">
        <div className="carrosseltela">
          <img src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1000&auto=format&fit=crop" alt="Conteúdo da Tela" loading="lazy" />
        </div>
        <div className="tela">
          <img src="https://i.postimg.cc/brwPBW6q/Group-1-9.png" alt="Tela do MacBook" loading="lazy" />
        </div>
        <div className="base">
          <img src="https://i.postimg.cc/wvVHFgQm/inferior-macbook-1-1-2.png" alt="Base do MacBook" loading="lazy" />
        </div>
      </div>
      <style>{`
        .macbook-section { display:flex; justify-content:center; align-items:center; padding:2rem 0; }
        .macbook-wrapper { position:relative; width:100%; max-width:1000px; aspect-ratio:16/9; --macbook-group-top:50%; }
        .base,.tela,.carrosseltela { position:absolute; top:var(--macbook-group-top); left:50%; transform:translateX(-50%) translateY(-50%); pointer-events:none; transition:all 0.7s ease; }
        .base { z-index:3; width:80%; margin-top:10%; }
        .tela { z-index:2; width:72%; margin-top:-12%; }
        .carrosseltela { z-index:1; width:55%; margin-top:-15.5%; opacity:0; filter:blur(10px); }
        .base img,.tela img,.carrosseltela img { width:100%; display:block; }
        .tela img { transform:perspective(2800px) translateX(0%) translateY(-5%) rotateX(-90deg) translateZ(0); transform-origin:center bottom; transition:all 0.7s ease; }
        .tela img.telaaberta { transform:perspective(2800px) translateX(0%) translateY(0%) rotateX(0deg) translateZ(0); }
        .carrosseltela.carrosseltelavisivel { opacity:1; filter:blur(0px); }
        .carrosseltela img { border-radius:8px 8px 0 0; }
        @media(max-width:1024px){ .base{width:90%} .tela{width:82%;margin-top:-14%} .carrosseltela{width:62.5%;margin-top:-17.5%} }
        @media(max-width:768px){ .base{width:100%} .tela{width:90%;margin-top:-15%} .carrosseltela{width:68.5%;margin-top:-18.5%} }
      `}</style>
    </section>
  );
};

export default MacbookReveal;
