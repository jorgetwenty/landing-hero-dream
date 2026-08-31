import { useEffect, useRef, useState } from "react";
import { Clock, MapPin, Phone } from "lucide-react";

/* ====== Troque pelos dados reais da loja ====== */
const STORE = {
  name: "Biomundo ParkShopping",
  tagline: "Loja física • Suplementos e alimentação natural",
  address: "ParkShopping Brasília — SAI/SO Trecho 1, Guará",
  city: "Brasília / DF",
  hours: [
    { days: "Segunda a sexta", time: "08h às 19h" },
    { days: "Sábado", time: "08h às 17h" },
    { days: "Domingo", time: "Fechado" },
  ],
  phone: "(61) 99999-0000",
  mapsEmbed:
    "https://maps.google.com/maps?q=ParkShopping%20Bras%C3%ADlia%2C%20Guar%C3%A1%2C%20Bras%C3%ADlia%20-%20DF&z=16&output=embed",
  mapsDir:
    "https://www.google.com/maps/dir//ParkShopping+Bras%C3%ADlia,+SIN+Trecho+1,+SAI%2FSO+%C3%81rea+6580+-+Guar%C3%A1,+Bras%C3%ADlia+-+DF,+71219-900/@-15.8618698,-48.0307621,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x935a3029eaad68b7:0xc4985755bc8593cc!2m2!1d-47.954869!2d-15.8333955?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
};

const LocationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="localizacao"
      className="bg-background pt-6 pb-16 md:pt-8 md:pb-24"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <p className="mb-3 text-center font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-[#16A34A] md:text-xs">
          Onde estamos
        </p>
        <h2 className="text-center font-hero text-4xl font-bold uppercase leading-[1.02] text-neutral-900 md:text-5xl">
          Venha nos <span className="text-[#16A34A]">visitar</span>
        </h2>

        {/* Card grande — mapa + informações */}
        <div className="mt-10 grid grid-cols-1 overflow-hidden rounded-2xl border-2 border-neutral-900 bg-white shadow-[6px_6px_0_0_#1c1917] lg:grid-cols-2">
          {/* Mapa */}
          <div className="relative min-h-[300px] border-b-2 border-neutral-900 lg:min-h-[460px] lg:border-b-0 lg:border-r-2">
            <iframe
              title={`Mapa — ${STORE.name}`}
              src={STORE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0 grayscale contrast-[1.08]"
            />

</div>

          {/* Informações */}
          <div className="flex flex-col justify-center gap-7 p-7 md:p-10">
<div>
              <div className="flex items-center gap-2">
                <h3 className="font-hero text-2xl font-bold uppercase leading-[1.08] text-neutral-900 md:text-3xl">
                  {STORE.name.split(" ")[0]}
                </h3>

                {/* Pin + pulso — do lado do nome da loja */}
                <div
                  className={`map-pin-wrap ${visible ? "is-visible" : ""}`}
                  aria-hidden
                >
                  <div className="map-pulse" />
                  <div className="map-pin" />
                </div>
              </div>
<h3 className="mt-1.5 font-hero text-2xl font-bold uppercase leading-[1.08] text-neutral-900 md:text-3xl">
                {STORE.name.split(" ").slice(1).join(" ")}
              </h3>
              <p className="mt-1.5 font-sans text-sm font-medium text-neutral-500">
                {STORE.tagline}
              </p>
            </div>

<ul className="space-y-5">
              <li className="flex items-start gap-3.5">
                <MapPin
                  className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#16A34A]"
                  strokeWidth={2}
                />
                <div>
                  <p className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-400">
                    Endereço
                  </p>
                  <p className="mt-0.5 font-sans text-sm font-medium leading-snug text-neutral-800">
                    {STORE.address}
                    <br />
                    {STORE.city}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <Clock
                  className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#16A34A]"
                  strokeWidth={2}
                />
                <div>
                  <p className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-400">
                    Horário de funcionamento
                  </p>
                  <ul className="mt-0.5 space-y-0.5">
                    {STORE.hours.map((h) => (
                      <li
                        key={h.days}
                        className="flex gap-3 font-sans text-sm font-medium text-neutral-800"
                      >
                        <span className="w-32 shrink-0 text-neutral-500">{h.days}</span>
                        <span>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <Phone
                  className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#16A34A]"
                  strokeWidth={2}
                />
                <div>
                  <p className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-400">
                    Telefone / WhatsApp
                  </p>
                  <a
                    href={`tel:${STORE.phone.replace(/[^\d]/g, "")}`}
                    className="mt-0.5 inline-block font-sans text-sm font-medium text-neutral-800 hover:text-[#16A34A]"
                  >
                    {STORE.phone}
                  </a>
                </div>
              </li>
            </ul>

            <a
              href={STORE.mapsDir}
              target="_blank"
              rel="noreferrer"
              className="nb-btn self-start font-sans"
            >
              Como chegar
            </a>
          </div>
        </div>
      </div>

      <style>{`
/* ===== Pin animado (teardrop + pulso) ===== */
.map-pin-wrap {
          position: relative;
          width: 24px;
          height: 24px;
          flex-shrink: 0;
          pointer-events: none;
        }
        .map-pin {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 22px;
          height: 22px;
          margin: -11px 0 0 -11px;
          border-radius: 50% 50% 50% 0;
          background: #16A34A;
          border: 2px solid #1c1917;
          box-shadow: 2px 3px 0 rgba(28, 25, 23, 0.2);
          transform: rotate(-45deg);
          opacity: 0;
        }
        .map-pin::after {
          content: "";
          position: absolute;
          left: 6.5px;
          top: 6.5px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: inset 0 -1px 2px rgba(0, 0, 0, 0.15);
        }
        .is-visible .map-pin {
          animation: pin-drop 0.7s cubic-bezier(0.25, 1, 0.4, 1) 0.2s both;
        }
.map-pulse {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 8px;
          height: 8px;
          margin: -4px 0 0 -4px;
          border-radius: 50%;
          background: rgba(22, 163, 74, 0.35);
          transform: rotateX(55deg);
          opacity: 0;
        }
        .is-visible .map-pulse {
          animation: map-pulse-in 0.5s ease-out 0.9s both;
        }
        .map-pulse::after {
          content: "";
          position: absolute;
          left: -12px;
          top: -12px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          box-shadow: 0 0 1px 2px #16A34A;
          animation: map-ping 1.8s cubic-bezier(0, 0, 0.2, 1) 0.9s infinite;
          opacity: 0;
        }
        @keyframes pin-drop {
          0% { opacity: 0; transform: translateY(-70px) rotate(-45deg); }
          60% { opacity: 1; transform: translateY(8px) rotate(-45deg); }
          80% { transform: translateY(-4px) rotate(-45deg); }
          100% { opacity: 1; transform: translateY(0) rotate(-45deg); }
        }
        @keyframes map-ping {
          0% { transform: scale(0.2); opacity: 0; }
          40% { opacity: 0.9; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        @keyframes map-pulse-in {
          from { opacity: 0; transform: rotateX(55deg) scale(0.6); }
          to { opacity: 1; transform: rotateX(55deg) scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .map-pin,
          .map-pulse,
          .map-pulse::after {
            animation: none !important;
          }
          .map-pin { opacity: 1; }
          .map-pulse { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default LocationSection;