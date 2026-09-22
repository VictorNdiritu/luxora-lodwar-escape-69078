import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Users, Bed } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet";
import { supabase } from "@/integrations/supabase/client";

const Reservations = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    roomType: "",
    guests: "",
    specialRequests: "",
  });

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const { error } = await supabase.from("reservation_requests").insert({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      check_in: formData.checkIn,
      check_out: formData.checkOut,
      room_type: formData.roomType,
      guests: Number(formData.guests),
      special_requests: formData.specialRequests || null,
    });

    // Also deliver the reservation request by email via Formspree
    const formspree = await fetch("https://formspree.io/f/xbgloazd", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: "New reservation request — Luxora Hotel, Lodwar",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        check_in: formData.checkIn,
        check_out: formData.checkOut,
        room_type: formData.roomType,
        guests: formData.guests,
        special_requests: formData.specialRequests,
      }),
    });
    setSubmitting(false);

    if (error && !formspree.ok) {
      toast({
        title: "Reservation not sent",
        description: "Something went wrong. Please call us on +254 110 463 062.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Reservation Request Received!",
      description: "We'll contact you within 24 hours to confirm your reservation.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      roomType: "",
      guests: "",
      specialRequests: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Helmet>
        <title>Reservations | Luxora Hotel, Lodwar</title>
        <meta name="description" content="Reserve your stay at Luxora Hotel, Lodwar. Book Standard Double, Superior Double, or Twin rooms. Easy online reservation with flexible check-in and check-out options." />
        <link rel="canonical" href="https://luxorahotels.co.ke/reservations" />
        <meta property="og:title" content="Make a Reservation | Luxora Hotel, Lodwar" />
        <meta property="og:description" content="Book your room at Luxora Hotel, Lodwar - Premier boutique hotel in Northern Kenya." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen">
        <Header />

        <section className="pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Make a Reservation
                </h1>
                <p className="text-lg text-muted-foreground">
                  Book your stay at Luxora and experience unparalleled luxury in Lodwar
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Guest Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+254 110 463 062"
                        />
                      </div>

                      <div>
                        <label htmlFor="guests" className="block text-sm font-medium text-foreground mb-2">
                          Number of Guests *
                        </label>
                        <div className="relative">
                          <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="guests"
                            name="guests"
                            type="number"
                            min="1"
                            max="4"
                            value={formData.guests}
                            onChange={handleChange}
                            required
                            placeholder="2"
                            className="pl-10"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Booking Details */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Booking Details</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="checkIn" className="block text-sm font-medium text-foreground mb-2">
                          Check-in Date *
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="checkIn"
                            name="checkIn"
                            type="date"
                            value={formData.checkIn}
                            onChange={handleChange}
                            required
                            className="pl-10"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="checkOut" className="block text-sm font-medium text-foreground mb-2">
                          Check-out Date *
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="checkOut"
                            name="checkOut"
                            type="date"
                            value={formData.checkOut}
                            onChange={handleChange}
                            required
                            className="pl-10"
                          />
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="roomType" className="block text-sm font-medium text-foreground mb-2">
                          Room Type *
                        </label>
                        <Select
                          value={formData.roomType}
                          onValueChange={(value) => handleSelectChange("roomType", value)}
                          required
                        >
                          <SelectTrigger className="w-full">
                            <Bed className="h-4 w-4 mr-2" />
                            <SelectValue placeholder="Select a room type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="standard-double">Standard Double Room (14 available)</SelectItem>
                            <SelectItem value="superior-double">Superior Double Room (14 available)</SelectItem>
                            <SelectItem value="twin">Standard Twin Room (8 available)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label htmlFor="specialRequests" className="block text-sm font-medium text-foreground mb-2">
                      Special Requests
                    </label>
                    <Textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      placeholder="Early check-in, late check-out, dietary requirements, etc."
                      rows={4}
                    />
                  </div>

                  {/* Important Information */}
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Important Information</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Standard check-in: 2:00 PM | Check-out: 11:00 AM</li>
                      <li>• Early check-in and late check-out subject to availability</li>
                      <li>• Cancellations must be made 48 hours before arrival</li>
                      <li>• We'll contact you within 24 hours to confirm your reservation</li>
                    </ul>
                  </div>

                  <Button type="submit" variant="luxury" className="w-full" size="lg" disabled={submitting}>
                    {submitting ? "Submitting..." : "Submit Reservation Request"}
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-2">Need help with your reservation?</p>
                <p className="text-foreground font-semibold">Call us: +254 110 463 062</p>
                <p className="text-muted-foreground">Email: info@luxorahotels.co.ke</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Reservations;
