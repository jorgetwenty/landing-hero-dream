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
<section id="produtos" className="bg-background pt-10 pb-8 md:pt-12 md:pb-10">
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
              className="group flex flex-col overflow-hidden rounded-3xl border border-neutral-900/10 bg-white shadow-[0_10px_30px_-14px_rgba(28,25,23,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-14px_rgba(28,25,23,0.25)]"
            >
              {/* Imagem */}
              <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-[#F6F1E7] p-6">
                <span className="absolute right-4 top-4 rounded-full bg-[#4ADE80] px-2.5 py-1 font-sans text-[10px] font-bold uppercase tracking-wide text-neutral-900">
                  Oferta
                </span>
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-105 md:h-48"
                />
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col p-5 pt-4">
                <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                  {p.brand}
                </p>
                <h3 className="mt-1 font-hero text-lg font-bold uppercase leading-tight text-neutral-900">
                  {p.title}
                </h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-sans text-xs text-neutral-400 line-through">{p.oldPrice}</span>
                  <span className="font-sans text-lg font-semibold text-neutral-900">{p.price}</span>
                </div>
                <button
                  type="button"
                  className="nb-btn mt-5 w-full font-sans"
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
