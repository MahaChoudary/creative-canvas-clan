import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export const Route = createFileRoute("/wallet-cards/")({
  head: () => ({
    meta: [
      { title: "Wallet Cards — Afroz Artistry" },
      {
        name: "description",
        content:
          "Browse personalised wallet cards by Afroz Artistry: photo cards, newspaper minis and handwritten keepsakes.",
      },
      { property: "og:title", content: "Wallet Cards — Afroz Artistry" },
      {
        property: "og:description",
        content: "Personalised, pocket-sized keepsake cards made by hand in Daska.",
      },
    ],
  }),
  component: WalletCards,
});

function WalletCards() {
  return (
    <>
      <PageHeader
        eyebrow="Catalogue"
        title="Wallet Cards"
        subtitle="Keepsakes small enough to carry every day. Each card is made to order and personalised before it ships."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="mb-8 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {products.length} designs
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
