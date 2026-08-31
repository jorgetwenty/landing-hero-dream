import { useEffect, useRef, useState } from "react";
import poster1 from "@/assets/testimonial-poster-1.jpg";
import poster2 from "@/assets/testimonial-poster-2.jpg";

const DEPOIMENTO_1 =
  "https://eynifdmidipyhvdwmfes.supabase.co/storage/v1/object/public/video%20de%20depoimento%20biomundo/primeiro%20video%20de%20depoimento.mp4";
const DEPOIMENTO_2 =
  "https://eynifdmidipyhvdwmfes.supabase.co/storage/v1/object/public/video%20de%20depoimento%20biomundo/segundo%20video%20de%20depoimento%20biomundo.mp4";

const testimonials = [
  { name: "Débora M.", role: "Cliente há 2 anos", quote: "Achei tudo que eu procurava sem açúcar em um lugar só.", video: DEPOIMENTO_1, poster: poster1 },
  { name: "Mikael S.", role: "Treina 5x na semana", quote: "O cashback fez eu voltar a comprar toda semana.", video: DEPOIMENTO_2, poster: poster2 },
  { name: "Rayssa L.", role: "Cliente desde 2024", quote: "Sabor de sobremesa e ainda encaixa na dieta.", video: DEPOIMENTO_1, poster: poster1 },
];

const VideoCard = ({
  t,
  index,
  active,
  setActive,
  sectionVisible,
}: {
  t: (typeof testimonials)[number];
  index: number;
  active: number | null;
  setActive: (i: number | null) => void;
  sectionVisible: boolean;
}) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const isActive = active === index;

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (sectionVisible && isActive) {
      v.muted = true;
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    } else {
      v.pause();
      v.currentTime = 0;
      setPlaying(false);
    }
  }, [isActive, sectionVisible]);

const isBeige = index === 1;
  return (
    <article className="overflow-hidden rounded-xl border-2 border-neutral-900 bg-white shadow-[6px_6px_0_0_#1c1917] transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5">
      <div className="relative aspect-[9/16] w-full overflow-hidden border-b-2 border-neutral-900 bg-[#F1E9D9]">
        <video
          ref={ref}
          src={t.video}
          playsInline
          muted
          loop
          preload={isActive ? "auto" : "none"}
          poster={t.poster}
          onPlaying={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setActive((index + 1) % testimonials.length)}
          className="h-full w-full object-cover"
        />
        {/* Preview estático — aparece enquanto o vídeo não está rodando */}
        {!playing && (
          <img
            src={t.poster}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
      </div>

      <div className={`p-5 ${isBeige ? "bg-[#F1E8D6]" : "bg-white"}`}>
        <p className="font-sans text-sm font-medium leading-snug text-neutral-800">“{t.quote}”</p>
        <p className="mt-3 font-hero text-sm font-bold uppercase text-neutral-900">{t.name}</p>
        <p className="font-sans text-[11px] font-medium text-neutral-500">{t.role}</p>
      </div>
    </article>
  );
};

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<number | null>(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="depoimentos" className="bg-background pt-6 pb-14 md:pt-8 md:pb-20">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <p className="mb-3 text-center font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-[#16A34A] md:text-xs">
          Depoimentos
        </p>
        <h2 className="text-center font-hero text-4xl font-bold uppercase leading-[1.02] text-neutral-900 md:text-5xl">
          Quem prova, <span className="text-[#16A34A]">volta</span>
          <span className="mt-1 block text-2xl md:text-3xl">no mundo do ParkShopping</span>
        </h2>
        <div className="mt-6 flex justify-center">
          <a
            href="#localizacao"
            className="nb-btn inline-flex items-center justify-center rounded-full bg-[#16A34A] px-6 py-2.5 text-sm font-medium text-white"
          >
            Quero conhecer
          </a>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <VideoCard
              key={t.name}
              t={t}
              index={i}
              active={active}
              setActive={setActive}
              sectionVisible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;