
import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { useToast } from "./use-toast";
import { Card, CardContent } from "./card";

interface NewsletterFormProps {
  location?: string;
  className?: string;
}

export function NewsletterForm({ location, className }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setSuccess(true);
      toast({
        title: "Thank you for subscribing",
        description: "Watch your inbox for something beautiful.",
      });
      setEmail("");
      setLoading(false);
    }, 1500);
  };

  return (
    <section className={`w-full py-16 bg-gradient-to-br from-oma-cream via-oma-beige to-oma-gold/20 ${className}`}>
      <div className="container px-4 mx-auto text-center max-w-4xl">
        <h2 className="font-source text-3xl md:text-4xl text-[#2D1F1F] mb-3 tracking-tight">
          Join Our Fashion Community
        </h2>
        
        <p className="text-oma-cocoa/80 mx-auto max-w-2xl mb-8">
          Get exclusive previews, designer spotlights, and early access to new collections — straight to your inbox.
        </p>

        <Card className="max-w-[700px] mx-auto overflow-hidden bg-white/95 shadow-md border-oma-gold/10">
          <CardContent className="p-8">
            {success ? (
              <div className="bg-oma-beige/50 p-6 rounded-lg text-center">
                <p className="text-xl text-[#2D1F1F] font-medium">
                  Thank you for subscribing. Watch your inbox for something beautiful.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="text-left">
                    <h4 className="font-semibold text-[#2D1F1F] mb-4">
                      What You'll Get
                    </h4>
                    <ul className="space-y-3 text-[#6E4F3A]">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-oma-gold"/>
                        Early access to new collections
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-oma-gold"/>
                        Exclusive designer interviews
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-oma-gold"/>
                        Special event invitations
                      </li>
                    </ul>
                  </div>
                  
                  <div className="text-left">
                    <h4 className="font-semibold text-[#2D1F1F] mb-4">
                      Member Benefits
                    </h4>
                    <ul className="space-y-3 text-[#6E4F3A]">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-oma-gold"/>
                        VIP access to sales
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-oma-gold"/>
                        Trend forecasts & style tips
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-oma-gold"/>
                        Styling consultation invites
                      </li>
                    </ul>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white border-[#2D1F1F]/10 focus-visible:ring-[#2D1F1F] sm:max-w-[300px]"
                    />
                    <Button 
                      type="submit" 
                      disabled={loading}
                      className="bg-[#391c25] hover:bg-[#391c25]/90 font-medium rounded-md tracking-wide"
                    >
                      {loading ? "Subscribing..." : "Subscribe"}
                    </Button>
                  </div>
                  <div className="text-xs text-[#6E4F3A]/70 mt-4 text-center">
                    Join our community to discover new designers and collections.<br />
                    <span className="italic">No spam. Just style.</span>
                    {location && ` From ${location}.`}
                  </div>
                </form>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
