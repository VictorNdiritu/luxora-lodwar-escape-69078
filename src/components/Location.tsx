import { MapPin, Plane, Clock } from "lucide-react";

export const Location = () => {
  return (
    <section id="location" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Perfect Location
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategically positioned for your convenience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-lg bg-muted/30">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
                <Plane className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Adjacent to Airport
              </h3>
              <p className="text-muted-foreground">
                Lodwar Airport is right next door
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-muted/30">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
                <Clock className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                2 Minutes
              </h3>
              <p className="text-muted-foreground">
                Quick walk to the terminal
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-muted/30">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
                <MapPin className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Central Lodwar
              </h3>
              <p className="text-muted-foreground">
                Easy access to city center
              </p>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
              Find Us
            </h3>
            <div className="space-y-3 text-center">
              <p className="text-muted-foreground flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                LUXORA Hotel Lodwar, Adjacent to Lodwar Airport
              </p>
              <p className="text-muted-foreground">
                Lodwar, Turkana County, Kenya
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
