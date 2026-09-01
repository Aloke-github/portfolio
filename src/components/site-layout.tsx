import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/education", label: "Education" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [loaded, setLoaded] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 550);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div
        aria-hidden
        className={`fixed inset-0 z-100 flex items-center justify-center bg-background transition-opacity duration-700 ${
          loaded ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-border border-t-primary" />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Link to="/" className="text-sm font-semibold tracking-tight">
            AK<span className="text-grad">TR</span>
          </Link>
          <div className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            {navLinks.slice(1).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground font-medium" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle color theme"
            className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </nav>
        <div className="flex gap-4 overflow-x-auto border-t border-border/60 px-5 py-2 text-xs text-muted-foreground md:hidden">
          {navLinks.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="whitespace-nowrap transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </header>

      <main id="top">{children}</main>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Aloke Krishna T R · Thrissur, Kerala, India
      </footer>
    </div>
  );
}
