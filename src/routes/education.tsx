import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, useReveal } from "@/components/portfolio-ui";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Aloke Krishna T R" },
      {
        name: "description",
        content:
          "BCA in Computer Science from Hindusthan College of Arts and Science, and Red Team Academy.",
      },
      { property: "og:title", content: "Education — Aloke Krishna T R" },
      {
        property: "og:description",
        content: "Academic background and specialized training.",
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
      <PageHeader eyebrow="Education" title="Education" />
      <section className="mx-auto max-w-6xl px-5 pt-8 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="reveal flex h-full flex-col rounded-2xl border border-border bg-card p-6">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">Education</p>
            <h2 className="mt-3 text-lg font-semibold">Hindusthan College of Arts and Science</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Bachelor of Computer Application, Computer Science · May 2022 – July 2025
            </p>
          </div>
          <div className="reveal flex h-full flex-col rounded-2xl border border-border bg-card p-6">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">Education</p>
            <h2 className="mt-3 text-lg font-semibold">RedTeam Hacker Academy</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Advanced Diploma in Cyber Defense
              <br />
              June 2025 – August 2026
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
