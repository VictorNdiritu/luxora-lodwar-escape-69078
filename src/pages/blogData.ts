import heroImg from "@/assets/newest clear images/lake turkana.jpg";
import eliyeImg from "@/assets/newest clear images/Eliye springs.jpg";
import centralIslandImg from "@/assets/newest clear images/lake turkana central island.jpg";
import villageImg from "@/assets/newest clear images/turkana village.jpg";

export interface BlogPostData {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  image: string;
  imageCaption: string;
}

export const BLOG_POSTS: BlogPostData[] = [
  {
    id: "turkana-packing-travel-guide",
    title: "Travelling to Turkana? Here's What to Pack and Know Before You Go",
    excerpt: "From the turquoise waters of Lake Turkana to volcanic terrain and remote archaeological sites, this comprehensive packing and logistical guide covers climate, gear, health, and transport planning.",
    date: "November 14, 2025",
    readTime: "9 min read",
    category: "Travel Preparation",
    author: "Luxora Concierge Desk",
    image: eliyeImg,
    imageCaption: "Eliye Springs on the western shores of Lake Turkana — peaceful palm-fringed sands.",
  },
  {
    id: "exploring-turkana-places-to-visit",
    title: "Exploring Turkana: Places to Visit and Things to Do in Northern Kenya",
    excerpt: "Discover the defining destinations across Kenya's wild north: Lake Turkana, Eliye Springs, Central Island volcanic crater lakes, Kalokol fishing communities, ancient standing stones, and cultural heritage.",
    date: "November 28, 2025",
    readTime: "11 min read",
    category: "Destination Guide",
    author: "Luxora Concierge Desk",
    image: heroImg,
    imageCaption: "Lake Turkana — The Jade Sea, the world's largest permanent desert lake.",
  },
  {
    id: "turkana-road-trip-guide",
    title: "The Ultimate Turkana Road Trip: An Adventurer's Guide to Kenya's Wild North",
    excerpt: "There is something magnetic about Kenya's far north — endless horizons, raw desert beauty, and the feeling that you have left the world behind. An overland and aerial expedition into an ancient world.",
    date: "October 30, 2025",
    readTime: "8 min read",
    category: "Expedition Guide",
    author: "Luxora Concierge Desk",
    image: centralIslandImg,
    imageCaption: "Central Turkana volcanic plateaus and crater formations along the Rift Valley.",
  },
];
