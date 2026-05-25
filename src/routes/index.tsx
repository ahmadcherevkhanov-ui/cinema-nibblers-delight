import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Star, Film, Utensils } from "lucide-react";
import heroImg from "@/assets/hero-brasserie.jpg";
import steakImg from "@/assets/dish-steak.jpg";
import waffleImg from "@/assets/dish-waffle.jpg";
import croquettesImg from "@/assets/dish-croquettes.jpg";
import beerImg from "@/assets/dish-beer.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Cinema K-fe — Brasserie in Koksijde" },
      {
        name: "description",
        content:
          "Cinema K-fe in Koksijde — gezellige brasserie in Cinema Koksijde. Belgische klassiekers, lokale bieren en een warm onthaal voor of na de film.",
      },
      { property: "og:title", content: "Cinema K-fe — Brasserie in Koksijde" },
      {
        property: "og:description",
        content:
          "Belgische brasserie in Cinema Koksijde. Steak met pepersaus, kaaskroketten, lokale bieren.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
});

const dishes = [
  { name: "Biefstuk met pepersaus", desc: "Met huisgemaakte frieten", img: steakImg, price: "€24" },
  { name: "Kaaskroketten", desc: "Goudbruin, met frieten en citroen", img: croquettesImg, price: "€18" },
  { name: "Wafel & vanilleijs", desc: "Met een cappuccino erbij", img: waffleImg, price: "€11" },
  { name: "Sint-Idesbaldus Bruin", desc: "Lokaal abdijbier van het vat", img: beerImg, price: "€5" },
];

const reviews = [
  {
    name: "Angela Lefevre",
    text: "Gezellige plek met vlotte en supervriendelijke bediening. De steak was ronduit heerlijk en perfect gebakken.",
    when: "6 maanden geleden",
  },
  {
    name: "Jean Philip Wymeersch",
    text: "Cinema K-fe is een vaste waarde in Koksijde. Lasagne, rundstartaar en de suggesties zijn gewoon lekker. Dimitri en zijn team — constante van kwaliteit en service.",
    when: "een jaar geleden",
  },
  {
    name: "Robin Dedoncker",
    text: "Ideale plek voor een lekker diner voor de film. Vriendelijke service en ruime parking. Wij gaan hier al jaren.",
    when: "2 jaar geleden",
  },
  {
    name: "Melanie D",
    text: "We gaan er al jaren. Vriendelijke bediening, lekker eten en super aangenaam om er iets te drinken voor je een filmpje gaat bekijken.",
    when: "2 jaar geleden",
  },
];

const hours = [
  ["Maandag", "11:30 – 21:00"],
  ["Dinsdag", "11:30 – 21:00"],
  ["Woensdag", "Gesloten"],
  ["Donderdag", "Gesloten"],
  ["Vrijdag", "11:30 – 22:00"],
  ["Zaterdag", "11:30 – 22:00"],
  ["Zondag", "11:30 – 20:00"],
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-grain">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="#top" className="flex items-center gap-2 font-display text-xl tracking-tight">
            <Film className="h-5 w-5 text-primary animate-flicker" />
            <span>Cinema <span className="text-marquee italic">K-fe</span></span>
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#menu" className="hover:text-foreground transition">Menu</a>
            <a href="#reviews" className="hover:text-foreground transition">Reviews</a>
            <a href="#bezoek" className="hover:text-foreground transition">Bezoek</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Sfeerbeeld van Cinema K-fe brasserie in Koksijde"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.16_0.012_60/0.55)_0%,oklch(0.16_0.012_60/0.4)_40%,oklch(0.16_0.012_60)_100%)]" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24">
          <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-10 bg-primary" />
            Brasserie · Koksijde sinds altijd
          </p>
          <h1 className="max-w-4xl font-display text-5xl leading-[0.95] sm:text-7xl md:text-8xl">
            Eten, drinken<br />
            <span className="italic text-marquee">voor de film.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Gezellige brasserie in Cinema Koksijde. Belgische klassiekers, lokale bieren
            en een warm onthaal — al jaren een vaste waarde aan het Marktplein.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition hover:brightness-110"
            >
              <Utensils className="h-4 w-4" /> Bekijk het menu
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Marktplein+1,+8670+Koksijde"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-border bg-card/40 px-6 py-3 text-sm backdrop-blur transition hover:bg-card"
            >
              <MapPin className="h-4 w-4" /> Route
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-border/50 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="text-foreground font-medium">4,3</span> · 316 reviews
            </div>
            <div className="flex items-center gap-2">€ 20 – 30 per persoon</div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Geopend tot 21:00
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="relative py-32">
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
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
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

      {/* REVIEWS */}
      <section id="reviews" className="relative border-y border-border bg-card/40 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">Wat gasten zeggen</p>
              <h2 className="font-display text-5xl sm:text-6xl">
                4,3 <span className="text-muted-foreground">/ 5</span>
              </h2>
            </div>
            <div className="hidden text-right text-sm text-muted-foreground sm:block">
              Op basis van 316 Google-reviews
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {reviews.map((r) => (
              <figure key={r.name} className="border border-border bg-background p-8 shadow-elegant">
                <div className="mb-4 flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="font-display text-xl italic leading-snug text-foreground">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between text-sm">
                  <span className="font-medium">{r.name}</span>
                  <span className="text-muted-foreground">{r.when}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="bezoek" className="relative py-32">
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

      {/* FOOTER */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2 font-display text-base text-foreground">
            <Film className="h-4 w-4 text-primary" />
            Cinema K-fe
          </div>
          <p>© {new Date().getFullYear()} Cinema K-fe · Koksijde</p>
        </div>
      </footer>
    </div>
  );
}
