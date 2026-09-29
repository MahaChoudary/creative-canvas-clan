import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { Check, ChevronLeft, Truck } from "lucide-react";
import { useState } from "react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { ProductCard } from "@/components/ProductCard";
import { QuantitySelector } from "@/components/QuantitySelector";
import { Badge } from "@/components/ui/SectionHeading";
import { formatPrice, site } from "@/config/site";
import { getProductBySlug, products, type Product } from "@/data/products";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/wallet-cards/$slug")({
  loader: ({ params }) => {
    const product = getProductBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Card not found — Afroz Artistry" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} — Afroz Artistry` },
        { name: "description", content: product.shortDescription },
        { property: "og:title", content: `${product.name} — Afroz Artistry` },
        { property: "og:description", content: product.shortDescription },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  return <ProductDetailView key={product.id} product={product} />;
}

function ProductDetailView({ product }: { product: Product }) {
  const { addItem } = useCart();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [customization, setCustomization] = useState<Record<string, string>>(() =>
    Object.fromEntries(product.customizationOptions.map((o) => [o.label, o.choices[0]])),
  );
  const [added, setAdded] = useState(false);

  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  function add() {
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity,
      customization,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <Link
          to="/wallet-cards"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="size-4" /> All wallet cards
        </Link>
      </div>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:py-14">
        {/* Gallery */}
        <div>
          <img
            src={product.images[activeImage]}
            alt={`${product.name} — view ${activeImage + 1}`}
            className="surface-card aspect-4/5 w-full object-cover"
          />
          {product.images.length > 1 ? (
            <div className="mt-4 flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img + i}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  aria-label={`Show image ${i + 1}`}
                  aria-current={i === activeImage}
                  className={cn(
                    "size-20 overflow-hidden rounded-xl border transition-all",
                    i === activeImage ? "border-rosegold" : "border-border opacity-70 hover:opacity-100",
                  )}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          ) : null}
        </div>

        {/* Details */}
        <div>
          {product.badge ? <Badge>{product.badge}</Badge> : null}
          <h1 className="mt-4 text-3xl leading-tight sm:text-4xl">{product.name}</h1>
          <p className="mt-3 text-xl font-semibold text-dusty">{formatPrice(product.price)}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {product.shortDescription}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

          <div className="hairline my-7" />

          <h2 className="text-lg">What's included</h2>
          <ul className="mt-3 space-y-2">
            {product.includes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-rosegold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {product.customizationOptions.length ? (
            <div className="mt-7 space-y-5 rounded-2xl border border-blush bg-card/70 p-5 backdrop-blur-sm">
              <h2 className="text-lg">Personalise it</h2>
              {product.customizationOptions.map((opt) => (
                <div key={opt.id}>
                  <p className="mb-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {opt.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {opt.choices.map((choice) => (
                      <button
                        key={choice}
                        type="button"
                        onClick={() =>
                          setCustomization((prev) => ({ ...prev, [opt.label]: choice }))
                        }
                        className={cn(
                          "rounded-full border px-4 py-2 text-xs transition-all",
                          customization[opt.label] === choice
                            ? "border-dusty bg-primary text-primary-foreground"
                            : "border-blush bg-background hover:bg-secondary",
                        )}
                      >
                        {choice}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <QuantitySelector value={quantity} onChange={setQuantity} />
            <Button onClick={add} size="lg">
              {added ? "Added to cart" : "Add to Cart"}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                add();
                navigate({ to: "/checkout" });
              }}
            >
              Order Now
            </Button>
          </div>

          <p className="mt-6 flex items-start gap-2 text-xs text-muted-foreground">
            <Truck className="mt-0.5 size-4 shrink-0 text-rosegold" />
            <span>
              {product.availability === "in-stock" ? "In stock" : "Made to order"} ·{" "}
              {site.delivery}. Delivery charges are confirmed on WhatsApp.
            </span>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl sm:text-3xl">You may also like</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink to="/customise" variant="outline">
            Or request something custom
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
