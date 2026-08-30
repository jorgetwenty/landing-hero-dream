import heroVideo from "@/assets/biomundo.mp4.asset.json";
import heroBg from "@/assets/hero-proteina.png.asset.json";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[560px] w-full overflow-hidden rounded-b-xl md:rounded-b-2xl">
      {/* Background video — sem gradiente, imagem vívida */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={heroBg.url}
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
<source src={heroVideo.url} type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 flex h-full items-end pb-12 md:pb-20">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-10">
<p className="mb-2.5 font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-[hsl(var(--hero-subtitle))] md:text-xs">
            Sua rotina merece mais
          </p>
<h1 className="font-hero max-w-2xl text-4xl font-bold uppercase leading-[1.02] text-[hsl(var(--hero-text))] md:text-6xl">
            Prazer e <span className="text-[#4ADE80]">saúde</span> na sua rotina
          </h1>
          <p className="mt-3 max-w-xl font-sans text-xs font-medium leading-relaxed text-[hsl(var(--hero-subtitle))] md:text-sm">
            Somos uma loja que está no mercado há mais de [XX] anos, vendendo para
            quem quer unir prazer e saúde no dia a dia.
          </p>
          <a
            href="#sobre"
            className="nb-btn mt-5 font-sans"
          >
            Quero começar
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
