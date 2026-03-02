import { team, values } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <section className="grid gap-6 rounded-3xl border border-black/10 bg-paper/90 p-7 md:grid-cols-[1.2fr_1fr] card">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-olive">Our Story</p>
          <h1 className="mt-2 text-4xl">Built from old shelves and new rituals.</h1>
          <p className="mt-4 leading-relaxed text-ink/85">
            In 2018, Mara signed a lease on a narrow former bookstore with creaky floors and stubborn windows. She kept the
            shelving, added a tiny pastry oven, and started serving one neighborhood block before sunrise. Word spread because
            the room felt personal, not polished for tourists.
          </p>
          <p className="mt-4 leading-relaxed text-ink/85">
            Today, Bookbinder&apos;s is still a place for regulars: students revising drafts, nurses ending night shifts, and
            friends who stay long enough for a second pot.
          </p>
        </div>
        <div className="rounded-2xl bg-caramel/20 p-6">
          <h2 className="text-2xl">What We Stand For</h2>
          <ul className="mt-4 space-y-4">
            {values.map((value) => (
              <li key={value.title}>
                <h3 className="text-lg">{value.title}</h3>
                <p className="mt-1 text-sm text-ink/80">{value.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-3xl">Team</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {team.map((person) => (
            <article key={person.name} className="rounded-2xl border border-black/10 bg-paper p-5 card">
              <div className="mb-4 h-40 rounded-xl bg-olive/20" aria-hidden />
              <h3 className="text-xl">{person.name}</h3>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rust">{person.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">{person.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
