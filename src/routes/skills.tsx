import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SkillBar, useReveal } from "@/components/portfolio-ui";
import { skillGroups } from "@/lib/portfolio-data";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Aloke Krishna T R" },
      {
        name: "description",
        content:
          "Security skills across SIEM, KQL, threat detection, incident response, vulnerability assessment, Burp Suite, Wireshark, Nmap and Python.",
      },
      { property: "og:title", content: "Skills — Aloke Krishna T R" },
      {
        property: "og:description",
        content:
          "Detection and response, offensive assessment, network security and automation skills.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  useReveal();
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="What I work with"
        intro="Proficiency indicators across the tooling and disciplines I train in daily."
      />
      <section className="mx-auto max-w-6xl px-5 pt-8 pb-24">
        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map((g) => (
            <div key={g.title} className="reveal rounded-2xl border border-border bg-card p-6">
              <h2 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
                {g.title}
              </h2>
              <div className="mt-6 space-y-5">
                {g.skills.map((s) => (
                  <SkillBar key={s.name} {...s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
