import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Camera, Users, Mountain, Palmtree, Compass } from "lucide-react";

export const Excursions = () => {
  const excursions = [
    {
      icon: Palmtree,
      title: "Lake Turkana",
      description: "Visit the world's largest desert lake, a UNESCO World Heritage Site with stunning jade-colored waters.",
      duration: "Full Day"
    },
    {
      icon: Mountain,
      title: "Central Island National Park",
      description: "Explore volcanic islands and witness diverse birdlife including flamingos and crocodiles.",
      duration: "Full Day"
    },
    {
      icon: Users,
      title: "Turkana Cultural Village",
      description: "Immerse yourself in the rich traditions, music, and crafts of the Turkana people.",
      duration: "Half Day"
    },
    {
      icon: Compass,
      title: "Eliye Springs",
      description: "Relax at pristine beaches with crystal-clear waters perfect for swimming and water sports.",
      duration: "Full Day"
    },
    {
      icon: Camera,
      title: "Lodwar Town & Market",
      description: "Experience local life, vibrant markets, and authentic Turkana cuisine and handicrafts.",
      duration: "Half Day"
    },
    {
      icon: Mountain,
      title: "Desert Safaris",
      description: "Adventure through dramatic landscapes with camel rides and visits to ancient standing stones.",
      duration: "Full Day"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Discover Turkana
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Unforgettable Excursions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore the unique culture, stunning landscapes, and unforgettable adventures that await you in Northern Kenya. Our concierge team can arrange all tours and experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {excursions.map((excursion, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/20 mb-4">
                <excursion.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {excursion.title}
              </h3>
              <p className="text-muted-foreground mb-3">
                {excursion.description}
              </p>
              <div className="flex items-center text-sm text-accent font-semibold">
                <MapPin className="w-4 h-4 mr-1" />
                {excursion.duration}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/experiences">
            <Button variant="outline" size="lg" className="mr-4">
              View All Experiences
            </Button>
          </Link>
          <Link to="/reservations">
            <Button variant="luxury" size="lg">
              Book Your Adventure
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};