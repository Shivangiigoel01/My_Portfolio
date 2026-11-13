import { ArrowRight, CodeXml, FileText, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import profileImg from "@/assets/profile-shivangi.png.asset.json";
import resume from "@/assets/resume.pdf.asset.json";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-grid pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="pointer-events-none absolute -left-40 -top-20 h-[28rem] w-[28rem] rounded-full bg-violet/25 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -right-40 top-40 h-[32rem] w-[32rem] rounded-full bg-primary/20 blur-3xl animate-blob" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-[1.2fr_1fr]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet/40 bg-secondary/50 px-4 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-foreground/90">
            <span className="h-1.5 w-1.5 rounded-full bg-violet" />
            {profile.badge}
          </span>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] md:text-7xl">
            Hi, I'm <span className="text-gradient">Shivangi Goel.</span>
          </h1>
          <p className="mt-5 font-display text-lg font-medium md:text-xl">{profile.tagline}</p>
          <p className="mt-4 max-w-lg text-muted-foreground">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="pill">
              <a href="#projects">
                View My Work <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="glass" size="pill">
              <a href="#contact">
                Let's Connect <Mail />
              </a>
            </Button>
            <Button asChild variant="subtle" size="pill">
              <a href={resume.url} target="_blank" rel="noreferrer">
                Resume <FileText />
              </a>
            </Button>
          </div>

          <div className="mt-8 flex gap-3">
            <Button asChild variant="glass" size="round" aria-label="GitHub profile">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github /></a>
            </Button>
            <Button asChild variant="glass" size="round" aria-label="LinkedIn profile">
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /></a>
            </Button>
            <Button asChild variant="glass" size="round" aria-label="Send an email">
              <a href={`mailto:${profile.email}`}><Mail /></a>
            </Button>
            <Button asChild variant="subtle" size="round" aria-label="See projects">
              <a href="#projects"><CodeXml /></a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-fade-up [animation-delay:150ms]">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-cover-glow shadow-glow">
            <img
              src={profileImg.url}
              alt="Shivangi Goel — AI/ML student and developer"
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
