
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
    <Card className={`overflow-hidden bg-gradient-to-br from-oma-beige to-oma-beige/70 shadow-md border-oma-gold/10 ${className}`}>
      <CardContent className="p-8 md:p-10">
        <h3 className="font-source text-3xl md:text-4xl text-center mb-4 text-[#2D1F1F] font-semibold tracking-tight">
          Join the Inner Circle
        </h3>
        
        <p className="text-center text-[#6E4F3A] mb-8 max-w-2xl mx-auto">
          Get early access to new drops, exclusive designer interviews, and curated style inspiration—straight to your inbox.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="text-left">
            <h4 className="font-semibold text-[#2D1F1F] mb-3 flex items-center gap-2">
              <span className="text-lg">✨</span> What You'll Get
            </h4>
            <ul className="space-y-2 text-[#6E4F3A]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-oma-gold"/>
                Early access to new collections
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-oma-gold"/>
                Behind-the-scenes stories & lookbooks
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-oma-gold"/>
                Special event invitations & private launches
              </li>
            </ul>
          </div>
          
          <div className="text-left">
            <h4 className="font-semibold text-[#2D1F1F] mb-3 flex items-center gap-2">
              <span className="text-lg">🌟</span> Member Benefits
            </h4>
            <ul className="space-y-2 text-[#6E4F3A]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-oma-gold"/>
                VIP-only discounts
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-oma-gold"/>
                Personal styling Q&A and look guides
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-oma-gold"/>
                Surprise gift drops
              </li>
            </ul>
          </div>
        </div>

        {success ? (
          <div className="bg-oma-beige/80 p-6 rounded-lg text-center">
            <p className="text-xl text-[#2D1F1F] font-medium">
              🎉 You're in! Watch your inbox for something beautiful.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/90 border-[#2D1F1F]/10 focus-visible:ring-[#2D1F1F]"
              />
              <Button 
                type="submit" 
                disabled={loading}
                className="uppercase bg-[#2D1F1F] hover:bg-[#2D1F1F]/90 hover:text-oma-beige font-bold rounded-md tracking-wide"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>
            <div className="text-xs text-[#6E4F3A]/80 mt-3 text-center">
              By subscribing, you agree to receive marketing emails. No spam, just style.
              {location && ` From ${location}.`}
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
