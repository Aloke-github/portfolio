import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, useReveal } from "@/components/portfolio-ui";
import { languages } from "@/lib/portfolio-data";

export const Route = createFileRoute("/languages")({
  head: () => ({
    meta: [
      { title: "Languages — Aloke Krishna T R" },
      {
        name: "description",
        content: "Spoken languages: Malayalam, English, Tamil and Hindi.",
      },
      { property: "og:title", content: "Languages — Aloke Krishna T R" },
      {
        property: "og:description",
        content: "Language proficiencies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LanguagesPage,
});

function LanguagesPage() {
  useReveal();
  return (
    <>
      <PageHeader eyebrow="Languages" title="Languages" />
      <section className="mx-auto max-w-6xl px-5 pt-8 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {languages.map((l) => (
            <div
              key={l.name}
              className="reveal flex h-full flex-col rounded-2xl border border-border bg-card p-6"
            >
              <h2 className="text-lg font-semibold">{l.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{l.level}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
