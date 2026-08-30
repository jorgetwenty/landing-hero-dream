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

<div className="mt-8 grid grid-cols-2 gap-3 md:mt-10 md:gap-4 lg:grid-cols-4 lg:gap-5">
          {products.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-neutral-900/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-14px_rgba(28,25,23,0.25)]"
            >
              {/* Imagem — quadrada, como catálogo */}
              <div className="flex aspect-square w-full items-center justify-center overflow-hidden bg-white p-4 md:p-5">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col p-4 pt-3 md:p-5 md:pt-3">
                <p className="font-sans text-[9px] font-medium uppercase tracking-[0.2em] text-neutral-400 md:text-[10px]">
                  {p.brand}
                </p>
                <h3 className="mt-1 font-hero text-[13px] font-bold uppercase leading-tight text-neutral-900 md:text-base">
                  {p.title}
                </h3>
                <span className="mt-2.5 font-sans text-base font-semibold text-neutral-900 md:mt-3 md:text-lg">{p.price}</span>
                <p className="mt-0.5 font-sans text-[10px] font-medium text-[#16A34A] md:mt-1 md:text-[11px]">
                  10% de cashback · {p.cashback} de volta
                </p>
                <button type="button" className="nb-btn mt-3 w-full font-sans md:mt-4">
                  Comprar
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
