import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Visit — Al Rehman Hair Salon, Lahore" },
      { name: "description", content: "Visit Al Rehman Hair Salon in Lahore. Hours, phone, directions and bookings." },
      { property: "og:title", content: "Contact — Al Rehman Hair Salon" },
      { property: "og:description", content: "Book an appointment or visit our Lahore shop." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <span className="eyebrow">Get in touch</span>
          <h1 className="mt-3 font-display text-5xl md:text-7xl">Pay us a visit.</h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">Walk-ins welcome — for weekends, a quick call ensures your chair is ready.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-14 px-5 py-16 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl">Details</h2>
          <ul className="mt-8 space-y-5 text-sm">
            <li className="flex gap-4"><MapPin className="h-5 w-5 shrink-0 text-gold" /><div><div className="font-semibold">Address</div><div className="text-muted-foreground">Al Rehman Hair Salon<br />Lahore, Punjab, Pakistan</div></div></li>
            <li className="flex gap-4"><Phone className="h-5 w-5 shrink-0 text-gold" /><div><div className="font-semibold">Phone</div><a href="tel:+923000000000" className="text-muted-foreground hover:text-gold">+92 300 0000000</a></div></li>
            <li className="flex gap-4"><Mail className="h-5 w-5 shrink-0 text-gold" /><div><div className="font-semibold">Email</div><a href="mailto:hello@alrehman.pk" className="text-muted-foreground hover:text-gold">hello@alrehman.pk</a></div></li>
            <li className="flex gap-4"><Clock className="h-5 w-5 shrink-0 text-gold" /><div><div className="font-semibold">Hours</div><div className="text-muted-foreground">Open daily · 10:00 AM – 11:00 PM</div></div></li>
          </ul>

          <div className="mt-8 flex gap-3">
            <a href="#" aria-label="Instagram" className="rounded-full border border-border p-2 hover:border-gold hover:text-gold"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="rounded-full border border-border p-2 hover:border-gold hover:text-gold"><Facebook className="h-5 w-5" /></a>
          </div>

          <div className="mt-10 overflow-hidden rounded-sm border border-border">
            <iframe
              title="Al Rehman Hair Salon location"
              src="https://www.google.com/maps?q=Lahore+Pakistan&output=embed"
              width="100%"
              height="280"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block"
            />
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl">Request a booking</h2>
          <p className="mt-2 text-sm text-muted-foreground">Send the details — we'll confirm by phone within the hour.</p>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="mt-8 space-y-5"
          >
            <Field label="Your name" name="name" />
            <Field label="Phone" name="phone" type="tel" />
            <Field label="Service" name="service" placeholder="e.g. Haircut + beard trim" />
            <Field label="Preferred date & time" name="when" placeholder="e.g. Friday evening" />
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea rows={4} className="mt-2 w-full rounded-sm border border-input bg-card px-3 py-2 text-sm focus:border-gold focus:outline-none" />
            </div>
            <button className="w-full rounded-sm bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90">
              {sent ? "Request sent — thank you" : "Send request"}
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} required className="mt-2 w-full rounded-sm border border-input bg-card px-3 py-2 text-sm focus:border-gold focus:outline-none" />
    </div>
  );
}
