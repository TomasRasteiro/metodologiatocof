import { photos, type PhotoKey } from "@/lib/photos";
import { cn } from "@/lib/utils";

type Props = {
  name: PhotoKey;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function Photo({ name, className, sizes = "(min-width: 1024px) 50vw, 100vw", priority }: Props) {
  const p = photos[name];
  return (
    <img
      src={p.lg}
      srcSet={`${p.sm} 800w, ${p.lg} ${p.width}w`}
      sizes={sizes}
      width={p.width}
      height={p.height}
      alt={p.alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={cn("h-full w-full object-cover", className)}
    />
  );
}
