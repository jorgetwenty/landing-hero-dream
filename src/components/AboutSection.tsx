import aboutVideo from "@/assets/loja-video.mp4.asset.json";
import AnimatedCheck from "@/components/AnimatedCheck";

const highlights = [
  "Produtos selecionados por quem entende",
  "Qualidade que cabe na sua rotina",
  "Atendimento próximo e humanizado",
];

const AboutSection = () => {
  return (
<section id="sobre" className="bg-background pt-16 pb-10 md:pt-24 md:pb-20">
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
              className="h-auto w-full max-w-sm rounded-3xl border-2 border-neutral-900 object-cover shadow-[6px_6px_0_0_#1c1917] md:aspect-[4/5] md:w-full"
            >
              <source src={aboutVideo.url} type="video/mp4" />
            </video>
          </div>

          {/* Texto — embaixo no mobile, direita no desktop */}
          <div className="order-2 md:order-none">
            <p className="mb-4 font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-[#16A34A] md:text-xs">
              Sobre a nossa loja
            </p>
            <h2 className="font-hero text-4xl font-bold uppercase leading-[1.02] text-neutral-900 md:text-5xl">
              Prazer e <span className="text-[#16A34A]">saúde</span> na sua rotina
            </h2>
<p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-neutral-600 md:text-base">
              Somos uma loja que está no mercado há mais de [XX] anos, vendendo para
              quem quer unir prazer e saúde no dia a dia.
            </p>
            <ul className="mt-6 space-y-2.5">
              {highlights.map((item, index) => (
                <li key={item} className="flex items-center gap-3 font-sans font-semibold text-neutral-800">
                  <AnimatedCheck delay={index * 350} size={26} />
                  <span className="text-xs md:text-sm">{item}</span>
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
