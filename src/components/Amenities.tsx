import { Utensils, Wifi, Car, Dumbbell, Coffee, Shield } from "lucide-react";
import amenitiesImage from "@/assets/amenities.jpg";

const amenitiesList = [
  {
    icon: Utensils,
    title: "Restaurant & Bar",
    description: "Fine dining experience with local and international cuisine",
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Complimentary high-speed internet throughout the property",
  },
  {
    icon: Car,
    title: "Airport Transfer",
    description: "Convenient shuttle service to and from Lodwar Airport",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "Modern gym equipment for your wellness routine",
  },
  {
    icon: Coffee,
    title: "24/7 Room Service",
    description: "Round-the-clock service for your comfort and convenience",
  },
  {
    icon: Shield,
    title: "Security",
    description: "24-hour security and CCTV surveillance for your safety",
  },
];

export const Amenities = () => {
  return (
    <section id="amenities" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            World-Class Amenities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for a comfortable and memorable stay
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <div className="grid sm:grid-cols-2 gap-6">
              {amenitiesList.map((amenity, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-md hover:shadow-[var(--shadow-gold)] transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent mb-4">
                    <amenity.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {amenity.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {amenity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-lg overflow-hidden shadow-[var(--shadow-luxury)]">
              <img
                src={amenitiesImage}
                alt="Hotel Amenities"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
