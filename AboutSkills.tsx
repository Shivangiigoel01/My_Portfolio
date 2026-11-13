import { GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { education, skillGroups } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="About" title="About Me" />
        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
          <div className="glass-card space-y-4 rounded-3xl p-8 leading-relaxed text-muted-foreground">
            <p>
              I'm a second-year B.Tech student specializing in Artificial Intelligence & Machine
              Learning at GLA University, Mathura. I enjoy building things that combine technology
              with creativity — from AI-powered tools and data dashboards to websites and user
              interfaces.
            </p>
            <p>
              I'm currently exploring AI/ML, full-stack development, data analysis, data
              visualization, and UI/UX design. I learn best by building real projects and
              experimenting with new technologies.
            </p>
            <p>
              My goal is to grow into a versatile technology professional — across AI/ML
              engineering, software and full-stack development, and UI/UX design.
            </p>
          </div>
          <div className="glass-card rounded-3xl p-8">
            <p className="eyebrow flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-violet" /> Education
            </p>
            <ol className="mt-6 space-y-6 border-l border-border pl-5">
              {education.map((e) => (
                <li key={e.school} className="relative">
                  <span className="absolute -left-[1.6rem] top-1.5 h-2.5 w-2.5 rounded-full bg-brand" />
                  <h3 className="font-semibold">{e.school}</h3>
                  <p className="text-sm text-muted-foreground">{e.detail}</p>
                  <p className="mt-1 font-mono text-xs text-primary">{e.year}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills"
          subtitle="Technologies and tools I use while learning and building."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g) => (
            <div key={g.title} className="glass-card rounded-3xl p-6">
              <h3 className="font-semibold">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
