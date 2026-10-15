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
import turkanaVillage  from "@/assets/newest clear images/turkana village.jpg";
import eliyeSprings    from "@/assets/newest clear images/Eliye springs.jpg";

import { UtensilsCrossed, Wifi, Plane, BellRing, Car, Building2, Bed, Users } from "lucide-react";

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
    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
      <p className="text-eyebrow text-[hsl(var(--accent))] mb-2" style={{ letterSpacing: "0.22em" }}>
        Excursion
      </p>
      <h3 className="font-serif text-2xl font-light mb-2">{title}</h3>
      <p className="text-xs text-white/70 line-clamp-2">{sub}</p>
      <span className="inline-block mt-4 text-eyebrow text-[hsl(var(--accent))] link-underline text-xs">
        Discover →
      </span>
    </div>
  </Link>
);

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Luxora Hotel, Lodwar | Boutique Luxury Hotel Adjacent to Lodwar Airport</title>
        <meta
          name="description"
          content="Welcome to Luxora Hotel, Lodwar — Northern Kenya's premier boutique sanctuary featuring 36 air-conditioned rooms, fine dining, conference facilities, and curated desert excursions."
        />
        <link rel="canonical" href="https://luxorahotels.co.ke" />
        <meta property="og:title" content="Luxora Hotel, Lodwar | Boutique Luxury Hotel" />
        <meta property="og:description" content="Sanctuary of comfort adjacent to Lodwar Airport. 36 rooms across two floors, restaurant, lounge bar, and conference hall." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://luxorahotels.co.ke" />
      </Helmet>

      <ScrollReveal />
      <div className="min-h-screen bg-[hsl(var(--background))]">
        <Header />

        {/* ── HERO WITH SUBTLE IN-HERO PRE-OPENING BADGE ─────────────────────── */}
        <PageHero
          badge="Opening Soon — Lodwar's Finest Boutique Hotel"
          eyebrow="Lodwar, Turkana County, Kenya"
          headline={"Where the\nDesert Meets\nElegance"}
          sub="A boutique hotel experience of genuine warmth, thoughtful comfort, and the timeless light of Northern Kenya — just moments from Lodwar Airport."
          ctaLabel="Reserve Your Stay"
          ctaHref="/reservations"
          image={heroImg}
          imageAlt="Luxora Hotel, Lodwar — exterior and grounds"
          showStrip
        />

        {/* ── INTRO & STORY ─────────────────────────────────────────────────── */}
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

              {/* Stats Grid */}
              <div className="reveal-stagger grid grid-cols-2 gap-px bg-[hsl(var(--border))]">
                {[
                  { num: "36", label: "Sanctuary Rooms" },
                  { num: "2",  label: "Floors" },
                  { num: "2",  label: "Min to Runway" },
                  { num: "24", label: "Hour Concierge" },
                ].map((s) => (
                  <div key={s.num} className="bg-[hsl(var(--background))] py-12 px-8 flex items-center justify-center">
                    <Stat {...s} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CONSOLIDATED ACCOMMODATION TEASER SECTION ─────────────────────── */}
        <section className="section-pad bg-[hsl(var(--card))] border-t border-b border-[hsl(var(--border))]">
          <div className="container mx-auto px-6 max-w-6xl">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
              <div>
                <p className="text-eyebrow text-[hsl(var(--accent))] mb-3" style={{ letterSpacing: "0.25em" }}>
                  Private Sanctuaries
                </p>
                <h2 className="text-headline">Accommodation & Suites</h2>
                <span className="gold-rule" />
                <p className="text-lead text-[hsl(var(--muted-foreground))] max-w-xl">
                  36 thoughtfully appointed rooms across two floors — each featuring individual climate control, ensuite rain showers, and tranquil desert aesthetics.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link to="/rooms" className="btn-outline">
                  <span>View All 36 Rooms →</span>
                </Link>
              </div>
            </div>

            {/* 3 Compact Room Cards Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  slug: "standard-double",
                  title: "Standard Double Room",
                  count: "14 Rooms Available",
                  bed: "Queen-size Bed",
                  guests: "Up to 2 Guests",
                  image: standardDouble1,
                  desc: "Modern comfort and quiet air conditioning with an ensuite bathroom, Smart TV, and executive desk.",
                },
                {
                  slug: "superior-double",
                  title: "Superior Double Room",
                  count: "14 Rooms Available",
                  bed: "King-size Bed",
                  guests: "Up to 2 Guests",
                  image: superiorDouble1,
                  desc: "Generously sized quarters with a sumptuous king bed, luxury rain shower, and peaceful courtyard views.",
                },
                {
                  slug: "twin",
                  title: "Standard Twin Room",
                  count: "8 Rooms Available",
                  bed: "Two Twin Single Beds",
                  guests: "Up to 2 Guests",
                  image: twinRoom1,
                  desc: "Configured specifically for colleagues and expedition partners seeking space, comfort, and quiet.",
                },
              ].map((room) => (
                <div
                  key={room.slug}
                  className="bg-[hsl(var(--background))] border border-[hsl(var(--border))] group flex flex-col justify-between overflow-hidden hover:border-[hsl(var(--accent))/0.5] transition-all duration-500 reveal"
                >
                  <div>
                    <div className="relative aspect-[16/11] overflow-hidden">
                      <img
                        src={room.image}
                        alt={room.title}
                        className="img-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(.76,0,.24,1)]"
                      />
                      <div className="absolute top-3 left-3 bg-[hsl(var(--background))] px-3 py-1 border border-[hsl(var(--border))]">
                        <span className="text-eyebrow text-[hsl(var(--accent))]" style={{ fontSize: "0.55rem" }}>
                          {room.count}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-serif text-xl font-light text-[hsl(var(--foreground))] mb-2 group-hover:text-[hsl(var(--accent))] transition-colors">
                        <Link to={`/rooms/${room.slug}`}>{room.title}</Link>
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-[hsl(var(--muted-foreground))] mb-4">
                        <span className="flex items-center gap-1.5">
                          <Bed className="w-3.5 h-3.5 text-[hsl(var(--accent))]" />
                          {room.bed}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-[hsl(var(--accent))]" />
                          {room.guests}
                        </span>
                      </div>
                      <p className="text-xs font-light text-[hsl(var(--muted-foreground))] leading-relaxed">
                        {room.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[hsl(var(--border))]">
                    <Link
                      to={`/rooms/${room.slug}`}
                      className="text-eyebrow text-[hsl(var(--foreground))] hover:text-[hsl(var(--accent))] transition-colors"
                      style={{ fontSize: "0.6rem", letterSpacing: "0.18em" }}
                    >
                      Room Details →
                    </Link>
                    <Link
                      to={`/reservations?room=${room.slug}`}
                      className="btn-gold text-[0.6rem] py-2 px-4"
                    >
                      <span>Reserve</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 text-center">
              <Link to="/reservations" className="btn-primary">
                <span>Reserve Your Stay Directly</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── CRISP HIGH-CONTRAST HOTEL AMENITIES RIBBON ───────────────────── */}
        <section className="py-14 bg-[hsl(var(--background))] border-b border-[hsl(var(--border))]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 text-center">
              {[
                { icon: UtensilsCrossed, label: "Restaurant & Bar" },
                { icon: Wifi,            label: "High-Speed WiFi" },
                { icon: Plane,           label: "Airport Transfer" },
                { icon: BellRing,        label: "24/7 Concierge" },
                { icon: Car,             label: "Free Secure Parking" },
                { icon: Building2,       label: "Conference Hall" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-3 p-5 bg-[hsl(var(--card))] border border-[hsl(var(--border))] hover:border-[hsl(var(--accent))/0.4] transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--accent))/0.12] text-[hsl(var(--accent))] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <p
                    className="text-eyebrow text-[hsl(var(--foreground))] font-medium"
                    style={{ fontSize: "0.575rem", letterSpacing: "0.16em" }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                to="/amenities"
                className="text-eyebrow text-[hsl(var(--accent))] hover:underline tracking-widest inline-flex items-center gap-2"
                style={{ fontSize: "0.6rem" }}
              >
                <span>Explore All Hotel Facilities & Services →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── DINING TEASER ─────────────────────────────────────────────────── */}
        <section className="section-pad bg-[hsl(var(--background))]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative overflow-hidden reveal" style={{ minHeight: "460px" }}>
                <img
                  src={restaurantImg}
                  alt="Luxora Restaurant"
                  className="img-cover hover:scale-105 transition-transform duration-[1200ms] ease-[cubic-bezier(.76,0,.24,1)]"
                />
                <div className="absolute bottom-6 right-6 bg-[hsl(var(--background))] p-4 border border-[hsl(var(--border))]">
                  <p className="text-eyebrow text-[hsl(var(--accent))]" style={{ letterSpacing: "0.2em", fontSize: "0.6rem" }}>
                    Open Daily • 6:30 AM – 10:00 PM
                  </p>
                </div>
              </div>
              <div className="reveal">
                <p className="text-eyebrow text-[hsl(var(--accent))] mb-5" style={{ letterSpacing: "0.25em" }}>
                  Dining & Lounge
                </p>
                <h2 className="text-headline mb-6">Restaurant & Lounge Bar</h2>
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
        <section className="section-pad bg-[hsl(var(--card))] border-t border-b border-[hsl(var(--border))]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <p className="text-eyebrow text-[hsl(var(--accent))] mb-4" style={{ letterSpacing: "0.25em" }}>
                Curated Excursions
              </p>
              <h2 className="text-headline mb-4">Discover Turkana</h2>
              <span className="gold-rule-center" />
              <p className="text-lead text-[hsl(var(--muted-foreground))] mx-auto max-w-2xl">
                From ancient standing stones to the turquoise shores of Lake Turkana, let us guide your northern adventure.
              </p>
            </div>

            <div className="reveal-stagger grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <TeaserCard
                title="Eliye Springs"
                sub="Lake Turkana's peaceful shores, natural palm springs and vast open horizon."
                image={eliyeSprings}
                href="/experiences"
              />
              <TeaserCard
                title="Cultural Village"
                sub="Immerse in the rich traditions, songs, and heritage of the Turkana people."
                image={turkanaVillage}
                href="/experiences"
              />
            </div>

            <div className="text-center mt-12 reveal">
              <Link to="/experiences" className="btn-outline">
                <span>View All Turkana Experiences</span>
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
              <div className="relative overflow-hidden reveal" style={{ minHeight: "460px" }}>
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
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/reservations" className="btn-gold">
                <span>Reserve Now</span>
              </Link>
              <Link
                to="/contact"
                className="btn-outline"
                style={{ borderColor: "hsl(var(--background)/0.3)", color: "hsl(var(--background))" }}
              >
                <span>Make an Enquiry</span>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
