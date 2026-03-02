import Link from "next/link";
import { brand } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-caramelBlur backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-ink/80 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>{brand.name} · {brand.neighborhood}</p>
        <p>
          <Link className="underline decoration-olive/60 underline-offset-4" href={`mailto:${brand.email}`}>
            {brand.email}
          </Link>
        </p>
      </div>
    </footer>
  );
}
