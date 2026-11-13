import { ArrowUpRight, Award, BadgeCheck, Brush, Mail, Palette, Pencil, Trophy, Github, Linkedin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { achievements, certifications, experience, learning, profile } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Exposure"
          title="Beyond the Classroom"
          subtitle="Bootcamps, client work, hackathons and tech events that shaped how I learn."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {experience.map((e) => (
            <div key={e.title} className="glass-card rounded-3xl p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-primary">{e.meta}</p>
              <h3 className="mt-2 text-lg font-semibold">{e.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.text}</p>
              {e.link && (
                <a href={e.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-medium hover:text-primary">
                  View Project <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Milestones" title="Achievements & Certifications" />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass-card rounded-3xl p-8">
            <p className="eyebrow flex items-center gap-2"><Trophy className="h-4 w-4 text-violet" /> Achievements</p>
            <ul className="mt-6 space-y-5">
              {achievements.map((a) => (
                <li key={a.title} className="flex gap-4">
                  <Award className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">{a.title}</h3>
                    <p className="text-sm text-muted-foreground">{a.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card rounded-3xl p-8">
            <p className="eyebrow flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-violet" /> Certifications</p>
            <ul className="mt-6 space-y-4">
              {certifications.map((c) => (
                <li key={c.title} className="rounded-2xl border border-border bg-secondary/40 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold leading-snug">{c.title}</h3>
                    <span className="shrink-0 rounded-full bg-brand px-2.5 py-0.5 text-[0.65rem] font-semibold text-primary-foreground">
                      {c.status}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Learning() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <SectionHeading eyebrow="In progress" title="Currently Learning" />
        <ul className="flex flex-wrap justify-center gap-3">
          {learning.map((l) => (
            <li key={l} className="glass-card rounded-full px-5 py-2 text-sm">{l}</li>
          ))}
        </ul>
        <p className="mt-10 font-display text-lg text-muted-foreground">
          Always learning. <span className="text-gradient font-semibold">Always building.</span>
        </p>
      </div>
    </section>
  );
}

export function BeyondCode() {
  const items = [
    { icon: Palette, label: "Painting" },
    { icon: Pencil, label: "Sketching" },
    { icon: Brush, label: "Creative work" },
  ];
  return (
    <section id="beyond-code" className="py-24">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading
          eyebrow="Creative side"
          title="Beyond Code"
          subtitle="When I'm not coding, I love expressing ideas through art — with multiple drawing awards along the way."
        />
        <div className="grid gap-5 sm:grid-cols-3">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="glass-card flex flex-col items-center gap-3 rounded-3xl p-8">
              <Icon className="h-8 w-8 text-violet" />
              <span className="font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-4xl px-5">
        <div className="glass-card relative overflow-hidden rounded-[2rem] p-10 text-center md:p-16">
          <div className="pointer-events-none absolute inset-0 bg-cover-glow opacity-60" />
          <div className="relative">
            <p className="eyebrow">Contact</p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Let's build something <span className="text-gradient">meaningful.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Whether it's an AI idea, a website, a design concept, or a new project — I'm always
              open to learning, collaborating, and creating.
            </p>
            <a href={`mailto:${profile.email}`} className="mt-6 inline-block font-display text-lg hover:text-primary">
              {profile.email}
            </a>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild variant="hero" size="pill">
                <a href={`mailto:${profile.email}`}><Mail /> Email Me</a>
              </Button>
              <Button asChild variant="glass" size="pill">
                <a href={profile.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>
              </Button>
              <Button asChild variant="glass" size="pill">
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-20 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Shivangi Goel · Designed & built with curiosity.
      </footer>
    </section>
  );
}
