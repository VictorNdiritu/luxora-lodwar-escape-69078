import { Link } from "react-router-dom";
import logo from "@/assets/luxora-logo.png";

const QUICK_LINKS = [
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
  { to: "/reservations",label: "Reservations" },
];

export const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--foreground))] text-[hsl(var(--background))]">
      {/* ─── Main grid ─── */}
      <div className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="lg:col-span-1">
          <img
            src={logo}
            alt="Luxora Hotel, Lodwar"
            className="h-10 w-auto mb-6 brightness-0 invert opacity-90"
          />
          <p className="text-[hsl(var(--background))/0.55] text-sm font-light leading-relaxed max-w-[220px]">
            A boutique hotel in Lodwar, Northern Kenya — where quiet luxury meets the spirit of Turkana.
          </p>
          {/* Gold rule */}
          <span className="block w-8 h-px bg-[hsl(var(--accent))] mt-8" />
        </div>

        {/* Quick links */}
        <div>
          <p className="text-eyebrow text-[hsl(var(--accent))] mb-6" style={{ fontSize: "0.625rem", letterSpacing: "0.22em" }}>
            Explore Pages
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            {QUICK_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-[hsl(var(--background))/0.55] hover:text-[hsl(var(--background))] text-xs font-light transition-colors duration-300 link-underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-eyebrow text-[hsl(var(--accent))] mb-6" style={{ fontSize: "0.625rem", letterSpacing: "0.22em" }}>
            Contact & Location
          </p>
          <div className="flex flex-col gap-4 text-xs font-light">
            <div>
              <p className="text-[hsl(var(--background))/0.4] text-[0.65rem] tracking-widest uppercase mb-1">Address</p>
              <p className="text-[hsl(var(--background))/0.7]">Adjacent to Lodwar Airport</p>
              <p className="text-[hsl(var(--background))/0.7]">Lodwar, Turkana County, Kenya</p>
            </div>
            <div>
              <p className="text-[hsl(var(--background))/0.4] text-[0.65rem] tracking-widest uppercase mb-1">Direct Phone</p>
              <a href="tel:+254110463062" className="text-[hsl(var(--background))/0.7] hover:text-[hsl(var(--accent))] transition-colors">
                +254 110 463 062
              </a>
            </div>
            <div>
              <p className="text-[hsl(var(--background))/0.4] text-[0.65rem] tracking-widest uppercase mb-1">Email</p>
              <a href="mailto:info@luxorahotels.co.ke" className="text-[hsl(var(--background))/0.7] hover:text-[hsl(var(--accent))] transition-colors">
                info@luxorahotels.co.ke
              </a>
            </div>
            <div>
              <p className="text-[hsl(var(--background))/0.4] text-[0.65rem] tracking-widest uppercase mb-1">Check-in / Check-out</p>
              <p className="text-[hsl(var(--background))/0.7]">Check-in: 2:00 PM • Check-out: 11:00 AM</p>
            </div>
          </div>
        </div>

        {/* Reserve */}
        <div>
          <p className="text-eyebrow text-[hsl(var(--accent))] mb-6" style={{ fontSize: "0.625rem", letterSpacing: "0.22em" }}>
            Direct Booking
          </p>
          <p className="text-[hsl(var(--background))/0.55] text-xs font-light leading-relaxed mb-6">
            Experience the finest boutique hospitality in Northern Kenya. Reserve your accommodation directly with our concierge.
          </p>
          <Link
            to="/reservations"
            className="btn-gold inline-flex text-xs py-3.5"
          >
            <span>Reserve Now</span>
          </Link>

          {/* Managed by */}
          <div className="mt-8">
            <p className="text-[hsl(var(--background))/0.35] text-xs font-light">
              Managed by{" "}
              <a
                href="https://creekoxley.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-[hsl(var(--accent))] transition-colors"
              >
                Creek Oxley
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* ─── Bottom bar ─── */}
      <div className="border-t border-[hsl(var(--background))/0.08]">
        <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[hsl(var(--background))/0.35] text-xs font-light tracking-wide">
            © {new Date().getFullYear()} Luxora Hotel, Lodwar. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/policies" className="text-[hsl(var(--background))/0.35] hover:text-[hsl(var(--accent))] text-xs font-light transition-colors tracking-wide">
              Hotel Policies & Terms
            </Link>
            <Link to="/contact" className="text-[hsl(var(--background))/0.35] hover:text-[hsl(var(--accent))] text-xs font-light transition-colors tracking-wide">
              Concierge Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
