
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeader } from "@/components/ui/section-header";
import { toast } from "sonner";
import Layout from "@/components/layout/Layout";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Your message has been sent successfully");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="container max-w-7xl mx-auto px-6 py-12 md:py-24">
        <SectionHeader
          title="Get in Touch"
          subtitle="Have questions or inquiries? Reach out to our team and we'll get back to you shortly."
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div className="bg-oma-beige p-8 rounded-lg">
            <h3 className="heading-sm mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <label htmlFor="name" className="block text-sm font-medium text-oma-black">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="bg-white border-oma-gold/30 focus-visible:ring-oma-plum"
                />
              </div>
              
              <div className="space-y-3">
                <label htmlFor="email" className="block text-sm font-medium text-oma-black">
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
                  className="bg-white border-oma-gold/30 focus-visible:ring-oma-plum"
                />
              </div>
              
              <div className="space-y-3">
                <label htmlFor="subject" className="block text-sm font-medium text-oma-black">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help you?"
                  className="bg-white border-oma-gold/30 focus-visible:ring-oma-plum"
                />
              </div>
              
              <div className="space-y-3">
                <label htmlFor="message" className="block text-sm font-medium text-oma-black">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Please describe your inquiry in detail..."
                  className="min-h-[150px] bg-white border-oma-gold/30 focus-visible:ring-oma-plum"
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-oma-plum hover:bg-oma-plum/90 text-white"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Information & Map */}
          <div className="space-y-12">
            {/* Contact Information */}
            <div>
              <h3 className="heading-sm mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-oma-beige p-3 rounded-full">
                    <Mail className="h-5 w-5 text-oma-plum" />
                  </div>
                  <div>
                    <p className="font-medium text-oma-black">Email</p>
                    <a href="mailto:contact@omahub.com" className="text-oma-cocoa hover:text-oma-plum expand-underline">
                      contact@omahub.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-oma-beige p-3 rounded-full">
                    <Phone className="h-5 w-5 text-oma-plum" />
                  </div>
                  <div>
                    <p className="font-medium text-oma-black">Phone</p>
                    <a href="tel:+1234567890" className="text-oma-cocoa hover:text-oma-plum expand-underline">
                      +123 456 7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-oma-beige p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-oma-plum" />
                  </div>
                  <div>
                    <p className="font-medium text-oma-black">Address</p>
                    <address className="text-oma-cocoa not-italic">
                      123 Design District<br />
                      Lagos, Nigeria
                    </address>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div>
              <h3 className="heading-sm mb-6">Find Us</h3>
              <div className="relative h-[250px] rounded-lg overflow-hidden bg-oma-beige">
                {/* In a real implementation, you'd replace this with an actual map component */}
                <div className="absolute inset-0 flex items-center justify-center bg-oma-beige/50">
                  <p className="text-oma-black text-center px-6">
                    Interactive map would be displayed here.<br />
                    Consider integrating Google Maps or OpenStreetMap.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about Oma Hub."
            centered
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-oma-gold/20">
              <h4 className="font-source text-xl mb-3">How can designers join Oma Hub?</h4>
              <p className="text-oma-cocoa">
                Designers can apply to join our platform through the "Join the Hub" page. 
                Our curation team reviews each application to ensure the highest quality standards.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-oma-gold/20">
              <h4 className="font-source text-xl mb-3">What regions do you currently cover?</h4>
              <p className="text-oma-cocoa">
                We currently showcase designers from across Africa, with a focus on major design centers 
                including Lagos, Nairobi, Cape Town, Accra, and Dakar.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-oma-gold/20">
              <h4 className="font-source text-xl mb-3">How do I connect with a designer?</h4>
              <p className="text-oma-cocoa">
                Each designer's profile includes a "Contact Designer" button where you can reach out directly. 
                Our team can also help facilitate introductions for special projects.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-oma-gold/20">
              <h4 className="font-source text-xl mb-3">Do you offer shipping for products?</h4>
              <p className="text-oma-cocoa">
                Oma Hub is primarily a discovery and connection platform. Shipping arrangements are made directly 
                between clients and designers after initial introduction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
