import { Helmet } from "react-helmet";
import { Link, useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BannerHero } from "@/components/PageHero";
import { ScrollReveal } from "@/hooks/useScrollReveal";

import standardDouble1 from "@/assets/new-images/sd.png";
import standardDouble2 from "@/assets/new-images/sdr.png";
import standardDouble3 from "@/assets/new-images/superior d.png";
import superiorDouble1 from "@/assets/new-images/sup.png";
import superiorDouble2 from "@/assets/new-images/sup Double.png";
import superiorDouble3 from "@/assets/new-images/Superior Double .png";
import twinRoom1 from "@/assets/new-images/suit.png";
import twinRoom2 from "@/assets/new-images/suite.png";
import twinRoom3 from "@/assets/new-images/suitee.png";
import heroImg from "@/assets/hero-hotel.jpg";

import { Bed, Users, Wifi, Tv, Wind, Check, ArrowLeft, ArrowRight, ShieldCheck, Clock } from "lucide-react";

export const ROOMS_DATA: Record<
  string,
  {
    slug: string;
    title: string;
    tagline: string;
    count: string;
    guests: string;
    bed: string;
    description: string;
    images: string[];
    features: string[];
    amenities: { icon: string; label: string }[];
  }
> = {
  "standard-double": {
    slug: "standard-double",
    title: "Standard Double Room",
    tagline: "Intimate comfort and modern luxury designed for solo travelers and couples.",
    count: "14 Rooms Available",
    guests: "Up to 2 Guests",
    bed: "1 Queen-size Bed",
    description:
      "Our Standard Double Rooms combine quiet desert serenity with contemporary hospitality essentials. Each room is thoughtfully appointed with an ultra-comfortable queen bed, individual climate control, an ensuite bath with hot water showers, and high-speed WiFi for work or leisure.",
    images: [standardDouble1, standardDouble2, standardDouble3],
    features: [
      "Plush Queen-size mattress with high thread-count linens",
      "Individual climate-controlled air conditioning",
      "En-suite private bathroom with walk-in shower & premium toiletries",
      "High-speed complimentary WiFi",
      "Flat-screen Smart TV with satellite entertainment",
      "Ergonomic work desk and charging outlets",
      "Wardrobe, hanging space, and luggage rack",
      "Daily housekeeping & evening turndown service",
    ],
    amenities: [
      { icon: "❄️", label: "Air Conditioning" },
      { icon: "📶", label: "High-Speed WiFi" },
      { icon: "📺", label: "Smart TV" },
      { icon: "🚿", label: "Ensuite Shower" },
      { icon: "☕", label: "Bottled Water" },
      { icon: "🛎️", label: "Room Service" },
    ],
  },
  "superior-double": {
    slug: "superior-double",
    title: "Superior Double Room",
    tagline: "Generously proportioned accommodation featuring a king bed and refined finishes.",
    count: "14 Rooms Available",
    guests: "Up to 2 Guests",
    bed: "1 King-size Bed",
    description:
      "For travelers requiring enhanced space and supreme comfort, the Superior Double Room offers expansive floorplans, a sumptuous king-size bed, executive work amenities, and peaceful interior aesthetics. The ideal choice for extended corporate stays, NGO directors, or couples seeking an elevated Lodwar retreat.",
    images: [superiorDouble1, superiorDouble2, superiorDouble3],
    features: [
      "Expansive King-size bed with orthopedic mattress & luxury bedding",
      "High-efficiency quiet split-system air conditioning",
      "Spacious en-suite bathroom with large walk-in shower",
      "Complimentary high-speed fiber WiFi",
      "Large Smart TV with premium channels",
      "Dedicated executive writing desk with task lighting",
      "Generous storage, safe, and luggage benches",
      "Daily housekeeping, fresh towels, and 24/7 front desk service",
    ],
    amenities: [
      { icon: "❄️", label: "Silent AC" },
      { icon: "📶", label: "Ultra WiFi" },
      { icon: "📺", label: "HD Smart TV" },
      { icon: "🚿", label: "Walk-in Shower" },
      { icon: "💼", label: "Work Station" },
      { icon: "🛎️", label: "24/7 Concierge" },
    ],
  },
  twin: {
    slug: "twin",
    title: "Standard Twin Room",
    tagline: "Thoughtfully configured dual single beds perfect for colleagues and travel companions.",
    count: "8 Rooms Available",
    guests: "Up to 2 Guests",
    bed: "2 Twin Single Beds",
    description:
      "Designed specifically for colleagues, friends, or expedition partners traveling together through Turkana. Features two independent, comfortably proportioned single beds separated by a bedside console, individual reading lamps, climate control, and en-suite facilities.",
    images: [twinRoom1, twinRoom2, twinRoom3],
    features: [
      "Two comfortable single beds with tailored luxury linens",
      "Individual climate control to keep the room cool day and night",
      "Private en-suite bathroom with hot shower and vanity",
      "High-speed wireless internet access",
      "Wall-mounted Smart TV",
      "Dual bedside power stations for charging multiple devices",
      "Dedicated wardrobe storage for two guests",
      "Daily housekeeping and complimentary bottled mineral water",
    ],
    amenities: [
      { icon: "❄️", label: "Air Conditioning" },
      { icon: "📶", label: "High-Speed WiFi" },
      { icon: "📺", label: "Smart TV" },
      { icon: "🚿", label: "Private Bath" },
      { icon: "👥", label: "Dual Beds" },
      { icon: "🛎️", label: "Daily Service" },
    ],
  },
};

