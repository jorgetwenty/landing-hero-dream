const BenefitsSection = () => {
  return (
    <section id="vantagens" className="bg-background pt-14 pb-6 md:pt-20 md:pb-8">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
<h2 className="text-center font-hero text-4xl font-bold uppercase leading-[1.02] text-neutral-900 md:text-5xl">
          Compre e <span className="text-[#16A34A]">ganhe</span> de volta
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Card 1 — Cashback */}
          <article className="flex flex-col items-center overflow-hidden rounded-2xl border-2 border-neutral-900 bg-white p-7 text-center shadow-[3px_3px_0_0_#1c1917] md:p-9">
<div className="flex h-44 items-center justify-center md:h-[190px]" aria-hidden>
              <div className="pl">
                <div className="pl__coin">
                  <div className="pl__coin-flare" />
                  <div className="pl__coin-flare" />
                  <div className="pl__coin-flare" />
                  <div className="pl__coin-flare" />
                  <div className="pl__coin-layers">
                    <div className="pl__coin-layer">
                      <div className="pl__coin-inscription" />
                    </div>
                    <div className="pl__coin-layer" />
                    <div className="pl__coin-layer" />
                    <div className="pl__coin-layer" />
                    <div className="pl__coin-layer">
                      <div className="pl__coin-inscription" />
                    </div>
                  </div>
                </div>
                <div className="pl__shadow" />
              </div>
            </div>

            <h3 className="mt-6 font-hero text-2xl font-bold uppercase leading-tight text-neutral-900 md:text-3xl">
              10% de cashback
            </h3>
<p className="mb-6 mt-3 max-w-sm font-sans text-sm font-medium leading-relaxed text-neutral-600">
              A cada compra, 10% do valor volta pra sua carteira e pode ser usado no
              próximo pedido. Simples assim.
            </p>
            <button type="button" className="nb-btn mt-auto font-sans">
              Quero meu cashback
            </button>
          </article>

          {/* Card 2 — Cupom */}
          <article className="flex flex-col items-center overflow-hidden rounded-2xl border-2 border-neutral-900 bg-[#F1E9D9] p-7 text-center shadow-[3px_3px_0_0_#1c1917] md:p-9">
            <div className="coupon">
              <div className="left">
                <div>Primeira compra</div>
              </div>
              <div className="center">
                <div>
                  <h2>10% OFF</h2>
                  <h3>Cupom</h3>
                  <small>Válido em todo o site</small>
                </div>
              </div>
              <div className="right">
                <div>BIOMUNDOPKS10</div>
              </div>
            </div>

            <h3 className="mt-6 font-hero text-2xl font-bold uppercase leading-tight text-neutral-900 md:text-3xl">
              Cupom de 10%
            </h3>
<p className="mb-6 mt-3 max-w-sm font-sans text-sm font-medium leading-relaxed text-neutral-600">
              Use o cupom <strong className="font-semibold text-neutral-900">BIOMUNDOPKS10</strong> na
              sua primeira compra e economize na hora.
            </p>
            <button type="button" className="nb-btn mt-auto font-sans">
              Usar cupom
            </button>
          </article>
        </div>
      </div>

      <style>{`
        /* ===== Coin loader ===== */
        .pl {
          --hue2: 140;
          font-size: 19px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          width: 9.1em;
          height: 9.1em;
        }
        .pl__coin,
        .pl__coin-flare,
        .pl__coin-inscription,
        .pl__coin-layers,
        .pl__shadow {
          animation-duration: 2s;
          animation-timing-function: cubic-bezier(0.37,0,0.63,1);
          animation-iteration-count: infinite;
        }
        .pl__coin {
          animation-name: pl-bounce;
          position: relative;
          transform: translateY(0.5em);
          z-index: 1;
        }
        .pl__coin-flare,
        .pl__coin-inscription,
        .pl__coin-layer { position: absolute; }
        .pl__coin-flare {
          animation-name: pl-flare1;
          background-color: hsl(140,70%,55%);
          clip-path: polygon(50% 0,67% 33%,100% 50%,67% 67%,50% 100%,33% 67%,0 50%,33% 33%);
          top: 0; left: -0.5em; width: 1em; height: 1em;
          transform: scale(0);
          z-index: 1;
        }
        .pl__coin-flare:nth-child(2) { animation-name: pl-flare2; top: -0.5em; left: 0; }
        .pl__coin-flare:nth-child(3) { animation-name: pl-flare3; left: 3em; }
        .pl__coin-flare:nth-child(4) { animation-name: pl-flare4; top: -0.5em; left: 3.5em; }
        .pl__coin-inscription {
          animation-name: pl-inscription-front;
          background-color: hsl(var(--hue2),60%,38%);
          box-shadow: 0.1875em 0 0 hsl(var(--hue2),60%,30%) inset;
          top: 50%; left: 50%; width: 0.5em; height: 2.5em;
          transform: translate(-50%,-50%) rotateZ(30deg);
        }
        .pl__coin-layer {
          background-color: hsl(var(--hue2),65%,50%);
          backface-visibility: hidden;
          border-radius: 50%;
          box-shadow: 0 0 0 0.375em hsl(var(--hue2),70%,72%) inset;
          top: 0; left: 0; width: 100%; height: 100%;
        }
        .pl__coin-layer:first-child { transform: translate3d(0,0,0.5em); }
        .pl__coin-layer:nth-child(2) { transform: translate3d(0,0,0.49em) rotateY(180deg); }
        .pl__coin-layer:nth-child(3) {
          backface-visibility: visible;
          border-radius: 0;
          left: 50%;
          width: 0.98em;
          transform: translateX(-50%) rotateY(90deg);
        }
        .pl__coin-layer:nth-child(4) { transform: translate3d(0,0,-0.49em); }
        .pl__coin-layer:last-child { transform: translate3d(0,0,-0.5em) rotateY(180deg); }
        .pl__coin-layer:nth-child(n + 2):nth-last-child(n + 2) {
          background-color: hsl(var(--hue2),60%,38%);
          box-shadow: none;
        }
        .pl__coin-layer:last-child .pl__coin-inscription {
          animation-name: pl-inscription-back;
          transform: translate(-50%,-50%) rotateZ(-30deg);
        }
        .pl__coin-layers {
          animation-name: pl-roll;
          position: relative;
          width: 4em; height: 4em;
          transform: rotateY(-15deg) rotateZ(-30deg);
          transform-style: preserve-3d;
        }
        .pl__shadow {
          animation-name: pl-shadow;
          background-color: hsla(140,40%,10%,0.3);
          border-radius: 50%;
          width: 4em; height: 0.5em;
        }
        @keyframes pl-bounce {
          from, 50%, to { animation-timing-function: cubic-bezier(0.33,0,0.67,0); transform: translateY(0.5em); }
          25%, 75% { animation-timing-function: cubic-bezier(0.33,1,0.67,1); transform: translateY(5.1em); }
        }
        @keyframes pl-flare1 {
          from, 75%, to { animation-timing-function: cubic-bezier(0.33,0,0.67,0); transform: scale(0); }
          87.5% { animation-timing-function: cubic-bezier(0.33,1,0.67,1); transform: scale(1); }
        }
        @keyframes pl-flare2 {
          from, to { animation-timing-function: cubic-bezier(0.33,1,0.67,1); transform: scale(1); }
          12.5%, 87.5% { animation-timing-function: cubic-bezier(0.33,0,0.67,0); transform: scale(0); }
        }
        @keyframes pl-flare3 {
          from, 25%, 50%, to { animation-timing-function: cubic-bezier(0.33,0,0.67,0); transform: scale(0); }
          37.5% { animation-timing-function: cubic-bezier(0.33,1,0.67,1); transform: scale(1); }
        }
        @keyframes pl-flare4 {
          from, 37.5%, 62.5%, to { animation-timing-function: cubic-bezier(0.33,0,0.67,0); transform: scale(0); }
          50% { animation-timing-function: cubic-bezier(0.33,1,0.67,1); transform: scale(1); }
        }
        @keyframes pl-inscription-front {
          from, 75% { animation-timing-function: cubic-bezier(0.12,0,0.39,0); box-shadow: 0.1875em 0 0 hsl(var(--hue2),60%,30%) inset; }
          87.49% { animation-timing-function: steps(1); box-shadow: 0.875em -0.75em 0 hsl(var(--hue2),60%,30%) inset; }
          87.5% { animation-timing-function: cubic-bezier(0.61,1,0.88,1); box-shadow: -0.875em 0.75em 0 hsl(var(--hue2),60%,30%) inset; }
          to { box-shadow: 0.1875em 0 hsl(var(--hue2),60%,30%) inset; }
        }
        @keyframes pl-inscription-back {
          from, 75% { box-shadow: -1em -0.875em 0 hsl(var(--hue2),60%,30%) inset; }
          to { box-shadow: 1.125em 1em 0 hsl(var(--hue2),60%,30%) inset; }
        }
        @keyframes pl-roll {
          from, 75% { transform: rotateY(-15deg) rotateZ(-30deg) rotateY(0); }
          to { transform: rotateY(-15deg) rotateZ(-30deg) rotateY(-1turn); }
        }
        @keyframes pl-shadow {
          from, 50%, to { animation-timing-function: cubic-bezier(0.33,0,0.67,0); background-color: hsla(140,40%,10%,0.3); transform: scale(0.6); }
          25%, 75% { animation-timing-function: cubic-bezier(0.33,1,0.67,1); background-color: hsla(140,40%,10%,0.5); transform: scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .pl__coin, .pl__coin-flare, .pl__coin-inscription, .pl__coin-layers, .pl__shadow {
            animation: none !important;
          }
        }

        /* ===== Coupon ===== */
        .coupon {
          width: 100%;
          max-width: 400px;
          height: 190px;
          border-radius: 10px;
          overflow: hidden;
          margin: auto;
          filter: drop-shadow(0 3px 5px rgba(0,0,0,0.25));
          display: flex;
          align-items: stretch;
          position: relative;
          text-transform: uppercase;
          color: #1c1917;
        }
        .coupon::before,
        .coupon::after {
          content: "";
          position: absolute;
          top: 0;
          width: 50%;
          height: 100%;
          z-index: -1;
        }
        .coupon::before {
          left: 0;
          background-image: radial-gradient(circle at 0 50%, transparent 25px, #4ADE80 26px);
        }
        .coupon::after {
          right: 0;
          background-image: radial-gradient(circle at 100% 50%, transparent 25px, #4ADE80 26px);
        }
        .coupon > div {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .coupon .left {
          width: 20%;
          border-right: 2px dashed rgba(0,0,0,0.18);
        }
        .coupon .left div {
          transform: rotate(-90deg);
          white-space: nowrap;
          font-weight: 600;
          font-size: 0.8rem;
          letter-spacing: 0.08em;
        }
        .coupon .center { flex-grow: 1; text-align: center; }
        .coupon .right {
          width: 96px;
          background-image: radial-gradient(circle at 100% 50%, transparent 25px, #fff 26px);
        }
        .coupon .right div {
          transform: rotate(-90deg);
          white-space: nowrap;
          font-weight: 600;
          font-size: 0.95rem;
          letter-spacing: 0.14em;
        }
        .coupon .center h2 {
          background: #1c1917;
          color: #4ADE80;
          padding: 0 10px;
          font-size: 2rem;
          font-weight: 700;
          white-space: nowrap;
          line-height: 1.25;
        }
        .coupon .center h3 { font-size: 1.9rem; font-weight: 500; line-height: 1.2; }
        .coupon .center small {
          font-size: 0.625rem;
          font-weight: 600;
          letter-spacing: 2px;
        }
        @media screen and (max-width: 500px) {
          .coupon { height: auto; display: grid; grid-template-columns: 1fr; }
          .coupon .left { width: 100%; border-right: 0; border-bottom: 2px dashed rgba(0,0,0,0.18); padding: 10px 0; }
          .coupon .left div { transform: rotate(0deg); }
          .coupon .center { padding: 14px 0; }
          .coupon .right { width: 100%; padding: 12px 0; background-image: none; background: #fff; }
          .coupon .right div { transform: rotate(0deg); }
        }
      `}</style>
    </section>
  );
};

export default BenefitsSection;
