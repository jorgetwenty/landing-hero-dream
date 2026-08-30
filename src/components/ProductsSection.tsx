import beefProtein from "@/assets/beef-protein.png.asset.json";
import vanillaWhey from "@/assets/vanilla-whey.png.asset.json";
import cacaoWhey from "@/assets/cacao-whey.png.asset.json";
import creatina from "@/assets/creatina-creapure.png.asset.json";

const products = [
  { brand: "Essential", title: "Beef Protein Pure Cacao", oldPrice: "R$ 490,00", price: "R$ 389,90", image: beefProtein.url },
  { brand: "Essential", title: "Vanilla Whey", oldPrice: "R$ 570,00", price: "R$ 454,00", image: vanillaWhey.url },
  { brand: "Essential", title: "Cacao Whey", oldPrice: "R$ 570,00", price: "R$ 454,00", image: cacaoWhey.url },
  { brand: "Nutrify", title: "Creatina Creapure", oldPrice: "R$ 269,90", price: "R$ 209,99", image: creatina.url },
];

const ProductsSection = () => {
  return (
<section id="produtos" className="bg-background pt-10 pb-16 md:pt-14 md:pb-24">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <p className="mb-3 font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-[#16A34A] md:text-xs">
          Nossos produtos
        </p>
        <h2 className="font-hero text-4xl font-bold uppercase leading-[1.02] text-neutral-900 md:text-5xl">
          Escolhidos a <span className="text-[#16A34A]">dedo</span> pra você
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-2xl border-2 border-neutral-900 bg-white shadow-[3px_3px_0_0_#1c1917] transition-transform duration-200 hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0_0_#1c1917]"
            >
              {/* Imagem */}
              <div className="relative flex items-center justify-center bg-white p-5">
                <span className="absolute right-3 top-3 rotate-3 rounded-md border-2 border-neutral-900 bg-[#4ADE80] px-2 py-1 font-hero text-[11px] font-bold uppercase leading-none text-neutral-900">
                  Oferta
                </span>
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-44 w-auto object-contain transition-transform duration-300 group-hover:scale-105 md:h-52"
                />
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col border-t-2 border-neutral-900 bg-[#F1E9D9] p-4">
                <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">
                  {p.brand}
                </p>
                <h3 className="mt-1 font-hero text-lg font-bold uppercase leading-tight text-neutral-900">
                  {p.title}
                </h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-sans text-xs text-neutral-500 line-through">{p.oldPrice}</span>
                  <span className="font-sans text-lg font-bold text-neutral-900">{p.price}</span>
                </div>
                <button
                  type="button"
                  className="mt-4 w-full rounded-xl border-2 border-neutral-900 bg-[#4ADE80] py-2.5 font-sans text-sm font-semibold uppercase tracking-wide text-neutral-900 shadow-[2px_2px_0_0_#1c1917] transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#1c1917] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                >
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
