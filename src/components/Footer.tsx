import logo from "@/assets/luxora-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img 
              src={logo} 
              alt="Luxora Hotel Lodwar" 
              className="h-16 w-auto object-contain mb-4" 
            />
            <p className="text-primary-foreground/80 text-center md:text-left">
              Your gateway to luxury in Lodwar
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80 mb-2">
              © {new Date().getFullYear()} Luxora Hotel, Lodwar. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm mb-2">
              Adjacent to Lodwar Airport, Turkana County, Kenya
            </p>
            <p className="text-primary-foreground/50 text-xs">
              Managed by{" "}
              <a
                href="https://creekoxley.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-primary-foreground/80 transition-colors"
              >
                Creek Oxley
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
