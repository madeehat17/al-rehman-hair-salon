import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Award, Users, Sparkles, Heart } from "lucide-react";
import tools from "@/assets/tools.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Al Rehman Hair Salon, Lahore" },
      { name: "description", content: "The story, team and craft behind Al Rehman Hair Salon — Lahore's trusted men's barbershop with a 4.8 rating from 797+ guests." },
      { property: "og:title", content: "About — Al Rehman Hair Salon" },
      { property: "og:description", content: "Classic craft, trained staff, modern grooming." },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { value: "4.8", label: "Google rating" },
  { value: "797+", label: "Verified reviews" },
  { value: "10+", label: "Years serving Lahore" },
  { value: "12", label: "Trained barbers" },
];

const values = [
  { icon: Award, title: "Mastery", text: "In-house training and continuous education for every barber on the floor." },
  { icon: Users, title: "Hospitality", text: "Cooperative, respectful staff — guests stay because they feel at home." },
  { icon: Sparkles, title: "Hygiene", text: "Single-use blades, sanitized tools and a spotless station for every guest." },
  { icon: Heart, title: "Honest pricing", text: "Clear menu, no upsells. The price you see is the price you pay." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <span className="eyebrow">Our story</span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl md:text-7xl">
            A Lahore institution for the <span className="italic text-gold">modern gentleman.</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center">
        <img src={tools} alt="Barber tools" loading="lazy" className="rounded-sm" />
        <div>
          <span className="eyebrow">Since day one</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">Built on craft, trust and time.</h2>
          <p className="mt-5 text-muted-foreground">
            Al Rehman Hair Salon started as a small neighborhood barbershop in Lahore with a single
            promise: take the time to do it right. Today we're proud to be one of the city's
            highest-rated men's salons — but the promise hasn't changed.
          </p>
          <p className="mt-4 text-muted-foreground">
            From a quick beard trim to a full keratin treatment, our team treats every chair like
            it's their only chair of the day.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-16 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-5xl text-gold md:text-6xl">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <span className="eyebrow">What we stand for</span>
        <h2 className="mt-3 max-w-2xl font-display text-3xl md:text-5xl">Four things we'll never compromise on.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-sm border border-border bg-card p-7">
              <v.icon className="h-7 w-7 text-gold" />
              <h3 className="mt-4 font-display text-xl">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
