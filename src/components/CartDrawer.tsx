import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { whatsappLink } from "@/lib/whatsapp";

export type CartItem = { title: string; brand: string; price: string; image: string; qty: number };

const toNumber = (price: string) => Number(price.replace(/[^\d,]/g, "").replace(",", "."));
const fmt = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

type Props = {
  items: CartItem[];
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onChangeQty: (title: string, delta: number) => void;
  onRemove: (title: string) => void;
};

const CartDrawer = ({ items, open, onOpenChange, onChangeQty, onRemove }: Props) => {
  const count = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + toNumber(i.price) * i.qty, 0);

  const message = [
    "Olá! Vim pelo site da Biomundo ParkShopping e quero fazer este pedido:",
    "",
    ...items.map((i) => `• ${i.qty}x ${i.title} (${i.brand}) - ${fmt(toNumber(i.price) * i.qty)}`),
    "",
    `Total estimado: ${fmt(total)}`,
    "",
    "Pode confirmar a disponibilidade?",
  ].join("\n");

  return (
    <>
      {count > 0 && (
        <button
          type="button"
          onClick={() => onOpenChange(true)}
          aria-label="Abrir carrinho"
          className="nb-btn fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 !px-5 !py-3 text-xs md:bottom-8 md:right-8"
        >
          <ShoppingBag className="h-4 w-4" strokeWidth={2.2} />
          Carrinho ({count})
        </button>
      )}

      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent className="flex w-full flex-col bg-background sm:max-w-md">
          <SheetHeader>
            <SheetTitle className="font-hero text-2xl font-bold uppercase text-neutral-900">Seu carrinho</SheetTitle>
          </SheetHeader>

          {items.length === 0 ? (
            <p className="mt-6 font-sans text-sm text-neutral-500">Seu carrinho está vazio.</p>
          ) : (
            <>
              <ul className="mt-4 flex-1 space-y-3 overflow-y-auto">
                {items.map((i) => (
                  <li key={i.title} className="flex gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                    <img src={i.image} alt={i.title} className="h-16 w-16 object-contain" />
                    <div className="flex flex-1 flex-col">
                      <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">{i.brand}</p>
                      <p className="font-hero text-sm font-bold uppercase leading-tight text-neutral-900">{i.title}</p>
                      <div className="mt-auto flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2">
                          <button type="button" aria-label="Diminuir" onClick={() => onChangeQty(i.title, -1)} className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300">
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-5 text-center font-sans text-sm font-medium">{i.qty}</span>
                          <button type="button" aria-label="Aumentar" onClick={() => onChangeQty(i.title, 1)} className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300">
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="font-sans text-sm font-semibold text-neutral-900">{fmt(toNumber(i.price) * i.qty)}</span>
                        <button type="button" aria-label="Remover" onClick={() => onRemove(i.title)} className="text-neutral-400 hover:text-neutral-900">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-4 border-t border-neutral-200 pt-4">
                <div className="flex items-center justify-between font-sans">
                  <span className="text-sm font-medium text-neutral-600">Total estimado</span>
                  <span className="text-xl font-semibold text-neutral-900">{fmt(total)}</span>
                </div>
                <a
                  href={whatsappLink(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nb-btn mt-4 inline-flex w-full items-center justify-center !py-3 text-xs"
                >
                  Enviar pedido no WhatsApp
                </a>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
};

export default CartDrawer;
