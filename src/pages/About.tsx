import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BannerHero } from "@/components/PageHero";
import { ScrollReveal } from "@/hooks/useScrollReveal";

import heroImg    from "@/assets/hero-hotel.jpg";
import amenities  from "@/assets/amenities.jpg";

const AboutPage = () => (
  <>
    <Helmet>
      <title>About Luxora Hotel, Lodwar | Our Story & Vision</title>
      <meta name="description" content="Discover Luxora Hotel, Lodwar's story — a boutique hotel offering 36 elegant rooms across 2 floors, adjacent to Lodwar Airport in Northern Kenya." />
      <link rel="canonical" href="https://luxorahotels.co.ke/about" />
      <meta property="og:title" content="About Luxora Hotel, Lodwar" />
      <meta property="og:description" content="Learn about our commitment to excellence and authentic Kenyan hospitality." />
      <meta property="og:type" content="website" />
    </Helmet>

    <ScrollReveal />
    <div className="min-h-screen">
      <Header />

      <BannerHero
        eyebrow="About Luxora"
        headline="Our Story"
        image={heroImg}
        imageAlt="Luxora Hotel, Lodwar"
      />

      {/* ── Intro ───────────────────────────────────────────────────── */}
      <section className="section-pad bg-[hsl(var(--background))]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="reveal">
              <p className="text-eyebrow text-[hsl(var(--accent))] mb-5" style={{ letterSpacing: "0.25em" }}>
                Founded with Purpose
              </p>
              <h2 className="text-headline mb-6">Where Luxury Meets Turkana</h2>
              <span className="gold-rule" />
              <div className="space-y-5 text-lead text-[hsl(var(--muted-foreground))]">
                <p>
                  Luxora Hotel, Lodwar was founded with a vision to bring world-class hospitality to the heart of Turkana County. Our boutique hotel represents a perfect blend of modern luxury and authentic Kenyan hospitality, designed to cater to both business and leisure travellers visiting this unique region.
                </p>
                <p>
                  Strategically located adjacent to Lodwar Airport, Luxora offers unparalleled convenience for travellers arriving by air. Our proximity to the airport, combined with our commitment to excellence, makes us the preferred choice for visitors to Lodwar and the greater Turkana region.
                </p>
                <p>
                  With 36 thoughtfully designed rooms spread across two floors, we offer an intimate yet comprehensive hotel experience. Each room is equipped with modern amenities while maintaining a warm, inviting atmosphere that reflects the spirit of Turkana hospitality.
                </p>
              </div>
            </div>

            {/* Pull quote + image */}
            <div className="flex flex-col gap-8 reveal">
              <div className="relative overflow-hidden" style={{ minHeight: "360px" }}>
                <img src={amenities} alt="Luxora Hotel interior" className="img-cover" />
              </div>
              <blockquote
                className="border-l-2 border-[hsl(var(--accent))] pl-6"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 300, lineHeight: 1.5, fontStyle: "italic", color: "hsl(var(--foreground))" }}
              >
                "Our dedicated team is committed to ensuring every guest experiences the highest standards of service — from the moment of arrival to the warmth of farewell."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Sets Us Apart ──────────────────────────────────────── */}
      <section className="section-pad bg-[hsl(var(--muted))]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16 reveal">
            <p className="text-eyebrow text-[hsl(var(--accent))] mb-4" style={{ letterSpacing: "0.25em" }}>
              Our Values
            </p>
            <h2 className="text-headline mb-4">What Sets Us Apart</h2>
            <span className="gold-rule-center" />
          </div>

          <div className="reveal-stagger grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[hsl(var(--border))]">
            {[
              { label: "Excellence",    text: "We maintain the highest standards in every aspect of our service, from room cleanliness to every guest interaction." },
              { label: "Hospitality",   text: "Our team embodies the warmth of Kenyan hospitality, treating every guest like family." },
              { label: "Comfort",       text: "Every detail is designed with your comfort in mind, ensuring a restful and rejuvenating stay." },
              { label: "Location",      text: "Our prime location adjacent to Lodwar Airport offers convenience unmatched in the region." },
            ].map(({ label, text }) => (
              <div key={label} className="bg-[hsl(var(--background))] p-10">
                <span className="gold-rule" />
                <h3
                  className="font-serif mb-4"
                  style={{ fontSize: "1.5rem", fontWeight: 400 }}
                >
                  {label}
                </h3>
                <p className="text-sm font-light text-[hsl(var(--muted-foreground))] leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Facts ───────────────────────────────────────────────── */}
      <section className="section-pad-sm bg-[hsl(var(--foreground))]">
        <div className="container mx-auto px-6 max-w-4xl reveal-stagger">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { num: "36",  label: "Rooms" },
              { num: "2",   label: "Floors" },
              { num: "200", label: "Event Capacity" },
              { num: "24/7",label: "Service" },
            ].map(({ num, label }) => (
              <div key={label}>
                <p
                  className="font-serif text-[hsl(var(--accent))]"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, lineHeight: 1 }}
                >
                  {num}
                </p>
                <p className="text-eyebrow text-[hsl(var(--background))/0.5] mt-2" style={{ letterSpacing: "0.2em" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Amenities ───────────────────────────────────────────────── */}
      <section className="section-pad bg-[hsl(var(--background))]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16 reveal">
            <p className="text-eyebrow text-[hsl(var(--accent))] mb-4" style={{ letterSpacing: "0.25em" }}>Facilities</p>
            <h2 className="text-headline mb-4">Premium Amenities</h2>
            <span className="gold-rule-center" />
          </div>
          <div className="reveal-stagger grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Restaurant & Bar",     desc: "All-day dining with local and international cuisine, plus a relaxed bar setting." },
              { title: "High-Speed WiFi",       desc: "Dedicated fibre broadband throughout the hotel and conference facilities." },
              { title: "Airport Transfer",      desc: "Complimentary shuttle service to and from Lodwar Airport, available 24 hours." },
              { title: "Conference Hall",       desc: "Spacious ballroom accommodating up to 200 guests with full AV support." },
              { title: "Free Parking",          desc: "Secure, on-site parking for all guests at no additional charge." },
              { title: "24/7 Concierge",        desc: "Round-the-clock front desk, room service, and concierge assistance." },
              { title: "Daily Housekeeping",    desc: "Professional housekeeping to maintain your room to the highest standards." },
              { title: "In-Room Safe",          desc: "Electronic in-room safes and 24-hour CCTV security throughout." },
              { title: "Air Conditioning",      desc: "Individual climate control in every room for year-round comfort." },
            ].map(({ title, desc }) => (
              <div key={title} className="border-t border-[hsl(var(--border))] pt-6">
                <h3 className="font-serif text-xl mb-2 font-light">{title}</h3>
                <p className="text-sm font-light text-[hsl(var(--muted-foreground))] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location ────────────────────────────────────────────────── */}
      <section className="section-pad bg-[hsl(var(--muted))]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p className="text-eyebrow text-[hsl(var(--accent))] mb-5" style={{ letterSpacing: "0.25em" }}>Location</p>
              <h2 className="text-headline mb-6">Getting Here</h2>
              <span className="gold-rule" />
              <div className="space-y-6 text-lead text-[hsl(var(--muted-foreground))]">
                <p>Adjacent to Lodwar Airport, Lodwar, Turkana County, Kenya</p>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-4">
                    <span className="font-medium text-[hsl(var(--foreground))] w-32 flex-shrink-0">By Air</span>
                    <span>Daily flights from Nairobi (approx. 1.5 hours). Free airport shuttle available 24/7.</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-medium text-[hsl(var(--foreground))] w-32 flex-shrink-0">By Road</span>
                    <span>Via the A1 Highway from Kitale — approximately 12 hours. Charter flights also available.</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-medium text-[hsl(var(--foreground))] w-32 flex-shrink-0">Phone</span>
                    <a href="tel:+254110463062" className="link-underline">+254 110 463 062</a>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-medium text-[hsl(var(--foreground))] w-32 flex-shrink-0">Email</span>
                    <a href="mailto:info@luxorahotels.co.ke" className="link-underline">info@luxorahotels.co.ke</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal">
              {/* Map embed placeholder */}
              <div className="relative overflow-hidden bg-[hsl(var(--border))]" style={{ paddingBottom: "75%", borderRadius: 0 }}>
                <iframe
                  title="Luxora Hotel location"
                  src="https://maps.google.com/maps?q=Lodwar+Airport,+Kenya&output=embed&z=14"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad-sm bg-[hsl(var(--foreground))] text-center">
        <div className="container mx-auto px-6 reveal">
          <h2 className="font-serif text-[hsl(var(--background))] mb-6" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 300 }}>
            Ready to Experience Luxora?
          </h2>
          <Link to="/reservations" className="btn-gold">
            <span>Reserve Your Stay</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  </>
);

export default AboutPage;
