import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, useReveal } from "@/components/portfolio-ui";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education & Credentials — Aloke Krishna T R" },
      {
        name: "description",
        content:
          "BCA in Computer Science from Hindusthan College of Arts and Science, Advanced Diploma in Cyber Defense, and spoken languages.",
      },
      { property: "og:title", content: "Education & Credentials — Aloke Krishna T R" },
      {
        property: "og:description",
        content: "Degree, cybersecurity credentials and language proficiencies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EducationPage,
});

function EducationPage() {
  useReveal();
  return (
    <>
      <PageHeader eyebrow="Education" title="Education & Credentials" />
      <section className="mx-auto max-w-6xl px-5 pt-8 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="reveal rounded-2xl border border-border bg-card p-6">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">Education</p>
            <h2 className="mt-3 text-lg font-semibold">Hindusthan College of Arts and Science</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Bachelor of Computer Application, Computer Science · May 2022 – July 2025
            </p>
          </div>
          <div className="reveal rounded-2xl border border-border bg-card p-6">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">Certification</p>
            <h2 className="mt-3 text-lg font-semibold">Advanced Diploma in Cyber Defense</h2>
          </div>
          <div className="reveal rounded-2xl border border-border bg-card p-6">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">Languages</p>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              <li>Malayalam — Native or Bilingual</li>
              <li>English — Professional Working</li>
              <li>Tamil — Limited Working</li>
              <li>Hindi — Elementary</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
