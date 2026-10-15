import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import logo from "@/assets/luxora-logo.png";

// Curated primary desktop navigation (refined, uncluttered, world-class luxury)
const PRIMARY_NAV_LINKS = [
  { to: "/about",       label: "About" },
  { to: "/rooms",       label: "Accommodation" },
  { to: "/dining",      label: "Dining" },
  { to: "/experiences", label: "Experiences" },
  { to: "/mice",        label: "Events" },
  { to: "/contact",     label: "Contact" },
];

// Comprehensive full-screen directory
const DIRECTORY_SECTIONS = [
  {
    title: "Stay & Dine",
    links: [
      { to: "/rooms",     label: "Accommodation & Suites" },
      { to: "/dining",    label: "Restaurant & Lounge Bar" },
      { to: "/amenities", label: "Facilities & Amenities" },
      { to: "/offers",    label: "Offers & Curated Packages" },
    ],
  },
  {
    title: "Discover & Connect",
    links: [
      { to: "/experiences", label: "Turkana Expeditions" },
      { to: "/mice",        label: "Meetings, Events & MICE" },
      { to: "/gallery",     label: "Visual Gallery" },
      { to: "/blog",        label: "The Turkana Journal" },
    ],
  },
  {
    title: "The Residence",
    links: [
      { to: "/",         label: "Home" },
      { to: "/about",    label: "About Luxora" },
      { to: "/contact",  label: "Contact & Concierge" },
      { to: "/policies", label: "Hotel Policies & Terms" },
    ],
  },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroPage, setHeroPage] = useState(true);
  const location = useLocation();
  const menuRef  = useRef<HTMLDivElement>(null);

  /* Detect scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Reset on route change */
  useEffect(() => {
    setMenuOpen(false);
    setScrolled(false);
    setHeroPage(location.pathname === "/");
  }, [location.pathname]);

  /* Lock body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  const transparent = heroPage && !scrolled && !menuOpen;

  const headerBg = transparent
    ? "bg-transparent"
    : "bg-[hsl(40_18%_97%)] shadow-[var(--shadow-header)]";
  const textColour = transparent ? "text-white" : "text-[hsl(var(--foreground))]";
  const logoFilter = transparent ? "brightness-0 invert" : "";
  const bookBg = transparent
    ? "border border-white/60 text-white hover:bg-white hover:text-[hsl(var(--foreground))]"
    : "bg-[hsl(var(--accent))] text-white hover:bg-[hsl(var(--foreground))]";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(.76,0,.24,1)] ${headerBg}`}
        style={{ height: scrolled ? "68px" : "86px" }}
      >
        <div className="container mx-auto px-6 lg:px-12 h-full flex items-center justify-between">

          {/* Logo */}
          <Link to="/" aria-label="Luxora Hotel – Home" className="flex-shrink-0">
            <img
              src={logo}
              alt="Luxora Hotel, Lodwar"
              className={`w-auto transition-all duration-500 ${logoFilter}`}
              style={{ height: scrolled ? "36px" : "44px" }}
            />
          </Link>

          {/* Clean Curated Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10" aria-label="Main navigation">
            {PRIMARY_NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`text-eyebrow transition-colors duration-300 link-underline ${textColour} ${
                  isActive(to) ? "opacity-100 font-semibold" : "opacity-70 hover:opacity-100"
                }`}
                style={{ fontSize: "0.625rem", letterSpacing: "0.22em" }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Actions: Book Now + Menu Toggle */}
          <div className="flex items-center gap-5 sm:gap-6">
            <Link
              to="/reservations"
              className={`hidden sm:inline-flex items-center gap-2 text-eyebrow px-6 py-2.5 border transition-all duration-300 ${bookBg}`}
              style={{ fontSize: "0.625rem", letterSpacing: "0.22em" }}
            >
              Book Now
            </Link>

            {/* Menu button with label and minimal lines */}
            <button
              onClick={() => setMenuOpen(true)}
              className={`flex items-center gap-2.5 p-2 transition-opacity duration-300 hover:opacity-80 ${textColour}`}
              aria-label="Open directory menu"
              aria-expanded={menuOpen}
            >
              <span className="text-eyebrow hidden md:inline-block" style={{ fontSize: "0.625rem", letterSpacing: "0.25em" }}>
                Menu
              </span>
              <div className="flex flex-col gap-[5px] justify-center items-end">
                <span className="block w-6 h-[1.5px] bg-current transition-all duration-300" />
                <span className="block w-4 h-[1.5px] bg-current transition-all duration-300" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ─── Full-screen Luxury Directory Modal ─── */}
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
          className="fixed top-7 right-8 text-[hsl(var(--background))] opacity-70 hover:opacity-100 transition-opacity p-2 z-10 flex items-center gap-2"
        >
          <span className="text-eyebrow text-xs tracking-widest hidden sm:inline">Close</span>
          <X size={26} />
        </button>

        <div className="min-h-full flex flex-col justify-between py-20 px-8 sm:px-14 lg:px-24 max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <img
                src={logo}
                alt="Luxora Hotel Lodwar"
                className="h-10 w-auto brightness-0 invert opacity-90 mb-4"
              />
            </Link>
            <p
              className="text-eyebrow text-[hsl(var(--accent))] tracking-[0.25em]"
              style={{ fontSize: "0.6rem" }}
            >
              Hotel Directory & Guest Services
            </p>
          </div>

          {/* Directory Sections Grid */}
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 my-auto py-8">
            {DIRECTORY_SECTIONS.map((section, sIdx) => (
              <div key={section.title} className="flex flex-col gap-5">
                <p
                  className="text-eyebrow text-[hsl(var(--accent))] tracking-[0.25em] border-b border-[hsl(var(--background))/0.15] pb-3"
                  style={{ fontSize: "0.6rem" }}
                >
                  {section.title}
                </p>
                <nav className="flex flex-col gap-3">
                  {section.links.map(({ to, label }, lIdx) => (
                    <Link
                      key={to}
                      to={to}
                      onClick={() => setMenuOpen(false)}
                      className="font-serif text-[hsl(var(--background))] hover:text-[hsl(var(--accent))] transition-colors text-2xl lg:text-3xl font-light leading-snug"
                      style={{
                        animationDelay: menuOpen ? `${sIdx * 80 + lIdx * 40 + 100}ms` : "0ms",
                      }}
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          {/* Bottom Bar: Direct Reservation + Contact */}
          <div className="mt-16 pt-8 border-t border-[hsl(var(--background))/0.15] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/reservations"
                onClick={() => setMenuOpen(false)}
                className="btn-gold text-xs py-3.5 px-7"
              >
                <span>Reserve Your Stay</span>
              </Link>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="btn-outline text-xs py-3 px-6"
                style={{ borderColor: "hsl(var(--background)/0.3)", color: "hsl(var(--background))" }}
              >
                <span>Direct Concierge</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs text-[hsl(var(--background))/0.65] font-light">
              <a href="tel:+254110463062" className="hover:text-[hsl(var(--accent))] transition-colors">
                +254 110 463 062
              </a>
              <span>•</span>
              <a href="mailto:info@luxorahotels.co.ke" className="hover:text-[hsl(var(--accent))] transition-colors">
                info@luxorahotels.co.ke
              </a>
              <span>•</span>
              <span>Adjacent to Lodwar Airport</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
