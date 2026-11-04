import { describe, expect, it } from "vitest";
import { site, telHref, navItems } from "@/lib/site";

describe("Informação do clube", () => {
  it("mantém os contactos originais dos professores", () => {
    expect(site.teachers.map((t) => [t.name, t.phone])).toEqual([
      ["Bruno Baptista", "912584838"],
      ["Valter Pinheiro", "925710217"],
    ]);
    expect(telHref("912584838")).toBe("tel:+351912584838");
  });

  it("mantém o email e a localização originais", () => {
    expect(site.email).toBe("tocofmetodologia@hotmail.com");
    expect(site.location.name).toBe("Escola Pedro Alexandrino");
    expect(site.location.mapsUrl).toContain("38.806675,-9.1631329");
  });

  it("tem a ficha de inscrição em PDF disponível", () => {
    expect(site.fichaUrl).toMatch(/\.pdf$/);
  });

  it("o menu tem as seis páginas pedidas", () => {
    expect(navItems.map((n) => n.label)).toEqual(["Início", "Quem Somos", "Metodologia", "Inscrições", "Galeria", "Contactos"]);
  });
});
