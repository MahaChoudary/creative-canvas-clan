import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Button, ButtonLink } from "@/components/ui/brand-button";
import { formatPrice, whatsappLink } from "@/config/site";
import { useCart } from "@/lib/cart";
import { buildOrderMessage, type CheckoutDetails } from "@/lib/order-message";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Afroz Artistry" },
      { name: "description", content: "Send your Afroz Artistry order via WhatsApp." },
      { property: "og:title", content: "Checkout — Afroz Artistry" },
      { property: "og:description", content: "Complete your personalised gift order on WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Checkout,
});

const field = "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary";

function Checkout() {
  const { items, subtotal } = useCart();
  const [d, setD] = useState<CheckoutDetails>({ name: "", phone: "", city: "", address: "", notes: "" });
  const set = (k: keyof CheckoutDetails) => (e: { target: { value: string } }) => setD({ ...d, [k]: e.target.value });

  if (items.length === 0) {
    return (
      <>
        <PageHeader eyebrow="Checkout" title="Nothing to check out yet" />
        <div className="py-12 text-center"><ButtonLink to="/wallet-cards">Browse wallet cards</ButtonLink></div>
      </>
    );
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    window.open(whatsappLink(buildOrderMessage(d, items, subtotal)), "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <PageHeader eyebrow="Checkout" title="Your details" subtitle="We'll send your order to us on WhatsApp to confirm delivery and payment." />
      <form onSubmit={submit} className="mx-auto max-w-2xl space-y-4 px-4 py-12 sm:px-6">
        {(["name", "phone", "city"] as const).map((k) => (
          <label key={k} className="block space-y-1.5 text-sm capitalize"><span>{k}</span>
            <input className={field} value={d[k]} onChange={set(k)} required /></label>
        ))}
        <label className="block space-y-1.5 text-sm"><span>Address</span>
          <textarea className={field} rows={2} value={d.address} onChange={set("address")} required /></label>
        <label className="block space-y-1.5 text-sm"><span>Notes (optional)</span>
          <textarea className={field} rows={2} value={d.notes} onChange={set("notes")} /></label>
        <p className="pt-2 text-lg">Subtotal: <strong>{formatPrice(subtotal)}</strong></p>
        <Button type="submit" className="w-full">Send order on WhatsApp</Button>
      </form>
    </>
  );
}
