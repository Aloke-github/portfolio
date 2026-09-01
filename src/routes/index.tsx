import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import { CountUp, useReveal } from "@/components/portfolio-ui";
import { EMAIL, LINKEDIN, stats } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aloke Krishna T R — Cybersecurity Analyst & SOC L1" },
      {
        name: "description",
        content:
          "Portfolio of Aloke Krishna T R, cybersecurity analyst focused on SOC monitoring, threat detection, SIEM, KQL and incident response.",
      },
      { property: "og:title", content: "Aloke Krishna T R — Cybersecurity Analyst & SOC L1" },
      {
        property: "og:description",
        content:
          "SOC L1 skills in security monitoring, threat detection, SIEM, KQL and incident response. Projects, experience and credentials.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  useReveal();

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-5 pt-36 pb-24 md:grid-cols-[1.15fr_0.85fr] md:pt-44">
        <div>
          <p className="rise rise-1 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-grad" />
            Thrissur, Kerala, India · Open to SOC L1 roles
          </p>
          <h1 className="rise rise-2 mt-6 text-5xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="name-grad">Aloke Krishna T R</span>
          </h1>
          <p className="rise rise-3 mt-5 max-w-xl text-lg font-medium text-foreground/90">
            Cybersecurity Analyst | SOC L1 | Security Monitoring | Threat Detection | SIEM |
            Incident Response | KQL
          </p>
          <p className="rise rise-4 mt-4 max-w-xl text-muted-foreground">
            I help organizations catch threats before they cause damage — one log, one alert, one
            investigation at a time.
          </p>
          <div className="rise rise-5 mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="shine-btn bg-grad rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20"
            >
              Get in touch
            </a>
            <Link
              to="/projects"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary"
            >
              View projects
            </Link>
          </div>
          <ul className="rise rise-6 mt-10 flex flex-wrap gap-3">
            {stats.map((s, i) => (
              <li
                key={s.label}
                className={`chip-float rounded-2xl border border-border bg-card px-4 py-3 ${
                  i === 1 ? "d1" : i === 2 ? "d2" : ""
                }`}
              >
                <p className="text-xl font-bold text-grad">
                  <CountUp value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">{s.label}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div
            aria-hidden
            className="glow-anim absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_center,var(--accent-1),transparent_65%)] blur-3xl"
          />
          <div className="portrait-float overflow-hidden rounded-[2rem] border border-border bg-card p-3">
            <img
              src={portrait}
              width={1024}
              height={1024}
              alt="Portrait emblem of Aloke Krishna T R, cybersecurity analyst"
              className="w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="reveal text-center">
              <p className="text-4xl font-extrabold text-grad">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <h2 className="reveal text-3xl font-bold tracking-tight">Explore</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { to: "/about", title: "About", copy: "Background, training and what drives me." },
            { to: "/skills", title: "Skills", copy: "Detection, offensive tooling, networks." },
            { to: "/experience", title: "Experience", copy: "Hands-on security operations training." },
            { to: "/projects", title: "Projects", copy: "Scanners, labs and CTF work." },
            { to: "/education", title: "Education", copy: "Degree, credentials and languages." },
            { to: "/contact", title: "Contact", copy: "Email and LinkedIn." },
          ].map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="reveal rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.copy}</p>
              <span className="mt-4 inline-block text-sm font-medium text-grad">Open →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
