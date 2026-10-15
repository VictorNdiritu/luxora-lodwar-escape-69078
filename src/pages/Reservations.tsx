import { Helmet } from "react-helmet";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BannerHero } from "@/components/PageHero";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import heroImg from "@/assets/hero-hotel.jpg";
import { Bed, Calendar, Users, CheckCircle2, ShieldCheck, Clock, Phone, Mail } from "lucide-react";

const ROOM_OPTIONS = [
  { id: "standard-double", name: "Standard Double Room", count: "14 available", guests: "Up to 2 Guests", bed: "Queen-size Bed" },
  { id: "superior-double", name: "Superior Double Room", count: "14 available", guests: "Up to 2 Guests", bed: "King-size Bed" },
  { id: "twin",            name: "Standard Twin Room",   count: "8 available",  guests: "Up to 2 Guests", bed: "Twin Single Beds" },
];

const Reservations = () => {
  const [searchParams] = useSearchParams();
  const initialRoom = searchParams.get("room") || "";

  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    roomType: initialRoom || "superior-double",
    guests: "2",
    specialRequests: "",
  });

  useEffect(() => {
    if (initialRoom) {
      setFormData((prev) => ({ ...prev, roomType: initialRoom }));
    }
  }, [initialRoom]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    let supabaseError = false;
    try {
      const { error } = await supabase.from("reservation_requests").insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        check_in: formData.checkIn,
        check_out: formData.checkOut,
        room_type: formData.roomType,
        guests: Number(formData.guests) || 1,
        special_requests: formData.specialRequests || null,
      });
      if (error) supabaseError = true;
    } catch {
      supabaseError = true;
    }

    // Also deliver the reservation request by email via Formspree
    let formspreeOk = false;
    try {
      const formspree = await fetch("https://formspree.io/f/xbgloazd", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "New reservation request — Luxora Hotel, Lodwar",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          check_in: formData.checkIn,
          check_out: formData.checkOut,
          room_type: formData.roomType,
          guests: formData.guests,
          special_requests: formData.specialRequests,
        }),
      });
      formspreeOk = formspree.ok;
    } catch {
      formspreeOk = false;
    }

    setSubmitting(false);

    if (supabaseError && !formspreeOk) {
      toast({
        title: "Reservation not sent",
        description: "Something went wrong. Please call our direct concierge line at +254 110 463 062.",
        variant: "destructive",
      });
      return;
    }

    setSubmitted(true);
    toast({
      title: "Reservation Request Received",
      description: "Our concierge team will contact you within 24 hours to confirm your reservation.",
    });
  };

  const selectedRoomDetails = ROOM_OPTIONS.find((r) => r.id === formData.roomType) || ROOM_OPTIONS[1];

  return (
    <>
      <Helmet>
        <title>Make a Reservation | Luxora Hotel, Lodwar</title>
        <meta
          name="description"
          content="Reserve your stay at Luxora Hotel Lodwar. Select from our Standard Double, Superior Double, or Standard Twin rooms. Dedicated concierge, flexible check-in and bespoke desert hospitality."
        />
        <link rel="canonical" href="https://luxorahotels.co.ke/reservations" />
        <meta property="og:title" content="Make a Reservation | Luxora Hotel, Lodwar" />
        <meta property="og:description" content="Direct booking request for Luxora Hotel, Lodwar — Northern Kenya's premier luxury boutique destination." />
        <meta property="og:type" content="website" />
      </Helmet>

      <ScrollReveal />
      <div className="min-h-screen bg-[hsl(var(--background))]">
        <Header />

        <BannerHero
          eyebrow="Direct Reservations"
          headline="Reserve Your Stay"
          image={heroImg}
          imageAlt="Luxora Hotel Lodwar — Booking & Reservations"
        />

        <section className="section-pad">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

              {/* Form column (7 cols) */}
              <div className="lg:col-span-7">
                {submitted ? (
                  <div className="bg-[hsl(var(--card))] border border-[hsl(var(--accent))/0.3] p-10 md:p-14 text-center reveal">
                    <div className="w-16 h-16 rounded-full bg-[hsl(var(--accent))/0.1] text-[hsl(var(--accent))] flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <p className="text-eyebrow text-[hsl(var(--accent))] mb-3" style={{ letterSpacing: "0.22em" }}>
                      Request Received
                    </p>
                    <h2 className="text-display text-2xl md:text-3xl mb-4">
                      Thank You, {formData.name}
                    </h2>
                    <span className="gold-rule-center" />
                    <p className="text-lead text-[hsl(var(--muted-foreground))] mb-6 max-w-md mx-auto">
                      Your booking enquiry for the <strong>{selectedRoomDetails.name}</strong> has been transmitted directly to our front desk and reservations team.
                    </p>
                    <p className="text-sm text-[hsl(var(--muted-foreground))] mb-8 max-w-md mx-auto">
                      We will review room availability for {formData.checkIn || "your dates"} and reach out via phone ({formData.phone}) or email ({formData.email}) within 24 hours to confirm your reservation details and payment arrangements.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            checkIn: "",
                            checkOut: "",
                            roomType: "superior-double",
                            guests: "2",
                            specialRequests: "",
                          });
                        }}
                        className="btn-outline text-xs"
                      >
                        <span>Submit Another Enquiry</span>
                      </button>
                      <Link to="/" className="btn-primary text-xs">
                        <span>Return to Home</span>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-8 md:p-12 reveal">
                    <div className="mb-8">
                      <p className="text-eyebrow text-[hsl(var(--accent))] mb-2" style={{ letterSpacing: "0.22em" }}>
                        Enquiry Form
                      </p>
                      <h2 className="text-display text-2xl md:text-3xl">Guest & Stay Details</h2>
                      <span className="gold-rule" />
                      <p className="text-sm text-[hsl(var(--muted-foreground))] mt-3">
                        Please provide your intended travel dates and accommodation preferences. All fields marked with * are required.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Section: Guest Information */}
                      <div>
                        <p className="text-xs font-semibold tracking-wider uppercase text-[hsl(var(--foreground))] mb-4 flex items-center gap-2">
                          <Users className="w-4 h-4 text-[hsl(var(--accent))]" />
                          1. Guest Information
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-xs font-medium text-[hsl(var(--foreground))] mb-1.5 uppercase tracking-wider">
                              Full Name *
                            </label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              placeholder="e.g. Dr. Jane Doe"
                              className="input-luxury"
                            />
                          </div>

                          <div>
                            <label htmlFor="email" className="block text-xs font-medium text-[hsl(var(--foreground))] mb-1.5 uppercase tracking-wider">
                              Email Address *
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              placeholder="name@organization.org"
                              className="input-luxury"
                            />
                          </div>

                          <div>
                            <label htmlFor="phone" className="block text-xs font-medium text-[hsl(var(--foreground))] mb-1.5 uppercase tracking-wider">
                              Phone / WhatsApp *
                            </label>
                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              placeholder="+254 700 000 000"
                              className="input-luxury"
                            />
                          </div>

                          <div>
                            <label htmlFor="guests" className="block text-xs font-medium text-[hsl(var(--foreground))] mb-1.5 uppercase tracking-wider">
                              Number of Guests *
                            </label>
                            <select
                              id="guests"
                              name="guests"
                              value={formData.guests}
                              onChange={handleChange}
                              required
                              className="input-luxury"
                            >
                              <option value="1">1 Guest (Single Occupancy)</option>
                              <option value="2">2 Guests (Double / Twin)</option>
                              <option value="3">3 Guests (With extra arrangement)</option>
                              <option value="4">4 Guests (Multiple Rooms)</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Section: Stay Details */}
                      <div className="pt-4 border-t border-[hsl(var(--border))]">
                        <p className="text-xs font-semibold tracking-wider uppercase text-[hsl(var(--foreground))] mb-4 flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[hsl(var(--accent))]" />
                          2. Stay Details
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="checkIn" className="block text-xs font-medium text-[hsl(var(--foreground))] mb-1.5 uppercase tracking-wider">
                              Check-in Date *
                            </label>
                            <input
                              id="checkIn"
                              name="checkIn"
                              type="date"
                              value={formData.checkIn}
                              onChange={handleChange}
                              required
                              className="input-luxury"
                            />
                          </div>

                          <div>
                            <label htmlFor="checkOut" className="block text-xs font-medium text-[hsl(var(--foreground))] mb-1.5 uppercase tracking-wider">
                              Check-out Date *
                            </label>
                            <input
                              id="checkOut"
                              name="checkOut"
                              type="date"
                              value={formData.checkOut}
                              onChange={handleChange}
                              required
                              className="input-luxury"
                            />
                          </div>

                          <div className="md:col-span-2">
                            <label htmlFor="roomType" className="block text-xs font-medium text-[hsl(var(--foreground))] mb-1.5 uppercase tracking-wider">
                              Select Room Type *
                            </label>
                            <select
                              id="roomType"
                              name="roomType"
                              value={formData.roomType}
                              onChange={handleChange}
                              required
                              className="input-luxury"
                            >
                              {ROOM_OPTIONS.map((room) => (
                                <option key={room.id} value={room.id}>
                                  {room.name} — ({room.count}) — {room.bed}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Section: Special Requests */}
                      <div className="pt-4 border-t border-[hsl(var(--border))]">
                        <label htmlFor="specialRequests" className="block text-xs font-medium text-[hsl(var(--foreground))] mb-1.5 uppercase tracking-wider">
                          Special Requests & Airport Transfer Notes
                        </label>
                        <textarea
                          id="specialRequests"
                          name="specialRequests"
                          value={formData.specialRequests}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Please note flight arrival times, dietary preferences, extra bedding needs, or conference room requirements..."
                          className="input-luxury resize-y"
                        />
                      </div>

                      {/* Submit */}
                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={submitting}
                          className="btn-gold w-full flex items-center justify-center py-4 text-xs tracking-[0.2em]"
                        >
                          <span>{submitting ? "Transmitting Reservation Request..." : "Submit Reservation Request"}</span>
                        </button>
                        <p className="text-center text-xs text-[hsl(var(--muted-foreground))] mt-3">
                          No payment is required today. Our reservations manager will confirm availability directly.
                        </p>
                      </div>
                    </form>
                  </div>
                )}
              </div>

              {/* Sidebar column (5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-8">

                {/* Selected Room Preview */}
                <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-8 reveal">
                  <p className="text-eyebrow text-[hsl(var(--accent))] mb-2" style={{ letterSpacing: "0.2em" }}>
                    Selected Room
                  </p>
                  <h3 className="text-headline text-xl mb-3">{selectedRoomDetails.name}</h3>
                  <span className="gold-rule" />
                  <div className="space-y-3 text-sm text-[hsl(var(--muted-foreground))] mt-4">
                    <div className="flex items-center gap-3">
                      <Bed className="w-4 h-4 text-[hsl(var(--accent))]" />
                      <span>{selectedRoomDetails.bed}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-4 h-4 text-[hsl(var(--accent))]" />
                      <span>{selectedRoomDetails.guests}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-4 h-4 text-[hsl(var(--accent))]" />
                      <span>Air conditioning, ensuite bath & high-speed WiFi</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-[hsl(var(--border))]">
                    <Link to="/rooms" className="text-xs text-[hsl(var(--accent))] hover:underline tracking-wider uppercase">
                      ← View all 36 rooms & suites
                    </Link>
                  </div>
                </div>

                {/* Reservation Policies Card */}
                <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-8 reveal">
                  <p className="text-eyebrow text-[hsl(var(--accent))] mb-2" style={{ letterSpacing: "0.2em" }}>
                    Terms & Timings
                  </p>
                  <h3 className="text-headline text-xl mb-3">Booking Information</h3>
                  <span className="gold-rule" />

                  <div className="space-y-4 text-xs font-light text-[hsl(var(--muted-foreground))] mt-4 leading-relaxed">
                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-[hsl(var(--accent))] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[hsl(var(--foreground))]">Check-in:</strong> 2:00 PM <br />
                        <strong className="text-[hsl(var(--foreground))]">Check-out:</strong> 11:00 AM <br />
                        <span className="text-[0.7rem] opacity-80">Early arrival and late departure subject to flight schedules and availability.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-4 h-4 text-[hsl(var(--accent))] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[hsl(var(--foreground))]">Cancellation Policy:</strong> Cancellations made at least 48 hours prior to arrival incur no cancellation penalties.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Assistance */}
                <div className="bg-[hsl(var(--foreground))] text-[hsl(var(--background))] p-8 reveal">
                  <p className="text-eyebrow text-[hsl(var(--accent))] mb-2" style={{ letterSpacing: "0.2em" }}>
                    Need Immediate Assistance?
                  </p>
                  <h3 className="font-serif text-xl mb-4 font-normal">Contact Direct Concierge</h3>
                  <p className="text-xs text-[hsl(var(--background))/0.6] leading-relaxed mb-6">
                    Our reservations desk is located adjacent to Lodwar Airport and is available for corporate bookings, long stays, and airport transfers.
                  </p>
                  <div className="space-y-3 text-xs">
                    <a
                      href="tel:+254110463062"
                      className="flex items-center gap-3 text-[hsl(var(--background))/0.85] hover:text-[hsl(var(--accent))] transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[hsl(var(--accent))]" />
                      <span>+254 110 463 062</span>
                    </a>
                    <a
                      href="mailto:info@luxorahotels.co.ke"
                      className="flex items-center gap-3 text-[hsl(var(--background))/0.85] hover:text-[hsl(var(--accent))] transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[hsl(var(--accent))]" />
                      <span>info@luxorahotels.co.ke</span>
                    </a>
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

export default Reservations;
