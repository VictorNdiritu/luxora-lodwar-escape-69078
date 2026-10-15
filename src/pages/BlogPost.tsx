import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import heroImg from "@/assets/experiences/Central Turkana Desert Excursions.jpg";
import eliyeImg from "@/assets/experiences/Eliye spirings.jpg";
import townImg from "@/assets/experiences/Lodwar Town & Market.jpg";
import { Calendar, Clock, ArrowLeft, Share2, Compass, MapPin } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();

  const post = {
    id: "turkana-road-trip-guide",
    title: "The Ultimate Turkana Road Trip: An Adventurer's Guide to Kenya's Wild North",
    date: "October 30, 2025",
    readTime: "8 min read",
    author: "Luxora Concierge Desk",
    image: heroImg,
  };

  // If slug doesn't match, show friendly redirect back to journal
  if (slug !== post.id) {
    return (
      <div className="min-h-screen bg-[hsl(var(--background))] flex flex-col justify-between">
        <Header />
        <div className="container mx-auto px-6 py-40 text-center">
          <p className="text-eyebrow text-[hsl(var(--accent))] mb-4">Article Not Found</p>
          <h1 className="text-headline mb-6">Story Archive</h1>
          <Link to="/blog" className="btn-primary">
            <span>Back to Journal</span>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Luxora Hotel Journal</title>
        <meta
          name="description"
          content="The comprehensive guide to planning your Turkana adventure: overland 4x4 routes via Kitale, scheduled flights to Lodwar, luxury accommodation at Luxora Hotel, and iconic desert destinations."
        />
        <link rel="canonical" href={`https://luxorahotels.co.ke/blog/${post.id}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content="2025-10-30" />
      </Helmet>

      <ScrollReveal />
      <div className="min-h-screen bg-[hsl(var(--background))]">
        <Header />

        {/* Back Link & Header Bar */}
        <section className="pt-32 pb-8 bg-[hsl(var(--card))] border-b border-[hsl(var(--border))]">
          <div className="container mx-auto px-6 max-w-4xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-eyebrow text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
              style={{ fontSize: "0.625rem", letterSpacing: "0.2em" }}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to The Journal</span>
            </Link>
          </div>
        </section>

        {/* Article Headline & Meta */}
        <header className="py-16 bg-[hsl(var(--card))]">
          <div className="container mx-auto px-6 max-w-4xl text-center reveal">
            <p className="text-eyebrow text-[hsl(var(--accent))] mb-4" style={{ letterSpacing: "0.25em" }}>
              Expedition Guide • Northern Kenya
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-8">
              {post.title}
            </h1>
            <span className="gold-rule-center" />
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[hsl(var(--muted-foreground))]">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[hsl(var(--accent))]" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[hsl(var(--accent))]" />
                {post.readTime}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[hsl(var(--accent))]" />
                {post.author}
              </span>
            </div>
          </div>
        </header>

        {/* Hero image banner */}
        <div className="container mx-auto px-6 max-w-5xl -mt-6 mb-16 reveal">
          <div className="relative aspect-[21/9] overflow-hidden border border-[hsl(var(--border))] shadow-md">
            <img src={post.image} alt={post.title} className="img-cover" />
          </div>
          <p className="text-right text-[0.65rem] text-[hsl(var(--muted-foreground))] mt-2 font-light">
            Central Turkana desert terrain — Photographed along the Lodwar corridor.
          </p>
        </div>

        {/* Article Content */}
        <main className="container mx-auto px-6 max-w-3xl pb-24">
          <article className="prose-luxury reveal">
            {/* Lead paragraph */}
            <p className="text-lead text-[hsl(var(--foreground))] font-light leading-relaxed mb-8 drop-cap">
              There is something magnetic about Kenya's far north — the endless horizons, raw desert beauty, and the feeling that you have left the world behind. Turkana is not just a destination; it is an expedition that rewires your sense of place and scale. Whether arriving with a roaring 4x4 or landing comfortably in Lodwar by air, this is the journey of a lifetime.
            </p>

            {/* Section 1 */}
            <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mt-14 mb-4">
              Getting There: The Great Northern Journey
            </h2>
            <span className="gold-rule" />

            <h3 className="font-serif text-xl font-normal text-[hsl(var(--foreground))] mt-8 mb-3">
              By Road: The Classic Overland Expedition
            </h3>
            <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
              The road to Turkana is legendary among travelers who crave the untamed. From Nairobi, the route heads north via Kitale and Kapenguria before descending into the dramatic Great Rift floor toward Lodwar. The drive typically spans 12 to 14 hours depending on transit pace and exploration stops.
            </p>
            <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-6">
              A sturdy, high-clearance 4x4 is essential. While smooth tarmac now covers substantial stretches, the final approaches and off-highway excursions present rugged, desert conditions. Carry ample hydration, a comprehensive first-aid kit, and dual spare tires. Past Kitale, fuel stations become infrequent, so top up at every opportunity. The region is welcoming and serene, but self-reliance is the hallmark of great overland journeys.
            </p>

            <h3 className="font-serif text-xl font-normal text-[hsl(var(--foreground))] mt-8 mb-3">
              By Air: Direct Comfort into Lodwar Airport
            </h3>
            <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-8">
              For travelers seeking seamless convenience, daily scheduled commercial and chartered flights operate from Nairobi's Wilson Airport directly into Lodwar Airport (LOK). The flight duration is approximately 1 hour and 40 minutes, offering breathtaking aerial panoramas of the Great Rift Valley, Mount Kulal, and the turquoise waters of Lake Turkana.
            </p>

            {/* Inset quote */}
            <div className="my-10 p-8 border-l-2 border-[hsl(var(--accent))] bg-[hsl(var(--card))]">
              <p className="font-serif italic text-lg text-[hsl(var(--foreground))] mb-2">
                "For every kilometer of dust, there is a horizon that humbles you. For every challenge, there is the thrill of reaching one of Africa's last frontiers."
              </p>
              <span className="text-eyebrow text-[hsl(var(--accent))]" style={{ fontSize: "0.55rem" }}>
                — Turkana Expedition Notes
              </span>
            </div>

            {/* Section 2 */}
            <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mt-14 mb-4">
              Where to Stay: Luxora Hotel Lodwar
            </h2>
            <span className="gold-rule" />
            <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
              Welcome to Luxora Hotel Lodwar, where refined hospitality and authentic northern exploration meet. Situated directly adjacent to Lodwar Airport, Luxora provides an immediate sanctuary of quiet elegance upon touchdown.
            </p>
            <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
              Our 36 private accommodations include Standard Double, Superior Double, and Twin rooms, each fully air-conditioned with en-suite bathrooms, high-speed WiFi, and plush linens. Dine in our signature restaurant, unwind in the panoramic lounge bar, or host regional summits in our state-of-the-art conference halls.
            </p>

            {/* Section 3 */}
            <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mt-14 mb-4">
              Things to Do in and Around Lodwar
            </h2>
            <span className="gold-rule" />
            <ul className="space-y-4 my-6 text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[hsl(var(--accent))] mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-[hsl(var(--foreground))]">Central Turkana Desert Excursions:</strong> Traverse millennia-etched desert plateaus, dry river wadis, and volcanic terrain ideal for photography and nature walks.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[hsl(var(--accent))] mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-[hsl(var(--foreground))]">Eliye Springs:</strong> Relax along the golden sands and freshwater palm springs of Lake Turkana, the world's largest permanent desert lake.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[hsl(var(--accent))] mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-[hsl(var(--foreground))]">The Wadach Pyramids:</strong> Gaze upon nature's sculpted sand pyramid monuments, a geological wonder rising dramatically from the desert floor.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[hsl(var(--accent))] mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-[hsl(var(--foreground))]">Turkana Cultural Village:</strong> Connect with the deep heritage, beadwork, songs, and traditions of the Turkana pastoralists.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[hsl(var(--accent))] mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-[hsl(var(--foreground))]">Lodwar Town & Market:</strong> Wander the lively local bazaars filled with woven baskets, handcrafted wood carvings, and authentic daily life.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[hsl(var(--accent))] mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-[hsl(var(--foreground))]">Namorutunga (The Standing Stones):</strong> Unravel the mysteries of ancient archaeoastronomical basalt pillars dating back over two millennia.
                </div>
              </li>
            </ul>

            {/* Section 4 */}
            <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mt-14 mb-4">
              Pro Tips for a Seamless Turkana Trip
            </h2>
            <span className="gold-rule" />
            <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-6 my-6 space-y-3 text-xs text-[hsl(var(--muted-foreground))] font-light">
              <p>• <strong>Currency & Payments:</strong> Carry cash for remote market excursions, though MPESA and card facilities are accepted at Luxora Hotel.</p>
              <p>• <strong>Hydration & Sun Protection:</strong> Northern Kenya is arid and sunny year-round. Carry mineral hydration, UV protection, hats, and lightweight linen attire.</p>
              <p>• <strong>Advance Reservations:</strong> Due to regular NGO symposiums and corporate travel, reserve your room and airport transfer ahead of time.</p>
              <p>• <strong>Cultural Respect:</strong> Always seek permission before photographing local community members; gracious interactions open heartfelt doors.</p>
            </div>

            {/* Conclusion */}
            <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mt-14 mb-4">
              Why Turkana is Worth It
            </h2>
            <span className="gold-rule" />
            <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
              Turkana is not just another trip; it is an encounter with human origins and raw natural grandeur. And with Luxora Hotel Lodwar as your base of comfort, you will never have to sacrifice rest for the sake of adventure.
            </p>
          </article>

          {/* Article Footer & Booking Callout */}
          <div className="mt-16 pt-12 border-t border-[hsl(var(--border))]">
            <div className="bg-[hsl(var(--card))] border border-[hsl(var(--accent))/0.3] p-10 text-center reveal">
              <p className="text-eyebrow text-[hsl(var(--accent))] mb-3" style={{ letterSpacing: "0.22em" }}>
                Plan Your Journey
              </p>
              <h3 className="font-serif text-2xl md:text-3xl font-light mb-4">
                Ready to Experience Turkana?
              </h3>
              <span className="gold-rule-center" />
              <p className="text-sm text-[hsl(var(--muted-foreground))] max-w-md mx-auto mb-8 font-light">
                Our front desk and concierge team stand ready to reserve your room and assist with regional excursion itineraries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/reservations" className="btn-gold">
                  <span>Reserve Your Stay</span>
                </Link>
                <Link to="/experiences" className="btn-outline">
                  <span>Explore Excursions</span>
                </Link>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
