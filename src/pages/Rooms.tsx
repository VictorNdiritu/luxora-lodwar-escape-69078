import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BannerHero } from "@/components/PageHero";
import { ScrollReveal } from "@/hooks/useScrollReveal";

// Room images
import standardDouble1 from "@/assets/new-images/sd.png";
import standardDouble2 from "@/assets/new-images/sdr.png";
import standardDouble3 from "@/assets/new-images/superior d.png";
import superiorDouble1 from "@/assets/new-images/sup.png";
import superiorDouble2 from "@/assets/new-images/sup Double.png";
import superiorDouble3 from "@/assets/new-images/Superior Double .png";
import twinRoom1       from "@/assets/new-images/suit.png";
import twinRoom2       from "@/assets/new-images/suite.png";
import twinRoom3       from "@/assets/new-images/suitee.png";
import heroImg         from "@/assets/hero-hotel.jpg";

interface RoomGalleryProps {
  images: string[];
  title:  string;
}

const RoomGallery = ({ images, title }: RoomGalleryProps) => {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div>
      {/* Main image */}
      <div
        className="relative overflow-hidden cursor-zoom-in"
        style={{ aspectRatio: "16/10" }}
        onClick={() => setLightbox(active)}
      >
        <img
          src={images[active]}
          alt={`${title} — view ${active + 1}`}
          className="img-cover transition-all duration-700 ease-[cubic-bezier(.76,0,.24,1)] hover:scale-[1.03]"
        />
        <div className="absolute bottom-3 right-3">
          <span
            className="bg-[hsl(var(--foreground))/0.7] text-[hsl(var(--background))] text-xs px-3 py-1"
            style={{ letterSpacing: "0.15em", fontFamily: "'Jost', sans-serif" }}
          >
            {active + 1} / {images.length}
          </span>
        </div>
      </div>
      {/* Thumbnails */}
      <div className="flex gap-2 mt-2">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex-1 overflow-hidden transition-opacity duration-300 ${i === active ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
            style={{ aspectRatio: "4/3" }}
            aria-label={`View ${title} image ${i + 1}`}
          >
            <img src={src} alt="" className="img-cover" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal
          aria-label={`${title} lightbox`}
        >
          <button
            className="absolute top-6 right-6 text-white opacity-60 hover:opacity-100 text-3xl leading-none"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ×
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white opacity-60 hover:opacity-100 text-4xl leading-none"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + images.length) % images.length); }}
            aria-label="Previous"
          >
            ‹
          </button>
          <img
            src={images[lightbox]}
            alt={`${title} — view ${lightbox + 1}`}
            className="max-w-full max-h-full object-contain"
            style={{ maxHeight: "90vh", maxWidth: "90vw" }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white opacity-60 hover:opacity-100 text-4xl leading-none"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length); }}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

interface RoomSectionProps {
  slug:     string;
  title:    string;
  count:    string;
  guests:   string;
  bed:      string;
  features: string[];
  images:   string[];
  flip?:    boolean;
}

const RoomSection = ({ slug, title, count, guests, bed, features, images, flip }: RoomSectionProps) => (
  <div className={`grid lg:grid-cols-2 gap-0 items-stretch reveal`}>
    <div className={flip ? "lg:order-2" : ""}>
      <RoomGallery images={images} title={title} />
    </div>
    <div
      className={`flex flex-col justify-center px-10 py-14 bg-[hsl(var(--card))] ${flip ? "lg:order-1" : ""}`}
    >
      <p className="text-eyebrow text-[hsl(var(--accent))] mb-4" style={{ letterSpacing: "0.22em" }}>{count}</p>
      <h2 className="text-headline mb-4">{title}</h2>
      <span className="gold-rule" />

      {/* Quick specs */}
      <div className="flex gap-8 mb-6 text-sm font-light text-[hsl(var(--muted-foreground))]">
        <div>
          <p className="text-eyebrow text-[hsl(var(--foreground))] mb-1" style={{ fontSize: "0.55rem", letterSpacing: "0.18em" }}>Guests</p>
          <p>{guests}</p>
        </div>
        <div>
          <p className="text-eyebrow text-[hsl(var(--foreground))] mb-1" style={{ fontSize: "0.55rem", letterSpacing: "0.18em" }}>Bed</p>
          <p>{bed}</p>
        </div>
        <div>
          <p className="text-eyebrow text-[hsl(var(--foreground))] mb-1" style={{ fontSize: "0.55rem", letterSpacing: "0.18em" }}>Check-in</p>
          <p>2:00 PM</p>
        </div>
        <div>
          <p className="text-eyebrow text-[hsl(var(--foreground))] mb-1" style={{ fontSize: "0.55rem", letterSpacing: "0.18em" }}>Check-out</p>
          <p>11:00 AM</p>
        </div>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-2 mb-10">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-3 text-sm font-light text-[hsl(var(--muted-foreground))]">
            <span className="w-4 h-px bg-[hsl(var(--accent))] flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-4 items-center">
        <Link to={`/reservations?room=${slug}`} className="btn-primary">
          <span>Reserve This Room</span>
        </Link>
        <Link to={`/rooms/${slug}`} className="btn-outline text-xs">
          <span>View Room Details</span>
        </Link>
      </div>
    </div>
  </div>
);

const RoomsPage = () => (
  <>
    <Helmet>
      <title>Rooms & Accommodation | Luxora Hotel, Lodwar</title>
      <meta name="description" content="Explore our Standard Double, Superior Double, and Standard Twin rooms. Each features air conditioning, en-suite bathroom, free WiFi, Smart TV, and premium bedding." />
      <link rel="canonical" href="https://luxorahotels.co.ke/rooms" />
      <meta property="og:title" content="Rooms & Accommodation | Luxora Hotel, Lodwar" />
      <meta property="og:description" content="36 elegant rooms in Lodwar — Standard Double, Superior Double & Twin." />
      <meta property="og:type" content="website" />
    </Helmet>

    <ScrollReveal />
    <div className="min-h-screen">
      <Header />

      <BannerHero
        eyebrow="Accommodation"
        headline="Rooms & Suites"
        image={heroImg}
        imageAlt="Luxora Hotel rooms"
      />

      {/* Intro */}
      <section className="section-pad-sm bg-[hsl(var(--background))] text-center">
        <div className="container mx-auto px-6 max-w-3xl reveal">
          <p className="text-eyebrow text-[hsl(var(--accent))] mb-4" style={{ letterSpacing: "0.25em" }}>
            36 Rooms Across Two Floors
          </p>
          <h2 className="text-headline mb-6">Your Private Sanctuary</h2>
          <span className="gold-rule-center" />
          <p className="text-lead text-[hsl(var(--muted-foreground))] mx-auto">
            Choose from our thoughtfully designed rooms, each offering modern amenities, premium comfort, and the warm hospitality that defines the Luxora experience.
          </p>
        </div>
      </section>

      {/* Room listings */}
      <section className="bg-[hsl(var(--muted))]">
        <div className="flex flex-col gap-px">
          <RoomSection
            slug="standard-double"
            title="Standard Double Room"
            count="14 Rooms Available"
            guests="2 Guests"
            bed="Queen-size"
            features={[
              "Air Conditioning",
              "En-suite Bathroom",
              "Smart TV",
              "Mini-fridge",
              "Work Desk",
              "Premium Bedding & Toiletries",
              "High-Speed WiFi",
              "Daily Housekeeping",
            ]}
            images={[standardDouble1, standardDouble2, standardDouble3]}
          />
          <RoomSection
            slug="superior-double"
            title="Superior Double Room"
            count="14 Rooms Available"
            guests="2 Guests"
            bed="King-size"
            features={[
              "Air Conditioning",
              "Luxury En-suite Bathroom",
              "Smart TV",
              "Mini-fridge",
              "Work Desk",
              "City View",
              "Premium Bedding & Toiletries",
              "High-Speed WiFi",
            ]}
            images={[superiorDouble1, superiorDouble2, superiorDouble3]}
            flip
          />
          <RoomSection
            slug="twin"
            title="Standard Twin Room"
            count="8 Rooms Available"
            guests="2 Guests"
            bed="Two Single Beds"
            features={[
              "Air Conditioning",
              "En-suite Bathroom",
              "Smart TV",
              "Work Desk",
              "Premium Bedding & Toiletries",
              "High-Speed WiFi",
              "Daily Housekeeping",
            ]}
            images={[twinRoom1, twinRoom2, twinRoom3]}
          />
        </div>
      </section>

      {/* Every Room Includes */}
      <section className="section-pad bg-[hsl(var(--background))]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16 reveal">
            <p className="text-eyebrow text-[hsl(var(--accent))] mb-4" style={{ letterSpacing: "0.25em" }}>
              Inclusions
            </p>
            <h2 className="text-headline mb-4">Every Room Includes</h2>
            <span className="gold-rule-center" />
          </div>
          <div className="reveal-stagger grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Daily Housekeeping",  desc: "Professional cleaning service to ensure your room is always pristine." },
              { title: "Safe & Secure",        desc: "In-room electronic safe, 24-hour security and CCTV surveillance." },
              { title: "24/7 Service",         desc: "Round-the-clock room service, front desk and concierge assistance." },
              { title: "Premium Amenities",    desc: "High-speed WiFi, Smart TV, mini-fridge, and luxury toiletries." },
            ].map(({ title, desc }) => (
              <div key={title} className="border-t border-[hsl(var(--border))] pt-6">
                <h3 className="font-serif text-xl mb-3 font-light">{title}</h3>
                <p className="text-sm font-light text-[hsl(var(--muted-foreground))] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="section-pad bg-[hsl(var(--muted))]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 reveal">
            <p className="text-eyebrow text-[hsl(var(--accent))] mb-4" style={{ letterSpacing: "0.25em" }}>
              Booking Information
            </p>
            <h2 className="text-headline mb-4">Policies & Procedures</h2>
            <span className="gold-rule-center" />
          </div>
          <div className="reveal-stagger grid md:grid-cols-2 gap-px bg-[hsl(var(--border))]">
            <div className="bg-[hsl(var(--background))] p-10">
              <h3 className="font-serif text-xl mb-6 font-light">Check-In / Check-Out</h3>
              <ul className="space-y-3 text-sm font-light text-[hsl(var(--muted-foreground))]">
                {[
                  "Check-in: 2:00 PM",
                  "Check-out: 11:00 AM",
                  "Early check-in subject to availability",
                  "Late check-out available upon request",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-4 h-px bg-[hsl(var(--accent))] flex-shrink-0 mt-2.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[hsl(var(--background))] p-10">
              <h3 className="font-serif text-xl mb-6 font-light">Cancellation Policy</h3>
              <ul className="space-y-3 text-sm font-light text-[hsl(var(--muted-foreground))]">
                {[
                  "Free cancellation up to 48 hours before arrival",
                  "One night charge for late cancellations",
                  "No-shows will be charged the full stay amount",
                  "Payment required at time of booking",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-4 h-px bg-[hsl(var(--accent))] flex-shrink-0 mt-2.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad-sm bg-[hsl(var(--foreground))] text-center">
        <div className="container mx-auto px-6 reveal">
          <h2 className="font-serif text-[hsl(var(--background))] mb-6" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 300 }}>
            Ready to Book Your Stay?
          </h2>
          <p className="text-lead text-[hsl(var(--background))/0.6] mb-10 mx-auto text-center">
            Reserve directly with us for a personalised welcome. Our team will confirm your reservation within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/reservations" className="btn-gold"><span>Reserve Now</span></Link>
            <Link to="/contact" className="btn-outline" style={{ borderColor: "hsl(var(--background)/0.3)", color: "hsl(var(--background))" }}>
              <span>Make an Enquiry</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </>
);

export default RoomsPage;
