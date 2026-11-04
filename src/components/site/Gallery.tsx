import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X, Expand } from "lucide-react";
import { photos, type PhotoKey } from "@/lib/photos";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Item = { name: PhotoKey; span?: "wide" | "tall" | "big" };

export function Gallery({ items }: { items: Item[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => {
    setIndex(null);
    lastTrigger.current?.focus();
  }, []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length],
  );

  return (
    <>
      <ul className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 lg:grid-cols-4 lg:auto-rows-[240px]">
        {items.map((it, i) => {
          const p = photos[it.name];
          return (
            <Reveal
              as="li"
              key={it.name}
              delay={(i % 4) * 70}
              className={cn(
                it.span === "wide" && "col-span-2",
                it.span === "tall" && "row-span-2",
                it.span === "big" && "col-span-2 row-span-2",
              )}
            >
              <button
                type="button"
                onClick={(e) => {
                  lastTrigger.current = e.currentTarget;
                  setIndex(i);
                }}
                className="group relative block h-full w-full overflow-hidden rounded-lg bg-muted"
                aria-label={`Ampliar fotografia: ${p.alt}`}
              >
                <img
                  src={p.sm}
                  srcSet={`${p.sm} 800w, ${p.lg} ${p.width}w`}
                  sizes={it.span === "big" || it.span === "wide" ? "(min-width:1024px) 50vw, 100vw" : "(min-width:1024px) 25vw, 50vw"}
                  width={p.width}
                  height={p.height}
                  alt={p.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/80 via-ink/0 to-ink/0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="flex w-full items-end justify-between gap-3 text-left text-sm font-medium text-ink-foreground">
                    <span className="line-clamp-2">{p.alt}</span>
                    <Expand className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                  </span>
                </span>
              </button>
            </Reveal>
          );
        })}
      </ul>
      {index !== null && items[index] && (
        <Lightbox item={items[index]} position={index + 1} total={items.length} onClose={close} onStep={step} />
      )}
    </>
  );
}

function Lightbox({
  item,
  position,
  total,
  onClose,
  onStep,
}: {
  item: Item;
  position: number;
  total: number;
  onClose: () => void;
  onStep: (d: number) => void;
}) {
  const p = photos[item.name];
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, onStep]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Fotografia ampliada"
      className="fixed inset-0 z-[100] flex flex-col bg-ink/95 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0]?.clientX ?? null)}
      onTouchEnd={(e) => {
        const end = e.changedTouches[0]?.clientX;
        if (touchX.current === null || end === undefined) return;
        const dx = end - touchX.current;
        if (Math.abs(dx) > 50) onStep(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <div className="flex items-center justify-between p-4 text-ink-foreground" onClick={(e) => e.stopPropagation()}>
        <span className="text-sm font-semibold tabular-nums text-ink-muted">
          {position} / {total}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-ink-foreground/10"
          aria-label="Fechar"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20">
        <img
          key={item.name}
          src={p.lg}
          alt={p.alt}
          width={p.width}
          height={p.height}
          className="max-h-full max-w-full rounded-md object-contain shadow-2xl animate-in fade-in zoom-in-95 duration-300"
          onClick={(e) => e.stopPropagation()}
        />
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onStep(-1);
          }}
          className="absolute left-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ink-foreground/10 text-ink-foreground transition-colors hover:bg-primary sm:flex"
          aria-label="Fotografia anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onStep(1);
          }}
          className="absolute right-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ink-foreground/10 text-ink-foreground transition-colors hover:bg-primary sm:flex"
          aria-label="Fotografia seguinte"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      <p className="px-6 py-5 text-center text-sm text-ink-foreground/85" onClick={(e) => e.stopPropagation()}>
        {p.alt}
      </p>
    </div>,
    document.body,
  );
}
