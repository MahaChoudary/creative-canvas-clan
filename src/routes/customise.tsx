import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/brand-button";
import { whatsappLink } from "@/config/site";
import { buildCustomiseMessage, type CustomiseDetails } from "@/lib/order-message";

export const Route = createFileRoute("/customise")({
  head: () => ({
    meta: [
      { title: "Customise a Gift — Afroz Artistry" },
      { name: "description", content: "Request a fully personalised handmade gift from Afroz Artistry." },
      { property: "og:title", content: "Customise a Gift — Afroz Artistry" },
      { property: "og:description", content: "Tell us your idea and we'll craft a one-of-a-kind gift." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Customise,
});

const field = "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary";

function Customise() {
  const [d, setD] = useState<CustomiseDetails>({
    recipient: "", occasion: "", giftType: "", budget: "", colors: "", personalMessage: "", notes: "", inspirationFiles: [],
  });
  const set = (k: keyof CustomiseDetails) => (e: { target: { value: string } }) => setD({ ...d, [k]: e.target.value });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    window.open(whatsappLink(buildCustomiseMessage(d)), "_blank", "noopener,noreferrer");
  }

  const inputs: [keyof CustomiseDetails, string][] = [
    ["recipient", "Who is it for?"], ["occasion", "Occasion"], ["giftType", "Gift type / idea"],
    ["budget", "Budget range"], ["colors", "Preferred colours / theme"],
  ];

  return (
    <>
      <PageHeader eyebrow="Made for you" title="Customise a gift" subtitle="Share your idea and we'll continue the conversation on WhatsApp." />
      <form onSubmit={submit} className="mx-auto max-w-2xl space-y-4 px-4 py-16 sm:px-6">
        {inputs.map(([k, label]) => (
          <label key={k} className="block space-y-1.5 text-sm">
            <span>{label}</span>
            <input className={field} value={d[k] as string} onChange={set(k)} required={k === "recipient" || k === "giftType"} />
          </label>
        ))}
        <label className="block space-y-1.5 text-sm"><span>Personal message</span>
          <textarea className={field} rows={3} value={d.personalMessage} onChange={set("personalMessage")} /></label>
        <label className="block space-y-1.5 text-sm"><span>Additional notes</span>
          <textarea className={field} rows={3} value={d.notes} onChange={set("notes")} /></label>
        <label className="block space-y-1.5 text-sm"><span>Inspiration images (you'll send them in WhatsApp)</span>
          <input type="file" multiple accept="image/*" className={field}
            onChange={(e) => setD({ ...d, inspirationFiles: Array.from(e.target.files ?? []).map((f) => f.name) })} /></label>
        <Button type="submit" className="w-full">Send request on WhatsApp</Button>
      </form>
    </>
  );
}
