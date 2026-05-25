import { createFileRoute } from "@tanstack/react-router";
import { Star, Film } from "lucide-react";
import { Header } from "@/components/Header";
import { reviews } from "@/lib/data";

export const Route = createFileRoute("/reviews")({
  component: ReviewsPage,
  head: () => ({
    meta: [
      { title: "Reviews — Cinema K-fe" },
      { name: "description", content: "Lees wat gasten zeggen over Cinema K-fe in Koksijde. 4,3/5 op basis van 316 reviews." },
      { property: "og:title", content: "Reviews — Cinema K-fe" },
      { property: "og:description", content: "Lees wat gasten zeggen over Cinema K-fe in Koksijde." },
    ],
  }),
});

function ReviewsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-grain">
      <Header />

      <section className="relative border-y border-border bg-card/40 pt-32 pb-32">
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
