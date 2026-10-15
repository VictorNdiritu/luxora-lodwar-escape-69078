import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BannerHero } from "@/components/PageHero";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import heroImg from "@/assets/hero-hotel.jpg";
import { Clock, ShieldCheck, CreditCard, Users, FileText, Phone, Mail } from "lucide-react";

const Policies = () => {
  return (
    <>
      <Helmet>
        <title>Hotel Policies & Terms of Stay | Luxora Hotel, Lodwar</title>
        <meta
          name="description"
          content="Review the guest policies and terms of stay at Luxora Hotel Lodwar: check-in/out times, 48-hour cancellation terms, payment guidelines, and guest privacy standards."
        />
        <link rel="canonical" href="https://luxorahotels.co.ke/policies" />
        <meta property="og:title" content="Hotel Policies | Luxora Hotel, Lodwar" />
        <meta property="og:description" content="Guest policies, cancellation rules, and terms of stay at Luxora Hotel Lodwar." />
        <meta property="og:type" content="website" />
      </Helmet>

      <ScrollReveal />
      <div className="min-h-screen bg-[hsl(var(--background))]">
        <Header />

        <BannerHero
          eyebrow="Guest Guidelines"
          headline="Hotel Policies & Terms"
          image={heroImg}
          imageAlt="Luxora Hotel Lodwar Policies"
        />

        <main className="section-pad">
          <div className="container mx-auto px-6 max-w-4xl">

            {/* Intro */}
            <div className="mb-14 text-center reveal">
              <p className="text-eyebrow text-[hsl(var(--accent))] mb-3" style={{ letterSpacing: "0.22em" }}>
                Comfort, Safety & Transparency
              </p>
              <h2 className="text-headline mb-4">Our Commitment to Your Peace of Mind</h2>
              <span className="gold-rule-center" />
              <p className="text-sm font-light text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto leading-relaxed">
                To preserve the tranquil ambiance, privacy, and impeccable service standards that define Luxora Hotel Lodwar, we kindly ask our guests and conference delegates to observe the following property policies.
              </p>
            </div>

            {/* Policies Accordion / Cards */}
            <div className="space-y-10">

              {/* 1. Timings & Check-in / Out */}
              <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-8 md:p-10 reveal">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-[hsl(var(--accent))]" />
                  <h3 className="font-serif text-2xl font-light text-[hsl(var(--foreground))]">
                    1. Check-in & Check-out Timings
                  </h3>
                </div>
                <div className="space-y-3 text-xs font-light text-[hsl(var(--muted-foreground))] leading-relaxed">
                  <p>
                    <strong className="text-[hsl(var(--foreground))]">Standard Check-in Time:</strong> 2:00 PM (14:00 EAT). Early check-in is facilitated subject to room availability upon arrival. If arriving on an early morning flight into Lodwar Airport, please notify our concierge desk in advance.
                  </p>
                  <p>
                    <strong className="text-[hsl(var(--foreground))]">Standard Check-out Time:</strong> 11:00 AM (11:00 EAT). Late check-out requests may be accommodated depending on impending arrivals and flight connection timings.
                  </p>
                  <p>
                    <strong className="text-[hsl(var(--foreground))]">Luggage Storage:</strong> Complimentary secure luggage storage is available at the front desk for arriving or departing guests who wish to explore Lodwar prior to room readiness or flight departures.
                  </p>
                </div>
              </div>

              {/* 2. Cancellation & Amendments */}
              <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-8 md:p-10 reveal">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="w-5 h-5 text-[hsl(var(--accent))]" />
                  <h3 className="font-serif text-2xl font-light text-[hsl(var(--foreground))]">
                    2. Cancellation & Amendment Policy
                  </h3>
                </div>
                <div className="space-y-3 text-xs font-light text-[hsl(var(--muted-foreground))] leading-relaxed">
                  <p>
                    <strong className="text-[hsl(var(--foreground))]">Standard Individual Reservations:</strong> Cancellations or modifications submitted at least <strong>48 hours</strong> prior to scheduled arrival (2:00 PM local time) incur no cancellation penalties.
                  </p>
                  <p>
                    <strong className="text-[hsl(var(--foreground))]">Late Cancellations & No-Shows:</strong> Cancellations made within 48 hours of scheduled check-in, or failure to arrive without prior notification, are subject to a fee equivalent to the first night's room rate.
                  </p>
                  <p>
                    <strong className="text-[hsl(var(--foreground))]">Group & Corporate Bookings:</strong> Block bookings, conference retreats, and NGO group contracts follow tailored cancellation schedules outlined in your event memorandum.
                  </p>
                </div>
              </div>

              {/* 3. Payment Methods */}
              <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-8 md:p-10 reveal">
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="w-5 h-5 text-[hsl(var(--accent))]" />
                  <h3 className="font-serif text-2xl font-light text-[hsl(var(--foreground))]">
                    3. Payment Guidelines
                  </h3>
                </div>
                <div className="space-y-3 text-xs font-light text-[hsl(var(--muted-foreground))] leading-relaxed">
                  <p>
                    We accept major credit and debit cards (Visa, MasterCard), MPESA mobile payments, direct corporate bank wire transfers, and cash payments at the front desk.
                  </p>
                  <p>
                    Corporate billing arrangements and Local Purchase Orders (LPOs) are accepted for pre-approved corporate organizations, non-governmental missions, and state agencies with existing accounts.
                  </p>
                </div>
              </div>

              {/* 4. Guest Conduct & Quiet Hours */}
              <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-8 md:p-10 reveal">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-5 h-5 text-[hsl(var(--accent))]" />
                  <h3 className="font-serif text-2xl font-light text-[hsl(var(--foreground))]">
                    4. Property Environment & Quiet Hours
                  </h3>
                </div>
                <div className="space-y-3 text-xs font-light text-[hsl(var(--muted-foreground))] leading-relaxed">
                  <p>
                    <strong className="text-[hsl(var(--foreground))]">Smoke-Free Environment:</strong> In accordance with hospitality wellness standards, all indoor guest rooms, suites, and interior conference halls are strictly non-smoking. Designated outdoor smoking zones are provided on the property grounds.
                  </p>
                  <p>
                    <strong className="text-[hsl(var(--foreground))]">Quiet Hours:</strong> To ensure restful sleep for all travelers, quiet hours are observed across accommodation corridors from 10:30 PM until 6:00 AM daily.
                  </p>
                  <p>
                    <strong className="text-[hsl(var(--foreground))]">Security & Identification:</strong> All adult guests are required to present a valid government-issued photo ID or passport upon check-in for guest registration compliance.
                  </p>
                </div>
              </div>

              {/* 5. Privacy & Data Protection */}
              <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-8 md:p-10 reveal">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-5 h-5 text-[hsl(var(--accent))]" />
                  <h3 className="font-serif text-2xl font-light text-[hsl(var(--foreground))]">
                    5. Privacy & Data Confidentiality
                  </h3>
                </div>
                <div className="space-y-3 text-xs font-light text-[hsl(var(--muted-foreground))] leading-relaxed">
                  <p>
                    Luxora Hotel respects your confidentiality. Guest personal details, contact information, and travel dates collected during reservation and stay are held securely in compliance with the Kenya Data Protection Act 2019 and are never traded, sold, or shared with unauthorized third parties.
                  </p>
                </div>
              </div>

            </div>

            {/* Contact Box */}
            <div className="mt-14 bg-[hsl(var(--foreground))] text-[hsl(var(--background))] p-8 md:p-10 text-center reveal">
              <p className="text-eyebrow text-[hsl(var(--accent))] mb-2" style={{ letterSpacing: "0.22em" }}>
                Questions or Special Circumstances?
              </p>
              <h3 className="font-serif text-2xl font-light text-white mb-4">
                Our Front Desk is at Your Service
              </h3>
              <p className="text-xs text-[hsl(var(--background))/0.65] max-w-md mx-auto mb-6">
                If you have specific travel requirements or need policy clarifications for your delegation, please contact us directly.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xs">
                <a
                  href="tel:+254110463062"
                  className="flex items-center gap-2 text-[hsl(var(--accent))] hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  <span>+254 110 463 062</span>
                </a>
                <a
                  href="mailto:info@luxorahotels.co.ke"
                  className="flex items-center gap-2 text-[hsl(var(--accent))] hover:underline"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@luxorahotels.co.ke</span>
                </a>
              </div>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Policies;
