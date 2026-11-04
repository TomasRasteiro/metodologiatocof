import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Photo } from "@/components/site/Photo";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, PageHero, SectionTitle } from "@/components/site/ui";
import { values, highlights } from "@/lib/content";
import { site, formatPhone, telHref } from "@/lib/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/quem-somos")({
  head: () =>
    pageHead(
      "Quem Somos — TOCOF Clube de Futebol",
      "Conhece o Clube de Futebol Metodologia TOCOF, fundado em 2009 pelos Professores Bruno Baptista e Valter Pinheiro. Um projeto desportivo, social e inclusivo.",
      "/quem-somos",
    ),
  component: QuemSomos,
});

function QuemSomos() {
  return (
    <>
      <PageHero
        photo="tocof-10-anos-sessao"
        eyebrow="Quem somos"
        title={
          <>
            Mais que um clube, <span className="text-primary">uma família</span>
          </>
        }
        intro="O Clube de Futebol Metodologia TOCOF é um projeto de cariz desportivo, social e inclusivo, fundado em 2009."
      />

      {/* HISTÓRIA */}
      <section className="py-20 sm:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionTitle
              eyebrow="A nossa história"
              title={
                <>
                  Desde <span className="text-primary">{site.founded}</span> a formar futebolistas
                </>
              }
            />
            <Reveal delay={100} className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                <strong className="text-foreground">TOCOF</strong> é a abreviatura de <strong className="text-foreground">{site.acronym}</strong>, uma
                metodologia desenvolvida pelos Professores de Educação Física Bruno Baptista e Valter Pinheiro.
              </p>
              <p>
                O objetivo é melhorar o desempenho dos atletas e reduzir as lesões, criando uma forma sólida de aprender o Futebol em todas as suas
                variantes.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120} className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <Photo name="tocof-10-anos-homenagem" sizes="(min-width:1024px) 25vw, 50vw" />
            </div>
            <div className="mt-10 aspect-[3/4] overflow-hidden rounded-lg">
              <Photo name="cerimonia-bandeira-etica" sizes="(min-width:1024px) 25vw, 50vw" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROFESSORES */}
      <section className="bg-ink py-20 text-ink-foreground sm:py-28">
        <div className="container-site">
          <SectionTitle light eyebrow="Os fundadores" title="Os nossos professores" intro="Dois Professores de Educação Física na origem da Metodologia TOCOF." />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {site.teachers.map((t, i) => (
              <Reveal key={t.name} delay={i * 120} className="group relative overflow-hidden rounded-lg bg-ink-soft p-8 sm:p-10">
                <span className="pointer-events-none absolute -right-4 -top-8 font-display text-[9rem] font-black leading-none text-ink-foreground/5" aria-hidden>
                  0{i + 1}
                </span>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Professor</p>
                <h3 className="mt-3 text-4xl font-extrabold uppercase sm:text-5xl">{t.name}</h3>
                <p className="mt-2 text-ink-muted">{t.role}</p>
                <a
                  href={telHref(t.phone)}
                  className="mt-8 inline-flex items-center gap-2 rounded-md border border-ink-foreground/15 px-4 py-2.5 text-sm font-semibold transition-colors hover:border-primary hover:bg-primary"
                >
                  <Phone className="h-4 w-4" aria-hidden /> {formatPhone(t.phone)}
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FILOSOFIA */}
      <section className="py-20 sm:py-28">
        <div className="container-site">
          <SectionTitle center eyebrow="A nossa filosofia" title="Crescer no futebol e na vida" />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 100} className="rounded-lg border-t-4 border-primary bg-card p-8 shadow-card">
                <span className="font-display text-5xl font-black text-primary/25">0{i + 1}</span>
                <h3 className="mt-2 text-2xl font-bold uppercase leading-tight">{h.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section id="valores" className="bg-secondary py-20 sm:py-28">
        <div className="container-site">
          <SectionTitle eyebrow="Os nossos valores" title="O que nos une" />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v, i) => (
              <Reveal
                as="li"
                key={v.title}
                delay={i * 70}
                className="group rounded-lg border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-card"
              >
                <v.icon className="h-8 w-8 text-primary" aria-hidden />
                <h3 className="mt-5 text-2xl font-bold uppercase">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
