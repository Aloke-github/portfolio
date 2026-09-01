import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, useReveal } from "@/components/portfolio-ui";
import { EMAIL, LINKEDIN } from "@/lib/portfolio-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aloke Krishna T R" },
      {
        name: "description",
        content:
          "Get in touch with Aloke Krishna T R by email or LinkedIn about SOC L1 and cybersecurity analyst opportunities.",
      },
      { property: "og:title", content: "Contact — Aloke Krishna T R" },
      {
        property: "og:description",
        content: "Email and LinkedIn contact details for recruiters and security professionals.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  useReveal();
  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's talk" />
      <section className="mx-auto max-w-3xl px-5 pt-8 pb-24">
        <p className="reveal text-muted-foreground">
          Open to connecting with recruiters, fellow security professionals, and anyone building
          in cybersecurity.
        </p>
        <div className="reveal mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="shine-btn bg-grad rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20"
          >
            {EMAIL}
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </>
  );
}
