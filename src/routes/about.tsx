import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ButtonLink } from "@/components/ui/brand-button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Afroz Artistry" },
      { name: "description", content: "The story behind Afroz Artistry, a handmade personalised gifting studio in Daska, Pakistan." },
      { property: "og:title", content: "About — Afroz Artistry" },
      { property: "og:description", content: "Handmade personalised gifts, crafted with care in Daska." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader eyebrow="Our story" title="Gifts that carry a little piece of you" subtitle="Afroz Artistry is a small handmade gifting studio based in Daska, Pakistan." />
      <section className="mx-auto max-w-3xl space-y-6 px-4 py-16 text-base leading-relaxed text-muted-foreground sm:px-6">
        <p>Every piece is designed and assembled by hand — from photo wallet cards to fully customised keepsakes. We believe the best gifts are personal, thoughtful and made to be kept.</p>
        <p>Tell us who it's for and what makes them special, and we'll turn it into something they'll carry with them. We deliver nationwide across Pakistan.</p>
        <div className="flex flex-wrap gap-3 pt-4">
          <ButtonLink to="/wallet-cards">Shop wallet cards</ButtonLink>
          <ButtonLink to="/customise" variant="outline">Request a custom gift</ButtonLink>
        </div>
      </section>
    </>
  );
}
