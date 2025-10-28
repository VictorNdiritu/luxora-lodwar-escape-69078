import { Button } from "@/components/ui/button";
import { Users, User, Wifi, Tv, Coffee, Wind } from "lucide-react";
import deluxeDouble from "@/assets/deluxe-double.jpg";
import superiorSingle from "@/assets/superior-single.jpg";

const roomCategories = [
  {
    title: "Deluxe Double Room",
    image: deluxeDouble,
    guests: "2 Guests",
    icon: Users,
    count: "18 Rooms Available",
    features: [
      "King Size Bed",
      "Premium Bedding",
      "Luxury Bathroom",
      "Work Desk",
      "City View",
    ],
    amenities: [Wifi, Tv, Coffee, Wind],
  },
  {
    title: "Superior Single Room",
    image: superiorSingle,
    guests: "1 Guest",
    icon: User,
    count: "18 Rooms Available",
    features: [
      "Comfortable Single Bed",
      "Modern Furnishings",
      "En-suite Bathroom",
      "Reading Area",
      "Natural Light",
    ],
    amenities: [Wifi, Tv, Coffee, Wind],
  },
];

import { Link } from "react-router-dom";

export const Rooms = () => {

  return (
    <section id="rooms" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Rooms & Suites
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience comfort and elegance in every detail
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {roomCategories.map((room, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-[var(--shadow-luxury)] hover:shadow-[var(--shadow-gold)] transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold">
                  {room.count}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
                    <room.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{room.title}</h3>
                    <p className="text-muted-foreground">{room.guests}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Room Features:</h4>
                  <ul className="space-y-2">
                    {room.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-muted-foreground">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 mb-6">
                  {room.amenities.map((Amenity, i) => (
                    <div
                      key={i}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted"
                      title="Amenity"
                    >
                      <Amenity className="w-5 h-5 text-muted-foreground" />
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="block">
                  <Button variant="luxury" className="w-full">
                    Reserve Now
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
