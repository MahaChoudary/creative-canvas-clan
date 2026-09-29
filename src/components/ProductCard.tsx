import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { formatPrice } from "@/config/site";
import type { Product } from "@/data/products";
import { Badge } from "@/components/ui/SectionHeading";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/wallet-cards/$slug"
      params={{ slug: product.slug }}
      className="surface-card group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative aspect-4/5 overflow-hidden bg-secondary">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge ? (
          <div className="absolute left-4 top-4">
            <Badge>{product.badge}</Badge>
          </div>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 text-xl leading-snug">{product.name}</h3>
          <ArrowUpRight className="mt-1 size-4 shrink-0 text-rosegold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {product.shortDescription}
        </p>
        <p className="mt-auto pt-3 text-sm font-semibold tracking-wide text-dusty">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
