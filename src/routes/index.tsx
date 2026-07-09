import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Scissors, Sparkles, ShieldCheck, Clock, MapPin, Phone, ArrowRight, Quote } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { services } from "@/lib/services-data";
import hero from "@/assets/hero.jpg";
import beard from "@/assets/beard.jpg";
import haircut from "@/assets/haircut.jpg";
import shave from "@/assets/shave.jpg";
import tools from "@/assets/tools.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Al Rehman Hair Salon — Premium Barber Shop in Lahore" },
      { name: "description", content: "Lahore's trusted men's salon for precision haircuts, beard trims, hot-towel shaves, facials and keratin treatments. Rated 4.8 by 797+ guests." },
      { property: "og:title", content: "Al Rehman Hair Salon — Lahore" },
      { property: "og:description", content: "Classic craft, modern grooming. Rated 4.8 by 797+ guests in Lahore." },
      { property: "og:image", content: hero },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Home,
});

const featured = [
  { icon: Scissors, title: "Signature Haircut", desc: "Consultation-led precision cuts tailored to your face shape." },
  { icon: Sparkles, title: "Royal Hot Towel Shave", desc: "Straight razor, hot towels and a finishing balm." },
  { icon: ShieldCheck, title: "Keratin Treatment", desc: "Smoother, softer, frizz-free hair for months." },
];

const reviews = [
  { name: "Faizan Madni", role: "Local Guide · Google", text: "Visited for a beard service and the experience was excellent. The staff is highly skilled and professional. My beard was trimmed and styled exactly the way I wanted.", stars: 5 },
  { name: "Ahmed R.", role: "Google review", text: "Trained staff, cooperative team and a clean shop. My go-to place for haircuts and beard trims in Lahore.", stars: 5 },
  { name: "Hassan M.", role: "Facebook", text: "Best keratin treatment I've ever had. Hair feels brand new and the price was very fair.", stars: 5 },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img src={hero} alt="Al Rehman Hair Salon interior" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/70 to-ink/95" />
        <div className="relative mx-auto max-w-6xl px-5 py-28 text-cream md:py-40">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="divider-gold" />
              <span className="eyebrow">Lahore · Est. trusted by 797+</span>
            </div>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] md:text-7xl">
              The art of the<br />
              <span className="text-gold italic">classic gentleman.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-cream/80 md:text-lg">
              Al Rehman Hair Salon is Lahore's home for precision haircuts, sculpted beard work
              and hot-towel shaves — delivered by a trained team that takes its time.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="tel:+923000000000" className="inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-wider text-ink transition hover:opacity-90">
                <Phone className="h-4 w-4" /> Book an appointment
              </a>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-sm border border-cream/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-cream transition hover:border-gold hover:text-gold">
                View services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-5 text-sm text-cream/80">
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <span><span className="font-semibold text-cream">4.8</span> · 797 Google reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFO STRIP */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            { icon: MapPin, label: "Find us", value: "Barber shop · Lahore" },
            { icon: Clock, label: "Hours", value: "Open daily · 10 AM – 11 PM" },
            { icon: Phone, label: "Call", value: "+92 300 0000000" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4 px-6 py-6">
              <item.icon className="h-6 w-6 text-gold" />
              <div>
                <div className="eyebrow">{item.label}</div>
                <div className="mt-1 text-sm font-medium">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Signature services</span>
            <h2 className="mt-3 max-w-xl font-display text-4xl md:text-5xl">Craft you can feel,<br /> finish you can see.</h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground hover:text-gold">
            All services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {[
            { img: haircut, ...featured[0] },
            { img: shave, ...featured[1] },
            { img: beard, ...featured[2] },
          ].map((s) => (
            <article key={s.title} className="group flex flex-col">
              <div className="aspect-[4/5] overflow-hidden rounded-sm bg-muted">
                <img src={s.img} alt={s.title} loading="lazy" width={1200} height={1200} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-5 flex items-center gap-3">
                <s.icon className="h-5 w-5 text-gold" />
                <h3 className="font-display text-xl">{s.title}</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* SPLIT STORY */}
      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-2 md:items-center">
          <img src={tools} alt="Premium barber tools" loading="lazy" width={1600} height={1000} className="rounded-sm" />
          <div>
            <span className="eyebrow">Our craft</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Trained hands. <br />Sharp tools. <br />No shortcuts.</h2>
            <p className="mt-6 text-cream/80">
              Every team member at Al Rehman is trained in-house to a single standard:
              listen first, then cut. We use German shears, Japanese razors and salon-grade
              products so your finish lasts well past the chair.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-cream/80">
              {["Highly trained, cooperative staff", "Hygiene-first tools and stations", "Honest pricing, no surprises", "Walk-ins welcome — bookings preferred"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="h-px w-6 bg-gold" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PRICE LIST PREVIEW */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="text-center">
          <span className="eyebrow">Price list</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Honest prices,<br /> exceptional service.</h2>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <ul className="divide-y divide-border">
            {services[0].items.concat(services[1].items).slice(0, 6).map((s) => (
              <li key={s.name} className="flex items-baseline gap-4 py-5">
                <span className="font-display text-lg">{s.name}</span>
                <span className="mx-2 flex-1 border-b border-dashed border-border/70" />
                <span className="text-sm text-muted-foreground">{s.duration}</span>
                <span className="w-28 text-right font-semibold text-foreground">{s.price}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90">
              See full menu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="eyebrow">What guests say</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">Loved across Lahore.</h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
              </div>
              <span className="text-sm"><span className="font-semibold">4.8</span> · 797 Google reviews</span>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="flex h-full flex-col rounded-sm border border-border bg-card p-7">
                <Quote className="h-7 w-7 text-gold" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-24 text-center">
        <span className="eyebrow">Ready when you are</span>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl md:text-6xl">
          Step in. <span className="italic text-gold">Step out a sharper you.</span>
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="tel:+923000000000" className="inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90">
            <Phone className="h-4 w-4" /> Call to book
          </a>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm border border-foreground/30 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider hover:border-gold hover:text-gold">
            Get directions
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
