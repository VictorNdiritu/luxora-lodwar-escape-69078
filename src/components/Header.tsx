import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/luxora-logo.png";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img 
              src={logo} 
              alt="Luxora Hotel Lodwar" 
              className="h-12 md:h-16 w-auto object-contain cursor-pointer" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            <Link
              to="/"
              className={`transition-colors font-medium ${
                isActive("/") ? "text-accent" : "text-foreground hover:text-accent"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors font-medium ${
                isActive("/about") ? "text-accent" : "text-foreground hover:text-accent"
              }`}
            >
              About
            </Link>
            <Link
              to="/rooms"
              className={`transition-colors font-medium ${
                isActive("/rooms") ? "text-accent" : "text-foreground hover:text-accent"
              }`}
            >
              Rooms
            </Link>
            <Link
              to="/mice"
              className={`transition-colors font-medium ${
                isActive("/mice") ? "text-accent" : "text-foreground hover:text-accent"
              }`}
            >
              Events
            </Link>
            <Link
              to="/experiences"
              className={`transition-colors font-medium ${
                isActive("/experiences") ? "text-accent" : "text-foreground hover:text-accent"
              }`}
            >
              Experiences
            </Link>
            <Link
              to="/blog"
              className={`transition-colors font-medium ${
                isActive("/blog") ? "text-accent" : "text-foreground hover:text-accent"
              }`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`transition-colors font-medium ${
                isActive("/contact") ? "text-accent" : "text-foreground hover:text-accent"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Reserve Button - Positioned on the right */}
          <div className="hidden md:block">
            <Link to="/reservations">
              <Button variant="gold">
                Reserve
              </Button>
            </Link>
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
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`transition-colors font-medium text-left ${
                isActive("/") ? "text-accent" : "text-foreground hover:text-accent"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`transition-colors font-medium text-left ${
                isActive("/about") ? "text-accent" : "text-foreground hover:text-accent"
              }`}
            >
              About
            </Link>
            <Link
              to="/rooms"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`transition-colors font-medium text-left ${
                isActive("/rooms") ? "text-accent" : "text-foreground hover:text-accent"
              }`}
            >
              Rooms
            </Link>
            <Link
              to="/mice"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`transition-colors font-medium text-left ${
                isActive("/mice") ? "text-accent" : "text-foreground hover:text-accent"
              }`}
            >
              Events
            </Link>
            <Link
              to="/experiences"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`transition-colors font-medium text-left ${
                isActive("/experiences") ? "text-accent" : "text-foreground hover:text-accent"
              }`}
            >
              Experiences
            </Link>
            <Link
              to="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`transition-colors font-medium text-left ${
                isActive("/blog") ? "text-accent" : "text-foreground hover:text-accent"
              }`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`transition-colors font-medium text-left ${
                isActive("/contact") ? "text-accent" : "text-foreground hover:text-accent"
              }`}
            >
              Contact
            </Link>
            <Link to="/reservations" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="gold" className="w-full">
                Reserve
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};
