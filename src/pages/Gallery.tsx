import { Helmet } from "react-helmet";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BannerHero } from "@/components/PageHero";
import { ScrollReveal } from "@/hooks/useScrollReveal";

// Images
import heroImg from "@/assets/hero-hotel.jpg";
import amenitiesImg from "@/assets/amenities.jpg";
import miceImg from "@/assets/mice-conference.jpg";
import restaurantImg from "@/assets/new-images/restaurant.png";
import standardDouble1 from "@/assets/new-images/sd.png";
import standardDouble2 from "@/assets/new-images/sdr.png";
import superiorDouble1 from "@/assets/new-images/sup.png";
import twinRoom1 from "@/assets/new-images/suit.png";
import twinRoom2 from "@/assets/new-images/suite.png";
import excursionDesert from "@/assets/newest clear images/lake turkana central island.jpg";
import excursionEliye from "@/assets/newest clear images/Eliye springs.jpg";
import excursionTown from "@/assets/experiences/Lodwar Town & Market.jpg";
import excursionVillage from "@/assets/newest clear images/turkana village.jpg";
import excursionPyramids from "@/assets/newest clear images/wadachpyramids_enhanced.png";
import namorutungaImg from "@/assets/newest clear images/Namorutunga Standing Stones.png";

import { Eye, X, ChevronLeft, ChevronRight, Grid } from "lucide-react";

interface GalleryItem {
  src: string;
  title: string;
  category: "rooms" | "dining" | "events" | "excursions" | "property";
  categoryLabel: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: heroImg,
    title: "Luxora Hotel Lodwar Exterior & Grounds",
    category: "property",
    categoryLabel: "Property & Grounds",
  },
  {
    src: superiorDouble1,
    title: "Superior Double Room — King Bed & Elegant Ambiance",
    category: "rooms",
    categoryLabel: "Rooms & Suites",
  },
  {
    src: restaurantImg,
    title: "Signature Restaurant & Dining Room",
    category: "dining",
    categoryLabel: "Dining & Bar",
  },
  {
    src: miceImg,
    title: "Conference & Meeting Hall — Boardroom & Symposium Layout",
    category: "events",
    categoryLabel: "Events & MICE",
  },
  {
    src: standardDouble1,
    title: "Standard Double Room — Queen Comfort & Quiet AC",
    category: "rooms",
    categoryLabel: "Rooms & Suites",
  },
  {
    src: excursionEliye,
    title: "Eliye Springs & Lake Turkana Palm Shoreline",
    category: "excursions",
    categoryLabel: "Turkana Excursions",
  },
  {
    src: superiorDouble2,
    title: "Superior Double Room — En-Suite Vanity & Executive Workspace",
    category: "rooms",
    categoryLabel: "Rooms & Suites",
  },
  {
    src: twinRoom1,
    title: "Standard Twin Room — Dual Beds for Colleagues & Partners",
    category: "rooms",
    categoryLabel: "Rooms & Suites",
  },
  {
    src: excursionDesert,
    title: "Central Turkana Desert Plateau & Horizons",
    category: "excursions",
    categoryLabel: "Turkana Excursions",
  },
  {
    src: amenitiesImg,
    title: "Hotel Facilities, Courtyard & Corridors",
    category: "property",
    categoryLabel: "Property & Grounds",
  },
  {
    src: excursionVillage,
    title: "Turkana Cultural Village Experience",
    category: "excursions",
    categoryLabel: "Turkana Excursions",
  },
  {
    src: excursionPyramids,
    title: "Wadach Pyramids Geological Formations",
    category: "excursions",
    categoryLabel: "Turkana Excursions",
  },
  {
    src: standardDouble2,
    title: "Standard Double Room — Daylight & Linen Details",
    category: "rooms",
    categoryLabel: "Rooms & Suites",
  },
  {
    src: twinRoom2,
    title: "Twin Suite Configuration — Spacious Living Quarters",
    category: "rooms",
    categoryLabel: "Rooms & Suites",
  },
  {
    src: excursionTown,
    title: "Lodwar Town & Traditional Handicrafts Market",
    category: "excursions",
    categoryLabel: "Turkana Excursions",
  },
  {
    src: namorutungaImg,
    title: "Namorutunga Archaeoastronomical Standing Stones",
    category: "excursions",
    categoryLabel: "Turkana Excursions",
  },
];

