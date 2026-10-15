import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BLOG_POSTS, BlogPostData } from "./blogData";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Compass,
  CheckCircle2,
  ShieldAlert,
  MapPin,
  Luggage,
  Sparkles,
  Phone,
  Sun,
  Camera,
  HeartPulse,
} from "lucide-react";

interface BlogPostProps {
  directSlug?: string;
}

const BlogPost = ({ directSlug }: BlogPostProps) => {
  const { slug: routeSlug } = useParams();
  const rawSlug = directSlug || routeSlug || "";

  // Normalize slug for robust matching (e.g., Blog_1, blog-1, blog_1.md, turkana-packing-travel-guide)
  const clean = (s: string) => (s || "").toLowerCase().replace(/[-_.]/g, "");
  const targetClean = clean(rawSlug);

  const post: BlogPostData | undefined = BLOG_POSTS.find((p) => {
    if (p.id === rawSlug) return true;
    if (clean(p.id) === targetClean) return true;
    if (
      p.aliases &&
      p.aliases.some(
        (a) => clean(a) === targetClean || a.toLowerCase() === rawSlug.toLowerCase()
      )
    ) {
      return true;
    }
    return false;
  });

  if (!post) {
    return (
      <div className="min-h-screen bg-[hsl(var(--background))] flex flex-col justify-between">
        <Header />
        <div className="container mx-auto px-6 py-40 text-center">
          <p className="text-eyebrow text-[hsl(var(--accent))] mb-4">Article Not Found</p>
          <h1 className="font-serif text-3xl md:text-5xl font-light mb-6">The Turkana Journal</h1>
          <p className="text-sm text-[hsl(var(--muted-foreground))] max-w-md mx-auto mb-8 font-light">
            We could not find the specific article you requested. Explore our complete collection of travel guides and regional chronicles below.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/blog" className="btn-gold">
              <span>View All Articles</span>
            </Link>
            <Link to="/blog/turkana-packing-travel-guide" className="btn-outline">
              <span>Packing & Travel Guide</span>
            </Link>
            <Link to="/blog/exploring-turkana-places-to-visit" className="btn-outline">
              <span>Places to Visit in Turkana</span>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Luxora Hotel Lodwar Journal</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://luxorahotels.co.ke/blog/${post.id}`} />
        <meta property="og:title" content={`${post.title} | Luxora Hotel Lodwar`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post.image} />
      </Helmet>

      <div className="min-h-screen bg-[hsl(var(--background))]">
        <Header />

        {/* Back Navigation Bar */}
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

        {/* Article Headline Header */}
        <header className="py-16 bg-[hsl(var(--card))]">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <p
              className="text-eyebrow text-[hsl(var(--accent))] mb-4"
              style={{ letterSpacing: "0.25em" }}
            >
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
        <div className="container mx-auto px-6 max-w-5xl -mt-6 mb-16">
          <div className="relative aspect-[21/9] overflow-hidden border border-[hsl(var(--border))] shadow-md">
            <img src={post.image} alt={post.title} className="img-cover" />
          </div>
          <p className="text-right text-[0.65rem] text-[hsl(var(--muted-foreground))] mt-2 font-light">
            {post.imageCaption}
          </p>
        </div>

        {/* Article Content Container — explicitly rendered with standard opacity */}
        <main className="container mx-auto px-6 max-w-3xl pb-24 text-[hsl(var(--foreground))]">
          <article className="space-y-8 leading-relaxed">

            {/* ════════════════════════════════════════════════════════════════
                ARTICLE 1: TURKANA PACKING & TRAVEL GUIDE
                ════════════════════════════════════════════════════════════════ */}
            {post.id === "turkana-packing-travel-guide" && (
              <>
                <p className="text-lg md:text-xl font-serif text-[hsl(var(--foreground))] font-light leading-relaxed">
                  Turkana is one of Kenya's most distinctive travel destinations. From the blue-green waters of Lake Turkana to its volcanic landscapes, ancient archaeological sites and rich cultural heritage, the region offers experiences that are quite different from the country's more familiar safari and beach destinations.
                </p>

                <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
                  Travelling to Turkana requires thoughtful preparation. The distances between attractions can be considerable, temperatures can be high, and services become less accessible as you venture away from major towns. Knowing what to pack, what to expect, and how to plan your movements can make your journey both effortless and deeply memorable.
                </p>

                <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
                  Whether you are visiting for a weekend, travelling for corporate affairs, or embarking on a long expedition across northern Kenya, this guide covers the essentials to help you prepare.
                </p>

                {/* Section 1 */}
                <div className="pt-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mb-3">
                    1. Understand Where You're Going
                  </h2>
                  <span className="gold-rule" />
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                    Before packing, establish which parts of Turkana you intend to visit. Turkana County is vast, and the experience varies depending on your destination:
                  </p>
                  <div className="space-y-3 bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-6 text-sm text-[hsl(var(--muted-foreground))] font-light">
                    <p><strong className="text-[hsl(var(--foreground))]">Lodwar:</strong> The county headquarters and a practical starting point for arranging accommodation, supplies, transport, and excursions.</p>
                    <p><strong className="text-[hsl(var(--foreground))]">Eliye Springs:</strong> Offers sandy shores and scenic views along the western side of Lake Turkana. A tranquil lakeside retreat.</p>
                    <p><strong className="text-[hsl(var(--foreground))]">Kalokol:</strong> A fishing town on the western shore where visitors can learn about the lake's fishing economy and arrange boat excursions.</p>
                    <p><strong className="text-[hsl(var(--foreground))]">Loiyangalani:</strong> On the southeastern side of Lake Turkana in Marsabit County, offering cultural experiences, desert scenery, and access to the Desert Museum.</p>
                    <p><strong className="text-[hsl(var(--foreground))]">Sibiloi National Park:</strong> World-renowned for its archaeological significance, fossil deposits, and remote wilderness landscapes.</p>
                    <p><strong className="text-[hsl(var(--foreground))]">Central Island National Park:</strong> Features volcanic terrain, active crater lakes, birdlife, and critical crocodile habitats.</p>
                  </div>
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mt-4">
                    These destinations are not all close to one another. A visit to Eliye Springs can easily be planned around a stay in Lodwar, whereas destinations such as Sibiloi and Loiyangalani require extensive multi-day expedition logistics.
                  </p>
                </div>

                {/* Section 2 */}
                <div className="pt-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mb-3">
                    2. Clothing: Dress for the Climate
                  </h2>
                  <span className="gold-rule" />
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                    Turkana's hot, arid environment makes lightweight clothing a sensible choice. Breathable fabrics keep you cool, while clothing that covers your skin provides vital protection from direct equatorial sunlight.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2 text-sm text-[hsl(var(--muted-foreground))] font-light mb-4">
                    <li className="flex items-center gap-2">• Lightweight cotton or moisture-wicking shirts</li>
                    <li className="flex items-center gap-2">• Loose-fitting trousers or lightweight hiking pants</li>
                    <li className="flex items-center gap-2">• Shorts for relaxing at your hotel</li>
                    <li className="flex items-center gap-2">• Long-sleeved shirts for sun protection</li>
                    <li className="flex items-center gap-2">• Comfortable walking shoes or lightweight hiking boots</li>
                    <li className="flex items-center gap-2">• Sandals for relaxing at your accommodation</li>
                    <li className="flex items-center gap-2">• Wide-brimmed safari hat or cap</li>
                    <li className="flex items-center gap-2">• Sunglasses with UV400 protection</li>
                  </ul>
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
                    Although daytime temperatures can reach 35°C+, early mornings and evenings can feel cooler. A light jacket or warm layer is useful, particularly if camping or spending several days outdoors.
                  </p>
                </div>

                {/* Section 3 */}
                <div className="pt-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mb-3">
                    3. Sun Protection and Personal Care
                  </h2>
                  <span className="gold-rule" />
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                    The sun is one of the most important considerations when preparing for Turkana. You may spend hours in exposed landscapes with minimal natural shade.
                  </p>
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                    Carry broad-spectrum sunscreen (SPF 30 or higher), lip balm with SPF, and a lightweight scarf or buff to protect your face against wind-borne dust on unpaved roads.
                  </p>
                  <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-6 text-sm text-[hsl(var(--muted-foreground))] font-light">
                    <p className="font-medium text-[hsl(var(--foreground))] mb-2">Essential Toiletries Kit:</p>
                    <p>• Toothbrush, toothpaste, soap, shampoo, and deodorant</p>
                    <p>• Heavy moisturiser & lip balm (dry air and dust will dehydrate your skin)</p>
                    <p>• Hand sanitiser, wet wipes, and tissues</p>
                    <p>• Insect repellent & personal hygiene products</p>
                    <p>• Quick-drying microfibre towel</p>
                  </div>
                </div>

                {/* Section 4 */}
                <div className="pt-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mb-3">
                    4. Health and First-Aid Essentials
                  </h2>
                  <span className="gold-rule" />
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                    A basic first-aid kit is crucial when visiting remote locations where pharmacies and medical clinics are scarce. Pack adhesive bandages, antiseptic wipes, blister plasters, oral rehydration salts, and all personal prescription medication in original containers.
                  </p>
                  <div className="my-8 p-6 border-l-2 border-[hsl(var(--accent))] bg-[hsl(var(--card))]">
                    <div className="flex items-center gap-2 text-[hsl(var(--accent))] mb-2">
                      <ShieldAlert className="w-5 h-5" />
                      <span className="text-eyebrow" style={{ fontSize: "0.65rem" }}>Safety Notice: Lake Waters</span>
                    </div>
                    <p className="font-serif italic text-[hsl(var(--foreground))] text-base mb-2">
                      "Do not assume that water from Lake Turkana is safe to drink or swim in. Nile crocodiles and other wildlife inhabit the lake. Never swim unless an experienced, qualified operator explicitly confirms the area is safe."
                    </p>
                  </div>
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
                    Hydration requires dedicated focus: carry mineral drinking water constantly and drink regularly. For longer journeys, confirm with your driver how much water to carry.
                  </p>
                </div>

                {/* Section 5 */}
                <div className="pt-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mb-3">
                    5. What to Carry in Your Day Bag
                  </h2>
                  <span className="gold-rule" />
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                    Leave your main luggage secured at Luxora Hotel while you venture out on day excursions. In your lightweight day backpack, keep:
                  </p>
                  <ul className="space-y-2 text-sm text-[hsl(var(--muted-foreground))] font-light">
                    <li>• Sealed drinking water (minimum 2–3 litres per person per excursion)</li>
                    <li>• Sunscreen, UV sunglasses, and wide-brimmed hat</li>
                    <li>• Fully charged smartphone and high-capacity power bank with cables</li>
                    <li>• Kenyan Shilling cash for local crafts, fuel, or rural vendors</li>
                    <li>• Personal identification, permits, and booking confirmations</li>
                    <li>• Basic first-aid items, blister pads, and sanitising wipes</li>
                    <li>• High-energy travel snacks (nuts, dried fruits, energy bars)</li>
                    <li>• Camera or binoculars with dust-resistant protective pouch</li>
                  </ul>
                </div>

                {/* Section 6 */}
                <div className="pt-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mb-3">
                    6. Electronics, Connectivity and Photography
                  </h2>
                  <span className="gold-rule" />
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                    The dramatic play of light across Lake Turkana, volcanic craters, and desert ridges offers exceptional opportunities for landscape photography.
                  </p>
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                    Mobile network signals fluctuate outside Lodwar town. Before departing, download offline maps (Google Maps / Maps.me) and save contact numbers. Carry a sturdy dustproof bag for your lenses and camera body.
                  </p>
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
                    Note on drones: If planning to fly a drone, ensure you have obtained civil aviation authorizations and park permits beforehand.
                  </p>
                </div>

                {/* Section 7 */}
                <div className="pt-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mb-3">
                    7. Food, Water and Snacks
                  </h2>
                  <span className="gold-rule" />
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                    Lodwar offers well-stocked supermarkets and the refined dining kitchen of Luxora Hotel. Outside Lodwar, dining options become limited to local tea shops and modest roadside kiosks.
                  </p>
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
                    Inform your hotel or tour operator in advance if you have specific dietary restrictions. For day trips to Central Island or Eliye Springs, our kitchen can arrange bespoke packed lunches and cold refreshments.
                  </p>
                </div>

                {/* Section 8 */}
                <div className="pt-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mb-3">
                    8. Money, Documents and Bookings
                  </h2>
                  <span className="gold-rule" />
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                    Keep digital and physical copies of your national ID or passport, flight confirmations, and travel insurance details.
                  </p>
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
                    While Luxora Hotel accepts major credit cards and M-Pesa, remote establishments and rural boat captains may not have network access for mobile payments. Keep a modest reserve of physical cash (KES) in small denominations.
                  </p>
                </div>

                {/* Section 9 */}
                <div className="pt-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mb-3">
                    9. Getting Around Turkana
                  </h2>
                  <span className="gold-rule" />
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                    Flights from Nairobi Wilson Airport land at Lodwar Airport in approximately 1 hour and 40 minutes. Overland road trips from Nairobi travel via Kitale and Kapenguria before descending into the Rift Valley.
                  </p>
                  <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-6 text-sm text-[hsl(var(--muted-foreground))] font-light space-y-2">
                    <p className="font-medium text-[hsl(var(--foreground))]">Logistical Checkpoints:</p>
                    <p>• High-clearance 4x4 vehicles are mandatory for desert tracks outside Lodwar.</p>
                    <p>• Sibiloi National Park requires dual spare tyres and traveling in convoy is strongly advised by KWS.</p>
                    <p>• Always verify fuel stops along your route beforehand; Lodwar is the main regional refueling hub.</p>
                    <p>• Build flexible buffer time into your schedule to account for road conditions.</p>
                  </div>
                </div>

                {/* Section 10 */}
                <div className="pt-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mb-3">
                    10. Safety Tips for Your Trip
                  </h2>
                  <span className="gold-rule" />
                  <div className="space-y-4 text-sm text-[hsl(var(--muted-foreground))] font-light">
                    <p><strong className="text-[hsl(var(--foreground))]">Manage the heat:</strong> Drink water regularly, seek shade, and avoid strenuous outdoor trekking between 12:00 PM and 3:30 PM.</p>
                    <p><strong className="text-[hsl(var(--foreground))]">Check local conditions:</strong> Consult the Luxora concierge or local authorities regarding up-to-date road access and weather advisories.</p>
                    <p><strong className="text-[hsl(var(--foreground))]">Respect wildlife:</strong> Maintain distance from lake banks where crocodiles nest; never enter water without a professional guide.</p>
                    <p><strong className="text-[hsl(var(--foreground))]">Preserve the environment:</strong> Carry all non-biodegradable waste back to Lodwar. Leave no trace across delicate desert ecosystems.</p>
                  </div>
                </div>

                {/* Section 11 */}
                <div className="pt-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mb-3">
                    11. Where to Stay Before Exploring: Luxora Hotel Lodwar
                  </h2>
                  <span className="gold-rule" />
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                    Lodwar is the quintessential hub for every northern excursion. Landing at Lodwar Airport and spending your first night at Luxora Hotel Lodwar gives you time to settle in, coordinate with trusted 4x4 operators, and enjoy modern comforts before your journey.
                  </p>
                  <div className="bg-[hsl(var(--card))] border border-[hsl(var(--accent))/0.4] p-6 text-sm text-[hsl(var(--muted-foreground))] font-light">
                    <p className="font-serif text-base text-[hsl(var(--foreground))] mb-2">The Luxora Difference in Lodwar:</p>
                    <p>• Located immediately adjacent to Lodwar Airport (2-minute transit with complimentary 24/7 transfers).</p>
                    <p>• 36 climate-controlled, air-conditioned executive rooms and suites.</p>
                    <p>• Secure complimentary luggage storage while you embark on remote camping or island expeditions.</p>
                    <p>• High-speed fiber Wi-Fi, fine dining, conference halls, and 24-hour reception.</p>
                  </div>
                </div>

                {/* Section 12 */}
                <div className="pt-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mb-3">
                    12. What to Pack for Camping
                  </h2>
                  <span className="gold-rule" />
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                    If camping on the shores of Lake Turkana or Central Island, ensure you bring a high-wind-resistant tent (winds off the lake can be strong), a ground sheet, headlamps, extra batteries, cooking equipment, and adequate water filtration. Always verify in advance what equipment your guide provides.
                  </p>
                </div>

                {/* Section 13 */}
                <div className="pt-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mb-3">
                    13. Must-Haves and Nice-to-Haves
                  </h2>
                  <span className="gold-rule" />
                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-6">
                      <h4 className="font-serif text-lg text-[hsl(var(--foreground))] mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent))]" />
                        Must-Haves
                      </h4>
                      <ul className="space-y-1.5 text-xs text-[hsl(var(--muted-foreground))] font-light">
                        <li>• Drinking water & reusable insulated bottle</li>
                        <li>• Broad-spectrum SPF 30+ sunscreen & sunglasses</li>
                        <li>• Safari hat & breathable lightweight clothing</li>
                        <li>• Comfortable closed walking shoes or boots</li>
                        <li>• Personal medication & first-aid kit</li>
                        <li>• Phone, charging cables & heavy-duty power bank</li>
                        <li>• Cash reserve in Kenyan Shillings (KES)</li>
                        <li>• Offline maps & confirmed bookings</li>
                        <li>• Insect repellent & personal toiletries</li>
                      </ul>
                    </div>
                    <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-6">
                      <h4 className="font-serif text-lg text-[hsl(var(--foreground))] mb-3 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[hsl(var(--accent))]" />
                        Nice-to-Haves
                      </h4>
                      <ul className="space-y-1.5 text-xs text-[hsl(var(--muted-foreground))] font-light">
                        <li>• Compact binoculars for bird & wildlife watching</li>
                        <li>• Mirrorless or DSLR camera with telephoto lens</li>
                        <li>• Tripod for desert night-sky and astrophotography</li>
                        <li>• Lightweight dust buff or shemagh scarf</li>
                        <li>• Travel neck pillow for rough road transfers</li>
                        <li>• Dustproof electronics pouch</li>
                        <li>• Stargazing astronomy app (SkyView/StarWalk)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 14 */}
                <div className="pt-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mb-3">
                    14. A Final Packing Checklist
                  </h2>
                  <span className="gold-rule" />
                  <div className="space-y-3 bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-6 text-sm text-[hsl(var(--muted-foreground))] font-light">
                    {[
                      "Packed clothing suitable for hot, dry weather and cool mornings",
                      "Packed broad-spectrum sun protection, UV glasses, and wide-brim hat",
                      "Organized prescription medication and travel first-aid supplies",
                      "Arranged drinking water and energy snacks for all excursions",
                      "Fully charged mobile devices and high-capacity power bank",
                      "Downloaded offline maps, travel confirmations, and emergency contacts",
                      "Confirmed accommodation and complimentary airport transfers at Luxora Hotel",
                      "Verified 4x4 transport arrangements and current road conditions",
                      "Confirmed guide credentials, KWS park fees, and boat bookings",
                      "Checked airline baggage weight restrictions for flights into Lodwar",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Final Thoughts */}
                <div className="pt-8 border-t border-[hsl(var(--border))]">
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mb-3">
                    Final Thoughts
                  </h2>
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                    Turkana rewards travelers who prepare thoroughly and take the time to appreciate the grandeur of Kenya's frontier. You do not need excessive luggage, but never underestimate the importance of hydration, sun protection, robust transport planning, and dependable supplies.
                  </p>
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
                    Arriving through Lodwar and resting at Luxora Hotel ensures you embark on your journey rested, informed, and equipped. With the right preparation, the Jade Sea, the volcanic terrain, and the proud heritage of northern Kenya will leave an indelible impression.
                  </p>
                </div>
              </>
            )}

            {/* ════════════════════════════════════════════════════════════════
                ARTICLE 2: EXPLORING TURKANA PLACES TO VISIT
                ════════════════════════════════════════════════════════════════ */}
            {post.id === "exploring-turkana-places-to-visit" && (
              <>
                <p className="text-lg md:text-xl font-serif text-[hsl(var(--foreground))] font-light leading-relaxed">
                  Turkana offers a side of Kenya that many travelers have yet to experience. Its landscapes stretch from the turquoise waters of Lake Turkana to volcanic craters, open plateaus, and ancient archaeological monuments. Its communities have adapted to this arid environment over millennia, creating rich traditions and deep connections to the land.
                </p>

                <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
                  Known as the Jade Sea, Lake Turkana is the defining natural wonder of the region. Its extraordinary coloration, geological formations, and ecological importance make it one of the most striking destinations in Africa. Beyond the lake, visitors discover fossil sites, living culture, artisan markets, and horizons untouched by mass tourism.
                </p>

                <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
                  The primary secret to a rewarding journey is realistic itinerary planning. Below are the premier destinations and experiences to build your Turkana expedition around.
                </p>

                {/* Section 1 */}
                <div className="pt-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mb-3">
                    1. Lake Turkana: The Jade Sea
                  </h2>
                  <span className="gold-rule" />
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                    Lake Turkana is the world's largest permanent desert lake and forms part of the UNESCO World Heritage-listed Lake Turkana National Parks. The breathtaking contrast between its shimmering turquoise-green waters and the stark volcanic surroundings shifts with the sunlight from sunrise to twilight.
                  </p>
                  <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-6 text-sm text-[hsl(var(--muted-foreground))] font-light mb-4 space-y-2">
                    <p className="font-medium text-[hsl(var(--foreground))]">Recommended Activities:</p>
                    <p>• Sunrise & sunset photography along designated shoreline viewpoints.</p>
                    <p>• Locally guided excursions to understand the lake's ecological and fishing significance.</p>
                    <p>• Birdwatching: the lake serves as a critical stopover for palearctic migratory waterbirds.</p>
                  </div>
                  <div className="my-6 p-6 border-l-2 border-[hsl(var(--accent))] bg-[hsl(var(--card))]">
                    <p className="font-serif italic text-sm text-[hsl(var(--foreground))]">
                      <strong>Travel Tip:</strong> Do not assume the lake is open for casual swimming. Nile crocodiles and other wildlife inhabit these waters. Always use qualified local operators and heed local guidance.
                    </p>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="pt-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mb-3">
                    2. Eliye Springs: Coastal Calm in the Desert
                  </h2>
                  <span className="gold-rule" />
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                    Situated on the western shore of Lake Turkana, Eliye Springs offers soft sand beaches, natural freshwater palm springs, and cooling lake breezes. It is an ideal escape for travelers seeking time by the water at an unhurried pace.
                  </p>
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                    From Lodwar, Eliye Springs is approximately 65 kilometers by road (roughly 1.5 to 2 hours in a 4x4 vehicle). Visitors can stroll along the palm-fringed shoreline, photograph dramatic sunsets, or enjoy freshly caught local tilapia.
                  </p>
                </div>

                {/* Section 3 */}
                <div className="pt-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mb-3">
                    3. Lodwar: The Gateway to Turkana
                  </h2>
                  <span className="gold-rule" />
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                    Lodwar is the administrative and commercial capital of Turkana County. For every visitor, it provides an indispensable base to rest, gather supplies, coordinate transport, and orient yourself before venturing into the desert.
                  </p>
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                    Explore the town's lively markets, browse hand-woven Turkana baskets, and discover the welcoming warmth of the local community.
                  </p>
                  <div className="bg-[hsl(var(--card))] border border-[hsl(var(--accent))/0.4] p-6 text-sm text-[hsl(var(--muted-foreground))] font-light">
                    <p className="font-serif text-base text-[hsl(var(--foreground))] mb-2">Base Yourself at Luxora Hotel Lodwar:</p>
                    <p>
                      Located immediately adjacent to Lodwar Airport, Luxora Hotel offers refined accommodations, air-conditioned rooms, executive dining, and complimentary airport transfers. Resting here upon arrival enables smooth coordination with trusted regional guides.
                    </p>
                  </div>
                </div>

                {/* Section 4 */}
                <div className="pt-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mb-3">
                    4. Kalokol: Fishing Communities of Lake Turkana
                  </h2>
                  <span className="gold-rule" />
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                    Kalokol is a bustling fishing town on the western shore, roughly 60 kilometers northeast of Lodwar. It offers authentic insight into the lake's fishing economy, boat building, and daily life along the water's edge.
                  </p>
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
                    Kalokol is also the primary departure point for boat expeditions embarking across the open waters toward Central Island National Park.
                  </p>
                </div>

                {/* Section 5 */}
                <div className="pt-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mb-3">
                    5. Central Island National Park: Volcanic Landscapes
                  </h2>
                  <span className="gold-rule" />
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                    Rising majestically from the center of Lake Turkana, Central Island National Park is composed of volcanic cones and craters. It features three distinct crater lakes: <strong>Crocodile Lake</strong>, <strong>Flamingo Lake</strong>, and <strong>Tilapia Lake</strong>.
                  </p>
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                    Central Island holds the world's largest concentration of breeding Nile crocodiles. Exploring its dramatic lunar-like terrain accompanied by Kenya Wildlife Service (KWS) rangers is one of Kenya's most thrilling geological and wildlife adventures.
                  </p>
                  <p className="text-xs text-[hsl(var(--muted-foreground))] font-light italic">
                    Note: Boat crossings depend on wind and wave conditions on the lake. Advance booking and coordination through trusted Lodwar operators is essential.
                  </p>
                </div>

                {/* Section 6 & 7 */}
                <div className="pt-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mb-3">
                    6 & 7. Loiyangalani & The Desert Museum
                  </h2>
                  <span className="gold-rule" />
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                    Situated on the southeastern shore of Lake Turkana in Marsabit County, Loiyangalani combines rugged volcanic landscapes with deep cultural heritage.
                  </p>
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                    The <strong>Loiyangalani Desert Museum</strong>, perched on a hill overlooking the lake, chronicles the culture, customs, and traditional lifestyles of the eight communities living around the basin: Turkana, Samburu, El Molo, Rendille, Gabbra, Pokot, Borana, and Dasanach.
                  </p>
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
                    Loiyangalani also hosts the annual Lake Turkana Cultural Festival, a world-famous celebration of music, dance, and cultural unity.
                  </p>
                </div>

                {/* Section 8 & 9 */}
                <div className="pt-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mb-3">
                    8 & 9. Sibiloi National Park & Koobi Fora
                  </h2>
                  <span className="gold-rule" />
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                    Known as the "Cradle of Humankind," Sibiloi National Park on Lake Turkana's northeastern shore is one of the world's most critical palaeoanthropological regions. At Koobi Fora, groundbreaking hominid fossils including <em>Homo habilis</em> and <em>Australopithecus boisei</em> were unearthed by Dr. Richard Leakey's team.
                  </p>
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
                    Sibiloi is a true wilderness destination. The Kenya Wildlife Service advises high-clearance 4x4 vehicles, satellite navigation, and traveling in convoy with adequate supplies and fuel.
                  </p>
                </div>

                {/* Section 10 & 11 */}
                <div className="pt-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mb-3">
                    10 & 11. Living Culture, Wildlife & Birdwatching
                  </h2>
                  <span className="gold-rule" />
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                    A journey to Turkana is deeply enriched by engaging with its people. The intricate beadwork, neckrings, carved stools (<em>ekicholong</em>), and nomadic traditions reflect resilience and deep harmony with the desert.
                  </p>
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
                    The lake basin also harbors remarkable avian life: over 350 recorded species including African skimmers, flamingos, sacred ibis, and migratory waders.
                  </p>
                </div>

                {/* Section 12 */}
                <div className="pt-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mb-3">
                    12. Photography and Stargazing
                  </h2>
                  <span className="gold-rule" />
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                    Far from light pollution, the Turkana sky at night transforms into an unobstructed planetarium. The Milky Way arches vividly across the horizon, providing astrophotographers with pristine conditions for long-exposure photography.
                  </p>
                </div>

                {/* Section 13 & 14 */}
                <div className="pt-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mb-3">
                    13 & 14. Suggested Itineraries
                  </h2>
                  <span className="gold-rule" />
                  <div className="space-y-4 my-6">
                    <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-6">
                      <h4 className="font-serif text-lg text-[hsl(var(--foreground))] mb-2">
                        Option A: The 3-Day Western Shore Highlights
                      </h4>
                      <p className="text-sm text-[hsl(var(--muted-foreground))] font-light">
                        <strong>Day 1:</strong> Arrive at Lodwar Airport; check into Luxora Hotel; explore Lodwar craft markets.<br />
                        <strong>Day 2:</strong> 4x4 excursion to Eliye Springs; enjoy shoreline lunch, sandy beaches, and sunset; return to Luxora.<br />
                        <strong>Day 3:</strong> Morning breakfast at Luxora Hotel; visit nearby cultural centers; afternoon flight departure.
                      </p>
                    </div>

                    <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-6">
                      <h4 className="font-serif text-lg text-[hsl(var(--foreground))] mb-2">
                        Option B: The 5-Day Western Shore & Central Island Expedition
                      </h4>
                      <p className="text-sm text-[hsl(var(--muted-foreground))] font-light">
                        <strong>Day 1:</strong> Fly into Lodwar; settle at Luxora Hotel; briefing with guide.<br />
                        <strong>Day 2:</strong> Journey to Kalokol; boat crossing to Central Island National Park; crater lakes exploration.<br />
                        <strong>Day 3:</strong> Transfer to Eliye Springs; lakeside relaxation and photography.<br />
                        <strong>Day 4:</strong> Return to Lodwar; visit the ancient Namorutunga megalithic standing stones; celebratory dinner at Luxora.<br />
                        <strong>Day 5:</strong> Leisurely morning breakfast and direct airport transfer for your return flight.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 15 & Final Thoughts */}
                <div className="pt-8 border-t border-[hsl(var(--border))]">
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mb-3">
                    Final Thoughts: Give Turkana Time
                  </h2>
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                    Turkana is far more than a desert outpost; it is a profound journey into ancient landscapes, living heritage, and geological marvels.
                  </p>
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
                    By choosing Lodwar as your central launchpad and Luxora Hotel as your sanctuary, you combine the rugged spirit of an expedition with the comfort and security of a world-class hospitality base.
                  </p>
                </div>
              </>
            )}

            {/* ════════════════════════════════════════════════════════════════
                ARTICLE 3: TURKANA ROAD TRIP GUIDE
                ════════════════════════════════════════════════════════════════ */}
            {post.id === "turkana-road-trip-guide" && (
              <>
                <p className="text-lg md:text-xl font-serif text-[hsl(var(--foreground))] font-light leading-relaxed">
                  There is something magnetic about Kenya's far north — endless horizons, raw desert beauty, and the feeling that you have left the modern world behind. An overland and aerial expedition into an ancient realm.
                </p>

                <div className="pt-6">
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mb-3">
                    Getting There: Overland & Aerial Routes
                  </h2>
                  <span className="gold-rule" />
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                    Overland travelers journey north from Nairobi via Kitale and Kapenguria before descending into the Great Rift Valley toward Lodwar. A high-clearance 4x4 with dual spare tires and ample fuel reserves is recommended.
                  </p>
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-6">
                    Alternatively, commercial and chartered flights connect Nairobi's Wilson Airport directly to Lodwar Airport in approximately 1 hour and 40 minutes, offering sweeping aerial views across the Rift Valley and Lake Turkana.
                  </p>

                  <h2 className="font-serif text-2xl md:text-3xl font-light text-[hsl(var(--foreground))] mb-3">
                    Where to Stay: Luxora Hotel Lodwar
                  </h2>
                  <span className="gold-rule" />
                  <p className="text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
                    Situated immediately adjacent to Lodwar Airport, Luxora Hotel Lodwar features 36 air-conditioned luxury rooms, fine dining, executive conference facilities, and attentive 24/7 concierge assistance to coordinate your northern Kenya expeditions.
                  </p>
                </div>
              </>
            )}

          </article>

          {/* Article Footer & Booking Callout */}
          <div className="mt-16 pt-12 border-t border-[hsl(var(--border))]">
            <div className="bg-[hsl(var(--card))] border border-[hsl(var(--accent))/0.3] p-10 text-center">
              <p
                className="text-eyebrow text-[hsl(var(--accent))] mb-3"
                style={{ letterSpacing: "0.22em" }}
              >
                Plan Your Journey
              </p>
              <h3 className="font-serif text-2xl md:text-3xl font-light mb-4">
                Ready to Experience Turkana?
              </h3>
              <span className="gold-rule-center" />
              <p className="text-sm text-[hsl(var(--muted-foreground))] max-w-md mx-auto mb-8 font-light">
                Our front desk and concierge team stand ready to reserve your room, arrange complimentary airport transfers, and connect you with verified regional guides.
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
