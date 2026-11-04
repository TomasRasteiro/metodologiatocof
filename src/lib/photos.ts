// Fotografias reais do TOCOF (originais do site WordPress, otimizadas em WebP).
import abracoEquipaLg from "@/assets/fotos/abraco-equipa-lg.webp.asset.json";
import abracoEquipaSm from "@/assets/fotos/abraco-equipa-sm.webp.asset.json";
import atletaConcentracaoLg from "@/assets/fotos/atleta-concentracao-lg.webp.asset.json";
import atletaConcentracaoSm from "@/assets/fotos/atleta-concentracao-sm.webp.asset.json";
import atletaFemininaJogoLg from "@/assets/fotos/atleta-feminina-jogo-lg.webp.asset.json";
import atletaFemininaJogoSm from "@/assets/fotos/atleta-feminina-jogo-sm.webp.asset.json";
import bandeiraDaEticaLg from "@/assets/fotos/bandeira-da-etica-lg.webp.asset.json";
import bandeiraDaEticaSm from "@/assets/fotos/bandeira-da-etica-sm.webp.asset.json";
import campeoesInfantis20232024Lg from "@/assets/fotos/campeoes-infantis-2023-2024-lg.webp.asset.json";
import campeoesInfantis20232024Sm from "@/assets/fotos/campeoes-infantis-2023-2024-sm.webp.asset.json";
import cartaoBrancoArbitroLg from "@/assets/fotos/cartao-branco-arbitro-lg.webp.asset.json";
import cartaoBrancoArbitroSm from "@/assets/fotos/cartao-branco-arbitro-sm.webp.asset.json";
import cartaoBrancoFairPlayLg from "@/assets/fotos/cartao-branco-fair-play-lg.webp.asset.json";
import cartaoBrancoFairPlaySm from "@/assets/fotos/cartao-branco-fair-play-sm.webp.asset.json";
import cerimoniaBandeiraEticaLg from "@/assets/fotos/cerimonia-bandeira-etica-lg.webp.asset.json";
import cerimoniaBandeiraEticaSm from "@/assets/fotos/cerimonia-bandeira-etica-sm.webp.asset.json";
import equipaAlinhadaCampoLg from "@/assets/fotos/equipa-alinhada-campo-lg.webp.asset.json";
import equipaAlinhadaCampoSm from "@/assets/fotos/equipa-alinhada-campo-sm.webp.asset.json";
import equipaInfantisLg from "@/assets/fotos/equipa-infantis-lg.webp.asset.json";
import equipaInfantisSm from "@/assets/fotos/equipa-infantis-sm.webp.asset.json";
import equipasAlinhadasEscolaLg from "@/assets/fotos/equipas-alinhadas-escola-lg.webp.asset.json";
import equipasAlinhadasEscolaSm from "@/assets/fotos/equipas-alinhadas-escola-sm.webp.asset.json";
import femininaSub15ViceCampeasLg from "@/assets/fotos/feminina-sub15-vice-campeas-lg.webp.asset.json";
import femininaSub15ViceCampeasSm from "@/assets/fotos/feminina-sub15-vice-campeas-sm.webp.asset.json";
import festejoBancadaLg from "@/assets/fotos/festejo-bancada-lg.webp.asset.json";
import festejoBancadaSm from "@/assets/fotos/festejo-bancada-sm.webp.asset.json";
import grupoAbracoTreinoLg from "@/assets/fotos/grupo-abraco-treino-lg.webp.asset.json";
import grupoAbracoTreinoSm from "@/assets/fotos/grupo-abraco-treino-sm.webp.asset.json";
import jogoConducaoBolaLg from "@/assets/fotos/jogo-conducao-bola-lg.webp.asset.json";
import jogoConducaoBolaSm from "@/assets/fotos/jogo-conducao-bola-sm.webp.asset.json";
import tocof10AnosHomenagemLg from "@/assets/fotos/tocof-10-anos-homenagem-lg.webp.asset.json";
import tocof10AnosHomenagemSm from "@/assets/fotos/tocof-10-anos-homenagem-sm.webp.asset.json";
import tocof10AnosSessaoLg from "@/assets/fotos/tocof-10-anos-sessao-lg.webp.asset.json";
import tocof10AnosSessaoSm from "@/assets/fotos/tocof-10-anos-sessao-sm.webp.asset.json";
import logo from "@/assets/fotos/tocof-logo.webp.asset.json";

