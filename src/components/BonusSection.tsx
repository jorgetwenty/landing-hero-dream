const col1Images = [
  "https://i.postimg.cc/5tcPc57S/Instagram-post-1.png",
  "https://i.postimg.cc/zfmdmwtS/Instagram-post-2.png",
  "https://i.postimg.cc/HLGSG0Zt/Instagram-post-3.png",
  "https://i.postimg.cc/CKyvyCP8/Instagram-post-4.png",
  "https://i.postimg.cc/q7fmfcbL/Instagram-post-5.png",
];

const col2Images = [
  "https://i.postimg.cc/HLGSG0Zt/Instagram-post-3.png",
  "https://i.postimg.cc/CKyvyCP8/Instagram-post-4.png",
  "https://i.postimg.cc/q7fmfcbL/Instagram-post-5.png",
  "https://i.postimg.cc/5tcPc57S/Instagram-post-1.png",
  "https://i.postimg.cc/zfmdmwtS/Instagram-post-2.png",
];

const BonusSection = () => {
  return (
    <section className="bg-black text-foreground overflow-hidden">
      <div className="min-h-[734px] flex flex-col md:flex-row justify-center lg:justify-between items-center max-w-[1400px] mx-auto px-6 py-16 md:py-10 md:pl-[5vw] xl:pr-12 gap-12 md:gap-8">
        {/* Text Column */}
        <div className="w-full md:max-w-[517px] text-left z-10 flex-shrink-0">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-[30px] md:mb-[45px] leading-[1.1] tracking-tight font-hero">
            Bônus <span className="text-[#9D4EDD]">Exclusivos</span>
          </h2>
          <p className="text-foreground text-lg md:text-[19px] leading-relaxed">
            Você também desbloqueia ferramentas secretas de ativação mental e energética, usadas para acelerar o despertar da consciência e potencializar os ensinamentos do livro.
            <br /><br />
            Esses materiais foram criados para aprofundar sua transformação e ativar códigos internos que a maioria das pessoas nunca acessa.
          </p>
        </div>

        {/* Desktop: Two animated columns */}
        <div className="hidden md:flex flex-row gap-5 items-start justify-center w-full max-w-[677px] h-[719px] bonus-mask-vertical overflow-hidden">
          {/* Column 1: Scroll Up */}
          <div className="w-[250px] flex-shrink-0">
            <div className="bonus-scroll-up flex flex-col gap-5 pb-5 w-full">
              {[...col1Images, ...col1Images].map((src, i) => (
                <img key={i} src={src} alt={`Bônus ${(i % 5) + 1}`} className="w-full rounded-2xl shadow-xl object-cover" loading="lazy" />
              ))}
            </div>
          </div>
          {/* Column 2: Scroll Down */}
          <div className="w-[250px] flex-shrink-0">
            <div className="bonus-scroll-down flex flex-col gap-5 pb-5 w-full">
              {[...col2Images, ...col2Images].map((src, i) => (
                <img key={i} src={src} alt={`Bônus ${(i % 5) + 1}`} className="w-full rounded-2xl shadow-xl object-cover" loading="lazy" />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="md:hidden w-full h-[300px] mt-8 bonus-mask-horizontal overflow-hidden relative">
          <div className="bonus-scroll-left flex flex-row gap-4 pr-4 absolute top-0 left-0 h-full w-max">
            {[...col1Images, ...col1Images].map((src, i) => (
              <div key={i} className="w-[200px] flex-shrink-0 h-full">
                <img src={src} alt={`Bônus ${(i % 5) + 1}`} className="w-full h-full object-cover rounded-xl shadow-lg" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .bonus-mask-vertical {
          -webkit-mask-image: linear-gradient(transparent, black 15%, black 85%, transparent 100%);
          mask-image: linear-gradient(transparent, black 15%, black 85%, transparent 100%);
        }
        .bonus-mask-horizontal {
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent 100%);
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent 100%);
        }
        @keyframes bonus-scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes bonus-scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        @keyframes bonus-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .bonus-scroll-up { animation: bonus-scroll-up 10s linear infinite; }
        .bonus-scroll-down { animation: bonus-scroll-down 12s linear infinite; }
        .bonus-scroll-left { animation: bonus-scroll-left 15s linear infinite; }
      `}</style>
    </section>
  );
};

export default BonusSection;
