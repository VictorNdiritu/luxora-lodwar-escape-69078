import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Plane, Clock, MapPin, Info } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24">
        {/* Travel Info Section */}
        <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Travel Information
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know for your visit to LUXORA Hotel Lodwar
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
              <div className="text-center p-6 rounded-lg bg-card hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
                  <Plane className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Airport Access</h3>
                <p className="text-muted-foreground">
                  2 minutes walk from Lodwar Airport. Free airport shuttle available 24/7.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-card hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Check-In/Out</h3>
                <p className="text-muted-foreground">
                  Check-in: 2:00 PM<br />
                  Check-out: 11:00 AM<br />
                  Early check-in available
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-card hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
                  <MapPin className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Getting There</h3>
                <p className="text-muted-foreground">
                  Daily flights from Nairobi (1.5 hours). Road access via A1 Highway from Kitale.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-card hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
                  <Info className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Local Info</h3>
                <p className="text-muted-foreground">
                  Currency: Kenyan Shilling (KES)<br />
                  Climate: Hot and dry<br />
                  Best time: June - September
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-lg mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">Important Travel Tips</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">What to Pack</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Light, breathable clothing</li>
                    <li>• Sun protection (hat, sunscreen)</li>
                    <li>• Comfortable walking shoes</li>
                    <li>• Camera for wildlife photography</li>
                    <li>• Reusable water bottle</li>
                    <li>• Power adapter (UK-style plugs)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Health & Safety</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Stay hydrated in the dry climate</li>
                    <li>• Malaria prophylaxis recommended</li>
                    <li>• Travel insurance advised</li>
                    <li>• 24/7 medical support available</li>
                    <li>• Yellow fever vaccination required</li>
                    <li>• Keep valuables in room safe</li>
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-border pt-6">
                <h4 className="font-semibold text-foreground mb-3">Transportation Options</h4>
                <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground mb-2">From Nairobi</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Daily flights: 1.5 hours</li>
                      <li>• Road via A1 Highway: ~12 hours</li>
                      <li>• Charter flights available</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-2">Local Transport</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Hotel airport shuttle (free)</li>
                      <li>• Car rental services available</li>
                      <li>• Guided tour transportation included</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#contact">
                <Button variant="luxury" size="lg" className="text-lg px-10 py-6">
                  Make a Reservation
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
