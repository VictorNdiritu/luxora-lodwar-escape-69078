import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BannerHero } from "@/components/PageHero";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import heroImg from "@/assets/experiences/Central Turkana Desert Excursions.jpg";
import eliyeImg from "@/assets/experiences/Eliye spirings.jpg";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const BLOG_POSTS = [
  {
    id: "turkana-road-trip-guide",
    title: "The Ultimate Turkana Road Trip: An Adventurer's Guide to Kenya's Wild North",
    excerpt: "There is something magnetic about Kenya's far north — endless horizons, raw desert beauty, and the feeling that you have left the world behind. Turkana is not merely a destination, it is an expedition into an ancient world.",
    date: "October 30, 2025",
    readTime: "8 min read",
    category: "Expedition Guide",
    image: heroImg,
  },
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>The Journal & Travel Guides | Luxora Hotel, Lodwar</title>
        <meta
          name="description"
          content="Explore the Luxora Hotel journal: curated guides, road trip expeditions, local culture, and insider perspectives across Lodwar and the Lake Turkana basin."
        />
        <link rel="canonical" href="https://luxorahotels.co.ke/blog" />
        <meta property="og:title" content="The Journal | Luxora Hotel, Lodwar" />
        <meta property="og:description" content="Expedition guides and local insights from the gateway to Turkana." />
        <meta property="og:type" content="website" />
      </Helmet>

      <ScrollReveal />
      <div className="min-h-screen bg-[hsl(var(--background))]">
        <Header />

        <BannerHero
          eyebrow="Chronicles & Guides"
          headline="The Turkana Journal"
          image={heroImg}
          imageAlt="Turkana desert landscape — Luxora Hotel Journal"
        />

        {/* Editorial introduction */}
        <section className="section-pad-sm bg-[hsl(var(--background))] text-center">
          <div className="container mx-auto px-6 max-w-3xl reveal">
            <p className="text-eyebrow text-[hsl(var(--accent))] mb-4" style={{ letterSpacing: "0.25em" }}>
              Stories from Northern Kenya
            </p>
            <h2 className="text-headline mb-6">Perspectives on the Wild North</h2>
            <span className="gold-rule-center" />
            <p className="text-lead text-[hsl(var(--muted-foreground))] mx-auto">
              Reflections on culture, expedition planning, and desert tranquility from our home in Lodwar. Curated for the inquisitive traveler.
            </p>
          </div>
        </section>

        {/* Featured Stories Grid */}
        <section className="section-pad bg-[hsl(var(--card))] border-t border-b border-[hsl(var(--border))]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {BLOG_POSTS.map((post) => (
                <article
                  key={post.id}
                  className="bg-[hsl(var(--background))] border border-[hsl(var(--border))] group flex flex-col justify-between overflow-hidden reveal"
                >
                  <div>
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="img-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(.76,0,.24,1)]"
                      />
                      <div className="absolute top-4 left-4 bg-[hsl(var(--background))] px-3 py-1">
                        <span className="text-eyebrow text-[hsl(var(--accent))]" style={{ fontSize: "0.55rem", letterSpacing: "0.18em" }}>
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center gap-4 text-xs text-[hsl(var(--muted-foreground))] mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[hsl(var(--accent))]" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[hsl(var(--accent))]" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl font-light leading-snug mb-4 group-hover:text-[hsl(var(--accent))] transition-colors">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>

                      <p className="text-sm font-light text-[hsl(var(--muted-foreground))] leading-relaxed line-clamp-3 mb-6">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-8 pb-8 pt-0">
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-eyebrow text-[hsl(var(--foreground))] hover:text-[hsl(var(--accent))] transition-colors"
                      style={{ fontSize: "0.625rem", letterSpacing: "0.2em" }}
                    >
                      <span>Read Full Story</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}

              {/* Complimentary Editorial Teaser Card */}
              <div className="bg-[hsl(var(--background))] border border-dashed border-[hsl(var(--border))] p-8 flex flex-col justify-center text-center reveal">
                <p className="text-eyebrow text-[hsl(var(--accent))] mb-3" style={{ letterSpacing: "0.2em" }}>
                  Upcoming Issue
                </p>
                <h3 className="font-serif text-xl mb-3">Eliye Springs & The Jade Sea</h3>
                <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed mb-6">
                  Our forthcoming guide on coastal breezes, natural freshwater palm springs, and navigating the shorelines of Lake Turkana.
                </p>
                <Link to="/contact" className="text-eyebrow text-[hsl(var(--accent))] hover:underline" style={{ fontSize: "0.6rem", letterSpacing: "0.18em" }}>
                  Inquire With Concierge
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Closing CTA */}
        <section className="section-pad bg-[hsl(var(--foreground))] text-[hsl(var(--background))] text-center">
          <div className="container mx-auto px-6 max-w-3xl reveal">
            <p className="text-eyebrow text-[hsl(var(--accent))] mb-4" style={{ letterSpacing: "0.25em" }}>
              Begin Your Journey
            </p>
            <h2 className="text-headline mb-6 text-white">Experience Turkana First-Hand</h2>
            <span className="gold-rule-center" />
            <p className="text-lead text-[hsl(var(--background))/0.65] mb-10 mx-auto">
              Let Luxora Hotel Lodwar be your luxurious base as you discover the cradle of mankind and the timeless desert landscapes of Northern Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link to="/reservations" className="btn-gold">
                <span>Reserve Your Stay</span>
              </Link>
              <Link to="/experiences" className="btn-outline-white">
                <span>Explore Excursions</span>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
