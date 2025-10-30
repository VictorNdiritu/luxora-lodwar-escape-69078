import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Amenities } from "@/components/Amenities";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { Award, Users, Heart, Star } from "lucide-react";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About LUXORA Hotel Lodwar | Our Story & Vision</title>
        <meta name="description" content="Discover LUXORA Hotel Lodwar's story - A boutique hotel offering 36 elegant rooms across 2 floors, adjacent to Lodwar Airport in Northern Kenya." />
        <link rel="canonical" href="https://luxorahotellodwar.com/about" />
        <meta property="og:title" content="About LUXORA Hotel Lodwar" />
        <meta property="og:description" content="Learn about our commitment to excellence and authentic Kenyan hospitality." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen">
      <Header />
      <div className="pt-24">
        <About />
        
        {/* Our Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  LUXORA Hotel Lodwar was founded with a vision to bring world-class hospitality to the heart of Turkana County. Our boutique hotel represents a perfect blend of modern luxury and authentic Kenyan hospitality, designed to cater to both business and leisure travelers visiting this unique region.
                </p>
                <p>
                  Strategically located adjacent to Lodwar Airport, LUXORA offers unparalleled convenience for travelers arriving by air. Our proximity to the airport, combined with our commitment to excellence, makes us the preferred choice for visitors to Lodwar and the greater Turkana region.
                </p>
                <p>
                  With 36 thoughtfully designed rooms spread across two floors, we offer an intimate yet comprehensive hotel experience. Each room is equipped with modern amenities while maintaining a warm, inviting atmosphere that reflects the spirit of Turkana hospitality.
                </p>
                <p>
                  Our dedicated team is committed to ensuring every guest experiences the highest standards of service. From our 24-hour front desk to our attentive housekeeping staff, we work tirelessly to make your stay memorable and comfortable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              What Sets Us Apart
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards in every aspect of our service, from room cleanliness to guest interactions.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Hospitality</h3>
                <p className="text-muted-foreground">
                  Our team embodies the warmth of Kenyan hospitality, treating every guest like family.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Comfort</h3>
                <p className="text-muted-foreground">
                  Every detail is designed with your comfort in mind, ensuring a restful and rejuvenating stay.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
                  <Star className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Location</h3>
                <p className="text-muted-foreground">
                  Our prime location offers convenience unmatched by any other hotel in the region.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Amenities />
        <Location />
      </div>
      <Footer />
    </div>
    </>
  );
};

export default AboutPage;
