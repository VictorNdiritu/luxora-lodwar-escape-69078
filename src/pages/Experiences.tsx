import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BannerHero } from "@/components/PageHero";
import { ScrollReveal } from "@/hooks/useScrollReveal";

import turkanaVillageImg  from "@/assets/newest clear images/turkana village.jpg";
import centralIslandImg   from "@/assets/newest clear images/lake turkana central island.jpg";
import eliyeSpringsImg    from "@/assets/newest clear images/Eliye springs.jpg";
import namorutungaImg     from "@/assets/newest clear images/Namorutunga Standing Stones.png";
import lodwarTownImg      from "@/assets/experiences/Lodwar Town & Market.jpg";
import wadachPyramidsImg  from "@/assets/newest clear images/wadachpyramids_enhanced.png";
import lakeTurkanaHero    from "@/assets/newest clear images/lake turkana.jpg";

const experiences = [
  {
    title: "Turkana Cultural Village",
    description: "Immerse yourself in the rich cultural heritage of the Turkana people. Experience traditional dances, handcrafted jewellery, and the customs of one of Kenya's most distinctive communities.",
    duration: "Half Day",
    image: turkanaVillageImg,
  },
  {
    title: "Central Island National Park",
    description: "Explore volcanic islands in Lake Turkana, home to three crater lakes (Crocodile, Flamingo, and Tilapia) and extraordinary natural beauty. A UNESCO World Heritage Site.",
    duration: "Full Day",
    image: centralIslandImg,
  },
  {
    title: "Namorutunga Standing Stones",
    description: "Visit ancient megalithic sites with mysterious standing stone pillars dating back thousands of years — among the oldest archaeoastronomical sites in sub-Saharan Africa.",
    duration: "Half Day",
    image: namorutungaImg,
  },
  {
    title: "Eliye Springs",
    description: "Relax at this beautiful lakeshore oasis with natural palm springs, golden sandy beaches, and crystal waters against the dramatic backdrop of Lake Turkana.",
    duration: "Full Day",
    image: eliyeSpringsImg,
  },
  {
    title: "Lodwar Town & Market",
    description: "Discover local artisan markets, traditional woven basketry, and explore the vibrant town centre with guided cultural insights into daily life in Turkana's regional capital.",
    duration: "Half Day",
    image: lodwarTownImg,
  },
  {
    title: "Wadach Pyramids",
    description: "Explore unique pyramid-shaped natural rock formations rising dramatically from the Turkana desert floor — a surreal, photogenic geological monument.",
    duration: "Half Day",
    image: wadachPyramidsImg,
  },
];

const activities = [
  "Bird Watching at Lake Turkana",
  "Desert Safari Tours",
  "Fishing Expeditions",
  "Lake Turkana Sunset Walks",
  "Archaeological Site Visits",
  "Photography Tours",
  "Local Market Shopping",
  "Traditional Craft Workshops",
];

