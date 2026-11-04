import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, btnPrimary } from "@/components/site/ui";
import { site, formatPhone, telHref } from "@/lib/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contactos")({
  head: () =>
    pageHead(
      "Contactos — TOCOF Clube de Futebol",
      "Contacta os Professores Bruno Baptista (912 584 838) e Valter Pinheiro (925 710 217) ou escreve para tocofmetodologia@hotmail.com. Escola Pedro Alexandrino, Póvoa de Santo Adrião.",
      "/contactos",
    ),
  component: Contactos,
});

const icons = { Facebook, Instagram, YouTube: Youtube } as const;

function Contactos() {
  return (
    <>
      <PageHero
        photo="equipa-infantis"
        eyebrow="Contactos"
        title={
          <>
            Fala <span className="text-primary">connosco</span>
          </>
        }
        intro="Contacta-nos para mais pormenores. Estamos à tua espera na Escola Pedro Alexandrino."
      />

      <section className="py-20 sm:py-28">
        <div className="container-site grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {site.teachers.map((t, i) => (
            <Reveal key={t.phone} delay={i * 80}>
              <a
                href={telHref(t.phone)}
                className="group flex h-full flex-col rounded-lg border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Phone className="h-5 w-5" aria-hidden />
                </span>
                <p className="mt-6 text-xs font-bold uppercase tracking-wider text-muted-foreground">Professor</p>
                <p className="font-display text-3xl font-bold uppercase">{t.name}</p>
                <p className="mt-auto pt-4 text-xl font-semibold text-primary">{formatPhone(t.phone)}</p>
              </a>
            </Reveal>
          ))}
          <Reveal delay={160} className="md:col-span-2 lg:col-span-1">
            <a
              href={`mailto:${site.email}`}
              className="group flex h-full flex-col rounded-lg border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Mail className="h-5 w-5" aria-hidden />
              </span>
              <p className="mt-6 text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</p>
              <p className="mt-auto break-all pt-2 text-lg font-semibold text-primary">{site.email}</p>
            </a>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="grid lg:grid-cols-2">
          <div className="container-site py-20 lg:max-w-xl lg:py-28 lg:pl-8 xl:ml-auto xl:mr-0">
            <Reveal>
              <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">
                <span className="h-0.5 w-8 bg-primary" aria-hidden /> Localização
              </p>
              <h2 className="mt-4 text-4xl font-extrabold uppercase leading-[0.95] sm:text-5xl">{site.location.name}</h2>
              <p className="mt-4 flex items-start gap-2 text-ink-muted">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden /> {site.location.address}
              </p>
              <a href={site.location.mapsUrl} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} mt-8`}>
                <MapPin className="h-4 w-4" aria-hidden /> Abrir no Google Maps
              </a>
              <div className="mt-12">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink-muted">Segue a mancha laranja nas redes sociais</p>
                <ul className="mt-4 flex flex-wrap gap-3">
                  {site.socials.map((s) => {
                    const Icon = icons[s.label];
                    return (
                      <li key={s.label}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-md border border-ink-foreground/15 px-4 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary"
                        >
                          <Icon className="h-4 w-4" aria-hidden /> {s.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          </div>
          <div className="min-h-[360px] lg:min-h-full">
            <iframe
              title="Mapa da Escola Pedro Alexandrino"
              src={site.location.embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[360px] w-full border-0 grayscale-[30%]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
