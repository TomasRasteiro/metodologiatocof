import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import type { PhotoKey } from "@/lib/photos";
import { cn } from "@/lib/utils";

export const btnPrimary =
  "group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-glow hover:shadow-glow";
export const btnOutlineLight =
  "group inline-flex items-center justify-center gap-2 rounded-md border-2 border-ink-foreground/70 px-7 py-[14px] text-sm font-bold uppercase tracking-wider text-ink-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-ink-foreground hover:bg-ink-foreground hover:text-ink";
export const btnOutlineDark =
  "group inline-flex items-center justify-center gap-2 rounded-md border-2 border-foreground px-7 py-[14px] text-sm font-bold uppercase tracking-wider text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground hover:text-background";

export function Arrow() {
  return <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />;
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-primary", className)}>
      <span className="h-0.5 w-8 bg-primary" aria-hidden />
      {children}
    </p>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  intro,
  className,
  light,
  center,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={cn("max-w-3xl", center && "mx-auto text-center", className)}>
      <Eyebrow className={cn(center && "justify-center")}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "mt-4 text-4xl font-extrabold uppercase leading-[0.95] sm:text-5xl lg:text-6xl",
          light ? "text-ink-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p className={cn("mt-5 text-base leading-relaxed sm:text-lg", light ? "text-ink-muted" : "text-muted-foreground")}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}

/** Cabeçalho das páginas interiores. */
export function PageHero({ eyebrow, title, intro, photo }: { eyebrow: string; title: ReactNode; intro: ReactNode; photo: PhotoKey }) {
  return (
    <section className="relative isolate flex min-h-[62svh] items-end overflow-hidden bg-ink pb-14 pt-32 sm:pb-20">
      <div className="absolute inset-0 -z-10">
        <Photo name={photo} priority sizes="100vw" className="animate-hero-zoom" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-side-overlay" />
      </div>
      <div className="container-site">
        <div className="max-w-3xl animate-hero-in">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-5xl font-extrabold uppercase leading-[0.9] text-ink-foreground sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-foreground/85 sm:text-lg">{intro}</p>
        </div>
      </div>
    </section>
  );
}

/** Banda final de chamada à inscrição. */
export function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden bg-primary">
      <div
        className="pointer-events-none absolute -right-10 top-1/2 -z-10 -translate-y-1/2 select-none font-display text-[11rem] font-black uppercase leading-none text-primary-foreground/10 sm:text-[16rem]"
        aria-hidden
      >
        TOCOF
      </div>
      <div className="container-site flex flex-col items-start gap-8 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary-foreground/80">Inscrições abertas</p>
          <h2 className="mt-3 text-4xl font-extrabold uppercase leading-[0.95] text-primary-foreground sm:text-6xl">
            Connosco todos jogam!
          </h2>
        </Reveal>
        <Reveal delay={120} className="flex flex-col gap-3 sm:flex-row">
          <Link
            to="/inscricoes"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-ink px-7 py-4 text-sm font-bold uppercase tracking-wider text-ink-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Quero inscrever-me <Arrow />
          </Link>
          <Link
            to="/contactos"
            className="group inline-flex items-center justify-center gap-2 rounded-md border-2 border-primary-foreground px-7 py-[14px] text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-foreground hover:text-primary"
          >
            Contactos
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
