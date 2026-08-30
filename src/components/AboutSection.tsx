import aboutVideo from "@/assets/loja-video.mp4.asset.json";
import AnimatedCheck from "@/components/AnimatedCheck";

const highlights = [
  "Produtos selecionados por quem entende",
  "Qualidade que cabe na sua rotina",
  "Atendimento próximo e humanizado",
];

const AboutSection = () => {
  return (
    <section id="sobre" className="bg-background py-16 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Video — primeiro no mobile, esquerda no desktop */}
          <div className="order-1 flex justify-center md:order-none">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-auto w-full max-w-sm rounded-3xl border-2 border-neutral-900 shadow-[6px_6px_0_0_#1c1917] md:max-h-[620px] md:w-auto md:max-w-none"
            >
              <source src={aboutVideo.url} type="video/mp4" />
            </video>
          </div>

          {/* Texto — embaixo no mobile, direita no desktop */}
          <div className="order-2 md:order-none">
            <p className="mb-4 font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-[#16A34A] md:text-xs">
              Sobre a nossa loja
            </p>
            <h2 className="font-hero text-4xl font-black uppercase leading-[1.02] text-neutral-900 md:text-5xl">
              Prazer e <span className="texto-gradiente">saúde</span> na sua rotina
            </h2>
            <p className="mt-5 font-sans leading-relaxed text-neutral-600">
              Somos uma loja que está no mercado há mais de [XX] anos. Durante todo
              esse tempo, aprendemos uma coisa: cuidar de si não precisa ser um
              sacrifício — e prazer também não deveria vir acompanhado de culpa.
            </p>
            <p className="mt-4 font-sans leading-relaxed text-neutral-600">
              Vendemos para pessoas que querem juntar prazer e saúde na sua rotina:
              produtos selecionados, sabor de verdade e uma experiência pensada para
              o seu bem-estar, do primeiro clique até a sua porta. [texto mockado]
            </p>
            <ul className="mt-7 space-y-4">
              {highlights.map((item, index) => (
                <li key={item} className="flex items-center gap-4 font-sans font-semibold text-neutral-800">
                  <AnimatedCheck delay={index * 350} size={40} />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
