import ficha from "@/assets/ficha-inscricao-tocof.pdf.asset.json";

// Informação verdadeira do clube, retirada do site original. Não alterar sem confirmação.
export const site = {
  name: "Clube de Futebol Metodologia TOCOF",
  shortName: "TOCOF",
  founded: 2009,
  acronym: "Treino de Optimização das Competências do Futebolista",
  email: "tocofmetodologia@hotmail.com",
  teachers: [
    { name: "Bruno Baptista", role: "Professor de Educação Física", phone: "912584838" },
    { name: "Valter Pinheiro", role: "Professor de Educação Física", phone: "925710217" },
  ],
  location: {
    name: "Escola Pedro Alexandrino",
    address: "Rua Henrique dos Santos, Póvoa de Santo Adrião, Portugal",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=38.806675,-9.1631329",
    embedUrl: "https://www.google.com/maps?q=38.806675,-9.1631329&z=16&output=embed",
  },
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/tocof.metodologia" },
    { label: "Instagram", href: "https://www.instagram.com/metodologiatocof/" },
    { label: "YouTube", href: "https://www.youtube.com/channel/UCNKPn0D2xJ33BsbZDp5anyQ/videos" },
  ],
  fichaUrl: ficha.url,
  fichaFilename: "ficha-inscricao-tocof.pdf",
} as const;

export const formatPhone = (p: string) => `${p.slice(0, 3)} ${p.slice(3, 6)} ${p.slice(6)}`;
export const telHref = (p: string) => `tel:+351${p}`;

export const navItems = [
  { to: "/", label: "Início" },
  { to: "/quem-somos", label: "Quem Somos" },
  { to: "/metodologia", label: "Metodologia" },
  { to: "/inscricoes", label: "Inscrições" },
  { to: "/galeria", label: "Galeria" },
  { to: "/contactos", label: "Contactos" },
] as const;