const RoomDetail = () => {
  const { slug } = useParams();
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const room = slug ? ROOMS_DATA[slug] : null;

  if (!room) {
    return <Navigate to="/rooms" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{room.title} | Luxora Hotel, Lodwar</title>
        <meta
          name="description"
          content={`${room.title} at Luxora Hotel Lodwar. ${room.count}, ${room.bed}, air conditioning, en-suite bathroom, high-speed WiFi.`}
        />
        <link rel="canonical" href={`https://luxorahotels.co.ke/rooms/${room.slug}`} />
        <meta property="og:title" content={`${room.title} | Luxora Hotel, Lodwar`} />
        <meta property="og:description" content={room.tagline} />
        <meta property="og:type" content="website" />
      </Helmet>

      <ScrollReveal />
      <div className="min-h-screen bg-[hsl(var(--background))]">
        <Header />

        <BannerHero
          eyebrow="Accommodation"
          headline={room.title}
          image={room.images[0] || heroImg}
          imageAlt={room.title}
        />

        {/* Breadcrumb strip */}
        <div className="bg-[hsl(var(--card))] border-b border-[hsl(var(--border))] py-4">
          <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 text-eyebrow text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
              style={{ fontSize: "0.625rem", letterSpacing: "0.2em" }}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Rooms</span>
            </Link>
            <span className="text-eyebrow text-[hsl(var(--accent))]" style={{ fontSize: "0.625rem", letterSpacing: "0.2em" }}>
              {room.count}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <section className="section-pad">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

              {/* Gallery column (7 cols) */}
              <div className="lg:col-span-7">
                <div
                  className="relative overflow-hidden cursor-zoom-in border border-[hsl(var(--border))] aspect-[16/10] reveal"
                  onClick={() => setLightbox(activeImg)}
                >
                  <img
                    src={room.images[activeImg]}
                    alt={`${room.title} - photo ${activeImg + 1}`}
                    className="img-cover transition-all duration-700 hover:scale-[1.03]"
                  />
                  <div className="absolute bottom-4 right-4 bg-[hsl(var(--foreground))/0.75] text-white px-3 py-1 text-xs font-light">
                    {activeImg + 1} / {room.images.length} • Click to Enlarge
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-3 gap-3 mt-3">
                  {room.images.map((src, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImg(idx)}
                      className={`relative aspect-[4/3] overflow-hidden border transition-all ${
                        idx === activeImg
                          ? "border-[hsl(var(--accent))] opacity-100 ring-2 ring-[hsl(var(--accent))/0.2]"
                          : "border-[hsl(var(--border))] opacity-60 hover:opacity-100"
                      }`}
                      aria-label={`Select view ${idx + 1}`}
                    >
                      <img src={src} alt="" className="img-cover" />
                    </button>
                  ))}
                </div>

                {/* Lightbox Modal */}
                {lightbox !== null && (
                  <div
                    className="lightbox-overlay"
                    onClick={() => setLightbox(null)}
                    role="dialog"
                    aria-modal
                    aria-label={`${room.title} gallery`}
                  >
                    <button
                      className="absolute top-6 right-6 text-white text-3xl leading-none opacity-70 hover:opacity-100"
                      onClick={() => setLightbox(null)}
                      aria-label="Close"
                    >
                      ×
                    </button>
                    <button
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl leading-none opacity-70 hover:opacity-100"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightbox((lightbox - 1 + room.images.length) % room.images.length);
                      }}
                      aria-label="Previous"
                    >
                      ‹
                    </button>
                    <img
                      src={room.images[lightbox]}
                      alt={`${room.title} - view ${lightbox + 1}`}
                      className="max-w-full max-h-full object-contain"
                      style={{ maxHeight: "90vh", maxWidth: "90vw" }}
                      onClick={(e) => e.stopPropagation()}
                    />
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl leading-none opacity-70 hover:opacity-100"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightbox((lightbox + 1) % room.images.length);
                      }}
                      aria-label="Next"
                    >
                      ›
                    </button>
                  </div>
                )}

                {/* Key Amenities Grid */}
                <div className="mt-12 pt-10 border-t border-[hsl(var(--border))] reveal">
                  <p className="text-eyebrow text-[hsl(var(--accent))] mb-4" style={{ letterSpacing: "0.22em" }}>
                    Room Highlights
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {room.amenities.map(({ icon, label }) => (
                      <div
                        key={label}
                        className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-4 flex items-center gap-3"
                      >
                        <span className="text-xl">{icon}</span>
                        <span className="text-xs font-light text-[hsl(var(--foreground))]">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="mt-10 reveal">
                  <h3 className="font-serif text-2xl font-light mb-4">Room Overview</h3>
                  <p className="text-sm font-light text-[hsl(var(--muted-foreground))] leading-relaxed mb-6">
                    {room.description}
                  </p>
                </div>

                {/* Full Features List */}
                <div className="mt-8 reveal">
                  <h3 className="font-serif text-xl font-light mb-4">Included Room Features</h3>
                  <ul className="grid sm:grid-cols-2 gap-3 text-xs font-light text-[hsl(var(--muted-foreground))]">
                    {room.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-[hsl(var(--accent))] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar Booking Card (5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-8 sticky top-28">
                <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-8 md:p-10 reveal">
                  <p className="text-eyebrow text-[hsl(var(--accent))] mb-2" style={{ letterSpacing: "0.22em" }}>
                    {room.count}
                  </p>
                  <h2 className="font-serif text-3xl font-light mb-3">{room.title}</h2>
                  <p className="text-xs text-[hsl(var(--muted-foreground))] mb-6 italic">{room.tagline}</p>
                  <span className="gold-rule" />

                  {/* Room specs */}
                  <div className="space-y-4 my-6 text-sm text-[hsl(var(--muted-foreground))] font-light">
                    <div className="flex items-center justify-between pb-3 border-b border-[hsl(var(--border))]">
                      <span className="flex items-center gap-2">
                        <Bed className="w-4 h-4 text-[hsl(var(--accent))]" />
                        Bed Type
                      </span>
                      <strong className="text-[hsl(var(--foreground))]">{room.bed}</strong>
                    </div>
                    <div className="flex items-center justify-between pb-3 border-b border-[hsl(var(--border))]">
                      <span className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[hsl(var(--accent))]" />
                        Capacity
                      </span>
                      <strong className="text-[hsl(var(--foreground))]">{room.guests}</strong>
                    </div>
                    <div className="flex items-center justify-between pb-3 border-b border-[hsl(var(--border))]">
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[hsl(var(--accent))]" />
                        Check-in / Out
                      </span>
                      <span className="text-[hsl(var(--foreground))]">2:00 PM / 11:00 AM</span>
                    </div>
                  </div>

                  {/* Direct Reservation CTA */}
                  <Link
                    to={`/reservations?room=${room.slug}`}
                    className="btn-gold w-full text-center flex items-center justify-center py-4 mb-4"
                  >
                    <span>Reserve This Room</span>
                  </Link>

                  <Link
                    to="/contact"
                    className="btn-outline w-full text-center flex items-center justify-center py-3 text-xs"
                  >
                    <span>Inquire via Concierge</span>
                  </Link>

                  <div className="mt-8 pt-6 border-t border-[hsl(var(--border))] text-center">
                    <p className="text-xs text-[hsl(var(--muted-foreground))] mb-2">Prefer to speak directly?</p>
                    <a
                      href="tel:+254110463062"
                      className="text-xs font-semibold text-[hsl(var(--foreground))] hover:text-[hsl(var(--accent))] transition-colors"
                    >
                      Call +254 110 463 062
                    </a>
                  </div>
                </div>

                {/* Other Room Types */}
                <div className="bg-[hsl(var(--background))] border border-[hsl(var(--border))] p-6 reveal">
                  <p className="text-eyebrow text-[hsl(var(--accent))] mb-4" style={{ letterSpacing: "0.2em" }}>
                    Other Accommodations
                  </p>
                  <div className="space-y-4">
                    {Object.values(ROOMS_DATA)
                      .filter((r) => r.slug !== room.slug)
                      .map((other) => (
                        <Link
                          key={other.slug}
                          to={`/rooms/${other.slug}`}
                          className="flex items-center justify-between text-xs text-[hsl(var(--foreground))] hover:text-[hsl(var(--accent))] transition-colors group"
                        >
                          <div>
                            <p className="font-serif text-sm font-medium">{other.title}</p>
                            <p className="text-[0.65rem] text-[hsl(var(--muted-foreground))]">{other.bed}</p>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default RoomDetail;
