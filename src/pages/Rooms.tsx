import { Header } from "@/components/Header";
import { Rooms } from "@/components/Rooms";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Shield, Clock, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet";

const RoomsPage = () => {
  return (
    <>
      <Helmet>
        <title>Rooms & Accommodation | LUXORA Hotel Lodwar</title>
        <meta name="description" content="Explore our Standard Double, Superior Double, and Standard Twin rooms. Each room features air conditioning, en-suite bathroom, free WiFi, and modern amenities." />
        <link rel="canonical" href="https://luxorahotels.co.ke/rooms" />
        <meta property="og:title" content="Rooms & Accommodation | LUXORA Hotel Lodwar" />
        <meta property="og:description" content="Discover our elegant rooms with modern amenities and exceptional comfort." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen">
      <Header />
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-accent/20 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Accommodation at LUXORA
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Choose from our thoughtfully designed rooms, each offering modern amenities, premium comfort, and the warm hospitality that defines the LUXORA experience. Whether traveling for business or leisure, we have the perfect space for your stay.
            </p>
          </div>
        </section>

        <Rooms />

        {/* Room Inclusions Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Every Room Includes
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
                  <Check className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Daily Housekeeping</h3>
                <p className="text-muted-foreground">
                  Professional cleaning service to ensure your room is always pristine
                </p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Safe & Secure</h3>
                <p className="text-muted-foreground">
                  In-room safe, 24-hour security, and CCTV surveillance throughout
                </p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">24/7 Service</h3>
                <p className="text-muted-foreground">
                  Round-the-clock room service, front desk, and concierge assistance
                </p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
                  <Sparkles className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Premium Amenities</h3>
                <p className="text-muted-foreground">
                  High-speed WiFi, Smart TV, mini-fridge, and luxury toiletries
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Policies Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                Booking Information
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-4">Check-In / Check-Out</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                      <span>Check-in: 2:00 PM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                      <span>Check-out: 11:00 AM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                      <span>Early check-in subject to availability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                      <span>Late check-out available upon request</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-4">Cancellation Policy</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                      <span>Free cancellation up to 48 hours before arrival</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                      <span>One night charge for late cancellations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                      <span>No-shows will be charged full stay amount</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                      <span>Payment required at time of booking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-accent/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Book Your Stay?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Reserve your room today and experience the finest accommodation in Lodwar. Our team is ready to welcome you.
            </p>
            <Link to="/reservations">
              <Button variant="luxury" size="lg" className="text-lg px-10 py-6">
                Reserve Now
              </Button>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default RoomsPage;
