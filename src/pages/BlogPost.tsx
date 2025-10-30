import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet";

const BlogPost = () => {
  const { slug } = useParams();

  // Blog post data - in a real app, this would come from a CMS or API
  const post = {
    id: "turkana-road-trip-guide",
    title: "The Ultimate Turkana Road Trip: An Adventurer's Guide to Kenya's Wild North",
    date: "October 30, 2025",
    readTime: "8 min read",
    image: "/placeholder.svg"
  };

  if (slug !== post.id) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | LUXORA Hotel Lodwar Blog</title>
        <meta name="description" content="Discover the ultimate guide to planning your Turkana road trip adventure, including routes, accommodation at Luxora Hotel, and must-see destinations." />
        <link rel="canonical" href={`https://luxorahotellodwar.com/blog/${post.id}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content="2025-10-30" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Back Button */}
          <section className="pt-32 pb-8">
            <div className="container mx-auto px-4">
              <Link to="/blog">
                <Button variant="ghost" className="group">
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Blog
                </Button>
              </Link>
            </div>
          </section>

          {/* Article Header */}
          <article className="pb-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <header className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {post.date}
                  </span>
                  <span>{post.readTime}</span>
                </div>
              </header>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground mb-6">
                  There is something magnetic about Kenya's far north, the endless horizons, raw desert beauty, and the feeling that you have left the world behind. Turkana is not just a destination, it is an adventure. Whether you are driving in with a roaring 4x4 or landing gracefully in Lodwar by air, this is the kind of trip that rewires your idea of remote.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
                  Getting There: The Great Northern Journey
                </h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">By Road</h3>
                <p className="text-muted-foreground mb-4">
                  The road to Turkana is legendary among travelers who crave the untamed. From Nairobi, you can head north via Kitale, Kapenguria, and Lodwar, a route that takes roughly 12 to 14 hours depending on stops and road conditions. You will need a reliable 4x4, plenty of fuel reserves, and a good sense of adventure. The tarmac stretches most of the way, but the final approaches to Lodwar and beyond can be dusty, rugged, and absolutely spectacular.
                </p>
                <p className="text-muted-foreground mb-4">
                  Make sure to carry extra water, a first-aid kit, and a spare tire. Fuel stations can be few and far between past Kitale, so it is best to top up wherever possible. Always check road and security updates before you set out. The region is peaceful but remote, so preparation is key.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">By Air</h3>
                <p className="text-muted-foreground mb-4">
                  Several airlines operate scheduled flights from Nairobi's Wilson Airport to Lodwar. The flight takes about 1 hour 40 minutes, offering a bird's-eye view of Kenya's dramatic landscapes, from the Rift Valley to the shimmering expanse of Lake Turkana. Once you land, you can easily connect to your accommodation in Lodwar or arrange transfers for excursions deeper into Turkana.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
                  Where to Stay: Luxora Hotel Lodwar
                </h2>
                <p className="text-muted-foreground mb-4">
                  Welcome to Luxora Hotel Lodwar, where sophistication and adventure blend seamlessly at the gateway to Turkana. Ideally located right next to Lodwar Airport, Luxora offers elegantly furnished rooms and self-contained suites, each equipped with air conditioning for your utmost comfort.
                </p>
                <p className="text-muted-foreground mb-4">
                  Savor culinary delights in the signature restaurant, relax in the lounge bar with stunning panoramic views, and enjoy PWD-friendly amenities for full accessibility. For guests who value privacy and productivity, the hotel provides a state-of-the-art private conference room and a grand ballroom for unforgettable celebrations. Extend your stay in the serviced residency atrium, your comfortable home away from home.
                </p>
                <p className="text-muted-foreground mb-4">
                  Luxora is the premier destination for explorers, business professionals, and cultural enthusiasts seeking remarkable experiences in northern Kenya. Step off your flight and into sophistication. Luxora's proximity to Lodwar Airport ensures your arrival is effortless, letting you dive straight into the heart of Turkana's wonders.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
                  Things to Do in and Around Lodwar
                </h2>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-4">
                  <li><strong>Central Turkana Desert Excursions:</strong> Traverse awe-inspiring landscapes etched by millennia, a paradise for thrill-seekers and photography aficionados.</li>
                  <li><strong>Eliye Springs:</strong> Bask in tranquility at this hidden gem on Lake Turkana's shore, where crystal waters and sun-drenched sands beckon adventurers.</li>
                  <li><strong>The Wadach Pyramids:</strong> Marvel at nature's artistry in these dramatic sand sculptures, a must-see for hikers and shutterbugs.</li>
                  <li><strong>Turkana Cultural Village:</strong> Immerse yourself in the rhythms, colors, and traditions of the Turkana people, perfect for culture lovers.</li>
                  <li><strong>Lodwar Town & Market:</strong> Savor local flavors, vibrant street scenes, and hand-crafted treasures.</li>
                  <li><strong>Namorutunga (Standing Stones):</strong> Unravel ancient mysteries at this enigmatic archaeological site, ideal for historians and dreamers.</li>
                </ul>

                <p className="text-muted-foreground mb-4">
                  Lodwar pulses with energy and purpose. At Luxora, the hotel caters to visionaries, NGO leaders, corporate pioneers, and event organizers. Host productive meetings, inspiring retreats, or collaborative conferences, all in an environment tailored for success.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
                  Pro Tips for a Smooth Turkana Trip
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Carry enough cash, as mobile money coverage can be patchy in remote areas.</li>
                  <li>Book accommodation in Lodwar in advance.</li>
                  <li>Stay hydrated and protect yourself from the sun with hats, sunscreen, and light clothing.</li>
                  <li>Always respect local customs and traditions, a smile goes a long way.</li>
                </ul>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
                  Why Turkana is Worth It
                </h2>
                <p className="text-muted-foreground mb-4">
                  For every kilometer of dust, there is a horizon that humbles you. For every challenge, there is the thrill of knowing you have reached one of Africa's last frontiers. Turkana is not about luxury, it is about connection, discovery, and adventure.
                </p>
                <p className="text-muted-foreground mb-4">
                  And for those looking to combine comfort with exploration, Luxora Hotel Lodwar is the perfect base. Whether you are revving up your 4x4 or catching a flight into Lodwar, the wild north is waiting. Once you have seen Turkana's sunsets, you will understand why travelers keep coming back.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-12 p-8 bg-primary/5 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Start Your Turkana Adventure?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Book your stay at Luxora Hotel Lodwar today
                </p>
                <Link to="/contact">
                  <Button variant="gold" size="lg">
                    Reserve Now
                  </Button>
                </Link>
              </div>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
