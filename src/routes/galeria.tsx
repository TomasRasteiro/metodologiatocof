import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/site/Gallery";
import { CtaBand, PageHero } from "@/components/site/ui";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/galeria")({
  head: () =>
    pageHead(
      "Galeria — Momentos TOCOF",
      "Fotografias dos treinos, jogos, equipas e celebrações do Clube de Futebol Metodologia TOCOF.",
      "/galeria",
    ),
  component: Galeria,
});

function Galeria() {
  return (
    <>
      <PageHero
        photo="festejo-bancada"
        eyebrow="Galeria"
        title={
          <>
            Momentos <span className="text-primary">TOCOF</span>
          </>
        }
        intro="Treinos, jogos, conquistas e celebrações. Toca numa fotografia para a ampliar."
      />
      <section className="py-16 sm:py-24">
        <div className="container-site">
          <Gallery
            items={[
              { name: "festejo-bancada", span: "big" },
              { name: "atleta-feminina-jogo", span: "tall" },
              { name: "jogo-conducao-bola" },
              { name: "atleta-concentracao" },
              { name: "abraco-equipa", span: "wide" },
              { name: "cartao-branco-fair-play", span: "tall" },
              { name: "feminina-sub15-vice-campeas" },
              { name: "equipa-infantis", span: "tall" },
              { name: "campeoes-infantis-2023-2024" },
              { name: "equipas-alinhadas-escola", span: "wide" },
              { name: "grupo-abraco-treino" },
              { name: "cartao-branco-arbitro", span: "tall" },
              { name: "bandeira-da-etica", span: "wide" },
              { name: "cerimonia-bandeira-etica" },
              { name: "equipa-alinhada-campo", span: "wide" },
              { name: "tocof-10-anos-homenagem" },
              { name: "tocof-10-anos-sessao", span: "wide" },
            ]}
          />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
