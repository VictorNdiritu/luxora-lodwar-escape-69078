import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Building2, Bed, MapPin, Utensils, Wifi, Car, Users, Mountain, Palmtree, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import deluxeImage from "@/assets/deluxe-double.jpg";
import superiorImage from "@/assets/superior-single.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
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
              Your premier boutique hotel in Lodwar, offering unmatched luxury and convenience just steps away from Lodwar Airport. Experience world-class hospitality in the heart of Turkana County.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
            <div className="text-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
                <Building2 className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">2 Floors</h3>
              <p className="text-muted-foreground">
                Modern architecture designed for comfort
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
                <Bed className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">36 Rooms</h3>
              <p className="text-muted-foreground">
                Deluxe and Superior accommodations
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
                <MapPin className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Prime Location</h3>
              <p className="text-muted-foreground">
                Adjacent to Lodwar Airport
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
              Our Accommodations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully designed Deluxe and Superior rooms, each offering modern amenities and exceptional comfort for your stay.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
            <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <img src={deluxeImage} alt="Deluxe Double Room" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Deluxe Double Room</h3>
                <p className="text-muted-foreground mb-4">
                  Spacious rooms with queen-size beds, modern furnishings, and stunning views. Perfect for couples or guests seeking extra comfort.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 2 Guests • En-suite Bathroom • Smart TV</li>
                  <li>• Mini-fridge • Work Desk • Premium Bedding</li>
                </ul>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <img src={superiorImage} alt="Superior Single Room" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Superior Single Room</h3>
                <p className="text-muted-foreground mb-4">
                  Cozy and elegant single rooms designed for solo travelers, featuring all essential amenities for a comfortable stay.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 1 Guest • En-suite Bathroom • Smart TV</li>
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
            <Link to="/contact">
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
              Enjoy world-class facilities designed to make your stay unforgettable
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mb-3">
                <Utensils className="w-6 h-6 text-accent" />
              </div>
              <p className="text-sm font-semibold text-foreground">Restaurant & Bar</p>
            </div>
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mb-3">
                <Wifi className="w-6 h-6 text-accent" />
              </div>
              <p className="text-sm font-semibold text-foreground">High-Speed WiFi</p>
            </div>
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mb-3">
                <Car className="w-6 h-6 text-accent" />
              </div>
              <p className="text-sm font-semibold text-foreground">Airport Transfer</p>
            </div>
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mb-3">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <p className="text-sm font-semibold text-foreground">24/7 Service</p>
            </div>
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mb-3">
                <Car className="w-6 h-6 text-accent" />
              </div>
              <p className="text-sm font-semibold text-foreground">Free Parking</p>
            </div>
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mb-3">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <p className="text-sm font-semibold text-foreground">Concierge</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Discover Lodwar
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the unique culture, stunning landscapes, and unforgettable adventures that await you in Turkana County
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
            <div className="text-center p-6 rounded-lg bg-card hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
                <Palmtree className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Lake Turkana</h3>
              <p className="text-muted-foreground">
                Visit the world's largest desert lake, a UNESCO World Heritage Site
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Cultural Tours</h3>
              <p className="text-muted-foreground">
                Immerse yourself in the rich heritage of the Turkana people
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
                <Mountain className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Adventure Activities</h3>
              <p className="text-muted-foreground">
                Desert safaris, camel rides, and archaeological site visits
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/experiences">
              <Button variant="outline" size="lg">
                Explore All Experiences
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-accent/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Experience LUXORA?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your stay today and discover why LUXORA is Lodwar's premier boutique hotel destination
          </p>
          <Link to="/contact">
            <Button variant="luxury" size="lg" className="text-lg px-10 py-6">
              Reserve Your Stay
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
