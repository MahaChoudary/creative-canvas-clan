import { createFileRoute, Link } from "@tanstack/react-router";
import { Gift, Instagram, MessageCircle, Package, Sparkles, Star } from "lucide-react";
import { ButtonAnchor, ButtonLink } from "@/components/ui/brand-button";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredProducts, galleryImages, reviews } from "@/data/products";
import { site, whatsappInquiryMessage, whatsappLink } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Afroz Artistry — Personalised Wallet Cards & Handmade Gifts" },
      {
        name: "description",
        content:
          "Handmade personalised wallet cards and gift boxes from Afroz Artistry in Daska. Order on WhatsApp, delivered nationwide.",
      },
      { property: "og:title", content: "Afroz Artistry — Personalised Gifting" },
      {
        property: "og:description",
        content: "Personalised wallet cards and handmade gifts, delivered across Pakistan.",
      },
    ],
  }),
  component: Home,
});

const steps = [
  { icon: Gift, title: "Choose", text: "Pick a wallet card or a gift idea." },
  { icon: Sparkles, title: "Customise", text: "Add names, photos and a message." },
  { icon: Package, title: "Add to Cart", text: "Review your order in one place." },
  { icon: MessageCircle, title: "Confirm on WhatsApp", text: "We finalise details with you." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="eyebrow mb-4">{site.city} · Nationwide Delivery</p>
            <h1 className="text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
              Small gifts that
              <span className="block italic text-dusty">carry a whole feeling.</span>
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Personalised wallet cards and handmade gift boxes, finished one at a time in our
              Daska studio and sent anywhere in Pakistan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/wallet-cards" size="lg">
                Shop Wallet Cards
              </ButtonLink>
              <ButtonLink to="/customise" variant="outline" size="lg">
                Customise Your Gift
              </ButtonLink>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={galleryImages[0].url}
              alt={galleryImages[0].alt}
              className="surface-card mt-8 aspect-3/4 w-full object-cover"
            />
            <img
              src={galleryImages[4].url}
              alt={galleryImages[4].alt}
              className="surface-card aspect-3/4 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Launch collection"
          title="Featured Wallet Cards"
          subtitle="Pocket-sized keepsakes, personalised with a name, a photo or a message only they will understand."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink to="/wallet-cards" variant="outline">
            View all wallet cards
          </ButtonLink>
        </div>
      </section>

      {/* Customise */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <img
            src={galleryImages[2].url}
            alt={galleryImages[2].alt}
            className="surface-card aspect-4/3 w-full object-cover"
          />
          <div>
            <SectionHeading
              align="left"
              eyebrow="Made for one person"
              title="Customise your gift"
              subtitle="Tell us who it's for, the occasion and the feeling you want. We'll design the hamper, box or card around it."
            />
            <div className="mt-8">
              <ButtonLink to="/customise" size="lg">
                Start a custom request
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="Simple process" title="How it works" />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="surface-card p-6">
              <s.icon className="size-5 text-rosegold" />
              <p className="eyebrow mt-4">Step {i + 1}</p>
              <h3 className="mt-1 text-xl">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Reviews */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="Kind words" title="What customers say" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((r, i) => (
              <figure key={i} className="surface-card p-6">
                <div className="flex gap-1 text-rosegold" aria-label="5 out of 5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-3.5 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 font-display text-lg leading-snug">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {r.name} · {r.city}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="From the studio"
          title="Recent creations"
          subtitle="A look at gifts we've wrapped and sent lately."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {galleryImages.map((img) => (
            <img
              key={img.url}
              src={img.url}
              alt={img.alt}
              loading="lazy"
              className="surface-card aspect-square w-full object-cover transition-transform duration-500 hover:-translate-y-1"
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonAnchor
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            <Instagram className="size-4" />
            Follow on Instagram
          </ButtonAnchor>
        </div>
      </section>

      {/* Pre-footer CTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="surface-card flex flex-col items-center gap-6 px-6 py-12 text-center sm:px-12">
          <h2 className="max-w-xl text-3xl leading-tight sm:text-4xl">
            Have something specific in mind?
          </h2>
          <p className="max-w-md text-sm text-muted-foreground">
            Message us and we'll help you put it together.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <ButtonAnchor
              href={whatsappLink(whatsappInquiryMessage)}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
            >
              <MessageCircle className="size-4" />
              Message on WhatsApp
            </ButtonAnchor>
            <Link
              to="/contact"
              className="inline-flex h-11 items-center rounded-full border border-blush px-6 text-sm transition-colors hover:bg-secondary"
            >
              Contact & delivery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
