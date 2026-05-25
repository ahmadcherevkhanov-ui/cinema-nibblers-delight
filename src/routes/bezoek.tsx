import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Film } from "lucide-react";
import { Header } from "@/components/Header";
import { hours } from "@/lib/data";

export const Route = createFileRoute("/bezoek")({
  component: BezoekPage,
  head: () => ({
    meta: [
      { title: "Bezoek ons — Cinema K-fe" },
      { name: "description", content: "Cinema K-fe in Koksijde. Marktplein 1, ruime gratis parking. Bekijk onze openingsuren." },
      { property: "og:title", content: "Bezoek ons — Cinema K-fe" },
      { property: "og:description", content: "Cinema K-fe in Koksijde. Marktplein 1, ruime gratis parking." },
    ],
  }),
});

function BezoekPage() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-grain">
      <Header />

      <section className="relative py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">Bezoek ons</p>
            <h2 className="mb-8 font-display text-5xl sm:text-6xl">
              Aan het <span className="italic text-marquee">Marktplein.</span>
            </h2>
            <p className="mb-12 max-w-md text-muted-foreground">
              Gevestigd in Cinema Koksijde. Ruime gratis parking voor de deur — leg je parkeerkaart.
            </p>

            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4 border-t border-border pt-6">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <div className="font-medium">Marktplein 1, 8670 Koksijde</div>
                  <div className="text-muted-foreground">In Cinema Koksijde</div>
                </div>
              </div>
              <div className="flex items-start gap-4 border-t border-border pt-6">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+32491640706" className="font-medium hover:text-primary">
                  0491 64 07 06
                </a>
              </div>
              <div className="flex items-start gap-4 border-t border-border pt-6">
                <Clock className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <div className="w-full">
                  <table className="w-full text-left">
                    <tbody>
                      {hours.map(([d, h]) => (
                        <tr key={d} className="text-muted-foreground">
                          <td className="py-1 pr-6 font-medium text-foreground">{d}</td>
                          <td className="py-1">{h}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden border border-border shadow-elegant lg:aspect-auto">
            <iframe
              title="Kaart Cinema K-fe"
              src="https://www.google.com/maps?q=Marktplein+1,+8670+Koksijde&output=embed"
              className="absolute inset-0 h-full w-full grayscale-[0.6] contrast-110"
              loading="lazy"
            />
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
