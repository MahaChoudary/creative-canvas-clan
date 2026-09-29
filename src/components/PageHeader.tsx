import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h1 className="max-w-3xl text-4xl leading-[1.08] sm:text-5xl md:text-6xl">{title}</h1>
        {subtitle ? (
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
