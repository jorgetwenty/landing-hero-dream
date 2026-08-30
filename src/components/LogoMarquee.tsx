import integralmedica from "@/assets/logos/integralmedica.png.asset.json";
import puravida from "@/assets/logos/puravida.png.asset.json";
import caffeineArmy from "@/assets/logos/caffeine-army.png.asset.json";
import essential from "@/assets/logos/essential.png.asset.json";
import vitafor from "@/assets/logos/vitafor.png.asset.json";
import pacco from "@/assets/logos/pacco.png.asset.json";
import bold from "@/assets/logos/bold.png.asset.json";
import flormel from "@/assets/logos/flormel.png.asset.json";

const logos = [
  { src: integralmedica.url, alt: "Integralmédica" },
  { src: puravida.url, alt: "Pura Vida" },
  { src: caffeineArmy.url, alt: "Caffeine Army" },
  { src: essential.url, alt: "Essential Nutrition" },
  { src: vitafor.url, alt: "Vitafor" },
  { src: pacco.url, alt: "Pacco" },
  { src: bold.url, alt: "Bold" },
  { src: flormel.url, alt: "Flormel" },
];

const LogoMarquee = () => {
  return (
    <section aria-label="Marcas parceiras" className="overflow-hidden border-b border-neutral-900/10 bg-background py-5 md:py-6">
      <div className="marquee flex w-max items-center gap-12 md:gap-16">
        {[...logos, ...logos].map((logo, i) => (
          <img
            key={`${logo.alt}-${i}`}
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            className="h-7 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:h-9"
          />
        ))}
      </div>
    </section>
  );
};

export default LogoMarquee;
