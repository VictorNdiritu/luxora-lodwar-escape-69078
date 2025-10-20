import { Building2, MapPin, Bed } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Discover LUXORA
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Where luxury meets convenience in the heart of Lodwar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
              <Building2 className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">2 Floors</h3>
            <p className="text-muted-foreground">
              Modern architecture designed for comfort and elegance
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
              <Bed className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">36 Rooms</h3>
            <p className="text-muted-foreground">
              18 Double & 18 Single rooms in Deluxe and Superior categories
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
              <MapPin className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Prime Location</h3>
            <p className="text-muted-foreground">
              Adjacent to Lodwar Airport for ultimate convenience
            </p>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            LUXORA Hotel Lodwar offers an exceptional boutique hotel experience, combining 
            modern amenities with warm hospitality. Our strategically located property provides 
            easy access to Lodwar Airport, making us the perfect choice for both business and 
            leisure travelers seeking comfort and sophistication.
          </p>
        </div>
      </div>
    </section>
  );
};
