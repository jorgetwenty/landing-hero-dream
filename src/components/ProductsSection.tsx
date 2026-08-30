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

const ProductsSection = () => {
  return (
<section id="produtos" className="bg-background pt-10 pb-8 md:pt-12 md:pb-10">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <p className="mb-3 font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-[#16A34A] md:text-xs">
          Nossos produtos
        </p>
        <h2 className="font-hero text-4xl font-bold uppercase leading-[1.02] text-neutral-900 md:text-5xl">
          Escolhidos a <span className="text-[#16A34A]">dedo</span> pra você
        </h2>

<div className="mt-8 grid grid-cols-2 gap-1.5 md:mt-10 md:gap-2 lg:grid-cols-4 lg:gap-2.5">
          {products.map((p) => (
<article
              key={p.title}
              className="group flex aspect-[1/1.22] flex-col overflow-hidden rounded-xl border border-neutral-900/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-14px_rgba(28,25,23,0.25)]"
            >
              {/* Imagem — preenche o card, catálogo uniforme */}
              <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-white p-2.5 md:p-3.5">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info — compacta */}
              <div className="flex flex-col p-2.5 pt-1.5 md:p-4 md:pt-2">
                <p className="font-sans text-[8px] font-medium uppercase tracking-[0.2em] text-neutral-400 md:text-[9px]">
                  {p.brand}
                </p>
                <h3 className="mt-0.5 font-hero text-[11px] font-bold uppercase leading-tight text-neutral-900 md:text-[13px]">
                  {p.title}
                </h3>
                <div className="mt-2 flex items-center justify-between gap-1.5 md:mt-2.5 md:gap-2">
                  <span className="min-w-0 font-sans text-[13px] font-semibold text-neutral-900 md:text-[15px]">
                    {p.price}
                  </span>
                  <button
                    type="button"
                    className="nb-btn w-auto shrink-0 !px-3 !py-1.5 !text-[9px] md:!px-3.5 md:!text-[10px]"
                  >
                    Comprar
                  </button>
                </div>
                <p className="mt-1 font-sans text-[9px] font-medium text-[#16A34A] md:mt-1.5 md:text-[10px]">
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
