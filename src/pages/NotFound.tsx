import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("404 Error: Non-existent route accessed:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found | Luxora Hotel, Lodwar</title>
        <meta name="description" content="The page you are looking for is unavailable. Return to Luxora Hotel, Lodwar." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-[hsl(var(--background))] flex flex-col justify-between">
        <Header />

        <main className="flex-1 flex items-center justify-center pt-32 pb-24 px-6 text-center">
          <div className="max-w-xl mx-auto">
            <p className="text-eyebrow text-[hsl(var(--accent))] mb-4" style={{ letterSpacing: "0.25em" }}>
              404 • Destination Not Found
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-light text-[hsl(var(--foreground))] mb-6">
              Page Not Found
            </h1>
            <span className="gold-rule-center" />
            <p className="text-lead text-[hsl(var(--muted-foreground))] mb-10 max-w-md mx-auto">
              The page you are looking for does not exist or has been relocated within our new digital residence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="btn-primary">
                <span>Return to Home</span>
              </Link>
              <Link to="/rooms" className="btn-outline">
                <span>View Accommodations</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NotFound;
