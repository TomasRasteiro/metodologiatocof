import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { navItems, site, formatPhone, telHref } from "@/lib/site";
import { logoUrl } from "@/lib/photos";

const icons = { Facebook, Instagram, YouTube: Youtube } as const;

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="Logótipo do Clube de Futebol TOCOF" width={64} height={64} className="h-16 w-16" loading="lazy" />
            <div className="leading-tight">
              <p className="font-display text-2xl font-extrabold">TOCOF</p>
              <p className="text-xs uppercase tracking-[0.2em] text-ink-muted">Fundado em {site.founded}</p>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">
            Um projeto de cariz desportivo, social e inclusivo.{" "}
            <span className="font-semibold text-primary">Connosco todos jogam!</span>
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-ink-muted">Navegação</h2>
          <ul className="mt-4 space-y-2">
            {navItems.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-sm text-ink-foreground/85 transition-colors hover:text-primary">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-ink-muted">Contactos</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {site.teachers.map((t) => (
              <li key={t.phone}>
                <a href={telHref(t.phone)} className="flex items-start gap-2 transition-colors hover:text-primary">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  <span>
                    Prof. {t.name} · {formatPhone(t.phone)}
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} className="flex items-start gap-2 break-all transition-colors hover:text-primary">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.location.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 transition-colors hover:text-primary">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <span>
                  {site.location.name}
                  <br />
                  <span className="text-ink-muted">{site.location.address}</span>
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-ink-muted">Segue a mancha laranja</h2>
          <ul className="mt-4 flex gap-3">
            {site.socials.map((s) => {
              const Icon = icons[s.label];
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`TOCOF no ${s.label}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-foreground/15 transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary"
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© TOCOF — {site.name}</p>
          <p>{site.acronym}</p>
        </div>
      </div>
    </footer>
  );
}
