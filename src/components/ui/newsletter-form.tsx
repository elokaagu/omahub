
import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { useToast } from "./use-toast";

interface NewsletterFormProps {
  location?: string;
  className?: string;
}

export function NewsletterForm({ location, className }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank you for subscribing!",
        description: "You're now part of the Oma Hub community.",
      });
      setEmail("");
      setLoading(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-white/80 border-oma-gold/20 focus-visible:ring-oma-gold"
        />
        <Button 
          type="submit" 
          disabled={loading}
          className="bg-oma-plum hover:bg-oma-plum/90"
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </Button>
      </div>
      <p className="text-xs text-muted-foreground mt-2">
        Join our community to discover new designers and collections.
        {location && ` From ${location}.`}
      </p>
    </form>
  );
}
