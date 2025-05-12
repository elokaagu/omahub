
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
        title: "🎉 You're in!",
        description: "Watch your inbox for something beautiful.",
      });
      setEmail("");
      setLoading(false);
    }, 1500);
  };

  return (
    <Card className={`overflow-hidden bg-gradient-to-br from-oma-plum/5 to-oma-beige/80 shadow-lg border-oma-gold/20 ${className}`}>
      <CardContent className="p-8 md:p-12">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-source text-3xl md:text-5xl text-center mb-6 text-oma-plum font-semibold tracking-tight">
            Join the Inner Circle
          </h3>
          
          <p className="text-center text-oma-cocoa mb-10 max-w-2xl mx-auto text-lg">
            Get early access to new drops, exclusive designer interviews, and curated style inspiration—straight to your inbox.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="text-left bg-white/50 backdrop-blur-sm p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold text-oma-plum mb-4 flex items-center gap-2 text-xl">
                <span className="text-xl">✨</span> What You'll Get
              </h4>
              <ul className="space-y-3 text-oma-cocoa">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-oma-gold"/>
                  Early access to new collections
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-oma-gold"/>
                  Behind-the-scenes stories & lookbooks
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-oma-gold"/>
                  Special event invitations & private launches
                </li>
              </ul>
            </div>
            
            <div className="text-left bg-white/50 backdrop-blur-sm p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold text-oma-plum mb-4 flex items-center gap-2 text-xl">
                <span className="text-xl">🌟</span> Member Benefits
              </h4>
              <ul className="space-y-3 text-oma-cocoa">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-oma-gold"/>
                  VIP-only discounts
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-oma-gold"/>
                  Personal styling Q&A and look guides
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-oma-gold"/>
                  Surprise gift drops
                </li>
              </ul>
            </div>
          </div>

          {success ? (
            <div className="bg-white/80 p-8 rounded-lg text-center shadow-inner">
              <p className="text-2xl text-oma-plum font-medium">
                🎉 You're in! Watch your inbox for something beautiful.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-sm">
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white border-oma-gold/30 focus-visible:ring-oma-plum/60"
                />
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="uppercase bg-oma-plum hover:bg-oma-plum/80 hover:text-white font-bold rounded-md tracking-wider px-6"
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>
              <div className="text-xs text-oma-cocoa/80 mt-3 text-center">
                By subscribing, you agree to receive marketing emails. No spam, just style.
                {location && ` From ${location}.`}
              </div>
            </form>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
