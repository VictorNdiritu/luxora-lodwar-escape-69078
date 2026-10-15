import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BannerHero } from "@/components/PageHero";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import amenitiesImg from "@/assets/amenities.jpg";
import heroImg from "@/assets/hero-hotel.jpg";
import miceImg from "@/assets/mice-conference.jpg";
import {
  Wifi,
  Plane,
  ShieldCheck,
  Coffee,
  Car,
  Tv,
  Accessibility,
  Clock,
  Sparkles,
  Users,
  CheckCircle2,
} from "lucide-react";

const AMENITY_CATEGORIES = [
  {
    category: "Guest Comfort & Room Essentials",
    items: [
      {
        icon: "❄️",
        title: "Individual Climate Control",
        description: "Silent split-system air conditioning in all 36 rooms, maintaining an optimal sanctuary from Lodwar's desert climate.",
      },
      {
        icon: "📶",
        title: "High-Speed Fiber WiFi",
        description: "Reliable, enterprise-grade high-speed wireless coverage throughout guest rooms, suites, lobby, restaurant, and gardens.",
      },
      {
        icon: "📺",
        title: "Smart HD Televisions",
        description: "Modern flat-screen televisions with satellite news, international sports, entertainment channels, and streaming capability.",
      },
      {
        icon: "🚿",
        title: "Private En-Suite Bathrooms",
        description: "Immaculate en-suite baths featuring walk-in hot water showers, premium towels, and luxury bath amenities.",
      },
    ],
  },
  {
    category: "Hotel Facilities & Convenience",
    items: [
      {
        icon: "✈️",
        title: "Airport Proximity & Transfers",
        description: "Situated directly adjacent to Lodwar Airport (LOK), providing effortless arrivals, flight connections, and concierge greeting.",
      },
      {
        icon: "🍽️",
        title: "Restaurant & Lounge Bar",
        description: "All-day dining serving fresh Kenyan and international cuisine, accompanied by an elevated panoramic evening lounge bar.",
      },
      {
        icon: "🏛️",
        title: "Conference & Meeting Hall",
        description: "State-of-the-art MICE facilities, multimedia projectors, sound systems, and dedicated corporate event staff.",
      },
      {
        icon: "🚗",
        title: "Secure On-Site Parking",
        description: "Spacious, 24-hour guarded private parking compound with dedicated vehicle bays for hotel guests and conference delegates.",
      },
      {
        icon: "♿",
        title: "PWD-Friendly Accessibility",
        description: "Step-free public access routes, accessible ground floor configurations, and helpful staff for guests with reduced mobility.",
      },
      {
        icon: "🛎️",
        title: "24/7 Front Desk & Concierge",
        description: "Round-the-clock reception, luggage storage, regional safari connections, and local concierge assistance.",
      },
    ],
  },
];

