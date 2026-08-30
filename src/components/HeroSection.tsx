import heroVideo from "@/assets/biomundo.mp4.asset.json";
import heroBg from "@/assets/hero-proteina.png.asset.json";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative h-screen min-h-[560px] w-full overflow-hidden rounded-b-xl md:rounded-b-2xl">
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
    </section>
  );
};

export default HeroSection;
