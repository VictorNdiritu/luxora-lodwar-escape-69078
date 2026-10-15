import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BannerHero } from "@/components/PageHero";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import miceImg from "@/assets/mice-conference.jpg";

const facilities = [
  { title: "Conference Hall",     desc: "Spacious ballroom accommodating up to 200 guests with theatre-style seating and a built-in stage.", capacity: "Up to 200 guests" },
  { title: "Meeting Rooms",       desc: "Multiple breakout rooms for workshops, board meetings and private sessions, each with natural light.", capacity: "10–30 guests each" },
  { title: "AV Equipment",        desc: "State-of-the-art projectors, sound systems, video conferencing and full presentation tools throughout.", capacity: "All venues" },
  { title: "High-Speed Internet", desc: "Dedicated fibre connection ensuring seamless connectivity throughout your event.", capacity: "Unlimited bandwidth" },
  { title: "Catering Services",   desc: "Customised menus from breakfast meetings to gala dinners, with local and international cuisine.", capacity: "All dietary needs met" },
  { title: "Break Services",      desc: "Coffee breaks, refreshments and buffet services tailored to your schedule and event flow.", capacity: "Continuous service" },
];

const packages = [
  {
    name: "Half-Day Package",
    duration: "4 hours",
    includes: ["Conference room rental", "Basic AV equipment", "Morning or afternoon tea", "High-speed WiFi", "Notepads & stationery"],
  },
  {
    name: "Full-Day Package",
    duration: "8 hours",
    includes: ["Conference room rental", "Premium AV equipment", "2 coffee breaks", "Buffet lunch", "High-speed WiFi", "All stationery & materials"],
  },
  {
    name: "Residential Package",
    duration: "Multi-day",
    includes: ["Full conference facilities", "Accommodation", "Full-board meals", "Team activities", "Airport transfers", "Dedicated event coordinator"],
  },
];

const MICEPage = () => (
  <>
    <Helmet>
      <title>Meetings, Conferences & Events | Luxora Hotel, Lodwar</title>
      <meta name="description" content="Host your corporate meetings, conferences and events at Luxora Hotel, Lodwar. Elegant venues, high-speed connectivity, gourmet catering and professional event coordination in Northern Kenya." />
      <link rel="canonical" href="https://luxorahotels.co.ke/mice" />
      <meta property="og:title" content="MICE — Corporate Events & Conferences | Luxora Hotel, Lodwar" />
      <meta property="og:description" content="Premier MICE destination in Lodwar with elegant meeting spaces, modern facilities and dedicated event support." />
      <meta property="og:type" content="website" />
    </Helmet>

    <ScrollReveal />
    <div className="min-h-screen">
      <Header />

      <BannerHero
        eyebrow="Meetings, Incentives, Conferences & Events"
        headline="Host Your Event at Luxora"
        image={miceImg}
        imageAlt="Luxora conference and meeting facilities"
      />

      {/* Intro */}
      <section className="section-pad bg-[hsl(var(--background))]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p className="text-eyebrow text-[hsl(var(--accent))] mb-5" style={{ letterSpacing: "0.25em" }}>
                Corporate Excellence
              </p>
              <h2 className="text-headline mb-6">MICE at Luxora</h2>
              <span className="gold-rule" />
              <div className="space-y-5 text-lead text-[hsl(var(--muted-foreground))]">
                <p>
                  Where professionalism meets unparalleled comfort. Luxora Hotel, Lodwar is your premier destination for corporate retreats, strategic team-building experiences, and impactful business gatherings in Northern Kenya.
                </p>
                <p>
                  Our dedicated events team works closely with you from initial enquiry through to on-the-day coordination, ensuring every detail of your event is seamlessly executed.
                </p>
                <p className="text-sm italic">
                  Perfect for NGO gatherings, corporate training, product launches and executive retreats.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/reservations" className="btn-primary"><span>Plan Your Event</span></Link>
                <Link to="/contact" className="btn-outline"><span>Request a Proposal</span></Link>
              </div>
            </div>
            <div className="relative overflow-hidden reveal" style={{ minHeight: "480px" }}>
              <img src={miceImg} alt="Luxora conference facilities" className="img-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-pad bg-[hsl(var(--muted))]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16 reveal">
            <p className="text-eyebrow text-[hsl(var(--accent))] mb-4" style={{ letterSpacing: "0.25em" }}>Facilities</p>
            <h2 className="text-headline mb-4">World-Class Facilities</h2>
            <span className="gold-rule-center" />
          </div>
          <div className="reveal-stagger grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(var(--border))]">
            {facilities.map(({ title, desc, capacity }) => (
              <div key={title} className="bg-[hsl(var(--background))] p-8">
                <h3 className="font-serif text-xl mb-3 font-light">{title}</h3>
                <p className="text-sm font-light text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">{desc}</p>
                <p className="text-eyebrow text-[hsl(var(--accent))]" style={{ fontSize: "0.6rem", letterSpacing: "0.18em" }}>
                  {capacity}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-pad bg-[hsl(var(--background))]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16 reveal">
            <p className="text-eyebrow text-[hsl(var(--accent))] mb-4" style={{ letterSpacing: "0.25em" }}>Packages</p>
            <h2 className="text-headline mb-4">Flexible Event Packages</h2>
            <span className="gold-rule-center" />
            <p className="text-lead text-[hsl(var(--muted-foreground))] mx-auto">Tailored solutions for events of any size and duration.</p>
          </div>
          <div className="reveal-stagger grid md:grid-cols-3 gap-px bg-[hsl(var(--border))]">
            {packages.map((pkg) => (
              <div key={pkg.name} className="bg-[hsl(var(--card))] p-10">
                <h3 className="font-serif text-2xl mb-1 font-light">{pkg.name}</h3>
                <p className="text-eyebrow text-[hsl(var(--accent))] mb-8" style={{ fontSize: "0.6rem", letterSpacing: "0.2em" }}>{pkg.duration}</p>
                <ul className="space-y-3 mb-10">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm font-light text-[hsl(var(--muted-foreground))]">
                      <span className="w-4 h-px bg-[hsl(var(--accent))] flex-shrink-0 mt-2.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/reservations" className="btn-outline w-full justify-center"><span>Request Quote</span></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad-sm bg-[hsl(var(--foreground))] text-center">
        <div className="container mx-auto px-6 reveal">
          <h2 className="font-serif text-[hsl(var(--background))] mb-6" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 300 }}>
            Ready to Plan Your Next Event?
          </h2>
          <p className="text-lead text-[hsl(var(--background))/0.6] mb-10 mx-auto text-center">
            Our dedicated events team is ready to help you create a memorable and successful gathering at Luxora.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/reservations" className="btn-gold"><span>Book Your Event</span></Link>
            <Link to="/contact" className="btn-outline" style={{ borderColor: "hsl(var(--background)/0.3)", color: "hsl(var(--background))" }}>
              <span>Contact Events Team</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </>
);

export default MICEPage;