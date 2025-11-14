import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/luxora-logo-main.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28" style={{ backgroundColor: '#fbfcfb' }}>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <img 
          src={logo} 
          alt="LUXORA Hotels & Resorts" 
          className="w-full max-w-md md:max-w-2xl mx-auto mb-8 animate-fade-in"
        />
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
          A Boutique Hotel Experience in Lodwar
        </p>
        <p className="text-lg md:text-xl text-muted-foreground/80 mb-8 max-w-2xl mx-auto">
          Experience luxury and comfort just 10 minutes from Lodwar Airport
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/rooms">
            <Button 
              variant="gold" 
              size="lg"
              className="text-base md:text-lg px-8 py-6"
            >
              Explore Our Rooms
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
          <Link to="/reservations">
            <Button 
              variant="luxury" 
              size="lg"
              className="text-base md:text-lg px-8 py-6"
            >
              Reserve Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
