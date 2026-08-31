import { useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { whatsappLink } from "@/lib/whatsapp";
import beefProtein from "@/assets/beef-protein-cut.png";
import vanillaWhey from "@/assets/vanilla-whey-cut.png";
import cacaoWhey from "@/assets/cacao-whey-cut.png";
import creatina from "@/assets/creatina-creapure-cut.png";

const products = [
  { brand: "Essential", title: "Beef Protein Pure Cacao", price: "R$ 389,90", cashback: "R$ 38,99", image: beefProtein, message: "Olá! Vi o Beef Protein Pure Cacao no site da Biomundo ParkShopping. Gostaria de mais informações." },
  { brand: "Essential", title: "Vanilla Whey", price: "R$ 454,00", cashback: "R$ 45,40", image: vanillaWhey, message: "Olá! Vi o Vanilla Whey no site da Biomundo ParkShopping. Gostaria de mais informações." },
  { brand: "Essential", title: "Cacao Whey", price: "R$ 454,00", cashback: "R$ 45,40", image: cacaoWhey, message: "Olá! Vi o Cacao Whey no site da Biomundo ParkShopping. Gostaria de mais informações." },
  { brand: "Nutrify", title: "Creatina Creapure", price: "R$ 209,99", cashback: "R$ 21,00", image: creatina, message: "Olá! Vi a Creatina Creapure no site da Biomundo ParkShopping. Gostaria de mais informações." },
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

const CouponVoucher = ({ onClick }: { onClick?: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className="group/voucher relative mt-2 w-full overflow-hidden rounded-lg bg-[#F1E8D6] text-left md:mt-2.5"
  >
    {/* side cutouts */}
    <span
      className="pointer-events-none absolute z-[1] h-7 w-7 rounded-full bg-white md:h-8 md:w-8"
      style={{ left: "-14px", top: "50%", transform: "translateY(-50%)" }}
    />
    <span
      className="pointer-events-none absolute z-[1] h-7 w-7 rounded-full bg-white md:h-8 md:w-8"
      style={{ right: "-14px", top: "50%", transform: "translateY(-50%)" }}
    />

    <div className="flex items-center px-2.5 py-2.5 md:px-3 md:py-3">
      {/* discount block */}
      <div className="flex w-[30%] flex-col items-center justify-center pr-2 md:w-[28%]">
        <span className="font-hero text-2xl font-bold leading-none text-[#1c1917] md:text-3xl">10%</span>
        <span className="font-sans text-[10px] font-semibold uppercase tracking-wide text-[#1c1917]/70 md:text-[11px]">OFF</span>
      </div>

      {/* dotted divider */}
      <div
        className="h-11 border-l-[3px] border-dotted border-[#1c1917]/40 md:h-12"
        style={{ borderStyle: "dotted" }}
      />

      {/* content */}
      <div className="flex flex-1 flex-col justify-center pl-2.5 md:pl-3">
        <p className="font-sans text-[10px] font-bold uppercase tracking-wide text-[#1c1917] md:text-[11px]">
          Na loja física
        </p>
        <p className="font-sans text-[9px] font-semibold text-[#1c1917]/70 md:text-[10px]">
          BioMundo ParkShopping
        </p>
        <p className="font-sans text-[8px] font-medium text-[#1c1917]/50 md:text-[9px]">
          Apresente no caixa
        </p>
      </div>
    </div>

    {/* bottom strip */}
    <div className="flex items-center justify-between border-t border-[#1c1917]/10 bg-[#EDE4CF] px-2.5 py-2 md:px-3 md:py-2.5">
      <span className="font-sans text-[9px] font-medium text-[#1c1917]/60 md:text-[10px]">
        Cupom: PARK10
      </span>
      <span className="nb-btn inline-flex items-center rounded-full border border-[#1c1917] bg-[#16A34A] px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-wide text-white shadow-[2px_2px_0_0_#1c1917] transition-all group-hover/voucher:-translate-y-0.5 group-hover/voucher:shadow-[3px_3px_0_0_#1c1917] md:px-3.5 md:py-1.5 md:text-xs">
        Usar
      </span>
    </div>
  </button>
);

const CouponModal = ({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-sm rounded-2xl border-2 border-[#1c1917] bg-[#F5F1E9] p-0 shadow-[4px_4px_0_0_#1c1917] sm:max-w-md">
      <div className="relative overflow-hidden rounded-t-2xl bg-[#16A34A] px-6 py-5 text-center">
        <span className="font-hero text-xs font-bold uppercase tracking-[0.2em] text-white/90">Cupom liberado</span>
        <h3 className="mt-1 font-hero text-2xl font-bold text-white md:text-3xl">10% de desconto</h3>
        <div className="pointer-events-none absolute -bottom-3 -left-3 h-6 w-6 rounded-full bg-[#F5F1E9]" />
        <div className="pointer-events-none absolute -bottom-3 -right-3 h-6 w-6 rounded-full bg-[#F5F1E9]" />
      </div>

      <div className="px-6 pb-6 pt-2">
        <DialogHeader>
          <DialogTitle className="sr-only">Cupom liberado</DialogTitle>
        </DialogHeader>

        <p className="text-center font-sans text-sm font-medium text-neutral-700">
          Válido exclusivamente na BioMundo ParkShopping.
        </p>
        <p className="mt-1 text-center font-sans text-xs text-neutral-500">
          Mostre esta tela no caixa para receber o desconto.
        </p>

        <div className="relative mt-5 flex items-center justify-between overflow-hidden rounded-xl border-2 border-dashed border-[#8B5A2B]/40 bg-white px-5 py-4">
          <div className="flex flex-col">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-wide text-[#8B5A2B]">Código visual</span>
            <span className="font-hero text-2xl font-bold tracking-wide text-[#16A34A]">PARK10</span>
          </div>
          <div className="h-10 border-l border-dashed border-[#8B5A2B]/30" />
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <div className="pointer-events-none absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-[#F5F1E9]" />
          <div className="pointer-events-none absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-[#F5F1E9]" />
        </div>

        <p className="mt-4 text-center font-sans text-[10px] font-medium text-neutral-400">
          Apresente este cupom no caixa da loja física.
        </p>
      </div>
    </DialogContent>
  </Dialog>
);

const ProductsSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const scroll = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const gap = 12;
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
            <p className="mt-2 font-sans text-xs font-medium text-[#16A34A] md:text-sm">
              Curadoria exclusiva da Biomundo ParkShopping.
            </p>
          </div>
          <div className="hidden shrink-0 gap-2 pb-1 lg:flex">
            <ArrowButton direction="left" disabled={atStart} onClick={() => scroll(-1)} />
            <ArrowButton direction="right" disabled={atEnd} onClick={() => scroll(1)} />
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={updateArrows}
          className="mt-8 grid grid-cols-1 gap-1.5 md:mt-10 md:grid-cols-2 md:gap-2 lg:mt-6 lg:flex lg:snap-x lg:snap-proximity lg:gap-3 lg:overflow-x-auto lg:pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {products.map((p) => (
            <article
              key={p.title}
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-[2px_2px_0_0_rgba(28,25,23,0.06)] transition-shadow duration-200 hover:shadow-[3px_3px_0_0_rgba(28,25,23,0.1)] lg:w-1/3 lg:shrink-0 lg:snap-start"
            >
              <div className="flex aspect-square w-full items-center justify-center overflow-hidden bg-white p-3 md:p-5">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-3 pt-1.5 md:p-5 md:pt-2.5">
                <p className="font-sans text-[9px] font-medium uppercase tracking-[0.2em] text-neutral-400 md:text-[11px]">
                  {p.brand}
                </p>
                <h3 className="mt-0.5 line-clamp-2 min-h-[2.2em] font-hero text-sm font-bold uppercase leading-tight text-neutral-900 md:min-h-[2.2em] md:text-lg">
                  {p.title}
                </h3>

                <div className="mt-1.5 flex items-center justify-between gap-2 md:mt-2.5 md:gap-2.5">
                  <span className="min-w-0 font-sans text-base font-semibold text-neutral-900 md:text-xl">
                    {p.price}
                  </span>
                </div>

                <div className="mt-auto">
                  <CouponVoucher onClick={() => setModalOpen(true)} />

                  <p className="mt-1.5 font-sans text-[10px] font-medium text-[#16A34A] md:mt-2 md:text-sm">
                    10% de volta · {p.cashback}
                  </p>

                  <a
                    href={whatsappLink(p.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nb-btn mt-2 inline-flex w-full items-center justify-center gap-2 !px-3 !py-2 text-[10px] md:mt-2.5 md:!py-2.5 md:text-xs"
                  >
                    <MessageCircle className="h-3.5 w-3.5" strokeWidth={2.2} />
                    Quero este produto
                  </a>
                </div>
              </div>
            </article>
          ))}

        </div>
      </div>

      <CouponModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};

export default ProductsSection;
