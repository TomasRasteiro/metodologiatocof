export type Photo = { lg: string; sm: string; width: number; height: number; alt: string };

function localPhoto(name: string, width: number, height: number, alt: string): Photo {
  const url = `/images/${name}.webp`;
  return { lg: url, sm: url, width, height, alt };
}

export const photos = {
  "abraco-equipa": localPhoto("abraco-equipa", 2000, 900, "Atletas do TOCOF abraçados em círculo antes do jogo"),
  "atleta-concentracao": localPhoto("atleta-concentracao", 2000, 1500, "Atleta do TOCOF ajoelhado em campo durante o treino"),
  "atleta-feminina-jogo": localPhoto("atleta-feminina-jogo", 1601, 2000, "Atleta do TOCOF com a bola durante um jogo"),
  "bandeira-da-etica": localPhoto("bandeira-da-etica", 2000, 1500, "Elementos do TOCOF com a Bandeira da Ética"),
  "campeoes-infantis-2023-2024": localPhoto("campeoes-infantis-2023-2024", 2000, 900, "Equipa de infantis do TOCOF, época 2023/2024"),
  "cartao-branco-arbitro": localPhoto("cartao-branco-arbitro", 923, 2000, "Árbitro mostra o cartão branco a jovens atletas"),
  "cartao-branco-fair-play": localPhoto("cartao-branco-fair-play", 900, 2000, "Atleta do TOCOF mostra um cartão branco de fair-play"),
  "cerimonia-bandeira-etica": localPhoto("cerimonia-bandeira-etica", 2000, 1500, "Equipas do TOCOF na cerimónia da Bandeira da Ética"),
  "equipa-alinhada-campo": localPhoto("equipa-alinhada-campo", 1080, 486, "Equipa do TOCOF alinhada em campo"),
  "equipa-infantis": localPhoto("equipa-infantis", 1548, 1792, "Equipa de infantis do TOCOF"),
  "equipas-alinhadas-escola": localPhoto("equipas-alinhadas-escola", 2000, 1500, "Equipas alinhadas no campo junto à escola"),
  "feminina-sub15-vice-campeas": localPhoto("feminina-sub15-vice-campeas", 1066, 600, "Equipa feminina sub-15 do TOCOF, vice-campeãs distritais"),
  "festejo-bancada": localPhoto("festejo-bancada", 2000, 1333, "Jovens atletas do TOCOF festejam junto à bancada"),
  "grupo-abraco-treino": localPhoto("grupo-abraco-treino", 600, 450, "Grupo de atletas abraçados em campo com o treinador"),
  "jogo-conducao-bola": localPhoto("jogo-conducao-bola", 987, 588, "Atleta do TOCOF conduz a bola durante um jogo"),
  "tocof-10-anos-homenagem": localPhoto("tocof-10-anos-homenagem", 1024, 683, "Momento de homenagem na celebração dos 10 anos da Metodologia TOCOF"),
  "tocof-10-anos-sessao": localPhoto("tocof-10-anos-sessao", 720, 540, "Sessão comemorativa dos 10 anos da Metodologia TOCOF"),
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

export const logoUrl = "/images/tocof-logo.webp";
