import { brand, hours } from "@/lib/data";

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-8 px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <header className="rounded-2xl border border-black/10 bg-paper/90 p-7 card">
        <p className="text-xs uppercase tracking-[0.25em] text-olive">Contact & Find Us</p>
        <h1 className="mt-2 text-4xl">Visit the cafe</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/80">
          Walk-ins are welcome. For events, catering, and large pastry orders, send us an enquiry below.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="rounded-2xl border border-black/10 bg-paper/90 p-6 card">
          <h2 className="text-2xl">Details</h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink/85">
            <p>{brand.address}</p>
            <p>{brand.phone}</p>
            <p>{brand.email}</p>
          </div>
          <h3 className="mt-6 text-xl">Opening Hours</h3>
          <div className="mt-3 space-y-2 text-sm">
            {hours.map((row) => (
              <div key={row.day} className="grid grid-cols-[1fr_auto] border-b border-black/5 py-2">
                <span>{row.day}</span>
                <span className="font-semibold text-ink/85">{row.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-2xl border border-black/10 bg-paper/90 p-2 card">
            <iframe
              title="Bookbinder's Cafe map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-122.692%2C45.516%2C-122.664%2C45.529&layer=mapnik"
              className="h-72 w-full rounded-xl"
              loading="lazy"
            />
          </div>

          <form className="rounded-2xl border border-black/10 bg-paper/90 p-6 card">
            <h2 className="text-2xl">Event Enquiry</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="text-sm">
                Name
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border border-black/20 bg-cream px-3 py-2 outline-none ring-rust/30 transition focus:ring"
                  placeholder="Your name"
                />
              </label>
              <label className="text-sm">
                Email
                <input
                  type="email"
                  className="mt-1 w-full rounded-lg border border-black/20 bg-cream px-3 py-2 outline-none ring-rust/30 transition focus:ring"
                  placeholder="you@email.com"
                />
              </label>
              <label className="text-sm sm:col-span-2">
                Event Type
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border border-black/20 bg-cream px-3 py-2 outline-none ring-rust/30 transition focus:ring"
                  placeholder="Catering, private dinner, workshop"
                />
              </label>
              <label className="text-sm sm:col-span-2">
                Message
                <textarea
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-black/20 bg-cream px-3 py-2 outline-none ring-rust/30 transition focus:ring"
                  placeholder="Tell us about your plan"
                />
              </label>
            </div>
            <button
              type="button"
              className="mt-5 rounded-full bg-rust px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-cream transition hover:bg-ink"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
