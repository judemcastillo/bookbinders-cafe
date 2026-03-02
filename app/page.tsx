import Link from "next/link";
import { brand, featured, hours } from "@/lib/data";

export default function HomePage() {
	return (
		<div className="mx-auto w-full max-w-6xl space-y-16 px-4 pb-16 pt-8 sm:px-6 md:space-y-20 lg:px-8">
			<section className="relative overflow-hidden rounded-3xl border border-black/10 bg-rust text-cream shadow-2xl flex items-center justify-center">
				<div className="grid min-h-[65vh] gap-10 p-8 md:p-12">
					<div className="space-y-5 flex flex-col items-center justify-center">
						<p className="animate-rise text-xs uppercase tracking-[0.35em] text-caramel">
							Bellview Row, Portland
						</p>
						<h1 className="animate-rise text-4xl leading-tight sm:text-5xl md:text-6xl">
							{brand.name}
						</h1>
						<p className="animate-rise max-w-xl text-lg text-cream/90">
							{brand.tagline}
						</p>
						<div className="animate-rise flex flex-wrap gap-3 pt-2">
							<Link
								href="/menu"
								className="rounded-full bg-caramel px-5 py-3 text-sm font-semibold uppercase tracking-wide text-ink transition hover:bg-cream"
							>
								Explore Menu
							</Link>
							<Link
								href="/contact"
								className="rounded-full border border-none px-5 py-3 text-sm font-semibold uppercase tracking-wide  transition hover:bg-caramel bg-white text-ink"
							>
								Find Us
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="rounded-2xl border border-black/10 bg-paper/90 p-6 card">
				<p className="text-xs uppercase tracking-[0.25em] text-olive">About</p>
				<p className="mt-3 max-w-3xl leading-relaxed text-ink/85">
					Bookbinder&apos;s opened in a converted print shop where the old
					shelving still lines the walls. We bake in small batches, pour coffee
					one cup at a time, and keep room for conversation, notebooks, and
					late-afternoon rain.
				</p>
			</section>

			<section className="space-y-6">
				<div className="flex items-end justify-between gap-4">
					<h2 className="text-3xl">Featured Signatures</h2>
					<Link
						href="/menu"
						className="text-sm font-semibold text-rust underline decoration-rust/50 underline-offset-4"
					>
						Full Menu
					</Link>
				</div>
				<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
					{featured.map((item) => (
						<article
							key={item.name}
							className="menu-card rounded-2xl border border-black/10 bg-white/80 p-5 transition duration-300 flex flex-col gap-4 justify-between"
						>
							<div className="flex flex-col gap-2 ">
								<img
									className="w-full object-fill h-fit rounded-xl bg-caramel/25"
									src={item.image}
									aria-hidden
								/>
								<h3 className="text-xl">{item.name}</h3>
								<p className=" text-sm leading-relaxed text-ink/80">
									{item.description}
								</p>
							</div>
							<p className="text-xs font-semibold uppercase tracking-[0.22em] text-olive">
								{item.note}
							</p>
						</article>
					))}
				</div>
			</section>

			<section className="grid gap-6 md:grid-cols-2">
				<div className="rounded-2xl border border-black/10 bg-paper/90 p-6 card">
					<h2 className="text-2xl">Opening Hours</h2>
					<div className="mt-4 space-y-2 text-sm">
						{hours.map((row) => (
							<div
								key={row.day}
								className="grid grid-cols-[1fr_auto] border-b border-black/5 py-2"
							>
								<span>{row.day}</span>
								<span className="font-semibold text-ink/85">{row.time}</span>
							</div>
						))}
					</div>
				</div>
				<div className="rounded-2xl border border-black/10 bg-paper/90 p-6 card">
					<h2 className="text-2xl">Find Us</h2>
					<p className="mt-4 text-sm leading-relaxed text-ink/80">
						148 Bellview Row, Portland, OR 97205
						<br />
						+1 (503) 555-0184
					</p>
					<div className="mt-4 overflow-hidden rounded-xl border border-black/10">
						<iframe
							title="Map placeholder"
							src="https://www.openstreetmap.org/export/embed.html?bbox=-122.692%2C45.516%2C-122.664%2C45.529&layer=mapnik"
							className="h-48 w-full"
							loading="lazy"
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
