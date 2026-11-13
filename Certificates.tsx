import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { certificateGallery } from "@/data/portfolio";

export function Certificates() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  const step = (dir: 1 | -1) =>
    setOpenIndex((i) => (i === null ? i : (i + dir + certificateGallery.length) % certificateGallery.length));

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const active = openIndex === null ? null : certificateGallery[openIndex];

  return (
    <section id="certificates" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Proof"
          title="Certificates"
          subtitle="Every certificate below is the real document — tap any one to open it full size."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificateGallery.map((c, i) => (
            <button
              key={c.title}
              onClick={() => setOpenIndex(i)}
              className="glass-card group flex flex-col overflow-hidden rounded-3xl text-left transition-transform duration-300 hover:-translate-y-1"
              aria-label={`Open certificate: ${c.title}`}
            >
              <div className="relative overflow-hidden border-b border-border bg-secondary/40">
                <img
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-border bg-background/70 text-foreground opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                  <Maximize2 className="h-4 w-4" />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold leading-snug">{c.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{c.issuer}</p>
                <p className="mt-auto pt-4 font-mono text-[0.7rem] uppercase tracking-wider text-primary">
                  {c.date}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={(o) => !o && setOpenIndex(null)}>
        <DialogContent className="max-w-4xl gap-0 overflow-hidden rounded-2xl border-border bg-background/95 p-0 backdrop-blur-xl sm:max-w-4xl">
          {active && (
            <>
              <div className="border-b border-border bg-secondary/30 p-5">
                <DialogHeader className="space-y-1 text-left">
                  <DialogTitle className="pr-8 text-lg leading-snug">{active.title}</DialogTitle>
                  <DialogDescription>
                    {active.issuer} · {active.date}
                  </DialogDescription>
                </DialogHeader>
              </div>

              <div className="max-h-[65vh] overflow-auto bg-background p-4">
                <img
                  src={active.image}
                  alt={active.alt}
                  className="mx-auto w-full rounded-xl border border-border object-contain"
                />
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-border p-4">
                <Button variant="glass" size="pill" onClick={() => step(-1)} aria-label="Previous certificate">
                  <ChevronLeft /> Previous
                </Button>
                <span className="font-mono text-xs text-muted-foreground">
                  {String((openIndex ?? 0) + 1).padStart(2, "0")} / {String(certificateGallery.length).padStart(2, "0")}
                </span>
                <Button variant="glass" size="pill" onClick={() => step(1)} aria-label="Next certificate">
                  Next <ChevronRight />
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
