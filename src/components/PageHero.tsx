import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-hotel.jpg";

interface PageHeroProps {
  eyebrow?:  string;
  headline:  string;
  sub?:      string;
  ctaLabel?: string;
  ctaHref?:  string;
  image:     string;
  imageAlt:  string;
  /** Height override, defaults to "100vh" */
  height?:   string;
  /** Overlay darkness 0–1, defaults to 0.48 */
  overlay?:  number;
  /** Show booking strip at the bottom */
  showStrip?: boolean;
}

/**
 * Shared full-bleed cinematic hero used on every page.
 * The image uses a Ken-Burns slow zoom, headlines animate in on load.
 */
export const PageHero = ({
  eyebrow,
  headline,
  sub,
  ctaLabel,
  ctaHref = "/reservations",
  image,
  imageAlt,
  height = "100vh",
  overlay = 0.5,
  showStrip = false,
}: PageHeroProps) => {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ minHeight: height }}
      aria-label={`Hero: ${headline}`}
    >
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="img-cover hero-img-kenburns"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: `hsl(210 22% 8% / ${overlay})` }}
      />

      {/* Gradient at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "30%",
          background: "linear-gradient(to top, hsl(210 22% 8% / 0.55), transparent)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center"
        style={{ paddingTop: "80px" }}   /* clear the fixed header */
      >
        {eyebrow && (
          <p
            className="text-eyebrow text-[hsl(var(--accent))] mb-6 reveal"
            style={{ letterSpacing: "0.28em", animationDelay: "0ms" }}
          >
            {eyebrow}
          </p>
        )}

        <h1
          className="text-display text-white mb-6 reveal"
          style={{ animationDelay: "80ms" }}
        >
          {headline}
        </h1>

        {sub && (
          <p
            className="text-lead text-white/70 mb-10 reveal mx-auto text-center"
            style={{ animationDelay: "160ms" }}
          >
            {sub}
          </p>
        )}

        {ctaLabel && (
          <div className="reveal" style={{ animationDelay: "240ms" }}>
            <Link to={ctaHref} className="btn-gold">
              <span>{ctaLabel}</span>
            </Link>
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50"
        aria-hidden="true"
      >
        <p className="text-eyebrow text-white" style={{ fontSize: "0.5rem", letterSpacing: "0.3em" }}>
          Scroll
        </p>
        <div
          className="w-px bg-white"
          style={{
            height: "40px",
            animation: "scrollIndicator 2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes scrollIndicator {
          0%, 100% { opacity: 0.3; transform: scaleY(1); transform-origin: top; }
          50%       { opacity: 1;   transform: scaleY(0.4); }
        }
      `}</style>
    </section>
  );
};

/* ─── Inner-page banner hero (shorter, no full-screen) ─── */
interface BannerHeroProps {
  eyebrow?:  string;
  headline:  string;
  image:     string;
  imageAlt:  string;
}

export const BannerHero = ({ eyebrow, headline, image, imageAlt }: BannerHeroProps) => (
  <section
    className="relative flex items-end overflow-hidden"
    style={{ minHeight: "55vh" }}
  >
    <div className="absolute inset-0 overflow-hidden">
      <img src={image} alt={imageAlt} className="img-cover hero-img-kenburns" loading="eager" />
    </div>
    <div className="absolute inset-0" style={{ background: "hsl(210 22% 8% / 0.52)" }} />
    <div
      className="absolute bottom-0 left-0 right-0"
      style={{ height: "50%", background: "linear-gradient(to top, hsl(210 22% 8% / 0.7), transparent)" }}
    />
    <div className="relative z-10 container mx-auto px-6 pb-14" style={{ paddingTop: "100px" }}>
      {eyebrow && (
        <p className="text-eyebrow text-[hsl(var(--accent))] mb-3" style={{ letterSpacing: "0.28em" }}>
          {eyebrow}
        </p>
      )}
      <h1 className="text-headline text-white">{headline}</h1>
    </div>
  </section>
);
