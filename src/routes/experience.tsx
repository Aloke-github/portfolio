import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, useReveal } from "@/components/portfolio-ui";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Aloke Krishna T R" },
      {
        name: "description",
        content:
          "Hands-on cybersecurity training at RedTeam Hacker Academy: penetration testing, secure system design and ethical hacking labs.",
      },
      { property: "og:title", content: "Experience — Aloke Krishna T R" },
      {
        property: "og:description",
        content: "Timeline of hands-on security operations and red-team training.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  useReveal();
  return (
    <>
      <PageHeader eyebrow="Experience" title="Where I've trained" />
      <section className="mx-auto max-w-3xl px-5 pt-8 pb-24">
        <ol className="border-l border-border pl-8">
          <li className="reveal relative">
            <span className="bg-grad absolute -left-[2.15rem] top-1.5 h-3 w-3 rounded-full ring-4 ring-background" />
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              June 2025 – Present · 1 year 4 months · Thrissur
            </p>
            <h2 className="mt-2 text-xl font-semibold">Student — RedTeam Hacker Academy</h2>
            <p className="mt-3 text-muted-foreground">
              The ADCD Course by RedTeam Hacker Academy is an advanced, hands-on cybersecurity
              program focused on cultivating real-world skills in penetration testing, secure
              system design, and ethical hacking. Emphasizing practical labs and live simulations,
              it prepares participants for industry-standard certifications and roles in red-team
              operations.
            </p>
          </li>
        </ol>
      </section>
    </>
  );
}
