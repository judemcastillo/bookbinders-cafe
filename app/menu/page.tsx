import { menu } from "@/lib/data";

export default function MenuPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <header className="mb-10 rounded-2xl border border-black/10 bg-caramelBlur p-6">
        <p className="text-xs uppercase tracking-[0.25em] text-olive">Menu</p>
        <h1 className="mt-2 text-4xl">Daily Kitchen & Bar</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/80">
          Everything is made in small batches. Ingredients can sell out by evening, and that&apos;s by design.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {menu.map((section) => (
          <section key={section.category} className="rounded-2xl border border-black/10 bg-paper/90 p-5 bg-caramelBlur ">
            <h2 className="border-b border-black/10 pb-3 text-2xl">{section.category}</h2>
            <div className="space-y-5 pt-5">
              {section.items.map((item) => (
                <article key={item.name} className="menu-card rounded-xl border border-black/10 bg-cream/60 p-4 transition duration-300">
                  <div className="grid grid-cols-[1fr_auto] items-start gap-3">
                    <h3 className="text-lg leading-tight">{item.name}</h3>
                    <p className="font-semibold text-rust">{item.price}</p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink/80">{item.description}</p>
                  {item.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-olive/40 bg-olive/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-olive"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
