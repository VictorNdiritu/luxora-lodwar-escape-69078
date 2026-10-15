import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { BLOG_POSTS, BlogPostData } from "./blogData";
import { Calendar, Clock, ArrowLeft, Compass, CheckCircle2 } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();

  const post: BlogPostData | undefined = BLOG_POSTS.find((p) => p.id === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[hsl(var(--background))] flex flex-col justify-between">
        <Header />
        <div className="container mx-auto px-6 py-40 text-center">
          <p className="text-eyebrow text-[hsl(var(--accent))] mb-4">Article Not Found</p>
          <h1 className="text-headline mb-6">Story Archive</h1>
          <Link to="/blog" className="btn-primary">
            <span>Back to The Journal</span>
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
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://luxorahotels.co.ke/blog/${post.id}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
      </Helmet>

      <ScrollReveal />
      <div className="min-h-screen bg-[hsl(var(--background))]">
        <Header />

        {/* Back Link & Header Bar */}
        <section className="pt-32 pb-6 bg-[hsl(var(--card))] border-b border-[hsl(var(--border))]">
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
              {post.category} • Northern Kenya
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

        {/* Hero Image Banner */}
        <div className="container mx-auto px-6 max-w-5xl -mt-6 mb-16 reveal">
          <div className="relative aspect-[21/9] overflow-hidden border border-[hsl(var(--border))] shadow-md">
            <img src={post.image} alt={post.title} className="img-cover" />
          </div>
          <p className="text-right text-[0.65rem] text-[hsl(var(--muted-foreground))] mt-2 font-light">
            {post.imageCaption}
          </p>
        </div>

        {/* Article Content */}
        <main className="container mx-auto px-6 max-w-3xl pb-24">
          <article className="prose-luxury reveal">

            {/* ── ARTICLE 1: TURKANA PACKING & TRAVEL GUIDE ──────────────── */}
            {post.id === "turkana-packing-travel-guide" && (
              <>
                <p className="text-lead text-[hsl(var(--foreground))] font-light leading-relaxed mb-8">
                  Turkana is one of Kenya's most distinctive travel destinations. From the blue-green waters of Lake Turkana to its volcanic landscapes, ancient archaeological sites and rich cultural heritage, the region offers experiences that are quite different from the country's more familiar safari and beach destinations.
                </p>
                <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-8">
                  Travelling to Turkana requires thoughtful preparation. The distances between attractions can be considerable, temperatures can be high, and services become less accessible as you venture away from major towns. Knowing what to pack, what to expect, and how to plan your movements makes all the difference.
                </p>

                <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mt-12 mb-4">
                  1. Understand Where You Are Going
                </h2>
                <span className="gold-rule" />
                <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                  Before packing, establish which parts of Turkana you intend to visit. Turkana County is vast, and the experience varies depending on your destination:
                </p>
                <ul className="space-y-3 mb-8 text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
                  <li><strong className="text-[hsl(var(--foreground))]">Lodwar:</strong> The county headquarters and premier base for arranging accommodation, supplies, transport and excursions.</li>
                  <li><strong className="text-[hsl(var(--foreground))]">Eliye Springs:</strong> Sandy shores and scenic views along the western side of Lake Turkana, ideal for relaxing by the water.</li>
                  <li><strong className="text-[hsl(var(--foreground))]">Kalokol:</strong> A fishing town on the western shore where visitors can learn about the lake's fishing economy and arrange boat trips.</li>
                  <li><strong className="text-[hsl(var(--foreground))]">Central Island National Park:</strong> Volcanic terrain, three distinct crater lakes, birdlife and important crocodile breeding habitats.</li>
                  <li><strong className="text-[hsl(var(--foreground))]">Sibiloi National Park:</strong> World-renowned for its archaeological significance, prehistoric fossils, and remote wilderness.</li>
                </ul>

                <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mt-12 mb-4">
                  2. Clothing: Dress for the Arid Climate
                </h2>
                <span className="gold-rule" />
                <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                  Turkana's hot, arid environment makes lightweight, breathable clothing a sensible choice:
                </p>
                <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-6 my-6 space-y-2 text-xs text-[hsl(var(--muted-foreground))] font-light">
                  <p>• Lightweight cotton or moisture-wicking shirts</p>
                  <p>• Loose-fitting trousers or lightweight hiking pants</p>
                  <p>• Long-sleeved shirts for direct sun protection</p>
                  <p>• Comfortable walking shoes or lightweight hiking boots with tread for rocky terrain</p>
                  <p>• Wide-brimmed safari hat and UV-blocking sunglasses</p>
                  <p>• Light evening layer (temperatures can cool significantly in early morning)</p>
                </div>

                <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mt-12 mb-4">
                  3. Sun Protection, Hydration & Health
                </h2>
                <span className="gold-rule" />
                <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                  Carry sunscreen with broad-spectrum SPF 30 or higher, lip balm with SPF, and a lightweight scarf or buff to protect against wind-borne dust on unpaved roads.
                </p>
                <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-6">
                  Hydration is paramount. Always carry sealed mineral water throughout the day. Do not assume lake water or untreated local sources are drinkable.
                </p>

                <div className="my-10 p-8 border-l-2 border-[hsl(var(--accent))] bg-[hsl(var(--card))]">
                  <p className="font-serif italic text-lg text-[hsl(var(--foreground))] mb-2">
                    "Do not enter Lake Turkana unless an experienced local operator has explicitly confirmed safety. Nile crocodiles inhabit the waters. Always heed local advice."
                  </p>
                  <span className="text-eyebrow text-[hsl(var(--accent))]" style={{ fontSize: "0.55rem" }}>
                    — Turkana Safety Guidelines
                  </span>
                </div>

                <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mt-12 mb-4">
                  4. Base Yourself in Lodwar: Luxora Hotel
                </h2>
                <span className="gold-rule" />
                <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                  Lodwar is the practical launchpad for every northern excursion. If arriving by air, resting for a night at Luxora Hotel Lodwar — located immediately adjacent to Lodwar Airport — gives you time to settle in, organize 4x4 vehicles, and coordinate routes with our concierge.
                </p>
                <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-6">
                  Luxora provides complimentary 24/7 airport transfers, secure luggage storage while you are away on multi-day excursions, and climate-controlled accommodations to recharge.
                </p>
              </>
            )}

            {/* ── ARTICLE 2: EXPLORING TURKANA PLACES TO VISIT ───────────── */}
            {post.id === "exploring-turkana-places-to-visit" && (
              <>
                <p className="text-lead text-[hsl(var(--foreground))] font-light leading-relaxed mb-8">
                  Turkana offers a side of Kenya that many travelers have yet to experience. Its landscapes stretch from the turquoise waters of Lake Turkana to volcanic craters, open plateaus, and ancient archaeological monuments. Its communities have adapted to this arid environment over millennia, creating rich traditions and deep connections to the land.
                </p>

                <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mt-12 mb-4">
                  1. Lake Turkana: The Jade Sea
                </h2>
                <span className="gold-rule" />
                <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                  Known as the Jade Sea, Lake Turkana is the world's largest permanent desert lake and forms part of a UNESCO World Heritage Site. The contrast between its shimmering turquoise expanse and the surrounding volcanic terrain creates scenery that shifts with the light from dawn to twilight.
                </p>
                <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-8">
                  Observe the lake during early morning or sunset hours for extraordinary photography. Take time to learn about the fishing communities whose heritage is intimately entwined with its waters.
                </p>

                <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mt-12 mb-4">
                  2. Eliye Springs: Coastal Calm in the Desert
                </h2>
                <span className="gold-rule" />
                <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                  Situated along the western shore, Eliye Springs offers soft sand beaches, natural freshwater palm springs, and gentle lake breezes. It is an ideal escape from the heat, easily accessible from Lodwar with a private transfer arranged through the hotel.
                </p>

                <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mt-12 mb-4">
                  3. Central Island National Park
                </h2>
                <span className="gold-rule" />
                <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                  Rising from the lake, Central Island features three volcanic crater lakes — Crocodile Lake, Flamingo Lake, and Tilapia Lake. It is an exceptional destination for geological exploration, birdwatching, and observing Nile crocodiles in their ancestral habitat.
                </p>

                <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mt-12 mb-4">
                  4. Ancient Astronomy at Namorutunga
                </h2>
                <span className="gold-rule" />
                <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-6">
                  South of Lodwar lie the Namorutunga standing stones, basalt megalithic pillars thought to date back more than two thousand years. Archaeological studies suggest they served as an early calendar system aligned with specific constellations.
                </p>

                <div className="my-10 p-8 border-l-2 border-[hsl(var(--accent))] bg-[hsl(var(--card))]">
                  <p className="font-serif italic text-lg text-[hsl(var(--foreground))] mb-2">
                    "Lodwar is not merely a transit point — it is where sophistication meets the frontier. Luxora Hotel provides the sanctuary every explorer desires."
                  </p>
                </div>
              </>
            )}

            {/* ── ARTICLE 3: THE ULTIMATE TURKANA ROAD TRIP ──────────────── */}
            {post.id === "turkana-road-trip-guide" && (
              <>
                <p className="text-lead text-[hsl(var(--foreground))] font-light leading-relaxed mb-8">
                  There is something magnetic about Kenya's far north — the endless horizons, raw desert beauty, and the feeling that you have left the world behind. Turkana is not just a destination; it is an adventure that rewires your idea of remote.
                </p>

                <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mt-12 mb-4">
                  Getting There: Overland & Aerial Routes
                </h2>
                <span className="gold-rule" />
                <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                  Overland travelers journey north from Nairobi via Kitale and Kapenguria before descending into the Great Rift Valley toward Lodwar. A high-clearance 4x4 with dual spare tires and ample fuel reserves is recommended.
                </p>
                <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-8">
                  Alternatively, commercial and chartered flights connect Nairobi's Wilson Airport directly to Lodwar Airport in approximately 1 hour and 40 minutes, offering sweeping views of the Rift Valley.
                </p>

                <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mt-12 mb-4">
                  Where to Stay: Luxora Hotel Lodwar
                </h2>
                <span className="gold-rule" />
                <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                  Welcome to Luxora Hotel Lodwar, where modern comfort and northern adventure blend seamlessly. Situated immediately adjacent to Lodwar Airport, Luxora features 36 air-conditioned rooms, fine dining, executive conference facilities, and attentive 24/7 concierge service.
                </p>
              </>
            )}

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
                Our front desk and concierge team stand ready to reserve your room and assist with regional excursion itineraries and airport transfers.
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
