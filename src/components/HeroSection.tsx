import heroVideo from "@/assets/video-hero.mp4.asset.json";

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
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src={heroVideo.url} type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 flex h-full items-end pb-14 md:pb-24">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-10">
          <p className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-[hsl(var(--hero-subtitle))] md:text-sm">
            Sua rotina merece mais
          </p>
<h1 className="font-hero max-w-2xl text-5xl font-black uppercase leading-[1.02] text-[hsl(var(--hero-text))] md:text-7xl">
            Prazer e <span className="text-[#4ADE80]">saúde</span> na sua rotina
          </h1>
          <p className="mt-4 max-w-xl font-sans text-sm leading-relaxed text-[hsl(var(--hero-subtitle))] md:text-lg">
            Somos uma loja que está no mercado há mais de [XX] anos, vendendo para
            quem quer unir prazer e saúde no dia a dia.
          </p>
          <a
            href="#sobre"
            className="mt-8 inline-block border-2 border-neutral-900 bg-[#4ADE80] px-8 py-4 font-sans text-base font-bold uppercase tracking-wide text-neutral-900 shadow-[4px_4px_0_0_#1c1917] transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#1c1917] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_0_#1c1917] md:text-lg"
          >
            Quero começar
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