const FILTERS = [
  { key: "all", label: "All Views" },
  { key: "rooms", label: "Rooms & Suites" },
  { key: "dining", label: "Dining & Bar" },
  { key: "events", label: "Events & MICE" },
  { key: "property", label: "Property & Grounds" },
  { key: "excursions", label: "Turkana Excursions" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    filter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const nextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  return (
    <>
      <Helmet>
        <title>Visual Gallery | Luxora Hotel, Lodwar</title>
        <meta
          name="description"
          content="Explore the curated visual gallery of Luxora Hotel Lodwar: luxury accommodations, the signature restaurant, conference halls, and excursions across Turkana."
        />
        <link rel="canonical" href="https://luxorahotels.co.ke/gallery" />
        <meta property="og:title" content="Gallery | Luxora Hotel, Lodwar" />
        <meta property="og:description" content="Discover the visual essence of Luxora Hotel Lodwar and Northern Kenya." />
        <meta property="og:type" content="website" />
      </Helmet>

      <ScrollReveal />
      <div className="min-h-screen bg-[hsl(var(--background))]">
        <Header />

        <BannerHero
          eyebrow="Visual Portfolio"
          headline="The Gallery"
          image={heroImg}
          imageAlt="Luxora Hotel Lodwar Visual Portfolio"
        />

        {/* Editorial introduction */}
        <section className="section-pad-sm bg-[hsl(var(--background))] text-center">
          <div className="container mx-auto px-6 max-w-3xl reveal">
            <p className="text-eyebrow text-[hsl(var(--accent))] mb-4" style={{ letterSpacing: "0.25em" }}>
              Visual Impressions
            </p>
            <h2 className="text-headline mb-6">Scenes from Luxora & Beyond</h2>
            <span className="gold-rule-center" />
            <p className="text-lead text-[hsl(var(--muted-foreground))] mx-auto">
              A curated photographic collection showcasing our contemporary accommodations, dining spaces, conference venues, and the captivating landscapes of Turkana.
            </p>
          </div>
        </section>

        {/* Filter Bar */}
        <div className="bg-[hsl(var(--card))] border-t border-b border-[hsl(var(--border))] sticky top-20 z-20">
          <div className="container mx-auto px-6 max-w-6xl py-4 overflow-x-auto">
            <div className="flex items-center justify-center gap-2 sm:gap-4 min-w-max">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`text-eyebrow px-4 py-2 text-xs transition-all duration-300 ${
                    filter === f.key
                      ? "bg-[hsl(var(--foreground))] text-[hsl(var(--background))]"
                      : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--background))]"
                  }`}
                  style={{ letterSpacing: "0.18em", fontSize: "0.625rem" }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <section className="section-pad bg-[hsl(var(--background))]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <div
                  key={item.src + index}
                  onClick={() => openLightbox(index)}
                  className="group relative aspect-[4/3] overflow-hidden border border-[hsl(var(--border))] cursor-pointer reveal"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="img-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(.76,0,.24,1)]"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-eyebrow text-[hsl(var(--accent))] mb-1" style={{ fontSize: "0.55rem" }}>
                      {item.categoryLabel}
                    </p>
                    <h3 className="font-serif text-white text-base font-light">{item.title}</h3>
                    <div className="mt-3 flex items-center gap-2 text-white/80 text-xs">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Click to Enlarge</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div
            className="lightbox-overlay"
            onClick={closeLightbox}
            role="dialog"
            aria-modal
            aria-label="Enlarged photo"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white opacity-80 hover:opacity-100 text-3xl leading-none z-10"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevLightbox();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white opacity-70 hover:opacity-100 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            {/* Active Image and Caption */}
            <div
              className="max-w-5xl max-h-[85vh] p-4 flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-[75vh] object-contain shadow-2xl border border-white/10"
              />
              <div className="mt-4 text-center text-white">
                <p className="text-eyebrow text-[hsl(var(--accent))]" style={{ fontSize: "0.6rem" }}>
                  {filteredItems[lightboxIndex].categoryLabel} • {lightboxIndex + 1} of {filteredItems.length}
                </p>
                <h4 className="font-serif text-lg font-light mt-1">
                  {filteredItems[lightboxIndex].title}
                </h4>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextLightbox();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white opacity-70 hover:opacity-100 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </div>
        )}

        {/* Call to action */}
        <section className="section-pad bg-[hsl(var(--card))] border-t border-[hsl(var(--border))] text-center">
          <div className="container mx-auto px-6 max-w-3xl reveal">
            <p className="text-eyebrow text-[hsl(var(--accent))] mb-4" style={{ letterSpacing: "0.25em" }}>
              Experience It In Person
            </p>
            <h2 className="text-headline mb-6">Discover Luxora First-Hand</h2>
            <span className="gold-rule-center" />
            <p className="text-lead text-[hsl(var(--muted-foreground))] mb-8 mx-auto">
              Our reservations desk is at your disposal for room bookings, conference reservations, and airport transfers.
            </p>
            <Link to="/reservations" className="btn-gold">
              <span>Book Your Stay</span>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Gallery;
