import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./utils/scrollToTop";
import { PageTransition } from "./components/PageTransition";

import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import RoomDetail from "./pages/RoomDetail";
import Dining from "./pages/Dining";
import Amenities from "./pages/Amenities";
import Gallery from "./pages/Gallery";
import Experiences from "./pages/Experiences";
import MICEPage from "./pages/MICEPage";
import Offers from "./pages/Offers";
import Reservations from "./pages/Reservations";
import Contact from "./pages/Contact";
import Policies from "./pages/Policies";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/rooms/:slug" element={<RoomDetail />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/facilities" element={<Amenities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/mice" element={<MICEPage />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
