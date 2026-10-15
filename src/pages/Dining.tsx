import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BannerHero } from "@/components/PageHero";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import restaurantImg from "@/assets/new-images/restaurant.png";
import heroImg from "@/assets/hero-hotel.jpg";
import { Utensils, Wine, Clock, Coffee, ShieldCheck, Sparkles, MapPin } from "lucide-react";

const Dining = () => {
  return (
    <>
      <Helmet>
        <title>Dining, Restaurant & Lounge Bar | Luxora Hotel, Lodwar</title>
        <meta
          name="description"
          content="Savor exquisite Kenyan flavors and international cuisine at the Luxora Hotel Restaurant & Lounge Bar in Lodwar. Fresh local ingredients, executive breakfast, and evening dining."
        />
        <link rel="canonical" href="https://luxorahotels.co.ke/dining" />
        <meta property="og:title" content="Dining & Lounge Bar | Luxora Hotel, Lodwar" />
        <meta property="og:description" content="Authentic culinary experiences, executive dining, and panoramic lounge bar in Lodwar." />
        <meta property="og:type" content="website" />
      </Helmet>

      <ScrollReveal />
      <div className="min-h-screen bg-[hsl(var(--background))]">
        <Header />

        <BannerHero
          eyebrow="Culinary Excellence"
          headline="Restaurant & Lounge Bar"
          image={restaurantImg}
          imageAlt="Luxora Hotel Restaurant & Lounge Bar Lodwar"
        />

        {/* Philosophy Intro */}
        <section className="section-pad bg-[hsl(var(--background))]">
          <div className="container mx-auto px-6 max-w-4xl text-center reveal">
            <p className="text-eyebrow text-[hsl(var(--accent))] mb-4" style={{ letterSpacing: "0.25em" }}>
              The Luxora Table
            </p>
            <h2 className="text-headline mb-6">A Celebration of Flavors in the North</h2>
            <span className="gold-rule-center" />
            <p className="text-lead text-[hsl(var(--muted-foreground))] mx-auto mb-6">
              At Luxora Hotel Lodwar, dining is an artful pause in your journey. Our culinary team crafts dishes celebrating fresh Kenyan produce, regional culinary traditions, and continental favorites tailored for discerning international travelers.
            </p>
            <p className="text-sm font-light text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto leading-relaxed">
              Whether you are enjoying an energizing breakfast before a morning departure from Lodwar Airport, meeting colleagues over a working lunch, or unwinding with a chilled beverage in the lounge bar, every moment is served with warmth and elegance.
            </p>
          </div>
        </section>

        {/* Feature 1: The Signature Restaurant */}
        <section className="section-pad bg-[hsl(var(--card))] border-t border-b border-[hsl(var(--border))]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative aspect-[4/3] overflow-hidden border border-[hsl(var(--border))] reveal">
                <img
                  src={restaurantImg}
                  alt="Luxora Restaurant Dining Room"
                  className="img-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 bg-[hsl(var(--background))] px-4 py-2 border border-[hsl(var(--border))]">
                  <p className="text-eyebrow text-[hsl(var(--accent))]" style={{ fontSize: "0.6rem" }}>
                    Open Daily • 6:30 AM – 10:00 PM
                  </p>
                </div>
              </div>

              <div className="reveal">
                <p className="text-eyebrow text-[hsl(var(--accent))] mb-3" style={{ letterSpacing: "0.22em" }}>
                  All-Day Dining
                </p>
                <h3 className="text-headline mb-4">The Main Dining Room</h3>
                <span className="gold-rule" />
                <p className="text-lead text-[hsl(var(--muted-foreground))] mb-6">
                  Offering a serene, air-conditioned haven where guests can savor thoughtfully prepared breakfast, lunch, and dinner menus.
                </p>
                <div className="space-y-4 text-xs font-light text-[hsl(var(--muted-foreground))] mb-8">
                  <div className="flex items-start gap-3">
                    <Coffee className="w-4 h-4 text-[hsl(var(--accent))] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[hsl(var(--foreground))]">Artisanal Breakfast (6:30 AM – 10:30 AM):</strong> Fresh fruits, eggs prepared to order, fresh juices, and fine Kenyan teas and coffee.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Utensils className="w-4 h-4 text-[hsl(var(--accent))] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[hsl(var(--foreground))]">Lunch & Dinner (12:00 PM – 10:00 PM):</strong> Prime grilled selections, fresh lake fish, fragrant curries, crisp garden salads, and signature pasta dishes.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-[hsl(var(--accent))] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[hsl(var(--foreground))]">Dietary Accommodations:</strong> Vegetarian, halal, gluten-free, and bespoke nutritional requirements warmly accommodated upon request.
                    </div>
                  </div>
                </div>
                <Link to="/contact" className="btn-outline">
                  <span>Reserve a Table</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 2: Lounge Bar & Refreshments */}
        <section className="section-pad bg-[hsl(var(--background))]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="lg:order-2 relative aspect-[4/3] overflow-hidden border border-[hsl(var(--border))] reveal">
                <img
                  src={heroImg}
                  alt="Luxora Hotel Lounge and Terrace"
                  className="img-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 right-4 bg-[hsl(var(--background))] px-4 py-2 border border-[hsl(var(--border))]">
                  <p className="text-eyebrow text-[hsl(var(--accent))]" style={{ fontSize: "0.6rem" }}>
                    Lounge Service • Until Late
                  </p>
                </div>
              </div>

              <div className="lg:order-1 reveal">
                <p className="text-eyebrow text-[hsl(var(--accent))] mb-3" style={{ letterSpacing: "0.22em" }}>
                  Relaxation & Conversation
                </p>
                <h3 className="text-headline mb-4">The Lounge Bar</h3>
                <span className="gold-rule" />
                <p className="text-lead text-[hsl(var(--muted-foreground))] mb-6">
                  Unwind after a day in the field or an intense symposium in our stylish lounge bar. Offering panoramic vantage points over Lodwar and an impeccably stocked bar.
                </p>
                <div className="space-y-4 text-xs font-light text-[hsl(var(--muted-foreground))] mb-8">
                  <div className="flex items-start gap-3">
                    <Wine className="w-4 h-4 text-[hsl(var(--accent))] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[hsl(var(--foreground))]">Curated Beverages:</strong> Fine international wines, single malt whiskies, craft beers, cocktails, and refreshing chilled mocktails.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[hsl(var(--accent))] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[hsl(var(--foreground))]">Late Night Comfort:</strong> Light bites, savory platters, and quiet corners for conversation or evening reading.
                    </div>
                  </div>
                </div>
                <Link to="/contact" className="btn-primary">
                  <span>Inquire for Private Events</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Private Dining & Catering Callout */}
        <section className="section-pad bg-[hsl(var(--foreground))] text-[hsl(var(--background))] text-center">
          <div className="container mx-auto px-6 max-w-3xl reveal">
            <p className="text-eyebrow text-[hsl(var(--accent))] mb-4" style={{ letterSpacing: "0.25em" }}>
              Private Banqueting
            </p>
            <h2 className="text-headline mb-6 text-white">Corporate Catering & Private Gatherings</h2>
            <span className="gold-rule-center" />
            <p className="text-lead text-[hsl(var(--background))/0.65] mb-10 mx-auto">
              Luxora hosts private banquets, conference coffee breakouts, and VIP dinners in our private dining room and ballroom with dedicated staff.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link to="/contact" className="btn-gold">
                <span>Contact Dining Concierge</span>
              </Link>
              <Link to="/mice" className="btn-outline-white">
                <span>View Event Facilities</span>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Dining;
