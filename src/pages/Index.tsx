import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Rooms } from "@/components/Rooms";
import { Amenities } from "@/components/Amenities";
import { Location } from "@/components/Location";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Rooms />
      <Amenities />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
