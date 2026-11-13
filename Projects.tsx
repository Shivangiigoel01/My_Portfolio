import { useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  ChartColumn,
  FileText,
  Github,
  HeartPulse,
  LayoutTemplate,
  Sparkles,
  Store,
  Zap,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { projects, type Project, type ProjectCategory } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const icons: Record<Project["icon"], typeof Sparkles> = {
  sparkles: Sparkles,
  zap: Zap,
  store: Store,
  file: FileText,
  chart: ChartColumn,
  heart: HeartPulse,
  book: BookOpen,
  layout: LayoutTemplate,
};

const filters: ("All" | ProjectCategory)[] = ["All", "AI & Data", "Web"];

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Work"
          title="Projects"
          subtitle="A mix of AI tools, client work, full-stack builds and data-driven projects."
        />

        <div className="mb-10 flex justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-colors",
                filter === f
                  ? "border-transparent bg-brand font-semibold text-primary-foreground"
                  : "border-border text-muted-foreground hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => {
            const Icon = icons[p.icon];
            return (
              <article
                key={p.title}
                className="glass-card group flex flex-col overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative flex h-36 items-center justify-center bg-cover-glow bg-grid">
                  <span className="grid h-16 w-16 place-items-center rounded-2xl border border-border bg-background/60 backdrop-blur transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-7 w-7 text-primary" />
                  </span>
                  {p.label && (
                    <span className="absolute left-4 top-4 rounded-full border border-border bg-background/70 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-foreground/80">
                      {p.label}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <li key={t} className="rounded-md bg-secondary px-2 py-0.5 text-[0.7rem] text-muted-foreground">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex gap-4 border-t border-border pt-4 text-sm font-medium">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-foreground hover:text-primary">
                        <Github className="h-4 w-4" /> Code
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-foreground hover:text-violet">
                        Live <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/Shivangiigoel01?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Github className="h-4 w-4" /> See everything on GitHub <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
