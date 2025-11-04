import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Wifi, Utensils, Building2, CheckCircle2, Calendar } from "lucide-react";
import miceImage from "@/assets/mice-conference.jpg";

export const MICE = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Section */}
          <div className="order-2 md:order-1">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={miceImage} 
                alt="LUXORA Conference and Meeting Facilities" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 md:order-2">
            <div className="mb-6">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Corporate Excellence
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
                MICE at LUXORA
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Host your Meetings, Incentives, Conferences, and Events in an environment where professionalism meets unparalleled comfort. LUXORA Hotel Lodwar is your premier destination for corporate retreats, strategic team-building experiences, and impactful business gatherings in Northern Kenya.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Elegant Venues</h4>
                  <p className="text-xs text-muted-foreground">Private conference rooms & grand ballroom</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">High-Speed Connectivity</h4>
                  <p className="text-xs text-muted-foreground">Seamless internet throughout</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Gourmet Catering</h4>
                  <p className="text-xs text-muted-foreground">Customized menus for every occasion</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Group Packages</h4>
                  <p className="text-xs text-muted-foreground">Tailored accommodation solutions</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">AV Equipment</h4>
                  <p className="text-xs text-muted-foreground">State-of-the-art presentation tech</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Dedicated Support</h4>
                  <p className="text-xs text-muted-foreground">Professional event coordination</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="luxury" size="lg" className="w-full sm:w-auto">
                  <Calendar className="w-4 h-4 mr-2" />
                  Plan Your Event
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Request a Proposal
                </Button>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground mt-6 italic">
              Perfect for NGO gatherings, corporate training, product launches, and executive retreats
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};