export type Photo = { lg: string; sm: string; width: number; height: number; alt: string };

export const photos = {
  "abraco-equipa": { lg: abracoEquipaLg.url, sm: abracoEquipaSm.url, width: 2000, height: 900, alt: "Atletas do TOCOF abraçados em círculo antes do jogo" },
  "atleta-concentracao": { lg: atletaConcentracaoLg.url, sm: atletaConcentracaoSm.url, width: 2000, height: 1500, alt: "Atleta do TOCOF ajoelhado em campo durante o treino" },
  "atleta-feminina-jogo": { lg: atletaFemininaJogoLg.url, sm: atletaFemininaJogoSm.url, width: 1601, height: 2000, alt: "Atleta do TOCOF com a bola durante um jogo" },
  "bandeira-da-etica": { lg: bandeiraDaEticaLg.url, sm: bandeiraDaEticaSm.url, width: 2000, height: 1500, alt: "Elementos do TOCOF com a Bandeira da Ética" },
  "campeoes-infantis-2023-2024": { lg: campeoesInfantis20232024Lg.url, sm: campeoesInfantis20232024Sm.url, width: 2000, height: 900, alt: "T-shirt de campeões série 2, Infantis 7, época 2023/2024" },
  "cartao-branco-arbitro": { lg: cartaoBrancoArbitroLg.url, sm: cartaoBrancoArbitroSm.url, width: 923, height: 2000, alt: "Árbitro mostra o cartão branco a jovens atletas" },
  "cartao-branco-fair-play": { lg: cartaoBrancoFairPlayLg.url, sm: cartaoBrancoFairPlaySm.url, width: 900, height: 2000, alt: "Atleta do TOCOF mostra um cartão branco de fair-play" },
  "cerimonia-bandeira-etica": { lg: cerimoniaBandeiraEticaLg.url, sm: cerimoniaBandeiraEticaSm.url, width: 2000, height: 1500, alt: "Equipas do TOCOF na cerimónia da Bandeira da Ética" },
  "equipa-alinhada-campo": { lg: equipaAlinhadaCampoLg.url, sm: equipaAlinhadaCampoSm.url, width: 1080, height: 486, alt: "Equipa do TOCOF alinhada em campo" },
  "equipa-infantis": { lg: equipaInfantisLg.url, sm: equipaInfantisSm.url, width: 1548, height: 1792, alt: "Equipa de infantis do TOCOF" },
  "equipas-alinhadas-escola": { lg: equipasAlinhadasEscolaLg.url, sm: equipasAlinhadasEscolaSm.url, width: 2000, height: 1500, alt: "Equipas alinhadas no campo junto à escola" },
  "feminina-sub15-vice-campeas": { lg: femininaSub15ViceCampeasLg.url, sm: femininaSub15ViceCampeasSm.url, width: 1066, height: 600, alt: "Equipa feminina sub-15 do TOCOF, vice-campeãs distritais" },
  "festejo-bancada": { lg: festejoBancadaLg.url, sm: festejoBancadaSm.url, width: 2000, height: 1333, alt: "Jovens atletas do TOCOF festejam junto à bancada" },
  "grupo-abraco-treino": { lg: grupoAbracoTreinoLg.url, sm: grupoAbracoTreinoSm.url, width: 600, height: 450, alt: "Grupo de atletas abraçados em campo com o treinador" },
  "jogo-conducao-bola": { lg: jogoConducaoBolaLg.url, sm: jogoConducaoBolaSm.url, width: 987, height: 588, alt: "Atleta do TOCOF conduz a bola durante um jogo" },
  "tocof-10-anos-homenagem": { lg: tocof10AnosHomenagemLg.url, sm: tocof10AnosHomenagemSm.url, width: 1024, height: 683, alt: "Momento de homenagem na celebração dos 10 anos da Metodologia TOCOF" },
  "tocof-10-anos-sessao": { lg: tocof10AnosSessaoLg.url, sm: tocof10AnosSessaoSm.url, width: 720, height: 540, alt: "Sessão comemorativa dos 10 anos da Metodologia TOCOF" },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

export const logoUrl = logo.url;
