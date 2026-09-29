import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, MessageCircle, Truck } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { site, whatsappInquiryMessage, whatsappLink } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex min-w-0 items-center gap-3">
              <img
                src={logo.url}
                alt=""
                className="size-12 shrink-0 rounded-full border border-blush object-cover"
              />
              <span className="truncate font-display text-2xl">{site.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Handmade personalised gifts, wrapped with care and sent across Pakistan.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <ButtonLink to="/wallet-cards" size="sm">
                Shop Wallet Cards
              </ButtonLink>
              <ButtonLink to="/customise" variant="outline" size="sm">
                Customise Your Gift
              </ButtonLink>
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Afroz Artistry on Instagram"
                className="grid size-10 place-items-center rounded-full border border-blush text-dusty transition-colors hover:bg-secondary"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href={whatsappLink(whatsappInquiryMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Afroz Artistry on WhatsApp"
                className="grid size-10 place-items-center rounded-full border border-blush text-dusty transition-colors hover:bg-secondary"
              >
                <MessageCircle className="size-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <h3 className="eyebrow mb-4">Explore</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/wallet-cards", label: "Wallet Cards" },
                { to: "/customise", label: "Customise" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="eyebrow mb-4">Find us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-rosegold" />
                <span>{site.city}</span>
              </li>
              <li className="flex items-start gap-2">
                <Truck className="mt-0.5 size-4 shrink-0 text-rosegold" />
                <span>Nationwide Delivery</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-12" />
        <p className="mt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
