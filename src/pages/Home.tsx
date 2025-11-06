import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { MICE } from "@/components/MICE";
import { Excursions } from "@/components/Excursions";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Bed,
  MapPin,
  Utensils,
  Wifi,
  Car,
  Users,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  // ✅ Image Arrays (using raw GitHub URLs)
  const standardImages = [
    "https://raw.githubusercontent.com/VictorNdiritu/luxora-lodwar-escape-69078/main/src/assets/new-images/superior%20d.png",
    "https://raw.githubusercontent.com/VictorNdiritu/luxora-lodwar-escape-69078/main/src/assets/new-images/sup.png",
    "https://raw.githubusercontent.com/VictorNdiritu/luxora-lodwar-escape-69078/main/src/assets/new-images/sup%20Double.png",
  ];

  const superiorImages = [
    "https://raw.githubusercontent.com/VictorNdiritu/luxora-lodwar-escape-69078/main/src/assets/new-images/sdr.png",
    "https://raw.githubusercontent.com/VictorNdiritu/luxora-lodwar-escape-69078/main/src/assets/new-images/sup%20Double.png",
    "https://raw.githubusercontent.com/VictorNdiritu/luxora-lodwar-escape-69078/main/src/assets/new-images/Superior%20Double%20.png",
  ];

  // ✅ Carousel State
  const [standardIndex, setStandardIndex] = useState(0);
  const [superiorIndex, setSuperiorIndex] = useState(0);

  // ✅ Manual navigation
  const nextImage = (setter, current, total) => {
    setter((current + 1) % total);
  };

  const prevImage = (setter, current, total) => {
    setter((current - 1 + total) % total);
  };

  // ✅ Auto-slide every 4 seconds
  useEffect(() => {
    const standardTimer = setInterval(() => {
      setStandardIndex((prev) => (prev + 1) % standardImages.length);
    }, 4000);

    const superiorTimer = setInterval(() => {
      setSuperiorIndex((prev) => (prev + 1) % superiorImages.length);
    }, 4000);

    return () => {
      clearInterval(standardTimer);
      clearInterval(superiorTimer);
    };
  }, [standardImages.length, superiorImages.length]);

  return (
    <>
      <Helmet>
        <title>
          LUXORA Hotel Lodwar | Boutique Luxury Hotel Adjacent to Lodwar Airport
        </title>
        <meta
          name="description"
          content="Experience luxury at LUXORA Hotel Lodwar - A boutique hotel with 36 elegant rooms adjacent to Lodwar Airport. Featuring Standard, Superior, and Twin accommodations with modern amenities."
        />
        <link rel="canonical" href="https://luxorahotels.co.ke/" />
        <meta
          property="og:title"
          content="LUXORA Hotel Lodwar | Boutique Luxury Hotel"
        />
        <meta
          property="og:description"
          content="Experience luxury at LUXORA Hotel Lodwar - Adjacent to Lodwar Airport in Northern Kenya."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-[#fbfcfb]">
        <Header />
        <Hero />

        {/* About Preview */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Welcome to LUXORA
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Your premier boutique hotel in Lodwar, offering unmatched luxury
                and convenience just steps away from Lodwar Airport. Experience
                world-class hospitality in the heart of Turkana County.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
              <div className="text-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
                  <Building2 className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  2 Floors
                </h3>
                <p className="text-muted-foreground">
                  Modern architecture designed for comfort
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
                  <Bed className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  36 Rooms
                </h3>
                <p className="text-muted-foreground">
                  14 Standard Double, 14 Superior Double & 8 Twin
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
                  <MapPin className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Prime Location
                </h3>
                <p className="text-muted-foreground">
                  Just 10 minutes from Lodwar Airport
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Rooms Preview */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our Accommodation
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from our carefully designed Standard and Superior rooms,
                each offering modern amenities and exceptional comfort for your
                stay.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
              {/* Standard Double Room */}
              <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative">
                <img
                  src={standardImages[standardIndex]}
                  alt="Standard Double Room"
                  className="w-full h-64 object-cover transition-all duration-700 ease-in-out"
                />
                <button
                  onClick={() =>
                    prevImage(
                      setStandardIndex,
                      standardIndex,
                      standardImages.length
                    )
                  }
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
                >
                  ‹
                </button>
                <button
                  onClick={() =>
                    nextImage(
                      setStandardIndex,
                      standardIndex,
                      standardImages.length
                    )
                  }
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
                >
                  ›
                </button>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Standard Double Room
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Spacious rooms with queen-size beds, modern furnishings, and
                    stunning views. Perfect for couples or guests seeking extra
                    comfort.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 2 Guests • En-suite Bathroom • Smart TV</li>
                    <li>• Mini-fridge • Work Desk • Premium Bedding</li>
                  </ul>
                </div>
              </div>

              {/* Superior Double Room */}
              <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative">
                <img
                  src={superiorImages[superiorIndex]}
                  alt="Superior Double Room"
                  className="w-full h-64 object-cover transition-all duration-700 ease-in-out"
                />
                <button
                  onClick={() =>
                    prevImage(
                      setSuperiorIndex,
                      superiorIndex,
                      superiorImages.length
                    )
                  }
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
                >
                  ‹
                </button>
                <button
                  onClick={() =>
                    nextImage(
                      setSuperiorIndex,
                      superiorIndex,
                      superiorImages.length
                    )
                  }
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
                >
                  ›
                </button>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Superior Double Room
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Elegant and spacious, our Superior Double Rooms offer
                    refined comfort, plush bedding, and serene ambiance ideal
                    for business or leisure.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 2 Guests • En-suite Bathroom • Smart TV</li>
                    <li>• Mini-fridge • Work Desk • Premium Bedding</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link to="/rooms">
                <Button variant="outline" size="lg" className="mr-4">
                  View All Rooms
                </Button>
              </Link>
              <Link to="/reservations">
                <Button variant="luxury" size="lg">
                  Reserve Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Amenities Preview */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Premium Amenities
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Enjoy world-class facilities designed to make your stay
                unforgettable
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              <div className="text-center p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mb-3">
                  <Utensils className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm font-semibold text-foreground">
                  Restaurant & Bar
                </p>
              </div>
              <div className="text-center p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mb-3">
                  <Wifi className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm font-semibold text-foreground">
                  High-Speed WiFi
                </p>
              </div>
              <div className="text-center p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mb-3">
                  <Car className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm font-semibold text-foreground">
                  Airport Transfer
                </p>
              </div>
              <div className="text-center p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mb-3">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm font-semibold text-foreground">
                  24/7 Service
                </p>
              </div>
              <div className="text-center p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mb-3">
                  <Car className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm font-semibold text-foreground">
                  Free Parking
                </p>
              </div>
              <div className="text-center p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mb-3">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm font-semibold text-foreground">
                  Concierge
                </p>
              </div>
            </div>
          </div>
        </section>

        <Excursions />
        <MICE />

        {/* CTA */}
        <section className="py-20 bg-gradient-to-b from-accent/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Experience LUXORA?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book your stay today and discover why LUXORA is Lodwar's premier
              boutique hotel destination.
            </p>
            <Link to="/reservations">
              <Button variant="luxury" size="lg" className="text-lg px-10 py-6">
                Reserve Your Stay
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
