import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet";

const Blog = () => {
  const blogPosts = [
    {
      id: "turkana-road-trip-guide",
      title: "The Ultimate Turkana Road Trip: An Adventurer's Guide to Kenya's Wild North",
      excerpt: "There is something magnetic about Kenya's far north - the endless horizons, raw desert beauty, and the feeling that you have left the world behind. Turkana is not just a destination, it is an adventure.",
      date: "October 30, 2025",
      readTime: "8 min read",
      image: "/placeholder.svg"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog | LUXORA Hotel Lodwar - Travel Tips & Local Insights</title>
        <meta name="description" content="Discover travel tips, adventure stories, and insider insights about Northern Kenya and the Turkana region from LUXORA Hotel Lodwar." />
        <link rel="canonical" href="https://luxorahotels.co.ke/blog" />
        <meta property="og:title" content="Blog | LUXORA Hotel Lodwar" />
        <meta property="og:description" content="Travel tips and adventure stories from Northern Kenya" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                LUXORA Travel Blog
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Adventure stories, travel tips, and insider insights from Northern Kenya's premier destination
              </p>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="aspect-video bg-muted">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          {post.date}
                        </span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-foreground mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <Link to={`/blog/${post.id}`}>
                        <Button variant="outline" className="group">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary/5">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready for Your Turkana Adventure?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let LUXORA be your gateway to Kenya's wild north
              </p>
              <Link to="/contact">
                <Button variant="gold" size="lg">
                  Reserve Your Stay
                </Button>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
