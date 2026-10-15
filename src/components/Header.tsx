import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import logo from "@/assets/luxora-logo.png";

const PRIMARY_NAV_LINKS = [
  { to: "/",            label: "Home" },
  { to: "/about",       label: "About" },
  { to: "/rooms",       label: "Accommodation" },
  { to: "/dining",      label: "Dining" },
  { to: "/amenities",   label: "Amenities" },
  { to: "/experiences", label: "Experiences" },
  { to: "/mice",        label: "Events" },
  { to: "/gallery",     label: "Gallery" },
  { to: "/offers",      label: "Offers" },
  { to: "/blog",        label: "Journal" },
  { to: "/contact",     label: "Contact" },
];

const OVERLAY_NAV_LINKS = [
  { to: "/",            label: "Home" },
  { to: "/about",       label: "About" },
  { to: "/rooms",       label: "Accommodation" },
  { to: "/dining",      label: "Dining & Lounge Bar" },
  { to: "/amenities",   label: "Facilities & Amenities" },
  { to: "/experiences", label: "Turkana Experiences" },
  { to: "/mice",        label: "Events & MICE" },
  { to: "/gallery",     label: "Visual Gallery" },
  { to: "/offers",      label: "Offers & Packages" },
  { to: "/blog",        label: "The Journal" },
  { to: "/contact",     label: "Contact" },
];

export const Header = () => {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [heroPage,    setHeroPage]    = useState(true);   // pages with dark hero get transparent header
  const location = useLocation();
  const menuRef  = useRef<HTMLDivElement>(null);

  /* Detect scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Reset on route change */
  useEffect(() => {
    setMenuOpen(false);
    setScrolled(false);
    // Only home page has the full dark-image hero that needs a transparent header
    setHeroPage(location.pathname === "/");
  }, [location.pathname]);

  /* Lock body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  /* Colour logic */
  const transparent = heroPage && !scrolled && !menuOpen;

  const headerBg    = transparent
    ? "bg-transparent"
    : "bg-[hsl(40_18%_97%)] shadow-[var(--shadow-header)]";
  const textColour  = transparent ? "text-white" : "text-[hsl(var(--foreground))]";
  const logoFilter  = transparent ? "brightness-0 invert" : "";
  const bookBg      = transparent
    ? "border border-white/60 text-white hover:bg-white hover:text-[hsl(var(--foreground))]"
    : "bg-[hsl(var(--accent))] text-white hover:bg-[hsl(var(--foreground))]";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(.76,0,.24,1)] ${headerBg}`}
        style={{ height: scrolled ? "64px" : "80px" }}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between">

          {/* Logo */}
          <Link to="/" aria-label="Luxora Hotel – Home" className="flex-shrink-0">
            <img
              src={logo}
              alt="Luxora Hotel, Lodwar"
              className={`w-auto transition-all duration-500 ${logoFilter}`}
              style={{ height: scrolled ? "36px" : "44px" }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-7" aria-label="Main navigation">
            {PRIMARY_NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`text-eyebrow transition-colors duration-300 link-underline ${textColour} ${
                  isActive(to) ? "opacity-100 font-semibold" : "opacity-65 hover:opacity-100"
                }`}
                style={{ fontSize: "0.575rem", letterSpacing: "0.18em" }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Book now + burger */}
          <div className="flex items-center gap-4">
            <Link
              to="/reservations"
              className={`hidden sm:inline-flex items-center gap-2 text-eyebrow px-5 py-2.5 border transition-all duration-300 ${bookBg}`}
              style={{ fontSize: "0.625rem", letterSpacing: "0.2em" }}
            >
              Book Now
            </Link>

            {/* Burger */}
            <button
              className={`flex flex-col gap-[5px] p-2 transition-colors duration-300 ${textColour}`}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <span className="block w-6 h-px bg-current transition-all duration-300" />
              <span className="block w-4 h-px bg-current transition-all duration-300 ml-auto" />
              <span className="block w-6 h-px bg-current transition-all duration-300" />
            </button>
          </div>
        </div>
      </header>

      {/* ─── Full-screen overlay menu (mobile + desktop) ─── */}
      <div
        ref={menuRef}
        className={`fixed inset-0 z-[200] transition-all duration-700 ease-[cubic-bezier(.76,0,.24,1)] overflow-y-auto ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "hsl(var(--foreground))" }}
        aria-hidden={!menuOpen}
      >
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          className="fixed top-6 right-6 text-[hsl(var(--background))] opacity-60 hover:opacity-100 transition-opacity p-2 z-10"
        >
          <X size={32} />
        </button>

        <div className="min-h-full flex flex-col justify-between py-16 px-10 lg:px-24 max-w-5xl mx-auto">
          {/* Eyebrow */}
          <div>
            <p
              className="text-eyebrow text-[hsl(var(--accent))] mb-8 tracking-[0.25em]"
              style={{ opacity: menuOpen ? 1 : 0, transition: "opacity 0.5s 0.15s" }}
            >
              Luxora Hotel Lodwar • Directory
            </p>

            {/* Links */}
            <nav className="grid sm:grid-cols-2 gap-x-12 gap-y-2">
              {OVERLAY_NAV_LINKS.map(({ to, label }, i) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className="menu-link-animate font-serif text-[hsl(var(--background))] hover:text-[hsl(var(--accent))] transition-colors"
                  style={{
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                    fontWeight: 300,
                    lineHeight: 1.3,
                    animationDelay: menuOpen ? `${i * 40 + 150}ms` : "0ms",
                    animationPlayState: menuOpen ? "running" : "paused",
                  }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Book now + Policies */}
          <div
            className="mt-12 pt-8 border-t border-[hsl(var(--background))/0.15] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            style={{ opacity: menuOpen ? 1 : 0, transition: "opacity 0.5s 0.6s" }}
          >
            <div>
              <Link
                to="/reservations"
                onClick={() => setMenuOpen(false)}
                className="btn-gold inline-flex"
              >
                <span>Reserve Your Stay</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs text-[hsl(var(--background))/0.6]">
              <Link to="/policies" onClick={() => setMenuOpen(false)} className="hover:text-[hsl(var(--accent))] transition-colors">
                Policies & Terms
              </Link>
              <span>•</span>
              <a href="tel:+254110463062" className="hover:text-[hsl(var(--accent))] transition-colors">
                +254 110 463 062
              </a>
              <span>•</span>
              <a href="mailto:info@luxorahotels.co.ke" className="hover:text-[hsl(var(--accent))] transition-colors">
                info@luxorahotels.co.ke
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
