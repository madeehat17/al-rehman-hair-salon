import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import hero from "@/assets/hero.jpg";
import beard from "@/assets/beard.jpg";
import haircut from "@/assets/haircut.jpg";
import shave from "@/assets/shave.jpg";
import tools from "@/assets/tools.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Al Rehman Hair Salon" },
      { name: "description", content: "Inside Al Rehman Hair Salon — interior, services and craft from Lahore's trusted men's barbershop." },
      { property: "og:title", content: "Gallery — Al Rehman Hair Salon" },
      { property: "og:description", content: "Inside our Lahore barbershop." },
      { property: "og:image", content: hero },
    ],
  }),
  component: GalleryPage,
});

const photos = [
  { src: hero, alt: "Salon interior", span: "md:col-span-2 md:row-span-2" },
  { src: haircut, alt: "Modern haircut" },
  { src: beard, alt: "Beard styling" },
  { src: shave, alt: "Hot towel shave" },
  { src: tools, alt: "Barber tools", span: "md:col-span-2" },
];

function GalleryPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <span className="eyebrow">Gallery</span>
          <h1 className="mt-3 font-display text-5xl md:text-7xl">Inside the shop.</h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">A look at the chair, the craft and the finished work.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[260px]">
          {photos.map((p, i) => (
            <figure key={i} className={`overflow-hidden rounded-sm bg-muted ${p.span ?? ""}`}>
              <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
            </figure>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
