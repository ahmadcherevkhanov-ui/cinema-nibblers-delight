import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { dishes } from "@/lib/data";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "Menu — Cinema K-fe" },
      { name: "description", content: "Bekijk ons menu: biefstuk, kaaskroketten, wafels en lokale bieren bij Cinema K-fe in Koksijde." },
      { property: "og:title", content: "Menu — Cinema K-fe" },
      { property: "og:description", content: "Belgische klassiekers, lokale bieren en meer bij Cinema K-fe in Koksijde." },
    ],
  }),
});

function MenuPage() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-grain">
      <Header />

      <section className="relative pt-32 pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">Op het menu</p>
              <h2 className="font-display text-5xl sm:text-6xl">
                Klassiekers, <span className="italic text-marquee">recht uit de keuken.</span>
              </h2>
            </div>
            <p className="max-w-sm text-muted-foreground">
              Een handvol favorieten uit de kaart. Suggesties wisselen — vraag gerust de chef.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {dishes.map((d) => (
              <article key={d.name} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={d.img}
                    alt={d.name}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-contain transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute right-3 top-3 bg-background/80 px-2 py-1 text-xs font-medium text-primary backdrop-blur">
                    {d.price}
                  </div>
                </div>
                <h3 className="mt-5 font-display text-xl">{d.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2 font-display text-base text-foreground">
          <Film className="h-4 w-4 text-primary" />
          Cinema K-fe
        </div>
        <p>© {new Date().getFullYear()} Cinema K-fe · Koksijde</p>
      </div>
    </footer>
  );
}

import { Film } from "lucide-react";
