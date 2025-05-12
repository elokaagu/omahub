
import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { useToast } from "./use-toast";
import { Card, CardContent } from "./card";
import { Send } from "lucide-react";

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
    
    if (!email) return;
    
    setLoading(true);
    
    // Simulate API call
    try {
      // In production, this would be an API call to your newsletter service
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSuccess(true);
      toast({
        title: "Successfully subscribed",
        description: "Thank you for joining our fashion community.",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      className={`w-full py-16 md:py-20 bg-gradient-to-br from-oma-beige/50 via-oma-cream to-oma-gold/10 ${className}`}
    >
      <div className="container px-4 mx-auto text-center max-w-4xl">
        <h2 className="font-source text-3xl md:text-4xl lg:text-5xl text-oma-plum mb-4 tracking-tight leading-tight">
          Join Our Fashion Community
        </h2>
        
        <p className="text-oma-cocoa/80 mx-auto max-w-2xl mb-8 text-lg">
          Get exclusive previews, designer spotlights, and early access to new collections.
        </p>

        <Card className="max-w-[700px] mx-auto overflow-hidden bg-white/90 backdrop-blur-sm shadow-md border-oma-gold/10">
          <CardContent className="p-8">
            {success ? (
              <div className="bg-oma-beige/30 p-8 rounded-lg text-center">
                <h3 className="text-xl font-medium text-oma-plum mb-2">
                  Thank You for Subscribing
                </h3>
                <p className="text-oma-cocoa/80">
                  Watch your inbox for something beautiful coming your way soon.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="text-left">
                    <h4 className="font-semibold text-oma-plum border-b border-oma-gold/30 pb-2 mb-4">
                      What You'll Get
                    </h4>
                    <ul className="space-y-3 text-oma-cocoa">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-oma-gold mt-2"/>
                        <span>Early access to new collections</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-oma-gold mt-2"/>
                        <span>Exclusive designer interviews</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-oma-gold mt-2"/>
                        <span>Special event invitations</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="text-left">
                    <h4 className="font-semibold text-oma-plum border-b border-oma-gold/30 pb-2 mb-4">
                      Member Benefits
                    </h4>
                    <ul className="space-y-3 text-oma-cocoa">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-oma-gold mt-2"/>
                        <span>VIP access to sales</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-oma-gold mt-2"/>
                        <span>Trend forecasts & style tips</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-oma-gold mt-2"/>
                        <span>Styling consultation invites</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
                  <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white border-oma-gold/20 focus-visible:ring-oma-plum sm:max-w-[300px] sm:flex-grow"
                    />
                    <Button 
                      type="submit" 
                      disabled={loading}
                      className="bg-[#391c25] hover:bg-[#391c25]/90 font-medium rounded-md tracking-wide flex-shrink-0"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 border-2 border-t-transparent border-white/80 animate-spin rounded-full"></span>
                          Subscribing...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Subscribe
                          <Send className="h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </div>
                  <div className="text-xs text-oma-cocoa/70 text-center max-w-md mx-auto">
                    Join our community to discover new designers and collections.
                    <br />
                    <span className="italic">No spam. Just style.</span>
                    {location && <span className="ml-1">From {location}.</span>}
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
