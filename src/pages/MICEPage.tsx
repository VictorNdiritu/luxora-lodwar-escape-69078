import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MICE } from "@/components/MICE";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Users, Presentation, Coffee, Wifi, Utensils, Building2, Calendar, CheckCircle2 } from "lucide-react";

const MICEPage = () => {
  const facilities = [
    {
      icon: Building2,
      title: "Conference Hall",
      description: "Spacious ballroom accommodating up to 200 guests with theater-style seating",
      capacity: "200 guests"
    },
    {
      icon: Users,
      title: "Meeting Rooms",
      description: "Multiple breakout rooms for workshops, board meetings, and private sessions",
      capacity: "10-30 guests each"
    },
    {
      icon: Presentation,
      title: "AV Equipment",
      description: "State-of-the-art projectors, sound systems, video conferencing, and presentation tools",
      capacity: "All venues"
    },
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Dedicated fiber connection ensuring seamless connectivity throughout your event",
      capacity: "Unlimited bandwidth"
    },
    {
      icon: Utensils,
      title: "Catering Services",
      description: "Customized menus from breakfast meetings to gala dinners with local and international cuisine",
      capacity: "All dietary needs"
    },
    {
      icon: Coffee,
      title: "Break Services",
      description: "Coffee breaks, refreshments, and buffet services tailored to your schedule",
      capacity: "Continuous service"
    }
  ];

  const packages = [
    {
      name: "Half-Day Package",
      duration: "4 hours",
      includes: ["Conference room rental", "Basic AV equipment", "Morning/afternoon tea", "High-speed WiFi", "Notepads & pens"]
    },
    {
      name: "Full-Day Package",
      duration: "8 hours",
      includes: ["Conference room rental", "Premium AV equipment", "2 coffee breaks", "Buffet lunch", "High-speed WiFi", "Stationery & materials"]
    },
    {
      name: "Residential Package",
      duration: "Multi-day",
      includes: ["Conference facilities", "Accommodation", "Full-board meals", "Team activities", "Airport transfers", "Dedicated event coordinator"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>MICE - Meetings, Conferences & Events | LUXORA Hotel Lodwar</title>
        <meta name="description" content="Host your corporate meetings, conferences, and events at LUXORA Hotel Lodwar. Elegant venues, high-speed connectivity, gourmet catering, and professional event coordination in Northern Kenya." />
        <link rel="canonical" href="https://luxorahotels.co.ke/mice" />
        <meta property="og:title" content="MICE - Corporate Events & Conferences | LUXORA Hotel Lodwar" />
        <meta property="og:description" content="Premier MICE destination in Lodwar with elegant meeting spaces, modern facilities, and dedicated event support." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Meetings, Incentives, Conferences & Events
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-4 mb-6">
                Host Your Event at LUXORA
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Where professionalism meets unparalleled comfort. Your premier destination for corporate retreats, strategic team-building experiences, and impactful business gatherings in Northern Kenya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/reservations">
                  <Button variant="luxury" size="lg">
                    <Calendar className="w-4 h-4 mr-2" />
                    Plan Your Event
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Request a Proposal
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* MICE Component */}
        <MICE />

        {/* Facilities Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                World-Class Facilities
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need for a successful event, all in one place
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {facilities.map((facility, index) => (
                <div key={index} className="bg-muted/30 p-6 rounded-lg">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mb-4">
                    <facility.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{facility.title}</h3>
                  <p className="text-muted-foreground mb-3">{facility.description}</p>
                  <p className="text-sm text-accent font-semibold">{facility.capacity}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Flexible Event Packages
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tailored solutions for events of any size and duration
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <div key={index} className="bg-card p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                  <p className="text-accent font-semibold mb-6">{pkg.duration}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/reservations">
                    <Button variant="outline" className="w-full">
                      Request Quote
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-accent/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Plan Your Next Event?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our dedicated events team is ready to help you create a memorable and successful gathering at LUXORA
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/reservations">
                <Button variant="luxury" size="lg">
                  Book Your Event
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Events Team
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default MICEPage;