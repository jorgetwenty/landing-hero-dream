import cosmicBg from "@/assets/cosmic-bg.webp";

const CosmicSection = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={cosmicBg}
          alt="Cosmic background"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Conteúdo será adicionado depois */}
      </div>
    </section>
  );
};

export default CosmicSection;
