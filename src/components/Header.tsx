import { Link, useRouter } from "@tanstack/react-router";
import { Film } from "lucide-react";

export function Header() {
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  const linkClass = (to: string) =>
    `transition hover:text-foreground ${currentPath === to ? "text-foreground font-medium" : "text-muted-foreground"}`;

  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link to="/" className="flex items-center gap-2 font-display text-xl tracking-tight">
          <Film className="h-5 w-5 text-primary animate-flicker" />
          <span>
            Cinema <span className="text-marquee italic">K-fe</span>
          </span>
        </Link>
        <nav className="hidden gap-8 text-sm md:flex">
          <Link to="/menu" className={linkClass("/menu")}>
            Menu
          </Link>
          <Link to="/reviews" className={linkClass("/reviews")}>
            Reviews
          </Link>
          <Link to="/bezoek" className={linkClass("/bezoek")}>
            Bezoek
          </Link>
        </nav>
      </div>
    </header>
  );
}
