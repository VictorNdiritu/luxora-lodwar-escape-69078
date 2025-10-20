import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/luxora-logo.jpg";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <img 
            src={logo} 
            alt="Luxora Hotel Lodwar" 
            className="h-12 md:h-16 w-auto object-contain cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("rooms")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Rooms
            </button>
            <button
              onClick={() => scrollToSection("amenities")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Amenities
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Location
            </button>
            <Button variant="gold" onClick={() => scrollToSection("contact")}>
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 bg-card rounded-lg p-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-accent transition-colors font-medium text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("rooms")}
              className="text-foreground hover:text-accent transition-colors font-medium text-left"
            >
              Rooms
            </button>
            <button
              onClick={() => scrollToSection("amenities")}
              className="text-foreground hover:text-accent transition-colors font-medium text-left"
            >
              Amenities
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="text-foreground hover:text-accent transition-colors font-medium text-left"
            >
              Location
            </button>
            <Button variant="gold" onClick={() => scrollToSection("contact")} className="w-full">
              Book Now
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};
