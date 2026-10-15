import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BannerHero } from "@/components/PageHero";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import heroImg from "@/assets/hero-hotel.jpg";

const ContactPage = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const { error } = await supabase.from("contact_submissions").insert({
      name: formData.name, email: formData.email,
      phone: formData.phone, message: formData.message,
    });

    const formspree = await fetch("https://formspree.io/f/xbgloazd", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: "New website enquiry — Luxora Hotel, Lodwar",
        ...formData,
      }),
    });

    setSubmitting(false);

    if (error && !formspree.ok) {
      toast({ title: "Message not sent", description: "Something went wrong. Please call us on +254 110 463 062.", variant: "destructive" });
      return;
    }

    setSent(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    toast({ title: "Message Received", description: "We will respond within 24 hours." });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Luxora Hotel, Lodwar — Reservations & Enquiries</title>
        <meta name="description" content="Contact Luxora Hotel, Lodwar for reservations and enquiries. Located adjacent to Lodwar Airport. Phone: +254 110 463 062 | Email: info@luxorahotels.co.ke" />
        <link rel="canonical" href="https://luxorahotels.co.ke/contact" />
        <meta property="og:title" content="Contact Luxora Hotel, Lodwar" />
        <meta property="og:type" content="website" />
      </Helmet>

      <ScrollReveal />
      <div className="min-h-screen">
        <Header />

        <BannerHero
          eyebrow="Get in Touch"
          headline="Contact Us"
          image={heroImg}
          imageAlt="Luxora Hotel, Lodwar"
        />

        {/* Contact grid */}
        <section className="section-pad bg-[hsl(var(--background))]">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-16">

              {/* Info column */}
              <div className="reveal">
                <p className="text-eyebrow text-[hsl(var(--accent))] mb-5" style={{ letterSpacing: "0.25em" }}>Contact Information</p>
                <h2 className="text-headline mb-6">We'd Love to Hear From You</h2>
                <span className="gold-rule" />

                <div className="space-y-8 mt-8">
                  {[
                    { label: "Address",   value: "Adjacent to Lodwar Airport\nLodwar, Turkana County, Kenya" },
                    { label: "Phone",     value: "+254 110 463 062", href: "tel:+254110463062" },
                    { label: "Email",     value: "info@luxorahotels.co.ke", href: "mailto:info@luxorahotels.co.ke" },
                    { label: "Check-in",  value: "2:00 PM" },
                    { label: "Check-out", value: "11:00 AM" },
                  ].map(({ label, value, href }) => (
                    <div key={label} className="flex gap-6">
                      <p className="text-eyebrow text-[hsl(var(--muted-foreground))] w-24 flex-shrink-0 mt-0.5" style={{ fontSize: "0.55rem", letterSpacing: "0.18em" }}>
                        {label}
                      </p>
                      {href ? (
                        <a href={href} className="font-serif text-lg font-light link-underline whitespace-pre-line leading-snug">
                          {value}
                        </a>
                      ) : (
                        <p className="font-serif text-lg font-light whitespace-pre-line leading-snug">{value}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Travel Info */}
                <div className="mt-12 border-t border-[hsl(var(--border))] pt-8 space-y-5 text-sm font-light text-[hsl(var(--muted-foreground))]">
                  <h3 className="font-serif text-xl text-[hsl(var(--foreground))] font-light mb-4">Getting Here</h3>
                  {[
                    { label: "By Air",       text: "Daily flights from Nairobi (approx. 1.5 hours). Free airport shuttle 24/7." },
                    { label: "By Road",      text: "Via the A1 Highway from Kitale — approx. 12 hours. Charter flights also available." },
                    { label: "Currency",     text: "Kenyan Shilling (KES). International cards accepted." },
                    { label: "Best Season",  text: "June to September — cooler, dry season." },
                  ].map(({ label, text }) => (
                    <div key={label} className="flex gap-4">
                      <span className="font-medium text-[hsl(var(--foreground))] w-28 flex-shrink-0">{label}</span>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>

                {/* Packing tips */}
                <div className="mt-8 border-t border-[hsl(var(--border))] pt-8 grid grid-cols-2 gap-6 text-sm font-light text-[hsl(var(--muted-foreground))]">
                  <div>
                    <h4 className="font-medium text-[hsl(var(--foreground))] mb-3">What to Pack</h4>
                    <ul className="space-y-1">
                      {["Light, breathable clothing", "Sun protection (hat, sunscreen)", "Comfortable walking shoes", "Camera for wildlife photography", "Reusable water bottle", "Power adapter (UK plugs)"].map((i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-3 h-px bg-[hsl(var(--accent))] flex-shrink-0 mt-2.5" />
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-[hsl(var(--foreground))] mb-3">Health & Safety</h4>
                    <ul className="space-y-1">
                      {["Stay hydrated in the dry climate", "Malaria prophylaxis recommended", "Travel insurance advised", "24/7 medical support available", "Yellow fever vaccination required", "Keep valuables in room safe"].map((i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-3 h-px bg-[hsl(var(--accent))] flex-shrink-0 mt-2.5" />
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Form column */}
              <div className="reveal">
                <p className="text-eyebrow text-[hsl(var(--accent))] mb-5" style={{ letterSpacing: "0.25em" }}>Send a Message</p>
                <h2 className="text-headline mb-6">Make an Enquiry</h2>
                <span className="gold-rule" />

                {sent ? (
                  <div className="mt-8 border border-[hsl(var(--accent))] p-8 text-center">
                    <p className="font-serif text-2xl text-[hsl(var(--foreground))] mb-3 font-light">Thank You</p>
                    <p className="text-lead text-[hsl(var(--muted-foreground))]">
                      Your message has been received. We will be in touch within 24 hours.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="btn-outline mt-6"
                    >
                      <span>Send Another</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
                    {[
                      { id: "name",    label: "Full Name",      type: "text",  placeholder: "Your full name",     required: true },
                      { id: "email",   label: "Email Address",  type: "email", placeholder: "your@email.com",     required: true },
                      { id: "phone",   label: "Phone Number",   type: "tel",   placeholder: "+254 XXX XXX XXX",   required: true },
                    ].map(({ id, label, type, placeholder, required }) => (
                      <div key={id}>
                        <label htmlFor={id} className="block text-eyebrow text-[hsl(var(--foreground))] mb-2" style={{ fontSize: "0.6rem", letterSpacing: "0.18em" }}>
                          {label}{required && " *"}
                        </label>
                        <input
                          id={id} name={id} type={type} required={required}
                          value={(formData as any)[id]}
                          onChange={handleChange}
                          placeholder={placeholder}
                          className="w-full border border-[hsl(var(--border))] bg-transparent px-4 py-3 text-sm font-light outline-none transition-colors focus:border-[hsl(var(--accent))] placeholder:text-[hsl(var(--muted-foreground))/0.5]"
                        />
                      </div>
                    ))}
                    <div>
                      <label htmlFor="message" className="block text-eyebrow text-[hsl(var(--foreground))] mb-2" style={{ fontSize: "0.6rem", letterSpacing: "0.18em" }}>
                        Message *
                      </label>
                      <textarea
                        id="message" name="message" required rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your booking requirements, special requests or any questions…"
                        className="w-full border border-[hsl(var(--border))] bg-transparent px-4 py-3 text-sm font-light outline-none transition-colors focus:border-[hsl(var(--accent))] placeholder:text-[hsl(var(--muted-foreground))/0.5] resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary w-full justify-center"
                    >
                      <span>{submitting ? "Sending…" : "Send Message"}</span>
                    </button>
                    <p className="text-xs font-light text-[hsl(var(--muted-foreground))] text-center">
                      Or call us directly: <a href="tel:+254110463062" className="link-underline">+254 110 463 062</a>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="bg-[hsl(var(--muted))]">
          <div className="relative overflow-hidden" style={{ height: "380px" }}>
            <iframe
              title="Luxora Hotel map"
              src="https://maps.google.com/maps?q=Lodwar+Airport,+Kenya&output=embed&z=14"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
