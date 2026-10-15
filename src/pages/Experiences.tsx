import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BannerHero } from "@/components/PageHero";
import { ScrollReveal } from "@/hooks/useScrollReveal";

import turkanaVillageImg  from "@/assets/experiences/Turkana Cultural Village.jpg";
import centralIslandImg   from "@/assets/experiences/Central Turkana Desert Excursions.jpg";
import eliyeSpringsImg    from "@/assets/experiences/Eliye spirings.jpg";
import lodwarTownImg      from "@/assets/experiences/Lodwar Town & Market.jpg";
import wadachPyramidsImg  from "@/assets/experiences/Wadach Pyramids.jpeg";
import heroImg            from "@/assets/hero-hotel.jpg";

const experiences = [
  {
    title: "Turkana Cultural Village",
    description: "Immerse yourself in the rich cultural heritage of the Turkana people. Experience traditional dances, handcrafted jewellery, and the customs of one of Kenya's most distinctive communities.",
    duration: "Half Day",
    image: turkanaVillageImg,
  },
  {
    title: "Central Island National Park",
    description: "Explore volcanic islands in Lake Turkana, home to the world's largest concentration of Nile crocodiles. A UNESCO World Heritage Site of extraordinary natural beauty.",
    duration: "Full Day",
    image: centralIslandImg,
  },
  {
    title: "Namorutunga Standing Stones",
    description: "Visit ancient megalithic sites with mysterious standing stones dating back thousands of years — among the oldest astronomical sites in sub-Saharan Africa.",
    duration: "Half Day",
    image: heroImg,   // fallback — original file has an invalid filename on Windows
  },
  {
    title: "Eliye Springs",
    description: "Relax at this beautiful lakeshore oasis with white sandy beaches and crystal-clear waters perfect for swimming and birdwatching against a backdrop of doum palms.",
    duration: "Full Day",
    image: eliyeSpringsImg,
  },
  {
    title: "Lodwar Town & Market",
    description: "Discover local markets, meet artisans, and explore the vibrant town centre with guided cultural insights into daily life in Turkana's regional capital.",
    duration: "Half Day",
    image: lodwarTownImg,
  },
  {
    title: "Wadach Pyramids",
    description: "Explore unique pyramid-shaped rock formations rising dramatically from the Turkana desert landscape — a surreal and photogenic natural wonder.",
    duration: "Half Day",
    image: wadachPyramidsImg,
  },
];

const activities = [
  "Bird Watching at Lake Turkana",
  "Desert Safari Tours",
  "Fishing Expeditions",
  "Sunset Camel Rides",
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
        <meta name="description" content="Discover Lake Turkana, Eliye Springs, cultural villages, and more. Explore the unique landscapes and rich heritage of Turkana County from Luxora Hotel, Lodwar." />
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
          image={turkanaVillageImg}
          imageAlt="Turkana Cultural Village"
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
                  { label: "Best Time to Visit", text: "June to September — cooler and dry. Wildlife viewing year-round." },
                  { label: "What to Bring",       text: "Light clothing, sun protection, comfortable walking shoes, camera, binoculars and a reusable water bottle." },
                  { label: "Booking",             text: "Our concierge team can arrange all experiences and customise your itinerary. Book in advance is recommended." },
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
                  className="group relative overflow-hidden bg-[hsl(var(--card))] cursor-pointer"
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
                    <p className="text-eyebrow text-[hsl(var(--accent))] mb-2" style={{ fontSize: "0.6rem", letterSpacing: "0.2em" }}>
                      {exp.duration}
                    </p>
                    <h3 className="font-serif text-xl mb-3 font-light">{exp.title}</h3>
                    <p className="text-sm font-light text-[hsl(var(--muted-foreground))] leading-relaxed line-clamp-3">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {lightbox !== null && (
          <div
            className="lightbox-overlay"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-white opacity-60 hover:opacity-100 text-3xl" onClick={() => setLightbox(null)} aria-label="Close">×</button>
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white opacity-60 hover:opacity-100 text-5xl"
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + experiences.length) % experiences.length); }}
              aria-label="Previous"
            >‹</button>
            <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={experiences[lightbox].image}
                alt={experiences[lightbox].title}
                className="w-full object-contain"
                style={{ maxHeight: "70vh" }}
              />
              <div className="mt-4 text-center">
                <p className="text-eyebrow text-[hsl(var(--accent))] mb-1" style={{ letterSpacing: "0.2em" }}>
                  {experiences[lightbox].duration}
                </p>
                <h3 className="font-serif text-white text-2xl font-light mb-2">{experiences[lightbox].title}</h3>
                <p className="text-white/60 text-sm font-light max-w-xl mx-auto">{experiences[lightbox].description}</p>
              </div>
            </div>
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white opacity-60 hover:opacity-100 text-5xl"
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % experiences.length); }}
              aria-label="Next"
            >›</button>
          </div>
        )}

        {/* Activities */}
        <section className="section-pad bg-[hsl(var(--background))]">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-16 reveal">
              <p className="text-eyebrow text-[hsl(var(--accent))] mb-4" style={{ letterSpacing: "0.25em" }}>Activities</p>
              <h2 className="text-headline mb-4">Things to Do</h2>
              <span className="gold-rule-center" />
            </div>
            <div className="reveal-stagger grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[hsl(var(--border))]">
              {activities.map((act) => (
                <div key={act} className="bg-[hsl(var(--background))] py-8 px-6 text-center">
                  <p className="font-serif text-lg font-light">{act}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-pad-sm bg-[hsl(var(--foreground))] text-center">
          <div className="container mx-auto px-6 reveal">
            <h2 className="font-serif text-[hsl(var(--background))] mb-6" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 300 }}>
              Ready to Explore Turkana?
            </h2>
            <p className="text-lead text-[hsl(var(--background))/0.6] mb-10 mx-auto text-center">
              Book your stay at Luxora and let our concierge team arrange unforgettable experiences. Contact us to start planning your adventure.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/reservations" className="btn-gold"><span>Reserve Your Stay</span></Link>
              <Link to="/contact" className="btn-outline" style={{ borderColor: "hsl(var(--background)/0.3)", color: "hsl(var(--background))" }}>
                <span>Plan Your Trip</span>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ExperiencesPage;
