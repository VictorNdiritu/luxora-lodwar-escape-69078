import { Header } from "@/components/Header";
import { Rooms } from "@/components/Rooms";
import { Footer } from "@/components/Footer";

const RoomsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24">
        <Rooms />
      </div>
      <Footer />
    </div>
  );
};

export default RoomsPage;
