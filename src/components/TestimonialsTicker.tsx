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
    <section className="w-full bg-white py-20 overflow-hidden">
      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-12 sm:mb-20 max-w-3xl mx-auto leading-tight">
        Veja o que <span className="text-[#9D4EDD]">nossos alunos</span> estão dizendo
      </h2>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

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
