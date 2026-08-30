import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

const DEPOIMENTO_1 =
  "https://eynifdmidipyhvdwmfes.supabase.co/storage/v1/object/public/video%20de%20depoimento%20biomundo/primeiro%20video%20de%20depoimento.mp4";
const DEPOIMENTO_2 =
  "https://eynifdmidipyhvdwmfes.supabase.co/storage/v1/object/public/video%20de%20depoimento%20biomundo/segundo%20video%20de%20depoimento%20biomundo.mp4";

const testimonials = [
  { name: "Débora M.", role: "Cliente há 2 anos", quote: "Achei tudo que eu procurava sem açúcar em um lugar só.", video: DEPOIMENTO_1 },
  { name: "Mikael S.", role: "Treina 5x na semana", quote: "O cashback fez eu voltar a comprar toda semana.", video: DEPOIMENTO_2 },
  { name: "Rayssa L.", role: "Cliente desde 2024", quote: "Sabor de sobremesa e ainda encaixa na dieta.", video: DEPOIMENTO_1 },
];

const VideoCard = ({ t }: { t: (typeof testimonials)[number] }) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.muted = false;
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <article className="overflow-hidden rounded-xl border border-neutral-900/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-14px_rgba(28,25,23,0.25)]">
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? `Pausar depoimento de ${t.name}` : `Assistir depoimento de ${t.name}`}
        className="group relative block aspect-[9/16] w-full overflow-hidden bg-neutral-900"
      >
        <video
          ref={ref}
          src={t.video}
          playsInline
          muted
          loop
          preload="metadata"
          onEnded={() => setPlaying(false)}
          className="h-full w-full object-cover"
        />
        <span
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
        >
          <span className="absolute inset-0 bg-neutral-900/20" />
          <span className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-neutral-900 bg-[#4ADE80] shadow-[3px_3px_0_0_#1c1917]">
            {playing ? (
              <Pause className="h-5 w-5 text-neutral-900" fill="currentColor" />
            ) : (
              <Play className="ml-0.5 h-5 w-5 text-neutral-900" fill="currentColor" />
            )}
          </span>
        </span>
      </button>

      <div className="p-5">
        <p className="font-sans text-sm font-medium leading-snug text-neutral-800">“{t.quote}”</p>
        <p className="mt-3 font-hero text-sm font-bold uppercase text-neutral-900">{t.name}</p>
        <p className="font-sans text-[11px] font-medium text-neutral-500">{t.role}</p>
      </div>
    </article>
  );
};

const TestimonialsSection = () => (
  <section id="depoimentos" className="bg-background py-14 md:py-20">
    <div className="mx-auto max-w-6xl px-5 md:px-10">
      <p className="mb-3 text-center font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-[#16A34A] md:text-xs">
        Depoimentos
      </p>
      <h2 className="text-center font-hero text-4xl font-bold uppercase leading-[1.02] text-neutral-900 md:text-5xl">
        Quem prova, <span className="text-[#16A34A]">volta</span>
      </h2>

      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <VideoCard key={t.name} t={t} />
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
