import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png.asset.json";
import { site } from "@/config/site";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/wallet-cards", label: "Wallet Cards" },
  { to: "/customise", label: "Customise" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300",
        scrolled ? "glass-bar" : "bg-background",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 sm:px-6"
      >
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label={`${site.name} home`}>
          <img
            src={logo.url}
            alt=""
            className="size-10 shrink-0 rounded-full border border-blush object-cover sm:size-11"
          />
          <span className="hidden truncate font-display text-lg tracking-wide sm:block">
            {site.name}
          </span>
        </Link>

        <ul className="hidden items-center justify-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-foreground after:w-full" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="relative pb-1 text-sm transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-rosegold after:transition-all after:duration-300 hover:text-foreground hover:after:w-full"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-1">
          <Link
            to="/cart"
            aria-label={`Cart, ${count} item${count === 1 ? "" : "s"}`}
            className="relative grid size-11 shrink-0 place-items-center rounded-full text-foreground transition-colors hover:bg-secondary"
          >
            <ShoppingBag className="size-5" />
            {count > 0 ? (
              <span className="absolute right-1 top-1 grid min-w-5 place-items-center rounded-full bg-primary px-1 text-[0.65rem] font-semibold text-primary-foreground">
                {count}
              </span>
            ) : null}
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid size-11 shrink-0 place-items-center rounded-full text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </nav>

      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-foreground/25 backdrop-blur-sm"
          />
          <div className="absolute right-0 top-0 flex h-full w-[78%] max-w-xs flex-col gap-2 bg-card p-6 shadow-lift">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-display text-xl">{site.name}</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid size-10 place-items-center rounded-full hover:bg-secondary"
              >
                <X className="size-5" />
              </button>
            </div>
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "bg-secondary" }}
                className="rounded-2xl px-4 py-3 text-base transition-colors hover:bg-secondary"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
