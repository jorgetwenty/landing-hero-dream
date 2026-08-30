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
      <div className="mx-auto max-w-[100rem] px-3 md:px-4">
        <p className="mb-3 font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-[#16A34A] md:text-xs">
          Nossos produtos
        </p>
        <h2 className="font-hero text-4xl font-bold uppercase leading-[1.02] text-neutral-900 md:text-5xl">
          Escolhidos a <span className="text-[#16A34A]">dedo</span> pra você
        </h2>

<div className="mt-8 grid grid-cols-2 gap-1 md:mt-10 md:gap-2 lg:grid-cols-4 lg:gap-2.5">
          {products.map((p) => (
            <article
              key={p.title}
              className="group flex aspect-[1/1.12] flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[2px_2px_0_0_rgba(28,25,23,0.06)] transition-shadow duration-200 hover:shadow-[3px_3px_0_0_rgba(28,25,23,0.1)]"
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
              <div className="flex flex-col p-2 pt-1 md:p-4 md:pt-2.5">
                <p className="font-sans text-[8px] font-medium uppercase tracking-[0.2em] text-neutral-400 md:text-[10px]">
                  {p.brand}
                </p>
                <h3 className="mt-0.5 font-hero text-[10px] font-bold uppercase leading-tight text-neutral-900 md:text-sm">
                  {p.title}
                </h3>
                <div className="mt-1.5 flex items-center justify-between gap-1.5 md:mt-2.5 md:gap-2">
                  <span className="min-w-0 font-sans text-[12px] font-semibold text-neutral-900 md:text-base">
                    {p.price}
                  </span>
                  <button
                    type="button"
                    className="nb-btn w-auto shrink-0 !px-2.5 !py-1 !text-[8px] md:!px-3.5 md:!py-1.5 md:!text-[11px]"
                  >
                    Comprar
                  </button>
                </div>
                <p className="mt-0.5 font-sans text-[8px] font-medium text-[#16A34A] md:mt-1.5 md:text-[11px]">
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
