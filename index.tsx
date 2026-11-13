import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Hero } from "@/components/portfolio/Hero";
import { About, Skills } from "@/components/portfolio/AboutSkills";
import { Projects } from "@/components/portfolio/Projects";
import { Certificates } from "@/components/portfolio/Certificates";
import {
  Achievements,
  BeyondCode,
  Contact,
  Experience,
  Learning,
} from "@/components/portfolio/Highlights";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shivangi Goel — AI/ML Student & Developer" },
      {
        name: "description",
        content:
          "Portfolio of Shivangi Goel, B.Tech AI & ML student at GLA University — projects in AI, data, full-stack and web design.",
      },
      { property: "og:title", content: "Shivangi Goel — AI/ML Student & Developer" },
      {
        property: "og:description",
        content: "Projects, skills and achievements of Shivangi Goel — AI/ML, data and web development.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certificates />
        <Learning />
        <BeyondCode />
        <Contact />
      </main>
    </div>
  );
}
