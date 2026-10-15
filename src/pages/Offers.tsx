import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BannerHero } from "@/components/PageHero";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import heroImg from "@/assets/hero-hotel.jpg";
import miceImg from "@/assets/mice-conference.jpg";
import superiorImg from "@/assets/new-images/sup.png";
import desertImg from "@/assets/experiences/Central Turkana Desert Excursions.jpg";
import { Check, ShieldCheck, Calendar, ArrowRight, Phone } from "lucide-react";

const PACKAGES = [
  {
    id: "corporate-conference",
    eyebrow: "Business & NGO Focus",
    title: "Corporate Symposium & Retreat Package",
    description:
      "A comprehensive solution for development organizations, government agencies, and corporate teams holding conferences in Lodwar.",
    image: miceImg,
    rateNotice: "Bespoke package pricing upon direct enquiry",
    includes: [
      "Accommodations in Standard Double or Superior Double rooms",
      "Full-day use of our climate-controlled conference hall",
      "High-definition multimedia projector and audio PA system",
      "Morning and afternoon tea, coffee, and gourmet snacks",
      "Working buffet lunch in the restaurant or private dining area",
      "Complimentary high-speed WiFi for all delegates",
      "Dedicated corporate event coordinator on-site",
    ],
  },
  {
    id: "long-stay-residency",
    eyebrow: "Extended Stays",
    title: "Extended NGO & Mission Residency",
    description:
      "Tailored for humanitarian missions, visiting researchers, and corporate consultants requiring a long-term home base in Turkana.",
    image: superiorImg,
    rateNotice: "Discounted monthly and weekly rates upon direct enquiry",
    includes: [
      "Superior Double room with executive desk work station",
      "Priority high-speed fiber internet connection",
      "Daily room housekeeping and complimentary weekly laundry service",
      "Complimentary airport transfers from and to Lodwar Airport",
      "Flexible check-in and check-out privileges",
      "Direct charging facility for restaurant and beverage tabs",
      "Quiet residential atmosphere and 24/7 guarded security",
    ],
  },
  {
    id: "weekend-expedition",
    eyebrow: "Leisure & Exploration",
    title: "The Great Turkana Weekend Escape",
    description:
      "A curated weekend itinerary designed for weekend fliers arriving into Lodwar for lake excursions, photography, and cultural heritage.",
    image: desertImg,
    rateNotice: "Weekend package rates upon direct enquiry",
    includes: [
      "2 nights luxury accommodation in a room of your choice",
      "Complimentary airport greeting and transfer",
      "Daily signature breakfast in our restaurant",
      "Concierge assistance arranging private 4x4 transport to Eliye Springs",
      "Packed luxury picnic baskets available for day excursions",
      "Late Sunday check-out (subject to flight timings)",
    ],
  },
];

const Offers = () => {
  return (
    <>
      <Helmet>
        <title>Curated Offers & Packages | Luxora Hotel, Lodwar</title>
        <meta
          name="description"
          content="Explore bespoke packages and corporate rates at Luxora Hotel Lodwar: corporate symposiums, extended NGO stays, and weekend desert expeditions."
        />
        <link rel="canonical" href="https://luxorahotels.co.ke/offers" />
        <meta property="og:title" content="Offers & Packages | Luxora Hotel, Lodwar" />
        <meta property="og:description" content="Exclusive residential, corporate, and leisure packages at Luxora Hotel Lodwar." />
        <meta property="og:type" content="website" />
      </Helmet>

      <ScrollReveal />
      <div className="min-h-screen bg-[hsl(var(--background))]">
        <Header />

        <BannerHero
          eyebrow="Curated Experiences"
          headline="Exclusive Packages & Offers"
          image={heroImg}
          imageAlt="Luxora Hotel Lodwar Packages and Offers"
        />

        {/* Intro */}
        <section className="section-pad bg-[hsl(var(--background))] text-center">
          <div className="container mx-auto px-6 max-w-4xl reveal">
            <p className="text-eyebrow text-[hsl(var(--accent))] mb-4" style={{ letterSpacing: "0.25em" }}>
              Bespoke Hospitality
            </p>
            <h2 className="text-headline mb-6">Designed Around Your Mission in Turkana</h2>
            <span className="gold-rule-center" />
            <p className="text-lead text-[hsl(var(--muted-foreground))] mx-auto">
              Whether orchestrating a high-level development symposium, establishing an extended project residency, or embarking on a northern expedition, our packages deliver seamless luxury and attentive support.
            </p>
          </div>
        </section>

        {/* Packages List */}
        <section className="section-pad-sm bg-[hsl(var(--card))] border-t border-b border-[hsl(var(--border))]">
          <div className="container mx-auto px-6 max-w-6xl space-y-16">
            {PACKAGES.map((pkg, idx) => (
              <div
                key={pkg.id}
                className="grid lg:grid-cols-12 gap-10 items-center bg-[hsl(var(--background))] border border-[hsl(var(--border))] p-8 md:p-12 reveal"
              >
                <div className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] overflow-hidden border border-[hsl(var(--border))]">
                    <img src={pkg.image} alt={pkg.title} className="img-cover" />
                  </div>
                </div>

                <div className={`lg:col-span-7 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <p className="text-eyebrow text-[hsl(var(--accent))] mb-2" style={{ letterSpacing: "0.2em" }}>
                    {pkg.eyebrow}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mb-4">
                    {pkg.title}
                  </h3>
                  <span className="gold-rule" />
                  <p className="text-sm font-light text-[hsl(var(--muted-foreground))] mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--foreground))] mb-3">
                      Package Inclusions:
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2 text-xs font-light text-[hsl(var(--muted-foreground))]">
                      {pkg.includes.map((inc) => (
                        <li key={inc} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[hsl(var(--accent))] flex-shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-[hsl(var(--border))] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-xs text-[hsl(var(--accent))] font-medium tracking-wide">
                        {pkg.rateNotice}
                      </p>
                    </div>
                    <Link to="/contact" className="btn-primary text-xs whitespace-nowrap">
                      <span>Inquire About Package</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Custom Group Quote Callout */}
        <section className="section-pad bg-[hsl(var(--background))] text-center">
          <div className="container mx-auto px-6 max-w-3xl reveal">
            <p className="text-eyebrow text-[hsl(var(--accent))] mb-3" style={{ letterSpacing: "0.22em" }}>
              Tailored Arrangements
            </p>
            <h2 className="text-headline mb-4">Require a Custom Group Itinerary?</h2>
            <span className="gold-rule-center" />
            <p className="text-lead text-[hsl(var(--muted-foreground))] mb-8 mx-auto">
              Our reservations management team regularly configures custom multi-room buyouts, specialized security details, and customized meal plans for delegations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+254110463062" className="btn-gold inline-flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Call +254 110 463 062</span>
              </a>
              <Link to="/contact" className="btn-outline">
                <span>Send Written Brief</span>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Offers;
