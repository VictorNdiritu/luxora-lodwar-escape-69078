import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Received!",
      description: "We'll contact you shortly to confirm your reservation.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to book your stay? Contact us today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">+254 110 463 062</p>
                  <p className="text-muted-foreground">Available 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">info@luxorahotels.co.ke</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground">Adjacent to Lodwar Airport</p>
                  <p className="text-muted-foreground">Lodwar, Turkana County, Kenya</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-muted/30 rounded-lg">
              <h4 className="font-semibold text-foreground mb-3">Check-in & Check-out</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Check-in: 2:00 PM</p>
                <p>Check-out: 11:00 AM</p>
                <p className="text-sm mt-3">
                  Early check-in and late check-out available upon request
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
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
                  Email Address
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
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+254 XXX XXX XXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your booking requirements..."
                  rows={5}
                />
              </div>

              <Button type="submit" variant="luxury" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
