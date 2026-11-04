import { createFileRoute, Link } from "@tanstack/react-router";
import { Photo } from "@/components/site/Photo";
import { Reveal } from "@/components/site/Reveal";
import { Arrow, CtaBand, PageHero, SectionTitle, btnPrimary } from "@/components/site/ui";
import { methodIntro, pillars } from "@/lib/content";
import { pageHead } from "@/lib/seo";
import type { PhotoKey } from "@/lib/photos";

export const Route = createFileRoute("/metodologia")({
  head: () =>
    pageHead(
      "A Nossa Metodologia — Treino de Optimização das Competências do Futebolista | TOCOF",
      "Desenvolvimento técnico e tático, capacidades físicas, aprendizagem adaptada às idades, prevenção de lesões e formação desportiva e pessoal.",
      "/metodologia",
    ),
  component: Metodologia,
});

const pillarPhotos: PhotoKey[] = ["jogo-conducao-bola", "atleta-concentracao", "equipa-infantis", "grupo-abraco-treino", "cartao-branco-arbitro"];

function Metodologia() {
  return (
    <>
      <PageHero
        photo="jogo-conducao-bola"
        eyebrow="A nossa metodologia"
        title={
          <>
            Treino de Optimização das <span className="text-primary">Competências do Futebolista</span>
          </>
        }
        intro="Uma forma sólida de aprender o Futebol em todas as suas variantes."
      />

      <section className="py-20 sm:py-28">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <SectionTitle eyebrow="O que é o TOCOF" title="Uma metodologia inovadora" />
          <Reveal delay={100}>
            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">{methodIntro}</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="container-site space-y-16 sm:space-y-24">
          {pillars.map((p, i) => (
            <div key={p.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <Reveal className={`aspect-[16/11] overflow-hidden rounded-lg shadow-card ${i % 2 ? "lg:order-2" : ""}`}>
                <Photo name={pillarPhotos[i]} className="transition-transform duration-700 hover:scale-105" />
              </Reveal>
              <Reveal delay={120}>
                <div className="flex items-center gap-4">
                  <span className="font-display text-6xl font-black leading-none text-primary sm:text-7xl">0{i + 1}</span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent text-primary">
                    <p.icon className="h-6 w-6" aria-hidden />
                  </span>
                </div>
                <h2 className="mt-5 text-4xl font-extrabold uppercase leading-[0.95] sm:text-5xl">{p.title}</h2>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">{p.text}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink py-20 text-ink-foreground sm:py-24">
        <div className="container-site flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <Reveal>
            <h2 className="max-w-2xl text-4xl font-extrabold uppercase leading-[0.95] sm:text-5xl">
              Vem treinar com uma <span className="text-primary">metodologia inovadora</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Link to="/inscricoes" className={btnPrimary}>
              Quero inscrever-me <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
