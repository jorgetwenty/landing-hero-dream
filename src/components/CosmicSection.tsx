import cosmicBg from "@/assets/cosmic-bg.webp";
import meditationImg from "@/assets/meditation.png";

const CosmicSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={cosmicBg}
          alt="Cosmic background"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <img
          src={meditationImg}
          alt="Meditação"
          className="w-64 md:w-80 lg:w-96 mb-10 drop-shadow-2xl"
        />
        <div className="border-2 border-dashed border-red-600 px-6 md:px-16 py-8 max-w-3xl">
          <p className="text-white text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed">
            Você pediu sinais. Eles apareceram.
            <br />
            Agora é com você, age como um buscador verdadeiro ou volta pra estagnação de sempre?
          </p>
        </div>
        <h2 className="text-yellow-400 text-2xl md:text-3xl lg:text-4xl font-black mt-10 underline underline-offset-8">
          A ESCOLHA É SUA..
        </h2>
      </div>
    </section>
  );
};

export default CosmicSection;
