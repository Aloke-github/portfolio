import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, useReveal } from "@/components/portfolio-ui";
import { certificates } from "@/lib/portfolio-data";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Certificates — Aloke Krishna T R" },
      {
        name: "description",
        content:
          "Advanced Diploma in Cyber Defense and XORION CTF Chapter 1 certificate of participation.",
      },
      { property: "og:title", content: "Certificates — Aloke Krishna T R" },
      {
        property: "og:description",
        content: "Cybersecurity certifications and competition credentials.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CertificatesPage,
});

function CertificatesPage() {
  useReveal();
  return (
    <>
      <PageHeader eyebrow="Certificates" title="Certificates" />
      <section className="mx-auto max-w-6xl px-5 pt-8 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {certificates.map((c) => (
            <div
              key={c.name}
              className="reveal flex h-full flex-col rounded-2xl border border-border bg-card p-6"
            >
              <p className="text-xs tracking-widest text-muted-foreground uppercase">
                {c.issuer}
              </p>
              <h2 className="mt-3 text-lg font-semibold">{c.name}</h2>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
