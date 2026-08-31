import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { whatsappLink } from "@/lib/whatsapp";
import biomundoLogo from "@/assets/biomundo-logo.png.asset.json";
import heroVideo from "@/assets/biomundo.mp4.asset.json";
import heroBg from "@/assets/hero-proteina.png.asset.json";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.18, duration: 0.6, ease: "easeOut" as const },
  }),
};

const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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

      {/* Conteúdo — headline, subheadline e CTA */}
<div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-10 text-center md:px-14 md:pb-16 md:text-left">
        <div className="mx-auto max-w-2xl md:mx-0">
          <motion.h1
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-hero text-3xl font-bold uppercase leading-[1.05] text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.6),0_2px_10px_rgba(0,0,0,0.35)] sm:text-4xl md:text-5xl"
          >
            O QUE VOCÊ <span className="text-[#4ADE80] [text-shadow:0_1px_3px_rgba(0,0,0,0.6),0_2px_10px_rgba(0,0,0,0.35)]">GOSTA</span>, DO JEITO QUE VOCÊ PROCURA.
          </motion.h1>
          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-3 max-w-md font-sans text-sm font-normal leading-relaxed text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.6),0_2px_10px_rgba(0,0,0,0.35)] md:mt-4 md:text-base"
          >
            Produtos naturais, sem açúcar e sem glúten. Para quem não abre mão do sabor.
          </motion.p>
          <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUp} className="mt-5 flex justify-center md:mt-7 md:justify-start">
            <button onClick={scrollToProducts} className="nb-btn !px-8 !py-3 !text-sm">
              Quero descobrir
            </button>
          </motion.div>
        </div>
      </div>

      {/* Logo de branding abaixo da navbar, centralizada e destacada */}
      <div className="pointer-events-none absolute inset-x-0 top-[26px] z-20 flex flex-col items-center justify-center px-6 md:top-[34px]">
        <motion.img
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
          src={biomundoLogo.url}
          alt="Biomundo ParkShopping"
          className="h-auto w-full max-w-[300px] drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)] md:max-w-[420px]"
        />
      </div>



      <Navbar />
    </section>
  );
};

export default HeroSection;