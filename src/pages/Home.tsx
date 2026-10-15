import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/hooks/useScrollReveal";

// ── Images ──────────────────────────────────────────────────────────────────
import heroImg         from "@/assets/hero-hotel.jpg";
import restaurantImg   from "@/assets/new-images/restaurant.png";
import miceImg         from "@/assets/mice-conference.jpg";
import standardDouble1 from "@/assets/new-images/sd.png";
import superiorDouble1 from "@/assets/new-images/sup.png";
import twinRoom1       from "@/assets/new-images/suit.png";
import turkanaVillage  from "@/assets/experiences/Turkana Cultural Village.jpg";
import eliyeSprings    from "@/assets/experiences/Eliye spirings.jpg";

// ── Opening Soon Banner ──────────────────────────────────────────────────────
const OpeningSoonBanner = () => (
  <div
    style={{
      position: "relative",
      background: "linear-gradient(90deg, hsl(210 22% 16%) 0%, hsl(38 45% 28%) 50%, hsl(210 22% 16%) 100%)",
      overflow: "hidden",
    }}
  >
    {/* shimmer */}
    <div
      style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(120deg, transparent 30%, rgba(255,220,130,0.15) 50%, transparent 70%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 3.5s infinite linear",
      }}
    />
    <div className="container mx-auto px-6 py-3 flex items-center justify-center gap-4 relative">
      <span style={{ color: "hsl(var(--accent))", fontSize: "0.5rem", letterSpacing: "8px", opacity: 0.7 }}>
        ✦ ✦ ✦
      </span>
      <p
        className="text-center"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(0.75rem, 2vw, 0.9rem)",
          fontWeight: 400,
          color: "hsl(40 18% 94%)",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
        }}
      >
        Opening Soon — Lodwar's Finest Boutique Hotel
      </p>
      <span style={{ color: "hsl(var(--accent))", fontSize: "0.5rem", letterSpacing: "8px", opacity: 0.7 }}>
        ✦ ✦ ✦
      </span>
    </div>
  </div>
);

// ── Room Card ────────────────────────────────────────────────────────────────
interface RoomCardProps {
  title:  string;
  sub:    string;
  count:  string;
  image:  string;
  slug:   string;
  flip?:  boolean;
}

const RoomCard = ({ title, sub, count, image, slug, flip }: RoomCardProps) => (
  <div className={`grid md:grid-cols-2 gap-0 items-stretch reveal ${flip ? "md:[direction:rtl]" : ""}`}>
    <div className="relative overflow-hidden" style={{ minHeight: "420px" }}>
      <img
        src={image}
        alt={title}
        className="img-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.76,0,.24,1)] hover:scale-105"
        style={{ direction: "ltr" }}
      />
    </div>
    <div
      className="flex flex-col justify-center px-10 py-14 bg-[hsl(var(--card))]"
      style={{ direction: "ltr" }}
    >
      <p className="text-eyebrow text-[hsl(var(--accent))] mb-4" style={{ letterSpacing: "0.22em" }}>
        {count}
      </p>
      <h3 className="text-headline mb-4">{title}</h3>
      <span className="gold-rule" />
      <p className="text-lead text-[hsl(var(--muted-foreground))] mb-8">{sub}</p>
      <div className="flex flex-wrap gap-4 items-center">
        <Link to={`/reservations?room=${slug}`} className="btn-primary self-start">
          <span>Reserve This Room</span>
        </Link>
        <Link to={`/rooms/${slug}`} className="btn-outline self-start text-xs">
          <span>Explore Details</span>
        </Link>
      </div>
    </div>
  </div>
);

// ── Stat ─────────────────────────────────────────────────────────────────────
const Stat = ({ num, label }: { num: string; label: string }) => (
  <div className="text-center">
    <p
      className="font-serif text-[hsl(var(--accent))]"
      style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, lineHeight: 1 }}
    >
      {num}
    </p>
    <p className="text-eyebrow text-[hsl(var(--muted-foreground))] mt-2" style={{ letterSpacing: "0.2em" }}>
      {label}
    </p>
  </div>
);

// ── Teaser card (experiences, etc.) ──────────────────────────────────────────
const TeaserCard = ({ title, sub, image, href }: { title: string; sub: string; image: string; href: string }) => (
  <Link to={href} className="group block relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
    <img
      src={image}
      alt={title}
      className="img-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.76,0,.24,1)] group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210_22%_8%/0.72)] via-transparent to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <p className="text-eyebrow text-[hsl(var(--accent))] mb-2" style={{ letterSpacing: "0.22em" }}>{sub}</p>
      <h3 className="font-serif text-white text-2xl font-light">{title}</h3>
    </div>
  </Link>
);

