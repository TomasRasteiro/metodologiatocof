import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/site";
import { logoUrl } from "@/lib/photos";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        overHero
          ? "bg-transparent py-4"
          : "bg-ink/95 py-2 shadow-lg backdrop-blur-md supports-[backdrop-filter]:bg-ink/85",
      )}
    >
      <div className="container-site flex items-center justify-between gap-4">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="TOCOF — Início">
          <img
            src={logoUrl}
            alt=""
            width={48}
            height={48}
            className={cn("shrink-0 transition-all duration-300", overHero ? "h-12 w-12 sm:h-14 sm:w-14" : "h-10 w-10")}
          />
          <span className="min-w-0 leading-none text-ink-foreground">
            <span className="block font-display text-2xl font-extrabold tracking-wide">TOCOF</span>
            <span className="hidden truncate text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ink-muted sm:block">
              Clube de Futebol
            </span>
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: true }}
                  className="group relative rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wider text-ink-foreground/85 transition-colors hover:text-ink-foreground data-[status=active]:text-ink-foreground"
                >
                  {item.label}
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100 group-data-[status=active]:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            to="/inscricoes"
            className="hidden rounded-md bg-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-glow sm:inline-flex"
          >
            Inscreve-te
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-ink-foreground transition-colors hover:bg-ink-foreground/10 lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        className={cn(
          "fixed inset-x-0 bottom-0 top-[60px] bg-ink transition-all duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav aria-label="Navegação móvel" className="container-site flex h-full flex-col py-8">
          <ul className="flex flex-col">
            {navItems.map((item, i) => (
              <li
                key={item.to}
                className={cn(
                  "border-b border-ink-foreground/10 transition-all duration-500",
                  open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0",
                )}
                style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
              >
                <Link
                  to={item.to}
                  activeOptions={{ exact: true }}
                  className="flex items-center justify-between py-4 font-display text-3xl font-bold uppercase text-ink-foreground data-[status=active]:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/inscricoes"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-4 font-bold uppercase tracking-wider text-primary-foreground"
          >
            Quero inscrever-me
          </Link>
        </nav>
      </div>
    </header>
  );
}
