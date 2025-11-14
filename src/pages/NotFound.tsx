import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found | LUXORA Hotel Lodwar</title>
        <meta name="description" content="The page you're looking for cannot be found. Return to LUXORA Hotel Lodwar homepage." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center bg-background pt-24">
          <div className="text-center px-4">
            <h1 className="mb-4 text-6xl md:text-8xl font-bold text-foreground">404</h1>
            <p className="mb-8 text-xl md:text-2xl text-muted-foreground">Oops! Page not found</p>
            <p className="mb-8 text-muted-foreground max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/">
              <Button variant="gold" size="lg">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
