import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ButtonAnchor } from "@/components/ui/brand-button";
import { site, whatsappInquiryMessage, whatsappLink } from "@/config/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Afroz Artistry" },
      { name: "description", content: "Get in touch with Afroz Artistry on WhatsApp or Instagram to order personalised gifts." },
      { property: "og:title", content: "Contact — Afroz Artistry" },
      { property: "og:description", content: "Order personalised handmade gifts via WhatsApp or Instagram." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHeader eyebrow="Say hello" title="Contact us" subtitle={`${site.city} · ${site.delivery}`} />
      <section className="mx-auto grid max-w-4xl gap-6 px-4 py-16 sm:grid-cols-2 sm:px-6">
        <div className="rounded-2xl border border-border bg-card p-8">
          <h2 className="text-2xl">WhatsApp</h2>
          <p className="mt-2 text-sm text-muted-foreground">The fastest way to order or ask a question.</p>
          <ButtonAnchor href={whatsappLink(whatsappInquiryMessage)} target="_blank" rel="noopener noreferrer" className="mt-6">Chat on WhatsApp</ButtonAnchor>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8">
          <h2 className="text-2xl">Instagram</h2>
          <p className="mt-2 text-sm text-muted-foreground">See our latest work and send us a DM.</p>
          <ButtonAnchor href={site.instagramUrl} target="_blank" rel="noopener noreferrer" variant="outline" className="mt-6">Visit Instagram</ButtonAnchor>
        </div>
      </section>
    </>
  );
}