// ── Home page ────────────────────────────────────────────────────────────────
const Home = () => (
  <>
    <Helmet>
      <title>Luxora Hotel, Lodwar | Boutique Luxury Hotel Adjacent to Lodwar Airport</title>
      <meta name="description" content="Experience quiet luxury at Luxora Hotel, Lodwar — a boutique hotel with 36 elegant rooms adjacent to Lodwar Airport. Standard Double, Superior Double & Twin accommodation in Turkana County, Kenya." />
      <link rel="canonical" href="https://luxorahotels.co.ke/" />
      <meta property="og:title" content="Luxora Hotel, Lodwar | Boutique Luxury Hotel" />
      <meta property="og:description" content="Experience luxury at Luxora Hotel, Lodwar — adjacent to Lodwar Airport in Northern Kenya." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://luxorahotels.co.ke/og-home.jpg" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["Hotel", "LocalBusiness"],
        "name": "Luxora Hotel, Lodwar",
        "description": "Boutique luxury hotel adjacent to Lodwar Airport, Turkana County, Kenya.",
        "url": "https://luxorahotels.co.ke",
        "telephone": "+254110463062",
        "email": "info@luxorahotels.co.ke",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Adjacent to Lodwar Airport",
          "addressLocality": "Lodwar",
          "addressRegion": "Turkana County",
          "addressCountry": "KE"
        },
        "numberOfRooms": 36,
        "checkinTime": "14:00",
        "checkoutTime": "11:00"
      })}</script>
    </Helmet>

    <ScrollReveal />
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Header />
      <OpeningSoonBanner />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="Lodwar, Turkana County, Kenya"
        headline={"Where the\nDesert Meets\nElegance"}
        sub="A boutique hotel experience of genuine warmth, thoughtful comfort, and the timeless light of Northern Kenya — just moments from Lodwar Airport."
        ctaLabel="Reserve Your Stay"
        ctaHref="/reservations"
        image={heroImg}
        imageAlt="Luxora Hotel, Lodwar — exterior and grounds"
        showStrip
      />

      {/* ── INTRO ────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-[hsl(var(--background))]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="reveal">
              <p className="text-eyebrow text-[hsl(var(--accent))] mb-5" style={{ letterSpacing: "0.25em" }}>
                Welcome to Luxora
              </p>
              <h2 className="text-headline mb-6">
                Lodwar's Premier Boutique Hotel
              </h2>
              <span className="gold-rule" />
              <p className="text-lead text-[hsl(var(--muted-foreground))] mb-6">
                Luxora Hotel, Lodwar was founded with a vision to bring world-class hospitality to the heart of Turkana County. Our boutique hotel represents a perfect blend of modern luxury and authentic Kenyan warmth, designed for both the business traveller and the curious explorer.
              </p>
              <p className="text-lead text-[hsl(var(--muted-foreground))] mb-10">
                Strategically located adjacent to Lodwar Airport, we offer unparalleled convenience combined with an intimacy that only a boutique property can provide.
              </p>
              <Link to="/about" className="btn-outline">
                <span>Our Story</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="reveal-stagger grid grid-cols-2 gap-px bg-[hsl(var(--border))]">
              {[
                { num: "36", label: "Elegant Rooms" },
                { num: "2",  label: "Floors" },
                { num: "10", label: "Min from Airport" },
                { num: "24", label: "Hour Service" },
              ].map((s) => (
                <div key={s.num} className="bg-[hsl(var(--background))] py-12 px-8 flex items-center justify-center">
                  <Stat {...s} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ROOMS ────────────────────────────────────────────────────────── */}
      <section className="bg-[hsl(var(--muted))]" style={{ paddingTop: "6rem" }}>
        <div className="container mx-auto px-6 text-center mb-16 reveal">
          <p className="text-eyebrow text-[hsl(var(--accent))] mb-4" style={{ letterSpacing: "0.25em" }}>
            Accommodation
          </p>
          <h2 className="text-headline mb-4">Rooms & Suites</h2>
          <span className="gold-rule-center" />
          <p className="text-lead text-[hsl(var(--muted-foreground))] mx-auto">
            36 thoughtfully appointed rooms across two floors — each a private sanctuary of comfort and calm.
          </p>
        </div>

        <div className="flex flex-col">
          <RoomCard
            title="Standard Double Room"
            sub="Spacious rooms with queen-size beds, modern furnishings and en-suite bathrooms. Perfect for couples or guests seeking exceptional comfort at an accessible price."
            count="14 Rooms Available"
            image={standardDouble1}
            slug="standard-double"
          />
          <RoomCard
            title="Superior Double Room"
            sub="Elevated comfort with king-size beds, refined décor and a serene ambiance — ideal for discerning travellers seeking a heightened sense of occasion."
            count="14 Rooms Available"
            image={superiorDouble1}
            slug="superior-double"
            flip
          />
          <RoomCard
            title="Standard Twin Room"
            sub="Two generous single beds, designed with the pragmatic traveller in mind — spacious, well-appointed and quietly elegant."
            count="8 Rooms Available"
            image={twinRoom1}
            slug="standard-twin"
          />
        </div>

        <div className="text-center py-16">
          <Link to="/rooms" className="btn-primary">
            <span>Explore All Rooms</span>
          </Link>
        </div>
      </section>

      {/* ── AMENITIES STRIP ──────────────────────────────────────────────── */}
      <section className="section-pad-sm bg-[hsl(var(--foreground))]">
        <div className="container mx-auto px-6">
          <div className="reveal-stagger grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto text-center">
            {[
              { icon: "🍽", label: "Restaurant & Bar" },
              { icon: "📶", label: "High-Speed WiFi" },
              { icon: "✈", label: "Airport Transfer" },
              { icon: "🛎", label: "24/7 Concierge" },
              { icon: "🚗", label: "Free Parking" },
              { icon: "🏢", label: "Conference Hall" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3">
                <span className="text-2xl" aria-hidden="true">{icon}</span>
                <p
                  className="text-eyebrow text-[hsl(var(--background))/0.6]"
                  style={{ fontSize: "0.575rem", letterSpacing: "0.18em" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/amenities"
              className="text-eyebrow text-[hsl(var(--accent))] hover:underline tracking-widest inline-flex items-center gap-2"
              style={{ fontSize: "0.6rem" }}
            >
              <span>Explore All Facilities & Amenities →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── DINING TEASER ─────────────────────────────────────────────────── */}
      <section className="section-pad bg-[hsl(var(--background))]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative overflow-hidden reveal" style={{ minHeight: "500px" }}>
              <img
                src={restaurantImg}
                alt="Luxora Restaurant"
                className="img-cover hover:scale-105 transition-transform duration-[1200ms] ease-[cubic-bezier(.76,0,.24,1)]"
              />
              <div className="absolute bottom-6 right-6 bg-[hsl(var(--background))] p-4">
                <p className="text-eyebrow text-[hsl(var(--accent))]" style={{ letterSpacing: "0.2em", fontSize: "0.6rem" }}>
                  Open Daily
                </p>
              </div>
            </div>
            <div className="reveal">
              <p className="text-eyebrow text-[hsl(var(--accent))] mb-5" style={{ letterSpacing: "0.25em" }}>
                Dining
              </p>
              <h2 className="text-headline mb-6">Restaurant & Bar</h2>
              <span className="gold-rule" />
              <p className="text-lead text-[hsl(var(--muted-foreground))] mb-4">
                Our restaurant celebrates the flavours of Kenya and the wider region, offering a thoughtfully curated menu of local and international cuisine in an atmosphere of relaxed elegance.
              </p>
              <p className="text-lead text-[hsl(var(--muted-foreground))] mb-10">
                Whether a working breakfast before an early flight or a leisurely dinner under the Turkana sky, every meal at Luxora is an occasion.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Link to="/dining" className="btn-primary">
                  <span>Explore Dining & Bar</span>
                </Link>
                <Link to="/contact" className="btn-outline">
                  <span>Enquire About Dining</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCES TEASER ───────────────────────────────────────────── */}
      <section className="section-pad bg-[hsl(var(--muted))]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <p className="text-eyebrow text-[hsl(var(--accent))] mb-4" style={{ letterSpacing: "0.25em" }}>
              Experiences
            </p>
            <h2 className="text-headline mb-4">Discover Turkana</h2>
            <span className="gold-rule-center" />
            <p className="text-lead text-[hsl(var(--muted-foreground))] mx-auto">
              From volcanic islands to ancient standing stones — Turkana County is one of the world's most extraordinary landscapes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto reveal-stagger">
            <TeaserCard
              title="Turkana Cultural Village"
              sub="Half Day"
              image={turkanaVillage}
              href="/experiences"
            />
            <TeaserCard
              title="Eliye Springs"
              sub="Full Day"
              image={eliyeSprings}
              href="/experiences"
            />
          </div>

          <div className="text-center mt-12 reveal">
            <Link to="/experiences" className="btn-outline">
              <span>All Experiences</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── MICE TEASER ──────────────────────────────────────────────────── */}
      <section className="section-pad bg-[hsl(var(--background))]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p className="text-eyebrow text-[hsl(var(--accent))] mb-5" style={{ letterSpacing: "0.25em" }}>
                Events & MICE
              </p>
              <h2 className="text-headline mb-6">Host Your Next Event at Luxora</h2>
              <span className="gold-rule" />
              <p className="text-lead text-[hsl(var(--muted-foreground))] mb-4">
                Where professionalism meets unparalleled comfort. Luxora Hotel is your premier destination for corporate retreats, strategic team-building experiences, and impactful business gatherings in Northern Kenya.
              </p>
              <p className="text-lead text-[hsl(var(--muted-foreground))] mb-4">
                Conference hall capacity up to 200 guests. Multiple breakout rooms, state-of-the-art AV, dedicated fibre, and gourmet catering.
              </p>
              <p className="text-sm italic text-[hsl(var(--muted-foreground))] mb-10">
                Ideal for NGO gatherings, corporate training, product launches and executive retreats.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/mice" className="btn-primary">
                  <span>Plan Your Event</span>
                </Link>
                <Link to="/contact" className="btn-outline">
                  <span>Request a Proposal</span>
                </Link>
              </div>
            </div>
            <div className="relative overflow-hidden reveal" style={{ minHeight: "500px" }}>
              <img
                src={miceImg}
                alt="Luxora Conference and Meeting Facilities"
                className="img-cover hover:scale-105 transition-transform duration-[1200ms] ease-[cubic-bezier(.76,0,.24,1)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ──────────────────────────────────────────────────── */}
      <section
        className="section-pad relative overflow-hidden flex items-center justify-center text-center"
        style={{
          background: "hsl(var(--foreground))",
          minHeight: "380px",
        }}
      >
        {/* Subtle gold accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 100%, hsl(38 45% 48% / 0.12), transparent)",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6 reveal">
          <p className="text-eyebrow text-[hsl(var(--accent))] mb-6" style={{ letterSpacing: "0.28em" }}>
            Luxora Hotel, Lodwar
          </p>
          <h2
            className="font-serif text-[hsl(var(--background))] mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300 }}
          >
            Your Turkana Experience Begins Here
          </h2>
          <span className="block w-8 h-px bg-[hsl(var(--accent))] mx-auto mb-8" />
          <p className="text-lead text-[hsl(var(--background))/0.6] mb-10 mx-auto">
            Reserve directly with us for the best available rate and a personalised welcome.
          </p>
          <Link to="/reservations" className="btn-gold">
            <span>Reserve Your Stay</span>
          </Link>
        </div>
      </section>

      {/* ── LOCATION STRIP ───────────────────────────────────────────────── */}
      <section className="section-pad-sm bg-[hsl(var(--muted))]">
        <div className="container mx-auto px-6 max-w-4xl text-center reveal">
          <p className="text-eyebrow text-[hsl(var(--accent))] mb-4" style={{ letterSpacing: "0.25em" }}>
            Find Us
          </p>
          <h3 className="font-serif text-2xl mb-4 font-light">
            Adjacent to Lodwar Airport, Turkana County, Kenya
          </h3>
          <span className="gold-rule-center" />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-6 text-sm text-[hsl(var(--muted-foreground))]">
            <a href="tel:+254110463062" className="link-underline hover:text-[hsl(var(--foreground))] transition-colors">
              +254 110 463 062
            </a>
            <span className="hidden sm:block w-px h-4 bg-[hsl(var(--border))]" />
            <a href="mailto:info@luxorahotels.co.ke" className="link-underline hover:text-[hsl(var(--foreground))] transition-colors">
              info@luxorahotels.co.ke
            </a>
            <span className="hidden sm:block w-px h-4 bg-[hsl(var(--border))]" />
            <Link to="/contact" className="link-underline hover:text-[hsl(var(--foreground))] transition-colors">
              Get Directions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </>
);

export default Home;
