import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { QuantitySelector } from "@/components/QuantitySelector";
import { ButtonLink } from "@/components/ui/brand-button";
import { formatPrice } from "@/config/site";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart — Afroz Artistry" },
      { name: "description", content: "Review the personalised gifts in your Afroz Artistry cart." },
      { property: "og:title", content: "Your Cart — Afroz Artistry" },
      { property: "og:description", content: "Review your personalised gift order." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Cart,
});

function Cart() {
  const { items, subtotal, removeItem, setQuantity } = useCart();
  return (
    <>
      <PageHeader eyebrow="Cart" title="Your cart" />
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        {items.length === 0 ? (
          <div className="space-y-6 text-center">
            <p className="text-muted-foreground">Your cart is empty.</p>
            <ButtonLink to="/wallet-cards">Browse wallet cards</ButtonLink>
          </div>
        ) : (
          <>
            <ul className="divide-y divide-border">
              {items.map((i) => (
                <li key={i.key} className="flex gap-4 py-6">
                  {i.image && <img src={i.image} alt={i.name} className="size-24 rounded-xl object-cover" />}
                  <div className="flex-1 space-y-2">
                    <p className="font-medium">{i.name}</p>
                    {Object.entries(i.customization).map(([k, v]) => (
                      <p key={k} className="text-xs text-muted-foreground">{k}: {v}</p>
                    ))}
                    <div className="flex items-center gap-4">
                      <QuantitySelector value={i.quantity} onChange={(q) => setQuantity(i.key, q)} />
                      <button type="button" onClick={() => removeItem(i.key)} className="text-xs underline text-muted-foreground">Remove</button>
                    </div>
                  </div>
                  <p className="font-medium">{formatPrice(i.price * i.quantity)}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
              <p className="text-lg">Subtotal: <strong>{formatPrice(subtotal)}</strong></p>
              <ButtonLink to="/checkout">Checkout</ButtonLink>
            </div>
          </>
        )}
      </section>
    </>
  );
}