const Amenities = () => {
  return (
    <>
      <Helmet>
        <title>Facilities & Amenities | Luxora Hotel, Lodwar</title>
        <meta
          name="description"
          content="Explore the world-class facilities at Luxora Hotel Lodwar: silent air conditioning, high-speed WiFi, conference hall, 24/7 security, restaurant & lounge bar, and airport proximity."
        />
        <link rel="canonical" href="https://luxorahotels.co.ke/amenities" />
        <meta property="og:title" content="Facilities & Amenities | Luxora Hotel, Lodwar" />
        <meta property="og:description" content="A comprehensive overview of guest facilities and luxury amenities at Luxora Hotel Lodwar." />
        <meta property="og:type" content="website" />
      </Helmet>

      <ScrollReveal />
      <div className="min-h-screen bg-[hsl(var(--background))]">
        <Header />

        <BannerHero
          eyebrow="Boutique Excellence"
          headline="Facilities & Amenities"
          image={amenitiesImg}
          imageAlt="Luxora Hotel Lodwar Facilities and Comfort"
        />

        {/* Intro */}
        <section className="section-pad bg-[hsl(var(--background))] text-center">
          <div className="container mx-auto px-6 max-w-4xl reveal">
            <p className="text-eyebrow text-[hsl(var(--accent))] mb-4" style={{ letterSpacing: "0.25em" }}>
              Curated for Modern Travelers
            </p>
            <h2 className="text-headline mb-6">Uncompromising Hospitality in Northern Kenya</h2>
            <span className="gold-rule-center" />
            <p className="text-lead text-[hsl(var(--muted-foreground))] mx-auto">
              Every detail at Luxora has been conceived to provide international comfort, effortless productivity, and peace of mind in the heart of Lodwar.
            </p>
          </div>
        </section>

        {/* Detailed Amenities by Category */}
        <section className="section-pad-sm bg-[hsl(var(--card))] border-t border-b border-[hsl(var(--border))]">
          <div className="container mx-auto px-6 max-w-6xl">
            {AMENITY_CATEGORIES.map((cat, catIdx) => (
              <div key={cat.category} className={`${catIdx > 0 ? "mt-16 pt-16 border-t border-[hsl(var(--border))]" : ""}`}>
                <div className="text-center mb-12 reveal">
                  <p className="text-eyebrow text-[hsl(var(--accent))] mb-2" style={{ letterSpacing: "0.2em" }}>
                    Service Standard {catIdx + 1}
                  </p>
                  <h3 className="text-headline text-2xl md:text-3xl">{cat.category}</h3>
                  <span className="gold-rule-center" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cat.items.map((item) => (
                    <div
                      key={item.title}
                      className="bg-[hsl(var(--background))] border border-[hsl(var(--border))] p-8 flex flex-col justify-between reveal"
                    >
                      <div>
                        <div className="text-3xl mb-4" aria-hidden="true">
                          {item.icon}
                        </div>
                        <h4 className="font-serif text-xl font-normal text-[hsl(var(--foreground))] mb-3">
                          {item.title}
                        </h4>
                        <p className="text-xs font-light text-[hsl(var(--muted-foreground))] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-[hsl(var(--border))] flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[hsl(var(--accent))]" />
                        <span className="text-[0.65rem] uppercase tracking-wider text-[hsl(var(--accent))]">
                          Standard Inclusions
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Highlight Banner: Location & Airport Transfer */}
        <section className="section-pad bg-[hsl(var(--background))]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[16/10] overflow-hidden border border-[hsl(var(--border))] reveal">
                <img
                  src={heroImg}
                  alt="Luxora Hotel facade in Lodwar"
                  className="img-cover"
                />
              </div>

              <div className="reveal">
                <p className="text-eyebrow text-[hsl(var(--accent))] mb-3" style={{ letterSpacing: "0.22em" }}>
                  Seamless Arrival
                </p>
                <h3 className="text-headline mb-4">Direct Airport Convenience</h3>
                <span className="gold-rule" />
                <p className="text-lead text-[hsl(var(--muted-foreground))] mb-6">
                  Luxora is located immediately adjacent to Lodwar Airport. From the runway to your air-conditioned room takes mere minutes, eliminating long road transfers after your flight.
                </p>
                <div className="space-y-3 text-xs font-light text-[hsl(var(--muted-foreground))] mb-8">
                  <p>• Complimentary meet-and-greet transfer coordination</p>
                  <p>• Early bag drop for arriving flights</p>
                  <p>• Dedicated transfer vehicle on standby for VIP guests</p>
                </div>
                <Link to="/reservations" className="btn-primary">
                  <span>Plan Your Stay</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-pad bg-[hsl(var(--foreground))] text-[hsl(var(--background))] text-center">
          <div className="container mx-auto px-6 max-w-3xl reveal">
            <p className="text-eyebrow text-[hsl(var(--accent))] mb-4" style={{ letterSpacing: "0.25em" }}>
              Experience Luxora
            </p>
            <h2 className="text-headline mb-6 text-white">Experience Unmatched Hospitality</h2>
            <span className="gold-rule-center" />
            <p className="text-lead text-[hsl(var(--background))/0.65] mb-10 mx-auto">
              Ready to enjoy Lodwar's premier hospitality experience? Reserve your room directly with our concierge.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link to="/reservations" className="btn-gold">
                <span>Make a Reservation</span>
              </Link>
              <Link to="/contact" className="btn-outline-white">
                <span>Contact Front Desk</span>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Amenities;
