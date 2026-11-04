import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText, Mail, MapPin, Phone, Send } from "lucide-react";
import { Photo } from "@/components/site/Photo";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, SectionTitle, btnOutlineDark, btnPrimary } from "@/components/site/ui";
import { site, formatPhone, telHref } from "@/lib/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/inscricoes")({
  head: () =>
    pageHead(
      "Inscrições — Connosco todos jogam! | TOCOF",
      "Inscreve-te no Clube de Futebol Metodologia TOCOF. Descarrega a ficha de inscrição e envia para tocofmetodologia@hotmail.com.",
      "/inscricoes",
    ),
  component: Inscricoes,
});

const mailHref = `mailto:${site.email}?subject=${encodeURIComponent("Inscrição TOCOF")}`;

function Inscricoes() {
  const steps = [
    { icon: Download, title: "Descarrega a ficha", text: "Faz o download da Ficha de Inscrição TOCOF." },
    { icon: FileText, title: "Preenche os dados", text: "Completa a ficha com os dados do atleta e do encarregado de educação." },
    { icon: Send, title: "Envia por email", text: `Envia a ficha preenchida para ${site.email}.` },
  ];

  return (
    <>
      <PageHero
        photo="equipas-alinhadas-escola"
        eyebrow="Inscrições"
        title={
          <>
            Connosco <span className="text-primary">todos jogam!</span>
          </>
        }
        intro="O Clube de Futebol Metodologia TOCOF é um projeto de cariz desportivo, social e inclusivo. Contacta-nos para mais pormenores e vem divertir-te a treinar com uma metodologia inovadora."
      />

      {/* PASSOS */}
      <section className="py-20 sm:py-28">
        <div className="container-site">
          <SectionTitle eyebrow="Como me inscrevo" title="Três passos simples" />
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 100} className="relative rounded-lg border bg-card p-8 shadow-card">
                <span className="absolute right-6 top-4 font-display text-7xl font-black text-primary/15" aria-hidden>
                  {i + 1}
                </span>
                <span className="flex h-14 w-14 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <s.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-6 text-2xl font-bold uppercase">{s.title}</h3>
                <p className="mt-2 break-words text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </Reveal>
            ))}
          </ol>

          {/* FICHA */}
          <Reveal className="mt-12 overflow-hidden rounded-lg bg-ink text-ink-foreground">
            <div className="grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-[1.3fr_1fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Ficha de inscrição de atleta</p>
                <h2 className="mt-3 text-4xl font-extrabold uppercase leading-[0.95] sm:text-5xl">Faz aqui o download da tua ficha</h2>
                <p className="mt-4 max-w-lg text-ink-muted">Descarrega a Ficha de Inscrição TOCOF (PDF) e envia-a preenchida para o nosso email.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={site.fichaUrl} download={site.fichaFilename} className={btnPrimary}>
                    <Download className="h-4 w-4" aria-hidden /> Descarregar ficha (PDF)
                  </a>
                  <a
                    href={mailHref}
                    className="group inline-flex items-center justify-center gap-2 rounded-md border-2 border-ink-foreground/70 px-7 py-[14px] text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-foreground hover:text-ink"
                  >
                    <Mail className="h-4 w-4" aria-hidden /> Enviar email
                  </a>
                </div>
              </div>
              <a
                href={site.fichaUrl}
                target="_blank"
                rel="noopener"
                className="group mx-auto hidden w-full max-w-[260px] rotate-3 rounded-md bg-card p-5 text-card-foreground shadow-2xl transition-transform duration-500 hover:rotate-0 lg:block"
                aria-label="Abrir a ficha de inscrição em PDF"
              >
                <div className="flex items-center gap-3 border-b pb-3">
                  <img src="/apple-touch-icon.png" alt="" width={36} height={36} className="h-9 w-9" />
                  <div className="leading-tight">
                    <p className="text-[0.65rem] font-bold uppercase">Clube de Futebol Metodologia TOCOF</p>
                    <p className="text-[0.6rem] text-muted-foreground">Ficha de Inscrição de Atleta</p>
                  </div>
                </div>
                <div className="mt-3 space-y-2" aria-hidden>
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="flex gap-2">
                      <div className="h-2 w-1/3 rounded-sm bg-muted" />
                      <div className="h-2 flex-1 rounded-sm bg-secondary" />
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-center text-xs font-bold uppercase tracking-wider text-primary">PDF · Abrir</p>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ONDE TREINAMOS + CONTACTOS */}
      <section className="bg-secondary py-20 sm:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTitle eyebrow="Onde treinamos" title={site.location.name} intro={site.location.address} />
            <Reveal delay={100} className="mt-8 aspect-[16/10] overflow-hidden rounded-lg">
              <Photo name="equipa-alinhada-campo" />
            </Reveal>
            <Reveal delay={150} className="mt-6">
              <a href={site.location.mapsUrl} target="_blank" rel="noopener noreferrer" className={btnOutlineDark}>
                <MapPin className="h-4 w-4" aria-hidden /> Ver no Google Maps
              </a>
            </Reveal>
          </div>
          <div>
            <SectionTitle eyebrow="Mais informações" title="Fala connosco" />
            <ul className="mt-8 space-y-4">
              {site.teachers.map((t, i) => (
                <Reveal as="li" key={t.phone} delay={i * 80}>
                  <a
                    href={telHref(t.phone)}
                    className="group flex items-center justify-between gap-4 rounded-lg border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-card"
                  >
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Professor</p>
                      <p className="font-display text-2xl font-bold uppercase">{t.name}</p>
                    </div>
                    <span className="flex shrink-0 items-center gap-2 font-semibold text-primary">
                      <Phone className="h-4 w-4" aria-hidden /> {formatPhone(t.phone)}
                    </span>
                  </a>
                </Reveal>
              ))}
              <Reveal as="li" delay={160}>
                <a
                  href={mailHref}
                  className="group flex items-center justify-between gap-4 rounded-lg border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-card"
                >
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</p>
                    <p className="break-all font-semibold">{site.email}</p>
                  </div>
                  <Mail className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                </a>
              </Reveal>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
