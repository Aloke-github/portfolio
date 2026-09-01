import { useEffect, useRef, useState } from "react";

export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - start) / 1200, 1);
          setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref} data-count={value} data-suffix={suffix}>
      {n}
      {suffix}
    </span>
  );
}

export function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setW(level);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [level]);

  return (
    <div ref={ref}>
      <div className="mb-2 flex items-baseline justify-between text-sm">
        <span className="text-foreground/90">{name}</span>
        <span className="font-medium text-grad">
          <CountUp value={level} suffix="%" />
        </span>
      </div>
      <div className="skill-track">
        <span className="skill-fill" style={{ width: `${w}%` }} />
      </div>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="mx-auto max-w-6xl px-5 pt-36 pb-4 md:pt-44">
      <p className="rise rise-1 text-xs tracking-widest text-grad uppercase">{eyebrow}</p>
      <h1 className="rise rise-2 mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
        {title}
      </h1>
      {intro ? (
        <p className="rise rise-3 mt-4 max-w-2xl text-muted-foreground">{intro}</p>
      ) : null}
    </header>
  );
}
