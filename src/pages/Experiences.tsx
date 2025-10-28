import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MapPin, Palmtree, Camera, Mountain, Utensils, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Experiences = () => {
  const experiences = [
    {
      icon: MapPin,
      title: "Turkana Cultural Village",
      description: "Immerse yourself in the rich cultural heritage of the Turkana people. Experience traditional dances, crafts, and local customs.",
      duration: "Half Day",
    },
    {
      icon: Mountain,
      title: "Central Island National Park",
      description: "Explore volcanic islands in Lake Turkana, home to the world's largest concentration of Nile crocodiles.",
      duration: "Full Day",
    },
    {
      icon: Palmtree,
      title: "Lake Turkana Excursion",
      description: "Visit the world's largest desert lake, a UNESCO World Heritage Site known as the 'Jade Sea'.",
      duration: "Full Day",
    },
    {
      icon: Camera,
      title: "Eliye Springs",
      description: "Relax at this beautiful oasis with white sandy beaches and crystal-clear waters perfect for swimming.",
      duration: "Full Day",
    },
    {
      icon: Users,
      title: "Lodwar Town Tour",
      description: "Discover local markets, meet artisans, and explore the vibrant town center with guided cultural insights.",
      duration: "Half Day",
    },
    {
      icon: Utensils,
      title: "Traditional Cuisine Experience",
      description: "Savor authentic Turkana cuisine and learn about traditional cooking methods from local chefs.",
      duration: "2-3 Hours",
    },
  ];

  const activities = [
    "Bird Watching at Lake Turkana",
    "Desert Safari Tours",
    "Fishing Expeditions",
    "Sunset Camel Rides",
    "Archaeological Site Visits",
    "Photography Tours",
    "Local Market Shopping",
    "Traditional Craft Workshops",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                Discover Lodwar
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore the unique landscapes, rich culture, and unforgettable experiences that await you in Turkana County
              </p>
            </div>
          </div>
        </section>

        {/* Main Experiences */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Featured Experiences
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {experiences.map((experience, index) => {
                const Icon = experience.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mb-4">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl">{experience.title}</CardTitle>
                      <CardDescription className="text-sm font-semibold text-accent">
                        {experience.duration}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{experience.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Activities List */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Things to Do
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 text-center"
                >
                  <p className="text-foreground font-medium">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-accent/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Explore?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our concierge team can help arrange any of these experiences and customize your perfect Turkana adventure.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Experiences;
