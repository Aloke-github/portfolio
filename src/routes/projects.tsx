import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, useReveal } from "@/components/portfolio-ui";
import { projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Aloke Krishna T R" },
      {
        name: "description",
        content:
          "Security projects: a Python web vulnerability scanner, a network security lab with Wireshark and Nmap, and XORION CTF participation.",
      },
      { property: "og:title", content: "Projects — Aloke Krishna T R" },
      {
        property: "og:description",
        content: "Scanners, labs and CTF work built while training in security operations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  useReveal();
  return (
    <>
      <PageHeader eyebrow="Projects" title="Things I've built" />
      <section className="mx-auto max-w-6xl px-5 pt-8 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.name}
              className="reveal rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <p className="text-xs tracking-widest text-grad uppercase">{p.tag}</p>
              <h2 className="mt-3 text-lg font-semibold">{p.name}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
