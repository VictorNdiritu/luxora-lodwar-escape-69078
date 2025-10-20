import logo from "@/assets/luxora-logo.jpg";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img 
              src={logo} 
              alt="Luxora Hotel Lodwar" 
              className="h-16 w-auto object-contain mb-4 brightness-0 invert" 
            />
            <p className="text-primary-foreground/80 text-center md:text-left">
              Your gateway to luxury in Lodwar
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80 mb-2">
              © {new Date().getFullYear()} LUXORA Hotel Lodwar. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Adjacent to Lodwar Airport, Turkana County, Kenya
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
