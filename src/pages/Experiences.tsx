import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Palmtree, Camera, Mountain, Utensils, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet";

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
    <>
      <Helmet>
        <title>Experiences & Activities | LUXORA Hotel Lodwar</title>
        <meta name="description" content="Discover Lake Turkana, Eliye Springs, cultural villages, and more. Explore the unique landscapes and rich heritage of Turkana County from LUXORA Hotel Lodwar." />
        <link rel="canonical" href="https://luxorahotellodwar.com/experiences" />
        <meta property="og:title" content="Experiences & Activities | LUXORA Hotel Lodwar" />
        <meta property="og:description" content="Explore unforgettable adventures and cultural experiences in Northern Kenya." />
        <meta property="og:type" content="website" />
      </Helmet>

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

        {/* About Region Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Discover the Turkana Region
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground text-left">
                <p>
                  Turkana County, located in the northwestern part of Kenya, is a land of dramatic landscapes, rich archaeological heritage, and vibrant indigenous culture. Known as the "Cradle of Mankind," this region has yielded some of the world's most significant fossil discoveries, offering visitors a unique glimpse into human evolution.
                </p>
                <p>
                  Lake Turkana, the world's largest permanent desert lake and a UNESCO World Heritage Site, dominates the landscape with its stunning jade-green waters. The lake stretches over 290 kilometers and is surrounded by volcanic formations, creating a surreal and breathtaking environment. Central Island National Park, located within the lake, is home to the world's largest concentration of Nile crocodiles.
                </p>
                <p>
                  The Turkana people, known for their distinctive cultural practices and colorful traditional attire, have inhabited this region for centuries. Visitors can immerse themselves in authentic cultural experiences, witnessing traditional dances, learning about age-old customs, and exploring local markets filled with handcrafted jewelry, woven baskets, and traditional artifacts.
                </p>
                <p>
                  Beyond cultural attractions, the region offers diverse wildlife viewing opportunities, including desert-adapted species and over 350 bird species. From desert safaris and archaeological site visits to relaxing at pristine beaches like Eliye Springs, Turkana County provides unforgettable experiences for adventurous travelers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Planning Tips Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Planning Your Adventures
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-foreground mb-4">Best Time to Visit</h3>
                <p className="text-muted-foreground mb-4">
                  The ideal time to explore Turkana is between June and September when temperatures are more moderate and rainfall is minimal.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• June-Sept: Cooler, dry season</li>
                  <li>• Oct-May: Hot and dry</li>
                  <li>• Year-round: Wildlife viewing</li>
                </ul>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-foreground mb-4">What to Bring</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Light, breathable clothing</li>
                  <li>• Sun protection (hat, sunglasses, SPF)</li>
                  <li>• Comfortable walking/hiking shoes</li>
                  <li>• Camera with extra batteries</li>
                  <li>• Binoculars for wildlife viewing</li>
                  <li>• Reusable water bottle</li>
                </ul>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-foreground mb-4">Booking Information</h3>
                <p className="text-muted-foreground mb-4">
                  Our concierge team can arrange all experiences and customize your itinerary based on your interests and schedule.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Book in advance recommended</li>
                  <li>• Guided tours available</li>
                  <li>• Custom packages offered</li>
                </ul>
              </div>
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
              Book your stay at LUXORA and let our concierge team help arrange unforgettable experiences in Turkana County. Contact us today to start planning your adventure.
            </p>
            <Link to="/contact">
              <Button variant="luxury" size="lg" className="text-lg px-10 py-6">
                Reserve & Plan Your Trip
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

export default Experiences;
