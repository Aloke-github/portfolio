import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, useReveal } from "@/components/portfolio-ui";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aloke Krishna T R" },
      {
        name: "description",
        content:
          "Aspiring SOC analyst with a BCA in Computer Science and an Advanced Diploma in Cyber Defense, training hands-on in security operations.",
      },
      { property: "og:title", content: "About — Aloke Krishna T R" },
      {
        property: "og:description",
        content:
          "Background, training and approach of an aspiring SOC L1 analyst based in Thrissur, Kerala.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  useReveal();
  return (
    <>
      <PageHeader eyebrow="About" title="Who I am" />
      <section className="mx-auto max-w-3xl px-5 pt-8 pb-24">
        <div className="reveal space-y-4 text-muted-foreground">
          <p>
            I&rsquo;m an aspiring SOC Analyst with a BCA in Computer Science and an Advanced
            Diploma in Cyber Defense, currently training hands-on in Security Operations at
            RedTeam Hacker Academy.
          </p>
          <p>
            I&rsquo;m the person who wants to understand why an alert fired, not just close the
            ticket — and I&rsquo;m building that instinct daily through labs, CTFs, and
            self-directed projects.
          </p>
          <p>
            Currently open to entry-level SOC L1 / Cybersecurity Analyst / Information Security
            roles (on-site, hybrid, or remote).
          </p>
        </div>
      </section>
    </>
  );
}
