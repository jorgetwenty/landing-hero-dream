import { useRef, useState } from "react";
import beefProtein from "@/assets/beef-protein-cut.png";
import vanillaWhey from "@/assets/vanilla-whey-cut.png";
import cacaoWhey from "@/assets/cacao-whey-cut.png";
import creatina from "@/assets/creatina-creapure-cut.png";

const products = [
  { brand: "Essential", title: "Beef Protein Pure Cacao", price: "R$ 389,90", cashback: "R$ 38,99", image: beefProtein },
  { brand: "Essential", title: "Vanilla Whey", price: "R$ 454,00", cashback: "R$ 45,40", image: vanillaWhey },
  { brand: "Essential", title: "Cacao Whey", price: "R$ 454,00", cashback: "R$ 45,40", image: cacaoWhey },
  { brand: "Nutrify", title: "Creatina Creapure", price: "R$ 209,99", cashback: "R$ 21,00", image: creatina },
];

const ArrowButton = ({
  direction,
  disabled,
  onClick,
}: {
  direction: "left" | "right";
  disabled: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    aria-label={direction === "left" ? "Anterior" : "Próximo"}
    onClick={onClick}
    disabled={disabled}
    className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700 transition-colors duration-200 hover:border-neutral-900 hover:text-neutral-900 disabled:pointer-events-none disabled:opacity-30"
  >
    {direction === "left" ? (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 18l-6-6 6-6" />
      </svg>
    ) : (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 6l6 6-6 6" />
      </svg>
    )}
  </button>
);

const ProductsSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

const scroll = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const gap = 12; // lg:gap-3
    const card = (el.clientWidth - 2 * gap) / 3;
    el.scrollTo({ left: el.scrollLeft + dir * (card + gap), behavior: "smooth" });
  };

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
  };

  return (
    <section id="produtos" className="bg-background pt-10 pb-8 md:pt-12 md:pb-10">
      <div className="mx-auto max-w-[100rem] px-3 md:px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-[#16A34A] md:text-xs">
              Nossos produtos
            </p>
            <h2 className="font-hero text-4xl font-bold uppercase leading-[1.02] text-neutral-900 md:text-5xl">
              Escolhidos a <span className="text-[#16A34A]">dedo</span> pra você
            </h2>
          </div>
          {/* Botões do carrossel — apenas desktop */}
          <div className="hidden shrink-0 gap-2 pb-1 lg:flex">
            <ArrowButton direction="left" disabled={atStart} onClick={() => scroll(-1)} />
            <ArrowButton direction="right" disabled={atEnd} onClick={() => scroll(1)} />
          </div>
        </div>

        {/* Mobile/tablet: grade empilhada. Desktop: carrossel com scroll lateral */}
        <div
          ref={trackRef}
          onScroll={updateArrows}
          className="mt-8 grid grid-cols-1 gap-1.5 md:mt-10 md:grid-cols-2 md:gap-2 lg:mt-6 lg:flex lg:snap-x lg:snap-proximity lg:gap-3 lg:overflow-x-auto lg:pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {products.map((p) => (
            <article
              key={p.title}
              className="group flex aspect-[1/1.12] flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-[2px_2px_0_0_rgba(28,25,23,0.06)] transition-shadow duration-200 hover:shadow-[3px_3px_0_0_rgba(28,25,23,0.1)] lg:w-1/3 lg:shrink-0 lg:snap-start"
            >
              {/* Imagem — preenche o card, catálogo uniforme */}
              <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-white p-2.5 md:p-4">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info — compacta */}
              <div className="flex flex-col p-3 pt-1.5 md:p-5 md:pt-2.5">
                <p className="font-sans text-[9px] font-medium uppercase tracking-[0.2em] text-neutral-400 md:text-[11px]">
                  {p.brand}
                </p>
                <h3 className="mt-0.5 font-hero text-sm font-bold uppercase leading-tight text-neutral-900 md:text-lg">
                  {p.title}
                </h3>
                <div className="mt-1.5 flex items-center justify-between gap-2 md:mt-2.5 md:gap-2.5">
                  <span className="min-w-0 font-sans text-base font-semibold text-neutral-900 md:text-xl">
                    {p.price}
                  </span>
                  <button
                    type="button"
                    className="nb-btn w-auto shrink-0 !px-3 !py-1.5 !text-[10px] md:!px-4 md:!py-2 md:!text-xs"
                  >
                    Comprar
                  </button>
                </div>
                <p className="mt-1 font-sans text-[10px] font-medium text-[#16A34A] md:mt-2 md:text-sm">
                  10% de volta · {p.cashback}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;