import testimonialDebora from "@/assets/testimonial-debora.png";
import testimonialAdriano from "@/assets/testimonial-adriano.png";
import testimonialMikael from "@/assets/testimonial-mikael.png";
import testimonialDoglas from "@/assets/testimonial-doglas.png";
import testimonialRayssa from "@/assets/testimonial-rayssa.png";

const testimonials = [
  testimonialDebora,
  testimonialAdriano,
  testimonialMikael,
  testimonialDoglas,
  testimonialRayssa,
];

const TestimonialsTicker = () => {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="w-full bg-black py-20 overflow-hidden">
      <h2 className="text-center text-2xl md:text-4xl font-bold text-foreground mb-12 px-6">
        Veja o que nossos alunos estão dizendo
      </h2>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex animate-ticker gap-6">
          {doubled.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[280px] md:w-[320px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={img}
                alt={`Depoimento ${(i % testimonials.length) + 1}`}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsTicker;
