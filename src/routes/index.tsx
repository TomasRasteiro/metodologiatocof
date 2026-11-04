import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, Download } from "lucide-react";
import { Photo } from "@/components/site/Photo";
import { Reveal } from "@/components/site/Reveal";
import { Gallery } from "@/components/site/Gallery";
import { Arrow, CtaBand, Eyebrow, SectionTitle, btnOutlineDark, btnOutlineLight, btnPrimary } from "@/components/site/ui";
import { logoUrl } from "@/lib/photos";
import { highlights, pillars, values } from "@/lib/content";
import { site } from "@/lib/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "TOCOF — Clube de Futebol | Mais que um clube, uma família!",
      "Clube de Futebol Metodologia TOCOF: formação de futebol para crianças e jovens na Póvoa de Santo Adrião. Inscrições abertas — connosco todos jogam!",
      "/",
    ),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink pb-16 pt-32 sm:items-center sm:pb-24">
        <div className="absolute inset-0 -z-10">
          <Photo name="abraco-equipa" priority sizes="100vw" className="animate-hero-zoom object-[50%_35%]" />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="absolute inset-0 bg-side-overlay" />
        </div>

        <div className="container-site">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 animate-hero-in">
              <img src={logoUrl} alt="Logótipo do Clube de Futebol TOCOF" width={96} height={96} className="h-20 w-20 drop-shadow-xl sm:h-24 sm:w-24" fetchPriority="high" />
              <div className="text-ink-foreground">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Clube de Futebol</p>
                <p className="font-display text-2xl font-bold uppercase leading-tight">Metodologia TOCOF</p>
                <p className="text-xs uppercase tracking-[0.2em] text-ink-muted">Fundado em {site.founded}</p>
              </div>
            </div>

            <h1
              className="mt-8 text-[3.4rem] font-black uppercase leading-[0.86] text-ink-foreground animate-hero-in sm:text-7xl lg:text-[7.5rem]"
              style={{ animationDelay: "120ms" }}
            >
              Mais que um clube, <span className="text-primary">uma família!</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/85 animate-hero-in sm:text-lg" style={{ animationDelay: "240ms" }}>
              Treino de Optimização das Competências do Futebolista — uma metodologia criada por Professores de Educação Física para melhorar o
              desempenho dos atletas, reduzir as lesões e aprender o Futebol de forma sólida.
            </p>

            <div className="mt-9 flex flex-col gap-3 animate-hero-in sm:flex-row" style={{ animationDelay: "360ms" }}>
              <Link to="/inscricoes" className={btnPrimary}>
                Quero inscrever-me <Arrow />
              </Link>
              <Link to="/metodologia" className={btnOutlineLight}>
                Conhece a nossa metodologia
              </Link>
            </div>
          </div>
        </div>

        <ChevronDown className="absolute bottom-6 left-1/2 hidden h-6 w-6 -translate-x-1/2 animate-bounce text-ink-foreground/60 sm:block" aria-hidden />
      </section>

      {/* NÚMEROS / FACTOS */}
      <section className="border-b bg-background">
        <div className="container-site grid grid-cols-2 divide-border lg:grid-cols-4 lg:divide-x">
          {[
            { k: String(site.founded), v: "Ano de fundação" },
            { k: "2", v: "Professores de Educação Física" },
            { k: "100%", v: "Inclusivo — todos jogam" },
            { k: "Futebol", v: "Em todas as suas variantes" },
          ].map((f, i) => (
            <Reveal key={f.v} delay={i * 80} className="px-2 py-8 text-center lg:py-10">
              <p className="font-display text-4xl font-extrabold uppercase text-primary sm:text-5xl">{f.k}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:text-sm">{f.v}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section className="py-20 sm:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-card sm:aspect-[4/3] lg:aspect-[4/5]">
              <Photo name="grupo-abraco-treino" />
            </div>
            <div className="absolute -bottom-6 -right-3 hidden w-48 overflow-hidden rounded-lg border-4 border-background shadow-card sm:block lg:-right-8 lg:w-56">
              <Photo name="cartao-branco-fair-play" sizes="224px" className="aspect-[3/4]" />
            </div>
          </Reveal>
          <div>
            <SectionTitle
              eyebrow="Bem-vindo ao TOCOF"
              title={
                <>
                  Um projeto desportivo, <span className="text-primary">social e inclusivo</span>
                </>
              }
              intro="O TOCOF foi desenvolvido pelos Professores de Educação Física Bruno Baptista e Valter Pinheiro, com o objetivo de melhorar o desempenho dos atletas e reduzir as lesões, criando uma forma sólida de aprender o Futebol em todas as suas variantes."
            />
            <Reveal delay={120} className="mt-8 grid gap-4 sm:grid-cols-2">
              {site.teachers.map((t) => (
                <div key={t.name} className="rounded-lg border bg-card p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">Professor</p>
                  <p className="mt-1 font-display text-2xl font-bold uppercase">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              ))}
            </Reveal>
            <Reveal delay={200} className="mt-8">
              <Link to="/quem-somos" className={btnOutlineDark}>
                Quem somos <Arrow />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* METODOLOGIA */}
      <section className="bg-ink py-20 text-ink-foreground sm:py-28">
        <div className="container-site">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle
              light
              eyebrow="A nossa metodologia"
              title={
                <>
                  Treino de Optimização das <span className="text-primary">Competências do Futebolista</span>
                </>
              }
            />
            <Reveal delay={100}>
              <Link to="/metodologia" className={btnOutlineLight}>
                Ver metodologia <Arrow />
              </Link>
            </Reveal>
          </div>
          <ul className="mt-14 grid gap-px overflow-hidden rounded-lg bg-ink-foreground/10 sm:grid-cols-2 lg:grid-cols-5">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 80} className="group bg-ink-soft p-7 transition-colors duration-300 hover:bg-ink">
                <span className="font-display text-sm font-bold text-ink-muted">0{i + 1}</span>
                <p.icon className="mt-6 h-9 w-9 text-primary transition-transform duration-300 group-hover:-translate-y-1" aria-hidden />
                <h3 className="mt-5 text-2xl font-bold uppercase leading-tight">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{p.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* DESTAQUES */}
      <section className="py-20 sm:py-28">
        <div className="container-site">
          <SectionTitle center eyebrow="O que oferecemos" title="Formar atletas, formar pessoas" />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {(
              [
                ["jogo-conducao-bola", highlights[0]],
                ["festejo-bancada", highlights[1]],
                ["equipa-infantis", highlights[2]],
              ] as const
            ).map(([img, h], i) => (
              <Reveal key={h.title} delay={i * 100} className="group overflow-hidden rounded-lg border bg-card shadow-card">
                <div className="aspect-[16/10] overflow-hidden">
                  <Photo name={img} sizes="(min-width:1024px) 33vw, 100vw" className="transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-bold uppercase leading-tight">{h.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="bg-secondary py-20 sm:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <SectionTitle eyebrow="Os nossos valores" title="Dentro e fora de campo" intro="Ensinamos o respeito, a colaboração e como lidar com vitórias e derrotas de maneira saudável." />
            <Reveal delay={120} className="mt-8 aspect-[4/3] overflow-hidden rounded-lg">
              <Photo name="bandeira-da-etica" sizes="(min-width:1024px) 40vw, 100vw" />
            </Reveal>
          </div>
          <ul className="grid content-start gap-4 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal
                as="li"
                key={v.title}
                delay={i * 70}
                className={`group rounded-lg border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-card ${i === 4 ? "sm:col-span-2" : ""}`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <v.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-2xl font-bold uppercase">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* INSCRIÇÕES */}
      <section className="relative isolate overflow-hidden bg-ink py-20 text-ink-foreground sm:py-28">
        <div className="absolute inset-0 -z-10 opacity-30">
          <Photo name="equipas-alinhadas-escola" sizes="100vw" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/95 to-ink/60" />
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <Eyebrow>Inscrições</Eyebrow>
              <h2 className="mt-4 text-5xl font-black uppercase leading-[0.9] sm:text-7xl">
                Connosco <span className="text-primary">todos jogam!</span>
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
                Vem divertir-te a treinar com uma metodologia inovadora na {site.location.name}. Descarrega a ficha de inscrição e envia-a para o nosso email.
              </p>
            </Reveal>
            <Reveal delay={120} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={site.fichaUrl} download={site.fichaFilename} className={btnPrimary}>
                <Download className="h-4 w-4" aria-hidden /> Descarregar ficha
              </a>
              <Link to="/inscricoes" className={btnOutlineLight}>
                Como me inscrevo <Arrow />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={150} className="mx-auto w-full max-w-sm">
            <div className="aspect-[4/5] rotate-2 overflow-hidden rounded-lg border-4 border-ink-foreground/10 shadow-2xl transition-transform duration-500 hover:rotate-0">
              <Photo name="atleta-feminina-jogo" sizes="384px" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALERIA */}
      <section className="py-20 sm:py-28">
        <div className="container-site">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionTitle eyebrow="Momentos TOCOF" title="A mancha laranja em campo" />
            <Reveal>
              <Link to="/galeria" className={btnOutlineDark}>
                Ver galeria completa <Arrow />
              </Link>
            </Reveal>
          </div>
          <div className="mt-12">
            <Gallery
              items={[
                { name: "festejo-bancada", span: "big" },
                { name: "atleta-concentracao" },
                { name: "feminina-sub15-vice-campeas" },
                { name: "campeoes-infantis-2023-2024", span: "wide" },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