const ExperiencesPage = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Experiences & Activities | Luxora Hotel, Lodwar</title>
        <meta name="description" content="Discover Lake Turkana, Eliye Springs, Central Island, Namorutunga standing stones, and cultural villages. Explore Northern Kenya from Luxora Hotel, Lodwar." />
        <link rel="canonical" href="https://luxorahotels.co.ke/experiences" />
        <meta property="og:title" content="Experiences & Activities | Luxora Hotel, Lodwar" />
        <meta property="og:description" content="Explore unforgettable adventures and cultural experiences in Northern Kenya." />
        <meta property="og:type" content="website" />
      </Helmet>

      <ScrollReveal />
      <div className="min-h-screen">
        <Header />

        <BannerHero
          eyebrow="Experiences & Activities"
          headline="Discover Turkana"
          image={lakeTurkanaHero}
          imageAlt="Lake Turkana — The Jade Sea"
        />

        {/* Intro */}
        <section className="section-pad bg-[hsl(var(--background))]">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="reveal">
                <p className="text-eyebrow text-[hsl(var(--accent))] mb-5" style={{ letterSpacing: "0.25em" }}>The Region</p>
                <h2 className="text-headline mb-6">The Cradle of Mankind</h2>
                <span className="gold-rule" />
                <div className="space-y-5 text-lead text-[hsl(var(--muted-foreground))]">
                  <p>
                    Turkana County, located in the northwestern part of Kenya, is a land of dramatic landscapes, rich archaeological heritage, and vibrant indigenous culture. Known as the "Cradle of Mankind", this region has yielded some of the world's most significant fossil discoveries.
                  </p>
                  <p>
                    Lake Turkana — the world's largest permanent desert lake and a UNESCO World Heritage Site — dominates the landscape with its stunning jade-green waters, stretching over 290 kilometres and surrounded by volcanic formations.
                  </p>
                  <p>
                    The Turkana people, known for their distinctive cultural practices and colourful traditional attire, have inhabited this region for centuries. Beyond cultural attractions, the region offers diverse wildlife viewing and over 350 bird species.
                  </p>
                </div>
              </div>
              <div className="reveal-stagger grid grid-cols-1 gap-4">
                {[
                  { label: "Best Time to Visit", text: "June to September — cooler and dry. Wildlife and lake exploration year-round." },
                  { label: "What to Bring",       text: "Light clothing, sun protection, comfortable walking shoes, camera, binoculars and a reusable water bottle." },
                  { label: "Booking & Guides",    text: "Our concierge team can arrange all experiences, transport and private local guides to customise your itinerary." },
                ].map(({ label, text }) => (
                  <div key={label} className="border-t border-[hsl(var(--border))] pt-5">
                    <h3 className="font-serif text-lg mb-2 font-light">{label}</h3>
                    <p className="text-sm font-light text-[hsl(var(--muted-foreground))] leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Experiences grid */}
        <section className="section-pad bg-[hsl(var(--muted))]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <p className="text-eyebrow text-[hsl(var(--accent))] mb-4" style={{ letterSpacing: "0.25em" }}>Featured</p>
              <h2 className="text-headline mb-4">Signature Experiences</h2>
              <span className="gold-rule-center" />
            </div>

            <div className="reveal-stagger grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {experiences.map((exp, i) => (
                <div
                  key={exp.title}
                  className="group relative overflow-hidden bg-[hsl(var(--card))] border border-[hsl(var(--border))] cursor-pointer hover:border-[hsl(var(--accent))/0.5] transition-all duration-500"
                  onClick={() => setLightbox(i)}
                >
                  <div className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="img-cover transition-transform duration-[1000ms] ease-[cubic-bezier(.76,0,.24,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-eyebrow text-[hsl(var(--accent))]" style={{ fontSize: "0.6rem", letterSpacing: "0.18em" }}>
                        {exp.duration}
                      </p>
                      <span className="text-xs text-[hsl(var(--muted-foreground))] opacity-70">Click to expand</span>
                    </div>
                    <h3 className="font-serif text-xl mb-3 font-light">{exp.title}</h3>
                    <p className="text-sm font-light text-[hsl(var(--muted-foreground))] leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Activities list */}
        <section className="section-pad bg-[hsl(var(--background))]">
          <div className="container mx-auto px-6 max-w-4xl text-center reveal">
            <p className="text-eyebrow text-[hsl(var(--accent))] mb-4" style={{ letterSpacing: "0.25em" }}>Activities</p>
            <h2 className="text-headline mb-4">More Ways to Explore</h2>
            <span className="gold-rule-center" />
            <div className="reveal-stagger grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12 text-left">
              {activities.map((act) => (
                <div
                  key={act}
                  className="p-5 border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--accent))] transition-colors"
                >
                  <p className="text-sm font-light leading-snug">{act}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Concierge booking banner */}
        <section className="section-pad bg-[hsl(var(--foreground))] text-center text-white">
          <div className="container mx-auto px-6 max-w-3xl reveal">
            <p className="text-eyebrow text-[hsl(var(--accent))] mb-4" style={{ letterSpacing: "0.25em" }}>Custom Itineraries</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 font-light">Plan Your Northern Expedition</h2>
            <span className="gold-rule-center" />
            <p className="text-lead text-white/70 mb-10 max-w-xl mx-auto">
              Our front desk and concierge team can organize customized excursions, private 4x4 vehicles, and local guides tailored to your schedule.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-gold">
                <span>Inquire With Concierge</span>
              </Link>
              <Link to="/reservations" className="btn-outline-white">
                <span>Reserve Room & Safari</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {lightbox !== null && (
          <div
            className="lightbox-overlay"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal
          >
            <button
              className="absolute top-6 right-6 text-white text-3xl opacity-70 hover:opacity-100"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="max-w-4xl max-h-[85vh] p-4 text-center" onClick={(e) => e.stopPropagation()}>
              <img
                src={experiences[lightbox].image}
                alt={experiences[lightbox].title}
                className="max-w-full max-h-[70vh] object-contain mx-auto shadow-2xl border border-white/10"
              />
              <h3 className="font-serif text-white text-2xl font-light mt-4">
                {experiences[lightbox].title}
              </h3>
              <p className="text-sm text-white/70 mt-2 max-w-xl mx-auto">
                {experiences[lightbox].description}
              </p>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};

export default ExperiencesPage;
