import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold text-gold font-display">A</span>
            <span className="font-display text-lg">Al Rehman</span>
          </div>
          <p className="mt-4 text-sm text-cream/70">
            A trusted Lahore barbershop where classic craft meets modern grooming. Rated 4.8 by 797+ guests.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Instagram" className="rounded-full border border-cream/20 p-2 hover:border-gold hover:text-gold"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="rounded-full border border-cream/20 p-2 hover:border-gold hover:text-gold"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="eyebrow">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow">Visit</h4>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-gold" /> Lahore, Pakistan</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-gold" /> +92 300 0000000</li>
            <li className="flex gap-2"><Clock className="h-4 w-4 shrink-0 text-gold" /> Open daily · 10 AM – 11 PM</li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow">Newsletter</h4>
          <p className="mt-4 text-sm text-cream/70">Grooming tips & seasonal offers, straight to your inbox.</p>
          <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="w-full rounded-sm border border-cream/20 bg-transparent px-3 py-2 text-sm placeholder:text-cream/40 focus:border-gold focus:outline-none"
            />
            <button className="rounded-sm bg-gold px-3 py-2 text-xs font-semibold uppercase tracking-wider text-ink">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-cream/10 px-5 py-5 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Al Rehman Hair Salon. All rights reserved.
      </div>
    </footer>
  );
}
