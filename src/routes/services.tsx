import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { services } from "@/lib/services-data";
import { Phone } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Prices — Al Rehman Hair Salon, Lahore" },
      { name: "description", content: "Full menu of men's grooming services: haircuts, beard trims, hot-towel shaves, keratin treatments and facials in Lahore." },
      { property: "og:title", content: "Services & Prices — Al Rehman Hair Salon" },
      { property: "og:description", content: "Haircuts, beard, shave, keratin and facials. Honest pricing in Lahore." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <span className="eyebrow">Services & Prices</span>
          <h1 className="mt-3 font-display text-5xl md:text-7xl">The full menu.</h1>
          <p className="mt-5 max-w-2xl text-cream/80">
            Every service includes a consultation, premium products and an unhurried finish.
            Prices are inclusive of all taxes.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 py-20">
        {services.map((cat) => (
          <section key={cat.category} className="mb-16 last:mb-0">
            <div className="flex items-center gap-4">
              <span className="divider-gold" />
              <h2 className="font-display text-3xl md:text-4xl">{cat.category}</h2>
            </div>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {cat.items.map((s) => (
                <li key={s.name} className="grid gap-2 py-6 md:grid-cols-[1fr_auto] md:items-start md:gap-10">
                  <div>
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-display text-xl">{s.name}</h3>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">{s.duration}</span>
                    </div>
                    <p className="mt-1 max-w-xl text-sm text-muted-foreground">{s.description}</p>
                  </div>
                  <div className="text-left font-display text-xl text-gold md:text-right">{s.price}</div>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <div className="mt-12 rounded-sm border border-border bg-card p-8 text-center">
          <h3 className="font-display text-2xl">Ready to book?</h3>
          <p className="mt-2 text-sm text-muted-foreground">Walk-ins welcome — bookings recommended on weekends.</p>
          <a href="tel:+923000000000" className="mt-5 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90">
            <Phone className="h-4 w-4" /> Call to book
          </a>
        </div>
      </div>
    </SiteLayout>
  );
}
