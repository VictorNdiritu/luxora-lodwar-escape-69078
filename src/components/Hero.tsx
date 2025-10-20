import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-hotel.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
          Welcome to LUXORA
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 max-w-3xl mx-auto">
          A Boutique Hotel Experience in Lodwar
        </p>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Experience luxury and comfort adjacent to Lodwar Airport
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="gold" 
            size="lg"
            onClick={() => scrollToSection("rooms")}
            className="text-base md:text-lg px-8 py-6"
          >
            Explore Our Rooms
            <ArrowRight className="ml-2" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="text-base md:text-lg px-8 py-6 bg-card/20 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-card/30"
          >
            Contact Us
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("about")}
          className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
};
